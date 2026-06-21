import { getGraphqlApiUrl } from './apiConfig';
import { obtenerSesionAuth } from '../utils/localStorage';
import { encryptPassword } from '../utils/secureAuth';

const GRAPHQL_API_URL = getGraphqlApiUrl();

export const GRUPOS_DISPONIBLES = ['TC-01', 'TC-02', 'TC-03', 'TC-04'];

const ROLE_MAP = {
  ALUMNO: 'alumno',
  MODERADOR: 'moderador',
  ADMINISTRADOR: 'administrador',
};

const STATUS_MAP = {
  ACTIVO: 'activo',
  INACTIVO: 'inactivo',
};

export const ROLE_OPTIONS = [
  { value: 'alumno', label: 'Alumno' },
  { value: 'moderador', label: 'Moderador' },
  { value: 'administrador', label: 'Administrador' },
];

function toBackendRole(tipo) {
  return {
    alumno: 'ALUMNO',
    moderador: 'MODERADOR',
    administrador: 'ADMINISTRADOR',
  }[tipo] ?? 'ALUMNO';
}

function toBackendStatus(estado) {
  return estado === 'inactivo' ? 'INACTIVO' : 'ACTIVO';
}

async function graphqlRequest(query, variables, options = {}) {
  const session = obtenerSesionAuth();
  const headers = {
    'Content-Type': 'application/json',
  };

  if (options.auth !== false && session?.token) {
    headers.Authorization = `Bearer ${session.token}`;
  }

  const response = await fetch(GRAPHQL_API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({})); 
    throw new Error(errorBody.errors?.[0]?.message || `Error HTTP ${response.status}`);
  }

  const payload = await response.json();

  if (payload.errors?.length) {
    const firstMessage = payload.errors[0].message || 'Error en la solicitud';

    if (
      firstMessage.includes('Cannot query field "token" on type "Alumno"') ||
      firstMessage.includes('Cannot query field "usuario" on type "Alumno"')
    ) {
      throw new Error(
        'El backend configurado no está actualizado con el nuevo contrato de autenticación. Usa el backend local o despliega la versión nueva.',
      );
    }

    throw new Error(firstMessage);
  }

  return payload.data;
}

function normalizarUsuario(usuario) {
  return {
    id: usuario.id,
    nombre: usuario.nombre,
    apellido: usuario.apellido,
    email: usuario.email,
    grupo: usuario.grupo || '',
    tipo: ROLE_MAP[usuario.rol] || 'alumno',
    estado: STATUS_MAP[usuario.estado] || 'activo',
  };
}

export async function iniciarSesionAlumno({ email, password }) {
  const passwordSeguro = await encryptPassword(password);
  const data = await graphqlRequest(
    `
      mutation IniciarSesion($datos: LoginAlumnoInput!) {
        iniciarSesion(datos: $datos) {
          token
          usuario {
            id
            nombre
            apellido
            email
            grupo
            rol
            estado
          }
        }
      }
    `,
    { datos: { email, password: passwordSeguro } },
    { auth: false },
  );

  return {
    token: data.iniciarSesion.token,
    usuario: normalizarUsuario(data.iniciarSesion.usuario),
  };
}

export async function registrarAlumno({ nombre, apellido, email, password, grupo }) {
  const passwordSeguro = await encryptPassword(password);
  const data = await graphqlRequest(
    `
      mutation CrearAlumno($datos: CreateAlumnoInput!) {
        crearAlumno(datos: $datos) {
          id
          nombre
          apellido
          email
          grupo
          rol
          estado
        }
      }
    `,
    {
      datos: {
        nombre,
        apellido,
        email,
        password: passwordSeguro,
        grupo,
      },
    },
    { auth: false },
  );

  return normalizarUsuario(data.crearAlumno);
}

export async function fetchUsuarios() {
  const data = await graphqlRequest(
    `
      query Usuarios {
        usuarios {
          id
          nombre
          apellido
          email
          grupo
          rol
          estado
        }
      }
    `,
  );

  return (data.usuarios || []).map(normalizarUsuario);
}

export async function crearUsuario(payload) {
  const passwordSeguro = await encryptPassword(payload.password);
  const data = await graphqlRequest(
    `
      mutation CrearUsuario($datos: CreateUsuarioInput!) {
        crearUsuario(datos: $datos) {
          id
          nombre
          apellido
          email
          grupo
          rol
          estado
        }
      }
    `,
    {
      datos: {
        nombre: payload.nombre,
        apellido: payload.apellido,
        email: payload.email,
        password: passwordSeguro,
        grupo: payload.grupo || '',
        rol: toBackendRole(payload.tipo),
        estado: toBackendStatus(payload.estado),
      },
    },
  );

  return normalizarUsuario(data.crearUsuario);
}

export async function actualizarUsuario(payload) {
  const passwordSeguro = payload.password ? await encryptPassword(payload.password) : undefined;
  const data = await graphqlRequest(
    `
      mutation ActualizarUsuario($datos: UpdateUsuarioAdminInput!) {
        actualizarUsuario(datos: $datos) {
          id
          nombre
          apellido
          email
          grupo
          rol
          estado
        }
      }
    `,
    {
      datos: {
        id: Number(payload.id),
        nombre: payload.nombre,
        apellido: payload.apellido,
        email: payload.email,
        grupo: payload.grupo || '',
        rol: payload.rol, 
        estado: payload.estado,
        ...(passwordSeguro && { password: passwordSeguro })
      },
    },
  );

  return normalizarUsuario(data.actualizarUsuario);
}

export async function eliminarUsuario(id) {
  const data = await graphqlRequest(
    `
      mutation EliminarUsuario($id: Int!) {
        eliminarUsuario(id: $id) {
          id
        }
      }
    `,
    { id: Number(id) },
  );

  return data.eliminarUsuario;
}

export async function fetchGrupos() {
  const data = await graphqlRequest(
    `
      query Grupos {
        grupos
      }
    `,
  );

  return data.grupos || [];
}