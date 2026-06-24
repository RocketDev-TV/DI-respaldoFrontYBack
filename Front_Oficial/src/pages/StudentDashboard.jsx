import React from 'react';
import ChecklistPartial from '../components/ChecklistPartial';
import QuizPlayer from '../components/QuizPlayer';
import { cerrarSesion } from '../utils/localStorage';
import { fetchAsignaciones } from '../services/contenidoApi';
import { fetchEntregas } from '../services/evaluacionApi';
import { fetchCuestionarios, fetchEvaluacionesCuestionario } from '../services/cuestionarioApi';

function buildChecklist(parcial, asignaciones) {
  return {
    parcial,
    nombre: `Parcial ${parcial}`,
    descripcion: 'Asignaciones dinámicas publicadas por moderación y administración.',
    actividades: asignaciones.map((asignacion) => ({
      id: asignacion.id,
      nombre: asignacion.titulo,
      porcentaje: asignacion.porcentaje,
      entregable: asignacion.entregable,
      descripcion: asignacion.descripcion,
      rubrica: asignacion.rubrica,
      videos: asignacion.videos || [],
      archivoRespuestas: asignacion.archivoRespuestas,
      nombreArchivoRespuestas: asignacion.nombreArchivoRespuestas,
      mimeTypeRespuestas: asignacion.mimeTypeRespuestas,
    })),
  };
}

const StudentDashboard = ({ usuario, onNavigate, onLogout }) => {
  const [parcialActivo, setParcialActivo] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [asignaciones, setAsignaciones] = React.useState([]);
  const [entregas, setEntregas] = React.useState([]);
  const [cuestionarios, setCuestionarios] = React.useState([]);
  const [misEvaluaciones, setMisEvaluaciones] = React.useState([]);
  const [cuestionarioActivo, setCuestionarioActivo] = React.useState(null);

  const cargarAsignaciones = React.useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const [asignacionesData, entregasData] = await Promise.all([
        fetchAsignaciones({
          periodo: parcialActivo,
          grupo: usuario?.grupo || undefined,
        }),
        fetchEntregas({
          parcial: parcialActivo,
          grupo: usuario?.grupo || undefined,
          alumnoId: usuario?.id,
        }),
      ]);
      setAsignaciones(asignacionesData.filter((item) => item.activa));
      setEntregas(entregasData);
    } catch (loadError) {
      setError(loadError.message || 'No fue posible cargar tus asignaciones.');
    } finally {
      setLoading(false);
    }
  }, [parcialActivo, usuario?.grupo, usuario?.id]);

  React.useEffect(() => {
    cargarAsignaciones();
  }, [cargarAsignaciones]);

  React.useEffect(() => {
    if (!usuario?.id) return;
    Promise.all([
      fetchCuestionarios(),
      fetchEvaluacionesCuestionario({ alumnoId: usuario.id }),
    ])
      .then(([quizzes, evals]) => {
        setCuestionarios(quizzes);
        setMisEvaluaciones(evals);
      })
      .catch(() => {});
  }, [usuario?.id]);

  // Efecto crucial para renderizar los iconos globales (i) cuando cambia la vista responsiva
  React.useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [parcialActivo, asignaciones]);

  const handleCerrarSesion = () => {
    cerrarSesion();
    if (onLogout) onLogout();
    if (onNavigate) onNavigate('Inicio');
  };

  const checklist = buildChecklist(parcialActivo, asignaciones);

  return (
    <div className="max-w-6xl mx-auto fade-in p-4 md:p-0">
      {/* Contenedor del Banner con ajuste responsivo */}
      <div className="bg-gradient-to-r from-[#6b2132] to-[#1f4f46] text-white p-6 md:p-8 rounded-xl mb-8 shadow-lg">
        {/* Cambia a flex-col en móviles y flex-row en pantallas sm o superiores */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Panel del alumno</h1>
            <p className="text-lg opacity-90">
              {usuario?.nombre} {usuario?.apellido}
            </p>
            <div className="flex flex-wrap gap-4 mt-3 text-sm">
              <span className="flex items-center gap-2">
                <i data-lucide="mail" className="w-4 h-4"></i>
                {usuario?.email}
              </span>
              <span className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                <i data-lucide="users" className="w-4 h-4"></i>
                Grupo: {usuario?.grupo}
              </span>
            </div>
          </div>
          
          {/* Botonera con flex-wrap y anchos responsivos para evitar que se desborde horizontalmente */}
          <div className="flex flex-wrap sm:flex-nowrap gap-3 w-full sm:w-auto mt-2 sm:mt-0">
            <button
              onClick={() => onNavigate('Editar Perfil')}
              className="flex-1 sm:flex-none bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition flex items-center justify-center gap-2 font-medium whitespace-nowrap"
            >
              <i data-lucide="user-cog" className="w-4 h-4"></i>
              Editar Perfil
            </button>
            <button
              onClick={handleCerrarSesion}
              className="flex-1 sm:flex-none bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition text-center whitespace-nowrap font-medium"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>

      {/* Pestañas de los Parciales con overflow-x-auto por seguridad en móviles */}
      <div className="mb-8">
        <div className="flex gap-4 border-b border-gray-200 overflow-x-auto pb-1">
          {[1, 2, 3].map((parcial) => (
            <button
              key={parcial}
              onClick={() => setParcialActivo(parcial)}
              className={`px-6 py-3 font-semibold transition-all border-b-4 whitespace-nowrap ${
                parcialActivo === parcial
                  ? 'border-[#6b2132] text-[#6b2132]'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              Parcial {parcial}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{checklist.nombre}</h2>
          <p className="text-gray-600">{checklist.descripcion}</p>
        </div>

        {loading ? (
          <p className="text-sm text-gray-500">Cargando asignaciones...</p>
        ) : error ? (
          <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
        ) : (
          <ChecklistPartial
            checklist={checklist}
            parcial={parcialActivo}
            grupo={usuario?.grupo}
            estudianteId={usuario?.id}
            entregas={entregas}
            onArchivoSubido={cargarAsignaciones}
          />
        )}
      </div>

      {/* Sección de Cuestionarios */}
      {cuestionarios.length > 0 && (
        <div className="mt-8 bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 mb-1">Cuestionarios disponibles</h2>
          <p className="text-sm text-gray-500 mb-5">Contesta los cuestionarios asignados por tu profesor.</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {cuestionarios.map((q) => {
              const evaluacion = misEvaluaciones.find((e) => e.cuestionarioId === q.id);
              const aprobado = evaluacion && evaluacion.calificacionFinal >= 60;
              return (
                <div
                  key={q.id}
                  className={`flex items-center justify-between gap-4 border rounded-xl p-4 transition ${
                    evaluacion ? 'border-gray-200 bg-gray-50' : 'border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/30'
                  }`}
                >
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-800 text-sm truncate">{q.titulo}</p>
                    {q.descripcion && (
                      <p className="text-xs text-gray-500 mt-0.5 truncate">{q.descripcion}</p>
                    )}
                    {evaluacion ? (
                      <div className="mt-1 flex items-center gap-2">
                        <span className={`text-xs font-bold ${aprobado ? 'text-green-600' : 'text-red-500'}`}>
                          {evaluacion.calificacionFinal}/100
                        </span>
                        {evaluacion.pendienteRevision && (
                          <span className="text-xs bg-amber-100 text-amber-700 rounded-full px-2 py-0.5">Revisión pendiente</span>
                        )}
                        {!evaluacion.pendienteRevision && (
                          <span className={`text-xs rounded-full px-2 py-0.5 ${aprobado ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
                            {aprobado ? 'Aprobado' : 'Reprobado'}
                          </span>
                        )}
                      </div>
                    ) : (
                      <p className="text-xs text-indigo-500 mt-1">{q.preguntas?.length ?? 0} pregunta(s)</p>
                    )}
                  </div>
                  {evaluacion ? (
                    <span className="shrink-0 text-xs text-gray-400 font-medium bg-gray-100 px-3 py-1.5 rounded-lg">
                      Ya contestado
                    </span>
                  ) : (
                    <button
                      onClick={() => setCuestionarioActivo(q.id)}
                      className="shrink-0 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition"
                    >
                      Contestar
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Modal QuizPlayer */}
      {cuestionarioActivo && (
        <div
          className="fixed inset-0 bg-black/40 z-40 overflow-y-auto"
          onClick={(e) => e.target === e.currentTarget && setCuestionarioActivo(null)}
        >
          <div className="min-h-full flex items-start justify-center py-8 px-4">
            <div className="bg-gray-50 rounded-2xl w-full max-w-2xl relative shadow-2xl">
              <button
                onClick={() => setCuestionarioActivo(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold z-10"
              >
                ✕
              </button>
              <QuizPlayer
                cuestionarioId={cuestionarioActivo}
                alumnoId={usuario?.id}
                onComplete={() => {
                  setCuestionarioActivo(null);
                  // Refrescar evaluaciones para mostrar el nuevo estado
                  if (usuario?.id) {
                    fetchEvaluacionesCuestionario({ alumnoId: usuario.id })
                      .then(setMisEvaluaciones)
                      .catch(() => {});
                  }
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;