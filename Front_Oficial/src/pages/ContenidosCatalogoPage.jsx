
import React from 'react';
import {
  ShieldCheck,
  FilePenLine,
  Users,
  HelpCircle,
  RefreshCw,
  Loader2,
  User,
  Calendar,
  FileDown,
  Eye,
} from 'lucide-react';
import { obtenerRecursos, obtenerRecursoArchivo } from '../services/recursoApi';
import DocumentPreviewModal from '../components/DocumentPreviewModal';

// Orden y metadatos de cada grupo de rol.
const GRUPOS_ROL = [
  {
    rol: 'ADMINISTRADOR',
    titulo: 'Administración',
    Icon: ShieldCheck,
    color: 'rose',
    chip: 'bg-rose-100 text-rose-700',
    bar: 'bg-rose-500',
  },
  {
    rol: 'MODERADOR',
    titulo: 'Moderación',
    Icon: FilePenLine,
    color: 'amber',
    chip: 'bg-amber-100 text-amber-700',
    bar: 'bg-amber-500',
  },
  {
    rol: 'ALUMNO',
    titulo: 'Alumnado',
    Icon: Users,
    color: 'blue',
    chip: 'bg-blue-100 text-blue-700',
    bar: 'bg-blue-500',
  },
];

const GRUPO_SIN_ROL = {
  rol: null,
  titulo: 'Sin clasificar',
  Icon: HelpCircle,
  color: 'gray',
  chip: 'bg-gray-100 text-gray-600',
  bar: 'bg-gray-400',
};

const formatearFecha = (valor) => {
  if (!valor) return '';
  const fecha = new Date(valor);
  if (Number.isNaN(fecha.getTime())) return '';
  return fecha.toLocaleDateString('es-MX', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

const ContenidosCatalogoPage = () => {
  const [contenidos, setContenidos] = React.useState([]);
  const [cargando, setCargando] = React.useState(true);
  const [error, setError] = React.useState('');
  const [descargandoId, setDescargandoId] = React.useState(null);
  const [recursoPreview, setRecursoPreview] = React.useState(null);

  const cargar = React.useCallback(() => {
    setCargando(true);
    setError('');
    obtenerRecursos()
      .then((data) => setContenidos(data || []))
      .catch(() => setError('No se pudieron cargar los contenidos.'))
      .finally(() => setCargando(false));
  }, []);

  React.useEffect(() => {
    cargar();
  }, [cargar]);

  const handleDescargar = async (recurso) => {
    if (descargandoId === recurso.id) return;
    setDescargandoId(recurso.id);
    try {
      const archivo = await obtenerRecursoArchivo(recurso.id);
      if (!archivo?.archivoBase64) return;
      const enlace = document.createElement('a');
      enlace.href = `data:${archivo.mimeType || 'application/octet-stream'};base64,${archivo.archivoBase64}`;
      enlace.download = archivo.nombreArchivo || recurso.titulo;
      document.body.appendChild(enlace);
      enlace.click();
      document.body.removeChild(enlace);
    } catch (e) {
      // Silencioso.
    } finally {
      setDescargandoId(null);
    }
  };

  // Agrupa los contenidos por rol del creador, respetando el orden de GRUPOS_ROL.
  const grupos = React.useMemo(() => {
    const definiciones = [...GRUPOS_ROL, GRUPO_SIN_ROL];
    return definiciones
      .map((definicion) => ({
        ...definicion,
        items: contenidos.filter((c) => {
          const rol = (c.rolCreador || '').toUpperCase();
          return definicion.rol === null
            ? !GRUPOS_ROL.some((g) => g.rol === rol)
            : rol === definicion.rol;
        }),
      }))
      .filter((grupo) => grupo.items.length > 0);
  }, [contenidos]);

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Catálogo de Contenidos</h1>
          <p className="mt-1 text-sm text-gray-500">
            Material subido por cada rol. Puedes descargar cualquier archivo.
          </p>
        </div>
        <button
          onClick={cargar}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
        >
          <RefreshCw className="h-4 w-4" />
          Actualizar
        </button>
      </div>

      {cargando ? (
        <div className="flex items-center gap-2 rounded-xl border border-gray-100 bg-white px-5 py-8 text-sm text-gray-500">
          <Loader2 className="h-4 w-4 animate-spin" />
          Cargando contenidos…
        </div>
      ) : error ? (
        <div className="rounded-xl border border-rose-100 bg-rose-50 px-5 py-4 text-sm text-rose-700">
          {error}
        </div>
      ) : grupos.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-200 bg-white px-5 py-10 text-center text-sm text-gray-500">
          Aún no hay contenidos subidos.
        </div>
      ) : (
        <div className="space-y-8">
          {grupos.map((grupo) => (
            <section key={grupo.titulo}>
              <div className="mb-3 flex items-center gap-3">
                <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${grupo.chip}`}>
                  <grupo.Icon className="h-4 w-4" />
                </span>
                <h2 className="text-lg font-semibold text-gray-800">{grupo.titulo}</h2>
                <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-500">
                  {grupo.items.length} archivo{grupo.items.length !== 1 ? 's' : ''}
                </span>
              </div>

              <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
                <ul className="divide-y divide-gray-100">
                  {grupo.items.map((recurso) => (
                    <li
                      key={recurso.id}
                      className="flex items-center gap-4 px-5 py-3.5 transition hover:bg-gray-50"
                    >
                      <span className={`h-9 w-1 shrink-0 rounded-full ${grupo.bar}`} />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-gray-800">
                          {recurso.titulo}
                        </p>
                        <div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                          <span className="inline-flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {recurso.creadoPor || 'Usuario Desconocido'}
                          </span>
                          <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${grupo.chip}`}>
                            {recurso.tipo}
                          </span>
                          {recurso.creadoEn && (
                            <span className="inline-flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {recurso.creadoPor || 'Desconocido'} • {recurso.rolCreador || 'Sin clasificar'}
                          </span>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={() => setRecursoPreview(recurso)}
                        title={`Vista previa de ${recurso.titulo}`}
                        className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
                      >
                        <Eye className="h-4 w-4" />
                        <span className="hidden sm:inline">Vista previa</span>
                      </button>
                      <button
                        onClick={() => handleDescargar(recurso)}
                        disabled={descargandoId === recurso.id}
                        title={`Descargar ${recurso.titulo}`}
                        className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-emerald-700 disabled:opacity-60"
                      >
                        {descargandoId === recurso.id ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <FileDown className="h-4 w-4" />
                        )}
                        <span className="hidden sm:inline">Descargar</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      )}

      <DocumentPreviewModal
        recurso={recursoPreview}
        onClose={() => setRecursoPreview(null)}
      />
    </div>
  );
};

export default ContenidosCatalogoPage;