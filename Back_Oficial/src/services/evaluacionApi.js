import { getGraphqlApiUrl } from './apiConfig';
import { obtenerSesionAuth } from '../utils/localStorage';

const GRAPHQL_API_URL = getGraphqlApiUrl();

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
    if (response.status === 413) {
      throw new Error(
        'El archivo excede el limite permitido por el servidor. Reduce el tamano e intenta de nuevo.',
      );
    }
    throw new Error(`Error HTTP ${response.status}`);
  }

  const payload = await response.json();

  if (payload.errors?.length) {
    throw new Error(payload.errors[0].message || 'Error en la solicitud');
  }

  return payload.data;
}

export async function registrarEntrega(payload) {
  const data = await graphqlRequest(
    `
      mutation RegistrarEntrega($datos: RegistrarEntregaInput!) {
        registrarEntrega(datos: $datos) {
          id
          asignacionId
          alumnoId
          nombreArchivo
          mimeType
          tamano
          entregadoEn
        }
      }
    `,
    {
      datos: {
        asignacionId: Number(payload.asignacionId),
        alumnoId: Number(payload.alumnoId),
        nombreArchivo: payload.nombreArchivo,
        mimeType: payload.mimeType,
        tamano: Number(payload.tamano || 0),
        archivoBase64: payload.archivoBase64,
      },
    },
  );

  return data.registrarEntrega;
}

export async function fetchEntregas({ alumnoId, asignacionId } = {}) {
  const data = await graphqlRequest(
    `
      query Entregas($alumnoId: Int, $asignacionId: Int) {
        entregas(alumnoId: $alumnoId, asignacionId: $asignacionId) {
          id
          asignacionId
          alumnoId
          nombreArchivo
          mimeType
          tamano
          entregadoEn
          calificacion
        }
      }
    `,
    { alumnoId, asignacionId },
  );

  return data.entregas || [];
}

export async function guardarCalificacionAsignacionRemota(payload) {
  const data = await graphqlRequest(
    `
      mutation GuardarCalificacionAsignacion($datos: GuardarCalificacionAsignacionInput!) {
        guardarCalificacionAsignacion(datos: $datos) {
          id
          asignacionId
          alumnoId
          grupo
          parcial
          calificacion
          observaciones
          fechaCalificacion
        }
      }
    `,
    {
      datos: {
        ...payload,
        asignacionId: Number(payload.asignacionId),
        alumnoId: Number(payload.alumnoId),
        parcial: Number(payload.parcial),
        calificacion: Number(payload.calificacion),
      },
    },
  );

  return data.guardarCalificacionAsignacion;
}

export async function fetchCalificacionesAsignacion({
  grupo,
  parcial,
  alumnoId,
  asignacionId,
} = {}) {
  const data = await graphqlRequest(
    `
      query CalificacionesAsignacion($grupo: String, $parcial: Int, $alumnoId: Int, $asignacionId: Int) {
        calificacionesAsignacion(
          grupo: $grupo
          parcial: $parcial
          alumnoId: $alumnoId
          asignacionId: $asignacionId
        ) {
          id
          asignacionId
          alumnoId
          grupo
          parcial
          calificacion
          observaciones
          fechaCalificacion
        }
      }
    `,
    { grupo, parcial, alumnoId, asignacionId },
  );

  return data.calificacionesAsignacion || [];
}

export async function fetchKpisGrupo(grupo) {
  const data = await graphqlRequest(
    `
      query GetKpisGrupo($grupo: String!) {
        getKpisGrupo(grupo: $grupo) {
          totalAlumnos
          entregasRealizadas
          tasaCumplimiento
          alumnosEnRiesgo
        }
      }
    `,
    { grupo },
  );

  return data.getKpisGrupo;
}

export async function fetchArchivoEntrega({ alumnoId, asignacionId }) {
  const data = await graphqlRequest(
    `
      query EntregasArchivo($alumnoId: Int, $asignacionId: Int) {
        entregas(alumnoId: $alumnoId, asignacionId: $asignacionId) {
          nombreArchivo
          mimeType
          archivoBase64
        }
      }
    `,
    { alumnoId: Number(alumnoId), asignacionId: Number(asignacionId) }
  );

  return data.entregas?.[0]; // Devolvemos solo el primer match
}

export async function devolverEntrega(alumnoId, asignacionId) {
  const data = await graphqlRequest(
    `
      mutation DevolverEntrega($alumnoId: Int!, $asignacionId: Int!) {
        devolverEntrega(alumnoId: $alumnoId, asignacionId: $asignacionId)
      }
    `,
    { 
      alumnoId: Number(alumnoId), 
      asignacionId: Number(asignacionId) 
    }
  );

  return data.devolverEntrega;
}