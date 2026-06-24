import { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Loader2, Trophy, Clock, AlertCircle } from 'lucide-react';
import {
  fetchCuestionario,
  registrarEvaluacionCuestionario,
  registrarRespuestaAbierta,
  fetchEvaluacionesCuestionario,
} from '../services/cuestionarioApi';
import { obtenerSesionAuth } from '../utils/localStorage';

const MULTIPLE = 'MULTIPLE';

export default function QuizPlayer({ cuestionarioId, alumnoId: alumnoIdProp, onComplete }) {
  // Fallback: si el padre no pasó alumnoId, lo obtenemos de la sesión
  const alumnoId = alumnoIdProp ?? obtenerSesionAuth()?.usuario?.id;
  const [cuestionario, setCuestionario] = useState(null);
  const [evaluacionPrevia, setEvaluacionPrevia] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [respuestas, setRespuestas] = useState({});
  const [enviando, setEnviando] = useState(false);
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    if (!cuestionarioId) return;
    setCargando(true);

    Promise.all([
      fetchCuestionario(cuestionarioId),
      alumnoId ? fetchEvaluacionesCuestionario({ alumnoId, cuestionarioId }) : Promise.resolve([]),
    ])
      .then(([quiz, evals]) => {
        setCuestionario(quiz);
        if (evals.length > 0) setEvaluacionPrevia(evals[0]);
      })
      .catch((e) => setError(e.message))
      .finally(() => setCargando(false));
  }, [cuestionarioId, alumnoId]);

  function responder(preguntaId, valor) {
    setRespuestas((prev) => ({ ...prev, [preguntaId]: valor }));
  }

  async function handleEnviar() {
    if (!cuestionario) return;

    const sinResponder = cuestionario.preguntas.filter(
      (p) => respuestas[p.id] === undefined || respuestas[p.id] === '',
    );
    if (sinResponder.length > 0) {
      setError(`Faltan ${sinResponder.length} pregunta(s) por responder.`);
      return;
    }
    setError(null);

    // Calcular puntos — la calificación inicial se basa en preguntas MULTIPLE solamente.
    // Las preguntas ABIERTA no se califican aquí; el profesor las revisa después.
    let puntosObtenidos = 0;
    let puntosMaximos = 0;
    let tieneAbiertas = false;
    const detalle = cuestionario.preguntas.map((p) => {
      puntosMaximos += p.puntos;
      if (p.tipo === MULTIPLE) {
        const correctaId = p.opciones.find((o) => o.esCorrecta)?.id;
        const acierto = Number(respuestas[p.id]) === correctaId;
        if (acierto) puntosObtenidos += p.puntos;
        return { pregunta: p, acierto, correctaId };
      }
      tieneAbiertas = true;
      return { pregunta: p, acierto: null };
    });

    const puntosMaxMultiple = cuestionario.preguntas
      .filter((p) => p.tipo === MULTIPLE)
      .reduce((acc, p) => acc + p.puntos, 0);

    // Si NO hay preguntas de opción múltiple, la calificación inicial es 0
    // (todo depende de la revisión del profesor)
    const calificacion = puntosMaximos > 0
      ? Math.round((puntosObtenidos / puntosMaximos) * 100 * 10) / 10
      : 0;

    try {
      setEnviando(true);

      const evaluacion = await registrarEvaluacionCuestionario({
        alumnoId,
        cuestionarioId: cuestionario.id,
        calificacionFinal: calificacion,
        pendienteRevision: tieneAbiertas,
      });

      // Guardar respuestas abiertas para revisión del profesor
      if (tieneAbiertas && alumnoId) {
        const preguntasAbiertas = cuestionario.preguntas.filter((p) => p.tipo !== MULTIPLE);
        const resultados = await Promise.allSettled(
          preguntasAbiertas.map((p) =>
            registrarRespuestaAbierta({
              alumnoId: Number(alumnoId),
              cuestionarioId: Number(cuestionario.id),
              preguntaId: Number(p.id),
              texto: String(respuestas[p.id] ?? ''),
            }),
          ),
        );
        // Si alguna falla, lo reportamos (no bloquea el resultado)
        const fallidas = resultados.filter((r) => r.status === 'rejected');
        if (fallidas.length > 0) {
          console.error('Algunas respuestas abiertas no se guardaron:', fallidas.map((r) => r.reason));
        }
      }

      setResultado({ calificacion, puntosObtenidos, puntosMaximos, puntosMaxMultiple, tieneAbiertas, detalle, pendienteRevision: tieneAbiertas });
    } catch (e) {
      setError(e.message);
    } finally {
      setEnviando(false);
    }
  }

  /* ── Carga ── */
  if (cargando)
    return (
      <div className="flex justify-center items-center py-20 text-indigo-500">
        <Loader2 size={32} className="animate-spin" />
      </div>
    );

  if (error && !cuestionario)
    return <div className="text-center py-20 text-red-500 text-sm">{error}</div>;

  /* ── Ya contestado ── */
  if (evaluacionPrevia && !resultado) {
    const aprobado = evaluacionPrevia.calificacionFinal >= 60;
    return (
      <div className="max-w-lg mx-auto px-4 py-10 text-center space-y-4">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${aprobado ? 'bg-green-100' : 'bg-red-100'}`}>
          {aprobado ? <CheckCircle size={32} className="text-green-500" /> : <XCircle size={32} className="text-red-500" />}
        </div>
        <h2 className="text-xl font-bold text-gray-800">Ya contestaste este cuestionario</h2>
        <p className="text-gray-500 text-sm">Solo se permite un intento por cuestionario.</p>
        <div className={`inline-block rounded-2xl px-8 py-4 ${aprobado ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          <p className="text-xs text-gray-500 mb-1">Tu calificación final</p>
          <p className={`text-5xl font-extrabold ${aprobado ? 'text-green-600' : 'text-red-500'}`}>
            {evaluacionPrevia.calificacionFinal}
            <span className="text-xl font-semibold">/100</span>
          </p>
        </div>
        {evaluacionPrevia.pendienteRevision && (
          <div className="flex items-center gap-2 justify-center text-amber-600 text-sm bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
            <Clock size={16} /> Tu calificación puede aumentar — el profesor revisará tus respuestas abiertas.
          </div>
        )}
      </div>
    );
  }

  /* ── Modal resultado ── */
  if (resultado) {
    const soloAbiertas = resultado.puntosMaxMultiple === 0 && resultado.tieneAbiertas;
    const aprobado = resultado.calificacion >= 60;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden">

          {/* Header: diferente si el quiz es solo-abierto */}
          {soloAbiertas ? (
            <div className="px-8 py-8 text-center bg-gradient-to-br from-amber-400 to-orange-500">
              <Clock size={48} className="mx-auto text-white/80 mb-3" />
              <p className="text-white/80 text-sm font-medium mb-1">Respuestas enviadas</p>
              <p className="text-3xl font-extrabold text-white">En revisión</p>
              <p className="text-white/70 text-sm mt-2">
                El profesor revisará tus respuestas y asignará tu calificación
              </p>
            </div>
          ) : (
            <div className={`px-8 py-8 text-center ${aprobado ? 'bg-gradient-to-br from-indigo-500 to-purple-600' : 'bg-gradient-to-br from-orange-400 to-red-500'}`}>
              <Trophy size={48} className="mx-auto text-white/80 mb-3" />
              <p className="text-white/80 text-sm font-medium mb-1">Tu calificación</p>
              <p className="text-6xl font-extrabold text-white">
                {resultado.calificacion}<span className="text-2xl font-semibold">/100</span>
              </p>
              <p className="text-white/70 text-xs mt-2">
                {resultado.puntosObtenidos} de {resultado.puntosMaxMultiple} pts (opción múltiple)
              </p>
            </div>
          )}

          {/* Aviso de respuestas abiertas pendientes (solo cuando hay mix) */}
          {resultado.tieneAbiertas && !soloAbiertas && (
            <div className="px-6 pt-4 pb-2">
              <div className="flex items-center gap-2 text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm">
                <Clock size={16} className="shrink-0" />
                Tu calificación puede subir — el profesor revisará tus respuestas abiertas.
              </div>
            </div>
          )}

          {/* Detalle por pregunta */}
          <div className="px-6 py-4 max-h-52 overflow-y-auto space-y-2">
            {resultado.detalle.map(({ pregunta, acierto }, i) => (
              <div key={pregunta.id} className="flex items-start gap-2 text-sm">
                {acierto === true ? (
                  <CheckCircle size={15} className="text-green-500 shrink-0 mt-0.5" />
                ) : acierto === false ? (
                  <XCircle size={15} className="text-red-500 shrink-0 mt-0.5" />
                ) : (
                  <Clock size={15} className="text-amber-400 shrink-0 mt-0.5" />
                )}
                <span className="text-gray-700 line-clamp-2">
                  <span className="text-gray-400 mr-1">#{i + 1}</span>{pregunta.texto}
                </span>
              </div>
            ))}
          </div>

          {/* Footer con mensaje y botón cerrar */}
          <div className="px-6 pb-6 pt-2 text-center space-y-3">
            {!soloAbiertas && (
              <p className={`text-sm font-semibold ${aprobado ? 'text-indigo-600' : 'text-red-500'}`}>
                {aprobado ? '¡Excelente! Superaste el cuestionario.' : 'No alcanzaste el mínimo. ¡Sigue practicando!'}
              </p>
            )}
            <button
              onClick={() => onComplete?.()}
              className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-xl py-2.5 transition text-sm"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ── Cuestionario activo ── */
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl px-6 py-5 text-white">
        <h1 className="text-xl font-bold">{cuestionario.titulo}</h1>
        {cuestionario.descripcion && <p className="text-white/80 text-sm mt-1">{cuestionario.descripcion}</p>}
        <p className="text-white/70 text-xs mt-2">
          {cuestionario.preguntas.length} pregunta(s) · {cuestionario.preguntas.reduce((a, p) => a + p.puntos, 0)} pts totales
        </p>
      </div>

      {cuestionario.preguntas.map((pregunta, idx) => (
        <div key={pregunta.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 space-y-3">
          <div className="flex items-start justify-between gap-3">
            <p className="text-sm font-medium text-gray-800">
              <span className="text-indigo-500 font-bold mr-1">{idx + 1}.</span>{pregunta.texto}
            </p>
            <span className="shrink-0 text-xs font-semibold text-gray-400 bg-gray-100 rounded-full px-2 py-0.5">
              {pregunta.puntos} pt{pregunta.puntos !== 1 ? 's' : ''}
            </span>
          </div>

          {pregunta.tipo === MULTIPLE ? (
            <div className="space-y-2">
              {pregunta.opciones.map((opcion) => {
                const sel = Number(respuestas[pregunta.id]) === opcion.id;
                return (
                  <label
                    key={opcion.id}
                    className={`flex items-center gap-3 rounded-xl border px-4 py-2.5 cursor-pointer transition text-sm ${
                      sel ? 'border-indigo-400 bg-indigo-50 text-indigo-700' : 'border-gray-200 hover:border-indigo-200 hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`p-${pregunta.id}`}
                      value={opcion.id}
                      checked={sel}
                      onChange={() => responder(pregunta.id, opcion.id)}
                      className="accent-indigo-500 shrink-0"
                    />
                    {opcion.texto}
                  </label>
                );
              })}
            </div>
          ) : (
            <div>
              <textarea
                rows={3}
                value={respuestas[pregunta.id] || ''}
                onChange={(e) => responder(pregunta.id, e.target.value)}
                placeholder="Escribe tu respuesta aquí..."
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <p className="text-xs text-amber-600 mt-1 flex items-center gap-1">
                <Clock size={11} /> El profesor revisará y calificará esta respuesta.
              </p>
            </div>
          )}
        </div>
      ))}

      {error && (
        <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
          <XCircle size={16} className="shrink-0" /> {error}
        </div>
      )}

      <button
        onClick={handleEnviar}
        disabled={enviando}
        className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-semibold rounded-xl py-3 transition text-sm"
      >
        {enviando ? <><Loader2 size={16} className="animate-spin" /> Enviando...</> : <><CheckCircle size={16} /> Enviar respuestas</>}
      </button>
    </div>
  );
}
