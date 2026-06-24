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
  actividadId,
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
    entregas.some((entrega) => 
      Number(entrega.asignacionId) === Number(actividadId) && 
      entrega.nombreArchivo &&
      entrega.estado !== 'DEVUELTO'
    );
  
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
              const estaDevuelta = entrega?.estado === 'DEVUELTO';

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
                                className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700 hover:bg-red-100 transition-colors"
                              >
                                <i data-lucide="play-circle" className="w-4 h-4"></i>
                                {video.titulo}
                              </a>
                            ))}
                          </div>
                        )}
                        {entrega?.nombreArchivo && (
                          <p className={`mt-2 text-[11px] font-medium ${estaDevuelta ? 'text-red-600' : 'text-green-700'}`}>
                            Archivo: {entrega.nombreArchivo}
                          </p>
                        )}
                        
                        {/* NUEVO: Botón de Descarga del Banco de Respuestas (Candado) */}
                        {entrega?.respuestasDesbloqueadas && actividad.archivoRespuestas && (
                          <div className="mt-3">
                            <a
                              href={`data:${actividad.mimeTypeRespuestas || 'application/octet-stream'};base64,${actividad.archivoRespuestas}`}
                              download={actividad.nombreArchivoRespuestas || 'Banco_de_Respuestas'}
                              className="inline-flex items-center gap-1.5 rounded-lg bg-amber-100 border border-amber-300 px-3 py-1.5 text-xs font-bold text-amber-800 hover:bg-amber-200 shadow-sm transition-colors"
                            >
                              <i data-lucide="unlock" className="w-3.5 h-3.5"></i>
                              Descargar Respuestas
                            </a>
                          </div>
                        )}
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
                      ) : estaDevuelta ? (
                        <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold flex items-center justify-center gap-1 w-max mx-auto">
                          <i data-lucide="rotate-ccw" className="w-3.5 h-3.5"></i>
                          Devuelta
                        </span>
                      ) : entregada ? (
                        <span className="inline-block bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-semibold flex items-center justify-center gap-1 w-max mx-auto">
                          <i data-lucide="check" className="w-3.5 h-3.5"></i>
                          Entregada
                        </span>
                      ) : (
                        <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold flex items-center justify-center gap-1 w-max mx-auto">
                          <i data-lucide="clock" className="w-3.5 h-3.5"></i>
                          Pendiente
                        </span>
                      )}
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      {actividad.entregable && (!entrega?.nombreArchivo || estaDevuelta) && (
                        <button
                          onClick={() => setMostrarSubida({ ...mostrarSubida, [actividad.id]: !mostrarSubida[actividad.id] })}
                          className="bg-[#6b2132] text-white px-3 py-1.5 rounded-lg text-xs hover:bg-opacity-90 transition flex items-center justify-center gap-1.5 mx-auto shadow-sm"
                        >
                          <i data-lucide="upload" className="w-3.5 h-3.5"></i>
                          {estaDevuelta ? 'Subir de nuevo' : 'Subir'}
                        </button>
                      )}
                      {entregada && !estaDevuelta && (
                        <span className="text-green-600 font-bold text-lg flex justify-center">✓</span>
                      )}
                    </td>
                  </tr>
                  {mostrarSubida[actividad.id] && (
                    <tr className="bg-gray-100">
                      <td colSpan="4" className="border-b border-gray-300 px-4 py-4 shadow-inner">
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
