import React, { useMemo, useEffect } from 'react';
import {
  ROLE_OPTIONS,
  fetchUsuarios,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
  GRUPOS_DISPONIBLES,
} from '../services/authApi';
import { cerrarSesion } from '../utils/localStorage';
import ContentManagementPanel from '../components/ContentManagementPanel';
import AssignmentGradePanel from '../components/AssignmentGradePanel';
import StudentAnalyticsPanel from '../pages/StudentAnalyticsPanel';

const INITIAL_USER = {
  id: null,
  nombre: '',
  apellido: '',
  email: '',
  password: '',
  grupo: '',
  tipo: 'alumno',
  estado: 'activo',
};

const AdminDashboard = ({ usuario, onNavigate, onLogout }) => {
  const [tabActiva, setTabActiva] = React.useState('usuarios');
  const [usuarios, setUsuarios] = React.useState([]);
  const [draft, setDraft] = React.useState(INITIAL_USER);
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');

  const [filtroRol, setFiltroRol] = React.useState('Todos');
  const [filtroGrupo, setFiltroGrupo] = React.useState('Todos');
  const [mostrarPassword, setMostrarPassword] = React.useState(false);

  const cargarUsuarios = React.useCallback(async () => {
    try {
      setError('');
      const data = await fetchUsuarios();
      setUsuarios(data);
    } catch (loadError) {
      setError(loadError.message || 'No fue posible cargar los usuarios.');
    }
  }, []);

  useEffect(() => {
    cargarUsuarios();
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [cargarUsuarios], [mostrarPassword]);

  const handleCerrarSesion = () => {
    cerrarSesion();
    if (onLogout) onLogout();
    if (onNavigate) onNavigate('Inicio');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');
    
    try {
      const payload = {
        id: Number(draft.id),
        nombre: draft.nombre.trim(),
        apellido: draft.apellido.trim(),
        email: draft.email.trim(),
        grupo: draft.tipo === 'alumno' ? (draft.grupo || '') : '',
        rol: draft.tipo.toUpperCase(), 
        estado: draft.estado.toUpperCase()
      };

      if (draft.password && draft.password.trim() !== '') {
        payload.password = draft.password;
      }

      if (draft.id) {
        await actualizarUsuario(payload);
        setSuccess('Usuario actualizado con éxito.');
      } else {
        await crearUsuario(payload);
        setSuccess('Usuario creado con éxito.');
      }
      
      setDraft(INITIAL_USER);
      await cargarUsuarios();
    } catch (submitError) {
      setError(submitError.message || 'Error al guardar. Verifica los datos.');
    }
  };

  // --- LÓGICA DE FILTROS Y GRUPOS ---
  const gruposUnicos = useMemo(() => {
    const grupos = usuarios.map(u => u.grupo).filter(g => g && g.trim() !== '');
    return ['Todos', ...new Set(grupos)];
  }, [usuarios]);

  // Calculamos los grupos para el Formulario (Tabla + Disponibles en API)
  const gruposFormulario = useMemo(() => {
    const gruposTabla = usuarios.map(u => u.grupo).filter(g => g && g.trim() !== '');
    // Hacemos un Set para evitar repetidos y los ordenamos alfabéticamente
    return [...new Set([...GRUPOS_DISPONIBLES, ...gruposTabla])].sort();
  }, [usuarios]);

  const usuariosFiltrados = useMemo(() => {
    return usuarios.filter(u => {
      const uTipo = (u.rol || u.tipo || '').toLowerCase();
      const pasaRol = filtroRol === 'Todos' || uTipo === filtroRol.toLowerCase();
      const pasaGrupo = filtroGrupo === 'Todos' || u.grupo === filtroGrupo;
      return pasaRol && pasaGrupo;
    });
  }, [usuarios, filtroRol, filtroGrupo]);

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [usuariosFiltrados, tabActiva]);

  const stats = {
    alumnos: usuarios.filter((item) => (item.rol || item.tipo || '').toLowerCase() === 'alumno').length,
    moderadores: usuarios.filter((item) => (item.rol || item.tipo || '').toLowerCase() === 'moderador').length,
    administradores: usuarios.filter((item) => (item.rol || item.tipo || '').toLowerCase() === 'administrador').length,
  };

  return (
    <div className="max-w-7xl mx-auto fade-in space-y-8 p-4 lg:p-8 w-full overflow-x-hidden">
      {/* Banner Principal */}
      <div className="bg-gradient-to-r from-[#6b2132] to-[#0d3b66] text-white p-6 md:p-8 rounded-2xl shadow-lg">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-amber-200 mb-1">Administración</p>
            <h1 className="text-3xl md:text-4xl font-bold">Panel de control institucional</h1>
            <p className="mt-2 text-sm text-white/80">
              Gestiona usuarios, roles y el contenido académico publicado.
            </p>
          </div>
          
          <div className="flex flex-wrap sm:flex-nowrap gap-3 w-full sm:w-auto mt-2 sm:mt-0">
            <button
              onClick={() => onNavigate('Editar Perfil')}
              className="flex-1 sm:flex-none bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition flex items-center justify-center gap-2 font-medium whitespace-nowrap"
            >
              <i data-lucide="user-cog" className="w-4 h-4"></i>
              Editar Perfil
            </button>
            <button
              onClick={handleCerrarSesion}
              className="flex-1 sm:flex-none bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition text-center whitespace-nowrap font-medium shadow-sm"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>

      {/* Tarjetas de Estadísticas */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 shadow-sm">
          <p className="text-sm text-blue-700 font-medium">Alumnos Totales</p>
          <p className="text-3xl font-bold text-blue-900 mt-1">{stats.alumnos}</p>
        </div>
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 shadow-sm">
          <p className="text-sm text-amber-700 font-medium">Moderadores Activos</p>
          <p className="text-3xl font-bold text-amber-900 mt-1">{stats.moderadores}</p>
        </div>
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5 shadow-sm">
          <p className="text-sm text-rose-700 font-medium">Administradores</p>
          <p className="text-3xl font-bold text-rose-900 mt-1">{stats.administradores}</p>
        </div>
      </div>

      {/* Selector de Pestañas */}
      <div className="flex gap-2 border-b border-gray-200 overflow-x-auto w-full">
        {[
          { id: 'usuarios', label: 'Usuarios' },
          { id: 'calificaciones', label: 'Calificaciones' },
          { id: 'contenidos', label: 'Contenidos' },
          { id: 'analiticas', label: 'Analíticas' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setTabActiva(tab.id)}
            className={`border-b-2 px-4 py-3 text-sm font-semibold whitespace-nowrap transition-colors ${
              tabActiva === tab.id
                ? 'border-[#6b2132] text-[#6b2132]'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Contenido de las Pestañas */}
      {tabActiva === 'usuarios' ? (
        <div className="flex flex-col lg:flex-row gap-6 w-full items-start">
          
          {/* Formulario Lateral */}
          <div className="w-full lg:w-[360px] flex-shrink-0 lg:sticky lg:top-6">
            <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 bg-white p-6 space-y-4 shadow-sm w-full">
              <h2 className="text-xl font-bold text-gray-900 border-b pb-2">
                {draft.id ? 'Editar usuario' : 'Nuevo usuario'}
              </h2>
              <div className="space-y-3 pt-2">
                <input
                  value={draft.nombre}
                  onChange={(event) => setDraft({ ...draft, nombre: event.target.value })}
                  placeholder="Nombre"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#6b2132] outline-none"
                  required
                />
                <input
                  value={draft.apellido}
                  onChange={(event) => setDraft({ ...draft, apellido: event.target.value })}
                  placeholder="Apellido"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#6b2132] outline-none"
                  required
                />
                <input
                  type="email"
                  value={draft.email}
                  onChange={(event) => setDraft({ ...draft, email: event.target.value })}
                  placeholder="Correo electrónico"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#6b2132] outline-none"
                  required
                />
                <div className="relative">
                  <input
                    type={mostrarPassword ? "text" : "password"}
                    value={draft.password || ''}
                    onChange={(event) => setDraft({ ...draft, password: event.target.value })}
                    placeholder={draft.id ? 'Nueva contraseña (opcional)' : 'Contraseña temporal'}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 pr-10 focus:ring-2 focus:ring-[#6b2132] outline-none"
                    required={!draft.id}
                  />
                  <button
                    type="button"
                    onClick={() => setMostrarPassword(!mostrarPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#6b2132] transition-colors"
                    title={mostrarPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                  >
                    <i data-lucide={mostrarPassword ? "eye-off" : "eye"} className="w-5 h-5"></i>
                  </button>
                </div>
                
                {/* COMBOBOX DE GRUPO DINÁMICO */}
                <select
                  value={draft.grupo || ''}
                  onChange={(event) => setDraft({ ...draft, grupo: event.target.value })}
                  disabled={draft.tipo !== 'alumno'}
                  required={draft.tipo === 'alumno'}
                  className={`w-full rounded-lg border px-4 py-2 outline-none transition-colors ${
                    draft.tipo !== 'alumno' 
                      ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed' 
                      : 'bg-white border-gray-300 focus:border-[#6b2132] focus:ring-2 focus:ring-[#6b2132]'
                  }`}
                >
                  <option value="" disabled>Selecciona un grupo</option>
                  {gruposFormulario.map(g => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
                
                <div className="grid grid-cols-2 gap-3">
                  <select
                    value={draft.tipo}
                    onChange={(event) => {
                      const nuevoTipo = event.target.value;
                      setDraft({ 
                        ...draft, 
                        tipo: nuevoTipo,
                        // Al cambiar el rol, limpiamos el grupo si ya no es alumno
                        grupo: nuevoTipo !== 'alumno' ? '' : draft.grupo 
                      });
                    }}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-[#6b2132] outline-none"
                  >
                    {ROLE_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <select
                    value={draft.estado}
                    onChange={(event) => setDraft({ ...draft, estado: event.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-[#6b2132] outline-none"
                  >
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                  </select>
                </div>
              </div>

              {error && <p className="text-sm text-red-700 bg-red-50 p-2 rounded">{error}</p>}
              {success && <p className="text-sm text-green-700 bg-green-50 p-2 rounded">{success}</p>}
              
              <div className="flex gap-3 pt-2">
                <button className="flex-1 rounded-lg bg-[#6b2132] px-4 py-2 text-sm font-semibold text-white hover:bg-[#5a1b2a] transition whitespace-nowrap">
                  {draft.id ? 'Guardar cambios' : 'Crear usuario'}
                </button>
                {draft.id && (
                  <button
                    type="button"
                    onClick={() => { setDraft(INITIAL_USER); setError(''); setSuccess(''); }}
                    className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200 transition"
                  >
                    Cancelar
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Tabla y Filtros */}
          <div className="w-full min-w-0 flex-1">
            <div className="rounded-2xl border border-gray-200 bg-white p-4 md:p-6 shadow-sm flex flex-col h-full w-full">
              
              {/* Barra de Filtros */}
              <div className="flex flex-wrap gap-4 mb-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="flex flex-col w-full sm:w-auto">
                  <label className="text-xs font-semibold text-gray-500 uppercase mb-1">Filtrar por Rol</label>
                  <select 
                    value={filtroRol} 
                    onChange={(e) => {
                      const nuevoRol = e.target.value;
                      setFiltroRol(nuevoRol);
                      if (nuevoRol !== 'alumno') {
                        setFiltroGrupo('Todos');
                      }
                    }}
                    className="w-full sm:w-auto rounded-lg bg-white border border-gray-300 px-3 py-1.5 text-sm outline-none focus:border-[#6b2132] transition-colors"
                  >
                    <option value="Todos">Todos los roles</option>
                    {ROLE_OPTIONS.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                  </select>
                </div>

                <div className="flex flex-col w-full sm:w-auto">
                  <label className={`text-xs font-semibold uppercase mb-1 transition-colors ${filtroRol === 'alumno' ? 'text-gray-500' : 'text-gray-400'}`}>
                    Filtrar por Grupo
                  </label>
                  <select 
                    value={filtroGrupo} 
                    onChange={(e) => setFiltroGrupo(e.target.value)}
                    disabled={filtroRol !== 'alumno'}
                    className={`w-full sm:w-auto rounded-lg border px-3 py-1.5 text-sm outline-none transition-colors ${
                      filtroRol !== 'alumno' 
                        ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed' 
                        : 'bg-white border-gray-300 focus:border-[#6b2132]'
                    }`}
                  >
                    {gruposUnicos.map(g => <option key={g} value={g}>{g === 'Todos' ? 'Todos los grupos' : g}</option>)}
                  </select>
                </div>
                
                <div className="flex items-end sm:ml-auto w-full sm:w-auto mt-2 sm:mt-0">
                  <span className="text-sm text-gray-500 bg-white px-3 py-1.5 rounded-lg border border-gray-200">
                    Mostrando <strong>{usuariosFiltrados.length}</strong> usuarios
                  </span>
                </div>
              </div>

              {/* Contenedor de la Tabla con scroll horizontal */}
              <div className="overflow-x-auto w-full">
                <table className="w-full min-w-[680px]">
                  <thead>
                    <tr className="border-b border-gray-200 text-left text-xs uppercase tracking-[0.2em] text-gray-400">
                      <th className="pb-3 pl-2">Usuario</th>
                      <th className="pb-3">Rol</th>
                      <th className="pb-3">Grupo</th>
                      <th className="pb-3">Estado</th>
                      <th className="pb-3 text-right pr-2">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usuariosFiltrados.length > 0 ? (
                      usuariosFiltrados.map((item) => {
                        const tipoDisplay = (item.rol || item.tipo || '').toLowerCase();
                        const estadoDisplay = (item.estado || '').toLowerCase();

                        return (
                          <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                            <td className="py-4 pl-2">
                              <p className="font-semibold text-gray-900">
                                {item.nombre} {item.apellido}
                              </p>
                              <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                                <i data-lucide="mail" className="w-3 h-3"></i>
                                {item.email}
                              </p>
                            </td>
                            <td className="py-4 text-sm capitalize text-gray-700">
                              <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                                tipoDisplay === 'administrador' ? 'bg-rose-100 text-rose-700' :
                                tipoDisplay === 'moderador' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                              }`}>
                                {tipoDisplay}
                              </span>
                            </td>
                            <td className="py-4 text-sm text-gray-600 font-medium">{item.grupo || <span className="text-gray-400 italic">N/A</span>}</td>
                            <td className="py-4 text-sm">
                              <span className={`flex items-center gap-1.5 ${estadoDisplay === 'activo' ? 'text-green-600' : 'text-gray-400'}`}>
                                <span className={`w-2 h-2 rounded-full ${estadoDisplay === 'activo' ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                                <span className="capitalize">{estadoDisplay}</span>
                              </span>
                            </td>
                            <td className="py-4 pr-2">
                              <div className="flex justify-end gap-3 text-sm font-semibold">
                                <button
                                  type="button"
                                  onClick={() => {
                                    setDraft({ 
                                      ...INITIAL_USER, 
                                      ...item, 
                                      password: '',
                                      tipo: tipoDisplay,
                                      estado: estadoDisplay
                                    });
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                  }}
                                  className="text-indigo-600 hover:text-indigo-800 transition flex items-center gap-1"
                                >
                                  <i data-lucide="pencil" className="w-4 h-4"></i>
                                  Editar
                                </button>
                                <button
                                  type="button"
                                  onClick={async () => {
                                    if (window.confirm(`¿Estás seguro de eliminar a ${item.nombre}?`)) {
                                      await eliminarUsuario(item.id);
                                      await cargarUsuarios();
                                    }
                                  }}
                                  className="text-red-600 hover:text-red-800 transition flex items-center gap-1"
                                >
                                  <i data-lucide="trash-2" className="w-4 h-4"></i>
                                  Eliminar
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan="5" className="py-8 text-center text-gray-500">
                          No se encontraron usuarios con esos filtros.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : tabActiva === 'calificaciones' ? (
        <AssignmentGradePanel />
      ) : tabActiva === 'analiticas' ? (
        <StudentAnalyticsPanel />
      ) : (
        <ContentManagementPanel roleLabel="Administración" />
)}
    </div>
  );
};

export default AdminDashboard;