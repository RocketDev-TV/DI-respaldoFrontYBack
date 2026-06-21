// components/ChecklistPartial.jsx
import React, { useState } from 'react';
import FileUpload from './FileUpload';
import { registrarEntrega } from '../services/evaluacionApi';

const ChecklistPartial = ({
  checklist,
  parcial,
  grupo,
  estudianteId,
  entregas = [],
  onArchivoSubido,
}) => {
  const [mostrarSubida, setMostrarSubida] = useState({});

  const handleSubmitArchivo = async (archivoPayload, actividadId) => {
    await registrarEntrega({
      asignacionId: actividadId,
      alumnoId: estudianteId,
      grupo,
      parcial,
      nombreArchivo: archivoPayload.nombreArchivo,
      mimeType: archivoPayload.mimeType,
      tamano: archivoPayload.tamano,
      archivoBase64: archivoPayload.archivoBase64,
    });
    setMostrarSubida({ ...mostrarSubida, [actividadId]: false });
    if (onArchivoSubido) {
      await onArchivoSubido();
    }
  };

  const estaEntregada = (actividadId) =>
    entregas.some((entrega) => Number(entrega.asignacionId) === Number(actividadId));

  const calcularPorcentajeTotal = () => {
    return checklist.actividades
      .filter(a => a.entregable)
      .reduce((sum, a) => sum + a.porcentaje, 0);
  };

  const calcularEntregadas = () => {
    return checklist.actividades.filter(a => 
      a.entregable && estaEntregada(a.id)
    ).length;
  };

  return (
    <div className="space-y-6">
      {/* RESUMEN */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-600">Total de Actividades</p>
          <p className="text-3xl font-bold text-blue-800">{checklist.actividades.filter(a => a.entregable).length}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <p className="text-sm text-green-600">Entregadas</p>
          <p className="text-3xl font-bold text-green-800">{calcularEntregadas()} / {checklist.actividades.filter(a => a.entregable).length}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <p className="text-sm text-purple-600">Porcentaje Total</p>
          <p className="text-3xl font-bold text-purple-800">{calcularPorcentajeTotal()}%</p>
        </div>
      </div>

      {/* TABLA DE ACTIVIDADES */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#6b2132] text-white">
              <th className="border border-gray-300 px-4 py-2 text-left text-sm">Actividad</th>
              <th className="border border-gray-300 px-4 py-2 text-center text-sm">%</th>
              <th className="border border-gray-300 px-4 py-2 text-center text-sm">Estado</th>
              <th className="border border-gray-300 px-4 py-2 text-center text-sm">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {checklist.actividades.map((actividad, idx) => {
              const entregada = estaEntregada(actividad.id);
              const entrega = entregas.find(
                (item) => Number(item.asignacionId) === Number(actividad.id),
              );
              return (
                <React.Fragment key={actividad.id}>
                  <tr className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border border-gray-300 px-4 py-3">
                      <div>
                        <p className="font-semibold text-gray-800">{actividad.nombre}</p>
                        {actividad.descripcion && (
                          <p className="text-xs text-gray-500 mt-1">{actividad.descripcion}</p>
                        )}
                        {actividad.videos?.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {actividad.videos.map((video) => (
                              <a
                                key={video.id}
                                href={video.youtubeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700"
                              >
                                <i data-lucide="play-circle" className="w-4 h-4"></i>
                                {video.titulo}
                              </a>
                            ))}
                          </div>
                        )}
                        {entrega ? (
                          <p className="mt-2 text-[11px] text-green-700">
                            Archivo: {entrega.nombreArchivo}
                          </p>
                        ) : null}
                      </div>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      <span className={`font-bold ${actividad.porcentaje === 0 ? 'text-gray-400' : 'text-[#6b2132]'}`}>
                        {actividad.porcentaje}%
                      </span>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      {!actividad.entregable ? (
                        <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                          No Aplica
                        </span>
                      ) : entregada ? (
                        <span className="inline-block bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                          <i data-lucide="check" className="w-4 h-4"></i>
                          Entregada
                        </span>
                      ) : (
                        <span className="inline-block bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                          <i data-lucide="clock" className="w-4 h-4"></i>
                          Pendiente
                        </span>
                      )}
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      {actividad.entregable && !entregada && (
                        <button
                          onClick={() => setMostrarSubida({ ...mostrarSubida, [actividad.id]: !mostrarSubida[actividad.id] })}
                          className="bg-[#6b2132] text-white px-3 py-1 rounded text-xs hover:bg-opacity-90 transition flex items-center gap-1 mx-auto"
                        >
                          <i data-lucide="upload" className="w-4 h-4"></i>
                          Subir
                        </button>
                      )}
                      {entregada && (
                        <span className="text-green-600 font-semibold text-sm">✓</span>
                      )}
                    </td>
                  </tr>
                  {mostrarSubida[actividad.id] && (
                    <tr className="bg-gray-100">
                      <td colSpan="4" className="border border-gray-300 px-4 py-4">
                        <FileUpload
                          actividadId={actividad.id}
                          onSubmit={handleSubmitArchivo}
                        />
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* INFORMACIÓN ADICIONAL */}
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-800">
          <strong>Nota:</strong> Las actividades marcadas como "No Aplica" son requisitos obligatorios pero no tienen valor porcentual.
          Asegúrate de completar todas las actividades entregables para obtener tu calificación final.
        </p>
      </div>
    </div>
  );
};

export default ChecklistPartial;
