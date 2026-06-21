// components/GradeTable.jsx
import React from 'react';
import { obtenerTodosUsuarios } from '../utils/auth';
import { obtenerCalificacionesGrupo } from '../utils/localStorage';
import { descargarExcelHTML, imprimirCalificaciones } from '../utils/excelGenerator';

const GradeTable = ({ grupo, parcial, onEditarCalificacion }) => {
  const usuarios = obtenerTodosUsuarios();
  const estudiantesGrupo = usuarios.filter(u => u.grupo === grupo && u.tipo === 'estudiante');
  const calificacionesGrupo = obtenerCalificacionesGrupo(grupo);

  const [editando, setEditando] = React.useState(null);
  const [valorEdit, setValorEdit] = React.useState('');

  const handleEditarInicio = (estudianteId, valorActual) => {
    setEditando(estudianteId);
    setValorEdit(valorActual || '');
  };

  const handleGuardar = (estudianteId) => {
    const valor = parseFloat(valorEdit);
    if (isNaN(valor) || valor < 0 || valor > 100) {
      alert('Ingresa un valor válido entre 0 y 100');
      return;
    }
    
    if (onEditarCalificacion) {
      onEditarCalificacion(estudianteId, valor);
    }
    setEditando(null);
  };

  return (
    <div className="space-y-4">
      {/* BOTONES DE ACCIÓN */}
      <div className="flex gap-3 flex-wrap">
        <button
          onClick={() => descargarExcelHTML(grupo, parcial)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition flex items-center gap-2"
        >
          <i data-lucide="download" className="w-4 h-4"></i>
          Descargar Excel
        </button>
        <button
          onClick={() => imprimirCalificaciones(grupo, parcial)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition flex items-center gap-2"
        >
          <i data-lucide="printer" className="w-4 h-4"></i>
          Imprimir
        </button>
      </div>

      {/* TABLA */}
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="bg-[#6b2132] text-white">
              <th className="px-4 py-3 text-left text-sm">#</th>
              <th className="px-4 py-3 text-left text-sm">Nombre</th>
              <th className="px-4 py-3 text-left text-sm">Apellido</th>
              <th className="px-4 py-3 text-left text-sm">Email</th>
              <th className="px-4 py-3 text-center text-sm">Parcial 1</th>
              <th className="px-4 py-3 text-center text-sm">Parcial 2</th>
              <th className="px-4 py-3 text-center text-sm">Parcial 3</th>
              <th className="px-4 py-3 text-center text-sm">Promedio</th>
              {onEditarCalificacion && <th className="px-4 py-3 text-center text-sm">Acciones</th>}
            </tr>
          </thead>
          <tbody>
            {estudiantesGrupo.length === 0 ? (
              <tr>
                <td colSpan={onEditarCalificacion ? 9 : 8} className="px-4 py-8 text-center text-gray-500">
                  No hay estudiantes en este grupo
                </td>
              </tr>
            ) : (
              estudiantesGrupo.map((estudiante, idx) => {
                const califs = calificacionesGrupo[estudiante.id] || {
                  parcial_1: '-',
                  parcial_2: '-',
                  parcial_3: '-',
                  promedio: '-'
                };

                return (
                  <tr key={estudiante.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-700">{idx + 1}</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-800">{estudiante.nombre}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{estudiante.apellido}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{estudiante.email}</td>
                    <td className="px-4 py-3 text-center text-sm">
                      {editando === estudiante.id && parcial === 1 ? (
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={valorEdit}
                          onChange={(e) => setValorEdit(e.target.value)}
                          className="w-16 px-2 py-1 border rounded text-center"
                          autoFocus
                        />
                      ) : (
                        <span className="font-bold text-[#6b2132]">{califs.parcial_1 || '-'}</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center text-sm">
                      {editando === estudiante.id && parcial === 2 ? (
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={valorEdit}
                          onChange={(e) => setValorEdit(e.target.value)}
                          className="w-16 px-2 py-1 border rounded text-center"
                          autoFocus
                        />
                      ) : (
                        <span className="font-bold text-[#6b2132]">{califs.parcial_2 || '-'}</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center text-sm">
                      {editando === estudiante.id && parcial === 3 ? (
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={valorEdit}
                          onChange={(e) => setValorEdit(e.target.value)}
                          className="w-16 px-2 py-1 border rounded text-center"
                          autoFocus
                        />
                      ) : (
                        <span className="font-bold text-[#6b2132]">{califs.parcial_3 || '-'}</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center text-sm font-bold text-green-700">
                      {califs.promedio !== '-' ? califs.promedio : '-'}
                    </td>
                    {onEditarCalificacion && (
                      <td className="px-4 py-3 text-center text-sm">
                        {editando === estudiante.id ? (
                          <div className="flex gap-1 justify-center">
                            <button
                              onClick={() => handleGuardar(estudiante.id)}
                              className="bg-green-600 text-white px-2 py-1 rounded text-xs hover:bg-green-700"
                            >
                              Guardar
                            </button>
                            <button
                              onClick={() => setEditando(null)}
                              className="bg-gray-400 text-white px-2 py-1 rounded text-xs hover:bg-gray-500"
                            >
                              Cancelar
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleEditarInicio(estudiante.id, califs[`parcial_${parcial}`])}
                            className="bg-[#6b2132] text-white px-2 py-1 rounded text-xs hover:bg-opacity-90"
                          >
                            Editar
                          </button>
                        )}
                      </td>
                    )}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {estudiantesGrupo.length > 0 && (
        <div className="text-sm text-gray-600">
          <p>Total de estudiantes: <strong>{estudiantesGrupo.length}</strong></p>
        </div>
      )}
    </div>
  );
};

export default GradeTable;
