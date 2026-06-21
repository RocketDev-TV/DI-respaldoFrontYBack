import React from 'react';
import {
  ROLE_OPTIONS,
  fetchUsuarios,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
} from '../services/authApi';
import { cerrarSesion } from '../utils/localStorage';
import ContentManagementPanel from '../components/ContentManagementPanel';
import AssignmentGradePanel from '../components/AssignmentGradePanel';

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

  const cargarUsuarios = React.useCallback(async () => {
    try {
      setError('');
      const data = await fetchUsuarios();
      setUsuarios(data);
    } catch (loadError) {
      setError(loadError.message || 'No fue posible cargar los usuarios.');
    }
  }, []);

  React.useEffect(() => {
    cargarUsuarios();
  }, [cargarUsuarios]);

  const handleCerrarSesion = () => {
    cerrarSesion();
    if (onLogout) onLogout();
    if (onNavigate) onNavigate('Inicio');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      if (draft.id) {
        await actualizarUsuario(draft);
        setSuccess('Usuario actualizado.');
      } else {
        await crearUsuario(draft);
        setSuccess('Usuario creado.');
      }
      setDraft(INITIAL_USER);
      await cargarUsuarios();
    } catch (submitError) {
      setError(submitError.message || 'No fue posible guardar el usuario.');
    }
  };

  const stats = {
    alumnos: usuarios.filter((item) => item.tipo === 'alumno').length,
    moderadores: usuarios.filter((item) => item.tipo === 'moderador').length,
    administradores: usuarios.filter((item) => item.tipo === 'administrador').length,
  };

  return (
    <div className="max-w-7xl mx-auto fade-in space-y-8">
      <div className="bg-gradient-to-r from-[#6b2132] to-[#0d3b66] text-white p-8 rounded-2xl shadow-lg">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-amber-200">Administración</p>
            <h1 className="text-4xl font-bold">Panel de control institucional</h1>
            <p className="mt-2 text-sm text-white/80">
              Gestiona usuarios, roles y el contenido académico publicado.
            </p>
          </div>
          <button
            onClick={handleCerrarSesion}
            className="rounded-lg bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            Cerrar sesión
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
          <p className="text-sm text-blue-700">Alumnos</p>
          <p className="text-3xl font-bold text-blue-900">{stats.alumnos}</p>
        </div>
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm text-amber-700">Moderadores</p>
          <p className="text-3xl font-bold text-amber-900">{stats.moderadores}</p>
        </div>
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
          <p className="text-sm text-rose-700">Administradores</p>
          <p className="text-3xl font-bold text-rose-900">{stats.administradores}</p>
        </div>
      </div>

      <div className="flex gap-2 border-b border-gray-200">
        {[
          { id: 'usuarios', label: 'Usuarios' },
          { id: 'calificaciones', label: 'Calificaciones' },
          { id: 'contenidos', label: 'Contenidos' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setTabActiva(tab.id)}
            className={`border-b-2 px-4 py-3 text-sm font-semibold ${
              tabActiva === tab.id
                ? 'border-[#6b2132] text-[#6b2132]'
                : 'border-transparent text-gray-500'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {tabActiva === 'usuarios' ? (
        <div className="grid gap-6 lg:grid-cols-[360px,1fr]">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 bg-white p-6 space-y-4">
            <h2 className="text-xl font-bold text-gray-900">
              {draft.id ? 'Editar usuario' : 'Nuevo usuario'}
            </h2>
            <input
              value={draft.nombre}
              onChange={(event) => setDraft({ ...draft, nombre: event.target.value })}
              placeholder="Nombre"
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
              required
            />
            <input
              value={draft.apellido}
              onChange={(event) => setDraft({ ...draft, apellido: event.target.value })}
              placeholder="Apellido"
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
              required
            />
            <input
              type="email"
              value={draft.email}
              onChange={(event) => setDraft({ ...draft, email: event.target.value })}
              placeholder="Correo"
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
              required
            />
            <input
              type="password"
              value={draft.password}
              onChange={(event) => setDraft({ ...draft, password: event.target.value })}
              placeholder={draft.id ? 'Nueva contraseña opcional' : 'Contraseña temporal'}
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
            />
            <input
              value={draft.grupo}
              onChange={(event) => setDraft({ ...draft, grupo: event.target.value })}
              placeholder="Grupo"
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
            />
            <select
              value={draft.tipo}
              onChange={(event) => setDraft({ ...draft, tipo: event.target.value })}
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
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
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
            >
              <option value="activo">Activo</option>
              <option value="inactivo">Inactivo</option>
            </select>
            {error && <p className="text-sm text-red-700">{error}</p>}
            {success && <p className="text-sm text-green-700">{success}</p>}
            <div className="flex gap-3">
              <button className="rounded-lg bg-[#6b2132] px-4 py-2 text-sm font-semibold text-white">
                {draft.id ? 'Guardar cambios' : 'Crear usuario'}
              </button>
              {draft.id && (
                <button
                  type="button"
                  onClick={() => setDraft(INITIAL_USER)}
                  className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700"
                >
                  Cancelar
                </button>
              )}
            </div>
          </form>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px]">
                <thead>
                  <tr className="border-b border-gray-200 text-left text-xs uppercase tracking-[0.2em] text-gray-400">
                    <th className="pb-3">Usuario</th>
                    <th className="pb-3">Rol</th>
                    <th className="pb-3">Grupo</th>
                    <th className="pb-3">Estado</th>
                    <th className="pb-3 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {usuarios.map((item) => (
                    <tr key={item.id} className="border-b border-gray-100">
                      <td className="py-4">
                        <p className="font-semibold text-gray-900">
                          {item.nombre} {item.apellido}
                        </p>
                        <p className="text-sm text-gray-500">{item.email}</p>
                      </td>
                      <td className="py-4 text-sm capitalize text-gray-700">{item.tipo}</td>
                      <td className="py-4 text-sm text-gray-600">{item.grupo || '-'}</td>
                      <td className="py-4 text-sm capitalize text-gray-600">{item.estado}</td>
                      <td className="py-4">
                        <div className="flex justify-end gap-3 text-sm font-semibold">
                          <button
                            type="button"
                            onClick={() => setDraft({ ...INITIAL_USER, ...item, password: '' })}
                            className="text-gray-700"
                          >
                            Editar
                          </button>
                          <button
                            type="button"
                            onClick={async () => {
                              await eliminarUsuario(item.id);
                              await cargarUsuarios();
                            }}
                            className="text-red-700"
                          >
                            Eliminar
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : tabActiva === 'calificaciones' ? (
        <AssignmentGradePanel />
      ) : (
        <ContentManagementPanel roleLabel="Administración" />
      )}
    </div>
  );
};

export default AdminDashboard;
