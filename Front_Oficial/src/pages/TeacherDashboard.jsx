import React, { useEffect } from 'react';
import { cerrarSesion } from '../utils/localStorage';
import ContentManagementPanel from '../components/ContentManagementPanel';

const TeacherDashboard = ({ usuario, onNavigate, onLogout }) => {
  const handleCerrarSesion = () => {
    cerrarSesion();
    if (onLogout) onLogout();
    if (onNavigate) onNavigate('Inicio');
  };

  // Efecto para inicializar los iconos de Lucide globales en la vista
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto fade-in space-y-8 p-4 md:p-0">
      <div className="bg-gradient-to-r from-[#6b2132] to-[#1f4f46] text-white p-6 md:p-8 rounded-2xl shadow-lg">
        {/* Contenedor responsivo idéntico al del alumno */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-amber-200 mb-1">Moderador</p>
            <h1 className="text-3xl md:text-4xl font-bold">Panel de moderación académica</h1>
            <p className="mt-2 text-sm text-white/80">
              {usuario?.nombre} {usuario?.apellido} puede mantener temas, videos y asignaciones
              publicados para los alumnos.
            </p>
          </div>
          
          {/* Botonera responsiva idéntica al dashboard de alumno */}
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

      <ContentManagementPanel roleLabel="Moderación" />
    </div>
  );
};

export default TeacherDashboard;