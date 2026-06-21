import React from 'react';
import {
  COURSE_TO_TIPO_MATERIA,
  fetchUnidadesPorMateria,
  fetchContenidosPorMateria,
  crearUnidad,
  actualizarUnidad,
  eliminarUnidad,
  crearContenido,
  actualizarContenido,
  eliminarContenido,
  crearVideo,
  actualizarVideo,
  eliminarVideo,
  crearAsignacion,
  actualizarAsignacion,
  eliminarAsignacion,
} from '../services/contenidoApi';

const COURSE_OPTIONS = Object.entries(COURSE_TO_TIPO_MATERIA);
const CONTENT_TYPES = ['LECCION', 'RECURSO', 'TAREA'];
const VIDEO_TYPES = ['APRENDIZAJE', 'ACTIVIDAD', 'OTRO'];

const INITIAL_CONTENT = {
  id: null,
  titulo: '',
  descripcion: '',
  tipo: 'LECCION',
  orden: 1,
  url_recurso: '',
  contenido: '',
  unidadId: '',
};

const INITIAL_VIDEO = {
  id: null,
  titulo: '',
  descripcion: '',
  youtubeUrl: '',
  tipos: ['APRENDIZAJE'],
  publicado: true,
  unidadId: '',
  contenidoId: '',
  asignacionIds: [],
};

const INITIAL_ASSIGNMENT = {
  id: null,
  titulo: '',
  descripcion: '',
  periodo: 1,
  porcentaje: 0,
  grupo: '',
  entregable: true,
  rubrica: '',
  orden: 1,
  activa: true,
  unidadId: '',
  contenidoId: '',
  videoIds: [],
};

function MultiToggle({ options, value, onChange }) {
  const selected = value || [];

  const toggle = (option) => {
    const next = selected.includes(option)
      ? selected.filter((item) => item !== option)
      : [...selected, option];
    onChange(next);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const active = selected.includes(option);
        return (
          <button
            key={option}
            type="button"
            onClick={() => toggle(option)}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition ${
              active
                ? 'bg-[#6b2132] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {option.toLowerCase()}
          </button>
        );
      })}
    </div>
  );
}

function LinkSelector({ items, selectedIds, onChange, emptyLabel }) {
  if (!items.length) {
    return <p className="text-xs text-gray-500">{emptyLabel}</p>;
  }

  const toggle = (id) => {
    const numericId = Number(id);
    const next = selectedIds.includes(numericId)
      ? selectedIds.filter((item) => item !== numericId)
      : [...selectedIds, numericId];
    onChange(next);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => {
        const active = selectedIds.includes(Number(item.id));
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => toggle(item.id)}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
              active
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

function mapUnitList(unidades) {
  return unidades.flatMap(({ unidad, contenidos }) =>
    (contenidos || []).map((contenido) => ({
      ...contenido,
      unidad,
    })),
  );
}

function sortUnits(unidades) {
  return [...unidades].sort((a, b) => a.unidad.unidad_id - b.unidad.unidad_id);
}

function sortContents(contenidos) {
  return [...contenidos].sort((a, b) => {
    const unidadA = Number(a.unidad?.unidad_id || a.unidad_id || 0);
    const unidadB = Number(b.unidad?.unidad_id || b.unidad_id || 0);

    if (unidadA !== unidadB) {
      return unidadA - unidadB;
    }

    const ordenA = Number(a.orden || 0);
    const ordenB = Number(b.orden || 0);

    if (ordenA !== ordenB) {
      return ordenA - ordenB;
    }

    return Number(a.contenido_id || 0) - Number(b.contenido_id || 0);
  });
}

const ContentManagementPanel = ({ roleLabel = 'Moderación' }) => {
  const [selectedCourse, setSelectedCourse] = React.useState(COURSE_OPTIONS[0][0]);
  const [selectedUnitFilter, setSelectedUnitFilter] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');
  const [unidades, setUnidades] = React.useState([]);
  const [catalogoContenidos, setCatalogoContenidos] = React.useState([]);
  const [unitDraft, setUnitDraft] = React.useState({ id: null, nombre: '' });
  const [contentDraft, setContentDraft] = React.useState(INITIAL_CONTENT);
  const [videoDraft, setVideoDraft] = React.useState(INITIAL_VIDEO);
  const [assignmentDraft, setAssignmentDraft] = React.useState(INITIAL_ASSIGNMENT);

  const tipoMateria = COURSE_TO_TIPO_MATERIA[selectedCourse];
  const opcionesUnidad = React.useMemo(
    () => unidades.map(({ unidad }) => unidad),
    [unidades],
  );
  const unidadesFiltradas = React.useMemo(
    () =>
      selectedUnitFilter
        ? unidades.filter(({ unidad }) => Number(unidad.unidad_id) === Number(selectedUnitFilter))
        : unidades,
    [selectedUnitFilter, unidades],
  );
  const contenidos = React.useMemo(
    () => (catalogoContenidos.length ? sortContents(catalogoContenidos) : sortContents(mapUnitList(unidades))),
    [catalogoContenidos, unidades],
  );
  const contenidosVideo = React.useMemo(
    () =>
      contenidos.filter((contenido) =>
        videoDraft.unidadId
          ? Number(contenido.unidad_id) === Number(videoDraft.unidadId)
          : true,
      ),
    [contenidos, videoDraft.unidadId],
  );
  const contenidosAsignacion = React.useMemo(
    () =>
      contenidos.filter((contenido) =>
        assignmentDraft.unidadId
          ? Number(contenido.unidad_id) === Number(assignmentDraft.unidadId)
          : true,
      ),
    [assignmentDraft.unidadId, contenidos],
  );
  const findContenidoById = React.useCallback(
    (contenidoId) =>
      contenidos.find((item) => Number(item.contenido_id) === Number(contenidoId)),
    [contenidos],
  );
  const videoLinkOptions = React.useMemo(() => {
    const content = findContenidoById(assignmentDraft.contenidoId);
    return (content?.videos || []).map((item) => ({ id: item.id, label: item.titulo }));
  }, [assignmentDraft.contenidoId, findContenidoById]);
  const assignmentLinkOptions = React.useMemo(() => {
    const content = findContenidoById(videoDraft.contenidoId);
    return (content?.asignaciones || []).map((item) => ({ id: item.id, label: item.titulo }));
  }, [findContenidoById, videoDraft.contenidoId]);

  const cargarContenido = React.useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const [unidadesData, contenidosData] = await Promise.all([
        fetchUnidadesPorMateria(tipoMateria),
        fetchContenidosPorMateria(tipoMateria),
      ]);

      const contenidosOrdenados = sortContents(contenidosData);
      const unidadMap = new Map();

      unidadesData.forEach(({ unidad }) => {
        unidadMap.set(Number(unidad.unidad_id), unidad);
      });

      contenidosOrdenados.forEach((contenido) => {
        if (contenido.unidad) {
          unidadMap.set(Number(contenido.unidad.unidad_id), contenido.unidad);
        }
      });

      const contenidosPorUnidad = contenidosOrdenados.reduce((acc, contenido) => {
        const unidadId = Number(contenido.unidad_id);
        if (!acc.has(unidadId)) {
          acc.set(unidadId, []);
        }
        acc.get(unidadId).push(contenido);
        return acc;
      }, new Map());

      const mergedUnits = Array.from(unidadMap.values()).map((unidad) => ({
        unidad,
        contenidos: contenidosPorUnidad.get(Number(unidad.unidad_id)) || [],
      }));

      setCatalogoContenidos(contenidosOrdenados);
      setUnidades(sortUnits(mergedUnits));
    } catch (loadError) {
      setError(loadError.message || 'No fue posible cargar el catálogo.');
    } finally {
      setLoading(false);
    }
  }, [tipoMateria]);

  React.useEffect(() => {
    cargarContenido();
  }, [cargarContenido]);

  React.useEffect(() => {
    setSelectedUnitFilter('');
    setUnitDraft({ id: null, nombre: '' });
    setContentDraft(INITIAL_CONTENT);
    setVideoDraft(INITIAL_VIDEO);
    setAssignmentDraft(INITIAL_ASSIGNMENT);
  }, [selectedCourse]);

  const resetMessages = () => {
    setError('');
    setSuccess('');
  };

  const showSuccess = (message) => {
    setSuccess(message);
    setTimeout(() => setSuccess(''), 2500);
  };

  const handleUnitSubmit = async (event) => {
    event.preventDefault();
    resetMessages();
    try {
      if (unitDraft.id) {
        const updated = await actualizarUnidad(unitDraft.id, unitDraft.nombre);
        setUnidades((current) =>
          sortUnits(current.map((item) =>
            item.unidad.unidad_id === updated.id
              ? { ...item, unidad: { unidad_id: updated.id, nombre: updated.nombre } }
              : item,
          )),
        );
        showSuccess('Unidad actualizada.');
      } else {
        const created = await crearUnidad(unitDraft.nombre);
        setUnidades((current) =>
          sortUnits([
            ...current,
            {
              unidad: {
                unidad_id: created.id,
                nombre: created.nombre,
              },
              contenidos: [],
            },
          ]),
        );
        showSuccess('Unidad creada.');
      }
      setUnitDraft({ id: null, nombre: '' });
    } catch (submitError) {
      setError(submitError.message || 'No fue posible guardar la unidad.');
    }
  };

  const handleContentSubmit = async (event) => {
    event.preventDefault();
    resetMessages();
    const payload = {
      ...contentDraft,
      tipoMateria,
      orden: Number(contentDraft.orden),
      unidadId: Number(contentDraft.unidadId),
      contenido: contentDraft.contenido
        .split('\n\n')
        .map((item) => item.trim())
        .filter(Boolean),
    };

    try {
      if (contentDraft.id) {
        await actualizarContenido({ ...payload, id: Number(contentDraft.id) });
        showSuccess('Tema actualizado.');
      } else {
        await crearContenido(payload);
        showSuccess('Tema creado.');
      }
      setContentDraft(INITIAL_CONTENT);
      await cargarContenido();
    } catch (submitError) {
      setError(submitError.message || 'No fue posible guardar el tema.');
    }
  };

  const handleVideoSubmit = async (event) => {
    event.preventDefault();
    resetMessages();
    try {
      const { unidadId, ...videoPayload } = videoDraft;
      if (videoDraft.id) {
        await actualizarVideo({
          ...videoPayload,
          contenidoId: Number(videoDraft.contenidoId),
        });
        showSuccess('Video actualizado.');
      } else {
        await crearVideo({
          ...videoPayload,
          contenidoId: Number(videoDraft.contenidoId),
        });
        showSuccess('Video creado.');
      }
      setVideoDraft(INITIAL_VIDEO);
      await cargarContenido();
    } catch (submitError) {
      setError(submitError.message || 'No fue posible guardar el video.');
    }
  };

  const handleAssignmentSubmit = async (event) => {
    event.preventDefault();
    resetMessages();
    try {
      const { unidadId, ...assignmentPayload } = assignmentDraft;
      const payload = {
        ...assignmentPayload,
        contenidoId: Number(assignmentDraft.contenidoId),
      };

      if (assignmentDraft.id) {
        await actualizarAsignacion(payload);
        showSuccess('Asignación actualizada.');
      } else {
        await crearAsignacion(payload);
        showSuccess('Asignación creada.');
      }
      setAssignmentDraft(INITIAL_ASSIGNMENT);
      await cargarContenido();
    } catch (submitError) {
      setError(submitError.message || 'No fue posible guardar la asignación.');
    }
  };

  const startEditContent = (contenido) => {
    setContentDraft({
      id: contenido.contenido_id,
      titulo: contenido.titulo,
      descripcion: contenido.descripcion,
      tipo: contenido.tipo.toUpperCase(),
      orden: contenido.orden,
      url_recurso: contenido.url_recurso || '',
      contenido: (contenido.contenido || []).join('\n\n'),
      unidadId: contenido.unidad_id,
    });
  };

  const startEditVideo = (video) => {
    const contenido = findContenidoById(video.contenidoId);
    setVideoDraft({
      id: video.id,
      titulo: video.titulo,
      descripcion: video.descripcion,
      youtubeUrl: video.youtubeUrl,
      tipos: video.tipos || [],
      publicado: video.publicado,
      unidadId: contenido?.unidad_id || '',
      contenidoId: video.contenidoId,
      asignacionIds: (video.asignaciones || []).map((item) => item.id),
    });
  };

  const startEditAssignment = (asignacion) => {
    const contenido = findContenidoById(asignacion.contenidoId);
    setAssignmentDraft({
      id: asignacion.id,
      titulo: asignacion.titulo,
      descripcion: asignacion.descripcion,
      periodo: asignacion.periodo,
      porcentaje: asignacion.porcentaje,
      grupo: asignacion.grupo,
      entregable: asignacion.entregable,
      rubrica: asignacion.rubrica,
      orden: asignacion.orden,
      activa: asignacion.activa,
      unidadId: contenido?.unidad_id || '',
      contenidoId: asignacion.contenidoId,
      videoIds: (asignacion.videos || []).map((item) => item.id),
    });
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{roleLabel} de contenidos</h2>
            <p className="text-sm text-gray-500">
              Gestiona unidades, temas, videos de YouTube y asignaciones vinculadas.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <select
              value={selectedCourse}
              onChange={(event) => setSelectedCourse(event.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm"
            >
              {COURSE_OPTIONS.map(([course]) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
            <select
              value={selectedUnitFilter}
              onChange={(event) => setSelectedUnitFilter(event.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm"
            >
              <option value="">Todas las unidades de {selectedCourse}</option>
              {opcionesUnidad.map((unidad) => (
                <option key={unidad.unidad_id} value={unidad.unidad_id}>
                  {unidad.nombre}
                </option>
              ))}
            </select>
          </div>
        </div>
        {error && <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
        {success && (
          <p className="mt-4 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
            {success}
          </p>
        )}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <form onSubmit={handleUnitSubmit} className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
          <h3 className="text-lg font-bold text-gray-900">Unidad</h3>
          <input
            value={unitDraft.nombre}
            onChange={(event) => setUnitDraft({ ...unitDraft, nombre: event.target.value })}
            placeholder="Nombre de la unidad"
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
            required
          />
          <div className="flex gap-3">
            <button className="rounded-lg bg-[#6b2132] px-4 py-2 text-sm font-semibold text-white">
              {unitDraft.id ? 'Guardar cambios' : 'Crear unidad'}
            </button>
            {unitDraft.id && (
              <button
                type="button"
                onClick={() => setUnitDraft({ id: null, nombre: '' })}
                className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700"
              >
                Cancelar
              </button>
            )}
          </div>
        </form>

        <form onSubmit={handleContentSubmit} className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
          <h3 className="text-lg font-bold text-gray-900">Tema</h3>
          <select
            value={selectedCourse}
            onChange={(event) => setSelectedCourse(event.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
          >
            {COURSE_OPTIONS.map(([course]) => (
              <option key={course} value={course}>
                Materia: {course}
              </option>
            ))}
          </select>
          <select
            value={contentDraft.unidadId}
            onChange={(event) => setContentDraft({ ...contentDraft, unidadId: event.target.value })}
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
            required
          >
            <option value="">Selecciona una unidad</option>
            {unidades.map(({ unidad }) => (
              <option key={unidad.unidad_id} value={unidad.unidad_id}>
                {unidad.nombre}
              </option>
            ))}
          </select>
          <input
            value={contentDraft.titulo}
            onChange={(event) => setContentDraft({ ...contentDraft, titulo: event.target.value })}
            placeholder="Título del tema"
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
            required
          />
          <textarea
            value={contentDraft.descripcion}
            onChange={(event) =>
              setContentDraft({ ...contentDraft, descripcion: event.target.value })
            }
            placeholder="Descripción breve"
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
            rows="2"
            required
          />
          <div className="grid gap-3 md:grid-cols-2">
            <select
              value={contentDraft.tipo}
              onChange={(event) => setContentDraft({ ...contentDraft, tipo: event.target.value })}
              className="rounded-lg border border-gray-300 px-4 py-2"
            >
              {CONTENT_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <input
              type="number"
              min="1"
              value={contentDraft.orden}
              onChange={(event) => setContentDraft({ ...contentDraft, orden: event.target.value })}
              className="rounded-lg border border-gray-300 px-4 py-2"
              placeholder="Orden"
            />
          </div>
          <input
            value={contentDraft.url_recurso}
            onChange={(event) =>
              setContentDraft({ ...contentDraft, url_recurso: event.target.value })
            }
            placeholder="URL de recurso opcional"
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
          />
          <textarea
            value={contentDraft.contenido}
            onChange={(event) => setContentDraft({ ...contentDraft, contenido: event.target.value })}
            placeholder="Bloques del tema separados por una línea en blanco"
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
            rows="6"
            required
          />
          <button className="rounded-lg bg-[#6b2132] px-4 py-2 text-sm font-semibold text-white">
            {contentDraft.id ? 'Guardar cambios' : 'Crear tema'}
          </button>
        </form>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <form onSubmit={handleVideoSubmit} className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
          <h3 className="text-lg font-bold text-gray-900">Video de YouTube</h3>
          <select
            value={selectedCourse}
            onChange={(event) => setSelectedCourse(event.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
          >
            {COURSE_OPTIONS.map(([course]) => (
              <option key={course} value={course}>
                Materia: {course}
              </option>
            ))}
          </select>
          <select
            value={videoDraft.unidadId}
            onChange={(event) =>
              setVideoDraft({
                ...videoDraft,
                unidadId: event.target.value,
                contenidoId: '',
                asignacionIds: [],
              })
            }
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
            required
          >
            <option value="">Selecciona una unidad</option>
            {opcionesUnidad
              .filter((unidad) =>
                selectedUnitFilter ? Number(unidad.unidad_id) === Number(selectedUnitFilter) : true,
              )
              .map((unidad) => (
              <option key={unidad.unidad_id} value={unidad.unidad_id}>
                {unidad.nombre}
              </option>
              ))}
          </select>
          <select
            value={videoDraft.contenidoId}
            onChange={(event) =>
              setVideoDraft({
                ...videoDraft,
                contenidoId: event.target.value,
                asignacionIds: [],
              })
            }
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
            required
          >
            <option value="">Selecciona un tema</option>
            {contenidosVideo.map((contenido) => (
              <option key={contenido.contenido_id} value={contenido.contenido_id}>
                {contenido.unidad?.nombre ? `${contenido.unidad.nombre} · ${contenido.titulo}` : contenido.titulo}
              </option>
            ))}
          </select>
          <input
            value={videoDraft.titulo}
            onChange={(event) => setVideoDraft({ ...videoDraft, titulo: event.target.value })}
            placeholder="Título del video"
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
            required
          />
          <input
            value={videoDraft.youtubeUrl}
            onChange={(event) =>
              setVideoDraft({ ...videoDraft, youtubeUrl: event.target.value })
            }
            placeholder="https://www.youtube.com/watch?v=..."
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
            required
          />
          <textarea
            value={videoDraft.descripcion}
            onChange={(event) =>
              setVideoDraft({ ...videoDraft, descripcion: event.target.value })
            }
            placeholder="Descripción"
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
            rows="2"
          />
          <MultiToggle
            options={VIDEO_TYPES}
            value={videoDraft.tipos}
            onChange={(tipos) => setVideoDraft({ ...videoDraft, tipos })}
          />
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
              Relacionar con asignaciones
            </p>
            <LinkSelector
              items={assignmentLinkOptions}
              selectedIds={videoDraft.asignacionIds}
              onChange={(asignacionIds) => setVideoDraft({ ...videoDraft, asignacionIds })}
              emptyLabel="Primero crea una asignación en este tema."
            />
          </div>
          <button className="rounded-lg bg-[#6b2132] px-4 py-2 text-sm font-semibold text-white">
            {videoDraft.id ? 'Guardar video' : 'Crear video'}
          </button>
        </form>

        <form
          onSubmit={handleAssignmentSubmit}
          className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4"
        >
          <h3 className="text-lg font-bold text-gray-900">Asignación dinámica</h3>
          <select
            value={selectedCourse}
            onChange={(event) => setSelectedCourse(event.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
          >
            {COURSE_OPTIONS.map(([course]) => (
              <option key={course} value={course}>
                Materia: {course}
              </option>
            ))}
          </select>
          <select
            value={assignmentDraft.unidadId}
            onChange={(event) =>
              setAssignmentDraft({
                ...assignmentDraft,
                unidadId: event.target.value,
                contenidoId: '',
                videoIds: [],
              })
            }
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
            required
          >
            <option value="">Selecciona una unidad</option>
            {opcionesUnidad
              .filter((unidad) =>
                selectedUnitFilter ? Number(unidad.unidad_id) === Number(selectedUnitFilter) : true,
              )
              .map((unidad) => (
              <option key={unidad.unidad_id} value={unidad.unidad_id}>
                {unidad.nombre}
              </option>
              ))}
          </select>
          <select
            value={assignmentDraft.contenidoId}
            onChange={(event) =>
              setAssignmentDraft({
                ...assignmentDraft,
                contenidoId: event.target.value,
                videoIds: [],
              })
            }
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
            required
          >
            <option value="">Selecciona un tema</option>
            {contenidosAsignacion.map((contenido) => (
              <option key={contenido.contenido_id} value={contenido.contenido_id}>
                {contenido.unidad?.nombre ? `${contenido.unidad.nombre} · ${contenido.titulo}` : contenido.titulo}
              </option>
            ))}
          </select>
          <input
            value={assignmentDraft.titulo}
            onChange={(event) =>
              setAssignmentDraft({ ...assignmentDraft, titulo: event.target.value })
            }
            placeholder="Nombre de la asignación"
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
            required
          />
          <textarea
            value={assignmentDraft.descripcion}
            onChange={(event) =>
              setAssignmentDraft({ ...assignmentDraft, descripcion: event.target.value })
            }
            placeholder="Descripción"
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
            rows="2"
          />
          <div className="grid gap-3 md:grid-cols-3">
            <input
              type="number"
              min="1"
              max="3"
              value={assignmentDraft.periodo}
              onChange={(event) =>
                setAssignmentDraft({ ...assignmentDraft, periodo: event.target.value })
              }
              className="rounded-lg border border-gray-300 px-4 py-2"
              placeholder="Periodo"
            />
            <input
              type="number"
              min="0"
              max="100"
              value={assignmentDraft.porcentaje}
              onChange={(event) =>
                setAssignmentDraft({ ...assignmentDraft, porcentaje: event.target.value })
              }
              className="rounded-lg border border-gray-300 px-4 py-2"
              placeholder="%"
            />
            <input
              type="number"
              min="1"
              value={assignmentDraft.orden}
              onChange={(event) =>
                setAssignmentDraft({ ...assignmentDraft, orden: event.target.value })
              }
              className="rounded-lg border border-gray-300 px-4 py-2"
              placeholder="Orden"
            />
          </div>
          <input
            value={assignmentDraft.grupo}
            onChange={(event) => setAssignmentDraft({ ...assignmentDraft, grupo: event.target.value })}
            placeholder="Grupo opcional"
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
          />
          <input
            value={assignmentDraft.rubrica}
            onChange={(event) =>
              setAssignmentDraft({ ...assignmentDraft, rubrica: event.target.value })
            }
            placeholder="Rúbrica"
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
          />
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
              Vincular videos
            </p>
            <LinkSelector
              items={videoLinkOptions}
              selectedIds={assignmentDraft.videoIds}
              onChange={(videoIds) => setAssignmentDraft({ ...assignmentDraft, videoIds })}
              emptyLabel="Primero crea un video en este tema."
            />
          </div>
          <button className="rounded-lg bg-[#6b2132] px-4 py-2 text-sm font-semibold text-white">
            {assignmentDraft.id ? 'Guardar asignación' : 'Crear asignación'}
          </button>
        </form>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-900">Catálogo actual</h3>
          <button
            type="button"
            onClick={cargarContenido}
            className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700"
          >
            Recargar
          </button>
        </div>
        {loading ? (
          <p className="mt-4 text-sm text-gray-500">Cargando contenidos...</p>
        ) : (
          <div className="mt-6 space-y-6">
            {unidadesFiltradas.map(({ unidad, contenidos: contenidosUnidad }) => (
              <div key={unidad.unidad_id} className="rounded-2xl border border-gray-200 p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Unidad</p>
                    <h4 className="text-xl font-bold text-gray-900">{unidad.nombre}</h4>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setUnitDraft({ id: unidad.unidad_id, nombre: unidad.nombre })}
                      className="rounded-lg bg-gray-100 px-3 py-2 text-xs font-semibold text-gray-700"
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      onClick={async () => {
                        await eliminarUnidad(unidad.unidad_id);
                        await cargarContenido();
                      }}
                      className="rounded-lg bg-red-50 px-3 py-2 text-xs font-semibold text-red-700"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>

                <div className="mt-4 space-y-4">
                  {(contenidosUnidad || []).map((contenido) => (
                    <div key={contenido.contenido_id} className="rounded-xl bg-gray-50 p-4">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h5 className="font-bold text-gray-900">{contenido.titulo}</h5>
                          <p className="text-sm text-gray-600">{contenido.descripcion}</p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => startEditContent(contenido)}
                            className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-gray-700"
                          >
                            Editar tema
                          </button>
                          <button
                            type="button"
                            onClick={async () => {
                              await eliminarContenido(contenido.contenido_id);
                              await cargarContenido();
                            }}
                            className="rounded-lg bg-red-50 px-3 py-2 text-xs font-semibold text-red-700"
                          >
                            Eliminar tema
                          </button>
                        </div>
                      </div>

                      <div className="mt-3 grid gap-3 lg:grid-cols-2">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                            Videos
                          </p>
                          <div className="mt-2 space-y-2">
                            {(contenido.videos || []).map((video) => (
                              <div key={video.id} className="flex items-center justify-between rounded-lg bg-white px-3 py-2">
                                <div>
                                  <p className="text-sm font-semibold text-gray-800">{video.titulo}</p>
                                  <p className="text-xs text-gray-500">{(video.tipos || []).join(', ')}</p>
                                </div>
                                <div className="flex gap-2">
                                  <button
                                    type="button"
                                    onClick={() => startEditVideo(video)}
                                    className="text-xs font-semibold text-gray-700"
                                  >
                                    Editar
                                  </button>
                                  <button
                                    type="button"
                                    onClick={async () => {
                                      await eliminarVideo(video.id);
                                      await cargarContenido();
                                    }}
                                    className="text-xs font-semibold text-red-700"
                                  >
                                    Eliminar
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                            Asignaciones
                          </p>
                          <div className="mt-2 space-y-2">
                            {(contenido.asignaciones || []).map((asignacion) => (
                              <div key={asignacion.id} className="rounded-lg bg-white px-3 py-2">
                                <div className="flex items-center justify-between gap-2">
                                  <div>
                                    <p className="text-sm font-semibold text-gray-800">{asignacion.titulo}</p>
                                    <p className="text-xs text-gray-500">
                                      Parcial {asignacion.periodo} · {asignacion.porcentaje}%
                                    </p>
                                  </div>
                                  <div className="flex gap-2">
                                    <button
                                      type="button"
                                      onClick={() => startEditAssignment(asignacion)}
                                      className="text-xs font-semibold text-gray-700"
                                    >
                                      Editar
                                    </button>
                                    <button
                                      type="button"
                                      onClick={async () => {
                                        await eliminarAsignacion(asignacion.id);
                                        await cargarContenido();
                                      }}
                                      className="text-xs font-semibold text-red-700"
                                    >
                                      Eliminar
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentManagementPanel;
