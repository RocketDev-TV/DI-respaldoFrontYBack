import { useState, useEffect, useCallback } from 'react';
import {
  Plus, Trash2, Save, Edit2, BarChart2, MessageSquare,
  ChevronDown, ChevronUp, CheckCircle, XCircle, AlertCircle,
  Loader2, Eye, EyeOff, ToggleLeft, ToggleRight,
} from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
} from 'recharts';
import QuizBuilder from './QuizBuilder';
import {
  fetchCuestionarios,
  actualizarCuestionario,
  eliminarCuestionario,
  agregarPregunta,
  actualizarPregunta,
  eliminarPregunta,
  agregarOpcion,
  actualizarOpcion,
  eliminarOpcion,
  fetchEvaluacionesConAlumno,
  fetchRespuestasAbiertas,
  calificarRespuestaAbierta,
} from '../services/cuestionarioApi';

const TABS = [
  { id: 'crear', label: 'Crear' },
  { id: 'gestionar', label: 'Gestionar' },
  { id: 'metricas', label: 'Métricas' },
  { id: 'calificar', label: 'Calificar abiertas' },
];

/* ── Helpers ─────────────────────────────────────────────────── */

const newOpcion = () => ({ _id: crypto.randomUUID(), texto: '', esCorrecta: false });

/* ── Sub-componente: editor de un cuestionario ──────────────── */

function QuizEditorInline({ quiz, onSaved, onCancel }) {
  const [titulo, setTitulo] = useState(quiz.titulo);
  const [descripcion, setDescripcion] = useState(quiz.descripcion ?? '');
  const [activo, setActivo] = useState(quiz.activo);
  const [preguntas, setPreguntas] = useState(
    quiz.preguntas.map((p) => ({
      ...p,
      opciones: p.opciones.map((o) => ({ ...o })),
      _guardando: false,
    })),
  );
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  async function guardarInfo() {
    try {
      setSaving(true);
      setError(null);
      const updated = await actualizarCuestionario(quiz.id, { titulo, descripcion, activo });
      onSaved(updated);
    } catch (e) {
      setError(e.message);
    } finally {
      setSaving(false);
    }
  }

  async function guardarPregunta(p) {
    setPreguntas((prev) => prev.map((x) => (x.id === p.id ? { ...x, _guardando: true } : x)));
    try {
      await actualizarPregunta(p.id, { texto: p.texto, tipo: p.tipo, puntos: p.puntos });
    } catch (e) {
      setError(e.message);
    } finally {
      setPreguntas((prev) => prev.map((x) => (x.id === p.id ? { ...x, _guardando: false } : x)));
    }
  }

  async function borrarPregunta(pid) {
    if (!window.confirm('¿Eliminar esta pregunta y sus opciones?')) return;
    try {
      await eliminarPregunta(pid);
      setPreguntas((prev) => prev.filter((p) => p.id !== pid));
    } catch (e) {
      setError(e.message);
    }
  }

  async function addPregunta() {
    try {
      const nueva = await agregarPregunta({ cuestionarioId: quiz.id, texto: 'Nueva pregunta', tipo: 'MULTIPLE', puntos: 1, opciones: [] });
      setPreguntas((prev) => [...prev, { ...nueva, _guardando: false }]);
    } catch (e) {
      setError(e.message);
    }
  }

  async function guardarOpcion(pid, opcion) {
    try {
      await actualizarOpcion(opcion.id, { texto: opcion.texto, esCorrecta: opcion.esCorrecta });
    } catch (e) {
      setError(e.message);
    }
  }

  async function marcarCorrecta(pid, oid) {
    const pregunta = preguntas.find((p) => p.id === pid);
    if (!pregunta) return;
    try {
      for (const o of pregunta.opciones) {
        if (o.esCorrecta && o.id !== oid) await actualizarOpcion(o.id, { esCorrecta: false });
      }
      await actualizarOpcion(oid, { esCorrecta: true });
      setPreguntas((prev) =>
        prev.map((p) =>
          p.id !== pid ? p : { ...p, opciones: p.opciones.map((o) => ({ ...o, esCorrecta: o.id === oid })) },
        ),
      );
    } catch (e) {
      setError(e.message);
    }
  }

  async function addOpcion(pid) {
    try {
      const nueva = await agregarOpcion({ preguntaId: pid, texto: 'Opción nueva', esCorrecta: false });
      setPreguntas((prev) =>
        prev.map((p) => (p.id !== pid ? p : { ...p, opciones: [...p.opciones, nueva] })),
      );
    } catch (e) {
      setError(e.message);
    }
  }

  async function borrarOpcion(pid, oid) {
    try {
      await eliminarOpcion(oid);
      setPreguntas((prev) =>
        prev.map((p) => (p.id !== pid ? p : { ...p, opciones: p.opciones.filter((o) => o.id !== oid) })),
      );
    } catch (e) {
      setError(e.message);
    }
  }

  function updatePreguntaLocal(pid, campo, valor) {
    setPreguntas((prev) => prev.map((p) => (p.id === pid ? { ...p, [campo]: valor } : p)));
  }

  function updateOpcionLocal(pid, oid, campo, valor) {
    setPreguntas((prev) =>
      prev.map((p) =>
        p.id !== pid ? p : { ...p, opciones: p.opciones.map((o) => (o.id === oid ? { ...o, [campo]: valor } : o)) },
      ),
    );
  }

  return (
    <div className="space-y-6 mt-4 bg-indigo-50/40 border border-indigo-100 rounded-2xl p-5">
      {/* Info general */}
      <div className="bg-white rounded-xl border border-gray-100 p-4 space-y-3">
        <h3 className="font-semibold text-gray-700 text-sm">Información general</h3>
        <input
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Título"
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-400 outline-none"
        />
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          rows={2}
          placeholder="Descripción"
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm resize-none focus:ring-2 focus:ring-indigo-400 outline-none"
        />
        <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
          <button
            type="button"
            onClick={() => setActivo((v) => !v)}
            className={`transition ${activo ? 'text-indigo-500' : 'text-gray-400'}`}
          >
            {activo ? <ToggleRight size={24} /> : <ToggleLeft size={24} />}
          </button>
          <span className={activo ? 'text-indigo-700 font-medium' : 'text-gray-500'}>
            {activo ? 'Activo (visible para alumnos)' : 'Inactivo (oculto)'}
          </span>
        </label>
        <div className="flex gap-2 pt-1">
          <button
            onClick={guardarInfo}
            disabled={saving}
            className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition disabled:opacity-50"
          >
            {saving ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
            Guardar info
          </button>
          <button onClick={onCancel} className="text-xs text-gray-500 hover:text-gray-700 px-3 py-2">
            Cancelar
          </button>
        </div>
      </div>

      {/* Preguntas */}
      <div className="space-y-3">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Preguntas</p>
        {preguntas.map((p) => (
          <div key={p.id} className="bg-white rounded-xl border border-gray-100 p-4 space-y-3">
            <div className="flex gap-2 items-start">
              <input
                value={p.texto}
                onChange={(e) => updatePreguntaLocal(p.id, 'texto', e.target.value)}
                className="flex-1 border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-indigo-400 outline-none"
              />
              <select
                value={p.tipo}
                onChange={(e) => updatePreguntaLocal(p.id, 'tipo', e.target.value)}
                className="border border-gray-200 rounded-lg px-2 py-1.5 text-xs bg-white focus:ring-2 focus:ring-indigo-400 outline-none"
              >
                <option value="MULTIPLE">Múltiple</option>
                <option value="ABIERTA">Abierta</option>
              </select>
              <input
                type="number"
                min={0}
                step={0.5}
                value={p.puntos}
                onChange={(e) => updatePreguntaLocal(p.id, 'puntos', parseFloat(e.target.value) || 0)}
                className="w-16 border border-gray-200 rounded-lg px-2 py-1.5 text-xs text-center focus:ring-2 focus:ring-indigo-400 outline-none"
              />
              <button
                onClick={() => guardarPregunta(p)}
                disabled={p._guardando}
                className="bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-lg p-1.5 transition"
                title="Guardar pregunta"
              >
                {p._guardando ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
              </button>
              <button
                onClick={() => borrarPregunta(p.id)}
                className="text-red-400 hover:text-red-600 p-1.5 transition"
              >
                <Trash2 size={14} />
              </button>
            </div>

            {p.tipo === 'MULTIPLE' && (
              <div className="space-y-1.5 pl-1">
                {p.opciones.map((o) => (
                  <div key={o.id} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name={`correcta-edit-${p.id}`}
                      checked={o.esCorrecta}
                      onChange={() => marcarCorrecta(p.id, o.id)}
                      className="accent-indigo-500 shrink-0"
                    />
                    <input
                      value={o.texto}
                      onChange={(e) => updateOpcionLocal(p.id, o.id, 'texto', e.target.value)}
                      onBlur={() => guardarOpcion(p.id, o)}
                      className="flex-1 border border-gray-100 rounded-lg px-2 py-1 text-xs focus:ring-1 focus:ring-indigo-300 outline-none"
                    />
                    <button
                      onClick={() => borrarOpcion(p.id, o.id)}
                      disabled={p.opciones.length <= 2}
                      className="text-red-400 hover:text-red-600 disabled:opacity-30"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => addOpcion(p.id)}
                  className="flex items-center gap-1 text-xs text-indigo-500 hover:text-indigo-700 mt-1"
                >
                  <Plus size={12} /> Agregar opción
                </button>
              </div>
            )}
          </div>
        ))}
        <button
          onClick={addPregunta}
          className="w-full flex items-center justify-center gap-2 border-2 border-dashed border-indigo-200 rounded-xl py-2.5 text-indigo-500 hover:border-indigo-400 hover:bg-indigo-50 transition text-xs font-medium"
        >
          <Plus size={14} /> Agregar pregunta
        </button>
      </div>

      {error && (
        <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
          <AlertCircle size={14} className="shrink-0" /> {error}
        </div>
      )}
    </div>
  );
}

/* ── Sub-componente: métricas de un cuestionario ────────────── */

function QuizMetrics({ cuestionarioId }) {
  const [todasEvaluaciones, setTodasEvaluaciones] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [grupoFiltro, setGrupoFiltro] = useState('todos');

  useEffect(() => {
    if (!cuestionarioId) return;
    setCargando(true);
    fetchEvaluacionesConAlumno(cuestionarioId)
      .then(setTodasEvaluaciones)
      .catch(() => {})
      .finally(() => setCargando(false));
  }, [cuestionarioId]);

  if (cargando) return <div className="flex justify-center py-12"><Loader2 size={28} className="animate-spin text-indigo-400" /></div>;
  if (!todasEvaluaciones.length) return <p className="text-center text-gray-400 py-12 text-sm">Sin evaluaciones aún.</p>;

  // Grupos únicos para el filtro
  const grupos = ['todos', ...new Set(todasEvaluaciones.map((e) => e.alumnoGrupo).filter(Boolean))].sort();
  const evaluaciones = grupoFiltro === 'todos'
    ? todasEvaluaciones
    : todasEvaluaciones.filter((e) => e.alumnoGrupo === grupoFiltro);

  const califs = evaluaciones.map((e) => e.calificacionFinal);
  const promedio = califs.length ? Math.round((califs.reduce((a, b) => a + b, 0) / califs.length) * 10) / 10 : 0;
  const maxCalif = califs.length ? Math.max(...califs) : 0;
  const minCalif = califs.length ? Math.min(...califs) : 0;
  const aprobados = califs.filter((c) => c >= 60).length;

  const buckets = [
    { rango: '0-59',   count: califs.filter((c) => c < 60).length,             color: '#f87171' },
    { rango: '60-74',  count: califs.filter((c) => c >= 60 && c < 75).length,  color: '#fb923c' },
    { rango: '75-89',  count: califs.filter((c) => c >= 75 && c < 90).length,  color: '#facc15' },
    { rango: '90-100', count: califs.filter((c) => c >= 90).length,             color: '#4ade80' },
  ];

  return (
    <div className="space-y-5">
      {/* Filtro de grupo */}
      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Filtrar por grupo:</span>
        <div className="flex gap-2 flex-wrap">
          {grupos.map((g) => (
            <button
              key={g}
              onClick={() => setGrupoFiltro(g)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition capitalize ${
                grupoFiltro === g
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {g === 'todos' ? 'Todos los grupos' : g}
            </button>
          ))}
        </div>
        {evaluaciones.length !== todasEvaluaciones.length && (
          <span className="text-xs text-gray-400 ml-auto">
            Mostrando {evaluaciones.length} de {todasEvaluaciones.length} evaluaciones
          </span>
        )}
      </div>

      {!evaluaciones.length ? (
        <p className="text-center text-gray-400 py-8 text-sm">No hay evaluaciones para el grupo seleccionado.</p>
      ) : (
        <>
          {/* KPIs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Promedio', value: `${promedio}`, bg: 'bg-indigo-50', border: 'border-indigo-100', text: 'text-indigo-600', val: 'text-indigo-800' },
              { label: 'Más alta',  value: `${maxCalif}`, bg: 'bg-green-50',  border: 'border-green-100',  text: 'text-green-600',  val: 'text-green-800' },
              { label: 'Más baja',  value: `${minCalif}`, bg: 'bg-red-50',    border: 'border-red-100',    text: 'text-red-600',    val: 'text-red-800' },
              { label: 'Aprobados', value: `${aprobados}/${evaluaciones.length}`, bg: 'bg-amber-50', border: 'border-amber-100', text: 'text-amber-600', val: 'text-amber-800' },
            ].map((k) => (
              <div key={k.label} className={`rounded-xl ${k.bg} border ${k.border} p-4`}>
                <p className={`text-xs font-medium ${k.text}`}>{k.label}</p>
                <p className={`text-2xl font-bold ${k.val} mt-0.5`}>{k.value}</p>
              </div>
            ))}
          </div>

          {/* Gráfica */}
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <p className="text-sm font-semibold text-gray-700 mb-4">Distribución de calificaciones</p>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={buckets} barSize={40}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="rango" tick={{ fontSize: 12 }} />
                <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
                <Tooltip formatter={(v) => [`${v} alumnos`, 'Cantidad']} />
                <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                  {buckets.map((b, i) => <Cell key={i} fill={b.color} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Tabla */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="px-5 py-3 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase grid grid-cols-5 gap-2">
              <span className="col-span-2">Alumno</span>
              <span>Grupo</span>
              <span className="text-center">Calificación</span>
              <span className="text-center">Estado</span>
            </div>
            <div className="divide-y divide-gray-50 max-h-72 overflow-y-auto">
              {evaluaciones.map((ev) => (
                <div key={ev.id} className="px-5 py-3 grid grid-cols-5 gap-2 items-center text-sm hover:bg-gray-50">
                  <div className="col-span-2">
                    <p className="font-medium text-gray-800">{ev.alumnoNombre} {ev.alumnoApellido}</p>
                    <p className="text-xs text-gray-400">{ev.alumnoEmail}</p>
                  </div>
                  <span className="text-gray-600 text-xs">{ev.alumnoGrupo || '—'}</span>
                  <span className={`text-center font-bold ${ev.calificacionFinal >= 60 ? 'text-green-600' : 'text-red-500'}`}>
                    {ev.calificacionFinal}
                  </span>
                  <span className="text-center">
                    {ev.pendienteRevision ? (
                      <span className="text-xs bg-amber-100 text-amber-700 rounded-full px-2 py-0.5">Pendiente</span>
                    ) : ev.calificacionFinal >= 60 ? (
                      <span className="text-xs bg-green-100 text-green-700 rounded-full px-2 py-0.5">Aprobado</span>
                    ) : (
                      <span className="text-xs bg-red-100 text-red-700 rounded-full px-2 py-0.5">Reprobado</span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/* ── Sub-componente: calificar respuestas abiertas ──────────── */

function OpenAnswerGrader({ cuestionarioId }) {
  const [respuestas, setRespuestas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [filtro, setFiltro] = useState('pendientes');
  const [errorCarga, setErrorCarga] = useState(null);

  const cargar = useCallback(() => {
    if (!cuestionarioId) return;
    setCargando(true);
    setErrorCarga(null);
    const calificadaFiltro = filtro === 'pendientes' ? false : filtro === 'calificadas' ? true : undefined;
    fetchRespuestasAbiertas({ cuestionarioId, calificada: calificadaFiltro })
      .then((rows) => { setRespuestas(rows); })
      .catch((e) => { setErrorCarga(e.message || 'Error al cargar respuestas'); setRespuestas([]); })
      .finally(() => setCargando(false));
  }, [cuestionarioId, filtro]);

  useEffect(() => { cargar(); }, [cargar]);

  async function handleCalificar(id, esCorrecta, preguntaPuntos) {
    try {
      await calificarRespuestaAbierta({ id, esCorrecta, puntosOtorgados: esCorrecta ? preguntaPuntos : 0 });
      setRespuestas((prev) => prev.filter((r) => r.id !== id));
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {['pendientes', 'calificadas', 'todas'].map((f) => (
          <button
            key={f}
            onClick={() => setFiltro(f)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition ${
              filtro === f ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {cargando ? (
        <div className="flex justify-center py-12"><Loader2 size={28} className="animate-spin text-indigo-400" /></div>
      ) : errorCarga ? (
        <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
          <AlertCircle size={14} className="shrink-0" /> {errorCarga}
          <button onClick={cargar} className="ml-auto text-xs underline">Reintentar</button>
        </div>
      ) : !respuestas.length ? (
        <p className="text-center text-gray-400 py-12 text-sm">
          {filtro === 'pendientes' ? 'No hay respuestas pendientes de calificar.' : 'Sin resultados.'}
        </p>
      ) : (
        <div className="space-y-3">
          {respuestas.map((r) => (
            <div key={r.id} className="bg-white rounded-xl border border-gray-100 p-4 space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs text-gray-500 font-medium">{r.alumnoNombre} {r.alumnoApellido}</p>
                  <p className="text-sm font-semibold text-gray-800 mt-0.5">{r.preguntaTexto}</p>
                  <p className="text-xs text-indigo-500 mt-0.5">{r.preguntaPuntos} pt{r.preguntaPuntos !== 1 ? 's' : ''}</p>
                </div>
                {r.calificada && (
                  r.esCorrecta
                    ? <CheckCircle size={20} className="text-green-500 shrink-0" />
                    : <XCircle size={20} className="text-red-500 shrink-0" />
                )}
              </div>
              <div className="bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-700 border border-gray-100">
                {r.texto}
              </div>
              {!r.calificada && (
                <div className="flex gap-2">
                  <button
                    onClick={() => handleCalificar(r.id, true, r.preguntaPuntos)}
                    className="flex items-center gap-1.5 bg-green-50 hover:bg-green-100 text-green-700 border border-green-200 text-xs font-semibold px-4 py-2 rounded-lg transition"
                  >
                    <CheckCircle size={14} /> Correcta
                  </button>
                  <button
                    onClick={() => handleCalificar(r.id, false, r.preguntaPuntos)}
                    className="flex items-center gap-1.5 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 text-xs font-semibold px-4 py-2 rounded-lg transition"
                  >
                    <XCircle size={14} /> Incorrecta
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Componente principal ───────────────────────────────────── */

export default function QuizAdminPanel() {
  const [tab, setTab] = useState('crear');
  const [quizzes, setQuizzes] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [editandoId, setEditandoId] = useState(null);
  const [quizSeleccionado, setQuizSeleccionado] = useState('');
  const [error, setError] = useState(null);

  const cargarQuizzes = useCallback(() => {
    setCargando(true);
    fetchCuestionarios(true)
      .then(setQuizzes)
      .catch((e) => setError(e.message))
      .finally(() => setCargando(false));
  }, []);

  useEffect(() => {
    if (tab === 'gestionar' || tab === 'metricas' || tab === 'calificar') cargarQuizzes();
  }, [tab, cargarQuizzes]);

  async function handleEliminar(id, titulo) {
    if (!window.confirm(`¿Eliminar el cuestionario "${titulo}"? Esta acción es irreversible.`)) return;
    try {
      await eliminarCuestionario(id);
      setQuizzes((prev) => prev.filter((q) => q.id !== id));
      if (editandoId === id) setEditandoId(null);
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <div className="space-y-5">
      {/* Tabs */}
      <div className="flex gap-1 border-b border-gray-200 overflow-x-auto">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => { setTab(t.id); setEditandoId(null); setError(null); }}
            className={`px-4 py-2.5 text-sm font-semibold whitespace-nowrap border-b-2 transition ${
              tab === t.id ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {error && (
        <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
          <AlertCircle size={14} className="shrink-0" /> {error}
        </div>
      )}

      {/* ── CREAR ── */}
      {tab === 'crear' && <QuizBuilder onCreado={cargarQuizzes} />}

      {/* ── GESTIONAR ── */}
      {tab === 'gestionar' && (
        <div className="space-y-3">
          {cargando ? (
            <div className="flex justify-center py-12"><Loader2 size={28} className="animate-spin text-indigo-400" /></div>
          ) : !quizzes.length ? (
            <p className="text-center text-gray-400 py-12 text-sm">No hay cuestionarios creados aún.</p>
          ) : quizzes.map((q) => (
            <div key={q.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-gray-800 truncate">{q.titulo}</p>
                    <span className={`shrink-0 text-xs rounded-full px-2 py-0.5 font-medium ${q.activo ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                      {q.activo ? 'Activo' : 'Inactivo'}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">{q.preguntas?.length ?? 0} pregunta(s)</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setEditandoId(editandoId === q.id ? null : q.id)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition"
                  >
                    <Edit2 size={13} /> {editandoId === q.id ? 'Cerrar' : 'Editar'}
                  </button>
                  <button
                    onClick={() => handleEliminar(q.id, q.titulo)}
                    className="text-red-400 hover:text-red-600 p-1.5 rounded-lg hover:bg-red-50 transition"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>

              {editandoId === q.id && (
                <QuizEditorInline
                  quiz={q}
                  onSaved={(updated) => {
                    setQuizzes((prev) => prev.map((x) => (x.id === updated.id ? updated : x)));
                    setEditandoId(null);
                  }}
                  onCancel={() => setEditandoId(null)}
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* ── MÉTRICAS ── */}
      {tab === 'metricas' && (
        <div className="space-y-5">
          <select
            value={quizSeleccionado}
            onChange={(e) => setQuizSeleccionado(e.target.value)}
            className="w-full sm:w-80 border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:ring-2 focus:ring-indigo-400 outline-none"
          >
            <option value="">— Selecciona un cuestionario —</option>
            {quizzes.map((q) => <option key={q.id} value={q.id}>{q.titulo}</option>)}
          </select>
          {quizSeleccionado && <QuizMetrics cuestionarioId={Number(quizSeleccionado)} />}
        </div>
      )}

      {/* ── CALIFICAR ABIERTAS ── */}
      {tab === 'calificar' && (
        <div className="space-y-5">
          <select
            value={quizSeleccionado}
            onChange={(e) => setQuizSeleccionado(e.target.value)}
            className="w-full sm:w-80 border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:ring-2 focus:ring-indigo-400 outline-none"
          >
            <option value="">— Selecciona un cuestionario —</option>
            {quizzes.map((q) => <option key={q.id} value={q.id}>{q.titulo}</option>)}
          </select>
          {quizSeleccionado && <OpenAnswerGrader cuestionarioId={Number(quizSeleccionado)} />}
        </div>
      )}
    </div>
  );
}
