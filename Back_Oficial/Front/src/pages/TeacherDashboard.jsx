import React from 'react';
import { cerrarSesion } from '../utils/localStorage';
import ContentManagementPanel from '../components/ContentManagementPanel';

const TeacherDashboard = ({ usuario, onNavigate, onLogout }) => {
  const handleCerrarSesion = () => {
    cerrarSesion();
    if (onLogout) onLogout();
    if (onNavigate) onNavigate('Inicio');
  };

  return (
    <div className="max-w-7xl mx-auto fade-in space-y-8">
      <div className="bg-gradient-to-r from-[#6b2132] to-[#1f4f46] text-white p-8 rounded-2xl shadow-lg">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-amber-200">Moderador</p>
            <h1 className="text-4xl font-bold">Panel de moderación académica</h1>
            <p className="mt-2 text-sm text-white/80">
              {usuario?.nombre} {usuario?.apellido} puede mantener temas, videos y asignaciones
              publicados para los alumnos.
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

      <ContentManagementPanel roleLabel="Moderación" />
    </div>
  );
};

export default TeacherDashboard;
