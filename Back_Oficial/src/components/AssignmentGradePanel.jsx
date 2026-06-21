import React from 'react';
import { fetchUsuarios } from '../services/authApi';
import { fetchAsignaciones } from '../services/contenidoApi';
import {
  fetchCalificacionesAsignacion,
  guardarCalificacionAsignacionRemota,
  fetchEntregas,
  fetchArchivoEntrega,
  devolverEntrega,
} from '../services/evaluacionApi';

const AssignmentGradePanel = () => {
  const [usuarios, setUsuarios] = React.useState([]);
  const [grupo, setGrupo] = React.useState('Todos');
  const [parcial, setParcial] = React.useState(1);
  const [busqueda, setBusqueda] = React.useState(''); 
  const [filtroEstado, setFiltroEstado] = React.useState('Todos'); 
  
  const [asignaciones, setAsignaciones] = React.useState([]);
  const [calificaciones, setCalificaciones] = React.useState([]);
  const [entregasRegistradas, setEntregasRegistradas] = React.useState([]); 
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [guardandoId, setGuardandoId] = React.useState(null); 
  
  // Estados para Descarga y Preview
  const [descargandoId, setDescargandoId] = React.useState(null);
  const [previewInfo, setPreviewInfo] = React.useState(null); // Contiene los datos del archivo a previsualizar
  const [cargandoPreviewId, setCargandoPreviewId] = React.useState(null);

  const grupos = React.useMemo(() => {
    const unique = new Set(
      usuarios.filter((item) => item.tipo === 'alumno' && item.grupo).map((item) => item.grupo),
    );
    return ['Todos', ...Array.from(unique).sort()];
  }, [usuarios]);

  const alumnosFiltrados = React.useMemo(() => {
    return usuarios.filter((item) => {
      if (item.tipo !== 'alumno') return false;
      const pasaGrupo = grupo === 'Todos' || item.grupo === grupo;
      const textoBusqueda = busqueda.toLowerCase().trim();
      const nombreCompleto = `${item.nombre} ${item.apellido}`.toLowerCase();
      const correo = item.email.toLowerCase();
      const pasaBusqueda = nombreCompleto.includes(textoBusqueda) || correo.includes(textoBusqueda);
      
      let pasaEstado = true;
      if (filtroEstado !== 'Todos' && asignaciones.length > 0) {
        const entregasDelAlumno = asignaciones.filter((asig) => {
          const entrega = entregasRegistradas.find(
            (e) => Number(e.alumnoId) === Number(item.id) && Number(e.asignacionId) === Number(asig.id)
          );
          return entrega && entrega.nombreArchivo;
        }).length;

        if (filtroEstado === 'Completos') {
          pasaEstado = entregasDelAlumno === asignaciones.length;
        } else if (filtroEstado === 'Pendientes') {
          pasaEstado = entregasDelAlumno < asignaciones.length;
        }
      }

      return pasaGrupo && pasaBusqueda && pasaEstado;
    });
  }, [grupo, busqueda, usuarios, filtroEstado, asignaciones, entregasRegistradas]);

  React.useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsuarios();
        setUsuarios(data);
        setGrupo('Todos');
      } catch (loadError) {
        setError(loadError.message || 'No fue posible cargar los usuarios.');
      }
    };
    loadUsers();
  }, []);

  React.useEffect(() => {
    const loadAssignments = async () => {
      setLoading(true);
      setError('');
      try {
        const grupoFiltro = grupo === 'Todos' ? undefined : grupo;
        const [asignacionesData, calificacionesData, entregasData] = await Promise.all([
          fetchAsignaciones({ periodo: parcial, grupo: grupoFiltro }),
          fetchCalificacionesAsignacion({ periodo: parcial, grupo: grupoFiltro }),
          fetchEntregas() 
        ]);
        
        setAsignaciones(asignacionesData.filter((item) => item.activa));
        setCalificaciones(calificacionesData);
        setEntregasRegistradas(entregasData || []);
      } catch (loadError) {
        setError(loadError.message || 'No fue posible cargar asignaciones.');
      } finally {
        setLoading(false);
      }
    };
    loadAssignments();
  }, [grupo, parcial]);

  React.useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [alumnosFiltrados, asignaciones, entregasRegistradas, previewInfo]);

  const obtenerCalificacion = (estudianteId, asignacionId) =>
    calificaciones.find(
      (item) =>
        Number(item.alumnoId) === Number(estudianteId) &&
        Number(item.asignacionId) === Number(asignacionId),
    )?.calificacion ?? '';

  const obtenerEntrega = (estudianteId, asignacionId) => 
    entregasRegistradas.find(
      (item) =>
        Number(item.alumnoId) === Number(estudianteId) &&
        Number(item.asignacionId) === Number(asignacionId),
    );

  const handleInputChange = (estudianteId, asignacionId, value) => {
    const numericValue = value === '' ? '' : Number(value);
    if (numericValue !== '' && (Number.isNaN(numericValue) || numericValue < 0 || numericValue > 100)) return;

    setCalificaciones((actuales) => {
      const sinActual = actuales.filter(
        (item) => !(Number(item.alumnoId) === Number(estudianteId) && Number(item.asignacionId) === Number(asignacionId)),
      );
      return [...sinActual, { alumnoId: estudianteId, asignacionId, calificacion: numericValue, parcial }];
    });
  };

  const handleSaveGrade = async (estudianteId, asignacionId, value) => {
    if (value === '') return; 
    const inputKey = `${estudianteId}-${asignacionId}`;
    setGuardandoId(inputKey); 

    try {
      const calificacionGuardada = await guardarCalificacionAsignacionRemota({
        grupo: grupo === 'Todos' ? usuarios.find(u => u.id === estudianteId)?.grupo : grupo,
        alumnoId: estudianteId,
        parcial,
        asignacionId,
        calificacion: Number(value),
        observaciones: '',
      });

      setCalificaciones((actuales) => {
        const sinActual = actuales.filter(
          (item) => !(Number(item.alumnoId) === Number(estudianteId) && Number(item.asignacionId) === Number(asignacionId)),
        );
        return [...sinActual, calificacionGuardada];
      });
    } catch (err) {
      alert('Error al guardar la calificación.');
    } finally {
      setTimeout(() => setGuardandoId(null), 600);
    }
  };

  // Función modificada para procesar el Base64 de forma segura
  const procesarBase64ParaVista = (mimeType, base64Raw) => {
    const prefix = `data:${mimeType};base64,`;
    return base64Raw.startsWith('data:') ? base64Raw : prefix + base64Raw;
  };

  // NUEVA FUNCIÓN: Cargar la vista previa
  const handleVerPreview = async (entrega) => {
    const entregaKey = `${entrega.alumnoId}-${entrega.asignacionId}`;
    if (cargandoPreviewId === entregaKey) return;
    
    setCargandoPreviewId(entregaKey);
    try {
      const archivoCompleto = await fetchArchivoEntrega({
        alumnoId: entrega.alumnoId,
        asignacionId: entrega.asignacionId
      });

      if (archivoCompleto && archivoCompleto.archivoBase64) {
        setPreviewInfo({
          ...archivoCompleto,
          srcUrl: procesarBase64ParaVista(archivoCompleto.mimeType, archivoCompleto.archivoBase64)
        });
      } else {
        alert('El archivo no está disponible o está corrupto.');
      }
    } catch (err) {
      alert('Error al cargar la previsualización.');
    } finally {
      setCargandoPreviewId(null);
    }
  };

  const handleDescargarArchivo = async (entrega) => {
    const entregaKey = `${entrega.alumnoId}-${entrega.asignacionId}`;
    if (descargandoId === entregaKey) return;
    setDescargandoId(entregaKey);
    
    try {
      const archivoCompleto = await fetchArchivoEntrega({
        alumnoId: entrega.alumnoId,
        asignacionId: entrega.asignacionId
      });

      if (archivoCompleto && archivoCompleto.archivoBase64) {
        const link = document.createElement('a');
        link.href = procesarBase64ParaVista(archivoCompleto.mimeType, archivoCompleto.archivoBase64);
        link.download = archivoCompleto.nombreArchivo || `entrega_${entrega.alumnoId}`;
        link.click();
      } else {
        alert('El archivo no está disponible o está corrupto.');
      }
    } catch (err) {
      alert('Hubo un error al intentar descargar el archivo.');
    } finally {
      setDescargandoId(null);
    }
  };

  const handleDevolverEntrega = async (entrega) => {
    if (window.confirm('¿Estás seguro de devolver esta asignación? El alumno tendrá que subir el archivo de nuevo.')) {
      try {
        await devolverEntrega(entrega.alumnoId, entrega.asignacionId);
        setEntregasRegistradas((actuales) => 
          actuales.filter(item => 
            !(Number(item.alumnoId) === Number(entrega.alumnoId) && Number(item.asignacionId) === Number(entrega.asignacionId))
          )
        );
        alert('Asignación devuelta correctamente.');
      } catch (error) {
        alert('Hubo un error al intentar devolver la asignación.');
      }
    }
  };

  return (
    <div className="space-y-6 relative">
      <div className="rounded-2xl border border-gray-200 bg-white p-4 md:p-6 shadow-sm">
        <h2 className="text-lg md:text-xl font-bold text-gray-900">Calificación por asignación</h2>
        <p className="mt-1 text-xs md:text-sm text-gray-500">
          Busca alumnos, previsualiza sus entregas y registra calificaciones al instante.
        </p>
        
        <div className="mt-4 md:mt-6 flex flex-wrap gap-3 md:gap-4">
          <div className="relative flex-grow min-w-[200px]">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <i data-lucide="search" className="w-4 h-4 text-gray-400"></i>
            </div>
            <input
              type="text"
              placeholder="Buscar por nombre o correo..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full rounded-xl border border-gray-300 pl-11 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-[#6b2132] outline-none transition-all shadow-sm"
            />
          </div>
          
          <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-xl px-4 py-2.5 shadow-sm focus-within:ring-2 focus-within:ring-[#6b2132] transition-all flex-grow md:flex-grow-0 md:w-56">
            <i data-lucide="users" className="w-4 h-4 text-gray-500"></i>
            <select
              value={grupo}
              onChange={(event) => setGrupo(event.target.value)}
              className="bg-transparent outline-none w-full text-sm text-gray-700 cursor-pointer"
            >
              {grupos.map((item) => (
                <option key={item} value={item}>
                  {item === 'Todos' ? 'Todos los grupos' : `Grupo ${item}`}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-xl px-4 py-2.5 shadow-sm focus-within:ring-2 focus-within:ring-[#6b2132] transition-all flex-grow md:flex-grow-0 md:w-40">
            <i data-lucide="calendar" className="w-4 h-4 text-gray-500"></i>
            <select
              value={parcial}
              onChange={(event) => setParcial(Number(event.target.value))}
              className="bg-transparent outline-none w-full text-sm text-gray-700 cursor-pointer"
            >
              <option value={1}>Parcial 1</option>
              <option value={2}>Parcial 2</option>
              <option value={3}>Parcial 3</option>
            </select>
          </div>

          <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-xl px-4 py-2.5 shadow-sm focus-within:ring-2 focus-within:ring-[#6b2132] transition-all flex-grow md:flex-grow-0 md:w-48">
            <i data-lucide="filter" className="w-4 h-4 text-gray-500"></i>
            <select
              value={filtroEstado}
              onChange={(event) => setFiltroEstado(event.target.value)}
              className="bg-transparent outline-none w-full text-sm text-gray-700 cursor-pointer"
            >
              <option value="Todos">Cualquier estado</option>
              <option value="Completos">Al día (Completos)</option>
              <option value="Pendientes">Con pendientes</option>
            </select>
          </div>
        </div>
      </div>

      {error && <p className="text-sm text-red-700 bg-red-50 p-3 rounded-lg">{error}</p>}
      
      {loading ? (
        <div className="p-12 flex flex-col items-center justify-center text-gray-400 bg-white rounded-2xl border border-gray-200">
           <i data-lucide="loader-2" className="w-8 h-8 animate-spin mb-2"></i>
           <p className="text-sm">Cargando asignaciones...</p>
        </div>
      ) : asignaciones.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-2xl border border-gray-200">
          <p className="text-sm text-gray-500">No hay asignaciones activas para este filtro.</p>
        </div>
      ) : (
        <>
          {/* VISTA MÓVIL */}
          <div className="md:hidden space-y-4">
            {alumnosFiltrados.length === 0 && (
              <p className="text-center text-gray-500 py-8">No se encontraron alumnos con estos filtros.</p>
            )}
            {alumnosFiltrados.map((alumno) => (
              <div key={`mobile-${alumno.id}`} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                <div className="border-b border-gray-100 pb-3 mb-3">
                  <h3 className="font-semibold text-gray-900 text-lg">{alumno.nombre} {alumno.apellido}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{alumno.email}</p>
                  <p className="text-xs font-medium text-[#6b2132] mt-0.5">Grupo {alumno.grupo}</p>
                </div>
                <div className="space-y-3">
                  {asignaciones.map((asignacion) => {
                    const entrega = obtenerEntrega(alumno.id, asignacion.id);
                    const isEntregado = entrega && entrega.nombreArchivo;
                    const inputKey = `${alumno.id}-${asignacion.id}`;
                    const estaGuardando = guardandoId === inputKey;
                    const estaDescargando = descargandoId === inputKey;
                    const estaCargandoPreview = cargandoPreviewId === inputKey;

                    return (
                      <div key={`mobile-${alumno.id}-${asignacion.id}`} className="bg-gray-50/80 p-3 rounded-lg border border-gray-100 flex flex-col gap-3">
                        <div className="flex justify-between items-start gap-2">
                          <div>
                            <div className="text-sm font-bold text-gray-800 line-clamp-2">{asignacion.titulo}</div>
                            <div className="text-[10px] text-gray-500 uppercase tracking-wide mt-0.5">Valor: {asignacion.porcentaje}%</div>
                          </div>
                          {isEntregado ? (
                            <span className="shrink-0 inline-flex items-center gap-1 px-2 py-1 rounded text-[10px] font-bold bg-green-100 text-green-700">
                              <i data-lucide="check-circle" className="w-3 h-3"></i> ENTREGADO
                            </span>
                          ) : (
                            <span className="shrink-0 inline-flex items-center gap-1 px-2 py-1 rounded text-[10px] font-bold bg-yellow-100 text-yellow-700">
                              <i data-lucide="clock" className="w-3 h-3"></i> PENDIENTE
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                          <div className="flex gap-2">
                            {isEntregado && (
                              <>
                                <button onClick={() => handleVerPreview(entrega)} disabled={estaCargandoPreview} title="Ver previa" className="p-2 rounded-md bg-white border border-blue-200 text-blue-600 shadow-sm hover:bg-blue-50 transition-colors">
                                  <i data-lucide={estaCargandoPreview ? "loader-2" : "eye"} className={`w-4 h-4 ${estaCargandoPreview ? "animate-spin" : ""}`}></i>
                                </button>
                                <button onClick={() => handleDescargarArchivo(entrega)} disabled={estaDescargando} title="Descargar" className="p-2 rounded-md bg-white border border-green-200 text-green-700 shadow-sm hover:bg-green-50 transition-colors">
                                  <i data-lucide={estaDescargando ? "loader-2" : "download"} className={`w-4 h-4 ${estaDescargando ? "animate-spin" : ""}`}></i>
                                </button>
                                <button onClick={() => handleDevolverEntrega(entrega)} title="Devolver" className="p-2 rounded-md bg-white border border-red-200 text-red-600 shadow-sm hover:bg-red-50 transition-colors">
                                  <i data-lucide="rotate-ccw" className="w-4 h-4"></i>
                                </button>
                              </>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-gray-500">Calif:</span>
                            <input
                              type="number"
                              min="0"
                              max="100"
                              value={obtenerCalificacion(alumno.id, asignacion.id)}
                              onChange={(event) => handleInputChange(alumno.id, asignacion.id, event.target.value)}
                              onBlur={(event) => handleSaveGrade(alumno.id, asignacion.id, event.target.value)}
                              onKeyDown={(event) => { if (event.key === 'Enter') event.target.blur(); }}
                              className={`w-16 text-center rounded-md border px-2 py-1.5 text-sm font-bold outline-none transition-all shadow-sm ${
                                estaGuardando ? 'border-green-500 bg-green-50 text-green-700 ring-2 ring-green-200' : isEntregado ? 'border-[#6b2132] focus:ring-2 focus:ring-[#6b2132] bg-white' : 'border-gray-200 bg-gray-100'
                              }`}
                              placeholder="-"
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* VISTA DESKTOP */}
          <div className="hidden md:block rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px]">
                <thead className="bg-gray-50">
                  <tr>
                    <th rowSpan={2} className="px-6 py-4 border-b border-r border-gray-200 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 bg-white">
                      Alumno
                    </th>
                    {asignaciones.map((asignacion) => (
                      <th key={`title-${asignacion.id}`} colSpan={2} className="px-4 py-3 border-b border-r border-gray-200 text-center">
                        <div className="font-bold text-gray-800 truncate max-w-[200px] mx-auto" title={asignacion.titulo}>
                          {asignacion.titulo}
                        </div>
                        <div className="mt-0.5 text-[10px] font-medium text-gray-500 uppercase tracking-wide">
                          Valor: {asignacion.porcentaje}%
                        </div>
                      </th>
                    ))}
                  </tr>
                  <tr>
                    {asignaciones.map((asignacion) => (
                      <React.Fragment key={`sub-${asignacion.id}`}>
                        <th className="px-4 py-2 border-b border-r border-gray-200 text-center text-[11px] font-semibold text-gray-500 uppercase tracking-wider w-[150px]">
                          Estado y Archivo
                        </th>
                        <th className="px-4 py-2 border-b border-r border-gray-200 text-center text-[11px] font-semibold text-gray-500 uppercase tracking-wider w-[100px]">
                          Calificación
                        </th>
                      </React.Fragment>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {alumnosFiltrados.map((alumno) => (
                    <tr key={alumno.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 border-r border-gray-100 whitespace-nowrap">
                        <div className="font-semibold text-gray-900">
                          {alumno.nombre} {alumno.apellido}
                        </div>
                        <div className="text-xs text-gray-500 flex flex-col gap-0.5 mt-1">
                          <span>{alumno.email}</span>
                          <span className="font-medium text-[#6b2132]">{alumno.grupo}</span>
                        </div>
                      </td>
                      
                      {asignaciones.map((asignacion) => {
                        const entrega = obtenerEntrega(alumno.id, asignacion.id);
                        const isEntregado = entrega && entrega.nombreArchivo; 
                        const inputKey = `${alumno.id}-${asignacion.id}`;
                        const estaGuardando = guardandoId === inputKey;
                        const estaDescargando = descargandoId === inputKey;
                        const estaCargandoPreview = cargandoPreviewId === inputKey;

                        return (
                          <React.Fragment key={`${alumno.id}-${asignacion.id}`}>
                            <td className="px-4 py-4 border-r border-gray-100 align-middle">
                              <div className="flex flex-col items-center gap-2">
                                {isEntregado ? (
                                  <>
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-green-100 text-green-700">
                                      <i data-lucide="check-circle" className="w-3 h-3"></i> ENTREGADO
                                    </span>
                                    <div className="flex gap-1.5 mt-1">
                                      <button onClick={() => handleVerPreview(entrega)} disabled={estaCargandoPreview} title="Ver previa" className="p-1.5 rounded-md bg-white border border-blue-200 text-blue-600 shadow-sm hover:bg-blue-50 transition-colors">
                                        <i data-lucide={estaCargandoPreview ? "loader-2" : "eye"} className={`w-3.5 h-3.5 ${estaCargandoPreview ? "animate-spin" : ""}`}></i>
                                      </button>
                                      <button onClick={() => handleDescargarArchivo(entrega)} disabled={estaDescargando} title="Descargar archivo" className="p-1.5 rounded-md bg-white border border-green-200 text-green-700 shadow-sm hover:bg-green-50 transition-colors">
                                        <i data-lucide={estaDescargando ? "loader-2" : "download"} className={`w-3.5 h-3.5 ${estaDescargando ? "animate-spin" : ""}`}></i>
                                      </button>
                                      <button onClick={() => handleDevolverEntrega(entrega)} title="Devolver asignación" className="p-1.5 rounded-md bg-white border border-red-200 text-red-600 shadow-sm hover:bg-red-50 transition-colors">
                                        <i data-lucide="rotate-ccw" className="w-3.5 h-3.5"></i>
                                      </button>
                                    </div>
                                  </>
                                ) : (
                                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-yellow-100 text-yellow-700">
                                    <i data-lucide="clock" className="w-3 h-3"></i> PENDIENTE
                                  </span>
                                )}
                              </div>
                            </td>
                            <td className="px-4 py-4 border-r border-gray-100 align-middle">
                              <div className="flex justify-center">
                                <input
                                  type="number"
                                  min="0"
                                  max="100"
                                  value={obtenerCalificacion(alumno.id, asignacion.id)}
                                  onChange={(event) => handleInputChange(alumno.id, asignacion.id, event.target.value)}
                                  onBlur={(event) => handleSaveGrade(alumno.id, asignacion.id, event.target.value)}
                                  onKeyDown={(event) => { if (event.key === 'Enter') event.target.blur(); }}
                                  className={`w-16 text-center rounded-lg border px-2 py-1.5 text-sm font-semibold outline-none transition-all shadow-sm ${
                                    estaGuardando 
                                      ? 'border-green-500 bg-green-50 text-green-700 ring-2 ring-green-200 scale-105 font-bold' 
                                      : isEntregado ? 'border-[#6b2132] focus:ring-2 focus:ring-[#6b2132] bg-white' : 'border-gray-200 focus:border-gray-400 bg-gray-50'
                                  }`}
                                  placeholder="-"
                                />
                              </div>
                            </td>
                          </React.Fragment>
                        );
                      })}
                    </tr>
                  ))}
                  {alumnosFiltrados.length === 0 && (
                    <tr>
                      <td colSpan={asignaciones.length * 2 + 1} className="py-8 text-center text-gray-500">
                        No se encontraron alumnos con los filtros seleccionados.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* ================= MODAL DE PREVIEW ================= */}
      {previewInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-8 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl w-full max-w-5xl max-h-full flex flex-col shadow-2xl overflow-hidden relative">
            
            {/* Header del Modal */}
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50 shrink-0">
              <div className="flex items-center gap-3">
                <div className="bg-[#6b2132]/10 p-2 rounded-lg text-[#6b2132]">
                  <i data-lucide="file-text" className="w-5 h-5"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg truncate max-w-lg" title={previewInfo.nombreArchivo}>
                    {previewInfo.nombreArchivo || 'Archivo adjunto'}
                  </h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Vista previa</p>
                </div>
              </div>
              <button 
                onClick={() => setPreviewInfo(null)}
                className="p-2 rounded-full hover:bg-gray-200 text-gray-500 transition-colors"
                title="Cerrar (Esc)"
              >
                <i data-lucide="x" className="w-6 h-6"></i>
              </button>
            </div>

            {/* Contenido del Modal */}
            <div className="flex-1 overflow-auto bg-gray-100 flex items-center justify-center p-6 min-h-[50vh]">
              {previewInfo.mimeType?.startsWith('image/') ? (
                <img 
                  src={previewInfo.srcUrl} 
                  alt="Previsualización de tarea" 
                  className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-sm border border-gray-200"
                />
              ) : previewInfo.mimeType === 'application/pdf' ? (
                <iframe 
                  src={previewInfo.srcUrl} 
                  className="w-full h-[70vh] rounded-lg shadow-sm border border-gray-200"
                  title="PDF Preview"
                />
              ) : (
                <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-200">
                  <i data-lucide="file-warning" className="w-12 h-12 text-yellow-500 mx-auto mb-3"></i>
                  <p className="font-semibold text-gray-800">Vista previa no disponible</p>
                  <p className="text-sm text-gray-500 mt-1 mb-4">El navegador no puede previsualizar archivos de tipo: {previewInfo.mimeType}</p>
                  <a 
                    href={previewInfo.srcUrl} 
                    download={previewInfo.nombreArchivo || 'archivo_entregado'}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#6b2132] text-white rounded-lg hover:bg-[#5a1b2a] transition-colors font-medium text-sm"
                  >
                    <i data-lucide="download" className="w-4 h-4"></i>
                    Descargar en su lugar
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignmentGradePanel;