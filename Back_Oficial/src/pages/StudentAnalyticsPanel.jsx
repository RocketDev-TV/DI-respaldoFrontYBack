import React, { useState, useEffect, useMemo } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, PieChart, Pie, Cell 
} from 'recharts';
import { fetchUsuarios } from '../services/authApi';
import { fetchAsignaciones } from '../services/contenidoApi';
import { fetchCalificacionesAsignacion, fetchEntregas } from '../services/evaluacionApi';

const StudentAnalyticsPanel = () => {
  const [rawData, setRawData] = useState({ alumnos: [], asignaciones: [], calificaciones: [], entregas: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [grupoActivo, setGrupoActivo] = useState('Todos');

  // 1. EXTRACCIÓN DE DATOS (ETL Pipeline)
  useEffect(() => {
    const cargarDatosMaestros = async () => {
      setLoading(true);
      try {
        // Obtenemos todos los usuarios y filtramos solo alumnos
        const usuariosDb = await fetchUsuarios();
        const alumnosDb = usuariosDb.filter(u => (u.rol || u.tipo || '').toLowerCase() === 'alumno');

        // Hacemos un barrido por los 3 parciales para tener la foto completa del semestre
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
        console.error("Error en ETL:", err);
        setError("No se pudo sincronizar la base de datos para el análisis.");
      } finally {
        setLoading(false);
      }
    };
    cargarDatosMaestros();
  }, []);

  // 2. CÁLCULO DE GRUPOS DINÁMICOS
  const gruposDisponibles = useMemo(() => {
    const grupos = rawData.alumnos.map(a => a.grupo).filter(g => g && g.trim() !== '');
    return ['Todos', ...new Set(grupos)].sort();
  }, [rawData.alumnos]);

  // 3. MOTOR DE INTELIGENCIA DE NEGOCIOS (BI Engine)
  const analytics = useMemo(() => {
    const { alumnos, asignaciones, calificaciones, entregas } = rawData;
    const alumnosFiltrados = grupoActivo === 'Todos' ? alumnos : alumnos.filter(a => a.grupo === grupoActivo);
    
    if (alumnosFiltrados.length === 0) return null;

    // Métricas Base
    let totalEntregasEsperadas = 0;
    let totalEntregasReales = 0;
    let sumaCalificacionesGlobal = 0;
    let totalCalificacionesRegistradas = 0;

    // Estructuras para gráficas
    const distribucionCalif = { '0-59': 0, '60-69': 0, '70-79': 0, '80-89': 0, '90-100': 0 };
    const tendenciaParciales = { 1: { nombre: 'Parcial 1', prom: 0, count: 0 }, 2: { nombre: 'Parcial 2', prom: 0, count: 0 }, 3: { nombre: 'Parcial 3', prom: 0, count: 0 } };
    
    // Perfilado de Alumnos (Leaderboard & Riesgo)
    const perfilAlumnos = alumnosFiltrados.map(alumno => {
      const asignacionesDelAlumno = asignaciones; // Por ahora todos tienen las mismas
      totalEntregasEsperadas += asignacionesDelAlumno.length;

      let entregadasAlumno = 0;
      let sumaCalifAlumno = 0;
      let countCalifAlumno = 0;

      asignacionesDelAlumno.forEach(asig => {
        // Verificar entrega
        const tieneEntrega = entregas.some(e => Number(e.alumnoId) === Number(alumno.id) && Number(e.asignacionId) === Number(asig.id) && e.nombreArchivo);
        if (tieneEntrega) {
          entregadasAlumno++;
          totalEntregasReales++;
        }

        // Verificar calificación
        const califObj = calificaciones.find(c => Number(c.alumnoId) === Number(alumno.id) && Number(c.asignacionId) === Number(asig.id));
        if (califObj && califObj.calificacion !== null && califObj.calificacion !== '') {
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

      // Agrupar en Histograma
      if (countCalifAlumno > 0) {
        if (promedio < 60) distribucionCalif['0-59']++;
        else if (promedio < 70) distribucionCalif['60-69']++;
        else if (promedio < 80) distribucionCalif['70-79']++;
        else if (promedio < 90) distribucionCalif['80-89']++;
        else distribucionCalif['90-100']++;
      }

      return {
        ...alumno,
        promedio: Math.round(promedio * 10) / 10,
        entregadas: entregadasAlumno,
        faltantes,
        tasaEntregas: asignacionesDelAlumno.length > 0 ? (entregadasAlumno / asignacionesDelAlumno.length) : 0
      };
    });

    // Cálculos Finales
    const promedioGeneral = totalCalificacionesRegistradas > 0 ? Math.round((sumaCalificacionesGlobal / totalCalificacionesRegistradas) * 10) / 10 : 0;
    const tasaCumplimiento = totalEntregasEsperadas > 0 ? Math.round((totalEntregasReales / totalEntregasEsperadas) * 100) : 0;

    // Ordenar Listas
    const alumnosRiesgo = perfilAlumnos.filter(a => a.promedio > 0 && a.promedio < 70 || a.tasaEntregas < 0.5).sort((a, b) => a.promedio - b.promedio);
    const topAlumnos = [...perfilAlumnos].filter(a => a.promedio > 0).sort((a, b) => b.promedio - a.promedio).slice(0, 5);

    // Formatear Data para Recharts
    const dataHistograma = Object.keys(distribucionCalif).map(k => ({ rango: k, alumnos: distribucionCalif[k] }));
    const dataTendencia = [1, 2, 3].map(p => ({
      name: tendenciaParciales[p].nombre,
      promedio: tendenciaParciales[p].count > 0 ? Math.round(tendenciaParciales[p].prom / tendenciaParciales[p].count) : 0
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


  // RENDERS CONDICIONALES
  if (loading) return (
    <div className="flex h-[60vh] items-center justify-center">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <i data-lucide="brain-circuit" className="w-12 h-12 text-[#6b2132] animate-bounce"></i>
        <p className="text-sm font-bold text-slate-500 tracking-widest uppercase">Procesando Inteligencia Académica...</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="p-8 bg-red-50 text-red-700 rounded-xl m-6 border border-red-200 flex items-center gap-3">
      <i data-lucide="triangle-alert" className="w-6 h-6"></i>
      <div>
        <h3 className="font-bold">Error de Motor BI</h3>
        <p className="text-sm mt-1">{error}</p>
      </div>
    </div>
  );

  if (!analytics) return (
    <div className="p-12 text-center text-slate-500 bg-white rounded-2xl border border-slate-200 shadow-sm">
      <i data-lucide="users" className="w-12 h-12 mx-auto mb-3 opacity-20"></i>
      <h3 className="font-bold text-lg text-slate-700">Sin datos para analizar</h3>
      <p className="text-sm mt-1">Asegúrate de que existan alumnos registrados en este grupo.</p>
    </div>
  );

  return (
    <div className="space-y-6 max-w-full overflow-x-hidden animate-in fade-in duration-500">
      
      {/* HEADER Y FILTROS DINÁMICOS */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight flex items-center gap-2">
            <i data-lucide="bar-chart-3" className="w-6 h-6 text-[#6b2132]"></i> Analytics Master
          </h2>
          <p className="text-sm text-slate-500 mt-1">Inteligencia y pronóstico de rendimiento estudiantil</p>
        </div> 
        
        <div className="flex bg-slate-100 rounded-xl p-1.5 overflow-x-auto max-w-full shadow-inner border border-slate-200">
          {gruposDisponibles.map((g) => (
            <button
              key={g}
              onClick={() => setGrupoActivo(g)}
              className={`px-5 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
                grupoActivo === g 
                  ? 'bg-white text-[#6b2132] shadow-sm border border-slate-200 scale-105' 
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50'
              }`}
            >
              {g === 'Todos' ? 'Todos los grupos' : `Grupo ${g}`}
            </button>
          ))}
        </div>
      </div>

      {/* TARJETAS DE KPIs (Métricas Ágiles) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between hover:border-[#6b2132]/30 transition-colors">
          <div className="flex justify-between items-start">
            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Matrícula</p>
            <i data-lucide="users" className="w-4 h-4 text-slate-400"></i>
          </div>
          <h3 className="text-4xl font-black text-slate-800 mt-4">{analytics.matricula} <span className="text-sm font-normal text-slate-400">alumnos</span></h3>
        </div>

        <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between hover:border-blue-300 transition-colors">
          <div className="flex justify-between items-start">
            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Promedio Global</p>
            <i data-lucide="graduation-cap" className="w-4 h-4 text-blue-400"></i>
          </div>
          <h3 className="text-4xl font-black text-blue-900 mt-4">{analytics.promedioGeneral} <span className="text-sm font-normal text-blue-400">/ 100</span></h3>
        </div>

        <div className="p-6 rounded-2xl border border-emerald-100 bg-emerald-50/50 shadow-sm flex flex-col justify-between hover:border-emerald-300 transition-colors">
          <div className="flex justify-between items-start">
            <p className="text-xs uppercase tracking-widest text-emerald-600 font-bold">Cumplimiento</p>
            <i data-lucide="check-circle-2" className="w-4 h-4 text-emerald-500"></i>
          </div>
          <h3 className="text-4xl font-black text-emerald-700 mt-4">{analytics.tasaCumplimiento}%</h3>
        </div>

        <div className="p-6 rounded-2xl border border-rose-100 bg-rose-50/50 shadow-sm flex flex-col justify-between hover:border-rose-300 transition-colors">
          <div className="flex justify-between items-start">
            <p className="text-xs uppercase tracking-widest text-rose-600 font-bold">En Riesgo Crítico</p>
            <i data-lucide="siren" className="w-4 h-4 text-rose-500"></i>
          </div>
          <h3 className="text-4xl font-black text-rose-700 mt-4">{analytics.alumnosRiesgo.length} <span className="text-sm font-normal text-rose-400">estudiantes</span></h3>
        </div>
      </div>

      {/* DASHBOARD GRÁFICO (Recharts) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Gráfica 1: Histograma (Campana de Gauss) */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
            <i data-lucide="bar-chart-horizontal" className="w-5 h-5 text-indigo-500"></i>
            Distribución de Calificaciones
          </h3>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={analytics.dataHistograma} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="rango" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} allowDecimals={false} />
                <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                <Bar dataKey="alumnos" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={40} name="Cantidad de Alumnos" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráfica 2: Tendencia de Parciales (Area Chart) */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
            <i data-lucide="trending-up" className="w-5 h-5 text-[#6b2132]"></i>
            Evolución del Promedio
          </h3>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={analytics.dataTendencia} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorProm" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6b2132" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6b2132" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis domain={[0, 100]} axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip contentStyle={{borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                <Area type="monotone" dataKey="promedio" stroke="#6b2132" strokeWidth={3} fillOpacity={1} fill="url(#colorProm)" name="Promedio General" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* TABLAS DE ANÁLISIS DETALLADO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-8">
        
        {/* Tabla: Top 5 Alumnos (Leaderboard) */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
          <div className="p-5 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <i data-lucide="medal" className="w-5 h-5 text-amber-500"></i> Cuadro de Honor
            </h3>
          </div>
          <div className="flex-1 p-0 overflow-x-auto">
            {analytics.topAlumnos.length > 0 ? (
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-slate-100">
                  {analytics.topAlumnos.map((alumno, i) => (
                    <tr key={alumno.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-3 font-medium text-slate-700 flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${i === 0 ? 'bg-amber-100 text-amber-700' : i === 1 ? 'bg-slate-200 text-slate-700' : i === 2 ? 'bg-orange-100 text-orange-800' : 'bg-blue-50 text-blue-600'}`}>
                          {i + 1}
                        </span>
                        {alumno.nombre} {alumno.apellido}
                      </td>
                      <td className="px-5 py-3 text-right">
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

        {/* Tabla: Atención Prioritaria */}
        <div className="bg-white rounded-2xl border border-rose-200 shadow-sm overflow-hidden flex flex-col h-full">
          <div className="p-5 border-b border-rose-100 bg-rose-50 flex justify-between items-center">
            <h3 className="font-bold text-rose-900 flex items-center gap-2">
              <i data-lucide="shield-alert" className="w-5 h-5 text-rose-600"></i> Atención Prioritaria
            </h3>
          </div>
          <div className="flex-1 p-0 overflow-x-auto">
            {analytics.alumnosRiesgo.length > 0 ? (
              <table className="w-full text-left text-sm">
                <thead className="bg-rose-50/50 text-[10px] text-rose-700 uppercase tracking-widest">
                  <tr>
                    <th className="px-5 py-2 font-semibold">Alumno</th>
                    <th className="px-5 py-2 font-semibold text-center">Tareas Faltantes</th>
                    <th className="px-5 py-2 font-semibold text-right">Promedio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-rose-50">
                  {analytics.alumnosRiesgo.map((alumno) => (
                    <tr key={alumno.id} className="hover:bg-rose-50 transition-colors">
                      <td className="px-5 py-3 font-medium text-slate-800">
                        {alumno.nombre} {alumno.apellido}
                        <span className="block text-xs font-normal text-slate-400">{alumno.email}</span>
                      </td>
                      <td className="px-5 py-3 text-center">
                        <span className="bg-red-100 text-red-700 py-1 px-2.5 rounded-full text-xs font-bold">
                          {alumno.faltantes}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-right">
                        <span className="font-black text-rose-600">{alumno.promedio}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="p-12 text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-3">
                  <i data-lucide="check" className="w-6 h-6"></i>
                </div>
                <p className="text-slate-600 font-medium">Ningún alumno en riesgo.</p>
                <p className="text-xs text-slate-400 mt-1">El desempeño académico es excelente.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudentAnalyticsPanel;