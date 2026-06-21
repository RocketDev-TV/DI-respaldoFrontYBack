// pages/OtherCourse.jsx
import React, { useEffect } from 'react';

const OtherCourse = ({ courseName }) => {
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <div className="max-w-6xl mx-auto fade-in">
      {/* Banner con foto de UPIICSA */}
      <div
        className="relative rounded-xl overflow-hidden mb-8 h-48 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')" }}
      >
        <div className="absolute inset-0 bg-green-800 bg-opacity-40 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white text-center drop-shadow-lg">
            {courseName}
          </h2>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8 text-center">
        <i data-lucide="construction" className="w-16 h-16 text-gray-400 mx-auto mb-4"></i>
        <h3 className="text-2xl font-bold text-gray-700 mb-2">Contenido en preparación</h3>
        <p className="text-gray-500 max-w-md mx-auto">
          El material para este curso estará disponible próximamente. Por favor, consulta con tu profesor para más información.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-[#6b2132] text-white px-6 py-2 rounded-lg text-sm hover:bg-opacity-90">
            Contactar al profesor
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

export default OtherCourse;