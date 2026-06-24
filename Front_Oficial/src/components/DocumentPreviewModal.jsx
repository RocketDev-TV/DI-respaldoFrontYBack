
import React from 'react';
import { X, Download, FileQuestion, Loader2 } from 'lucide-react';
import { obtenerRecursoArchivo } from '../services/recursoApi';

function esImagen(mime = '') {
  return mime.startsWith('image/');
}

function esPdf(mime = '', nombre = '') {
  return mime.includes('pdf') || nombre.toLowerCase().endsWith('.pdf');
}

const DocumentPreviewModal = ({ recurso, onClose }) => {
  const [archivo, setArchivo] = React.useState(null);
  const [cargando, setCargando] = React.useState(false);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    if (!recurso) return undefined;

    let activo = true;
    setArchivo(null);
    setError('');
    setCargando(true);

    obtenerRecursoArchivo(recurso.id)
      .then((data) => {
        if (!activo) return;
        if (!data?.archivoBase64) {
          setError('El recurso no tiene archivo asociado.');
          return;
        }
        setArchivo(data);
      })
      .catch((e) => {
        if (activo) setError(e.message || 'No fue posible cargar la vista previa.');
      })
      .finally(() => {
        if (activo) setCargando(false);
      });

    return () => {
      activo = false;
    };
  }, [recurso]);

  if (!recurso) return null;

  const mime = archivo?.mimeType || recurso.mimeType || '';
  const nombre = archivo?.nombreArchivo || recurso.nombreArchivo || recurso.titulo || '';
  const dataUrl = archivo
    ? `data:${mime || 'application/octet-stream'};base64,${archivo.archivoBase64}`
    : null;

  const descargar = () => {
    if (!dataUrl) return;
    const enlace = document.createElement('a');
    enlace.href = dataUrl;
    enlace.download = nombre || 'archivo';
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
  };

  const renderContenido = () => {
    if (cargando) {
      return (
        <div className="flex h-full min-h-[300px] flex-col items-center justify-center gap-3 text-gray-500">
          <Loader2 className="h-7 w-7 animate-spin" />
          <p className="text-sm">Cargando vista previa…</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex h-full min-h-[300px] flex-col items-center justify-center gap-3 px-6 text-center text-rose-600">
          <FileQuestion className="h-10 w-10" />
          <p className="text-sm">{error}</p>
        </div>
      );
    }

    if (!dataUrl) return null;

    if (esImagen(mime)) {
      return (
        <div className="flex h-full items-center justify-center bg-gray-900/5 p-4">
          <img src={dataUrl} alt={nombre} className="max-h-[70vh] max-w-full rounded-lg object-contain" />
        </div>
      );
    }

    if (esPdf(mime, nombre)) {
      return <iframe src={dataUrl} title={nombre} className="h-[70vh] w-full" />;
    }

    return (
      <div className="flex h-full min-h-[300px] flex-col items-center justify-center gap-4 px-6 text-center">
        <FileQuestion className="h-12 w-12 text-gray-400" />
        <div>
          <p className="font-semibold text-gray-700">No hay previsualización disponible</p>
          <p className="mt-1 text-sm text-gray-500">
            Este tipo de archivo no se puede mostrar en el navegador. Descárgalo para abrirlo.
          </p>
        </div>
        <button
          onClick={descargar}
          className="inline-flex items-center gap-2 rounded-lg bg-[#6b2132] px-4 py-2 text-sm font-semibold text-white transition hover:bg-opacity-90"
        >
          <Download className="h-4 w-4" />
          Descargar archivo
        </button>
      </div>
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-gray-200 px-5 py-3">
          <div className="min-w-0">
            <h3 className="truncate text-base font-bold text-gray-900" title={recurso.titulo}>
              {recurso.titulo}
            </h3>
            {nombre && nombre !== recurso.titulo && (
              <p className="truncate text-xs text-gray-500">{nombre}</p>
            )}
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <button
              onClick={descargar}
              disabled={!dataUrl}
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-emerald-700 disabled:opacity-50"
              title="Descargar"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Descargar</span>
            </button>
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
              title="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-auto">{renderContenido()}</div>
      </div>
    </div>
  );
};

export default DocumentPreviewModal;