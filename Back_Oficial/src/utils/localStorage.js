// utils/localStorage.js
// Funciones para manejar datos en localStorage

/**
 * Obtiene la BD completa
 */
export const obtenerBD = () => {
  return JSON.parse(localStorage.getItem('bd_compiladores')) || {};
};

/**
 * Guarda la BD completa
 */
export const guardarBD = (bd) => {
  localStorage.setItem('bd_compiladores', JSON.stringify(bd));
};

/**
 * Obtiene un usuario logueado (si existe)
 */
export const obtenerUsuarioLogueado = () => {
  const sesion = obtenerSesionAuth();
  return sesion?.usuario || null;
};

/**
 * Guarda usuario logueado
 */
export const guardarUsuarioLogueado = (usuario) => {
  const sesionActual = obtenerSesionAuth();
  guardarSesionAuth({
    token: sesionActual?.token || '',
    usuario,
  });
};

export const obtenerSesionAuth = () => {
  const sesionJSON = localStorage.getItem('auth_session');
  return sesionJSON ? JSON.parse(sesionJSON) : null;
};

export const guardarSesionAuth = ({ token, usuario }) => {
  localStorage.setItem('auth_session', JSON.stringify({ token, usuario }));
  localStorage.setItem('usuario_logueado', JSON.stringify(usuario));
};

/**
 * Elimina usuario logueado (logout)
 */
export const cerrarSesion = () => {
  localStorage.removeItem('auth_session');
  localStorage.removeItem('usuario_logueado');
};

/**
 * Guarda un archivo entregado
 */
export const guardarSubmission = (parcial, grupo, estudianteId, archivo, nombreArchivo) => {
  const bd = obtenerBD();
  if (!bd.submissions) bd.submissions = {};
  if (!bd.submissions[`parcial_${parcial}`]) bd.submissions[`parcial_${parcial}`] = {};
  if (!bd.submissions[`parcial_${parcial}`][grupo]) bd.submissions[`parcial_${parcial}`][grupo] = {};

  bd.submissions[`parcial_${parcial}`][grupo][estudianteId] = {
    archivo: nombreArchivo,
    estado: 'entregado',
    fecha: new Date().toISOString(),
    tamaño: archivo.size,
    archivoBase64: archivo // Para simplificar, guardamos como está
  };

  guardarBD(bd);
  return { success: true };
};

/**
 * Obtiene submissions de un grupo en un parcial
 */
export const obtenerSubmissions = (parcial, grupo) => {
  const bd = obtenerBD();
  const submissions = bd.submissions?.[`parcial_${parcial}`]?.[grupo] || {};
  return submissions;
};

/**
 * Obtiene el submission de un estudiante
 */
export const obtenerSubmissionEstudiante = (parcial, grupo, estudianteId) => {
  const bd = obtenerBD();
  return bd.submissions?.[`parcial_${parcial}`]?.[grupo]?.[estudianteId] || null;
};

/**
 * Guarda calificación
 */
export const guardarCalificacion = (grupo, estudianteId, parcial, calificacion) => {
  const bd = obtenerBD();
  if (!bd.calificaciones) bd.calificaciones = {};
  if (!bd.calificaciones[grupo]) bd.calificaciones[grupo] = {};
  if (!bd.calificaciones[grupo][estudianteId]) bd.calificaciones[grupo][estudianteId] = {};

  bd.calificaciones[grupo][estudianteId][`parcial_${parcial}`] = calificacion;

  // Calcular promedio
  const califs = bd.calificaciones[grupo][estudianteId];
  const valores = Object.values(califs).filter(v => typeof v === 'number');
  if (valores.length > 0) {
    califs.promedio = Math.round((valores.reduce((a, b) => a + b, 0) / valores.length) * 100) / 100;
  }

  guardarBD(bd);
  return { success: true };
};

/**
 * Obtiene calificaciones de un estudiante
 */
export const obtenerCalificacionesEstudiante = (grupo, estudianteId) => {
  const bd = obtenerBD();
  return bd.calificaciones?.[grupo]?.[estudianteId] || { parcial_1: 0, parcial_2: 0, parcial_3: 0, promedio: 0 };
};

/**
 * Obtiene calificaciones de un grupo completo
 */
export const obtenerCalificacionesGrupo = (grupo) => {
  const bd = obtenerBD();
  return bd.calificaciones?.[grupo] || {};
};

export const guardarCalificacionAsignacion = (
  grupo,
  estudianteId,
  parcial,
  asignacionId,
  calificacion,
) => {
  const bd = obtenerBD();
  if (!bd.assignment_grades) bd.assignment_grades = {};
  if (!bd.assignment_grades[grupo]) bd.assignment_grades[grupo] = {};
  if (!bd.assignment_grades[grupo][estudianteId]) bd.assignment_grades[grupo][estudianteId] = {};
  if (!bd.assignment_grades[grupo][estudianteId][`parcial_${parcial}`]) {
    bd.assignment_grades[grupo][estudianteId][`parcial_${parcial}`] = {};
  }

  bd.assignment_grades[grupo][estudianteId][`parcial_${parcial}`][asignacionId] = calificacion;
  guardarBD(bd);
  return { success: true };
};

export const obtenerCalificacionesAsignaciones = (grupo, estudianteId, parcial) => {
  const bd = obtenerBD();
  return (
    bd.assignment_grades?.[grupo]?.[estudianteId]?.[`parcial_${parcial}`] || {}
  );
};

/**
 * Marca actividad como entregada
 */
export const marcarActividadEntregada = (parcial, grupo, estudianteId, actividadId) => {
  const bd = obtenerBD();
  if (!bd.actividades_entregadas) bd.actividades_entregadas = {};
  if (!bd.actividades_entregadas[`parcial_${parcial}`]) bd.actividades_entregadas[`parcial_${parcial}`] = {};
  if (!bd.actividades_entregadas[`parcial_${parcial}`][grupo]) bd.actividades_entregadas[`parcial_${parcial}`][grupo] = {};
  if (!bd.actividades_entregadas[`parcial_${parcial}`][grupo][estudianteId]) {
    bd.actividades_entregadas[`parcial_${parcial}`][grupo][estudianteId] = [];
  }

  if (!bd.actividades_entregadas[`parcial_${parcial}`][grupo][estudianteId].includes(actividadId)) {
    bd.actividades_entregadas[`parcial_${parcial}`][grupo][estudianteId].push(actividadId);
  }

  guardarBD(bd);
  return { success: true };
};

/**
 * Verifica si una actividad está entregada
 */
export const verificarActividadEntregada = (parcial, grupo, estudianteId, actividadId) => {
  const bd = obtenerBD();
  const actividades = bd.actividades_entregadas?.[`parcial_${parcial}`]?.[grupo]?.[estudianteId] || [];
  return actividades.includes(actividadId);
};

/**
 * Exporta datos a JSON para backup
 */
export const exportarBackup = () => {
  const bd = obtenerBD();
  const dataStr = JSON.stringify(bd, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `backup_compiladores_${new Date().toISOString().split('T')[0]}.json`;
  link.click();
  URL.revokeObjectURL(url);
};

/**
 * Importa datos desde JSON
 */
export const importarBackup = (archivo) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const bd = JSON.parse(e.target.result);
        guardarBD(bd);
        resolve({ success: true });
      } catch (error) {
        reject({ success: false, error: 'Error al importar' });
      }
    };
    reader.readAsText(archivo);
  });
};
