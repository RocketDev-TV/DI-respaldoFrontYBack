import { CONTENIDOS_MOCK } from '../data/mockGuionDidactico';
import { AreaComputacion } from '../data/enum';
import { getGraphqlApiUrl, shouldUseMockGuion } from './apiConfig';
import { obtenerSesionAuth } from '../utils/localStorage';

const GRAPHQL_API_URL = getGraphqlApiUrl();
const SHOULD_USE_MOCK = shouldUseMockGuion();

export const COURSE_TO_TIPO_MATERIA = {
  Compiladores: 'COMPILADORES',
  'Teoría de la Computación.': 'TEORIA_DE_LA_COMPUTACION',
};

const TIPO_MATERIA_TO_AREA = {
  COMPILADORES: AreaComputacion.COMPILADORES,
  TEORIA_DE_LA_COMPUTACION: AreaComputacion.TEORIA_COMPUTACION,
};

function getAuthHeaders() {
  const headers = {
    'Content-Type': 'application/json',
  };
  const token = obtenerSesionAuth()?.token;

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

async function graphqlRequest(query, variables) {
  const response = await fetch(GRAPHQL_API_URL, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`Error HTTP ${response.status}`);
  }

  const payload = await response.json();

  if (payload.errors?.length) {
    throw new Error(payload.errors[0].message || 'Error consultando GraphQL');
  }

  return payload.data;
}

function omitNilId(payload) {
  if (!payload || payload.id === undefined || payload.id === null || payload.id === '') {
    const { id, ...rest } = payload || {};
    return rest;
  }

  return payload;
}

function mapVideo(video) {
  return {
    id: video.id,
    titulo: video.titulo,
    descripcion: video.descripcion,
    youtubeUrl: video.youtubeUrl,
    youtubeId: video.youtubeId,
    tipos: video.tipos || [],
    publicado: video.publicado,
    contenidoId: video.contenidoId,
    asignaciones: video.asignaciones || [],
  };
}

function mapAsignacion(asignacion) {
  return {
    id: asignacion.id,
    nombre: asignacion.titulo,
    titulo: asignacion.titulo,
    descripcion: asignacion.descripcion,
    porcentaje: asignacion.porcentaje,
    periodo: asignacion.periodo,
    grupo: asignacion.grupo,
    entregable: asignacion.entregable,
    rubrica: asignacion.rubrica,
    orden: asignacion.orden,
    activa: asignacion.activa,
    contenidoId: asignacion.contenidoId,
    videos: (asignacion.videos || []).map(mapVideo),
  };
}

function agruparContenidosPorUnidad(contenidos) {
  const unidades = new Map();

  contenidos.forEach((contenido) => {
    const key = contenido.unidad_id;

    if (!unidades.has(key)) {
      unidades.set(key, {
        unidad: {
          unidad_id: contenido.unidad.unidad_id,
          nombre: contenido.unidad.nombre,
        },
        contenidos: [],
      });
    }

    unidades.get(key).contenidos.push(contenido);
  });

  return Array.from(unidades.values());
}

function fetchUnidadesDesdeMock(tipoMateria) {
  const area = TIPO_MATERIA_TO_AREA[tipoMateria];
  const contenidos = CONTENIDOS_MOCK.filter((contenido) => contenido.area === area);
  return agruparContenidosPorUnidad(contenidos);
}

function normalizarContenido(contenido, unidad) {
  return {
    contenido_id: contenido.id,
    titulo: contenido.titulo,
    descripcion: contenido.descripcion,
    tipo: contenido.tipo ? contenido.tipo.toLowerCase() : 'leccion',
    tipoMateria: contenido.tipoMateria,
    orden: contenido.orden,
    url_recurso: contenido.url_recurso,
    contenido: contenido.contenido,
    unidad_id: contenido.unidadId,
    unidad: {
      unidad_id: unidad.id,
      nombre: unidad.nombre,
    },
    videos: (contenido.videos || []).map(mapVideo),
    asignaciones: (contenido.asignaciones || []).map(mapAsignacion),
  };
}

function normalizarRespuestaApi(unidades) {
  return (unidades || []).map((unidad) => ({
    unidad: {
      unidad_id: unidad.id,
      nombre: unidad.nombre,
    },
    contenidos: (unidad.contenidos || []).map((contenido) =>
      normalizarContenido(contenido, unidad),
    ),
  }));
}

function normalizarContenidoPlano(contenido) {
  const unidad = contenido.unidad || {
    id: contenido.unidadId,
    nombre: `Unidad ${contenido.unidadId}`,
  };

  return normalizarContenido(contenido, unidad);
}

export async function fetchUnidadesPorMateria(tipoMateria) {
  if (SHOULD_USE_MOCK) {
    return fetchUnidadesDesdeMock(tipoMateria);
  }

  const data = await graphqlRequest(
    `
      query UnidadesPorMateria($tipoMateria: TipoMateria!) {
        unidades(tipoMateria: $tipoMateria) {
          id
          nombre
          contenidos {
            id
            titulo
            descripcion
            tipo
            tipoMateria
            orden
            url_recurso
            contenido
            unidadId
            videos {
              id
              titulo
              descripcion
              youtubeUrl
              youtubeId
              tipos
              publicado
              contenidoId
            }
            asignaciones {
              id
              titulo
              descripcion
              porcentaje
              periodo
              grupo
              entregable
              rubrica
              orden
              activa
              contenidoId
              videos {
                id
                titulo
                descripcion
                youtubeUrl
                youtubeId
                tipos
                publicado
                contenidoId
              }
            }
          }
        }
      }
    `,
    { tipoMateria },
  );

  return normalizarRespuestaApi(data.unidades);
}

export async function fetchContenidosPorMateria(tipoMateria) {
  if (SHOULD_USE_MOCK) {
    const unidades = fetchUnidadesDesdeMock(tipoMateria);
    return unidades.flatMap(({ contenidos }) => contenidos);
  }

  const data = await graphqlRequest(
    `
      query ContenidosPorMateria($tipoMateria: TipoMateria) {
        contenidos(tipoMateria: $tipoMateria) {
          id
          titulo
          descripcion
          tipo
          tipoMateria
          orden
          url_recurso
          contenido
          unidadId
          unidad {
            id
            nombre
          }
          videos {
            id
            titulo
            descripcion
            youtubeUrl
            youtubeId
            tipos
            publicado
            contenidoId
          }
          asignaciones {
            id
            titulo
            descripcion
            porcentaje
            periodo
            grupo
            entregable
            rubrica
            orden
            activa
            contenidoId
            videos {
              id
              titulo
              descripcion
              youtubeUrl
              youtubeId
              tipos
              publicado
              contenidoId
            }
          }
        }
      }
    `,
    { tipoMateria },
  );

  return (data.contenidos || []).map(normalizarContenidoPlano);
}

export async function fetchAsignaciones({ periodo, contenidoId, grupo } = {}) {
  const data = await graphqlRequest(
    `
      query Asignaciones($periodo: Int, $contenidoId: Int, $grupo: String) {
        asignaciones(periodo: $periodo, contenidoId: $contenidoId, grupo: $grupo) {
          id
          titulo
          descripcion
          porcentaje
          periodo
          grupo
          entregable
          rubrica
          orden
          activa
          contenidoId
          videos {
            id
            titulo
            descripcion
            youtubeUrl
            youtubeId
            tipos
            publicado
            contenidoId
          }
        }
      }
    `,
    { periodo, contenidoId, grupo },
  );

  return (data.asignaciones || []).map(mapAsignacion);
}

export async function fetchVideos({ contenidoId, asignacionId, publicado } = {}) {
  const data = await graphqlRequest(
    `
      query Videos($contenidoId: Int, $asignacionId: Int, $publicado: Boolean) {
        videos(contenidoId: $contenidoId, asignacionId: $asignacionId, publicado: $publicado) {
          id
          titulo
          descripcion
          youtubeUrl
          youtubeId
          tipos
          publicado
          contenidoId
          asignaciones {
            id
            titulo
          }
        }
      }
    `,
    { contenidoId, asignacionId, publicado },
  );

  return (data.videos || []).map(mapVideo);
}

export async function crearUnidad(nombre) {
  const data = await graphqlRequest(
    `
      mutation CrearUnidad($createUnidadInput: CreateUnidadInput!) {
        crearUnidad(createUnidadInput: $createUnidadInput) {
          id
          nombre
        }
      }
    `,
    { createUnidadInput: { nombre } },
  );

  return data.crearUnidad;
}

export async function actualizarUnidad(id, nombre) {
  const data = await graphqlRequest(
    `
      mutation ActualizarUnidad($updateUnidadInput: UpdateUnidadInput!) {
        actualizarUnidad(updateUnidadInput: $updateUnidadInput) {
          id
          nombre
        }
      }
    `,
    { updateUnidadInput: { id: Number(id), nombre } },
  );

  return data.actualizarUnidad;
}

export async function eliminarUnidad(id) {
  const data = await graphqlRequest(
    `
      mutation EliminarUnidad($id: Int!) {
        eliminarUnidad(id: $id) {
          id
        }
      }
    `,
    { id: Number(id) },
  );

  return data.eliminarUnidad;
}

export async function crearContenido(payload) {
  const data = await graphqlRequest(
    `
      mutation CrearContenido($datos: CreateContenidoInput!) {
        crearContenido(datos: $datos) {
          id
        }
      }
    `,
    { datos: omitNilId(payload) },
  );

  return data.crearContenido;
}

export async function actualizarContenido(payload) {
  const data = await graphqlRequest(
    `
      mutation ActualizarContenido($datos: UpdateContenidoInput!) {
        actualizarContenido(datos: $datos) {
          id
        }
      }
    `,
    { datos: { ...payload, id: Number(payload.id) } },
  );

  return data.actualizarContenido;
}

export async function eliminarContenido(id) {
  const data = await graphqlRequest(
    `
      mutation EliminarContenido($id: Int!) {
        eliminarContenido(id: $id) {
          id
        }
      }
    `,
    { id: Number(id) },
  );

  return data.eliminarContenido;
}

export async function crearVideo(payload) {
  const data = await graphqlRequest(
    `
      mutation CrearVideo($datos: CreateVideoInput!) {
        crearVideo(datos: $datos) {
          id
        }
      }
    `,
    {
      datos: {
        ...omitNilId(payload),
        contenidoId: payload.contenidoId ? Number(payload.contenidoId) : null,
        asignacionIds: (payload.asignacionIds || []).map(Number),
      },
    },
  );

  return data.crearVideo;
}

export async function actualizarVideo(payload) {
  const data = await graphqlRequest(
    `
      mutation ActualizarVideo($datos: UpdateVideoInput!) {
        actualizarVideo(datos: $datos) {
          id
        }
      }
    `,
    {
      datos: {
        ...payload,
        id: Number(payload.id),
        contenidoId: payload.contenidoId ? Number(payload.contenidoId) : null,
        asignacionIds: payload.asignacionIds
          ? payload.asignacionIds.map(Number)
          : undefined,
      },
    },
  );

  return data.actualizarVideo;
}

export async function eliminarVideo(id) {
  const data = await graphqlRequest(
    `
      mutation EliminarVideo($id: Int!) {
        eliminarVideo(id: $id) {
          id
        }
      }
    `,
    { id: Number(id) },
  );

  return data.eliminarVideo;
}

export async function crearAsignacion(payload) {
  const data = await graphqlRequest(
    `
      mutation CrearAsignacion($datos: CreateAsignacionInput!) {
        crearAsignacion(datos: $datos) {
          id
        }
      }
    `,
    {
      datos: {
        ...payload,
        periodo: Number(payload.periodo),
        porcentaje: Number(payload.porcentaje || 0),
        orden: Number(payload.orden || 0),
        contenidoId: payload.contenidoId ? Number(payload.contenidoId) : null,
        videoIds: (payload.videoIds || []).map(Number),
      },
    },
  );

  return data.crearAsignacion;
}

export async function actualizarAsignacion(payload) {
  const data = await graphqlRequest(
    `
      mutation ActualizarAsignacion($datos: UpdateAsignacionInput!) {
        actualizarAsignacion(datos: $datos) {
          id
        }
      }
    `,
    {
      datos: {
        ...payload,
        id: Number(payload.id),
        periodo: payload.periodo !== undefined ? Number(payload.periodo) : undefined,
        porcentaje:
          payload.porcentaje !== undefined ? Number(payload.porcentaje) : undefined,
        orden: payload.orden !== undefined ? Number(payload.orden) : undefined,
        contenidoId: payload.contenidoId ? Number(payload.contenidoId) : null,
        videoIds: payload.videoIds ? payload.videoIds.map(Number) : undefined,
      },
    },
  );

  return data.actualizarAsignacion;
}

export async function eliminarAsignacion(id) {
  const data = await graphqlRequest(
    `
      mutation EliminarAsignacion($id: Int!) {
        eliminarAsignacion(id: $id) {
          id
        }
      }
    `,
    { id: Number(id) },
  );

  return data.eliminarAsignacion;
}
