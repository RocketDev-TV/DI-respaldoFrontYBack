// pages/GenericPage.jsx
import React from 'react';

const asset = (fileName) => `/${encodeURI(fileName)}`;

const GenericPage = ({ pageName }) => {
  // Contenido específico para cada página
  const renderContent = () => {
    if (pageName === 'Sobre Mi') {
      return (
        <div className="space-y-6">
          <div className="flex items-center gap-6">
            <img 
              src="https://ui-avatars.com/api/?name=Sara+Mendez&size=128&background=6b2132&color=fff" 
              alt="Sara Méndez García"
              className="w-32 h-32 rounded-full border-4 border-[#6b2132]"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Sara Méndez García</h3>
              <p className="text-gray-600">Profesor de carrera, tiempo completo del IPN en UPIICSA desde 1991.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-bold text-[#6b2132] mb-2">Formación Académica</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Licenciatura en Ciencias de la Informática (1979-1983) Cédula: 1682351</li>
                <li>Candidato a Maestría en Ciencias (Informática) IPN-SEPI-UPIICSA (2000-2005)</li>
                <li>Maestría en Educación con mención honorífica (2020-2023) Cédula: 13292903</li>
                <li>Doctorado en Metodología de las ciencias del aprendizaje (dictamen favorable, cédula en trámite)</li>
                <li>Doctorado en Educación con tesis: "Diseño instruccional para Teoría de la Computación y Compiladores"</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-bold text-[#6b2132] mb-2">Experiencia Laboral</h4>
              <p className="text-sm">1975-2000: Auxiliar contable, contador de costos, programación, analista de sistemas, líder de proyectos en bancos, aseguradoras, afianzadoras, Sistemas Televisa, etc.</p>
            </div>
          </div>

          <p className="text-sm text-gray-500 italic">
            Semblanza discreta conforme a lo solicitado en el diseño instruccional.
          </p>
        </div>
      );
    }

    if (pageName === 'Tesis') {
      return (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-[#6b2132]">Diseño Instruccional para Teoría de la Computación y Compiladores</h3>
          <p className="text-gray-700">
            Tesis doctoral presentada por Sara Méndez García. En proceso de terminación.
          </p>
          <div className="bg-gray-100 p-8 rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center">
            <i data-lucide="file-text" className="w-16 h-16 text-gray-400 mb-4"></i>
            <p className="text-gray-500 text-center">
              El documento completo estará disponible próximamente.<br />
              Material disponible:
              <a href={asset('libro_TeoriaComputacion.pdf')} download className="text-blue-600 hover:underline ml-1">Descargar referencia</a>
            </p>
          </div>
        </div>
      );
    }

    // Para otras páginas, mantener el placeholder genérico
    return (
      <>
        <h2 className="text-2xl font-bold mb-4 text-[#6b2132]">{pageName}</h2>
        <p className="text-gray-600">
          El contenido de esta sección ({pageName}) es editable y se actualizará según 
          la información proporcionada por la profesora.
        </p>
        <div className="h-64 bg-gray-100 rounded mt-6 flex items-center justify-center border-2 border-dashed border-gray-300">
          <span className="text-gray-400">
            Espacio para contenido dinámico / PDF Viewer / Imágenes
          </span>
        </div>
      </>
    );
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow fade-in">
      {renderContent()}
    </div>
  );
};

export default GenericPage;
