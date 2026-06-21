import React, { useState } from 'react';

// Objeto maestro con todas las opciones de la interfaz de JFLAP (image_1152ab.jpeg)
const JFLAP_MODULES = [
  {
    id: 'finite-automaton',
    title: 'Finite Automaton',
    description: 'Diseño, simulación y conversión de Autómatas Finitos Deterministas (AFD) y No Deterministas (AFN). El pilar de la Unidad 1.',
    hasSubSections: true,
    subSections: [
      {
        title: '1. El Entorno del Editor',
        image: '/img/jflap/fa_editor.jpeg', // Aquí va la image_10cc7a.jpeg
        text: 'Al abrir el lienzo, verás la barra de herramientas superior. Usa el cursor para seleccionar, el ícono de la "q" para poner estados, y la flecha para trazar transiciones (puedes usar caracteres del alfabeto o dejarlo vacío para transiciones lambda).'
      },
      {
        title: '2. Configurar Estados',
        image: '/img/jflap/fa_context_menu.jpeg', // Aquí va la image_10cf23.jpeg
        text: 'Haz clic derecho sobre cualquier estado creado para desplegar su menú contextual. Desde aquí puedes marcarlo como "Initial" (estado de arranque) o "Final" (estado de aceptación, que le dará el doble círculo característico).'
      },
      {
        title: '3. Menús y Herramientas',
        text: 'La barra de menús superior te da el control total de las operaciones avanzadas del autómata:',
        isMenuGrid: true, // Lógica especial para acomodar tus 4 capturas de menús
        menus: [
          { name: 'File', image: '/img/jflap/menu_file.jpeg', desc: 'Guardar tus proyectos (.jff) o exportar como imagen.' }, // image_10cffb.jpeg
          { name: 'Input', image: '/img/jflap/menu_input.jpeg', desc: 'Simular cadenas paso a paso (Step) o de forma masiva.' }, // image_10cfc5.jpeg
          { name: 'Test', image: '/img/jflap/menu_test.jpeg', desc: 'Validar equivalencias o resaltar no-determinismo.' }, // image_10cfbe.jpeg
          { name: 'Convert', image: '/img/jflap/menu_convert.jpeg', desc: 'Convertir un AFN a AFD o minimizar estados al instante.' } // image_10cf9d.jpeg
        ]
      },
      {
        title: '4. Pruebas Masivas (Multiple Run)',
        image: '/img/jflap/fa_multiple_run.jpeg', // Aquí va la image_10cba5.jpeg
        text: 'En el menú Input > Multiple Run puedes meter una lista completa de cadenas para que JFLAP las evalúe en chinga. Te mostrará una tabla interactiva marcando en verde las aceptadas (Accept) y en rojo las rechazadas (Reject).'
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/Pzl41Iw4T04',
    steps: []
  },
  {
    id: 'mealy-machine',
    title: 'Mealy Machine',
    description: 'Modelado de Máquinas de Mealy, donde las salidas se determinan por el estado actual y la entrada actual.',
    image: '/img/jflap/mealy_machine.jpeg',
    videoUrl: null,
    steps: [
      'Selecciona "Mealy Machine" en el menú principal.',
      'Crea los estados y al trazar las transiciones, especifica tanto el símbolo de entrada como el de salida (ej. a ; 0).'
    ]
  },
  {
    id: 'moore-machine',
    title: 'Moore Machine',
    description: 'Modelado de Máquinas de Moore, donde las salidas se asocian únicamente al estado actual.',
    image: '/img/jflap/moore_machine.jpeg',
    videoUrl: null,
    steps: [
      'Selecciona "Moore Machine" para abrir el lienzo.',
      'Al crear o editar un estado, haz clic derecho para asignarle su respectivo valor de salida dentro del nodo.'
    ]
  },
  {
    id: 'pushdown-automaton',
    title: 'Pushdown Automaton',
    description: 'Autómatas con Pila (AP) para el reconocimiento de Lenguajes Libres de Contexto.',
    image: '/img/jflap/pushdown.jpeg',
    videoUrl: null,
    steps: [
      'Haz clic en "Pushdown Automaton".',
      'Configura las transiciones especificando: símbolo leído, símbolo del tope de la pila que se saca (pop), y símbolo que se mete (push).'
    ]
  },
  {
    id: 'turing-machine',
    title: 'Turing Machine',
    description: 'Máquinas de Turing estándar de una sola cinta para el análisis de lenguajes computables.',
    image: '/img/jflap/turing_machine.jpeg',
    videoUrl: null,
    steps: [
      'Selecciona "Turing Machine".',
      'Define transiciones con la estructura: Leer símbolo / Escribir símbolo / Dirección de movimiento (R para derecha, L para izquierda, S para detenerse).'
    ]
  },
  {
    id: 'multi-tape-turing-machine',
    title: 'Multi-Tape Turing Machine',
    description: 'Variante avanzada de la Máquina de Turing que utiliza múltiples cintas independientes para optimizar procesos.',
    image: '/img/jflap/multitape_turing.jpeg',
    videoUrl: null,
    steps: [
      'Selecciona "Multi-Tape Turing Machine".',
      'Al iniciar, el programa te preguntará el número de cintas que deseas configurar para tu diseño.'
    ]
  },
  {
    id: 'turing-machine-building-blocks',
    title: 'Turing Machine With Building Blocks',
    description: 'Diseño modular de Máquinas de Turing utilizando bloques preconstruidos o subrutinas complejas.',
    image: '/img/jflap/building_blocks.jpeg',
    videoUrl: null,
    steps: [
      'Selecciona la opción con bloques de construcción.',
      'Importa diagramas previos como sub-máquinas para estructurar un sistema jerárquico.'
    ]
  },
  {
    id: 'grammar',
    title: 'Grammar',
    description: 'Definición, análisis y parsing de Gramáticas Regulares y Libres de Contexto.',
    image: '/img/jflap/grammar.jpeg',
    videoUrl: null,
    steps: [
      'Selecciona "Grammar".',
      'Escribe tus reglas de producción utilizando variables en mayúsculas (ej. S -> aA) y terminales en minúsculas.'
    ]
  },
  {
    id: 'l-system',
    title: 'L-System',
    description: 'Sistemas de Lindenmayer matemáticos para gráficos fractales y simulación del crecimiento de plantas.',
    image: '/img/jflap/l_system.jpeg',
    videoUrl: null,
    steps: [
      'Selecciona "L-System".',
      'Configura el axioma inicial, los parámetros de ángulo y las reglas de sustitución para renderizar la estructura geométrica.'
    ]
  },
  {
    id: 'regular-expression',
    title: 'Regular Expression',
    description: 'Conversión interactiva de Expresiones Regulares (ER) a Autómatas Finitos y viceversa.',
    image: '/img/jflap/regex.jpeg',
    videoUrl: null,
    steps: [
      'Selecciona "Regular Expression".',
      'Escribe la expresión utilizando operadores estándar (+ para unión, * para cerradura de Kleene) y genera el autómata paso a paso.'
    ]
  },
  {
    id: 'regular-pumping-lemma',
    title: 'Regular Pumping Lemma',
    description: 'Herramienta interactiva tipo juego para aplicar el Lema del Bombeo en lenguajes regulares.',
    image: '/img/jflap/regular_pumping.jpeg',
    videoUrl: null,
    steps: [
      'Selecciona "Regular Pumping Lemma".',
      'Elige si deseas jugar contra la computadora o modelar tu propio caso para demostrar la no-regularidad de un lenguaje.'
    ]
  },
  {
    id: 'context-free-pumping-lemma',
    title: 'Context-Free Pumping Lemma',
    description: 'Aplicación del Lema del Bombeo para demostrar que un lenguaje específico no es Libre de Contexto.',
    image: '/img/jflap/context_free_pumping.jpeg',
    videoUrl: null,
    steps: [
      'Selecciona la última opción de la lista.',
      'Sigue las particiones de la cadena (u, v, w, x, y) y rompe las condiciones del lema para completar la demostración.'
    ]
  }
];

const JflapTutorialPage = ({ onNavigate }) => {
  const [so, setSo] = useState('windows');
  const [activeModule, setActiveModule] = useState(JFLAP_MODULES[0]);

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-12">
      {/* Botón de regreso */}
      <button 
        onClick={() => onNavigate('Teoría de la Computación.')} 
        className="flex items-center text-gray-500 hover:text-indigo-600 transition-all font-medium"
      >
        <span className="mr-2">←</span> Volver al curso
      </button>
      
      {/* Header General */}
      <div className="border-b pb-6">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Centro de aprendizaje JFLAP</h1>
        <p className="text-gray-600 text-lg">Descarga, instalación y manual de uso interactivo para estudiantes.</p>
      </div>

      {/* SECCIÓN 1: INSTALACIÓN Y CONFIGURACIÓN */}
      <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
          1. Descarga e Instalación
        </h2>
        
        {/* Selector de SO */}
        <div className="flex bg-gray-100 p-1 rounded-xl mb-6 w-full md:w-64">
          <button 
            onClick={() => setSo('windows')}
            className={`flex-1 py-2 rounded-lg font-bold transition-all ${so === 'windows' ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Windows
          </button>
          <button 
            onClick={() => setSo('linux')}
            className={`flex-1 py-2 rounded-lg font-bold transition-all ${so === 'linux' ? 'bg-white text-purple-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Linux
          </button>
        </div>

        {/* Pasos de Instalación */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 space-y-4 text-gray-700 mb-8">
          <p className="font-semibold text-lg text-gray-800">
            {so === 'windows' ? 'Pasos para Windows:' : 'Pasos para Linux:'}
          </p>
          
          <div className="space-y-3 pl-2">
            <p>
              <span className="font-bold text-indigo-600 mr-2">Paso 1:</span> Descarga el archivo ejecutable de Java: 
              <a href="/JFLAP7.1.jar" download className="ml-2 font-semibold text-indigo-600 hover:underline inline-flex items-center gap-1">
                Descargar JFLAP7.1.jar
              </a>
            </p>
            
            <p className="text-xs text-gray-400 italic pl-14">
              ¿No inicia la descarga automática? Usa la 
              <a href="https://www.jflap.org/jflaptmp/" target="_blank" rel="noreferrer" className="ml-1 underline text-gray-500 hover:text-indigo-600">
                opción alternativa desde el sitio oficial
              </a>.
            </p>

            {so === 'windows' ? (
              <p><span className="font-bold text-indigo-600 mr-2">Paso 2:</span> Asegúrate de tener instalado Java (JDK 17 o superior) en tu sistema y ejecuta el archivo haciendo doble clic sobre el <code className="bg-gray-200 px-1 rounded font-mono">.jar</code> descargado.</p>
            ) : (
              <div className="space-y-2">
                <p><span className="font-bold text-purple-600 mr-2">Paso 2:</span> Abre una terminal en la carpeta de descargas o en el origen donde tengas el archivo.</p>
                <p><span className="font-bold text-purple-600 mr-2">Paso 3:</span> Otorga permisos o levanta la aplicación corriendo el siguiente comando de consola:</p>
                <code className="block bg-gray-900 text-green-400 p-3 rounded-lg font-mono shadow-inner border border-gray-800">
                  java -jar JFLAP.jar
                </code>
              </div>
            )}
          </div>
        </div>

        {/* Subsección: Videos tutoriales de Java */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            🛠️ ¿Tienes problemas con Java? Mira estos tutoriales de apoyo:
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="font-medium text-gray-700 mb-2">Configuración en Windows</p>
              <div className="aspect-video rounded-lg overflow-hidden shadow-sm">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/Pzl41Iw4T04" 
                  title="Tutorial Java Windows" 
                  allowFullScreen
                />
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="font-medium text-gray-700 mb-2">Configuración en Linux</p>
              <div className="aspect-video rounded-lg overflow-hidden shadow-sm">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/QauitHvQZHA" 
                  title="Tutorial Java Linux" 
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: MANUAL INTERACTIVO WIKI */}
      <section className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-indigo-600 p-6 text-white">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            2. Guía Visual y Manual de Componentes
          </h2>
          <p className="text-indigo-100 text-sm mt-1">Selecciona cualquier opción de la barra lateral para ver su funcionamiento y videotutorial de ejemplo.</p>
        </div>

        <div className="flex flex-col md:flex-row min-h-[550px]">
          {/* Menú Lateral Izquierdo (Módulos exactos de la captura) */}
          <div className="w-full md:w-1/3 bg-gray-50 border-r border-gray-200 overflow-y-auto max-h-[600px] md:max-h-none">
            <div className="p-3 space-y-1">
              {JFLAP_MODULES.map((module) => (
                <button
                  key={module.id}
                  onClick={() => setActiveModule(module)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition-all flex items-center justify-between ${
                    activeModule.id === module.id 
                      ? 'bg-indigo-50 text-indigo-700 shadow-sm border-l-4 border-indigo-600 pl-3' 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {module.title}
                  {activeModule.id === module.id && <span className="text-indigo-600 text-xs">●</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Contenedor de Contenido Dinámico Derecho */}
            <div className="w-full md:w-2/3 p-6 md:p-8 space-y-8 overflow-y-auto">
            <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                Módulo JFLAP Activo
                </span>
                <h3 className="text-3xl font-extrabold text-gray-900 mt-2 mb-3">
                {activeModule.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                {activeModule.description}
                </p>
            </div>

            {/* SI EL MÓDULO TIENE SUBSECCIONES (Caso de Finite Automaton) */}
            {activeModule.hasSubSections ? (
                <div className="space-y-12">
                {activeModule.subSections.map((sub, idx) => (
                    <div key={idx} className="border-b pb-8 last:border-none">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{sub.title}</h4>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{sub.text}</p>
                    
                    {/* Si es el grid de menús, acomoda las 4 capturas chiquitas */}
                    {sub.isMenuGrid ? (
                        <div className="grid grid-cols-2 gap-4">
                        {sub.menus.map((m, mIdx) => (
                            <div key={mIdx} className="bg-gray-50 border p-3 rounded-xl flex flex-col items-center">
                            <p className="font-bold text-xs text-indigo-600 mb-2">Menú {m.name}</p>
                            <div className="bg-white border rounded p-2 h-32 flex items-center justify-center overflow-hidden mb-2 shadow-inner">
                                <img src={m.image} alt={m.name} className="max-h-full max-w-full object-contain" />
                            </div>
                            <p className="text-[11px] text-gray-500 text-center">{m.desc}</p>
                            </div>
                        ))}
                        </div>
                    ) : (
                        /* Pantallazo normal de la sección */
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex justify-center shadow-inner max-w-xl mx-auto">
                        <img src={sub.image} alt={sub.title} className="max-h-64 object-contain rounded-lg" />
                        </div>
                    )}
                    </div>
                ))}
                </div>
            ) : (
                /* CASO POR DEFECTO PARA LOS DEMÁS MÓDULOS SIMPLES */
                <>
                <div className="space-y-2">
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wide">Referencia Visual</h4>
                    <div className="border border-dashed border-gray-300 bg-gray-50 rounded-xl p-4 flex justify-center min-h-[220px]">
                    <img src={activeModule.image} alt={activeModule.title} className="max-h-64 object-contain rounded-lg" />
                    </div>
                </div>

                <div className="space-y-3">
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wide">¿Cómo trabajar con este componente?</h4>
                    <ul className="space-y-2 pl-4 list-disc text-gray-700 text-sm">
                    {activeModule.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                    </ul>
                </div>
                </>
            )}

            {/* Videotutorial del Profesor abajo al final */}
            <div className="border-t pt-6 space-y-3">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wide">Ejemplo Práctico en Video</h4>
                {activeModule.videoUrl ? (
                <div className="aspect-video rounded-xl overflow-hidden shadow-md max-w-lg mx-auto">
                    <iframe className="w-full h-full" src={activeModule.videoUrl} title={`Tutorial ${activeModule.title}`} allowFullScreen />
                </div>
                ) : (
                <div className="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3 rounded-xl text-sm flex items-center gap-2 max-w-md">
                    <span>🎬</span>
                    <p><strong>Video de ejemplo en desarrollo.</strong> Próximamente se subirá un ejercicio resuelto.</p>
                </div>
                )}
            </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default JflapTutorialPage;