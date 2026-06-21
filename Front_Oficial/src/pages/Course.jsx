// pages/Course.jsx
import React, { useState, useEffect } from 'react';
import UnidadPage from './UnidadPage';
import { COURSE_TO_TIPO_MATERIA, fetchUnidadesPorMateria } from '../services/contenidoApi';

const asset = (fileName) => `/${encodeURI(fileName)}`;

const Course = ({ courseName, currentPeriod, onPeriodChange, onNavigate }) => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [leccionActiva, setLeccionActiva] = useState(null);
  const [unidades, setUnidades] = useState([]);
  const [loadingUnidades, setLoadingUnidades] = useState(false);
  const [errorUnidades, setErrorUnidades] = useState('');

  useEffect(() => {
    const tipoMateria = COURSE_TO_TIPO_MATERIA[courseName];

    if (!tipoMateria) {
      setUnidades([]);
      setLoadingUnidades(false);
      setErrorUnidades('');
      return;
    }

    let cancelled = false;

    const cargarUnidades = async () => {
      setLoadingUnidades(true);
      setErrorUnidades('');

      try {
        const unidadesApi = await fetchUnidadesPorMateria(tipoMateria);

        if (!cancelled) {
          setUnidades(unidadesApi);
        }
      } catch (error) {
        if (!cancelled) {
          setUnidades([]);
          setErrorUnidades(
            error instanceof Error
              ? error.message
              : 'No fue posible cargar el guión didáctico.',
          );
        }
      } finally {
        if (!cancelled) {
          setLoadingUnidades(false);
        }
      }
    };

    cargarUnidades();
    setLeccionActiva(null);

    return () => {
      cancelled = true;
    };
  }, [courseName]);

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [currentPeriod]);

  useEffect(() => {
    if (!leccionActiva && window.lucide) {
      setTimeout(() => {
        window.lucide.createIcons();
      }, 50);
    }
  }, [leccionActiva]);

  useEffect(() => {
    if (window.lucide) {
      setTimeout(() => {
        window.lucide.createIcons();
      }, 50);
    }
  }, [unidades, loadingUnidades, errorUnidades]);

  const contenidosOrdenados = unidades.flatMap(({ contenidos }) => contenidos);
  const indiceLeccionActiva = contenidosOrdenados.findIndex(
    (contenido) => contenido.contenido_id === leccionActiva?.contenido_id,
  );
  const siguienteLeccion =
    indiceLeccionActiva >= 0 ? contenidosOrdenados[indiceLeccionActiva + 1] : null;

  if (leccionActiva) {
    return (
      <UnidadPage
        contenido={leccionActiva}
        onNextSection={
          siguienteLeccion
            ? () => {
                setLeccionActiva(siguienteLeccion);
                setTimeout(() => {
                  const contentArea = document.getElementById('contentArea');
                  if (contentArea) {
                    contentArea.scrollTop = 0;
                  }
                }, 50);
              }
            : null
        }
        nextSectionLabel={siguienteLeccion?.titulo || ''}
        onBack={() => {
          setLeccionActiva(null);
          setTimeout(() => {
            const contentArea = document.getElementById('contentArea');
            if (contentArea) {
              contentArea.scrollTop = 0;
            }
          }, 50);
        }}
      />
    );
  }

  // Datos simulados para los documentos
  const documents = {
    contrato: asset('ContratoDidáctico.docx'),
    introEvaluacion: 'https://www.youtube.com/embed/dummy',
    rubricas: [
      { titulo: 'Lista de cotejo', file: asset('______LISTA_COTEJO_1P_Marzo2026.docx') },
      { titulo: 'Hoja de respuestas', file: asset('HojaRespuestas_ParaLlenar.pdf') },
      { titulo: 'Puntos básicos para un ensayo', file: asset('Puntos basicos para un ENSAYO.pdf') },
      { titulo: 'Apuntes TLC 2023', file: asset('APUNTES_TLC_2023.pdf') },
      { titulo: 'Cuestionario 14 nov', file: asset('cuestionario14-nov.docx') },
    ],
    planeacion: asset('Planeacion_Didactica.doc'),
    guionDidactico: asset('Guion Didactico.docx'),
    guias: {
      ejercicios: asset('GUIAyEjerciciosExposiciones_2026-2.docx'),
      preguntasConceptos: asset('Preguntas-compiladores.pdf'),
      preguntasGLC: asset('Cuestionario_GLC.docx'),
      evaluacionGLC: asset('GLC_importancia - Cuestionario.doc'),
      practicas: [
        { titulo: 'MS-DOS / JCL', file: asset('Practica1 - MS_DOS.pdf') },
        { titulo: 'AWK PDF', file: asset('Practica2_AWK.pdf') },
        { titulo: 'AWK Word', file: asset('Practica_2_awk_2022.docx') },
        { titulo: 'AWK práctica 3', file: asset('Practica3_AWK.pdf') },
      ],
    },
    reposicion: asset('cuestionario14-nov.docx'),
    proyectosAnteriores: [
      { titulo: 'Libro de Teoría de la Computación', autor: 'Material de apoyo', año: 2023, file: asset('libro_TeoriaComputacion.pdf') },
      { titulo: 'Prontuario AWK', autor: 'Material de apoyo', año: 2023, file: asset('prontuario_AWK.txt') },
      { titulo: 'Código fuente AWK', autor: 'Material de apoyo', año: 2023, file: asset('sourceAWK.txt') },
    ],
    adicionales: [
      { titulo: 'Guión Didáctico', file: asset('Guion Didactico.docx') },
      { titulo: 'Práctica 1 MS-DOS (Word)', file: asset('Practica_1_MS-DOS.docx') },
      { titulo: 'LANGUAGE.TXT', file: asset('LANGUAGE.TXT') },
      { titulo: 'Qué hace - Código en AWK', file: asset('Qué hace - Código en AWK') },
    ],
  };

  const handleProtectedDownload = () => {
    setShowPasswordModal(true);
  };

  const downloadFile = (file) => {
    const link = document.createElement('a');
    link.href = file;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-6xl mx-auto fade-in">
      {/* Navegación de Periodos */}
      <div className="flex border-b border-gray-200 mb-8">
        {[1, 2, 3].map((period) => (
          <button
            key={period}
            onClick={() => onPeriodChange(period)}
            className={`
              px-6 py-3 text-sm font-medium
              ${currentPeriod === period
                ? 'border-b-2 border-[#6b2132] text-[#6b2132]'
                : 'text-gray-500 hover:text-gray-700'
              }
            `}
          >
            Periodo {period}
          </button>
        ))}
      </div>

      {/* Banner con foto de UPIICSA */}
      <div
        className="relative rounded-xl overflow-hidden mb-8 h-48 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')" }}
      >
        <div className="absolute inset-0 bg-green-800 bg-opacity-40 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white text-center drop-shadow-lg">
            Teoría de la Computación y Compiladores
          </h2>
        </div>
      </div>

      {/* Grid principal de documentos (fondo verde en los enlaces) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Contrato Didáctico */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition">
          <div className="bg-green-600 h-2"></div>
          <div className="p-5">
            <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-2">
              <i data-lucide="file-text" className="text-green-600 w-5 h-5"></i>
              Contrato Didáctico
            </h3>
            <p className="text-xs text-gray-500 mb-3">
              Documento Word para llenar con SI/NO, firmar y entregar.
            </p>
            <a
              href={documents.contrato}
              download
              className="inline-flex items-center gap-2 bg-green-100 hover:bg-green-200 text-green-800 text-sm px-4 py-2 rounded-lg w-full justify-center"
            >
              <i data-lucide="download" className="w-4 h-4"></i>
              Descargar Contrato
            </a>
          </div>
        </div>

        {/* Introducción a las 5 opciones de evaluación */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition">
          <div className="bg-green-600 h-2"></div>
          <div className="p-5">
            <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-2">
              <i data-lucide="video" className="text-green-600 w-5 h-5"></i>
              5 Opciones de Evaluación
            </h3>
            <p className="text-xs text-gray-500 mb-3">
              Auto-evaluación, Co-evaluación, Evaluación Continua, Sumativa, Hetero-evaluación.
            </p>
            <div className="aspect-video bg-gray-100 rounded mb-3">
              <iframe
                src="https://www.youtube.com/embed/pv8lCZRJdHE?si=SvC0PygZ2hZ-ip3D"
                className="w-full h-full rounded"
                title="Video introductorio"
                allowFullScreen
              ></iframe>
            </div>
            <button
              type="button"
              className="text-sm text-green-700 hover:underline flex items-center gap-1"
            >
              <i data-lucide="chevron-right" className="w-4 h-4"></i>
              Ver más detalles
            </button>
          </div>
        </div>

        {/* Rúbricas de AA */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition">
          <div className="bg-green-600 h-2"></div>
          <div className="p-5">
            <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-2">
              <i data-lucide="clipboard-list" className="text-green-600 w-5 h-5"></i>
              Rúbricas de AA
            </h3>
            <p className="text-xs text-gray-500 mb-3">
              Opciones de evaluación con rúbricas descargables.
            </p>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {documents.rubricas.map((rubrica) => (
                <div key={rubrica.titulo} className="flex items-center justify-between bg-green-50 p-2 rounded">
                  <span className="text-sm">{rubrica.titulo}</span>
                  <a href={rubrica.file} download className="text-green-700 hover:text-green-900">
                    <i data-lucide="download" className="w-4 h-4"></i>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Planeación Didáctica */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition">
          <div className="bg-green-600 h-2"></div>
          <div className="p-5">
            <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-2">
              <i data-lucide="calendar" className="text-green-600 w-5 h-5"></i>
              Planeación Didáctica
            </h3>
            <p className="text-xs text-gray-500 mb-3">
              Periodo {currentPeriod} - Formato Word ajustable.
            </p>
            <a
              href={documents.planeacion}
              download
              className="inline-flex items-center gap-2 bg-green-100 hover:bg-green-200 text-green-800 text-sm px-4 py-2 rounded-lg w-full justify-center"
            >
              <i data-lucide="download" className="w-4 h-4"></i>
              Descargar Planeación
            </a>
          </div>
        </div>

        {/* Tutorial JFLAP */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition">
          <div className="bg-blue-600 h-2"></div>
          <div className="p-5">
            <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-2">
              <i data-lucide="wrench" className="text-blue-600 w-5 h-5"></i>
              Software JFLAP
            </h3>
            <p className="text-xs text-gray-500 mb-3">
              Tutorial de instalación para Windows y Linux.
            </p>
            <button
              onClick={() => onNavigate('Tutorial JFLAP')}
              className="inline-flex items-center gap-2 bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm px-4 py-2 rounded-lg w-full justify-center"
            >
              <i data-lucide="external-link" className="w-4 h-4"></i>
              Ir al Tutorial
            </button>
          </div>
        </div>

        {/* Guías de Estudio */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition">
          <div className="bg-green-600 h-2"></div>
          <div className="p-5">
            <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-2">
              <i data-lucide="graduation-cap" className="text-green-600 w-5 h-5"></i>
              Guías de Estudio
            </h3>
            <p className="text-xs text-gray-500 mb-3">
              Ejercicios, preguntas y prácticas.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center justify-between">
                Ejercicios por lista
                <a href={documents.guias.ejercicios} download className="text-green-700">📥</a>
              </li>
              <li className="flex items-center justify-between">
                Preguntas conceptos
                <a href={documents.guias.preguntasConceptos} download className="text-green-700">📥</a>
              </li>
              <li className="flex items-center justify-between">
                Preguntas GLC
                <a href={documents.guias.preguntasGLC} download className="text-green-700">📥</a>
              </li>
              <li className="flex items-center justify-between">
                Evaluación GLC
                <a href={documents.guias.evaluacionGLC} download className="text-green-700">📥</a>
              </li>
            </ul>
            <details className="mt-3">
              <summary className="text-sm text-green-700 cursor-pointer">Prácticas (MS-DOS y AWK)</summary>
              <div className="mt-2 space-y-2 pl-2">
                {documents.guias.practicas.map((practica) => (
                  <div key={practica.titulo} className="flex justify-between">
                    {practica.titulo}
                    <a href={practica.file} download className="text-green-700">📥</a>
                  </div>
                ))}
              </div>
            </details>
          </div>
        </div>

        {/* Evaluaciones de Reposición */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition">
          <div className="bg-green-600 h-2"></div>
          <div className="p-5">
            <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-2">
              <i data-lucide="lock" className="text-green-600 w-5 h-5"></i>
              Evaluaciones de Reposición
            </h3>
            <p className="text-xs text-gray-500 mb-3">
              Protegido con contraseña (solicitar al profesor).
            </p>
            <button
              onClick={handleProtectedDownload}
              className="inline-flex items-center gap-2 bg-green-100 hover:bg-green-200 text-green-800 text-sm px-4 py-2 rounded-lg w-full justify-center"
            >
              <i data-lucide="key" className="w-4 h-4"></i>
              Solicitar acceso
            </button>
          </div>
        </div>

        {/* Proyectos Excelentes Anteriores */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition">
          <div className="bg-green-600 h-2"></div>
          <div className="p-5">
            <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-2">
              <i data-lucide="award" className="text-green-600 w-5 h-5"></i>
              Proyectos Excelentes
            </h3>
            <p className="text-xs text-gray-500 mb-3">
              Ejemplos de ciclos anteriores.
            </p>
            <div className="space-y-3">
              {documents.proyectosAnteriores.map((proyecto, idx) => (
                <div key={idx} className="border-b pb-2 last:border-0">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">{proyecto.titulo}</p>
                      <p className="text-xs text-gray-500">{proyecto.autor} ({proyecto.año})</p>
                    </div>
                    <a href={proyecto.file} download className="text-green-700">📥</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition">
          <div className="bg-green-600 h-2"></div>
          <div className="p-5">
            <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-2">
              <i data-lucide="folder-open" className="text-green-600 w-5 h-5"></i>
              Material adicional
            </h3>
            <p className="text-xs text-gray-500 mb-3">
              Archivos extra disponibles en la carpeta pública.
            </p>
            <div className="space-y-2">
              {documents.adicionales.map((archivo) => (
                <div key={archivo.titulo} className="flex items-center justify-between bg-green-50 p-2 rounded">
                  <span className="text-sm">{archivo.titulo}</span>
                  <a href={archivo.file} download className="text-green-700">📥</a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tesis Doctoral */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition">
          <div className="bg-green-600 h-2"></div>
          <div className="p-5">
            <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-2">
              <i data-lucide="file-text" className="text-green-600 w-5 h-5"></i>
              Tesis Doctoral
            </h3>
            <p className="text-xs text-gray-500 mb-3">
              Diseño Instruccional para Teoría de la Computación y Compiladores (en proceso).
            </p>
            <a
              href="/Tesis"
              className="inline-flex items-center gap-2 bg-green-100 hover:bg-green-200 text-green-800 text-sm px-4 py-2 rounded-lg w-full justify-center"
            >
              <i data-lucide="external-link" className="w-4 h-4"></i>
              Ver más
            </a>
          </div>
        </div>
      </div>
      {/* guion */}
      <>
        <div className="mt-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition">
            <div className="bg-green-600 h-2"></div>
            <div className="p-5">
              <div className="mb-2 flex items-center justify-between gap-3">
                <h3 className="font-bold text-gray-800 flex items-center gap-2">
                  <i data-lucide="book" className="text-green-600 w-5 h-5"></i>
                  Guión Didáctico
                </h3>
                <a
                  href={documents.guionDidactico}
                  download
                  className="inline-flex items-center gap-2 rounded-lg bg-green-100 px-3 py-2 text-sm text-green-800 hover:bg-green-200"
                >
                  <i data-lucide="download" className="w-4 h-4"></i>
                  Descargar archivo
                </a>
              </div>

              {loadingUnidades && (
                <div className="rounded-lg border border-green-100 bg-green-50 px-4 py-3 text-sm text-green-800">
                  Cargando contenidos desde `Project-Site-Backend`...
                </div>
              )}

              {!loadingUnidades && errorUnidades && (
                <div className="rounded-lg border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {errorUnidades}
                </div>
              )}

              {!loadingUnidades && !errorUnidades && unidades.length === 0 && (
                <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-600">
                  No hay unidades publicadas para esta materia.
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {unidades.map(({ unidad, contenidos }) => (
                  <div key={unidad.unidad_id} className="bg-green-50 rounded-lg p-5 space-y-3">

                    <p className="text-sm font-bold text-green-800 border-b border-green-200 pb-2">
                      {unidad.nombre}
                    </p>

                    {contenidos.map((contenido) => (
                      <div key={contenido.contenido_id} className="flex items-start justify-between gap-3 py-1">
                        <span className="text-sm text-gray-700 leading-snug">
                          {contenido.titulo}
                        </span>
                        <button
                          onClick={() => setLeccionActiva(contenido)}
                          className="text-green-700 hover:text-green-900 shrink-0"
                        >
                          <i data-lucide="arrow-big-right" className="w-4 h-4" />
                        </button>
                      </div>
                    ))}

                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </>

      {/* Modal para contraseña (simulado) */}
      {
        showPasswordModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl max-w-sm w-full">
              <h3 className="text-lg font-bold mb-4">Evaluaciones de Reposición</h3>
              <p className="text-sm text-gray-600 mb-4">
                Ingrese la contraseña proporcionada por el profesor:
              </p>
              <input
                type="password"
                className="w-full p-2 border rounded mb-4"
                placeholder="Contraseña"
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowPasswordModal(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => {
                    downloadFile(documents.reposicion);
                    setShowPasswordModal(false);
                  }}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Descargar
                </button>
              </div>
            </div>
          </div>

        )
      }
    </div >

  );
};

export default Course;
