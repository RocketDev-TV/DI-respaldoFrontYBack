// pages/Home.jsx
import React from 'react';

const Home = ({ onNavigate, usuarioLogueado }) => {
  React.useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <div className="max-w-5xl mx-auto fade-in">
      {/* Banner con foto de UPIICSA */}
      <div
        className="relative rounded-2xl overflow-hidden mb-8 h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#6b2132]/80 to-green-800/80 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Bienvenida al Portal de Aprendizaje</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Plataforma de Diseño Instruccional del IPN - UPIICSA<br />
              <span className="font-semibold">Teoría de la Computación y Compiladores</span>
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Video Introductorio */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
            <i data-lucide="video" className="text-[#6b2132]"></i>
            Introducción al Modelo Educativo (5 opciones de evaluación)
          </h3>
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/pv8lCZRJdHE?si=SvC0PygZ2hZ-ip3D" 
              className="w-full h-full"
              title="Video introductorio"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Auto-evaluación, Co-evaluación, Evaluación Continua, Sumativa y Hetero-evaluación.
          </p>
        </div>

        {/* Avisos Recientes */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="font-bold text-gray-700 mb-4">Avisos Recientes</h3>
          <ul className="space-y-4">
            <li className="border-l-4 border-yellow-400 pl-3 py-1">
              <p className="text-sm font-semibold">Entrega de Proyecto P1</p>
              <p className="text-xs text-gray-500">Vence: 25 Octubre</p>
            </li>
            <li className="border-l-4 border-blue-400 pl-3 py-1">
              <p className="text-sm font-semibold">Actualización Didacmáx</p>
              <p className="text-xs text-gray-500">Versión parche disponible</p>
            </li>
            <li className="border-l-4 border-green-400 pl-3 py-1">
              <p className="text-sm font-semibold">Contrato Didáctico</p>
              <p className="text-xs text-gray-500">Descargar y llenar para el lunes</p>
            </li>
          </ul>
          <button
            onClick={() => onNavigate(usuarioLogueado ? 'Teoría de la Computación.' : 'Iniciar Sesión')}
            className="mt-4 w-full bg-[#6b2132] text-white py-2 rounded-lg text-sm hover:bg-opacity-90 transition"
          >
            {usuarioLogueado ? 'Ir a la materia' : 'Inicia sesión para ver la materia'}
          </button>
        </div>
      </div>

      {/* Sección de foto adicional (UPIICSA) */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-center gap-6">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
          alt="UPIICSA"
          className="w-24 h-24 rounded-lg object-cover"
        />
        <div>
          <h4 className="font-bold text-gray-800">Nuestra amada UPIICSA</h4>
          <p className="text-sm text-gray-600">
            Unidad Profesional Interdisciplinaria de Ingeniería y Ciencias Sociales y Administrativas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
