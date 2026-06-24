import { getGraphqlApiUrl } from './apiConfig';
import { obtenerSesionAuth } from '../utils/localStorage';

const GRAPHQL_API_URL = getGraphqlApiUrl();

function getAuthHeaders() {
  const headers = { 'Content-Type': 'application/json' };
  const token = obtenerSesionAuth()?.token;
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
}

async function gql(query, variables) {
  const res = await fetch(GRAPHQL_API_URL, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`Error HTTP ${res.status}`);
  const payload = await res.json();
  if (payload.errors?.length) throw new Error(payload.errors[0].message || 'Error GraphQL');
  return payload.data;
}

const CUESTIONARIO_FIELDS = `
  id titulo descripcion activo creadoEn
  preguntas {
    id texto tipo puntos
    opciones { id texto esCorrecta }
  }
`;

/* ── Cuestionarios ─────────────────────────────────────────── */

export async function fetchCuestionarios(todos = false) {
  const data = await gql(`query Cuestionarios($todos: Boolean) { cuestionarios(todos: $todos) { ${CUESTIONARIO_FIELDS} } }`, { todos });
  return data.cuestionarios;
}

export async function fetchCuestionario(id) {
  const data = await gql(`query Cuestionario($id: Int!) { cuestionario(id: $id) { ${CUESTIONARIO_FIELDS} } }`, { id: Number(id) });
  return data.cuestionario;
}

export async function crearCuestionarioCompleto(datos) {
  const data = await gql(
    `mutation CrearCuestionarioCompleto($datos: CrearCuestionarioInput!) {
      crearCuestionarioCompleto(datos: $datos) { ${CUESTIONARIO_FIELDS} }
    }`,
    { datos },
  );
  return data.crearCuestionarioCompleto;
}

export async function actualizarCuestionario(id, datos) {
  const data = await gql(
    `mutation ActualizarCuestionario($id: Int!, $datos: ActualizarCuestionarioInput!) {
      actualizarCuestionario(id: $id, datos: $datos) { ${CUESTIONARIO_FIELDS} }
    }`,
    { id: Number(id), datos },
  );
  return data.actualizarCuestionario;
}

export async function eliminarCuestionario(id) {
  const data = await gql(
    `mutation EliminarCuestionario($id: Int!) { eliminarCuestionario(id: $id) }`,
    { id: Number(id) },
  );
  return data.eliminarCuestionario;
}

/* ── Preguntas ─────────────────────────────────────────────── */

export async function agregarPregunta(datos) {
  const data = await gql(
    `mutation AgregarPregunta($datos: AgregarPreguntaInput!) {
      agregarPregunta(datos: $datos) { id texto tipo puntos cuestionarioId opciones { id texto esCorrecta } }
    }`,
    { datos },
  );
  return data.agregarPregunta;
}

export async function actualizarPregunta(id, datos) {
  const data = await gql(
    `mutation ActualizarPregunta($id: Int!, $datos: ActualizarPreguntaInput!) {
      actualizarPregunta(id: $id, datos: $datos) { id texto tipo puntos cuestionarioId opciones { id texto esCorrecta } }
    }`,
    { id: Number(id), datos },
  );
  return data.actualizarPregunta;
}

export async function eliminarPregunta(id) {
  const data = await gql(
    `mutation EliminarPregunta($id: Int!) { eliminarPregunta(id: $id) }`,
    { id: Number(id) },
  );
  return data.eliminarPregunta;
}

/* ── Opciones ──────────────────────────────────────────────── */

export async function agregarOpcion(datos) {
  const data = await gql(
    `mutation AgregarOpcion($datos: AgregarOpcionInput!) {
      agregarOpcion(datos: $datos) { id texto esCorrecta preguntaId }
    }`,
    { datos },
  );
  return data.agregarOpcion;
}

export async function actualizarOpcion(id, datos) {
  const data = await gql(
    `mutation ActualizarOpcion($id: Int!, $datos: ActualizarOpcionInput!) {
      actualizarOpcion(id: $id, datos: $datos) { id texto esCorrecta preguntaId }
    }`,
    { id: Number(id), datos },
  );
  return data.actualizarOpcion;
}

export async function eliminarOpcion(id) {
  const data = await gql(
    `mutation EliminarOpcion($id: Int!) { eliminarOpcion(id: $id) }`,
    { id: Number(id) },
  );
  return data.eliminarOpcion;
}

/* ── Evaluaciones ──────────────────────────────────────────── */

export async function registrarEvaluacionCuestionario({ alumnoId, cuestionarioId, calificacionFinal, pendienteRevision = false }) {
  const data = await gql(
    `mutation RegistrarEvaluacion($datos: RegistrarEvaluacionInput!) {
      registrarEvaluacionCuestionario(datos: $datos) {
        id alumnoId cuestionarioId calificacionFinal pendienteRevision completadoEn
      }
    }`,
    { datos: { alumnoId: Number(alumnoId), cuestionarioId: Number(cuestionarioId), calificacionFinal: Number(calificacionFinal), pendienteRevision } },
  );
  return data.registrarEvaluacionCuestionario;
}

export async function fetchEvaluacionesCuestionario({ alumnoId, cuestionarioId } = {}) {
  const variables = {};
  if (alumnoId) variables.alumnoId = Number(alumnoId);
  if (cuestionarioId) variables.cuestionarioId = Number(cuestionarioId);
  const data = await gql(
    `query EvaluacionesCuestionario($alumnoId: Int, $cuestionarioId: Int) {
      evaluacionesCuestionario(alumnoId: $alumnoId, cuestionarioId: $cuestionarioId) {
        id alumnoId cuestionarioId calificacionFinal pendienteRevision completadoEn
      }
    }`,
    variables,
  );
  return data.evaluacionesCuestionario;
}

export async function fetchEvaluacionesConAlumno(cuestionarioId) {
  const data = await gql(
    `query EvaluacionesConAlumno($cuestionarioId: Int!) {
      evaluacionesConAlumno(cuestionarioId: $cuestionarioId) {
        id alumnoId cuestionarioId calificacionFinal pendienteRevision completadoEn
        alumnoNombre alumnoApellido alumnoEmail alumnoGrupo
      }
    }`,
    { cuestionarioId: Number(cuestionarioId) },
  );
  return data.evaluacionesConAlumno;
}

/* ── Respuestas abiertas ───────────────────────────────────── */

export async function registrarRespuestaAbierta({ alumnoId, cuestionarioId, preguntaId, texto }) {
  const data = await gql(
    `mutation RegistrarRespuestaAbierta($datos: RegistrarRespuestaAbiertaInput!) {
      registrarRespuestaAbierta(datos: $datos) { id alumnoId cuestionarioId preguntaId texto calificada esCorrecta puntosOtorgados }
    }`,
    { datos: { alumnoId: Number(alumnoId), cuestionarioId: Number(cuestionarioId), preguntaId: Number(preguntaId), texto } },
  );
  return data.registrarRespuestaAbierta;
}

export async function fetchRespuestasAbiertas({ cuestionarioId, alumnoId, calificada } = {}) {
  // IMPORTANTE: calificada puede ser false (falsy) así que no usar if(calificada)
  const variables = {};
  if (cuestionarioId != null) variables.cuestionarioId = Number(cuestionarioId);
  if (alumnoId != null) variables.alumnoId = Number(alumnoId);
  if (calificada !== undefined && calificada !== null) variables.calificada = Boolean(calificada);
  const data = await gql(
    `query RespuestasAbiertas($cuestionarioId: Int, $alumnoId: Int, $calificada: Boolean) {
      respuestasAbiertas(cuestionarioId: $cuestionarioId, alumnoId: $alumnoId, calificada: $calificada) {
        id alumnoId cuestionarioId preguntaId texto calificada esCorrecta puntosOtorgados creadoEn
        alumnoNombre alumnoApellido preguntaTexto preguntaPuntos
      }
    }`,
    variables,
  );
  return data.respuestasAbiertas;
}

export async function calificarRespuestaAbierta({ id, esCorrecta, puntosOtorgados }) {
  const data = await gql(
    `mutation CalificarRespuestaAbierta($datos: CalificarRespuestaAbiertaInput!) {
      calificarRespuestaAbierta(datos: $datos) {
        id calificada esCorrecta puntosOtorgados alumnoNombre alumnoApellido preguntaTexto
      }
    }`,
    { datos: { id: Number(id), esCorrecta, puntosOtorgados: Number(puntosOtorgados) } },
  );
  return data.calificarRespuestaAbierta;
}
