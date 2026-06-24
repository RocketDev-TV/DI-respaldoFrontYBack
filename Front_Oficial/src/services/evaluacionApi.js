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

export async function fetchArchivoEntrega({ alumnoId, asignacionId }) {
  const variables = { alumnoId: Number(alumnoId) };
  
  if (asignacionId) {
    variables.asignacionId = Number(asignacionId);
  }

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
    variables
  );

  return data.entregas?.[0]; 
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
  const variables = { grupo, parcial, alumnoId, asignacionId };
  Object.keys(variables).forEach(key => 
    (variables[key] === null || variables[key] === undefined) && delete variables[key]
  );

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
    variables,
  );

  return data.calificacionesAsignacion || [];
}

export async function fetchKpisGrupo(grupo) {
  const grupoParam = grupo === 'Todos' ? null : grupo;

  const data = await graphqlRequest(
    `
      query GetKpisGrupo($grupo: String) {
        getKpisGrupo(grupo: $grupo) {
          alumnosEnRiesgo
          entregasRealizadas
          tasaCumplimiento
          totalAlumnos
        }
      }
    `,
    { grupo: grupoParam },
  );

  return data.getKpisGrupo;
}

// ==========================================
// FUNCIONES RESTAURADAS PARA EL PANEL PRO
// ==========================================

export async function fetchEntregas() {
  const data = await graphqlRequest(
    `query {
      entregas {
        id
        alumnoId
        asignacionId
        nombreArchivo
        mimeType
        entregadoEn
        calificacion
        estado
        respuestasDesbloqueadas
      }
    }`
  );
  return data.entregas;
}

export async function devolverEntrega(alumnoId, asignacionId) {
  const data = await graphqlRequest(
    `mutation DevolverEntrega($alumnoId: Int!, $asignacionId: Int!) {
      devolverEntrega(alumnoId: $alumnoId, asignacionId: $asignacionId) { 
        id 
        estado 
      }
    }`,
    { alumnoId: Number(alumnoId), asignacionId: Number(asignacionId) },
  );
  return data.devolverEntrega;
}

export async function desbloquearRespuestas(alumnoId, asignacionId, desbloqueadas) {
  const data = await graphqlRequest(
    `mutation DesbloquearRespuestas($alumnoId: Int!, $asignacionId: Int!, $desbloqueadas: Boolean!) {
      desbloquearRespuestas(alumnoId: $alumnoId, asignacionId: $asignacionId, desbloqueadas: $desbloqueadas) { 
        id 
        respuestasDesbloqueadas 
      }
    }`,
    { alumnoId: Number(alumnoId), asignacionId: Number(asignacionId), desbloqueadas },
  );
  return data.desbloquearRespuestas;
}