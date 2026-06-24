import { useState } from 'react';
import { Plus, Trash2, Save, CheckCircle, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';
import { crearCuestionarioCompleto } from '../services/cuestionarioApi';

const TIPO_PREGUNTA = { MULTIPLE: 'MULTIPLE', ABIERTA: 'ABIERTA' };

const preguntaVacia = () => ({
  _id: crypto.randomUUID(),
  texto: '',
  tipo: TIPO_PREGUNTA.MULTIPLE,
  puntos: 1,
  opciones: [opcionVacia(), opcionVacia()],
});

const opcionVacia = () => ({ _id: crypto.randomUUID(), texto: '', esCorrecta: false });

export default function QuizBuilder() {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [preguntas, setPreguntas] = useState([preguntaVacia()]);
  const [colapsadas, setColapsadas] = useState({});
  const [guardando, setGuardando] = useState(false);
  const [exito, setExito] = useState(null);
  const [error, setError] = useState(null);

  /* ---------- helpers de preguntas ---------- */

  function actualizarPregunta(idx, campo, valor) {
    setPreguntas((prev) =>
      prev.map((p, i) => (i === idx ? { ...p, [campo]: valor } : p)),
    );
  }

  function agregarPregunta() {
    setPreguntas((prev) => [...prev, preguntaVacia()]);
  }

  function eliminarPregunta(idx) {
    setPreguntas((prev) => prev.filter((_, i) => i !== idx));
  }

  function toggleColapso(idx) {
    setColapsadas((prev) => ({ ...prev, [idx]: !prev[idx] }));
  }

  /* ---------- helpers de opciones ---------- */

  function actualizarOpcion(pIdx, oIdx, campo, valor) {
    setPreguntas((prev) =>
      prev.map((p, i) => {
        if (i !== pIdx) return p;
        const opciones = p.opciones.map((o, j) => {
          if (campo === 'esCorrecta') return { ...o, esCorrecta: j === oIdx };
          return j === oIdx ? { ...o, [campo]: valor } : o;
        });
        return { ...p, opciones };
      }),
    );
  }

  function agregarOpcion(pIdx) {
    setPreguntas((prev) =>
      prev.map((p, i) =>
        i === pIdx ? { ...p, opciones: [...p.opciones, opcionVacia()] } : p,
      ),
    );
  }

  function eliminarOpcion(pIdx, oIdx) {
    setPreguntas((prev) =>
      prev.map((p, i) => {
        if (i !== pIdx) return p;
        const opciones = p.opciones.filter((_, j) => j !== oIdx);
        return { ...p, opciones };
      }),
    );
  }

  /* ---------- submit ---------- */

  async function handleGuardar() {
    setError(null);
    if (!titulo.trim()) return setError('El título es obligatorio.');
    if (preguntas.some((p) => !p.texto.trim()))
      return setError('Todas las preguntas deben tener texto.');
    if (
      preguntas.some(
        (p) =>
          p.tipo === TIPO_PREGUNTA.MULTIPLE &&
          !p.opciones.some((o) => o.esCorrecta),
      )
    )
      return setError('Cada pregunta de opción múltiple debe tener una respuesta correcta.');

    const payload = {
      titulo: titulo.trim(),
      descripcion: descripcion.trim(),
      activo: true,
      preguntas: preguntas.map(({ texto, tipo, puntos, opciones }) => ({
        texto,
        tipo,
        puntos: Number(puntos),
        opciones:
          tipo === TIPO_PREGUNTA.MULTIPLE
            ? opciones
                .filter((o) => o.texto.trim())
                .map(({ texto, esCorrecta }) => ({ texto, esCorrecta }))
            : [],
      })),
    };

    try {
      setGuardando(true);
      const resultado = await crearCuestionarioCompleto(payload);
      setExito(resultado);
      setTitulo('');
      setDescripcion('');
      setPreguntas([preguntaVacia()]);
    } catch (e) {
      setError(e.message);
    } finally {
      setGuardando(false);
    }
  }

  /* ---------- render ---------- */

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      {/* Cabecera */}
      <div className="flex items-center gap-3">
        <CheckCircle className="text-indigo-500" size={28} />
        <h1 className="text-2xl font-bold text-gray-800">Crear Cuestionario</h1>
      </div>

      {/* Datos generales */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Título *</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Ej. Examen Parcial — Gramáticas Libres de Contexto"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            rows={2}
            placeholder="Instrucciones generales del cuestionario..."
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
      </div>

      {/* Preguntas */}
      <div className="space-y-4">
        {preguntas.map((pregunta, pIdx) => (
          <div
            key={pregunta._id}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
          >
            {/* Encabezado de pregunta */}
            <div className="flex items-center gap-3 px-5 py-3 bg-gray-50 border-b border-gray-100">
              <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-full px-2 py-0.5">
                #{pIdx + 1}
              </span>
              <p className="flex-1 text-sm text-gray-700 truncate">
                {pregunta.texto || 'Nueva pregunta'}
              </p>
              <button
                onClick={() => toggleColapso(pIdx)}
                className="text-gray-400 hover:text-gray-600"
              >
                {colapsadas[pIdx] ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
              </button>
              <button
                onClick={() => eliminarPregunta(pIdx)}
                className="text-red-400 hover:text-red-600"
                disabled={preguntas.length === 1}
              >
                <Trash2 size={16} />
              </button>
            </div>

            {!colapsadas[pIdx] && (
              <div className="p-5 space-y-4">
                {/* Texto de la pregunta */}
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Texto de la pregunta
                  </label>
                  <input
                    type="text"
                    value={pregunta.texto}
                    onChange={(e) => actualizarPregunta(pIdx, 'texto', e.target.value)}
                    placeholder="Escribe la pregunta aquí..."
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>

                {/* Tipo + Puntos */}
                <div className="flex gap-3">
                  <div className="flex-1">
                    <label className="block text-xs font-medium text-gray-600 mb-1">Tipo</label>
                    <select
                      value={pregunta.tipo}
                      onChange={(e) => actualizarPregunta(pIdx, 'tipo', e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    >
                      <option value={TIPO_PREGUNTA.MULTIPLE}>Opción múltiple</option>
                      <option value={TIPO_PREGUNTA.ABIERTA}>Respuesta abierta</option>
                    </select>
                  </div>
                  <div className="w-28">
                    <label className="block text-xs font-medium text-gray-600 mb-1">Puntos</label>
                    <input
                      type="number"
                      min={0}
                      step={0.5}
                      value={pregunta.puntos}
                      onChange={(e) =>
                        actualizarPregunta(pIdx, 'puntos', parseFloat(e.target.value) || 0)
                      }
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-center focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                  </div>
                </div>

                {/* Opciones (solo MULTIPLE) */}
                {pregunta.tipo === TIPO_PREGUNTA.MULTIPLE && (
                  <div className="space-y-2">
                    <label className="block text-xs font-medium text-gray-600">
                      Opciones — marca la correcta
                    </label>
                    {pregunta.opciones.map((opcion, oIdx) => (
                      <div key={opcion._id} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name={`correcta-${pregunta._id}`}
                          checked={opcion.esCorrecta}
                          onChange={() => actualizarOpcion(pIdx, oIdx, 'esCorrecta', true)}
                          className="accent-indigo-500 shrink-0"
                        />
                        <input
                          type="text"
                          value={opcion.texto}
                          onChange={(e) => actualizarOpcion(pIdx, oIdx, 'texto', e.target.value)}
                          placeholder={`Opción ${oIdx + 1}`}
                          className="flex-1 border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                        <button
                          onClick={() => eliminarOpcion(pIdx, oIdx)}
                          disabled={pregunta.opciones.length <= 2}
                          className="text-red-400 hover:text-red-600 disabled:opacity-30"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => agregarOpcion(pIdx)}
                      className="flex items-center gap-1 text-xs text-indigo-500 hover:text-indigo-700 mt-1"
                    >
                      <Plus size={14} /> Agregar opción
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Agregar pregunta */}
      <button
        onClick={agregarPregunta}
        className="w-full flex items-center justify-center gap-2 border-2 border-dashed border-indigo-200 rounded-2xl py-3 text-indigo-500 hover:border-indigo-400 hover:bg-indigo-50 transition text-sm font-medium"
      >
        <Plus size={18} /> Agregar pregunta
      </button>

      {/* Feedback */}
      {error && (
        <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
          <AlertCircle size={16} className="shrink-0" />
          {error}
        </div>
      )}

      {exito && (
        <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 rounded-xl px-4 py-3 text-sm">
          <CheckCircle size={16} className="shrink-0" />
          Cuestionario <strong className="mx-1">"{exito.titulo}"</strong> guardado con ID{' '}
          <strong>{exito.id}</strong>.
        </div>
      )}

      {/* Guardar */}
      <button
        onClick={handleGuardar}
        disabled={guardando}
        className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-semibold rounded-xl px-6 py-3 transition text-sm"
      >
        <Save size={16} />
        {guardando ? 'Guardando...' : 'Guardar cuestionario'}
      </button>
    </div>
  );
}
