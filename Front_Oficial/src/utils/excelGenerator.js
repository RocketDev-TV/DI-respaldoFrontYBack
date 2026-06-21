// utils/excelGenerator.js
// Genera archivos Excel con calificaciones

import { obtenerTodosUsuarios } from './auth';
import { obtenerCalificacionesGrupo } from './localStorage';

/**
 * Genera un CSV (más compatible que Excel nativo)
 * CSV se puede abrir en Excel
 */
export const generarCSVCalificaciones = (grupo, parcial) => {
  const usuarios = obtenerTodosUsuarios();
  const estudiantesGrupo = usuarios.filter(u => u.grupo === grupo && u.tipo === 'estudiante');
  const calificacionesGrupo = obtenerCalificacionesGrupo(grupo);

  if (estudiantesGrupo.length === 0) {
    return null;
  }

  // Encabezados
  let csv = 'LISTA DE CALIFICACIONES\n';
  csv += `Grupo,${grupo}\n`;
  csv += `Parcial,${parcial}\n`;
  csv += `Fecha Generación,${new Date().toLocaleDateString('es-MX')}\n\n`;

  csv += 'Nombre,Apellido,Email,Parcial 1,Parcial 2,Parcial 3,Promedio\n';

  // Datos
  estudiantesGrupo.forEach(estudiante => {
    const califs = calificacionesGrupo[estudiante.id] || { parcial_1: '-', parcial_2: '-', parcial_3: '-', promedio: '-' };
    csv += `${estudiante.nombre},${estudiante.apellido},${estudiante.email},`;
    csv += `${califs.parcial_1 || '-'},${califs.parcial_2 || '-'},${califs.parcial_3 || '-'},${califs.promedio || '-'}\n`;
  });

  return csv;
};

/**
 * Descarga el CSV
 */
export const descargarCSV = (grupo, parcial) => {
  const csv = generarCSVCalificaciones(grupo, parcial);
  
  if (!csv) {
    alert('No hay estudiantes en este grupo');
    return;
  }

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);

  link.setAttribute('href', url);
  link.setAttribute('download', `Calificaciones_${grupo}_Parcial${parcial}_${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Crea un Excel simple usando formato HTML (compatible con Excel)
 * Este método es más simple y no requiere librerías externas
 */
export const generarExcelHTML = (grupo, parcial) => {
  const usuarios = obtenerTodosUsuarios();
  const estudiantesGrupo = usuarios.filter(u => u.grupo === grupo && u.tipo === 'estudiante');
  const calificacionesGrupo = obtenerCalificacionesGrupo(grupo);

  if (estudiantesGrupo.length === 0) {
    return null;
  }

  let html = `
    <table border="1">
      <tr>
        <th colspan="7" style="background-color:#6b2132; color:white; text-align:center; padding:10px;">
          LISTA DE CALIFICACIONES - GRUPO ${grupo} - PARCIAL ${parcial}
        </th>
      </tr>
      <tr>
        <td style="background-color:#6b2132; color:white;"><strong>Nombre</strong></td>
        <td style="background-color:#6b2132; color:white;"><strong>Apellido</strong></td>
        <td style="background-color:#6b2132; color:white;"><strong>Email</strong></td>
        <td style="background-color:#6b2132; color:white;"><strong>Parcial 1</strong></td>
        <td style="background-color:#6b2132; color:white;"><strong>Parcial 2</strong></td>
        <td style="background-color:#6b2132; color:white;"><strong>Parcial 3</strong></td>
        <td style="background-color:#6b2132; color:white;"><strong>Promedio</strong></td>
      </tr>
  `;

  estudiantesGrupo.forEach((estudiante, idx) => {
    const califs = calificacionesGrupo[estudiante.id] || { parcial_1: '-', parcial_2: '-', parcial_3: '-', promedio: '-' };
    const bgColor = idx % 2 === 0 ? '#f9f9f9' : '#ffffff';

    html += `
      <tr style="background-color:${bgColor};">
        <td>${estudiante.nombre}</td>
        <td>${estudiante.apellido}</td>
        <td>${estudiante.email}</td>
        <td style="text-align:center;">${califs.parcial_1 || '-'}</td>
        <td style="text-align:center;">${califs.parcial_2 || '-'}</td>
        <td style="text-align:center;">${califs.parcial_3 || '-'}</td>
        <td style="text-align:center; font-weight:bold;">${califs.promedio || '-'}</td>
      </tr>
    `;
  });

  html += '</table>';
  return html;
};

/**
 * Descarga como HTML que Excel puede abrir
 */
export const descargarExcelHTML = (grupo, parcial) => {
  const html = generarExcelHTML(grupo, parcial);

  if (!html) {
    alert('No hay estudiantes en este grupo');
    return;
  }

  const htmlCompleto = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Calificaciones</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          table { border-collapse: collapse; width: 100%; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        </style>
      </head>
      <body>
        ${html}
        <p style="margin-top: 20px; color: #666; font-size: 12px;">
          Generado: ${new Date().toLocaleString('es-MX')}
        </p>
      </body>
    </html>
  `;

  const blob = new Blob([htmlCompleto], { type: 'application/vnd.ms-excel;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);

  link.setAttribute('href', url);
  link.setAttribute('download', `Calificaciones_${grupo}_Parcial${parcial}_${new Date().toISOString().split('T')[0]}.xls`);
  link.style.visibility = 'hidden';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Imprime calificaciones
 */
export const imprimirCalificaciones = (grupo, parcial) => {
  const html = generarExcelHTML(grupo, parcial);

  if (!html) {
    alert('No hay estudiantes en este grupo');
    return;
  }

  const ventana = window.open('', '_blank');
  ventana.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Calificaciones - ${grupo} - Parcial ${parcial}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          table { border-collapse: collapse; width: 100%; }
          th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
          @media print { body { margin: 0; } }
        </style>
      </head>
      <body>
        ${html}
      </body>
    </html>
  `);
  ventana.document.close();
  ventana.print();
};
