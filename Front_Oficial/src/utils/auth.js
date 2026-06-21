// utils/auth.js
// Sistema de autenticación con localStorage

/**
 * Obtiene todos los usuarios de la BD
 */
export const obtenerTodosUsuarios = () => {
  const bd = JSON.parse(localStorage.getItem('bd_compiladores')) || {};
  return bd.users || [];
};

/**
 * Obtiene un usuario por email
 */
export const obtenerUsuarioPorEmail = (email) => {
  const usuarios = obtenerTodosUsuarios();
  return usuarios.find(u => u.email === email);
};

/**
 * Valida credenciales de login
 * @returns {Object} { success: boolean, usuario: Object, error: string }
 */
export const validarCredenciales = (email, password) => {
  const usuario = obtenerUsuarioPorEmail(email);
  
  if (!usuario) {
    return { success: false, error: 'El usuario no existe' };
  }
  
  if (usuario.password !== password) {
    return { success: false, error: 'Contraseña incorrecta' };
  }
  
  if (usuario.estado !== 'activo') {
    return { success: false, error: 'Usuario inactivo' };
  }
  
  // Retornar usuario sin la contraseña
  const { password: _, ...usuarioSeguro } = usuario;
  return { success: true, usuario: usuarioSeguro };
};

/**
 * Crea un nuevo usuario
 * @returns {Object} { success: boolean, usuario: Object, error: string }
 */
export const crearUsuario = (userData) => {
  // Validar que no exista
  if (obtenerUsuarioPorEmail(userData.email)) {
    return { success: false, error: 'El email ya está registrado' };
  }

  // Crear objeto usuario
  const nuevoUsuario = {
    id: 'user_' + Date.now(),
    nombre: userData.nombre,
    apellido: userData.apellido,
    email: userData.email,
    password: userData.password,
    grupo: userData.grupo || null,
    tipo: userData.tipo || 'estudiante',
    estado: 'activo',
    fechaRegistro: new Date().toISOString()
  };

  // Obtener BD actual
  const bd = JSON.parse(localStorage.getItem('bd_compiladores')) || {};
  if (!bd.users) bd.users = [];

  // Agregar usuario
  bd.users.push(nuevoUsuario);

  // Guardar en localStorage
  localStorage.setItem('bd_compiladores', JSON.stringify(bd));

  // Retornar sin contraseña
  const { password: _, ...usuarioSeguro } = nuevoUsuario;
  return { success: true, usuario: usuarioSeguro };
};

/**
 * Obtiene usuarios por grupo
 */
export const obtenerUsuariosPorGrupo = (grupo) => {
  const usuarios = obtenerTodosUsuarios();
  return usuarios.filter(u => u.grupo === grupo && u.tipo === 'estudiante');
};

/**
 * Actualiza un usuario
 */
export const actualizarUsuario = (id, datos) => {
  const bd = JSON.parse(localStorage.getItem('bd_compiladores')) || {};
  if (!bd.users) bd.users = [];

  const index = bd.users.findIndex(u => u.id === id);
  if (index === -1) {
    return { success: false, error: 'Usuario no encontrado' };
  }

  bd.users[index] = { ...bd.users[index], ...datos };
  localStorage.setItem('bd_compiladores', JSON.stringify(bd));

  return { success: true, usuario: bd.users[index] };
};

/**
 * Elimina un usuario
 */
export const eliminarUsuario = (id) => {
  const bd = JSON.parse(localStorage.getItem('bd_compiladores')) || {};
  if (!bd.users) bd.users = [];

  bd.users = bd.users.filter(u => u.id !== id);
  localStorage.setItem('bd_compiladores', JSON.stringify(bd));

  return { success: true };
};

/**
 * Obtiene todos los grupos únicos
 */
export const obtenerGrupos = () => {
  const usuarios = obtenerTodosUsuarios();
  const grupos = new Set(usuarios
    .filter(u => u.grupo)
    .map(u => u.grupo)
  );
  return Array.from(grupos).sort();
};

/**
 * Inicializa BD con datos por defecto
 */
export const inicializarBD = () => {
  const bdExistente = localStorage.getItem('bd_compiladores');
  if (bdExistente) return;

  const bd = {
    users: [
      {
        id: 'admin_001',
        nombre: 'Administrador',
        apellido: 'Sistema',
        email: 'admin@ipn.mx',
        password: 'Admin123',
        grupo: null,
        tipo: 'admin',
        estado: 'activo',
        fechaRegistro: new Date().toISOString()
      },
      {
        id: 'prof_001',
        nombre: 'Sara',
        apellido: 'Méndez García',
        email: 'profesor@ipn.mx',
        password: 'Profesor123',
        grupo: null,
        tipo: 'profesor',
        estado: 'activo',
        fechaRegistro: new Date().toISOString()
      }
    ],
    submissions: {},
    calificaciones: {},
    grupos: ['TS-01', 'TS-02', 'TCS-03', 'TS-04']
  };

  localStorage.setItem('bd_compiladores', JSON.stringify(bd));
};
