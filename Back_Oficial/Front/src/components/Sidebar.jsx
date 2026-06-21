import React from 'react';
import { cerrarSesion } from '../utils/localStorage';

const courses = [
  { name: 'Compiladores', icon: 'code-2' },
  { name: 'Teoría de la Computación.', icon: 'book-open' },
];

const generalPages = [
  { name: 'Contacto', icon: 'mail' },
  { name: 'Presentaciones', icon: 'presentation' },
  { name: 'Sobre Mi', icon: 'user' },
  { name: 'Tesis', icon: 'file-text' },
];

const authPages = [
  { name: 'Registrarse', icon: 'user-plus' },
  { name: 'Iniciar Sesión', icon: 'log-in' },
];

const VISTAS_PANEL = {
  alumno: 'Panel del Alumno',
  moderador: 'Panel de Moderación',
  administrador: 'Panel de Administración',
};

function renderNavItems(items, currentView, onClick, activeClass, defaultClass) {
  return (
    <ul className="space-y-1">
      {items.map((item) => (
        <li key={item.name}>
          <button
            onClick={() => onClick(item.name)}
            className={`w-full px-6 py-3 text-left text-sm transition flex items-center gap-3 ${
              currentView === item.name ? activeClass : defaultClass
            }`}
          >
            <i data-lucide={item.icon} className="w-4 h-4"></i>
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

const Sidebar = ({
  currentView,
  onNavigate,
  isMobileOpen,
  onMobileClose,
  usuarioLogueado,
  onLogout,
}) => {
  const handleNavigation = (view) => {
    onNavigate(view);
    onMobileClose();
  };

  const handleLogout = () => {
    cerrarSesion();
    if (onLogout) onLogout();
    handleNavigation('Inicio');
  };

  const roleLabel = usuarioLogueado
    ? usuarioLogueado.tipo === 'alumno'
      ? `Grupo ${usuarioLogueado.grupo}`
      : usuarioLogueado.tipo === 'moderador'
        ? 'Moderador académico'
        : 'Administrador'
    : 'Docencia IPN';

  return (
    <>
      {isMobileOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={onMobileClose} />
      )}

      <aside
        className={`w-72 bg-gray-950 text-white flex-col shadow-2xl transition-all duration-300 z-40 flex-shrink-0 ${
          isMobileOpen ? 'fixed left-0 top-0 h-full flex' : 'hidden lg:flex'
        }`}
      >
        <div
          className={`p-6 border-b border-gray-800 ${usuarioLogueado ? 'bg-[#132c46]' : 'bg-gray-900'}`}
        >
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gray-300 overflow-hidden border-2 border-[#6b2132]">
              <img
                src={
                  usuarioLogueado
                    ? `https://ui-avatars.com/api/?name=${usuarioLogueado.nombre}+${usuarioLogueado.apellido}&background=random`
                    : 'https://ui-avatars.com/api/?name=Instruccional&background=random'
                }
                alt={usuarioLogueado ? usuarioLogueado.nombre : 'Instruccional'}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-bold text-lg leading-tight text-gray-100">
                {usuarioLogueado
                  ? `${usuarioLogueado.nombre} ${usuarioLogueado.apellido}`
                  : 'Plataforma Instruccional'}
              </h2>
              <p className="text-xs text-gray-400">{roleLabel}</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto custom-scroll py-4">
          {!usuarioLogueado ? (
            <>
              <div className="px-4 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Cursos
              </div>
              {renderNavItems(
                courses,
                currentView,
                () => handleNavigation('Iniciar Sesión'),
                'bg-gray-900 border-l-4 border-[#6b2132] text-white',
                'text-gray-300 hover:bg-[#6b2132]/80',
              )}

              <div className="px-4 mt-6 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                General
              </div>
              {renderNavItems(
                generalPages,
                currentView,
                handleNavigation,
                'bg-gray-900 border-l-4 border-[#6b2132] text-white',
                'text-gray-300 hover:bg-gray-800',
              )}

              <div className="px-4 mt-6 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Acceso
              </div>
              {renderNavItems(
                authPages,
                currentView,
                handleNavigation,
                'bg-gray-900 border-l-4 border-[#6b2132] text-white',
                'text-gray-300 hover:bg-gray-800',
              )}
            </>
          ) : usuarioLogueado.tipo === 'alumno' ? (
            <>
              <div className="px-4 mb-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
                Aula
              </div>
              {renderNavItems(
                [{ name: VISTAS_PANEL.alumno, icon: 'layout-dashboard' }, ...courses],
                currentView,
                handleNavigation,
                'bg-gray-900 border-l-4 border-blue-500 text-white',
                'text-gray-300 hover:bg-blue-800/60',
              )}
            </>
          ) : usuarioLogueado.tipo === 'moderador' ? (
            <>
              <div className="px-4 mb-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
                Moderación
              </div>
              {renderNavItems(
                [{ name: VISTAS_PANEL.moderador, icon: 'file-pen-line' }, ...courses],
                currentView,
                handleNavigation,
                'bg-gray-900 border-l-4 border-amber-500 text-white',
                'text-gray-300 hover:bg-amber-900/40',
              )}
            </>
          ) : (
            <>
              <div className="px-4 mb-2 text-xs font-semibold text-rose-400 uppercase tracking-wider">
                Administración
              </div>
              {renderNavItems(
                [{ name: VISTAS_PANEL.administrador, icon: 'shield-check' }, ...courses],
                currentView,
                handleNavigation,
                'bg-gray-900 border-l-4 border-rose-500 text-white',
                'text-gray-300 hover:bg-rose-900/40',
              )}
            </>
          )}

          {usuarioLogueado && (
            <>
              <div className="px-4 mt-6 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                General
              </div>
              {renderNavItems(
                generalPages,
                currentView,
                handleNavigation,
                'bg-gray-900 border-l-4 border-gray-500 text-white',
                'text-gray-300 hover:bg-gray-800',
              )}
            </>
          )}
        </nav>

        {usuarioLogueado && (
          <div className="p-4 border-t border-gray-800">
            <button
              onClick={handleLogout}
              className="w-full rounded-lg bg-red-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default Sidebar;
