import React, { useState, useEffect, useMemo } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, LabelList 
} from 'recharts';
import { 
  BrainCircuit, TriangleAlert, Users, BarChart3, GraduationCap, 
  CheckCircle2, Siren, BarChartHorizontal, TrendingUp, Medal, 
  ShieldAlert, Check 
} from 'lucide-react';

import { fetchUsuarios } from '../services/authApi';
import { fetchAsignaciones } from '../services/contenidoApi';
import { fetchCalificacionesAsignacion, fetchEntregas } from '../services/evaluacionApi';

const StudentAnalyticsPanel = () => {
  const [rawData, setRawData] = useState({ alumnos: [], asignaciones: [], calificaciones: [], entregas: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [grupoActivo, setGrupoActivo] = useState('Todos');

  useEffect(() => {
    const cargarDatosMaestros = async () => {
      setLoading(true);
      try {
        const usuariosDb = await fetchUsuarios();
        const alumnosDb = usuariosDb.filter(u => (u.rol || u.tipo || '').toLowerCase() === 'alumno');

        const promesasAsig = [1, 2, 3].map(p => fetchAsignaciones({ periodo: p }));
        const promesasCalif = [1, 2, 3].map(p => fetchCalificacionesAsignacion({ periodo: p }));
        
        const asignacionesAnidadas = await Promise.all(promesasAsig);
        const calificacionesAnidadas = await Promise.all(promesasCalif);
        const entregasDb = await fetchEntregas();

        setRawData({
          alumnos: alumnosDb,
          asignaciones: asignacionesAnidadas.flat().filter(a => a.activa),
          calificaciones: calificacionesAnidadas.flat(),
          entregas: entregasDb || []
        });
      } catch (err) {
        setError("No se pudo sincronizar la base de datos para el análisis.");
      } finally {
        setLoading(false);
      }
    };
    cargarDatosMaestros();
  }, []);

  const gruposDisponibles = useMemo(() => {
    const grupos = rawData.alumnos.map(a => a.grupo).filter(g => g && g.trim() !== '');
    return ['Todos', ...new Set(grupos)].sort();
  }, [rawData.alumnos]);

  const analytics = useMemo(() => {
    const { alumnos, asignaciones, calificaciones, entregas } = rawData;
    const alumnosFiltrados = grupoActivo === 'Todos' ? alumnos : alumnos.filter(a => a.grupo === grupoActivo);
    
    if (alumnosFiltrados.length === 0) return null;

    let totalEntregasEsperadas = 0;
    let totalEntregasReales = 0;
    let sumaCalificacionesGlobal = 0;
    let totalCalificacionesRegistradas = 0;

    const distribucionCalif = { '0-59': 0, '60-69': 0, '70-79': 0, '80-89': 0, '90-100': 0 };
    const tendenciaParciales = { 1: { nombre: 'Parcial 1', prom: 0, count: 0 }, 2: { nombre: 'Parcial 2', prom: 0, count: 0 }, 3: { nombre: 'Parcial 3', prom: 0, count: 0 } };
    
    const perfilAlumnos = alumnosFiltrados.map(alumno => {
      const asignacionesDelAlumno = asignaciones; 
      totalEntregasEsperadas += asignacionesDelAlumno.length;

      let entregadasAlumno = 0;
      let sumaCalifAlumno = 0;
      let countCalifAlumno = 0;

      asignacionesDelAlumno.forEach(asig => {
        const tieneEntrega = entregas?.some(e => Number(e.alumnoId) === Number(alumno.id) && Number(e.asignacionId) === Number(asig.id) && e.nombreArchivo);
        if (tieneEntrega) {
          entregadasAlumno++;
          totalEntregasReales++;
        }

        const califObj = calificaciones?.find(c => Number(c.alumnoId) === Number(alumno.id) && Number(c.asignacionId) === Number(asig.id));
        if (califObj?.calificacion != null && califObj.calificacion !== '') {
          const valor = Number(califObj.calificacion);
          sumaCalifAlumno += valor;
          countCalifAlumno++;
          sumaCalificacionesGlobal += valor;
          totalCalificacionesRegistradas++;
          tendenciaParciales[asig.periodo].prom += valor;
          tendenciaParciales[asig.periodo].count++;
        }
      });

      const promedio = countCalifAlumno > 0 ? (sumaCalifAlumno / countCalifAlumno) : 0;
      const faltantes = asignacionesDelAlumno.length - entregadasAlumno;

      if (countCalifAlumno > 0) {
        if (promedio < 60) distribucionCalif['0-59']++;
        else if (promedio < 70) distribucionCalif['60-69']++;
        else if (promedio < 80) distribucionCalif['70-79']++;
        else if (promedio < 90) distribucionCalif['80-89']++;
        else distribucionCalif['90-100']++;
      }

      return {
        ...alumno,
        promedio: Math.round(promedio),
        entregadas: entregadasAlumno,
        faltantes,
        tasaEntregas: asignacionesDelAlumno.length > 0 ? (entregadasAlumno / asignacionesDelAlumno.length) : 0
      };
    });

    const promedioGeneral = totalCalificacionesRegistradas > 0 ? Math.round(sumaCalificacionesGlobal / totalCalificacionesRegistradas) : 0;
    const tasaCumplimiento = totalEntregasEsperadas > 0 ? Math.round((totalEntregasReales / totalEntregasEsperadas) * 100) : 0;

    const alumnosRiesgo = perfilAlumnos.filter(a => a.promedio > 0 && (a.promedio < 70 || a.tasaEntregas < 0.5)).sort((a, b) => a.promedio - b.promedio);
    const topAlumnos = [...perfilAlumnos].filter(a => a.promedio > 0).sort((a, b) => b.promedio - a.promedio).slice(0, 5);

    const dataHistograma = Object.keys(distribucionCalif).map(k => ({ rango: k, alumnos: distribucionCalif[k] }));
    
    const dataTendencia = [1, 2, 3].map(p => ({
      name: tendenciaParciales[p].nombre,
      promedio: tendenciaParciales[p].count > 0 ? Math.round(tendenciaParciales[p].prom / tendenciaParciales[p].count) : null
    }));

    return {
      matricula: alumnosFiltrados.length,
      promedioGeneral,
      tasaCumplimiento,
      alumnosRiesgo,
      topAlumnos,
      dataHistograma,
      dataTendencia
    };
  }, [rawData, grupoActivo]);


  if (loading) return (
    <div className="flex h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <BrainCircuit className="w-12 h-12 text-[#6b2132] animate-pulse" />
        <p className="text-xs font-bold text-slate-400 tracking-widest uppercase">Procesando Inteligencia Académica...</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="p-6 bg-red-50 text-red-700 rounded-2xl m-6 border border-red-100 flex items-center gap-4">
      <TriangleAlert className="w-8 h-8" />
      <div>
        <h3 className="font-bold">Error de Motor BI</h3>
        <p className="text-sm mt-1">{error}</p>
      </div>
    </div>
  );

  if (!analytics) return (
    <div className="p-16 text-center text-slate-500 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center">
      <Users className="w-16 h-16 mb-4 text-slate-200" />
      <h3 className="font-bold text-lg text-slate-700">Sin datos para analizar</h3>
      <p className="text-sm mt-1">Asegúrate de que existan alumnos registrados en este grupo.</p>
    </div>
  );

  return (
    <div className="space-y-8 max-w-full overflow-x-hidden p-2 md:p-6 bg-slate-50/50 min-h-screen">
      
      {/* HEADER Y FILTROS DINÁMICOS */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-[#6b2132]" /> Analytics Master
          </h2>
          <p className="text-sm text-slate-500 mt-1">Inteligencia y pronóstico de rendimiento estudiantil</p>
        </div> 
        
        <div className="flex bg-white rounded-xl p-1 shadow-sm border border-slate-200">
          {gruposDisponibles.map((g) => (
            <button
              key={g}
              onClick={() => setGrupoActivo(g)}
              className={`px-5 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
                grupoActivo === g 
                  ? 'bg-slate-900 text-white shadow-sm' 
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
              }`}
            >
              {g === 'Todos' ? 'Todos los grupos' : `Grupo ${g}`}
            </button>
          ))}
        </div>
      </div>

      {/* TARJETAS DE KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between hover:border-slate-300 transition-colors">
          <div className="flex justify-between items-start">
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Matrícula</p>
            <Users className="w-4 h-4 text-slate-300" />
          </div>
          <h3 className="text-4xl font-black text-slate-800 mt-4">{analytics.matricula} <span className="text-sm font-normal text-slate-400">alumnos</span></h3>
        </div>

        <div className="p-6 rounded-2xl border border-blue-100 bg-blue-50/30 shadow-sm flex flex-col justify-between hover:border-blue-200 transition-colors">
          <div className="flex justify-between items-start">
            <p className="text-[10px] uppercase tracking-widest text-blue-500 font-bold">Promedio Global</p>
            <GraduationCap className="w-4 h-4 text-blue-300" />
          </div>
          <h3 className="text-4xl font-black text-blue-900 mt-4">{analytics.promedioGeneral}</h3>
        </div>

        <div className="p-6 rounded-2xl border border-emerald-100 bg-emerald-50/30 shadow-sm flex flex-col justify-between hover:border-emerald-200 transition-colors">
          <div className="flex justify-between items-start">
            <p className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold">Cumplimiento</p>
            <CheckCircle2 className="w-4 h-4 text-emerald-300" />
          </div>
          <h3 className="text-4xl font-black text-emerald-700 mt-4">{analytics.tasaCumplimiento}%</h3>
        </div>

        <div className="p-6 rounded-2xl border border-rose-100 bg-rose-50/30 shadow-sm flex flex-col justify-between hover:border-rose-200 transition-colors">
          <div className="flex justify-between items-start">
            <p className="text-[10px] uppercase tracking-widest text-rose-500 font-bold">En Riesgo</p>
            <Siren className="w-4 h-4 text-rose-300" />
          </div>
          <h3 className="text-4xl font-black text-rose-700 mt-4">{analytics.alumnosRiesgo.length} <span className="text-sm font-normal text-rose-400">alumnos</span></h3>
        </div>
      </div>

      {/* DASHBOARD GRÁFICO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Gráfica 1: Histograma */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2 text-sm uppercase tracking-wide">
            <BarChartHorizontal className="w-4 h-4 text-indigo-500" />
            Distribución de Calificaciones
          </h3>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={analytics.dataHistograma} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="rango" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11}} allowDecimals={false} />
                <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                <Bar dataKey="alumnos" fill="#6366f1" radius={[6, 6, 0, 0]} barSize={45} name="Alumnos" background={{ fill: '#f1f5f9', radius: [6, 6, 0, 0] }}>
                  <LabelList dataKey="alumnos" position="top" fill="#64748b" fontSize={11} fontWeight="bold" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráfica 2: Tendencia de Parciales CORREGIDA (LineChart) */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2 text-sm uppercase tracking-wide">
            <TrendingUp className="w-4 h-4 text-[#6b2132]" />
            Evolución del Promedio
          </h3>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={analytics.dataTendencia} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11}} />
                <YAxis domain={[0, 100]} axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11}} />
                <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                <Line 
                  type="monotone" 
                  dataKey="promedio" 
                  stroke="#6b2132" 
                  strokeWidth={3} 
                  dot={{ r: 5, strokeWidth: 2, fill: "#fff" }} 
                  activeDot={{ r: 7, stroke: '#6b2132', strokeWidth: 2 }} 
                  name="Promedio" 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* TABLAS DE ANÁLISIS DETALLADO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-8">
        
        {/* Tabla: Top 5 */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="px-6 py-5 border-b border-slate-100 flex items-center gap-2">
            <Medal className="w-5 h-5 text-amber-500" />
            <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wide">Líderes de Rendimiento</h3>
          </div>
          <div className="flex-1 p-0 overflow-x-auto">
            {analytics.topAlumnos.length > 0 ? (
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-slate-50">
                  {analytics.topAlumnos.map((alumno, i) => (
                    <tr key={alumno.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 flex items-center gap-4">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${i === 0 ? 'bg-amber-100 text-amber-700' : i === 1 ? 'bg-slate-200 text-slate-700' : i === 2 ? 'bg-orange-100 text-orange-800' : 'bg-blue-50 text-blue-600'}`}>
                          {i + 1}
                        </span>
                        <div>
                          <p className="font-semibold text-slate-800">{alumno.nombre} {alumno.apellido}</p>
                          <p className="text-[10px] text-slate-400 mt-0.5">Grupo {alumno.grupo}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="font-black text-lg text-slate-800">{alumno.promedio}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="p-8 text-center text-slate-400 text-sm">Aún no hay calificaciones registradas.</div>
            )}
          </div>
        </div>

        {/* Tabla: Riesgo Crítico (Diseño neutral minimalista) */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="px-6 py-5 border-b border-slate-100 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-orange-500" />
            <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wide">Atención Prioritaria</h3>
          </div>
          <div className="flex-1 p-0 overflow-x-auto">
            {analytics.alumnosRiesgo.length > 0 ? (
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-[10px] text-slate-500 uppercase tracking-widest border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-3 font-semibold">Alumno</th>
                    <th className="px-6 py-3 font-semibold text-center">Faltantes</th>
                    <th className="px-6 py-3 font-semibold text-right">Promedio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {analytics.alumnosRiesgo.map((alumno) => (
                    <tr key={alumno.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-semibold text-slate-800">{alumno.nombre} {alumno.apellido}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">Grupo {alumno.grupo}</p>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="bg-orange-50 text-orange-600 py-1 px-3 rounded-full text-xs font-bold border border-orange-100">
                          {alumno.faltantes}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="font-black text-slate-800">{alumno.promedio}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="p-12 text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <p className="text-slate-700 font-bold">Sin alertas de riesgo.</p>
                <p className="text-sm text-slate-400 mt-1">El desempeño del grupo es óptimo.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudentAnalyticsPanel;