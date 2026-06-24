import React, { useEffect, useRef, useState } from 'react';
import {
  obtenerRecursos,
  crearRecurso,
  eliminarRecurso,
  obtenerRecursoArchivo,
} from '../services/recursoApi';
import DocumentPreviewModal from './DocumentPreviewModal';

const MAX_FILE_SIZE_BYTES = 8 * 1024 * 1024;

// Mapea el mime-type a una etiqueta corta de "tipo" para el listado.
function tipoDesdeMime(mimeType = '') {
  if (mimeType.includes('pdf')) return 'PDF';
  if (mimeType.includes('word') || mimeType.includes('msword')) return 'Word';
  if (mimeType.includes('sheet') || mimeType.includes('excel')) return 'Excel';
  if (mimeType.startsWith('video/')) return 'Video';
  if (mimeType.startsWith('image/')) return 'Imagen';
  if (mimeType.includes('zip')) return 'ZIP';
  return 'Documento';
}

function formatearTamano(bytes) {
  if (!bytes) return '';
  const mb = bytes / 1024 / 1024;
  if (mb >= 1) return `${mb.toFixed(2)} MB`;
  return `${(bytes / 1024).toFixed(0)} KB`;
}

const ResourceManagerPanel = () => {
  const [recursos, setRecursos] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [archivo, setArchivo] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [subiendo, setSubiendo] = useState(false);
  const [error, setError] = useState('');
  const [recursoPreview, setRecursoPreview] = useState(null);
  const fileInputRef = useRef(null);

  const refrescarIconos = () => {
    if (window.lucide) window.lucide.createIcons();
  };

  const cargarRecursos = async () => {
    setCargando(true);
    setError('');
    try {
      const data = await obtenerRecursos();
      setRecursos(data);
    } catch (e) {
      setError(e.message || 'No se pudieron cargar los recursos.');
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarRecursos();
  }, []);

  useEffect(() => {
    refrescarIconos();
  }, [recursos, archivo, cargando]);

  // FileReader -> Base64 (sin el prefijo "data:...;base64,").
  const leerComoBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = typeof reader.result === 'string' ? reader.result : '';
        resolve(result.split(',')[1] || '');
      };
      reader.onerror = () => reject(new Error('No fue posible leer el archivo.'));
      reader.readAsDataURL(file);
    });

  const handleArchivoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > MAX_FILE_SIZE_BYTES) {
      setError('El archivo es demasiado grande (máximo 8 MB).');
      e.target.value = '';
      return;
    }

    setError('');
    setArchivo(file);
    if (!titulo) setTitulo(file.name.replace(/\.[^/.]+$/, ''));
  };

  const handleSubir = async (e) => {
    e.preventDefault();
    if (!archivo) {
      setError('Selecciona un archivo primero.');
      return;
    }
    if (!titulo.trim()) {
      setError('Escribe un título para el recurso.');
      return;
    }

    setSubiendo(true);
    setError('');
    try {
      const archivoBase64 = await leerComoBase64(archivo);
      await crearRecurso({
        titulo: titulo.trim(),
        tipo: tipoDesdeMime(archivo.type),
        nombreArchivo: archivo.name,
        mimeType: archivo.type || 'application/octet-stream',
        tamano: formatearTamano(archivo.size),
        archivoBase64,
      });

      setTitulo('');
      setArchivo(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      await cargarRecursos();
    } catch (e2) {
      setError(e2.message || 'No fue posible subir el recurso.');
    } finally {
      setSubiendo(false);
    }
  };

  const handleEliminar = async (id) => {
    if (!window.confirm('¿Eliminar este recurso? Esta acción no se puede deshacer.')) return;
    try {
      await eliminarRecurso(id);
      setRecursos((prev) => prev.filter((r) => r.id !== id));
    } catch (e) {
      setError(e.message || 'No se pudo eliminar el recurso.');
    }
  };

  const handleDescargar = async (recurso) => {
    try {
      const archivoCompleto = await obtenerRecursoArchivo(recurso.id);
      if (!archivoCompleto?.archivoBase64) {
        setError('El recurso no tiene archivo asociado.');
        return;
      }
      const enlace = document.createElement('a');
      enlace.href = `data:${archivoCompleto.mimeType || 'application/octet-stream'};base64,${archivoCompleto.archivoBase64}`;
      enlace.download = archivoCompleto.nombreArchivo || recurso.titulo;
      document.body.appendChild(enlace);
      enlace.click();
      document.body.removeChild(enlace);
    } catch (e) {
      setError(e.message || 'No fue posible descargar el recurso.');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <i data-lucide="folder-open" className="w-6 h-6 text-[#6b2132]"></i>
        <div>
          <h2 className="text-xl font-bold text-gray-800">Gestor de Recursos</h2>
          <p className="text-sm text-gray-500">Material de la clase (PDF, Word, Excel, video, imágenes).</p>
        </div>
      </div>

      {/* FORMULARIO DE SUBIDA */}
      <form onSubmit={handleSubir} className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Título del recurso</label>
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Ej. Guía de la Unidad 1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#6b2132]"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Archivo</label>
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleArchivoChange}
              className="w-full text-sm text-gray-600 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#6b2132] file:text-white hover:file:bg-opacity-90 cursor-pointer"
              accept=".pdf,.doc,.docx,.xls,.xlsx,.zip,.txt,.jpg,.jpeg,.png,.mp4,.webm"
            />
          </div>
        </div>

        {archivo && (
          <p className="text-xs text-green-700">
            Seleccionado: <strong>{archivo.name}</strong> ({formatearTamano(archivo.size)})
          </p>
        )}

        {error && <p className="text-xs text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={subiendo || !archivo}
          className="bg-[#6b2132] text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-opacity-90 disabled:bg-gray-400 transition flex items-center gap-2"
        >
          {subiendo ? (
            <>
              <i data-lucide="loader" className="w-4 h-4 animate-spin"></i>
              Subiendo...
            </>
          ) : (
            <>
              <i data-lucide="upload" className="w-4 h-4"></i>
              Subir recurso
            </>
          )}
        </button>
      </form>

      {/* LISTADO */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#6b2132] text-white">
              <th className="border border-gray-300 px-4 py-2 text-left text-sm">Recurso</th>
              <th className="border border-gray-300 px-4 py-2 text-center text-sm">Tipo</th>
              <th className="border border-gray-300 px-4 py-2 text-center text-sm">Tamaño</th>
              <th className="border border-gray-300 px-4 py-2 text-center text-sm">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cargando ? (
              <tr>
                <td colSpan="4" className="border border-gray-300 px-4 py-6 text-center text-gray-500 text-sm">
                  Cargando recursos...
                </td>
              </tr>
            ) : recursos.length === 0 ? (
              <tr>
                <td colSpan="4" className="border border-gray-300 px-4 py-6 text-center text-gray-500 text-sm">
                  Aún no hay recursos. Sube el primero con el formulario de arriba.
                </td>
              </tr>
            ) : (
              recursos.map((recurso, idx) => (
                <tr key={recurso.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-300 px-4 py-3">
                    <p className="font-semibold text-gray-800">{recurso.titulo}</p>
                    {recurso.nombreArchivo && (
                      <p className="text-xs text-gray-500 mt-1">{recurso.nombreArchivo}</p>
                    )}
                    <p className="text-[11px] text-[#6b2132] mt-1.5 font-medium capitalize flex items-center gap-1">
                      <i data-lucide="user" className="w-3 h-3"></i>
                      {recurso.creadoPor || 'Desconocido'} • {recurso.rolCreador || 'Sin clasificar'}
                    </p>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {recurso.tipo}
                    </span>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-sm text-gray-600">
                    {recurso.tamano || '—'}
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => setRecursoPreview(recurso)}
                        className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700 transition flex items-center gap-1"
                        title="Vista previa"
                      >
                        <i data-lucide="eye" className="w-4 h-4"></i>
                        Vista previa
                      </button>
                      <button
                        onClick={() => handleDescargar(recurso)}
                        className="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700 transition flex items-center gap-1"
                        title="Descargar"
                      >
                        <i data-lucide="download" className="w-4 h-4"></i>
                        Descargar
                      </button>
                      <button
                        onClick={() => handleEliminar(recurso.id)}
                        className="bg-red-600 text-white px-3 py-1 rounded text-xs hover:bg-red-700 transition flex items-center gap-1"
                        title="Eliminar"
                      >
                        <i data-lucide="trash-2" className="w-4 h-4"></i>
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <DocumentPreviewModal recurso={recursoPreview} onClose={() => setRecursoPreview(null)} />
    </div>
  );
};

export default ResourceManagerPanel;