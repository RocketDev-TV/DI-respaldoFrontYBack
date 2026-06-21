import React, { useState } from 'react';

// Objeto maestro con todas las opciones de la interfaz de JFLAP
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
        image: '/img/jflap/fa_context_menu.jpeg', 
        text: 'Haz clic derecho sobre cualquier estado creado para desplegar su menú contextual. Desde aquí puedes marcarlo como "Initial" (estado de arranque) o "Final" (estado de aceptación, que le dará el doble círculo característico).'
      },
      {
        title: '3. Menús y Herramientas',
        text: 'La barra de menús superior te da el control total de las operaciones avanzadas del autómata:',
        isMenuGrid: true, 
        menus: [
          { name: 'File', image: '/img/jflap/menu_file.jpeg', desc: 'Guardar tus proyectos (.jff) o exportar como imagen.' }, 
          { name: 'Input', image: '/img/jflap/menu_input.jpeg', desc: 'Simular cadenas paso a paso (Step) o de forma masiva.' }, 
          { name: 'Test', image: '/img/jflap/menu_test.jpeg', desc: 'Validar equivalencias o resaltar no-determinismo.' }, 
          { name: 'Convert', image: '/img/jflap/menu_convert.jpeg', desc: 'Convertir un AFN a AFD o minimizar estados al instante.' } 
        ]
      },
      {
        title: '4. Pruebas Masivas (Multiple Run)',
        image: '/img/jflap/fa_multiple_run.jpeg', 
        text: 'En el menú Input > Multiple Run puedes meter una lista completa de cadenas para que JFLAP las evalúe en chinga. Te mostrará una tabla interactiva marcando en verde las aceptadas (Accept) y en rojo las rechazadas (Reject).'
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/AxiEs_iMJb0',
    steps: []
  },
  {
    id: 'mealy-machine',
    title: 'Mealy Machine',
    description: 'Modelado de Máquinas de Mealy, donde las salidas se determinan por la transición (el estado actual más la entrada recibida).',
    hasSubSections: true,
    subSections: [
      {
        title: 'Conceptos Clave de la Máquina de Mealy',
        text: 'A diferencia de los Autómatas Finitos tradicionales, la Máquina de Mealy no posee un "Estado Final" o de aceptación, ya que su propósito no es aceptar o rechazar cadenas, sino generar una salida continua.\n\n• Salida en Transiciones: El valor de salida se asocia directamente a la transición entre estados, no al estado en sí.\n• Estructura de transición: Se define mediante la sintaxis "Entrada ; Salida" (Ej. si el input es 1, el output generado puede ser 0).'
      },
      {
        title: 'Creación y Configuración en JFLAP',
        text: 'Al trazar las transiciones entre estados, aparecerán dos recuadros de texto para cada flecha que dibujes:',
        isTable: true,
        tableHeaders: ['Parámetro de Transición', 'Descripción en JFLAP'],
        tableRows: [
          ['Input (Entrada)', 'El símbolo o carácter que el autómata lee de la cadena.'],
          ['Output (Salida)', 'El carácter que el autómata generará o imprimirá al recorrer ese camino.']
        ]
      },
      {
        title: 'Simulación (Multiple Run) y Análisis',
        text: 'Para comprobar el funcionamiento, ve al menú Input > Multiple Run y evalúa tus secuencias:\n\n• Si ingresas una cadena, JFLAP te mostrará el string de salida generado paso a paso.\n• Interrupción de Lectura: Si hay un quiebre en la cadena (es decir, el autómata lee un símbolo para el cual no has configurado una transición), el proceso se detiene y solo imprime la salida hasta donde logró procesar.\n• Herramientas Extra: Si tu diseño es ambiguo, utiliza "Test > Highlight Nondeterminism" para ubicar gráficamente dónde están chocando tus transiciones.'
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/GEWqEn0MQ40',
    steps: []
  },
  {
    id: 'moore-machine',
    title: 'Moore Machine',
    description: 'Modelado de Máquinas de Moore, donde las salidas generadas se asocian de forma exclusiva al estado en el que se encuentra el autómata.',
    hasSubSections: true,
    subSections: [
      {
        title: 'Características de la Máquina de Moore',
        text: 'Al igual que la Máquina de Mealy, la Máquina de Moore carece de estados finales. Su rasgo distintivo es cómo maneja la generación de los caracteres de salida:\n\n• Salida en los Estados: El valor de salida está asociado única y exclusivamente al NODO (estado), no a las transiciones o flechas.\n• Comportamiento inicial: Al empezar a simular una cadena, la máquina imprimirá inmediatamente el valor de salida configurado en su estado inicial, incluso antes de leer el primer símbolo de entrada.'
      },
      {
        title: 'Configuración en el Lienzo',
        text: 'El proceso de dibujo tiene diferencias sutiles frente a la Máquina de Mealy:',
        isTable: true,
        tableHeaders: ['Acción en el Lienzo', 'Comportamiento en JFLAP'],
        tableRows: [
          ['Crear un Estado', 'JFLAP te pedirá de inmediato ingresar el "Output" que emitirá el autómata cada vez que llegue o pase por ese nodo.'],
          ['Trazar Transiciones', 'Solo te pedirá el símbolo de "Input". La flecha ya no llevará el punto y coma (;) característico de Mealy.']
        ]
      },
      {
        title: 'Restricciones de Simulación',
        text: 'Para realizar simulaciones masivas (Multiple Run), debes considerar una regla de oro estructural:\n\n• Tolerancia Cero al No-Determinismo: JFLAP no puede simular Máquinas de Moore si existe ambigüedad. Si intentas correr una cadena y hay múltiples caminos válidos (no-determinismo), el software cancelará la ejecución y arrojará el error: "Remueve el no-determinismo para la simulación".\n• Solución: Dirígete a "Test > Highlight Nondeterminism", ubica los estados conflictivos marcados en rojo, y elimina las flechas que causen la redundancia antes de volver a ejecutar.'
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/D-8g_ZNokPA',
    steps: []
  },
  {
    id: 'pushdown-automaton',
    title: 'Pushdown Automaton',
    description: 'Autómatas con Pila (AP) para el reconocimiento de Lenguajes Libres de Contexto mediante el uso de memoria auxiliar LIFO.',
    hasSubSections: true,
    subSections: [
      {
        title: 'Selección y Conceptos Básicos',
        text: 'El Autómata de Pila es un sistema que recibe una cadena de símbolos y determina si pertenece a un lenguaje libre de contexto utilizando una pila (stack) de memoria:\n\n• Inicio: Al iniciar en JFLAP, selecciona la opción "Pushdown Automaton" (generalmente bajo el formato "Multiple Character Input").\n• Estados Obligatorios: Todo autómata de pila debe contar rigurosamente con un estado inicial y al menos un estado final (de aceptación) para validar y aceptar las cadenas de entrada correctamente.'
      },
      {
        title: 'Configuración de Transiciones en la Pila',
        text: 'A diferencia de los autómatas finitos tradicionales, cada transición en el Pushdown Automaton requiere especificar tres parámetros fundamentales en los recuadros que aparecen:',
        isTable: true,
        tableHeaders: ['Parámetro de Transición', 'Función en JFLAP'],
        tableRows: [
          ['Read (Símbolo a Leer)', 'El carácter de la cadena de entrada que el autómata consumirá para avanzar.'],
          ['Pop (Desapilar)', 'El símbolo que se extraerá del tope de la pila. Si no deseas quitar nada, presiona TAB para dejarlo como Lambda (λ).'],
          ['Push (Apilar)', 'El símbolo que se insertará o guardará en el tope de la pila como resultado de esa transición (ej. "A").']
        ]
      },
      {
        title: 'Simulación y No-Determinismo',
        text: 'El comportamiento de la memoria (pila) es totalmente visible durante las simulaciones guiadas (Step by Step):\n\n• Símbolo Inicial de Pila: Al iniciar la ejecución de una cadena, notarás que la pila siempre tiene un símbolo predeterminado en el fondo (como la letra "Z"). Tus transiciones comenzarán a apilar o desapilar a partir de este punto base.\n• Ramificación (Diversificación): Al haber no-determinismo (ej. dos transiciones válidas para un mismo símbolo como una "B"), la simulación se dividirá en varios nodos. JFLAP probará y mostrará todos los caminos paralelos hasta que uno alcance el estado final y termine el proceso con éxito, o todos fallen.'
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/HLuZdo9UCe8',
    steps: []
  },
  {
    id: 'turing-machine',
    title: 'Turing Machine',
    description: 'Máquinas de Turing estándar de una sola cinta para el análisis de lenguajes computables y algoritmos.',
    hasSubSections: true,
    subSections: [
      {
        title: 'Estructura de las Transiciones',
        text: 'En una Máquina de Turing, las transiciones no solo cambian de estado, sino que controlan el cabezal de lectura/escritura de la cinta infinita. Cada transición requiere tres parámetros:',
        isTable: true,
        tableHeaders: ['Parámetro', 'Función en JFLAP'],
        tableRows: [
          ['Read (Leer)', 'El símbolo que el cabezal lee actualmente en la cinta.'],
          ['Write (Escribir)', 'El símbolo que el cabezal escribirá en esa misma celda, reemplazando al anterior.'],
          ['Move (Movimiento)', 'Hacia dónde se moverá el cabezal: R (Right/Derecha), L (Left/Izquierda) o S (Stay/Mantenerse).']
        ]
      },
      {
        title: 'Consideraciones de Diseño (Ej. Inversor de Bits)',
        text: 'Al construir algoritmos como un inversor de bits (cambiar 1 a 0 y 0 a 1):\n\n• Procesamiento continuo: Define transiciones en el mismo estado para procesar toda la cadena moviendo el cabezal hacia la derecha (R).\n• Fin de Cadena: Para detectar que la palabra ha terminado, crea una transición hacia el estado final dejando los campos Read y Write en blanco (vacíos), lo que indica la lectura de un espacio en blanco en la cinta.\n• Modos de Simulación: Utiliza "Step" para ver cómo el cabezal se mueve celda por celda, o "Fast Run" para obtener el string final instantáneamente.'
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/MgCGvRafzec',
    steps: []
  },
  {
    id: 'multi-tape-turing-machine',
    title: 'Multi-Tape Turing Machine',
    description: 'Variante avanzada de la Máquina de Turing que utiliza múltiples cintas independientes para optimizar procesos y realizar operaciones en paralelo.',
    hasSubSections: true,
    subSections: [
      {
        title: 'Configuración de Múltiples Cintas',
        text: 'Al crear un nuevo proyecto, JFLAP te preguntará cuántas cintas (tapes) deseas utilizar. Las cintas operan en paralelo, pero la lógica de las transiciones se vuelve más densa:\n\n• Parámetros por Cinta: Si configuras 2 cintas, cada transición te pedirá 6 valores en total (Leer, Escribir, Mover para la Cinta 1, y Leer, Escribir, Mover para la Cinta 2).\n• Procesos Paralelos: Permite realizar operaciones complejas, como invertir una cadena en la Cinta 1 mientras se copia el resultado intacto en la Cinta 2 al mismo tiempo.'
      },
      {
        title: 'Simulación y Finalización',
        text: 'El comportamiento multicinta requiere cuidar el avance de cada cabezal:',
        isTable: true,
        tableHeaders: ['Aspecto', 'Detalle en Ejecución'],
        tableRows: [
          ['Cintas Secundarias', 'Generalmente inician vacías. Tus transiciones deben configurarse para "Leer un espacio en blanco" en esas cintas al inicio.'],
          ['Sincronización', 'Puedes hacer que una cinta avance (R) mientras otra se queda detenida (S) esperando el siguiente proceso.'],
          ['Transición Final', 'Para terminar el algoritmo, ambas cintas deben realizar una transición de término (dejando Leer y Escribir en blanco y el movimiento en S).']
        ]
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/DCuH2xG4imk',
    steps: []
  },
  {
    id: 'turing-machine-building-blocks',
    title: 'Turing Machine With Building Blocks',
    description: 'Diseño modular de Máquinas de Turing utilizando bloques preconstruidos o subrutinas para crear sistemas jerárquicos complejos.',
    hasSubSections: true,
    subSections: [
      {
        title: 'Manejo de Bloques (Subrutinas)',
        text: 'Este entorno permite abstraer la complejidad utilizando máquinas de Turing previamente creadas como si fueran simples nodos:\n\n• Importar Máquinas: Puedes cargar archivos .jff completos y colocarlos como un bloque en el lienzo.\n• Edición Interna: Si haces clic derecho sobre un bloque y seleccionas "Edit", podrás ver y modificar la máquina de Turing que contiene en su interior.\n• Conexiones lógicas: Los bloques se conectan entre sí mediante transiciones que actúan como "condiciones de salida".'
      },
      {
        title: 'Ejecución y Enlace de Bloques',
        text: 'La comunicación entre bloques depende del estado final en el que queda la cinta después de ejecutar el bloque anterior:',
        isTable: true,
        tableHeaders: ['Acción', 'Descripción'],
        tableRows: [
          ['Condición de Enlace', 'La transición entre el Bloque A y el Bloque B requiere leer el símbolo exacto que el Bloque A dejó debajo del cabezal al terminar.'],
          ['Step by Building Block', 'Una opción especial de simulación que en lugar de avanzar símbolo por símbolo, ejecuta el bloque completo de un solo golpe, ideal para ver el macro-funcionamiento.']
        ]
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/NBX1ad65LCo',
    steps: []
  },
  {
    id: 'grammar',
    title: 'Grammar',
    description: 'Definición, análisis y parsing de Gramáticas (Regulares y Libres de Contexto) a partir de reglas de producción.',
    hasSubSections: true,
    subSections: [
      {
        title: 'Sintaxis y Reglas de Producción',
        text: 'El módulo permite escribir gramáticas ingresando la variable a la izquierda y su producción a la derecha:\n\n• Variables y Terminales: Utiliza letras mayúsculas para las Variables (ej. S) y minúsculas para los Terminales.\n• Uso de Lambda (Cadena Vacía): Para insertar el símbolo Lambda (λ) en tus producciones, simplemente sitúate en el recuadro y presiona la tecla TAB.\n• Identificación Automática: JFLAP analizará tu conjunto de reglas y te indicará matemáticamente si tu gramática es Regular o Libre de Contexto mediante el botón "Test".'
      },
      {
        title: 'Árboles de Derivación y Pruebas',
        text: 'Una vez definida la gramática, puedes comprobar qué cadenas genera:',
        isTable: true,
        tableHeaders: ['Herramienta', 'Aplicación en JFLAP'],
        tableRows: [
          ['Generación de Árbol', 'Al ingresar una cadena válida, el botón "Step" construirá un árbol de derivación (parse tree) mostrando el camino exacto desde la variable inicial hasta los terminales.'],
          ['Multiple Run', 'Permite ingresar un lote de cadenas para comprobar rápidamente cuáles cumplen con las reglas gramaticales (Accept en verde) y cuáles no (Reject en rojo).']
        ]
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/u6GDQg_t4Qg',
    steps: []
  },
  {
    id: 'l-system',
    title: 'L-System',
    description: 'Sistemas de Lindenmayer matemáticos para gráficos fractales y simulación del crecimiento de plantas.',
    hasSubSections: true,
    subSections: [
      {
        title: 'Función L-system (sistemas de Linden Mayer)',
        text: 'Al abrir la interfaz de L-System en JFLAP, la pantalla solicitará definir de forma rigurosa los siguientes cuatro componentes esenciales:\n\n• Axioma (Axiom): Es la cadena de caracteres inicial (la semilla). Representa el estado de la primera generación (Generación 0) antes de aplicar cualquier regla de transformación.\n• Reglas de Producción (Rewriting Rules): Fórmulas del tipo "X -> Y", donde cada ocurrencia del símbolo X se reemplaza simultáneamente por la cadena Y en la siguiente iteración.\n• Ángulo (Angle): Especifica en grados sexagesimales la magnitud del giro que realizará el cursor de dibujo cada vez que procese un símbolo de rotación (+ o -).\n• Distancia (Distance): Determina la longitud en píxeles de los segmentos de recta que se trazan en la pantalla con las instrucciones de movimiento.'
      },
      {
        title: 'El Alfabeto de Comandos Gráficos (Turtle Graphics)',
        text: 'Cada símbolo en JFLAP ejecuta una acción específica en el motor gráfico:',
        isTable: true,
        tableHeaders: ['Símbolo en JFLAP', 'Acción Ejecutada por el Motor Gráfico'],
        tableRows: [
          ['g', 'Avanza en línea recta dibujando un segmento de longitud igual a "Distance"'],
          ['f', 'Avanza en línea recta de la misma forma que "g", pero de forma invisible (sin pintar sobre el lienzo).'],
          ['+', 'Gira el sentido de la orientación hacia la derecha (sentido horario) el número de grados del "Angle".'],
          ['-', 'Gira el sentido de la orientación hacia la izquierda (sentido antihorario) el número de grados del "Angle".'],
          ['[ y ]', 'Los corchetes salvan ([) y recuperan (]) el estado de la tortuga (coordenadas X, Y y ángulo). Crucial para ramificaciones biológicas.']
        ]
      },
      {
        title: 'Copo de nieve de Koch',
        text: 'El copo de nieve de Koch es un famoso fractal matemático que parece una estrella de nieve y tiene una contradicción asombrosa: su perímetro es infinito, pero su área es finita.\n\n• Origen: Diseñado por el matemático Helge von Koch en 1904.\n• Construcción: Se inicia con un triángulo equilátero. En cada paso, el centro de cada lado se borra para añadir un triángulo más pequeño.\n• Auto-similitud: Cualquier sección pequeña se ve idéntica al total si se amplía.\n• La paradoja: El borde crece sin parar en cada paso (línea infinita), pero la figura nunca sale de un espacio limitado (área finita).\n\nCopo de nieve de Koch en JFLAP:\n• Axioma: g + + g + + g\n• Regla: g -> g - g + + g - g\n• Ángulo (Angle): 60'
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/ZZz77nPSUrw',
    steps: []
  },
  {
    id: 'regular-expression',
    title: 'Regular Expression',
    description: 'Conversión interactiva de Expresiones Regulares (ER) a Autómatas Finitos y viceversa.',
    hasSubSections: true,
    subSections: [
      {
        title: 'Operadores y Sintaxis en JFLAP',
        text: 'Al escribir Expresiones Regulares en JFLAP, la sintaxis es estricta y difiere un poco de la notación matemática tradicional:',
        isTable: true,
        tableHeaders: ['Operador', 'Comportamiento en JFLAP'],
        tableRows: [
          ['* (Asterisco)', 'Cerradura de Kleene. Acepta cero o más repeticiones.'],
          ['+ (Suma)', 'Unión. Equivale al operador lógico OR (ej. a + b significa "a" o "b").'],
          ['( ) (Paréntesis)', 'Agrupación lógica de sub-expresiones.'],
          ['Intervalos (A-Z)', '¡Prohibidos! JFLAP los leerá literalmente como los caracteres individuales "A", "-", y "Z".'],
          ['Cerradura Positiva', 'Como el "+" es para unión, debes simularla concatenando el elemento con su cerradura de Kleene (ej. "a" positiva se escribe como "aa*").']
        ]
      },
      {
        title: 'Proceso de Conversión a Autómata',
        text: 'JFLAP destaca por realizar la conversión paso a paso de forma didáctica:\n\n• Escribe la ER: Abre la herramienta, escribe la expresión respetando la sintaxis y presiona "Convert to NFA".\n• Ejecuta los pasos (Do Step): Haz clic en "Do Step" repetidas veces para que el programa construya el Autómata Finito No Determinista con transiciones Lambda.\n• Exportar y Simplificar: Una vez terminado, presiona "Export". En la nueva ventana, puedes convertir ese AFN a un Autómata Finito Determinista (AFD) y posteriormente minimizar sus estados.'
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/y1deNVLkK-U',
    steps: []
  },
  {
    id: 'regular-pumping-lemma',
    title: 'Regular Pumping Lemma',
    description: 'Herramienta interactiva diseñada como un "juego de estrategia" para aplicar el Lema del Bombeo y demostrar que un lenguaje NO es regular.',
    hasSubSections: true,
    subSections: [
      {
        title: 'Dinámica del Juego (Dos Jugadores)',
        text: 'El Lema de Bombeo en JFLAP se presenta como una competencia:\n\n• Jugador 1 (Demostrador): Su objetivo es probar que el lenguaje NO es regular, rompiendo el bombeo. Puedes jugar tú o dejárselo a la computadora.\n• Jugador 2 (Defensor): Su objetivo es elegir condiciones que mantengan la cadena dentro del lenguaje.\n• Estrategia: Si tú eliges ser el Jugador 1, buscarás encontrar el punto de falla de la cadena para "ganarle" a la computadora.'
      },
      {
        title: 'Pasos de la Demostración (Siendo Jugador 1)',
        text: 'Si tomas el rol de Jugador 1, el proceso sigue este flujo estricto:',
        isTable: true,
        tableHeaders: ['Paso en JFLAP', 'Acción o Regla'],
        tableRows: [
          ['1. Elegir "m"', 'Seleccionas la longitud mínima de bombeo (ej. entre 4 y 18).'],
          ['2. Computadora elige "w"', 'La IA de JFLAP generará una cadena válida que pertenece al lenguaje basándose en tu "m".'],
          ['3. Partición (x, y, z)', 'Tú divides la cadena en 3 bloques. Debes cumplir reglas matemáticas: |y| > 0 y |xy| ≤ m. JFLAP te avisará si rompes una regla.'],
          ['4. Bombeo de "i"', 'La computadora elige cuántas veces se va a repetir o "bombear" el bloque "y" (ej. i=2).'],
          ['5. Veredicto', 'Se muestra una animación. Si la cadena bombeada ya NO cumple la regla del lenguaje, has ganado (demostraste la no-regularidad).']
        ]
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/KPFQKEqla_I',
    steps: []
  },
  {
    id: 'context-free-pumping-lemma',
    title: 'Context-Free Pumping Lemma',
    description: 'Aplicación avanzada del Lema del Bombeo para demostrar que un lenguaje específico NO es un Lenguaje Libre de Contexto (Context-Free).',
    hasSubSections: true,
    subSections: [
      {
        title: 'Diferencias con el Lema Regular',
        text: 'Mantiene la misma dinámica de juego (Jugador 1 vs Jugador 2), pero al aplicarse a lenguajes libres de contexto la complejidad estructural aumenta:\n\n• Partición en 5 bloques: En lugar de dividir la cadena en "x, y, z", el jugador debe descomponerla minuciosamente en 5 partes: u, v, w, x, y.\n• Bloques de Bombeo: Al realizar el bombeo, la computadora repetirá "i" veces los bloques intermedios "v" y "x" simultáneamente.\n• Rango de Longitud: Los rangos iniciales para "m" suelen ser más estrictos o pequeños (ej. 3 a 11) debido a la complejidad exponencial de las cadenas.'
      },
      {
        title: 'Análisis de Resultados y Animación',
        text: 'El proceso finaliza con la validación de la cadena:\n\n• Al realizar el paso (Step), JFLAP correrá una animación mostrando cómo se inyectan los caracteres de "v" y "x" dentro de la cadena.\n• Si el texto rojo indica "That string is not in the language", la contradicción fue exitosa y la demostración concluye a tu favor.\n• Botón "Explain": Puedes usarlo en cualquier momento para que JFLAP te explique en inglés por qué una partición no es válida o por qué el lenguaje fue "roto".'
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/42-PayOfIgA',
    steps: []
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
          {/* Menú Lateral Izquierdo */}
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

            {/* Renderizado de Módulos con Subsecciones */}
            {activeModule.hasSubSections ? (
              <div className="space-y-12">
                {activeModule.subSections.map((sub, idx) => (
                  <div key={idx} className="border-b pb-8 last:border-none">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{sub.title}</h4>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed whitespace-pre-line">{sub.text}</p>
                    
                    {/* Renderizado de Cuadrícula de Menús */}
                    {sub.isMenuGrid ? (
                      <div className="grid grid-cols-2 gap-4">
                        {sub.menus.map((m, mIdx) => (
                          <div key={mIdx} className="bg-gray-50 border p-3 rounded-xl flex flex-col items-center">
                            <p className="font-bold text-xs text-indigo-600 mb-2">Menú {m.name}</p>
                            <div className="bg-white border rounded p-2 h-32 w-full flex items-center justify-center overflow-hidden mb-2 shadow-inner">
                              <img src={m.image} alt={m.name} className="max-h-full max-w-full object-contain" />
                            </div>
                            <p className="text-[11px] text-gray-500 text-center">{m.desc}</p>
                          </div>
                        ))}
                      </div>
                    ) : sub.isTable ? (
                      /* NUEVO: Renderizado de Tablas Dinámicas */
                      <div className="overflow-x-auto border border-gray-200 rounded-xl mt-4 shadow-sm">
                        <table className="w-full text-sm text-left text-gray-600">
                          <thead className="text-xs text-white uppercase bg-indigo-600">
                            <tr>
                              <th className="px-6 py-3">{sub.tableHeaders[0]}</th>
                              <th className="px-6 py-3">{sub.tableHeaders[1]}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {sub.tableRows.map((row, rIdx) => (
                              <tr key={rIdx} className="bg-white border-b hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-bold text-gray-900 border-r w-32">{row[0]}</td>
                                <td className="px-6 py-4 leading-relaxed">{row[1]}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      /* Pantallazo normal de la sección */
                      sub.image && (
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex justify-center shadow-inner max-w-xl mx-auto">
                          <img src={sub.image} alt={sub.title} className="max-h-64 object-contain rounded-lg" />
                        </div>
                      )
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

            {/* Videotutorial del Profesor */}
            <div className="border-t pt-6 space-y-3">
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wide">Ejemplo Práctico en Video</h4>
              {activeModule.videoUrl ? (
                <div className="aspect-video rounded-xl overflow-hidden shadow-md max-w-lg mx-auto bg-black">
                  <iframe 
                    className="w-full h-full" 
                    src={activeModule.videoUrl} 
                    title={`Tutorial ${activeModule.title}`} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen 
                  />
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