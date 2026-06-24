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

export async function obtenerRecursos() {
  const data = await graphqlRequest(
    `
      query ObtenerRecursos {
        obtenerRecursos {
          id
          tipo
          titulo
          tamano
          mimeType
          nombreArchivo
          creadoEn
          creadoPor
          rolCreador
        }
      }
    `,
    {},
  );

  return data.obtenerRecursos || [];
}

export async function crearRecurso(payload) {
  const data = await graphqlRequest(
    `
      mutation CrearRecurso($datos: CrearRecursoInput!) {
        crearRecurso(datos: $datos) {
          id
          tipo
          titulo
          tamano
          mimeType
          nombreArchivo
          creadoEn
        }
      }
    `,
    {
      datos: {
        titulo: payload.titulo,
        tipo: payload.tipo || 'documento',
        nombreArchivo: payload.nombreArchivo,
        mimeType: payload.mimeType,
        tamano: payload.tamano || null,
        archivoBase64: payload.archivoBase64,
      },
    },
  );

  return data.crearRecurso;
}

export async function eliminarRecurso(id) {
  const data = await graphqlRequest(
    `
      mutation EliminarRecurso($id: Int!) {
        eliminarRecurso(id: $id)
      }
    `,
    { id: Number(id) },
  );

  return data.eliminarRecurso;
}

// Trae el archivo completo (Base64) solo cuando se va a descargar.
export async function obtenerRecursoArchivo(id) {
  const data = await graphqlRequest(
    `
      query Recurso($id: Int!) {
        recurso(id: $id) {
          nombreArchivo
          mimeType
          archivoBase64
        }
      }
    `,
    { id: Number(id) },
  );

  return data.recurso;
}