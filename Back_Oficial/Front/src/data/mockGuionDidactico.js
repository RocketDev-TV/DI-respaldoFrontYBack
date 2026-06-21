import { AreaComputacion } from "./enum";

export const TipoContenido = {
  LECCION: 'leccion',
  RECURSO: 'recurso',
  TAREA: 'tarea',
};

export const CONTENIDOS_MOCK = [
      //COMPILADORES

      {
          contenido_id: 1,
          titulo: '1.1 Presentación del Profesor, Objetivos del curso, Descripción del temario y Forma de evalucación',
      area: AreaComputacion.TEORIA_COMPUTACION,
          descripcion: 'Pendiente',
          tipo: TipoContenido.LECCION,
          orden: 1,
          url_recurso: null,
          unidad_id: 1,
          unidad: { unidad_id: 1, nombre: 'UNIDAD I - INTRODUCCIÓN' },
          contenido: [
      `Sara Méndez García. Licenciada en Ciencias de la Informática. Egresada de la UPIICSA generación 1979 – 1983.
      
       Seis años de experiencia laboral en el área de contabilidad y finanzas.
       Dieciséis años de experiencia laboral en el Desarrollo de Sistemas de Información en el área de negocios, servicios y la banca.
       Veinte años de experiencia en el área docente en instituciones públicas y privadas.
       Actualmente profesor de tiempo completo de la UPIICSA y candidato a la maestría en Ciencias de la Informática de la UPIICSA-SEPI
      
      DESCRIPCIÓN Y OBJETIVOS DEL CURSO
      “Al término del curso, el alumno: Construirá un prototipo de traductor basándose en el funcionamiento de un compilador.”
      
      DESCRIPCIÓN DEL TEMARIO Y LA BIBLIOGRAFÍA
      Los temas para esta asignatura son 8 unidades, de las cuales siete son teóricas para comprender la teoría involucrada en el diseño de compiladores. Y la octava corresponde al proyecto que se dividirá en tres etapas para revisión de avances parciales. En cada uno de estos avances se revisará la documentación y el avance de los programas desarrollados para diseñar cada una de las etapas de análisis de un compilador experimental que se realizará con un lenguaje diseñado por alumnos para alumnos. Lo principal del proyecto debe ser la originalidad y su funcionalidad. Los detalles del desarrollo están descritos en la unidad ocho.
      
      `,`https://drive.google.com/file/d/1m_nc3JjQV6NW4nCUybLn-DiZ1FHkiBGA/view?usp=sharing`,`
      
      BIBLIOGRADÍA
      Aho, Alfred V. Ullman Jeffrey D. “Compiladores, principios, técnicas y herramientas”,
      Editorial Addison Wesley 1998, 820 pp. USA.
      Aho, Alfred V. Ullman Jeffrey D. “The Theory of Parsing, Traslation, and
      Compiling”,vol.1, Editorial Prentice Hall. Inc. E.U. 1990, 725 pp. USA.
      Hopcroft & Ullman “Introducción a la teoría de autómatas, lenguajes y computación”
      Editorial CECSA, 1993, 447 pp.
      Morris Mano, M. “Arquitectura de Computadoras” Editorial Prentice Hall Iberoamericana,
      1983
      Joyanes Aguilar, Luis, “Estructuras de datos algoritmos, abstracción y objetos”,
      Editorial McGraw Hill, primera edición, 1998, Aravas Madrid, Capitulo 16, páginas 553 a
      579.
      Kenneth, C. Louden “Construcción de Compiladores”, principios y práctica Editorial
      Thomson, 2004, 582 pp.
      Pratt, Terréense W./Zelkowitz, Marvin V., “Lenguajes de Programación” Diseño e
      Implementación, Edit. Pearson 3a.Edición, México 1998, 654 pp.
      Ruiz, Catalán Jacinto, “Compiladores Teoría e Implementación”, Edit. Alfaomega
      1a.Edición, México 2010, 420 pp.
      
      DESCRIPCIÓN DEL DESARROLLO DEL CURSO
      En términos generales y muy reales, el curso requiere de un gran contenido teórico (Aproximadamente un 80%) y una parte práctica también, misma que por limitaciones de tiempo es difícil cubrir en clase, para lograr lo anterior, se tendrán que resolver actividades o ejercicios que completen el contexto teórico, es por esto la intención, que este material sirva de apoyo a ese gran porcentaje de teoría que necesariamente se tiene que entender, con toda la terminología básica que conlleva el estudio y comprensión de los compiladores. Así también se le recomienda al alumno dedique tiempo extra-clase para la realización de los ejercicios que se agregan al término de cada unidad, para el reafianzamiento de los contenidos teóricos básicos necesarios, para generar productos de aprendizaje significativos.
      
      FORMA DE ACREDITACIÓN Y EVALUACIÓN
      Se tomarán en cuenta las asistencias a clase, aplicando el reglamento de evaluación que fija un 80 % mínimo de asistencias para acreditar el curso. Sólo se aceptan justificantes de faltas por motivos de salud o de fuerza mayor (no laborales), justificando la inasistencia una clase después de haberse incurrido. Como ejemplo, en cada periodo parcial son aproximadamente 8 clases por tres periodos 24 clases en total del semestre, el 80 % equivale a 19.2, mínimo 19 asistencias y 5 inasistencias permitidas en el curso.
      
      Habrá 5 formas de evaluación para los 3 periodos, las cuales consisten en:
      Opción A: Evaluación Continua.
      Opción B: Participaciones correctas con 100% de asistencias. 2 pts c/u.
      Opción C: Presentación(es) de:
      1) Respuesta de ejercicios
      2) Reto de Programación
      3) Temas vistos o por ver 
      Opción D: Proyecto excelente.
      Opción E: Evaluciones Teórica - Oral. Evaluación prácticas de unidades temáticas I, II, III (Evaluación de reposición).
      
      NOTA: DE LAS 5 OPCIONES ANTERIORES (A,B,C,D,E) SE TOMARÁ LA CALIFICACIÓN MÁS ALTA A CAPTURAR EN EL SAES.
      `
          ]
        },
      
        {
          contenido_id: 2,
          titulo: 'Ejercicios de repaso para la Unidad I',
      area: AreaComputacion.TEORIA_COMPUTACION,
          descripcion: 'Pendiente',
          tipo: TipoContenido.LECCION,
          orden: 2,
          url_recurso: null,
          unidad_id: 1,
          unidad: { unidad_id: 1, nombre: 'UNIDAD I - INTRODUCCIÓN' },
          contenido: [
            `
      1. Realizar una investigación en diferentes fuentes de información por internet y bibliográficas sobre los lenguajes de programación actuales con sus derivados.
      2. Elaborar una lista con la mayor cantidad de lenguajes de programación conocidos y no conocidos en México, con una breve descripción de sus características básicas y el año de su desarrollo.
      3. Ampliar la bibliografía documentando las fuentes de información relacionadas con el diseño de los lenguajes y sus características necesarias para su diseño y aplicación
      de cada lenguaje. 
      NOTA IMPORTANTE: Respecto a las fuentes de información bibliográfica, deberán anotarse los datos completos en el siguiente orden:
      a) Autor o autores (empezando por apellidos paternos y nombres), título del libro (entre comillas y en “negritas”), año de publicación, lugar y páginas consultadas.
      b) Si se consulta fuentes de información en Internet, es indispensable anotar el nombre completo de la página, y la fecha y hora en que se consultó.
      c) Sobre las consultas de revistas y otras fuentes, identificar bien el origen de la información y anotarla en la bibliografía.
      `
          ]
        },
      
        // ── UNIDAD II ────────────────────────────────────────────
        {
          contenido_id: 3,
          titulo: '2.1 Introducción a la teoría, para la construcción de un compilador',
      area: AreaComputacion.TEORIA_COMPUTACION,
          descripcion: 'Pendiente',
          tipo: TipoContenido.LECCION,
          orden: 1,
          url_recurso: null,
          unidad_id: 2,
          unidad: { unidad_id: 2, nombre: 'UNIDAD II - TRADUCTORES' },
          contenido: [
            `
      Un compilador es un tipo muy especial de traductor, puede estar presente dentro del sistema operativo e inclusive al ejecutar un programa en algún lenguaje como C, Pascal o algún otro. Normalmente nos veremos en la necesidad de auxiliarnos por un compilador.
      
      Para poder llegar a construir o implementar un compilador sobre un lenguaje o sobre varios lenguajes, es necesario tener conocimientos de:
       Teoría de la computación.
       Arquitectura de Computadoras.
       Lenguajes de Programación.
       Algoritmos Computacionales.
       Ingeniería de Software.
      
      Para ello, haremos un pequeño recordatorio de algunos temas que nos serán de gran utilidad.   
      
      CADENAS, ALFABETOS, LENGUAJES Y GRAMÁTICAS
      Un símbolo es una entidad abstracta que no se define, un ejemplo de símbolo, son las letras y los dígitos. Una cadena (o palabra) es una secuencia finita de símbolos yuxtapuestos. La longitud de una cadena w, que se denota como |w|, es el número de símbolos que componen la cadena. La cadena vacía denotada por ε, es la cadena que consiste en cero símbolos, es decir |ε| = 0.
      
      Un conjunto no vacío y finito de símbolos se conoce como alfabeto. Dado esto podemos definir de nuevo que una palabra es una secuencia finita de símbolos de un determinado
      alfabeto. Un lenguaje (formal) es un conjunto de cadenas de símbolos tomados de algún alfabeto, es decir es un conjunto de palabras. Dado que el lenguaje es un conjunto de cadenas, se puede tener el lenguaje compuesto por ninguna cadena, el lenguaje vacío. Éste no es el mismo lenguaje que el que consta de la cadena vacía {ε}. El lenguaje vacío se denota de misma forma que el conjunto vacío, θ.
      
      Una gramática es un conjunto de reglas sobre los símbolos que satisfacen un lenguaje determinado.
      
      AUTÓMATAS FINITOS (AF)
      El autómata finito es un modelo matemático que consta de una quíntupla (5-tupla), M = {q, Σ, δ, q0, F} de un sistema, con entradas y salidas discretas. El sistemaen cualquiera de un número finito de configuraciones o “estados”. El estado del sistema resume la información concerniente a entradas anteriores y que es necesaria para determinar el comportamiento del sistema para entradas posteriores.
      
      El mecanismo de control de un elevador es un buen ejemplo de un sistema de estados finitos. El mecanismo no recuerda todas las demandas previas de servicio, sino solo el piso en el que se encuentra, la dirección de movimiento (hacia arriba o hacia abajo) y el conjunto de demandas de servicio aún no satisfechas.
      
      Otro ejemplo que tenemos es que ciertos programas como los editores de texto y los analizadores léxicos que se encuentran en la mayoría de los compiladores, son diseñados como sistemas de estado finito.
      
      AUTOMATA FINITO DETERMINISTA (AFD)
      Entonces podemos definir que un autómata finito determinista AFD consiste en un conjunto finito de estados y un conjunto de transiciones de estado a estado, que se dan sobre el símbolo de entrada tomado de un alfabeto Σ. Un estado q0, que es el estado inicial, en el que el autómata comienza.
      
      Para determinar los distintos miembros de un lenguaje podemos construir un diagrama, este diagrama tiene la forma de un grafo dirigido con información adicional, y se llama diagrama de transición. Los nodos del grafo se llaman estados y se usan para señalar hasta que lugar se ha analizado la cadena. Las aristas del grafo que se etiquetan con caracteres del alfabeto determinan las transiciones. Naturalmente nosotros debemos comenzar por un estado inicial, y cuando se hayan tratado todos los caracteres de la cadena correspondiente, necesitamos saber si la cadena es legal. Para ello se marcan ciertos estados como estados de aceptación o estados finales.
      
      Ejemplo.
      En la siguiente figura 2.1 se ilustra el diagrama de transiciones de un Autómata Finito. El estado inicial q0 esta indicado por la flecha con la etiqueta “inicio” (en este ejemplo existe solo un estado final, pero pueden existir mas en otros autómatas), también q0 en este caso indicado por el doble círculo. Este autómata acepta todas las cadenas de ceros y unos, en las que el número de 0 ́s y el número de 1’s son pares.
      
      `,`https://drive.google.com/file/d/1k25NHWHRQ-cykevBTnjby6Nk9C7X8lNa/view?usp=drive_link`,`
      
      Dado este ejemplo, formalmente, un autómata finito determinista AFD es una colección de cinco elementos:
      
      1. Un alfabeto de entrada Σ.
      2. Una colección finita de estados Q.
      3. Un estado inicial S.
      4. Una colección F de estados finales o de aceptación.
      5. Una función δ: Q x Σ → Q, conocida como función de transición que determina el único estado siguiente para el par (qi,σ) correspondiente al estado actual qi y la entrada σ.
      
      Denominaremos a un AFD con M, por lo que usaremos M = {Q, Σ, S, F, δ} para indicar el conjunto de estados, el alfabeto, el estado inicial, el conjunto de estados finales y la función asociada con el AFD. Se dice que una cadena x es aceptada por un AFD si δ(q0,x) = p para algún p en F, es decir que la cadena termine en uno de los estados de aceptación o estados finales. El lenguaje aceptado por M, denominado L(M), es el conjunto {x | δ(q0,x) esta en F}. Por lo que un lenguaje es regular, si es el conjunto de cadenas es aceptado por un autómata finito.
      
      Ejemplo:
      Considerando el diagrama de nuestro ejemplo anterior, en notación formal, este AFD se
      denota como M = {Q, Σ, S, F, δ} de la siguiente manera:
      Q = {q0, q1, q2, q3}
      Σ = {0, 1}
      S = q0
      F = {q0}
      δ = según la tabla 2.1
      
      `,`https://drive.google.com/file/d/1Ag7lUGpkiWW85PmM8pSbEn9GD33CconN/view?usp=drive_link`,`
      
      Dada la cadena 110101 vemos que pertenece a L(M).
      
      Ejemplo
      El siguiente AFD que se representa mediante la siguiente manera M = {Q, Σ, S, F, δ}.
      Q = {q0, q1}
      Σ = {a, b}
      S = q0
      F = {q0}
      δ = según tabla 2.2
      
      `,`https://drive.google.com/file/d/1xJ_U7B7129jHowHHrzXbTINNXF56gB5T/view?usp=drive_link`,`
      
      Dada la siguiente cadena ababa, vemos que pertenece a L(M).
      
      AUTOMATA FINITO NO DETERMINISTA (AFND)
      Si se permite que desde un estado se realicen cero o más transiciones mediante el mismo símbolo de entrada, se dice que el autómata finito es no determinista AFDN o AFN, pero llegaremos a la conclusión de que cualquier lenguaje aceptado por un AFN también es aceptado por un AFD.
      A veces es más conveniente diseñar AFN en lugar de AFD.
      
      De manera formal denotamos a un AFN mediante una colección de cinco objetos (Q, Σ, S, F, Δ), donde:
      • 1. Q es un estado finito de estados.
      • 2. Σ es el alfabeto de entrada.
      • 3. S es uno de los estados de Q designado como estado de partida.
      • 4. F es una colección de estados de aceptación o finales.
      • 5. Δ es una relación sobre (Q x Σ) x Q y se llama relación de transición.
      
      Ejemplo
      En la siguiente figura se muestra un diagrama de transiciones de un AFN. Observe que
      existen dos aristas con la etiqueta 0 que salen del estado q0, uno que regresa a q0 y otro
      que va al estado q3.
      
      `,`https://drive.google.com/file/d/18ZWG98JykGSTXs-gUQe702R2fOtfKxBJ/view?usp=drive_link`,`
      
      AUTÓMATA FINITO NO DETERMINISTA CON TRANSICIÓN VACIA (AFND-ε)
      Este autómata es también un AFN, que incluye transiciones sobre la cadena vacía ε, cuando hablamos de una cadena vacía conecta a dos estados, nos referimos a que no se consume ningún símbolo del alfabeto.
      
      Como ejemplo de estos autómatas tenemos los siguientes, en este primer ejemplo tenemos a un autómata que puede cambiar su estado de q0 a q1 sin consumir nada en la entrada. Observemos que q1 es el único estado de aceptación de este AFN. Si w es cualquier cadena de 0 o más a ́s, este autómata cicla sobre q0 hasta que consume las a's. Una vez que la cadena se vacía, se desplaza a q1 con ε y lo acepta.
      
      `,`https://drive.google.com/file/d/1wlsaCMTAy4Otoe5zVDTHIai15qJoPeBH/view?usp=drive_link`,`
      
      En la siguiente figura el AFN puede moverse del estado q2 al estado q0 sin consumir nada en la entrada. En ambos AFN, la decisión de elegir una ε-transición se realiza de la misma forma que la de cualquier otra transición con elección múltiple que exista en un AFN.
      
      `,`https://drive.google.com/file/d/1HedNJ1i3_r20gk1bPgrKQ7lGeaGYqwvc/view?usp=drive_link`,`
      
      Este AFN asocia Q x (Σ U {ε}) x Q con subconjuntos Q. Por lo que la figura anterior genera la siguiente tabla de transición:
      
      `,`https://drive.google.com/file/d/1lDGcFfY6y1YNHziBxEIPxF87clqoRiVv/view?usp=drive_link`,`
      
      ARBOLES
      La estructura del árbol es una colección no vacía de elementos llamados nodos o vértices y arcos (entre estos elementos) que satisface ciertos requisitos. Un árbol permite establecer una organización jerárquica entre sus nodos (padre-hijo). Un camino en un árbol es una colección de nodos conectados por arcos en el árbol. El nodo donde comienza la jerarquía se designa como raíz. El requisito que debe de cumplir un árbol para ser considerado como tal es que haya exactamente un camino entre la raíz y cualquiera de los otros nodos.
      La estructura del árbol o árbol n-ario se puede ver también como un conjunto finito de elementos que o bien es vacío o bien consta de un elemento que contiene información (llamado raíz) y hasta n árboles n-arios que tienen su origen en la raíz. La siguiente figura representa un árbol en el que el 1 es la raíz.
      
      `,`https://drive.google.com/file/d/1ln66sG2-s2yBQqCsVbu7TZLyEkGSVZOG/view?usp=drive_link`,`
      
      Por lo tanto, podemos definir la estructura de datos árbol binario como un conjunto finito de elementos que o bien es vacío o bien consta de un elemento de datos (raíz) y dos árboles binarios que salen de la raíz (llamados subárboles izquierdo y derecho). La siguiente figura muestra un árbol binario.
      
      `,`https://drive.google.com/file/d/11YFhfakXWtu55e5M7hjNVuscZAPADjvl/view?usp=drive_link`,`
      
      Estas estructuras poseen diversas operaciones, pera para nuestra conveniencia la más importante será la de recorrido de los nodos en diversos órdenes. La utilización de los árboles la veremos implementada cuando construyamos árboles sintácticos dentro del análisis sintáctico.
      
      RECORRIDOS EN ÁRBOLES
      Los árboles son una estructura de datos muy usada cuando se necesita manejar rápidamente grandes cantidades de información. Además de eso, en el desarrollo de un compilador permite comprobar si la cadena de entrada está sintácticamente correcta. 
      
      Las figuras 2.8 muestran árboles de caracteres y cuatro resultados que corresponden a los resultados de los distintos recorridos que se pueden hacer sobre los mismos. Podemos obtener tantos resultados como permutaciones haya en los elementos contenidos en el árbol; es decir, si hay n elementos, hay n! de resultados correctos. 
      
      Los resultados que se obtuvieron son de los cuatro recorridos más corrientes: preorden, orden central (o inorden), postorden y en anchura. Con los tres primeros se recorre el árbol siguiendo su estructura recursiva. Esto significa que en un árbol no vacío se recorre un subárbol completo antes de continuar con el otro (por convenio suele ser el izquierdo antes que el derecho). Esta regla se utiliza con cualquier subárbol, por lo que el recorrido avanza por una rama del árbol hasta llegar a una hoja; solo entonces se tratan otras ramas. Estos recorridos se llaman en profundidad. El cuarto recorrido que mencionamos se efectúa siguiendo la estructura en niveles del árbol, por lo que se llama recorrido en anchura. Este no se guía por la estructura recursiva del árbol.
      
      `,`https://drive.google.com/file/d/1wuWfXwsaXAxw8MQnDsrnmwxPs17hUNN_/view?usp=drive_link`,`
      
      Los tres componentes de un árbol no vacío son raíz, subárbol izquierdo y subárbol derecho. Los recorridos que se pueden hacer sobre este árbol son los siguientes:
      
       Recorrido en Preorden: la raíz se trata antes de los subárboles, así que el orden de recorrido es: raíz, subárbol izquierdo y subárbol derecho.
       Recorrido en Orden Central: la raíz es tratada entre ambos subárboles, así que el orden de recorrido es: subárbol izquierdo, raíz y subárbol derecho.
       Recorrido en Postorden: la raíz se trata después de los dos subárboles, es decir, en el orden: subárbol izquierdo, subárbol derecho y raíz.
       Recorrido en Anchura: se distingue por el orden relativo de visita de los nodos que están en un mismo nivel, puede ser ascendente y/o descendente.
      `
          ]
        },
      
        {
          contenido_id: 4,
          titulo: '2.2 Concepto de comunicación',
      area: AreaComputacion.TEORIA_COMPUTACION,
          descripcion: 'Pendiente',
          tipo: TipoContenido.LECCION,
          orden: 2,
          url_recurso: null,
          unidad_id: 2,
          unidad: { unidad_id: 2, nombre: 'UNIDAD II - TRADUCTORES' },
          contenido: [
            `
      Al comunicarnos establecemos algo en común con alguien, o con grupos de personas en forma interpersonal frente a frente o también a través de las nuevas tecnologías de comunicación e información en forma indirecta (es decir siempre esta presente un proceso de transmisión y recepción de ideas, datos, información y mensajes). La palabra comunicación proviene del latín communis, que significa común.
      
      Componentes que intervienen en el proceso de comunicación:
      • La fuente: puede ser un individuo que habla, escribe o dibuja; o una organización de comunicación, por ejemplo un periódico, un canal de televisión, una cadena radial o un estudio cinematográfico.
      • El mensaje: es el producto del comunicador que se expresa en forma de códigos en forma escrita, verbal, gestual o con imágenes. Así el mensaje puede presentarse en forma de Impresos en papel, impulsos electromagnéticos, ondas de sonido en el aire, gestos o todo tipo de señales capaces de ser interpretadas significativamente.
      • El medio o canal: es el vehículo, soporte o instrumento de la comunicación a través del cual se envía o viaja el mensaje. Hay canales que permiten dirigirse a grandes masas: radio, televisión, prensa. Cuando el profesor y los estudiantes se comunican en forma verbal en el salón de clase, utilizan el aire como canal.
      • El destino: puede ser un individuo o un grupo de personas. Así, la persona que escucha una grabación de audio, lee un libro, o ve un noticiero, constituye el destino de un mensaje. Igualmente lo son los televidentes, los cibernautas o navegantes del espacio, los lectores de una revista o periódico, el público que asiste a una conferencia.
      • La retroalimentación: es el componente que busca asegurar la eficacia del proceso comunicativo de forma bidireccional, es decir verificar la forma en que el destino recibe el mensaje y su apropiación. Juega un papel muy importante en la comunicación porque permite al emisor conocer como se están interpretando sus mensajes verbales, escritos, gestuales, gráficos, musicales. Hacen parte del proceso de retroalimentación los aplausos, sonrisas, bostezos, inclinaciones de cabeza; igualmente cartas, llamadas, mensajes a través de fax o correo electrónico.
      
      Cuando la retroalimentación es concebida dentro del proceso de enseñanza y de aprendizaje, está constituida por tres elementos básicos:
      a) La información de qué es correcto y qué es incorrecto.
      b) Por qué está correcto y por qué incorrecto.
      c) Posibles alternativas de solución o estrategias de mejoramiento.
      
      Todo esto inmerso en un ambiente de diálogo significativo en que cada uno de los entes inter-actuantes sea partícipe de un proceso crítico constructivo. Para que la comunicación ocurra, y la persona a quien se dirige, comprenda el mensaje, es necesario utilizar signos. Hoy se da mucho énfasis a la comunicación como generación de significado. Si compartimos los códigos y utilizamos los mismos sistemas de signos, hay mayor semejanza entre nuestros dos significados para el mensaje.
      
      Algo que parece tan sencillo como mantener una comunicación con otro individuo resulta un proceso complejo, por la cantidad de factores que gravitan, de orden psicológico o emocional.
      
      "El resultado de la comunicación esta dado por lo que el receptor entendió y no por lo que el emisor intento comunicar"
      
      MODELO DE LOS COMPONENTES DE LA COMUNICACIÓN:
      `,`https://drive.google.com/file/d/12_07nqMbmKskGoKScTRsm-V71pbZi3CJ/view?usp=drive_link`,`
      
      En el modelo de los componentes de la comunicación, se tienen cuatro componentes
      indispensables para establecer la comunicación. La comunicación va desde un origen o
      fuente hacia un destino o receptor, por lo que se necesita la transmisión de un mensaje y
      un medio o canal que pueden ser los sentidos o los medios de comunicación que la
      tecnología proporciona.
      A continuación se da una breve descripción de cada uno de los elementos.
      
      4
      http://tecnologiaedu.us.es/bibliovir/pdf/316.pdf
      EMISOR
      O
      FUENTE
      
      MENSAJE CANAL RECEPTOR
      
      Unidad II. Traductores
      
      El mensaje.- es el elemento principal, es lo que se quería transmitir. El mensaje tiene como consecuencia en el receptor, que éste emita una respuesta determinada.
      Emisor o fuente.- Sitio, hecho y ocasión de donde procede algo. Sistema que puede emitir de forma permanente energía como calor, luz, electricidad, partículas, etc.
      Receptor.- Conductor en el que la energía eléctrica produce un efecto, mecánico o químico. Aparato que recibe una señal de telecomunicación o radiodifusión, transformándola en sonidos.
      Canal.- Conducto natural o artificial. Transmisión radioeléctrica a la que se le ha asignado una banda del espectro de frecuencias. Medio de comunicación entre emisor y receptor.
      Canal de transmisión.- Circuito que cubre una cierta banda de frecuencias y asegura la transmisión de un mensaje.
            `
          ]
        },
      
        {
          contenido_id: 5,
          titulo: '2.3 Concepto de traductor',
      area: AreaComputacion.TEORIA_COMPUTACION,
          descripcion: 'Pendiente',
          tipo: TipoContenido.TAREA,
          orden: 4,
          url_recurso: null,
          unidad_id: 2,
          unidad: { unidad_id: 2, nombre: 'UNIDAD II - TRADUCTORES' },
          contenido: [
            `
      Programa que sirve para generar de un programa con un lenguaje de programación, a otro con un lenguaje más asequible, que el lenguaje de máquina. Traducir es expresar o representar de una forma determinada ideas, pensamientos, estados de ánimo, etc.
            
      NECESIDAD DE TRADUCIR
      El lenguaje de las computadoras, desde sus orígenes, se pensó que por su simplicidad debería ser binario, esto es, utilizar sólo dos dígitos: cero y uno (0,1), mismos que representan ya sea el estado de off (apagado), y el estado de on (encendido), pasa o no pasa, un “no” o un “si”.
      
      En la cercanía que ha sido necesaria mantener con los componentes de cualquier computadora, que en un principio fueron mecánicos, después eléctricos, electromecánicos, electrónicos hasta llegar a la integración de circuitos miniaturizados (chips) se ha empleado lógica digital, misma que todas las computadoras utilizan en el llamado lenguaje de máquina que ahora sabemos también se conoce como micro-código. Este lenguaje de máquina puede realizarse de forma alambrada (por circuitos) o microprogramaza, utilizando lo que se conoce como microinstrucciones que son las instrucciones que se dan a la computadora a su mismo nivel, después se explicará con más detalle el tema de niveles, conocido como niveles de traducción (en el tema 2.4). El lenguaje de máquina (binario) hizo factible que las computadoras alcanzaran rapidez y precisión. Con las nuevas tecnologías se ha logrado no solo una evolución en los componentes físicos, pero el paso mas grande se ha dado en la lógica que se emplea para controlar el funcionamiento de las computadoras. Se ha evolucionado en códigos de representación binaria (EBCDIC), conjuntamente con códigos de representación octal y hexadecimal (ASCII), mismos que permiten ahorrar espacios físicos y agilizar la rapidez en su interpretación. Definitivamente la necesidad de traducir es evidente cuando pensamos que en ves de teclear cadenas interminables de unos y ceros, podemos desplegar el famosísimo... “HOLA MUNDO”.
      
      LENGUAJE BINARIO.- En este sistema solo dos dígitos 0 y 1 son suficientes para la representación de cualquier carácter, ya sea numérico (cualquier tipo de combinaciones de los dígitos decimales 0, 1, 2, 3, 4, 5, 6, 7, 8, 9), caracteres alfabéticos (de la A la Z) o  caracteres especiales (+ - $ % & /, etc.). En comunicaciones, a los códigos binarios se les conocen como de banda base y son económicos y eficientes.
      Por ejemplo la representación de los siguientes dígitos decimales, tienen su correspondiente representación en binario
      
      `,`https://drive.google.com/file/d/1TQrWhrWOJByXNtDiPwX_0wwT4n3HkDXd/view?usp=drive_link`,`
      
      OCTAL.- El sistema numérico octal tiene como base o raíz al número 8, lo cual quiere decir que utiliza ocho símbolos diferentes para la representación de números. Estos son comúnmente 0, 1, 2, 3, 4, 5, 6 y 7. En la siguiente tabla se muestran algunos números octales y sus equivalentes en decimal, teniendo en cuenta la notación posicional al igual que en los otros sistemas numéricos.
      
      `,`https://drive.google.com/file/d/1ECd0lC7-XhaP7CVUL5cobGcGuGHTf7GX/view?usp=drive_link`,`
      
      HEXADECIMAL.- En este sistema, la representación se apoya con diez dígitos numéricos y se completa con las primeras cinco letras del alfabeto, según se muestra en la siguiente tabla...
      
      `,`https://drive.google.com/file/d/1-NJfB5duRDBJovyFaQUI3LQO11FIDfwi/view?usp=drive_link`,`
      
      LENGUAJE DE MÁQUINA.
      Es el sistema de códigos directamente interpretable por una máquina, como el procesador de un ordenador. Este lenguaje está compuesto por un conjunto de instrucciones que determinan acciones a ser tomadas por la máquina. Un programa de computadora consiste de una cadena de estas instrucciones de lenguaje de máquina (más datos). Estas instrucciones son normalmente ejecutadas en secuencia, con eventuales cambios de flujo causados por el propio programa o eventos externos. El lenguaje de máquina es específico de cada máquina o arquitectura de la máquina, aunque el conjunto de instrucciones disponibles pueda ser similar entre ellas.
      
      El lenguaje-máquina sólo utiliza dos signos. Y éstos se corresponden exactamente con las únicas dos constantes del álgebra booleana, y también con los dos estados exclusivos de un conmutador. Estos signos, constantes o estados de conmutación son el 1 y el 0, llamados dígitos binarios.
      
      Claude Elwood Shannon, en su Analysis of Relay and Switching Circuits, y con sus experiencias en redes de conmutación sentó las bases para la aplicación del álgebra de Boole a redes de conmutación.
      
      Una Red de Conmutación es un circuito de interruptores eléctricos que al cumplir ciertas combinaciones booleanas con las variables de entrada, define el estado de la salida. Este concepto es el núcleo de las Compuertas Lógicas, las cuales son por su parte, los ladrillos con que se construyen sistemas lógicos cada vez más complejos.
      
      Shannon utilizaba al relay como dispositivo físico de conmutación en sus redes. El relay, igual que el interruptor de una lámpara eléctrica, es 1 o es 0; está prendido o está apagado.
      
      El desarrollo tecnológico ha permitido evolucionar desde las redes de relays electromagnéticos de Shannon, pasar a circuitos con Tubos de Vacío, luego a redes Transistorizadas, hasta llegar a los modernos Circuitos Integrados.
      
      El Microprocesador de la CPU del ordenador opera en lenguaje-máquina, ya que su repertorio de instrucciones consiste en la ejecución de conjuntos binarios. Por cierto que Shannon fue quien aportó el término de bit para los guarismos 1 “o” 0, acrónimo de las palabras inglesas binary digit o el equivalente en español: "dígito binario".
      
      LENGUAJE ENSAMBLADOR.
      El lenguaje ensamblador consiste en una selección de abreviaturas (mnemónicos o mnemoclaves) tomadas de palabras del lenguaje inglés, las cuales dan una idea de su significado. Este lenguaje esta muy cercano a la arquitectura de la computadora y se dan instrucciones indicando el direccionamiento para cada instrucción. Este es una versión mnemotécnica del código de máquina, donde se usan nombres (identificadores) en lugar de códigos binarios para operaciones, y también se usan nombres (también identificadores) para las direcciones de memoria.
      
      Existe un lenguaje ensamblador para cada tipo de computadora en especial, por lo que se dice que son dependientes del hardware y de bajo nivel, por lo que suelen ser complejos dependiendo de la capacidad de la computadora, a mayor capacidad mayor complejidad en la elaboración del código en este tipo de lenguaje.
      
      `,`https://drive.google.com/file/d/1MRQjBQl_vjv1BOEE_oz3z1qmqtN-hax4/view?usp=drive_link`,`
      
      Se concibe una pequeña palabra de instrucción, en la que los cuatro primeros bits son el código de la instrucción, donde 0001 y 0010 representan hipotéticamente las instrucciones MOV (mover) y ADD (sumar) respectivamente, el 00 representa (también hipotéticamente) la dirección de la variable a, el 01 representa la dirección de la variable R1, de donde se concluye que las tres instrucciones en ensamblador corresponde a: MOV a, R1 Se mueve el contenido de la constante cuya dirección es a (00) a la variable R1 (cuya dirección en 10) y esto equivale a igualar el valor de la variables a= R1 ADD #2, R1 Se incremente el valor de la variable R1 en dos unidades (que convertidas a binario es 10) y equivale a R1 = R1 + 2
      MOV R1, a El valor que tenga R1 se guarda en la variable a
      (Igualándolos) R1 = a
      
      De esta forma podemos imaginar que todo lo que se escribe en mnemónicos conlleva una traducción a binario. Según se mostró con un tipo muy particular (ya simplificado) de lenguaje ensamblador, solo con el objetivo de entender una traducción simulada de ensamblador a binario.
      
      LENGUAJE DE ALTO NIVEL
      La programación en el lenguaje de la máquina o en lenguaje simbólico tiene ciertas ventajas:
      • Mayor adaptación al equipo.
      • Posibilidad de obtener la máxima velocidad con mínimo uso de memoria.
      
      También tienen importantes inconvenientes:
      • Imposibilidad de escribir código independiente de la máquina.
      • Mayor dificultad en la programación y en la comprensión de los programas.
      
      Por esta razón, a finales de los años 1950 surgió un nuevo tipo de lenguaje que evitaba los inconvenientes, a costa de ceder un poco en las ventajas.
      
      Estos lenguajes se llaman "de tercera generación" o "de alto nivel", en contraposición a los "de bajo nivel" o "de nivel próximo a la máquina".
      
      Principales lenguajes de alto nivel
      • Léxico
      • Basic
      • Logo
      • ALGOL
      • Pascal
      • Object Pascal
      • C
      • C#
      • C++
      • Clipper
      • Python
      • Perl
      • Ada
      • Cobol
      • Java
      • Fortran
      • Modula-2
      • Lenguajes funcionales
      • Lisp
      • Haskell
      
      Nota: Dentro de los lenguajes de nivel alto, el lenguaje C y sus derivados son considerados lenguajes de nivel intermedio.
      `
          ]
        },
      
        {
          contenido_id: 6,
          titulo: '2.4 Traductores',
      area: AreaComputacion.TEORIA_COMPUTACION,
          descripcion: 'pendiente',
          tipo: TipoContenido.LECCION,
          orden: 5,
          url_recurso: null,
          unidad_id: 2,
          unidad: { unidad_id: 2, nombre: 'UNIDAD II - TRADUCTORES' },
          contenido: [
            `
      Los traductores son un conjunto de programas, necesarios para lograr la conversión de un código a otro, de un lenguaje a otro y de diferentes niveles. Antes de mostrar los diferentes tipos de traductores es importante remarcar la importancia de la traducción de un código a otro. Para poder lograr la comunicación hombre máquina, simplificando esta labor, se han creado herramientas “traductores” cada vez mas cercanos al hombre y mas lejanos del lenguaje de máquina, Por esta razón trataremos de definir brevemente que es un nivel. Los niveles en los programas se consideran tomando en cuenta las características del lenguaje que se utiliza. En términos muy generales, los lenguajes pueden ser:
      
      De alto nivel.- Cercanos al hombre y lejanos a las características particulares de la computadora o al lenguaje de máquina.
      
      De bajo nivel.- Cercanos a la arquitectura de las computadoras y con gran detalle para el código que realiza el hombre debido a su cercanía con el tipo particular de computadora.
      
      De nivel intermedio.- Estos son poderosos como los lenguajes de bajo nivel (ensambladores) y accesibles al hombre, como son los lenguajes de alto nivel. El ejemplo clásico de este tipo de lenguajes de nivel medio, son los que tienen alguna relación con los diferentes tipos de lenguaje C, ya que estos tienen una gran variedad por la cantidad de derivados que se han generado, incluyendo a JAVA.
      Con base a lo anterior, existen infinidad de niveles intermedios de traducción o interpretación, los cuales llevan diferentes nombres tales como:
      
      Ensambladores.- Estos existen en gran variedad y en diferentes tipos, de acuerdo a sus particularidades, ya que dentro de los mismos ensambladores, también incluyen varios tipos de niveles de traductores debido a que son de bajo nivel y dependen de las características específicas de cada computadora. Esto hace que se tenga un tipo especial de ensamblador para cada tipo de procesador en particular, dependiendo de su tamaño de palabra, el número de registros internos con los que cuenta, así como características específicas de sus tipos de direccionamiento. Además de las características físicas con las que se diseña un lenguaje ensamblador, estos lenguajes pueden ser identificados de forma genérica, en los siguientes tipos:
      
      Los pseudo-ensambladores o emuladores de ensamblador, un ejemplo de este tipo diseñado para el procesador INTEL modelo 80286 es el programa que se ejecuta como comando externo, conocido como el DEBUG. Otro tipo de ensambladores son los macro ensambladores, también para procesadores INTEL, un ejemplo de este es MASM y los ensambladores en sí.
      
      Es importante hacer la diferencia entre el concepto de ensambladores como procesos y como lenguajes, ya que en el proceso de traducción de un lenguaje de programación de alto nivel se requiere traducir a bajo nivel y para esto se tiene un programa o procesador que por lo general proporcionan los sistemas operativos llamado ensamblador (ASSEMBLER), y este adecua el código de un lenguaje de alto nivel a otro de bajo nivel, mismo que es el que la computadora interpreta y ejecuta.
      
      Los lenguajes ensambladores son a los que nos referimos en la clasificación de los niveles que aquí se describen, ya que un compilador puede incluir una fase de síntesis o ensamble que se describirá con más detalle en las siguientes unidades.
      
      INTÉRPRETES O TRADUCTORES INMEDIATOS.
      Estos tienen como principal característica la posibilidad de emitir una repuesta inmediata (en tiempo real), esto es, para cada instrucción se genera una acción o respuesta que se obtiene de la máquina al mismo tiempo que se realiza la interpretación del código escrito por el usuario programador. Este es un nivel de traducción eficiente y económico, debido a que no requiere gran capacidad de almacenamiento, ya que no genera código intermedio y por eso es eficiente al producir una respuesta inmediata. Su inconveniente es que deja el código fuente a disposición del usuario.
      
      Existen lenguajes como BASIC y C de los cuales se han construido versiones compiladas e intérpretes con respuesta inmediata, la diferencia entre uno y otro es la cantidad de recursos que requiere cada tipo de herramienta y los niveles de traducción que a continuación se describen. Es importante ubicar a los traductores, intérpretes y compiladores como herramientas de desarrollo de programas para la utilización de computadoras cualquiera que sea su capacidad y complejidad. Por lo que se abrevian como herramientas de desarrollo o productividad, existiendo una gran variedad por la combinación de sus características.
      
      Niveles de traducción.- Recordemos la necesidad de realizar una comunicación hombre máquina para poder controlar los trabajos que realiza una computadora.
      
      Para esto ya se explicó que el nivel más alto de traducción es el lenguaje cercano al hombre, los cuales se conocen como lenguajes naturales tales como el inglés, español, francés, alemán, etc.
      
      Estos lenguajes son entendibles para el hombre, pero difíciles de definir en sus reglas gramaticales debido a la gran cantidad de excepciones, así como la variedad de palabras y distintos significados que se requieren para expresar ideas que por lo general están sujetas a un contexto. (Que son un tipo de gramática que se explicará posteriormente).
      
      Ejemplo: “para que tu alma no pene”
      
      El significado de la palabra “pene” en este caso es dependiente del contexto y se tendría que considerar como derivado de pena o penar y no como textualmente se podría considerar, siguiendo tablas de significados donde “pene es el órgano masculino” que no tendría sentido en esta pequeña frase de seis palabras.
      
      Este pequeño ejemplo tiene como objetivo mostrar la complejidad que ofrecen los lenguajes naturales donde siempre se tienen que traducir su significado dependiendo del contexto. Los lenguajes naturales son el más alto nivel dentro de los lenguajes de programación, porque aunque se tienen lenguajes de programación conocidos como de alto nivel tales como el COBOL, FORTRAN, BASIC, mismos que también son compilados, formales y otras más características que se analizarán como caso de estudio en las siguientes unidades. Estos lenguajes sólo utilizan algunas de las millones de palabras que se tienen en el lenguaje natural conocido como inglés.
      
      Recapitulando lo anterior, para poder lograr que la máquina identifique palabras, se necesita establecer reglas gramaticales y realizar procesos tales como:
      
      Codificación, Análisis, Síntesis, estos tres conocidos como traducción y la parte de interpretación o ejecución del código conocido como tiempo de ejecución o RUN TIME.
      
      Codificación es una operación consistente en representar una información o instrucción mediante un código.
      
      Código es un conjunto de reglas que proporcionan una correspondencia biunívoca que permite representar datos, programas y otras informaciones con vistas a facilitar su tratamiento automático o su transmisión.
      
      Análisis es el estudio realizado para separar las distintas partes de un todo.
      Síntesis es la unión de esas partes (o la composición) del todo.
      En la figura 2.10 se presenta un diagrama esquemático de un proceso de codificación, en este se incluye un usuario programador, el cual escribe un código en algún lenguaje de programación. El código se puede introducir directamente en la computadora (de forma interprete) o bien grabar el código en un archivo llamado programa fuente.
      
      `,`https://drive.google.com/file/d/1gPnsNO6zPz0Anz3t6TKL_CT06VfwHX7l/view?usp=drive_link`,`
      
      La codificación es la que realiza el hombre, con conocimientos de programación. Él escribe las instrucciones en la computadora, las cuales se guardan en un archivo conocido como programa fuente o código fuente. Este programa fuente entra a un proceso de análisis y síntesis conocido como compilación, donde además se realiza la labor de análisis de las palabras estructuradas en el código fuente para verificar que sean léxica, semántica y sintácticamente correctas.
      
      Después de realizado lo anterior, si son correctas, pasan a la fase de análisis y después se aceptan para pasar a la siguiente etapa que es de síntesis y generación de un código que será el que la máquina interpretará y ejecutará. De aquí que en esa cantidad de pasos intermedios se tienen una variedad de compiladores que en términos generales y basándonos en sus niveles de traducción, los podemos describir como: Pre-compiladores o Pre-procesadores, Compiladores y Pseudo-compiladores.
      
      Estos conceptos se ilustran a continuación. Los compiladores también se pueden clasificar por el número de pasadas, pero todos estos tipos de compiladores requieren de otro proceso de invocación o ejecución conocido como RUN-TIME. Los dos tiempos que tiene un compilador: COMPILE-TIME y RUN-TIME es otra característica que diferencia a un compilador de un intérprete, ya que éste último solo tiene un tiempo que es una invocación y su inmediata ejecución.
      
      Intérpretes.- Programa que conjunta el tiempo de revisión, análisis, síntesis y ejecución (RUN-TIME), en una sola orden o instrucción. Es eficiente y económico porque no requiere de grandes recursos de almacenamiento y se realiza todo en un solo tiempo.
      
      Compiladores.- Como ya se describió, los diferentes nombres y tipos de compiladores están en función del nivel de traducción que se tiene del código fuente. Cuando el código fuente es de muy alto nivel, por ejemplo, herramientas que se conocen como 5GL (Quinta generación). Que se describirán como los diferentes tipos de lenguajes en la siguiente unidad.
      
      Los lenguajes 5GL pueden requerir de un pre-proceso o etapa previa de adaptación o traducción agregada para disminuir el nivel de 5o a 4o nivel y con esto agregarle instrucciones que completen la información que la computadora requiere.
      
      `,`https://drive.google.com/file/d/12ihKg4vQTBwNg5o-r5AOr-w-mx7drKUd/view?usp=drive_link`,`
      
      El código transformado puede ser un conjunto de instrucciones agregadas al código fuente original, puede ser un código en alto nivel, y solo adecuarlo como es el caso de la compilación que se realiza parcialmente denominada pre-compilación o pseudo- compilación o puede generarse un código conocido como objeto que es el lenguaje de máquina que corresponde al código fuente que el usuario programador escribió.
      
      Sobre los niveles en los lenguajes de programación, ya se había descrito una clasificación sólo de tres niveles:
      
      El alto nivel que corresponde a los lenguajes de programación conocidos como formales y el bajo nivel que corresponde a los lenguajes más cercanos a la arquitectura de la computadora. Pero, dada la diversidad en los lenguajes de programación actuales de los cuales ya son miles. Se han establecido niveles intermedios, como ya se mencionó el ejemplo de un nivel intermedio es el lenguaje C con la variedad de herramientas que se desprenden de este, tales como TURBO C, AWK, C++, gracias a que como ya se mencionó. El lenguaje C y sus derivados, se considera de alto nivel por su facilidad y flexibilidad y de bajo nivel por la posibilidad de administrar los espacios en memoria y su poderío en el uso de recursos computacionales, mismas características que hasta han servido como herramienta para desarrollar el sistema operativo más evolucionado con el que se cuenta actualmente, este es UNIX y sus cientos de clones (el más famoso y actual LINUX).
      
      Otros niveles que a continuación se describen son a juicio particular y temporal, ya que este tema es polémico y no se ha llegado a criterios que se fijen como una norma o estándar para definir a los lenguajes por niveles. Algunos autores en vez de utilizar el término nivel, utilizan el concepto de generaciones de lenguajes de programación, en el entendido de que los lenguajes de programación son todos artificiales o creados por el hombre, diferentes a los lenguajes naturales que se les considera de origen Divino y muchos de los lenguajes naturales se forman de la combinación entre ellos. Con base a lo anterior, sucede algo similar en los lenguajes de programación o artificiales, de los cuales surgen niveles intermedios a lo largo de la historia, mima que se trata de resumir a continuación:
      
      Nivel cero o de más bajo nivel. Este nivel corresponde al lenguaje de máquina, el cual como ya se mencionó, consiste en unos y ceros integrados en códigos diversos, controlados de forma alambrada o bien con micro-instrucciones.
      
      Nivel uno corresponde al lenguaje ensamblador basado en abreviaturas, mnemónicos, mnemotécnicos o mnemoclaves del idioma inglés. Estos son dependientes del hardware y existe un tipo de lenguaje ensamblador para cada tipo de procesador.
      
      Nivel dos o segundo nivel, corresponde al de los lenguajes de programación formales. Estos tienen estructuras y reglas gramaticales muy restrictivas, sólo permiten el uso de datos que se tienen que declarar con anterioridad a su uso (esta es una característica que se conoce como fuertemente “tipeado”) y comprenden un gran número de palabras reservadas o instrucciones particulares para cada lenguaje con formatos específicos, algunos ejemplos de estos lenguajes de segundo nivel son, el compilador de ALGOL, COBOL y FORTRAN. Aquí cabe hacer la aclaración de que algunos autores consideran a este nivel como de primera generación de los lenguajes de programación, considerando solo a los lenguajes de nivel alto como lenguajes, y los del nivel bajo tales como lenguaje de maquina y ensamblador, de bajo nivel, o bien como de nivel cero o generación cero.
      
      Nivel tres, son lenguajes de programación informales que tienen como base la restrictiva formalidad del anterior nivel, pero incluyen estructuras gramaticales más flexibles y dinámicas, mismas que le dan mayor libertad al usuario programador. Aquí nace el lenguaje Basic, después Smalltalk, PASCAL y culmina con el lenguaje C. Al que se le considera también de nivel medio (entre alto y bajo nivel ya mencionado con anterioridad).
      
      Nivel cuatro, conocidos como de cuarta generación, se abrevian como 4GL, estos lenguajes tienen como principal característica facilitarle la labor de codificar al usuario programador. Con esto se crean herramientas como DBASE, SQL, INFORMIX, JAVACREATOR, BLUE JEEN, etc. Estas herramientas son generadoras de código automático. Cabe aclarar que a partir de la tercera, cuarta y quinta generación existe mayor diversidad de opiniones en base a que no se tiene un consenso estándar sobre las características que guarda cada tipo de lenguaje, este tema se hace cada día mas polémico y difícil de definir, se puede decir que al hablar de generaciones o niveles de los lenguajes de programación estamos entrando a un mundo extenso, en constante crecimiento y variabilidad.
      
      Por lo anterior es importante aclarar que se pueden encontrar discrepancias en la forma de clasificar los lenguajes por niveles y generaciones mismas que se puede decir se manejan de forma indistinta en los libros sobre esta materia. Según apreciación personal, es más fina la clasificación de los lenguajes en base a paradigmas de programación y estos son descritos con mayor detalle después de los tipos de traductores sobre los lenguajes.
      
      Es importante concluir que entre más alto es el nivel que alcanza el lenguaje, más pasos intermedios se deben incluir para lograr una traducción e interpretación de la computadora. Por lo anterior, quizá hasta sea necesario crear pre-procesos esto es, procesos previos a la compilación conocidos como pre-compiladores. Este aspecto esta abierto para futuros desarrollos los cuales no presentan un límite, sólo el que la creatividad del programador decida.
      
      Ejemplo de un pre-procesador o pre-compilador:
      
      En el diagrama (Fig 2.12) del lado izquierdo, sólo se esquematiza de forma genérica la función de un pre-proceso que es bajar el nivel del lenguaje a procesar.
      
      En el diagrama (Fig 2.12) del lado derecho se puede observar en el código que se escribe para una herramienta 4GL, solo se tienen dos líneas de instrucciones y en una herramienta 3GL, se agregan más instrucciones para realizar la misma función descrita en la herramienta 4GL, que consiste en tomar la base de datos conocida como clientes “customer” y de ella obtener una lista con el nombre y la dirección de los clientes. Este ejemplo corresponde a: SQL Informix.
      
      `,`https://drive.google.com/file/d/14Yj7PPadOqNsTl3g3K-4QMzyLIIqIMAQ/view?usp=drive_link`,`
      
      El último ejemplo relacionado con los niveles de traducción es el caso de un pseudo-compilador el cual se puede describir como un generador de código intermedio, esto es, se crea un código estándar para lograr algunas ventajas con respecto a la arquitectura de la computadora, de forma muy general tenemos en el siguiente diagrama de bloques (Fig 2.13):
      
      `,`https://drive.google.com/file/d/1lVqmsDZJM40O0bUw_G5BVOS1_3aUA1je/view?usp=drive_link`,`
      
      En este caso el pseudo-compilador es un generador de código intermedio, cuya principal ventaja es su compatibilidad
      
      El ejemplo clásico, conocido y actual de este tipo de herramientas es la máquina virtual de JAVA, donde se tiene un generador de código intermedio conocido con BYTECODE el cual es independiente de la arquitectura del la computadora donde se corre para hacer posible que las aplicaciones corran en cualquier plataforma, lo mismo para UNIX, MACHINTOSH Y MICROSOFT.
      
      Una máquina virtual es una capa intermedia de software que se le agrega al hardware para lograr la compatibilidad y el enmascaramiento o bien el ocultamiento de las particularidades del hardware donde se ejecutan las aplicaciones diseñadas para la máquina virtual en cuestión.
      
      `,`https://drive.google.com/file/d/1LH7FFGbsCEL20-YS3LxO1GwYaaWx4_BN/view?usp=drive_link`,`
      
      Gracias a los pseudo-compiladores se tiene una compatibilidad y transportabilidad (fácil implementación en diferentes plataformas) de los programas que se desarrollen con generación de código intermedio.
      
      Antes de concluir con el tema de los niveles de traducción, el cual esta relacionado con los diferentes tipos de interpretación, es importante remarcar que entre más bajo es el nivel del lenguaje que se utiliza en el programa fuente, más sencillo es el proceso que se realiza para obtener la traducción al lenguaje de máquina.
      
      Otro ejemplo es el codificar un programa fuente al lenguaje ensamblador, donde se tiene solo un proceso para lograr obtener un código de máquina ejecutable. Es importante remarcar la importancia que tiene este tipo de herramientas de bajo nivel, pues siguen dando eficiencia y poderío en el uso de recursos computacionales.
      
      Ya para concluir sobre los niveles de traducción es importante remarcar que con el éxito de la computadora personal, se tienen muchas facilidades en cuanto a herramientas de desarrollo y paqueterías, pero es difícil, por ejemplo, pensar que se tienen microprocesadores con velocidades medibles en gigahertzs (mil millones de Hertzs) y aún no se tiene un ensamblador para procesador INTEL PENTIUM. Por lo que en este tema se pretende aprovechar la necesidad de crear niveles de traducción más eficientes y realizarlos con herramientas de bajo nivel como son los ensambladores.
      
      `,`https://drive.google.com/file/d/1virSoQmSGh29H8P4fC5SmKisdZKVIbVw/view?usp=drive_link`,`
      
      Paradigmas de los lenguajes de programación.- Para completar el tema sobre los niveles de traducción, ya se mencionó que una cualidad más detallada sobre los diferentes lenguajes que se han diseñado hasta la fecha son los paradigmas o modelos a los que responden los actuales lenguajes.
      
      A continuación se da una lista con los paradigmas o modelos que tienen los lenguajes actuales de programación, no sin olvidar que cada día se puede desarrollar un nuevo lenguaje o un nuevo paradigma. Ya que los lenguajes que se conocen hasta la fecha corresponden a los modelos actuales o paradigmas conocidos con la tecnología que existe en este momento, pero estos generarán nuevos modelos, mismos que guardan características heredadas, tal como los hijos se parecen a sus padres.
      
      Los paradigmas conocidos hasta la fecha son:
      
          Imperativo.- Corresponden a la arquitectura de John Von Newmann “programa almacenado en memoria”, con instrucciones estructuradas, funciones y manejo de memoria dinámica con apuntadores a direcciones de memoria que controla el usuario. Ejecución señalizada. Ejemplos: ALGOL, COBOL y FORTRAN.
      
          Funcional (operacional).- Los lenguajes que responden a este modelo optimizan la representación interna de los datos y le dan particular importancia al orden de las decisiones que se toman en la lógica del código. Este paradigma esta basado en la optimización de los datos que se almacenan en memoria. El ejemplo más representativo de este tipo de paradigma es LISP.
      
          Orientado a objetos.- Este quizá es el paradigma más difundido y conocido para los nuevos programadores, ya que pretende facilitar la labor de codificar el detalle de cómo resolver un problema. Los lenguajes orientados a objetos proporcionan una gran cantidad de elementos con los cuales no se tiene que definir el cómo, sólo lo que se desea obtener del lenguaje y aprovechar el encapsulamiento (ocultamiento y protección del código), la inferencia, el paso de mensajes, las clases, subclases, la herencia, etc. El primer lenguaje representativo de este paradigma es el Smalltalk (en 1980), luego C++ (en 1986), el Object Pascal (en 1989), Object Cobol (en 1993) hasta el actual y exitoso Java (en 1995).
      
          Asíncrono.- Este paradigma y el que se describe a continuación corresponde a las nuevas arquitecturas avanzadas de las computadoras, pueden optimizar las características de los microprocesadores con tipo de procesamiento paralelo o vectorial. Este paradigma corresponde a procesos asíncronos (en diferentes tiempos de ejecución) los cuales se hacen posibles mediante la comunicación entre procesos. El lenguaje de programación LINDA es un ejemplo representativo de uno de los lenguajes que agrega estas facilidades, tomando como base a los lenguajes C y FORTRAN.
      
          Síncrono.- En este modelo se tiene un procesamiento paralelo con alto grado de acoplamiento. Debe de haber una sincronía en todos los procesos que se ejecutan al mismo tiempo. Un ejemplo de un lenguaje que corresponde a este paradigma es el ACTUS, Paralation LISP que proveen construcciones independientes de la arquitectura de la computadora.
      
          Funcional (definicional).- Este paradigma ofrece mayores facilidades que el paradigma operacional, pues tiene una gran variedad de funciones que el usuario programador puede utilizar para simplificar su código. Un ejemplo de este tipo de lenguajes es el lenguaje de programación llamado Miranda y el Haskell. Este último es un poliformismo estático (variedad de formas pre-definidas) derivadas de Miranda y ambos lenguajes (Miranda y Haskell) se caracterizan por tener funciones de alto orden, usar datos algebraicos definidos por el usuario y un sistema de clases. También proporciona operadores con re-direccionamiento dinámico (overloading), sistema funcional de entradas y salidas, arreglos funcionales y compilación por separado.
      
          Transformacional.- Este paradigma permite definir reglas sobre argumentos y términos que se re-escriben. El ejemplo representativo de este tipo de lenguaje es Bertrand, que corresponde a la característica de ser un lenguaje de especificación basado en reglas, sobre argumentos y términos que se pueden re-escribir. En los lenguajes restrictivos el usuario programador debe especificar explícitamente los árboles de búsqueda y la propagación restrictiva que es la característica básica de este paradigma transformacional.
      
          Lógico.- Este paradigma emplea la lógica y las reglas de inferencia, tratando de adecuarse al lenguaje natural. El ejemplo representativo de este paradigma es PROLOG y todos sus derivados.
      
          Basado en formas (Form-based).- Este es el paradigma que corresponde a todas las hojas electrónicas de cálculo que se han diseñado, desde Visical, Lotus hasta Excel.
      
          De flujo de datos (dataflow).- Los lenguajes que corresponden a este paradigma se programan a través de elementos gráficos. Un ejemplo de este lenguaje es “Show and Tell”.
      
          Restringido (constraint).- Especifica la relación que debe permanecer. El usuario programador es el responsable de especificar la relación y el sistema es el encargado de mantenerla. Aunque no se tienen muchos lenguajes que respondan a este paradigma, un ejemplo que corresponde a este paradigma es el lenguaje visual ThigLab.
      
          Demostracional.- Mejor conocido como de Query by example. En este paradigma se presenta el “qué quiero?” con un ejemplo y automáticamente se genera código, mismo que le indica a la computadora el cómo obtener lo que quiero con una generación inmediata de resultados.
      
      Otro enfoque de clasificar a los traductores de forma genérica en ciencias de la computación, es definir a los procesadores de lenguajes como aquellos programas destinados a trabajar sobre una entrada que por la forma como ha sido elaborada, pertenece a un lenguaje en particular reconocido o aceptado por el programa en cuestión. Los procesadores de lenguajes se clasifican como traductores o interpretes.
      
      Un traductor es un programa que recibe una entrada escrita en un lenguaje (el lenguaje fuente) a una salida perteneciente a otro lenguaje (el lenguaje objeto), conservando su significado. En términos computacionales esto significa que tanto la entrada como la salida sean capaces de producir los mismos resultados. Un intérprete, por otra parte, no lleva a cabo tal transformación; en su lugar obtiene los resultados conforme va analizando la entrada. Los traductores son clasificados en compiladores, ensambladores y preprocesadores.
      
      Traductor: Es una máquina teórica que tiene como entrada un texto escrito en un lenguaje L1 y como salida un texto escrito en un lenguaje L2. Habitualmente se denomina a L1 lenguaje fuente y a L2 lenguaje objeto.
      
      Las técnicas que se desarrollan en esta asignatura no sólo son válidas para la implementación de compiladores, sino que son aplicables en general a todos los sistemas de procesamiento de lenguajes y de traducción. Estos sistemas pueden ser de distintos tipos:
      
      Traductores de lenguaje natural: Serían los que tradujeran un lenguaje natural en otro (por ejemplo, español a inglés). Esto en la actualidad no se ha conseguido debido fundamentalmente a la ambigüedad del lenguaje natural. Los mayores logros en la materia siempre trabajan con un subconjunto del lenguaje natural, limitando las construcciones sintácticas válidas y/o el vocabulario. Este tema se aborda generalmente mediante técnicas de inteligencia artificial.
      
      Compilador: Es un traductor que convierte un texto escrito en un lenguaje fuente de alto nivel en un programa objeto en código máquina.
      
      Intérprete: Es un traductor que realiza la operación de compilación paso a paso. Para cada sentencia que compone el texto de entrada, se realiza una traducción, ejecuta dicha sentencia y vuelve a iniciar el proceso con la sentencia siguiente. La principal ventaja del proceso de compilación frente al de interpretación es que los programas se ejecutan mucho más rápidamente una vez compilados; por el contrario, es más cómodo desarrollar un programa mediante un intérprete que mediante un compilador puesto que en el intérprete las fases de edición y ejecución están más integradas. La depuración de los programas suele ser más fácil en los intérpretes que en los compiladores puesto que el código fuente está presente durante la ejecución. Estas ventajas pueden incorporarse al compilador mediante la utilización de entornos de desarrollo y depuradores simbólicos en tiempo de ejecución.
      
      Preprocesadores: Procesan un texto fuente modificándolo en cierta forma previamente a la compilación. Por ejemplo, muchos compiladores admiten un conjunto de macroinstrucciones ajenas al lenguaje en sí que indican al compilador si tiene que incluir algún fichero externo, si ha de hacer o no un listado completo de la compilación, etc.
      
      Conversores Fuente-Fuente: (LCP) Traducen un lenguaje fuente de alto nivel a otro (por ejemplo, PASCAL -> C). Una aplicación interesante de la traducción fuente-fuente es el desarrollo e implementación de prototipos de nuevos lenguajes de programación. Así, por ejemplo, si se desea definir un lenguaje especializado puede implementarse rápidamente mediante su traducción a un lenguaje convencional de alto nivel.
      
      Rutinas de análisis de instrucciones: El conjunto de instrucciones del entorno de un sistema operativo constituye un lenguaje que debe ser analizado previamente para realizar las acciones oportunas. Igualmente, ciertos programas como editores de texto, sistemas de diseño asistido, etc., utilizan instrucciones complejas que deben interpretarse adecuadamente.
      
      Ensambladores: Son compiladores cuyo lenguaje de entrada, llamado ensamblador, permite la traducción de cada sentencia fuente a una instrucción en código máquina.
      
      Compilador cruzado: Es el que genera un código objeto ejecutable en un ordenador distinto de aquél en el que se realiza la compilación.
      
      Compilación-Montaje-Ejecución: En las aplicaciones grandes es conveniente fragmentar el programa a realizar en módulos que se compilan por separado, y una vez que estos estén compilados unirlos mediante un programa denominado montador para formar el módulo ejecutable. El montador se encarga, a su vez, de incluir las librerías donde están guardadas las funciones predefinidas de uso común.
      
      Compilación en una o varias pasadas: Se llama pasada a cada lectura que hace el compilador del texto fuente.
      
      Compilación incremental. Este compilador actúa de la siguiente manera. Compila un programa fuente. Caso de detectar errores al volver a compilar el programa corregido sólo compila las modificaciones que se han hecho respecto al primero.
      
      Autocompilador: Es aquél que está escrito en el mismo lenguaje que se pretende compilar. Supongamos, por ejemplo, que queremos desarrollar la versión 2.0 de un compilador Pascal. Dicho compilador generará un código mucho más rápido y eficiente que el que generaba la versión anterior 1.0. Sin embargo, son ya muchas las máquinas (IBM 370, Serie 1, PDP 11, ...) que disponen del antiguo compilador, o que al menos tienen otro compilador Pascal. La mejor opción consiste en escribir el nuevo compilador en Pascal, ya que así podrá (el compilador) ser compilado en las distintas máquinas por los compiladores Pascal ya existentes.
      
      Metacompilador: Es un traductor que tiene como entrada la definición de un lenguaje y como salida el compilador para dicho lenguaje.
      
      Decompilador: Es el que traduce código máquina a lenguaje de alto nivel. Los decompiladores más usuales son los desensambladores, que traducen un programa en lenguaje máquina a otro en ensamblador.
      
      Bootstrapping. Es una técnica muy usada actualmente para el desarrollo de compiladores de lenguajes de alto nivel, en especial si se quiere obtener un autocompilador, o sea, un compilador que se compile a sí mismo.
      
      Para describir el proceso de autocompilación se emplea la notación en T que representa gráficamente los tres lenguajes implicados en el proceso de compilación:
      
      `,`https://drive.google.com/file/d/1WHvVWiChUyBkrlm3XneTT-HzQFK6EK-_/view?usp=drive_link`,`
      
      • Lenguaje fuente: Lenguaje origen que traduce el compilador.
      • Lenguaje objeto: Lenguaje meta, al cuál traduce el compilador.
      • Lenguaje del compilador: Lenguaje en el que está escrito el compilador.
      
      Supongamos que se quiere implementar un nuevo lenguaje A(N) en una máquina determinada. Disponemos solamente de un ensamblador para dicha máquina. En principio parece que la solución es escribir un compilador en lenguaje ensamblador que traduzca desde el lenguaje A(N) al lenguaje máquina LM.
      
      `,`https://drive.google.com/file/d/1afQFVyjN0fR7CkXf41Zup6uXf5KuPSkc/view?usp=drive_link`,`
      
      Esto en la práctica resulta bastante complicado, dado que programar en ensamblador es muy laborioso.
      
      Lo que se hace en estos casos es desarrollar un lenguaje restringido A(1), parecido al A(N) pero más simple, y para este lenguaje escribir el compilador en ensamblador, o en cualquier otro lenguaje soportado por la máquina.
      
      Una vez construido este compilador, y dado que nuestra máquina es ya capaz de entender el lenguaje A(1), se puede desarrollar un compilador para otro lenguaje A(2) escribiéndolo en el lenguaje A(1), y así sucesivamente hasta llegar a obtener un autocompilador del lenguaje A(N). Esta técnica se conoce como bootstrapping.
      
      `,`https://drive.google.com/file/d/1zwNXu-OCx8eEG3YO0L5wZzYFBfqDc9w3/view?usp=drive_link`,`
      
      El primer compilador de Pascal desarrollado en Zurich por Wirth fue posible gracias a esta técnica. El conocido compilador C de GNU emplea también este mecanismo en tres pasos.
      
      Estructura de un compilador.
      
      `,`https://drive.google.com/file/d/1D7cZRDXGGAL89C4yZvTUVRYCv6oQXjTM/view?usp=drive_link`,`
      
      Un compilador es un programa, en el que pueden distinguirse dos subprogramas o fases principales: una fase de análisis, en la cuál se lee el programa fuente y se estudia la estructura y el significado del mismo; y otra fase de síntesis, en la que se genera el programa objeto.
      
      En un compilador pueden distinguirse, además, algunas estructuras de datos comunes, la más importante de las cuales es la tabla de símbolos, junto con las funciones de gestión de ésta y de los demás elementos del compilador, y de una serie de rutinas auxiliares para detección de errores.
      
      Esquema de un compilador.
      Las funciones de estos módulos son las siguientes:
      
      Analizador lexicográfico: Las principales funciones que realiza son:
      • Identificar los símbolos.
      • Eliminar los blancos, caracteres de fin de línea, etc...
      • Eliminar los comentarios que acompañan al fuente.
      • Crear unos símbolos intermedios llamados tokens.
      • Avisar de los errores que detecte.
      
      Ejemplo: A partir de la sentencia en PASCAL:
      
      nuevo := viejo + RAZON*2
      
      genera un código simplificado para el análisis sintáctico posterior, por ejemplo:
      
      <id1> <:=> <id2> <+> <id3> <*> <ent>
      
      Nota: Cada elemento encerrado entre <> representa un único token. Las abreviaturas id y ent significan identificador y entero, respectivamente.
      
      Analizador sintáctico: Comprueba que las sentencias que componen el texto fuente son correctas en el lenguaje, creando una representación interna que corresponde a la sentencia analizada. De esta manera se garantiza que sólo serán procesadas las sentencias que pertenezcan al lenguaje fuente. Durante el análisis sintáctico, así como en las demás etapas, se van mostrando los errores que se encuentran.
      
      Ejemplo: El esquema de la sentencia anterior corresponde al de una sentencia de asignación del lenguaje Pascal. Estas sentencias son de la forma: <id> <:=> <EXPRESION> y la parte que se denomina <EXPRESION> es de la forma:
      
      • <id> <+> <EXPRESION> o bien
      • <id> <*> <EXPRESION> o bien
      • <real>
      
      La estructura de la sentencia queda, por tanto, de manifiesto mediante el siguiente esquema:
      
      `,`https://drive.google.com/file/d/10FWIreNYOd3v-kzszHomHnKStDdD0I-T/view?usp=drive_link`,`
      
      Análisis semántico: Se ocupa de analizar si la sentencia tiene algún significado. Se pueden encontrar sentencias que son sintácticamente correctas pero que no se pueden ejecutar porque carecen de sentido. En general, el análisis semántico se hace a la par que el análisis sintáctico introduciendo en éste unas rutinas semánticas.
      
      Ejemplo: En la sentencia que se ha analizado existe una variable entera. Sin embargo, las operaciones se realizan entre identificadores reales, por lo que hay dos alternativas: o emitir un mensaje de error "Discordancia de tipos", o realizar una conversión automática al tipo superior, mediante una función auxiliar inttoreal.
      
      `,`https://drive.google.com/file/d/1CYtiKHLaNdnU9bSlciZ1lGqQs9hKthg4/view?usp=drive_link`,`
      
      Generador de código intermedio: El código intermedio es un código abstracto independiente de la máquina para la que se generará el código objeto. El código intermedio ha de cumplir dos requisitos importantes: ser fácil de producir a partir del análisis sintáctico, y ser fácil de traducir al lenguaje objeto. Esta fase puede no existir si se genera directamente código máquina, pero suele ser conveniente emplearla.
      
      Ejemplo: Consideremos, por ejemplo, un código intermedio de tercetos, llamado así porque en cada una de sus instrucciones aparecen como máximo tres operandos. La sentencia traducida a este código intermedio quedaría:
      
      • temp1 := inttoreal (2)temp2 := id3 * temp1temp3 := id2 + temp2id1 := temp3
      
      Optimizador de código: A partir de todo lo anterior crea un nuevo código más compacto y eficiente, eliminando por ejemplo sentencias que no se ejecutan nunca, simplificando expresiones aritméticas, etc. La profundidad con que se realiza esta optimización varía mucho de unos compiladores a otros. En el peor de los casos esta fase se suprime.
      
      Ejemplo: Siguiendo con el ejemplo anterior, es posible evitar la función inttoreal mediante el cambio de 2 por 2.0, obviando además una de las operaciones anteriores. El código optimizado queda como sigue:
      
      • temp1 := id3 * 2.0id1 := id2 + temp1
      
      Generador de código: A partir de los análisis anteriores y de las tablas que estos análisis van creando durante su ejecución produce un código o lenguaje objeto que es directamente ejecutable por la máquina. Es la fase final del compilador. Las instrucciones del código intermedio se traducen una a una en código máquina reubicable.
      
      Nota: Cada instrucción de código intermedio puede dar lugar a más de una de código máquina.
      
      Ejemplo: El código anterior traducido a ensamblador DLX quedaría:
      
      • LW R1,id3 MUL R1,R1,2 LW R2,id2 ADD R2,R2,R1 SW id1,R2
      
      En donde id1, id2 y id3 representan las posiciones de memoria en las que se hallan almacenadas estas variables; R1 y R2 son los registros de la máquina; y las instrucciones LW, SW, MUL y ADD representan las operaciones de colocar un valor de memoria en un registro, colocar un valor de un registro en memoria, multiplicar en punto flotante y sumar, respectivamente.
      
      La tabla de símbolos: Es el medio de almacenamiento de toda la información referente a las variables y objetos en general del programa que se está compilando.
      
      Ejemplo: Hemos visto que en ciertos momentos del proceso de compilación debemos hacer uso de cierta información referente a los identificadores o los números que aparecen en nuestra sentencia, como son su tipo, su posición de almacenamiento en memoria, etc. Esta información es la que se almacena en la tabla de símbolos.
      
      Rutinas de errores: Están incluidas en cada uno de los procesos de compilación (análisis lexicográfico, sintáctico y semántico), y se encargan de informar de los errores que encuentran en texto fuente.
      
      Ejemplo: El analizador semántico podría emitir un error (o al menos un aviso) cuando detectase una diferencia en los tipos de una operación.6
      
      ENSAMBLADOR:
      Un ensamblador es el programa encargado de llevar a cabo un proceso denominado de ensamble o ensamblado. Este proceso consiste en que, a partir de un programa escrito en lenguaje ensamblador, se produzca el correspondiente programa en lenguaje máquina (sin ejecutarlo), realizando:
      
      • La integración de los diversos módulos que conforman al programa.
      • La resolución de las direcciones de memoria designadas en el área de datos para el almacenamiento de variables, constantes y estructuras complejas; así como la determinación del tamaño de éstas.
      • La identificación de las direcciones de memoria en la sección de código correspondientes a los puntos de entrada en saltos condicionales e incondicionales junto con los puntos de arranque de las subrutinas.
      
      • La resolución de los diversos llamados a los servicios o rutinas del sistema operativo, código dinámico y bibliotecas de tiempo de ejecución.
      • La especificación de la cantidad de memoria destinada para las áreas de datos, código, pila y montículo necesaria y otorgada para su ejecución.
      • La incorporación de datos y código necesarios para la carga del programa y su ejecución.
      
      Turbo Assembler.- De Borland Intl., es muy superior al Turbo Editassm. Trabaja de la misma forma, pero proporciona una interfaz mucho más fácil de usar y un mayor conjunto de utilerías y servicios.
      
      Un precompilador, también llamado preprocesador, es un programa que se ejecuta antes de invocar al compilador. Este programa es utilizado cuando el programa fuente, escrito en el lenguaje que el compilador es capaz de reconocer (de aquí en adelante denominado lenguaje anfitrión-- en inglés host language), incluye estructuras, instrucciones o declaraciones escritas en otro lenguaje (el lenguaje empotrado-- en inglés embeded language). El lenguaje empotrado es siempre un lenguaje de nivel superior o especializado (e.g. de consulta, de cuarta generación, simulación, cálculo numérico o estadístico, etcétera). Siendo que el único lenguaje que el compilador puede trabajar es aquel para el cual ha sido escrito, todas las instrucciones del lenguaje empotrado deben ser traducidas a instrucciones del lenguaje anfitrión para que puedan ser compiladas. Así púes un precompilador también es un traductor.
      
      Los precompiladores son una solución rápida y barata a la necesidad de llevar las instrucciones de nuevos paradigmas de programación (e.g. los lenguajes de cuarta generación), extensiones a lenguajes ya existentes (como el caso de C y C++) y soluciones de nivel conceptual superior (por ejemplo paquetes de simulación o cálculo numérico) a código máquina utilizando la tecnología existente, probada, optimizada y confiable (lo que evita el desarrollo de nuevos compiladores). Facilitan la incorporación de las nuevas herramientas de desarrollo en sistemas ya elaborados (por ejemplo, la consulta a bases de datos relacionales substituyendo las instrucciones de acceso a archivos por consultas en SQL).
      
      Resulta común encontrar que el flujo de proceso en los lenguajes de cuarta generación o de propósito especial puede resultar demasiado inflexible para su implantación en los procesos de una empresa, flujos de negocio o interacción con otros elementos de software y hardware, de aquí que se recurra o prefiera la creación de sistemas híbridos soportados en programas elaborados en lenguajes de tercera generación con instrucciones empotradas de nivel superior o propósito especial.
      
      Un pseudocompilador es un programa que actúa como un compilador, salvo que su producto no es ejecutable en ninguna máquina real sino en una máquina virtual. Un pseudocompilador toma de entrada un programa escrito en un lenguaje determinado y lo transforma a una codificación especial llamada código de byte. Este código no tendría nada de especial o diferente al código máquina de cualquier microprocesador salvo por el hecho de ser el código máquina de un microprocesador ficticio. Tal procesador no existe, en su lugar existe un programa que emula a dicho procesador, de aquí el nombre de máquina virtual.
      
      La ventaja de los pseudocompiladores que permite tener tantos emuladores como microprocesadores reales existan, pero sólo se requiere un compilador para producir código que se ejecutará en todos estos emuladores. Este método es una de las respuestas más aceptadas para el problema del tan ansiado lenguaje universal o código portable independiente de plataforma.
      
      Un intérprete es un programa que ejecuta cada una de las instrucciones y declaraciones que encuentra conforme va analizando el programa que le ha sido dado de entrada (sin producir un programa objeto o ejecutable). La ejecución consiste en llamar a rutinas ya escritas en código máquina cuyos resultados u operaciones están asociados de manera unívoca al significado de las instrucciones o declaraciones identificadas.
      
      Los intérpretes son útiles para el desarrollo de prototipos y pequeños programas para labores no previstas. Presentan la facilidad de probar el código casi de manera inmediata, sin tener que recurrir a la declaración previa de secciones de datos o código, y poder hallar errores de programación rápidamente. Resultan inadecuados para el desarrollo de complejos o grandes sistemas de información por ser más lentos en su ejecución.
      
      Los programas interpretados suelen ser más lentos que los compilados, pero los intérpretes son más flexibles como entornos de programación y depuración.
      Comparando su actuación con la de un ser humano, un compilador equivale a un traductor profesional que, a partir de un texto, prepara otro independiente traducido a otra lengua, mientras que un intérprete corresponde al intérprete humano, que traduce de viva voz las palabras que oye, sin dejar constancia por escrito.
      
      COMPILADOR:
      Un compilador es un programa que recibe como entrada un programa escrito en un lenguaje de nivel medio o superior (el programa fuente) y lo transforma a su equivalente en lenguaje ensamblador (el programa objeto), e inclusive hasta lenguaje máquina (el programa ejecutable) pero sin ejecutarlo. Un compilador es un traductor. La forma de como llevará a cabo tal traducción es el objetivo central en el diseño de un compilador.
            `
          ]
        },
      
        {
          contenido_id: 7,
          titulo: 'Ejercicios de repaso para la Unidad II',
      area: AreaComputacion.TEORIA_COMPUTACION,
          descripcion: 'pendiente',
          tipo: TipoContenido.LECCION,
          orden: 6,
          url_recurso: null,
          unidad_id: 2,
          unidad: { unidad_id: 2, nombre: 'UNIDAD II - TRADUCTORES' },
          contenido: [
            `
          1. Menciona ¿cuáles son las materias de las que se tiene que tener conocimiento previo para poder construir un compilador?
          2. ¿Qué es un símbolo?
          3. ¿Qué es una cadena?
          4. ¿Qué es un alfabeto?
          5. ¿Qué es un lenguaje?
          6. Explica ¿qué es el lenguaje vacío?
          7. ¿Qué es una gramática?
          8. Menciona los 4 tipos de lenguajes definidos por Chomsky.
          9. De que trata el teorema de la Jerarquía.
          10. ¿Qué es un autómata finito?
          11. ¿Qué es un autómata finito determinista?
          12. ¿Cuáles son los elementos que componen a un AFD?
          13. Construir el diagrama de transición para el lenguaje dado por c* (a U bc*)*. Convertir el diagrama en una tabla que representa las funciones de transición entre los estados.
          14. ¿La siguiente figura es un diagrama de transición correspondiente a un AFD? ¿Por qué o por qué no?
          
          `,`https://drive.google.com/file/d/1lkA24S3OmGO8Ovd46FwjBI8p2hXns_3e/view?usp=drive_link`,`
      
          15. Construir un AFD y el diagrama de transición asociado que acepte el lenguaje (ab U aba)*.
          16. Obtener un AFN que acepte el lenguaje ab* U ab*a.
          17. Sea M un AFN dado por Q = {q0, q1}, Σ = {a, b}, S = q0, F = {q1} y la siguiente Δ, determinar si aab, ba y bba están en L(M). Dibujar el diagrama de transición para M.
      
          `,`https://drive.google.com/file/d/1FmICofpBwZeV50qzzSK74krxiwTTsABQ/view?usp=drive_link`,`
      
          18. ¿Por qué es un autómata de ε transiciones?
          19. Para el siguiente autómata obtener su tabla de transición Δ y su lenguaje que genera.
      
          `,`https://drive.google.com/file/d/1PfDAtAZHtBVV8zfvlirrWrqG9bX5cwUs/view?usp=drive_link`,`
      
          20. ¿Qué es un árbol?
          21. ¿Cuál es la aplicación de un árbol en el desarrollo de un compilador?
          22. ¿Qué es un árbol binario?
          23. ¿Cuál es la analogía que hay entre recorridos y elementos de un árbol?
          24. ¿Cuáles son los recorridos más comunes en un árbol?
          25. ¿Cuáles son los recorridos que se hacen siguiendo su estructura recursiva?
          26. ¿Cuál es el convenio principal en el recorrido de un árbol?
          27. ¿Cuáles son los componentes principales de un árbol?
          28. Define el recorrido de preorden.
          29. Define el recorrido de orden central.
          30. Define el recorrido de postorden.
          31. Define el recorrido de orden central.
          32. Elabora el árbol para la siguiente expresión: a := b+c*d
          33. Elabora los siguientes recorridos para la expresión anterior:
              • a) Preorden
              • b) Postorden
              • c) Orden Central
          34. Investigar las funciones que realiza un ensamblador.
          35. Realizar un cuadro resumen con las características más relevantes (diferencias y analogías) o bien ventajas y desventajas entre un compilador y un intérprete.
          36. Elaborar una lista con la mayor cantidad de lenguajes de programación que ejemplifiquen los niveles mencionados en esta unidad.
          37. Ampliar la lista de los lenguajes que sirven como ejemplo en la clasificación de paradigmas.
          38. Investigar sobre los atributos de un buen lenguaje de programación (al menos diez)
          39. Investigar o encontrar de forma personal las ventajas del estudio de los lenguajes de programación.
          40. Identificar al menos tres mitos relacionados con el diseño de compiladores.
          41. Investigar sobre los aspectos comerciales y de desarrollo de la Ingeniería de Software.
          42. Investigar sobre productos comerciales (ensambladores) para microprocesadores.
          43. Investigar algunos aspectos básicos sobre el uso de DEBUG del MS-DOS.
            `
          ]
        },
      
        // ── UNIDAD III ───────────────────────────────────────────
        {
          contenido_id: 8,
          titulo: '3.1 Lenguajes',
      area: AreaComputacion.TEORIA_COMPUTACION,
          descripcion: 'pendiente',
          tipo: TipoContenido.LECCION,
          orden: 1,
          url_recurso: null,
          unidad_id: 3,
          unidad: { unidad_id: 3, nombre: 'UNIDAD III - LENGUAJES' },
          contenido: [
            `
      Existen diversas definiciones que se dan para explicar el significado de la palabra lenguaje, a continuación comentaremos algunas. Primeramente tenemos una definición general:
      
      “Lenguaje: Medio de comunicación entre los seres humanos a través de signos orales y escritos que poseen un significado. En un sentido más amplio, es cualquier procedimiento que sirve para comunicar ideas o sentimientos. El lenguaje es la capacidad humana que conforma al pensamiento o a la cognición, es por ello que se tiene un lenguaje hablado y un lenguaje escrito.”
      
      Desde el punto de vista de la informática tenemos la siguiente definición:
      
      “Lenguaje: Se refiere a cualquier conjunto de cadenas de un alfabeto fijo.”
      
      Al paso del tiempo los lenguajes han evolucionado y esto lo podemos observar en la diversidad de alfabetos que se han creado en base a ellos.
      Podemos considerar que cualquier lenguaje cae dentro de la clasificación de cualquiera de los siguientes grupos:
      • Lenguajes Humanos (Naturales):
      
      Este grupo se creo desde el momento en que el hombre tuvo la necesidad de compartir o de dar a conocer sus ideas, por lo que no se tiene un origen preciso de su aparición. También los podemos considerar como lenguajes naturales; en la actualidad podemos decir que inglés, francés, español, etc., pertenecen a este grupo.
      • Lenguajes Artificiales:
      
      Este grupo ha sido creado por el mismo ser humano, con el objetivo de poder entablar una comunicación directa con diversos objetos, de entre los cuales encontramos a las computadoras. Dentro de esta clasificación de lenguajes, tenemos dos divisiones:
      
      Los lenguajes de alto nivel: los podemos definir, como un lenguaje simbólico en el que una instrucción de programa fuente da lugar a varias instrucciones de lenguaje máquina, debido a que es compilado o interpretado.
      
      El lenguaje máquina, es en otras palabras, el lenguaje específico de las computadoras, en el que las instrucciones se expresan en código binario directamente asimilable por la máquina.
      
      En estos apuntes principalmente hablaremos del segundo grupo, el de los Lenguajes Artificiales, conocidos también como Lenguajes de Programación de Alto Nivel o bien Simbólicos; esto se debe a que no son directamente utilizados por las computadoras, sino que primero pasan por un proceso de traducción, un proceso de ensamble, hasta llegar al punto en que son comprendidos por las computadoras.
      
      Podemos definir Lenguajes de Programación como un conjunto de reglas y elementos gramaticales, de los que un usuario programador dispone para escribir un conjunto de instrucciones o indicaciones para la realización de una labor específica en la resolución de un problema.
      
      Como se ha visto hasta este momento, los lenguajes se pueden clasificar por alguna de las siguientes maneras:
      • Niveles.
      • Generaciones.
      • Modelos de Interpretación.
      • Aplicación.
      • Tipos.
      • Paradigmas.
      
      Es por ello que tenemos como ejemplo los siguientes lenguajes:
      • Lenguajes Específicos conocidos como Metalenguajes.
      • Lenguajes de Presentación y Formateo de Datos como el lenguaje de marcación de hipertextos HTML.
      • Lenguajes de Definición de Datos como XML.
      • Lenguajes de Propósito General como C, Pascal, Visual Basic, ...
      • Lenguajes Orientados a Objetos como C++ y Java.
      • Lenguajes Orientados a la Inteligencia Artificial como Lisp.
      
      Ya que hemos tocado el tema de los Lenguajes, sus paradigmas, continuaremos viendo los Lenguajes Formales y su representación matemática.
      `
          ]
        },
      
        {
          contenido_id: 9,
          titulo: '3.2 Lenguajes Formales y Naturales',
      area: AreaComputacion.TEORIA_COMPUTACION,
          descripcion: 'pendeinte',
          tipo: TipoContenido.RECURSO,
          orden: 2,
          url_recurso: null,
          unidad_id: 3,
          unidad: { unidad_id: 3, nombre: 'UNIDAD III - LENGUAJES' },
          contenido: [
            `
      Podemos definir a un Lenguaje Formal, como aquel que se construye en base a reglas gramaticales, el cual tiene una sintaxis, misma que corresponde a la forma de los programas y una semántica o significado del lenguaje. Para especificar la sintaxis de un lenguaje, se presenta una notación muy usada llamada Gramática Independiente del Contexto (GIC), dada la simplicidad de la misma. Esta representación gramatical se abrevia como BNF (Forma Backus-Naur) o bien BNFE (Forma Extendida de Backus-Naur).
      
      Mencionaremos que una Gramática Independiente del Contexto tiene cuatro componentes:
      • Un conjunto de símbolos terminales.
      • Un conjunto de símbolos no terminales.
      • Un conjunto de producciones (donde cada producción tiene un símbolo no terminal en su parte izquierda y un conjunto de terminales o terminales en su parte derecha).
      • Un símbolo inicial o generador de la gramática (no terminal).
      
      Con las notaciones disponibles hoy en día, es mucho más difícil describir la semántica de un lenguaje que su sintaxis. Por lo que para especificar la semántica del lenguaje se usarán descripciones informales con ejemplos.
      
      Por semántica entenderemos que es la definición del significado de un elemento del lenguaje que se puede realizar de diferentes formas. Y como sintaxis entenderemos que es la que especifica como se pueden construir los programas en ese lenguaje, permitiéndose solo el uso de determinadas combinaciones de símbolos seleccionados y palabras clave.
      
      • Lenguaje de programación.
      Anteriormente se dio una definición de lo que es un lenguaje de programación, ahora es conveniente dar una definición formal que se presenta a continuación de lo que es un lenguaje de programación y esta es:
      
      “Un lenguaje es un conjunto de elementos, en el entendido de que dicho conjunto tiene...
      
      1. Una descripción, misma que puede ser explícita o implícita.
      
      Si es explícita se tiene que para el conjunto A que representa los diez dígitos del sistema decimal tenemos:
      A = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
      
      Ejemplo de una definición implícita para el mismo conjunto A ya definido tenemos:
      A = {0, 1, 2, ...,9}
      
      También se puede hacer una descripción a través de predicados de donde el mismo conjunto A queda:
      A = {x | x es un dígito} o también A = {x | 0≤ x ≤ 9 y x ε N }
      
      Esto se lee, como el conjunto de elementos donde “x” es el elemento de A tal que “x” es un dígito. O también como el conjunto donde x es el elemento de A tal que esta comprendido entre o y 9 inclusive y que además pertenece al conjunto de los números Naturales
            
      `,`https://drive.google.com/file/d/1F_vnsilJJUfdgupfsKIHMOtQPeuDWRYS/view?usp=sharing`,`      
            
      • Gramáticas
      Una Gramática es la descripción de forma natural de la estructura jerárquica de muchas construcciones de los lenguajes de programación. Los componentes que tiene son:
      
      1. Componentes léxicos terminales.
      
      Son todas aquellas cadenas o conjuntos de caracteres que conforman a los elementos terminales, se ubican del lado izquierdo de las reglas de producción.
      
      2. Componentes léxicos no terminales.
      
      Pueden ser:
      a) Lo que se conoce como instrucciones, palabras clave o palabras reservadas que se aceptan con identificar los caracteres que las identifican en el orden determinado en la sintaxis del lenguaje.
      b) También pueden ser identificadores o ciertos parámetros y elementos que se verificarán como elementos léxicos ubicados en la nomenclatura BNF como el lado derecho de la producción. Estas son todas aquellas cadenas (separadas por espacios) los cuales necesitan una definición detallada posterior en los elementos terminales misma que se ubica en el lado izquierdo de las reglas de producción.
      
      3. Reglas de producción.
      
      Consta de tres elementos, el primero es el elemento léxico no terminal (lado izquierdo) la simbología que representa lo que produce cada elemento no terminal y el conjunto de elementos no terminales (lado derecho).
      
      4. La denominación de uno de los no terminales.
      
      Para identificar los cuatro elementos anteriores tenemos el siguiente ejemplo:
      Mueve A, B → Esto significa que el contenido de la dirección A será asignado al contenido de la dirección B.
      
      Para representar la gramática de esta única instrucción de: “Mueve” entre las variables “A” y “B” considerados como identificadores o direcciones tenemos la definición gramatical siguiente:
      
      <Mueve>::=<Mueve><literal>, <literal>..........(1)
      <Mueve>::=<Mueve>|<mueve>|<MUEVE>.... (2)
      <literal>::={A, B, C, ... , Z | a, b, c, ... , z}.......(3)
      
      Según esta breve notación BNF, la primera regla de producción (1) significa que en la construcción gramatical de la instrucción “MUEVE” se acepta la palabra reservada seguida de una literal, una como requerida y otra literal.
      
      La regla de producción (2) indica que se aceptan las cadenas de caracteres “Mueve” (iniciando con una mayúscula y luego minúscula), “mueve” (solo con minúsculas) y “MUEVE” (solo con mayúsculas) si se introduce cualquier otra cadena, el lenguaje la rechazará.
      
      La regla de producción (3) indica que como identificadores de literal se acepta de forma implícita cualquier carácter alfabético de la A a la Z tanto con mayúsculas como con minúsculas.
      
      En las tres reglas de producción se tiene un lado derecho del símbolo ::= y un lado izquierdo.
      
      El lado derecho representa el primer elemento no terminal, mismo que se tiene que escribir con detalle en las siguientes reglas de producción. Este primer elemento léxico no terminal tendrá su descripción detallada en las siguientes reglas de producción al lado derecho hasta llegar al nivel terminal de dígitos o caracteres o símbolos que integran las cadenas no terminales.
      
      • Jerarquía de Chomsky
      Noam Chomsky es profesor de lingüística y activista político estadounidense, nacido el 7 de diciembre de 1928 en Filadelfia, Pennsylvania, en 1955 se doctoró en la universidad de Pennsylvania y fue profesor e investigador del MIT (Massachussets Institute of Technology)
      
      Se le considera fundador de la Gramática generativa transformacional, que es un sistema de análisis del lenguaje y que ha revolucionado la lingüística. Chomsky cree que el lenguaje es consecuencia de una facultad humana innata y que por lo tanto, la finalidad de la lingüística consiste en determinar qué propiedades universales existen y también en establecer la "gramática universal" que pudiera explicar el amplio espectro que abarca todas las lenguas humanas posibles.
      
      Chomsky con sus trabajos contribuyó en la sistematización de la sintaxis de los lenguajes de programación y métodos de análisis sintáctico. Chomsky hizo una clasificación jerárquica de distintos tipos de gramáticas formales que generan lenguajes formales.
            
      `,`https://drive.google.com/file/d/1E-WAk1C3XSuJiyCRuoqDGotsmLz291ys/view?usp=drive_link`,`
      
      Lenguajes Recursivamente Enumerables (de tipo 0).- No existen reglas compresoras, salvo, opcionalmente, la que deriva el axioma a la palabra vacía.
      • Lenguajes Dependientes del Contexto (sensibles al contexto, de tipo 1).- Existen reglas en las que un símbolo no terminal puede derivar a formas sentenciales distintas, según los símbolos que aparezcan a su alrededor
      • Lenguajes Independientes del Contexto (de contexto libre, de tipo 2).- La mayoría de los lenguajes de programación entran en ésta categoría.
      • Lenguajes Regulares (de tipo 3).- Se pueden expresar también mediante expresiones regulares.
      
      Teorema de la Jerarquía: Sobre un alfabeto dado, el conjunto de los lenguajes recursivamente enumerables (tipo 0) contienen propiamente al conjunto de los lenguajes sensibles al contexto (tipo 1), que contiene propiamente al conjunto de los lenguajes independientes del contexto (tipo 2), que a su vez contienen propiamente a los lenguajes regulares (tipo 3).
      
      `,`https://drive.google.com/file/d/1cKLp7QYnableHr51dOYRg6VvspNdANKs/view?usp=drive_link`,`
      
      Especialmente resaltaremos que en el año de 1956 Chomsky introdujo las gramáticas independientes del contexto como parte de un estudio sobre los lenguajes naturales. Su utilización para especificar la sintaxis de los lenguajes de programación surgió independientemente, mientras trabajaba en el borrador de ALGOL 60, John Backus “adaptó de inmediato (las producciones de Emil Post) a ese uso”. La notación resultante fue una variante de las gramáticas independientes del contexto.
      
      3.2 Lenguajes Naturales 
      
      • Concepto
      Podemos definir como lenguajes naturales a todos aquellos que utilizan los humanos para comunicarse, tales como el Chino, Japonés, Español, Inglés, Francés, Italiano, Portugués, etc. Estos tienen reglas gramaticales regidas por la sintaxis y la semántica de cada uno, esta siempre ligada a un contexto. Por su gran cantidad de lenguajes naturales, expresiones idiomáticas, y excepciones a las reglas antes mencionadas, se tiene gran complejidad, misma que es motivo de estudio de la inteligencia artificial.
      
      • Ambigüedades
      En el manejo de cualquier lenguaje natural se tiene este problema, la ambigüedad significa que de una palabra se pueden tener distintas interpretaciones y su significado queda incierto, dudoso y poco claro, como un ejemplo podemos decir de la palabra “papa”.
            `
          ]
        },
      
        {
          contenido_id: 10,
          titulo: '3.3 Comunicación Hombre-Máquina y Ergonomía',
      area: AreaComputacion.TEORIA_COMPUTACION,
          descripcion: 'pendiente',
          tipo: TipoContenido.RECURSO,
          orden: 4,
          url_recurso: null,
          unidad_id: 3,
          unidad: { unidad_id: 3, nombre: 'UNIDAD III - LENGUAJES' },
          contenido: [
            `
      Por todo lo que hemos visto, podemos decir que la comunicación hombre máquina se logra creando los lenguajes de programación, los cuales son un tipo muy especial de software que permite al hombre dar instrucciones a la máquina de una forma factible, estructurada, ordenada, siguiendo las reglas gramaticales que el mismo hombre diseña para su fácil utilización y para lograr resolver cualquier tipo de programas.
      
      “Es un conjunto de estudios e investigaciones sobre la organización metódica del trabajo y el acondicionamiento del equipo en función de las posibilidades del hombre. Búsqueda de una mejor adaptación entre una función, un hardware y el usuario; cualidad de un hardware así concebido.”
      
      Esta definición tomada del diccionario, se aplica a los aspectos físicos o hardware, pero actualmente la parte que ha tenido que evolucionar tan vertiginosamente como la tecnología lo exija, es el elemento lógico o software, mismo que es el aspecto al que pertenecen los lenguajes de programación.
      
      Los lenguajes de programación buscan hoy en día darle mayor comodidad al hombre, simplicidad, amigabilidad, portabilidad y sobre todo, posibilidades de hacer eficiente su trabajo con poco esfuerzo.
            `
          ]
        },
      
        {
          contenido_id: 11,
          titulo: 'Ejercicios de repaso para la Unidad III',
      area: AreaComputacion.TEORIA_COMPUTACION,
          descripcion: 'pendiente',
          tipo: TipoContenido.TAREA,
          orden: 5,
          url_recurso: null,
          unidad_id: 3,
          unidad: { unidad_id: 3, nombre: 'UNIDAD III - LENGUAJES' },
          contenido: [
            `
      1. Realizar una investigación en fuente de información bibliográfica sobre las gramáticas en los lenguajes de programación actuales.
      
      2. Investigar sobre la ambigüedad en las gramáticas de los lenguajes de programación.
      
      3. Mostrar con un ejemplo el concepto de ambigüedad en las gramáticas.
            `
          ]
        },
      
        // ── UNIDAD IV ────────────────────────────────────────────
        {
          contenido_id: 12,
          titulo: '4.1 Proceso de Interpretación',
      area: AreaComputacion.TEORIA_COMPUTACION,
          descripcion: 'pendiente',
          tipo: TipoContenido.LECCION,
          orden: 1,
          url_recurso: null,
          unidad_id: 4,
          unidad: { unidad_id: 4, nombre: 'UNIDAD IV - EL COMPILADOR' },
          contenido: [
            `
      Un compilador es un programa que recibe como entrada un programa escrito en un lenguaje X y deja otro programa escrito en un lenguaje Y. Es usual que se realicen compiladores que logren la traducción de un lenguaje de nivel medio o superior (el programa fuente) y lo transforma a su equivalente en lenguaje ensamblador (el programa objeto), e inclusive hasta lenguaje máquina (el programa ejecutable) pero sin ejecutarlo.
      Un compilador es un traductor. La forma de cómo llevará a cabo tal traducción es el objetivo central en el diseño de un compilador.
      
      `,`https://drive.google.com/file/d/1wm7wxREdSz0QAwBFZfuOS3abOgljQcrC/view?usp=drive_link`,`
      
      Aunque es equivocado, es común encontrar referencias en documentación de productos, publicidad y textos (inclusive escuchar a la gente del medio informático), utilizando los términos traductor, compilador e intérprete de una forma libre e indistinta. Estas palabras no se utilizan para identificar de manera genérica a un programa que nos permitiría poder programar una computadora. Debemos ser precisos al emplear estas palabras, ya que se refieren a programas de distinta naturaleza que realizan labores encaminadas a un objetivo específico y particular. Aunque la conducta manifestada pueda ser similar, su comportamiento interno definitivamente es diferente.
      
      Genéricamente hablando, en ciencias de la computación, lo procesadores de lenguajes son aquellos programas destinados a trabajar sobre una entrada que, por la forma en la que ha sido elaborada, pertenece a un lenguaje en particular reconocido o aceptado por el programa en cuestión. Los procesadores de lenguajes se clasifican como traductores o intérpretes.
      
      Un traductor es un programa que recibe una entrada escrita en un lenguaje (el lenguaje fuente), a una salida perteneciente a otro lenguaje (el lenguaje objeto), conservando su significado. En términos computacionales esto significa que tanto la entrada como la salida sean capaces de producir los mismos resultados. Un intérprete, por otra parte, no lleva a cabo tal transformación; en su lugar obtiene los resultados conforme va analizando la entrada. Los traductores son clasificados en compiladores, ensambladores y pre- procesadores.
      
      Un ensamblador es el programa encargado de llevar a cabo un proceso denominado de ensamble o ensamblado.
      `
          ]
        },
      
          {
          contenido_id: 13,
          titulo: '4.2 Proceso de Compilación',
      area: AreaComputacion.TEORIA_COMPUTACION,
          descripcion: 'pendiente',
          tipo: TipoContenido.LECCION,
          orden: 2,
          url_recurso: null,
          unidad_id: 4,
          unidad: { unidad_id: 4, nombre: 'UNIDAD IV - EL COMPILADOR' },
          contenido: [
            `
      Lo primero que hace es el reconocimiento de caracteres para identificar que las instrucciones que introdujo el usuario programador estén léxica y sintácticamente de acuerdo al lenguaje de programación.
      
      Después realiza un manejo de errores y consulta a la tabla de símbolos para avisar que el usuario programador realice su corrección.
      
      Una vez corregidos los errores y comprobada la fase de análisis, se realiza una traducción o conversión de un código a otro cercano a la máquina en la fase de síntesis.
      
      El código que se produce de este proceso es estático, pues el código que se genera en la traducción tiene posteriormente que invocarse o ejecutarse para obtener una acción o resultado.
      
      En la invocación del código se tiene una alta eficiencia, pues éste ya esta en lenguaje de máquina y adecuado para obtener una respuesta más eficiente, que la que se obtiene en un intérprete.
      
      Lo anterior se trata de esquematizar en el siguiente diagrama de la figura 4.1
      
      `,`https://drive.google.com/file/d/1x4mX5KhYP8eSQ45xGWmMaA2twK1-sai0/view?usp=drive_link`,`
      
      Fases y Componentes.- Como ya se describió un compilador puede tener dos fases: La fase de análisis y la de síntesis.
      Dentro de la fase de análisis esta el análisis léxico, sintáctico y semántico (conceptos que se describen más adelante). Con un manejo de errores y consulta en la tabla de símbolos.
      
      `,`https://drive.google.com/file/d/1cnVEXRBY_DgAGxFKsCv3DFvgWIrt15B7/view?usp=drive_link`,`
      
      En la fase de síntesis se realiza la generación de código y en algunos compiladores se da también en esta fase la optimización de código.
      
      Independientemente de estas dos fases se puede requerir un pre-proceso para adecuar el código fuente. Y en ambas fases se consulta la tabla de símbolos para el manejo de errores. Esto se muestra en la Figura 4.3.
      
      Análisis y Síntesis.- Estas dos actividades, dependiendo de la fuente de información que se consulte, se pueden encontrar definidas como fases o bien como etapas. Para efectos de este material, se describirán las dos como fases básicas, mismas que requiere un compilador. Dentro de la fase de análisis también definiremos a los tres tipos de análisis como etapas a cada una de ellas. Representadas con rectángulos en el diagrama anterior.
      
      La fase de análisis permite separar cada uno de los símbolos o caracteres que integran el código fuente, les asigna un componente léxico conocido como token, que es código numérico que facilita el chequeo posterior; se toma de la tabla de símbolos para su posterior procesamiento; donde se realiza el análisis sintáctico con base a las gramáticas del lenguaje y posteriormente el análisis semántico que da un significado a los conjuntos de tokens para después realizar la conversión en la siguiente fase.
      
      En la fase de síntesis se toman los elementos por separado, ya aceptados, y se genera código con ellos, en los que se le agregan códigos adecuados a la máquina. Se tratará de esquematizar esos pasos de análisis y síntesis en el siguiente ejemplo.
      
      Ejemplo.- Tomemos la siguiente cadena de una sencilla instrucción... PRINT X
      
      - Análisis Léxico.- Es recibir la cadena PRINT y al identificar cada uno de los caracteres, consulta la tabla de símbolos, si es correcto y se encuentra en la tabla de símbolos: le genera un token para este caso, de manera hipotética se asigna como token el 503 y se da de alta el identificador X como variable, también asignándole un token, para este ejemplo es 001.
      
      - Análisis Sintáctico.- Se tiene como entrada dos tokens...503 001 Con base a la búsqueda en el orden definido como parsing de la gramática que acepta el lenguaje, tenemos que la cadena puede ser aceptada y pasar al siguiente análisis o bien, puede ser rechazada y generar un error de sintaxis (es decir, un orden no aceptado entre los dos elementos (el “PRINT” y la “X”). Un error de sintaxis puede ser X PRINT o bien PRNT X.
      
      - Análisis Semántico.- Una vez que se pasa el análisis léxico y sintáctico se da un significado a los conjuntos de tokens aceptados y se le da un significado en otro lenguaje más cerca de la computadora. El significado se toma de la tabla de símbolos donde se obtiene un código equivalente pero más detallado.
      
      - Generación de Código.- Para este ejemplo, de dos cadenas en una sola instrucción, se toma un código equivalente en un ensamblador ficticio que puede ser: Load X,100 Carga el contenido de la variable X en la localidad de memoria numero 100 Load 100,BX Carga el contenido de la localidad 100 en el registro interno de memoria a nivel segmento BX (según lo requiere la rutina de interrupción que emitirá la salida a impresión)
      Int 21 Maneja la salida de la variable X.
      - Optimización de Código.- Siguiendo con el mismo ejemplo de una sola instrucción de impresión y con una emulación simulada queda... LOAD X,BX Carga el contenido de la variable X en el registro base (a nivel segmento BX) INT 21 Imprime el contenido del segmento base BX.
      
      La figura 4.2 presenta un diagrama que ilustra de forma general las dos fases que componen al proceso de compilación y cada fase desglosada en sus etapas componentes.
      
      En una primera fase de análisis el programa es descompuesto en sus elementos fundamentales.
      
      En la posterior fase de síntesis es construido el programa ejecutable correspondiente a los elementos identificados en la fase previa. El proceso es irreversible e inclusive puede considerarse destructivo, ya que no hay forma de reconstruir el programa fuente a partir del ejecutable.
      
      Únicamente por facilidad descriptiva, el proceso es presentado con las etapas que componen a cada fase perfectamente diferenciadas y separadas; aunque en la práctica los límites no son estrictamente bien definidos; en la práctica se ha demostrado que productos muy rápidos y eficientes pueden ser desarrollados alterando el orden de algunas etapas o entremezclándolas.
      
      `,`https://drive.google.com/file/d/1qSBBPEDbZMligDk1LPsmqV1_X0-uznQY/view?usp=drive_link`,`
      
      La entrada a este proceso es por supuesto el programa fuente. Por lo general este es un archivo que es creado por el usuario como un texto ASCII con o sin un formato específico, aunque también puede ser el resultado de algún otro proceso. A partir de este archivo, diversos pasos pueden ser llevados a cabo:
      
      • Preprocesamiento.- Un preprocesador es la estrategia generalmente adoptada como solución a lenguajes huéspedes, extensiones, lenguajes 4GL, o lenguajes de dominio específico. El preprocesador es un traductor encargado de transformar dichas instrucciones a instrucciones del lenguaje anfitrión (generalmente un tradicional 3GL), sobre las cuales finalmente trabajará el compilador. Esta etapa es definitivamente opcional.
      
      • Análisis Léxico.- En esta fase, la cadena de caracteres que conforma al programa fuente es despojada de comentarios, espacios en blanco y otros elementos superfluos. El programa encargado de hacer esto es conocido como un scanner, y de aquí que al proceso se le refiera comúnmente como scanning (exploración). Durante esta fase se identifican los elementos gramaticales usados en la creación del programa. Cada elemento identificado es substituido por un código numérico conocido como token.
      
      • Análisis Sintáctico.- La cadena de tokens resultante es alimentada a un programa conocido como parser. El parser es el encargado de verificar que la secuencia y disposición de los tokens corresponda con la sintaxis del lenguaje. Este proceso de verificación sintáctica es conocido como parsing y es completamente guiado por la gramática del lenguaje.
      
      • Análisis Semántico y Generación de Código.- Una vez que la secuencia de tokens ha sido validada, ésta es utilizada para identificar el sentido de la acción a realizar y generar el correspondiente código en lenguaje máquina. Algunos compiladores recurren a la creación de código intermedio para posteriormente generar la secuencia de instrucciones máquina necesarias, mientras que algunos otros proceden a la generación directa del código máquina.
      
      • Optimización de Código.- Esta es otra etapa opcional. La optimización de código es una actividad que raya en un arte dominado solamente por un experimentado programador de ensamblador y conocedor de la arquitectura del computador. Existen algunas técnicas desarrolladas al respecto pero nada supera a la experiencia de un hábil programador. En esta etapa, ya sea posteriormente o trabajando al unísono con el generador de código, secuencias de instrucciones y estructuras de datos son examinadas buscando su substitución con secuencias, instrucciones o estructuras más cortas, rápidas o eficientes.
      
      • Ligado.- Como paso final, todas las referencias pendientes de resolver sobre rutinas, módulos, bibliotecas y demás porciones de código necesarias para el funcionamiento del programa son cubiertas en esta parte. La resolución puede consistir desde el proporcionar meramente una dirección o llamado a una función hasta la inclusión de enormes porciones de código.
      
      Al final, como producto de todo este proceso, lo que se obtiene es un programa escrito en código máquina que puede ser cargado en memoria y ejecutado. El proceso seguido por un intérprete es ligeramente diferente, ya que mientras que cubre todas las etapas de análisis no cuenta con una fase de síntesis.
      
      Un intérprete no genera código, se limita a invocar rutinas ya escritas (proceso muchas veces llamado de interpretación). La siguiente figura ilustra esto.
      
      `,`https://drive.google.com/file/d/12tsIzqF-CMDEssKfUI5L0jNrCEQZpz-W/view?usp=drive_link`,`
      
      En el caso de un pseudo-compilador, cuyo caso mejor conocido es el de Java, la diferencia consiste en el código generado. Mientras que todas las etapas de un compilador son cubiertas, el programa ejecutable no es creado para ser ejecutado en un procesador "real" sino para uno "hipotético" o "imaginario" y conocido generalmente como máquina virtual. La máquina virtual es otro programa cuyo funcionamiento simula al de un procesador. Este procesador recibe de entrada el pseudo-código creado por el compilador y procede a la ejecución de las instrucciones contenidas en éste; puede verse que no se trata más que de un intérprete muy sencillo.
      
      `,`https://drive.google.com/file/d/19GO67PMtUc0nerSvwxpcwDK2bIJbvUFf/view?usp=drive_link`,`
      
      La siguiente figura ilustra con mayor detalle lo que pasa en cada una de las etapas del proceso de compilación. El procesamiento de instrucciones de un lenguaje huésped (como puede ser SQL) correría a cargo del pre-procesador, siendo transformadas instrucciones del lenguaje anfitrión. Durante la fase de análisis léxico el scanner se encarga de identificar cada uno de los elementos usados para escribir el programa fuente, substituyendo a cada uno de estos por un código numérico único (tokens). En este proceso se eliminan comentarios y espacios en blanco. Los tokens son alimentados al analizador sintáctico que valida, que su disposición está acorde a las reglas del lenguaje.
      Validado éste, el analizador semántico procede a identificar el propósito de las diversas secuencias de tokens, y buscará generar representaciones intermedias de cada acción o directamente código máquina.
      
      Este posteriormente es optimizado.
      
      `,`https://drive.google.com/file/d/106XK3l6iO-_SQ0iBZiwFGwmNQvA509VC/view?usp=drive_link`,`
      
      • Análisis: Dado un sistema, identificar los elementos constituyentes, las interrelaciones entre estos, y determinar la conducta creada.
      
      • Síntesis: Dado un conjunto de elementos y estableciendo un determinado número de interrelaciones entre éstos, crear uno de muchos posibles sistemas con una determinada conducta.
      
      El "descompilar" un programa, sólo es posible si se cuenta con información de depuración, generada por el compilador. Mientras que es posible "desensamblar" un programa, sin información adicional que permita asociar secuencias de instrucciones ensamblador a instrucciones de nivel alto, es imposible reconstruir el programa fuente a partir del código ejecutable.
      `
          ]
        },
      
          {
          contenido_id: 14,
          titulo: '4.3 Fases y Componentes',
      area: AreaComputacion.TEORIA_COMPUTACION,
          descripcion: 'pendiente',
          tipo: TipoContenido.LECCION,
          orden: 3,
          url_recurso: null,
          unidad_id: 4,
          unidad: { unidad_id: 4, nombre: 'UNIDAD IV - EL COMPILADOR' },
          contenido: [
            `
      Conceptualmente un compilador opera en fases. Cada una de las cuales transforma el programa fuente de una representación a otra. En la figura 4.8 se muestra una descomposición típica de un compilador. En la práctica se pueden agrupar fases y las representaciones intermedias entre las fases agrupadas no necesitan ser construidas explícitamente.
      
      `,`https://drive.google.com/file/d/1H2GYI76AJ10VEd2ZtRgttQq1xQtEI6kl/view?usp=drive_link`,`
            
      Las tres primeras fases, que forman la mayor parte de la porción de análisis de un compilador se analizan en la sección IX. Otras dos actividades, la administración de la tabla se símbolos y el manejo de errores, se muestran en interacción con las seis fases de análisis léxico, análisis sintáctico, análisis semántico, generación de código intermedio, optimación de código y generación de código. De modo informal, también se llamarán "fases" al administrador de la tabla de símbolos y al manejador de errores.
      
          ANÁLISIS Y SÍNTESIS
      
      En la compilación hay dos partes: Análisis y Síntesis. La parte del análisis divide al programa fuente en sus elementos componentes y crea una representación intermedia. De las dos partes, la síntesis es la que requiere la técnica más especializada.
      
      Durante el análisis se determina las operaciones que implica el programa fuente y se registra en una estructura jerárquica llamada árbol. A menudo, se usa una clase especial de árbol llamado árbol sintáctico, donde cada nodo representa una operación y los hijos de un nodo son los argumentos de la operación. Por ejemplo, en la figura 4.9 se muestra un árbol sintáctico para una proposición de asignación.
      
      `,`https://drive.google.com/file/d/1kRrfQgYaloaCaEIwwxVcU2u789MdWq81/view?usp=drive_link`,`
      
      Conforme avanza la traducción, la representación interna del programa fuente que tiene el compilador se modifica. Para ilustrar esas representaciones, considérese las traducciones en el siguiente ejemplo.
      
      `,`https://drive.google.com/file/d/1K5shceybqAniKompDElROGLBEmMdh1-z/view?usp=drive_link`,`
      
      • ANÁLISIS LÉXICO
      
      La fase de análisis léxico lee los caracteres de un programa fuente y los agrupa en una cadena de componentes léxicos en los que cada componente representa una secuencia lógicamente coherente de caracteres, como un identificador, una palabra clave (if, while, etc.), un carácter de puntuación, o un operador de varios caracteres, como :=. La secuencia de caracteres que forman un componente léxico se denomina lexema del componente.
      
      A ciertos componentes léxicos se les agregará un "valor léxico". Así, cuando se encuentra un identificador como velocidad, el analizador léxico no sólo genera un componente léxico (por ejemplo, id,) sino que también introduce el lexema velocidad en la tabla de símbolos, si aún no estaba allí. El valor léxico asociado con esta aparición de id, señala la entrada de la tabla de símbolos correspondiente a velocidad.
      
      Usaremos id1 , id2 e id3 para posición, inicial y velocidad, respectivamente, para enfatizar que la representación interna de un identificador es diferente de la secuencia de caracteres que forman el identificador. Por tanto, la representación de (1) después del análisis léxico queda sugerida por: id1 := id2 + id3 * 60 ...(2)
      
      Se deberían construir componentes para el operador de varios caracteres := y el número 60, para reflejar su representación interna. En la sección IX ya se introdujeron las fases segunda y tercera: los análisis sintáctico y semántico. El análisis sintáctico impone una estructura jerárquica a la cadena de componentes léxicos, que se representará por medio de árboles sintácticos, (como se muestra en la figura 4.9). Una estructura de datos típica para el árbol se da cuando un nodo interior es un registro con un campo para el operador y dos campos que contienen apuntadores a los registros de los hijos izquierdo y derecho.
      
      Una hoja es un registro con dos o más campos, uno para identificar el componente léxico de la hoja, y los otros para registrar información sobre el componente léxico. Se puede tener información adicional sobre las construcciones del lenguaje añadiendo más campos a los registros de los nodos.
      
      • ANÁLISIS SINTÁCTICO
      El analizador sintáctico, también llamado parser, recibe como entrada los tokens que le pasa el Analizador Léxico (el analizador sintáctico no maneja directamente caracteres) y comprueba si esos tokens van llegando en el orden correcto (orden permitido por el lenguaje). La salida "teórica" de la fase de análisis sintáctico sería un árbol sintáctico.
      Así pues, sus funciones son:
      
      • Aceptar lo que es válido sintácticamente y rechazar lo que no lo es.
      • Hacer explícito el orden jerárquico que tienen los operadores en el lenguaje que se trate. Por ejemplo, la cadena A/B*C es interpretada como (A/B)*C en FORTRAN y como A/(B*C) en APL.
      • Guiar el proceso de traducción (traducción dirigida por la sintaxis).
      
      
      • ANÁLISIS SEMÁNTICO
      
      El análisis semántico es posterior al sintáctico y mucho más difícil de formalizar que éste. Se trata de determinar el tipo de los resultados intermedios, comprobar que los argumentos que tiene un operador pertenecen al conjunto de los operadores posibles, y si son compatibles entre sí, etc. En definitiva, comprobará que el significado de lo que se va leyendo es válido.
      
      La salida "teórica" de la fase de análisis semántico sería un árbol semántico. Consiste en un árbol sintáctico en el que cada una de sus ramas ha adquirido el significado que debe tener. En el caso de los operadores polimórficos (un único símbolo con varios significados), el análisis semántico determina cuál es el aplicable.
      
      Por ejemplo, consideremos la siguiente sentencia de asignación:
      A := B + C
      
      En Pascal, el signo "+" sirve para sumar enteros y reales, concatenar cadenas de caracteres y unir conjuntos. El análisis semántico debe comprobar que B y C sean de un tipo común o compatible y que se les pueda aplicar dicho operador. Si B y C son enteros o reales los sumará, si son cadenas las concatenará y si son conjuntos calculará su unión.
      
      Ejemplo
      VAR
      ch : CHAR; (*Un identificador no se puede utilizar si previamente no se ha definido*)
      
      (* En Pascal no es válido, en C sí. *)
      
      ent: INTEGER;
      ...
      ch := ent + 1;
      
      • GENERACIÓN DE CÓDIGO
      Después de los análisis sintáctico y semántico, algunos compiladores generan una representación intermedia explícita del programa fuente. Se puede considerar esta representación intermedia como un programa para una máquina abstracta. Esta representación intermedia debe tener dos propiedades importantes; debe ser fácil de producir y fácil de traducir al programa objeto.
      
      La representación intermedia puede tener diversas formas. Existe una forma intermedia llamada "código de tres direcciones", que es como el lenguaje ensamblador para una máquina en la que cada posición de memoria puede actuar como un registro. El código de tres direcciones consiste en una secuencia de instrucciones, cada una de las cuales tiene como máximo tres operandos. El programa fuente de (1) puede aparecer en código de tres direcciones como
      
      temp1 := entarea1(60)
      temp2 := id3 * temp1 (2)
      temp3 := id2 + temp2
      id1 := temp3
      
      Esta representación intermedia tiene varias propiedades. Primera, cada instrucción de tres direcciones tiene a lo sumo un operador, además de la asignación. Por tanto, cuando se generan esas instrucciones el compilador tiene que decidir el orden en que deben efectuarse, las operaciones; la multiplicación precede a la adición al programa fuente de (1).
      
      Segunda, el compilador debe generar un nombre temporal para guardar los valores calculados por cada instrucción. Tercera, algunas instrucciones de "tres direcciones" tienen menos de tres operadores, por ejemplo la primera y la última instrucciones de (2).
            `
          ]
        },
      
        {
          contenido_id: 15,
          titulo: '4.4 Optimización de código',
      area: AreaComputacion.TEORIA_COMPUTACION,
          descripcion: 'pendiente',
          tipo: TipoContenido.LECCION,
          orden: 4,
          url_recurso: null,
          unidad_id: 4,
          unidad: { unidad_id: 4, nombre: 'UNIDAD IV - EL COMPILADOR' },
          contenido: [
            `
      La fase de optimación de código trata de mejorar el código intermedio de modo que resulte un código de máquina más rápido de ejecutar. Algunas optimaciones son triviales. Por ejemplo, un algoritmo natural genera el código intermedio (2) utilizando una instrucción para cada operador de la representación del árbol después del análisis semántico, aunque hay una forma mejor de realizar los mismos cálculos usando las dos instrucciones
      
      Temp1 := id3 * 60.0 ... (3)
      id1 := id2 + temp1
      
      Este sencillo algoritmo no tiene nada de malo, puesto que el problema se puede solucionar en la fase de optimación de código. Esto es, el compilador puede deducir que la conversión de 60 de entero a real se puede hacer en el momento de la compilación, de modo que la operación entera se puede eliminar. Además, temp3 se usa sólo una vez, para transmitir su valor a id1. Entonces resulta seguro sustituir a id1 por temp3, a partir de lo cual la última proposición de (2) no se necesita y se obtiene el código de (3).
      
      Hay muchas variaciones en la cantidad de optimación de código que ejecutan los distintos compiladores. Los compiladores que realizan mucha optimización de código, son llamados: "compiladores optimadores”. Sin embargo, hay optimaciones sencillas que mejoran significativamente el tiempo del compilador que se ocupa en esta fase.
            `
          ]
        },
      
        {
          contenido_id: 16,
          titulo: 'Ejercicios de repaso para la Unidad IV',
      area: AreaComputacion.TEORIA_COMPUTACION,
          descripcion: 'pendiente',
          tipo: TipoContenido.LECCION,
          orden: 5,
          url_recurso: null,
          unidad_id: 4,
          unidad: { unidad_id: 4, nombre: 'UNIDAD IV - EL COMPILADOR' },
          contenido: [
            `
      1. Describa su propio concepto de gramáticas.
      2. Describa al menos seis tipos de gramáticas en lenguajes formales.
      3. Defina con sus propias palabras lo que es un token.
      4. Defina que son los componentes léxicos.
      5. Defina un símbolo.
      6. Defina una cadena.
      7. Defina un árbol.
      8. Defina que es scanning.
      9. Defina que es parsing.
      10. Genere las reglas de producción para una gramática que permita sumar y multiplicar dos símbolos con notación postfija.`
          ]
        },
      
        // ── UNIDAD V ─────────────────────────────────────────────
        {
          contenido_id: 17,
          titulo: '5.1 Estructura general del lenguaje y Expresiones Regulares',
      area: AreaComputacion.TEORIA_COMPUTACION,
          descripcion: 'pendiente',
          tipo: TipoContenido.LECCION,
          orden: 1,
          url_recurso: null,
          unidad_id: 5,
          unidad: { unidad_id: 5, nombre: 'UNIDAD V - ANÁLISIS LÉXICO (Scanning)' },
          contenido: [
            `
      En esta fase, la cadena de caracteres que conforman al programa fuente es despojada de comentarios, espacios en blanco y otros elementos superfluos. El programa encargado de hacer esto es conocido como scanner, y de aquí que al proceso se le refiera comúnmente como scanning (exploración). Durante esta fase se identifican los elementos gramaticales usados en la creación del programa, cada elemento identificado es substituido por un código numérico conocido como token. 
      
      Análisis Léxico (Scanning).
      Como se podrá observar, ésta es la primera fase del diseño de un compilador y en esta fase ayuda mucho el conocer la estructura general que tiene el lenguaje. El analizador lexicográfico, o explorador (Scanner), es la parte del compilador que lee el programa fuente, carácter a carácter, y construye a partir de éste unas entidades primarias llamadas tokens. Es decir, el analizador lexicográfico transforma el programa fuente en filas de tokens.
      
      Expresiones regulares.
      La estructura general del lenguaje se integra con el conjunto de elementos terminales, y no terminales definidas en varias formas: Una forma son los BNF o BNFE donde se describen las reglas de producción, los árboles de análisis sintáctico cuyos recorridos se pueden realizar por la izquierda o por la derecha y por último los “diagramas de ferrocarril” donde se representan en forma gráfica. Los diferentes elementos que integran la gramática del lenguaje, éstos se describen con detalle en los siguientes capítulos.
      
      Las expresiones regulares son como una especie de lenguaje que se puede usar para buscar y remplazar ciertos patrones en un texto.
      Las expresiones regulares son una serie de caracteres que forman un patrón, normalmente representativo de un grupo de caracteres mayor, de tal forma que podemos compararlo con otro conjunto de caracteres para ver las coincidencias.
      
      Ejemplo 1:
      
      *am* // este es nuestro patrón. Si lo comparamos con:
      am // coincide
      panorama // coincide
      ambición // coincide
      campamento // coincide
      mano // no coincide
      
      (Nota: * es cualquier cadena)
            
      Ejemplo 2:
      
      patrón: *el*
      el ala aleve del leve abanico
      
      (Nota: * es cualquier cadena)
      
      Vemos en estos ejemplos, que tenemos un patrón (en estos casos las letras am, el) que podemos comparar con otro conjunto de caracteres para ver cuando coinciden o no.
      
      Hemos elegido aquí el ejemplo más sencillo, ya que el patrón es literal y solo buscamos ocurrencias exactas. El poder de las expresiones regulares radica precisamente en la flexibilidad de los patrones, que pueden ser confrontados con cualquier palabra o cadena de texto que tenga una estructura conocida.
      
      Las siguientes son las notaciones que se acostumbran para algunas expresiones regulares...
      /[a-z]/ letras minúsculas
      /[A-Z]/ letras mayúsculas
      /[0-9]/ números
      /[,'¿!¡;:\.\?]/ caracteres de puntuación (la barra invertida hace que no se consideren
                      como comando ni el punto ni el interrogante)
      
      /[A-Za-z]/ letras del alfabeto (inglés)
      
      /[A-Za-z0-9]/ todos los caracteres alfanuméricos habituales (sin los de puntuación)
      
      /[^a-z]/ El símbolo ^ es el de negación. Esta expresión singnifica: Todo menos las
               letras minúsculas.
      
      /[^0-9]/ Esta expresión significa: Todo menos los números.
      Para definir otros rangos, no dudar en usar el operador de rangos "-" por ejemplo de la h a la m [h-m]
      
      Coincidencia total
      
      La expresión regular suele funcionar con que coincida solo un carácter de los muchos listados. Pero en ocasiones queremos que la coincidencia sea total.
      
      Imaginemos que hemos dejado todas las tildes de palabras acabadas en ion. Se nos ocurre usar:
      
      /[ion]/ como patrón de búsqueda.
      
      Pero esto daría concordancia positiva con Sol -por la o- con noche -por la n- ... etc.
      
      Para que la concordancia sea de cada carácter y en el orden adecuado, necesitamos el
      operador Punto "."
      
      Por ejemplo [.ion] sólo concordaría con cosas como camion o salsa lionesa
      
      Si bueno, la "ion" de lionesa no esta a final de palabra ... y eso también hemos de
      retocarlo, pero todo a su tiempo.
      
      Aunque se podría ocurrir que algo del tipo [.ion[^a-zA-Z]] tal vez funcionase ... ya veremos
      ;)
      
      Por cierto que el punto "." no concuerda con \n \r \f \0 (newline, return, line feed, null
      respectivamente)
      
      Existen herramientas de programación como AWK y PHP que permiten el uso de
      expresiones regulares.
      
      ¿Para qué sirve Awk?
      
      Como ya se ha indicado, esta utilidad permite procesar secuencialmente uno o varios archivos, los cuales constituyen la información “entrante” para AWK. El contenido de cada una de las líneas de la entrada se compara con una o varias plantillas, en las que debe especificarse un patrón de búsqueda. A cada patrón se le asocia una acción, que, normalmente, procesa la información entrante y la envía a la salida estándar.
      
      Por tanto, los usos típicos de AWK se centran en la selección de registros de un archivo en función de uno o varios criterios de búsqueda. Si solamente resultara relevante una parte del registro seleccionado, también sería posible separarla e ignorar el resto.
      
      La información "saliente" se puede transformar según las necesidades del usuario, por lo que es posible crear informes con muy poco esfuerzo de programación.
      
      La sintaxis es muy semejante a la del lenguaje C, con la particularidad de que, al ser AWK un intérprete, no es necesario pasar por procesos de compilación y linkedición. El rendimiento de AWK no es comparable al de un ejecutable, pero, dada la orientación al proceso secuencial de archivos, esta circunstancia solamente es relevante en condiciones extremas.
      
      Awk puede, además, leer y grabar simultáneamente otros archivos, además de la entrada y salida estándar. Otras capacidades avanzadas quedan, por su mayor dificultad, fuera del alcance de estas notas.
      
      Conviene, finalmente, recalcar la circunstancia de que AWK solamente procesa archivos de texto. Para manejar los datos de una hoja Excel o de cualquier otro documento en formato propietario es necesario exportar la información a algún formato de texto.
      
      AWK sigue, como hemos indicado, un guión previamente escrito por el programador. Está compuesto por plantillas, que indican mediante una expresión qué registros se desea procesar, y mediante una acción, qué proceso se pretende realizar con los registros previamente seleccionados.
      
      Se puede escribir el guión directamente en la línea de mandatos, encerrado entre comillas simples, o en un archivo de texto separado. Si se opta por la segunda opción, debe escribirse el nombre del archivo tras el parámetro –f. La “f” debe ser minúscula obligatoriamente. Por tanto, cualquiera de las dos formas mostradas a continuación produce resultados equivalentes:
      
      • awk ‘{ print $1 }’ entrada.txt
      • awk -f primer.awk entrada.txt
      
      Más adelante se mostrará cómo awk procesa cada registro como una sucesión de “campos” separados por un carácter determinado que indica dónde termina un campo y empieza el siguiente. La situación más habitual es aquella en la cual cada registro contiene una frase y los campos son las palabras de la frase. El carácter delimitador es el espacio que separa cada palabra de la siguiente. Mediante el parámetro –F (ahora mayúscula) se indica a awk qué carácter debe considerar como separador de campos.
      
      • awk -F "#" -f primer.awk entrada.txt
      
      También se mostrará la capacidad para usar “variables” dentro del guión, igual que en otros lenguajes de programación. Mediante el parámetro –v se puede asignar un valor a una variable desde la línea de mandatos:
      
      • $ awk –v fecha=“16/Dic/2001” -f primer.awk entrada.txt
      
      El resto de los parámetros son los nombres de los archivos de datos “entrantes”. El proceso se realiza accediendo a los archivos en el orden especificado. Toma el conjunto de los archivos como si fueran uno solo. Awk espera recibir por la entrada estándar (stdin) los datos que debe procesar. Por ejemplo:
      
      • cat ejemplo.txt | awk –f primer.awk
      
      Alternativamente, los parámetros indicados al final de la línea de comandos se interpretan como nombres de archivo:
      
      • awk –f primer.awk ejemplo.txt
      
      El proceso del Análisis Léxico.
      
      El proceso de análisis léxico se refiere al trabajo que realiza el scanner con relación al proceso de compilación. El scanner representa una interfaz entre el programa fuente y el analizador sintáctico o parser. El scanner, a través del examen carácter por carácter del texto, separa el programa fuente en piezas llamadas tokens, los cuales representan los nombres de las variables, operadores, etiquetas, y todo lo que comprende el programa fuente.
      
      El parser, usualmente genera un árbol de sintaxis del programa fuente como ha sido definido por una gramática. Las hojas del árbol son símbolos terminales de la gramática.
      Son esos símbolos terminales o tokens los que el scanner extrae del código fuente y se los pasa al parser. Es posible para el parser usar el conjunto de caracteres terminales del lenguaje como el conjunto de tokens, pero ya que los tokens pueden ser definidos en términos de gramáticas regulares más simples que en las gramáticas más complejas utilizadas por los parsers, es deseable usar scanners. Usar solo parsers es costoso en términos de tiempo de ejecución y requerimientos de memoria, y la complejidad y el tiempo de ejecución puede reducirse con el uso de un scanner.
      
      La separación entre análisis léxico (scanning) y análisis sintáctico (parsing) puede tener también otras ventajas. El análisis léxico de caracteres generalmente es lento en los compiladores, y separándolo del componente de análisis semántico de la compilación, el énfasis particular puede darse para hacer más eficiente el proceso.
      
      Un analizador de léxico tiene como función principal el tomar secuencias de caracteres o símbolos del alfabeto del lenguaje y ubicarlas dentro de categorías, conocidas como unidades de léxico. Las unidades de léxico son empleadas por el analizador gramatical para determinar si lo escrito en el programa fuente es correcto o no gramaticalmente.
      Algunas de las unidades de léxico no son empleadas por el analizador gramatical sino que son descartadas o filtradas. Tal es el caso de los comentarios, que documentan el programa pero que no tienen un uso gramatical, o los espacios en blanco, que sirven para dar legibilidad a lo escrito.
      En la terminología empleada en la construcción de un analizador de léxico se encuentran los siguientes términos.
      
          • Patrón
          Representa la regla para que una secuencia de caracteres sea considerada cierta unidad de léxico. Ejemplo: El patrón para un identificador de Pascal es:
              Una letra seguida por letras, dígitos o guiones (_)
          • Lexema
          El valor actual de un conjunto de caracteres que satisfacen un patrón. Ejemplo:
              Este_es_1_ejemplo
              Este es el lexema que satisface el patrón de un identificador
          • Token o Ficha
          El valor asociado a una categoría o unidad de léxico. Se representa como un número entero o una constante de un byte. Ejemplo:
      
          Unidades de léxico
          Categorías en que se clasifican las cadenas de caracteres válidos en un lenguaje. Los caracteres válidos reciben el nombre de alfabeto. Por ejemplo, el alfabeto de Pascal es:
      
          A-Z, a-z, 0-9, _, =, :, ;, ,, , -, ', ", *, /, (, ), [, ], ., <, >
      
          y las unidades de léxico para pascal son:
      • identificadores
      • literales numéricas
      • operadores aritméticos
      • cadenas de caracteres
      • separadores
      • operadores relacionales
      • operadores lógicos
      • comentarios
      • Con respecto al lenguaje para controlar un ROBOT que se mueve en un plano, tenemos que su alfabeto es: n,o,r,t,e,s, ,u,i,c
      • y las unidades de léxico son: órdenes (norte, sur, este, oeste, inicio) y espacios en blanco.
      
      El rol del analizador de Léxico
      
      Aunque el analizador de léxico es la primera etapa del proceso de compilación, no es quien lo inicia. Pudiera considerarse que el analizador de léxico hace su procesamiento y envía sus resultados al analizador gramatical, como secuencialmente se aprecia en el proceso de compilación; no es así: La compilación empieza con el analizador gramatical quien solicita un token para realizar su trabajo; el analizador de léxico reúne símbolos y envía el token correspondiente a la unidad de léxico que conformó al analizador gramatical y espera una nueva solicitud de token. Como se aprecia en la figura siguiente, el analizador de léxico está supeditado por el analizador gramatical.
      
      `,`https://drive.google.com/file/d/1FkyjqL7Z-Gk7omZ1vgR85PA4ecW-Etya/view?usp=drive_link`,`
      
      Durante estas etapas se tiene comunicación con la tabla de símbolos que concentra información de las entidades empleadas en el programa.
      
      Descripción de Patrones
      
      Un patrón se puede describir:
      1. Mediante una descripción informal, en donde se emplea el lenguaje natural para describir el comportamiento de la regla de léxico. Por ejemplo: un número entero es una secuencia de uno o más dígitos del 0 al 9. O un identificador es una letra seguida de letras, dígitos o guiones de subrayar. La descripción informal es útil sólo entre humanos; computacionalmente aún no hay herramientas para construir sobre ellas analizadores de léxico.
      
      2. Utilizando expresiones regulares. Una expresión regular es una notación formal que utiliza operaciones sobre el alfabeto de un lenguaje. Por ejemplo, se puede definir que un identificador es:
      
          {letra} ({letra} | {dígito} | {guión})*
      
      que interpreta como un elemento del conjunto letra seguido de cero o mas veces (la cerradura Kleene, representada por el asterisco) de una letra, dígito o guión (la selección representada por la barra vertical).
      Esta notación es formal y computacionalmente útil para construir analizadores de léxico empleando la herramienta LEX.
      
      3. Utilizando autómatas finitos (diagramas de transición o diagramas sintácticos), que son representaciones gráficas de las relaciones entre conjuntos de símbolos (aristas) por medio de estados, a los cuales pueden llegarse o transitarse por ellos al encontrar un símbolo perteneciente a un conjunto.
      
      El siguiente diagrama puede ser la representación de un identificador:
      
      `,`https://drive.google.com/file/d/10LoLOFUHPm3uq-yUAGw1HIhfQ2J8EtBT/view?usp=drive_link`,`
      
      La utilización del diagrama sirve para aclarar las posibilidades de acción en un patrón y puede manipularse computacionalmente.
      
      Las reglas léxicas
      
      Las palabras de un idioma como el castellano se pueden dividir en dos partes: el lexema y los sufijos. El lexema es la parte invariante de la palabra. En ciertos casos, la palabra está formada únicamente por el lexema. Tal es el caso de las preposiciones. Sin embargo, en la mayoría de los casos las palabras se forman mediante la aposición de una serie de sufijos al lexema, como ocurre, por ejemplo, en el caso de los sustantivos, los adjetivos y los verbos. Cuando de un lexema se puede obtener un conjunto de palabras que derivan de él, se toma una de esas palabras para representar el conjunto: es lo que se denomina el lema de ese conjunto de palabras. En el caso de los sustantivos y los adjetivos el lema lo constituye la forma masculina singular, y en el de los verbos el infinitivo.
      
      En ciertos casos, como en el de los verbos irregulares, las cosas no son tan simples, puesto que no todas las formas de la conjugación tienen la misma raíz. Pensemos por ejemplo en el verbo pensar. Parte de la conjugación utiliza como raíz pens (por ejemplo, las formas pensé, pensaré, etc.), pero otras utilizan piens como raiz (pienso, piensas, etc.). Sin embargo, todas las formas de la conjugación tienen un único lema: pensar.
      
      Por lo tanto, a la hora de reconocer las palabras válidas del castellano se deberá partir del reconocimiento de los lexemas para posteriormente ir aplicando las reglas léxicas que indican cómo se formarán las palabras pertenecientes al conjunto de un determinado lema.
      
      Lexema es el elemento que contiene la significación de la palabra. Son los que aportan el significado fundamental de la palabra; por ello se dice que son como la raíz de la palabra
      
      DIAGRAMAS DE ESTADO.
      
      Ya que el scanner debe reconocer tokens, debemos buscar la posibilidad de describir los tokens a manera de reconocimiento y no de manera generativa. La descripción de los tokens por medio de cómo pueden ser reconocidos (o aceptados) se hace en términos de un modelo matemático llamado un aceptor de estado finito.
      
      En lo que resta de esta sección, describiremos un conjunto de tokens por medio de la especificación de un aceptor que reconocerá ese conjunto. Cabe aclarar que las gramáticas regulares también pueden utilizarse para este propósito.
      
      Un aceptor de estado finito o autómata finito puede considerarse como una máquina consistente de una cabeza de lectura y una caja de control de estado finito. La máquina lee una cinta de carácter a la vez, de izquierda a derecha. Existe un número finito de estados que la máquina puede adoptar. Cada vez que la máquina lee el siguiente carácter, ocurre en ella un cambio de estado. Siempre que un aceptor de estado finito inicia la lectura de una cinta, éste se encuentra en cierto estado llamado estado inicial. Algunos de los estados que el aceptor puede adoptar se llaman estados finales, y si el aceptor intenta leer más allá del final de la cinta mientras se encuentra en un estado final, la cadena que está en la cinta se dice que fue aceptada por el autómata finito. En otras palabras, la cadena pertenece al lenguaje que es aceptado por el autómata finito.
      
      DIAGRAMAS DE ESTADO FINITO.
      
      Para representar gráficamente un aceptor de estado finito, también se utilizan los diagramas de estado finito o diagramas de transición, como el que se muestra en la siguiente figura y que representa el aceptor para un número con al menos un dígito después del punto decimal.
      
      Los nodos del diagrama de estado finito representan los estados del aceptor de estado finito. En el diagrama anterior, los nodos se han etiquetado con los números 1, 2 y 3. Los arcos, que van de un estado otro, indican las transiciones de estado. La flecha y la palabra "Inicio" indican cual de los estados es el estado inicial (en este caso el estado 1). El estado etiquetado con el 3 se denomina estado final. Generalmente los estados finales se representan por medio de dos círculos concéntricos, pero en nuestro caso, para facilitar su construcción, hemos utilizado un círculo con línea más gruesa. Los símbolos sobre los arcos representan los caracteres que, al leerse, obligan al cambio de un estado a otro.
      
      Un diagrama de transición es una representación gráfica donde se tiene un conjunto de estados, los cuales pueden ser:
      
      • iniciales
      • finales
      • intermedios
      
      `,`https://drive.google.com/file/d/1033G6kPsYjcZwirXBSCzlIg-1BIKvBW5/view?usp=drive_link`,`
      
      • A cada estado debe llegarse con el mismo conjunto de caracteres en todas las ocasiones en que haya una transición.
      
      • Para llegar a un estado de aceptación debe existir una transición sobre el carácter que rompe el patrón de la unidad de léxico.
      
      Cuando se construye un analizador de léxico utilizando diagramas de transición para la especificación de los patrones, se realiza un único diagrama que, a partir del estado 0, tiene diversas transiciones a cada uno de los patrones de las unidades de léxico que deba reconocer. Cada patrón posee un carácter selector, que permite reconocer de manera única el patrón que deba aplicarse.
      
      Por ejemplo, si queremos reconocer identificadores, comentarios apegados a las reglas del lenguaje C y el fin de archivo, podríamos construir el siguiente diagrama:
      
      `,`https://drive.google.com/file/d/1y_2U2CZ2oH6heIL9E6AfLD-YQSzQVaMV/view?usp=drive_link`,`
      
      Las descripciones informales de las unidades de léxico son:
      • Identificador: Letra seguida de letra, dígitos o guiones
      • Comentario: Empieza con /* y termina con */. Entre estos pares puede haber cualquier símbolo
      • EOF: cuando se encuentra el carácter eof (fin de archivo)
      • Error: Cualquier símbolo que no cumpla con los patrones anteriores.
      
      Los caracteres selectores para cada patrón son:
      
      • Identificador: letra
      • Comentario: / EOF: eof
      • Error: cualquier símbolo diferente a los anteriores.
      
      En el diagrama también aparecen otros estados derivados de patrones incompletos; estos estados se clasifican como Error.
      
      Implantación de un Analizador de Léxico
      
      La información en un diagrama de transición puede representarse por medio de una tabla que contenga por columnas a los símbolos del alfabeto del lenguaje y por renglones los diversos estados que constituyen al diagrama.
      
      Los estados finales o de aceptación de las unidades de léxico quedan sin información en las columnas ya que no existe una transición al reconocer o aceptar el patrón. Note que la designación de otro corresponde a los símbolos diferentes a los expresamente indicados y que para cada patrón es contextual.
      
      Para poder realizar el análisis de léxico a partir de la información que contiene la tabla se cuenta con un mecanismo que parte del estado 0 y empieza a recorrer el diagrama por cada transición posible hasta llegar a un estado final. El algoritmo del mecanismo se describe a continuación.
      
      `,`https://drive.google.com/file/d/1lbUP9PcLxP2l2Az-QN5S4hBjc12mfDLf/view?usp=drive_link`,`
      
      La función Analizador Léxico utiliza dos funciones que permiten consumir los símbolos del programa fuente: Inspecciona y Avanza. Las funciones consideran la existencia de un apuntador AP que direcciona al carácter próximo a leer. Inspecciona regresa el carácter apuntado por AP pero no lo incrementa.
      La función Avanza no regresa nada pero incrementa el valor de AP para estar en el siguiente símbolo a leer.
      
      Utilización de Memoria
      
      Realizar las lecturas involucradas por Inspecciona y Avanza directamente del archivo donde reside el programa fuente puede ser ineficiente ya que el tiempo que se consume para leer 1 y 1024 caracteres es el mismo. Por ello se considera la existencia de memoria de entrada (buffer) donde se puede depositar imágenes del contenido del archivo del programa fuente y donde se realicen Inspecciona y Avanza directamente en RAM. Esta memoria de entrada tiene una capacidad de 1024 caracteres (o múltiplos de esta cantidad) que llamaremos N. La dirección de inicio de esta región la denominaremos Buffer.
      
      `,`https://drive.google.com/file/d/1JRXcatZs_ORev0Z76T9lxdxreRjEVg8z/view?usp=drive_link`,`
      
      La región se mantendrá dividida en dos partes, que se llenarán de manera alternativa bajo el siguiente algoritmo.
      
      `,`https://drive.google.com/file/d/1RAIi4Q7buyAHaUFfouN0Z6n2q1ppNLej/view?usp=drive_link`,`
      
      Este algoritmo representa el comportamiento de la función Avanza, quien determinará cuando transferir a memoria el contenido del archivo del programa fuente. La función
      
      Lectura (destino, n, fuente) requiere especificar la región de memoria (destino) donde se depositarán (n) caracteres del archivo (fuente).
      
      Matrices de Transición.
      
      Una matriz o tabla de transiciones es un arreglo bidimensional cuyos elementos proporcionan el resumen de un diagrama de transiciones. Para elaborar un tabla de transiciones, debe colocarse cada estado del diagrama de transiciones en una fila del arreglo y cada símbolo o categoría de símbolos con posibilidades de ocurrencia en la cadena de entrada, en una columna. El elemento que se encuentra en la fila m columna n es el estado que se alcanzaría en el diagrama de transiciones al dejar al estado m a través de un arco de etiqueta n. Al no existir algún arco que salga del estado m, entonces la casilla correspondiente de la tabla se marca como un estado de error. En la siguiente figura se presenta un ejemplo de un diagrama de transiciones que representa la sintaxis para un número de punto flotante, seguido de la tabla de transiciones correspondiente.
      
      `,`https://drive.google.com/file/d/1_Gm8HL8L79b088uJBgxhLXi02o-LWGpL/view?usp=drive_link`,`
      
      DIAGRAMAS DE TRANSICIONES
      
      También llamado diagrama de estados o red de transiciones, es una representación gráfica del autómata, y está compuestos de:
      
          Círculos.- Es un conjunto finito, que van a representar posiciones o estados. Cada uno de ellos lo podremos etiquetar con un número (un nombre) para identificarlo posteriormente. A Uno de ellos se le apunta con una flecha (apuntador) para denotar que se trata del estado inicial. A Uno o más de ellos son círculos dobles van a ser el/los estados de aceptación, designando así estados en los que se reconoce la cadena como válida. Al estado actual puede ser a la vez de aceptación, aunque no es obligatorio
      
          Arcos.- Es cada una de las flechas que unen dos estados cualesquiera. Cada arco estará etiquetado con el símbolo o el tipo de símbolo que podría presentarse en la cadena de entrada que se analice.
      
      Decimos que el autómata representado por un diagrama de transiciones acepta una cadena si la secuencia de símbolos que aparecen en la misma (de izquierda a derecha) corresponde a una secuencia de arcos rotulados que conducen del círculo con apuntador a un círculo doble.
      
      A partir del diagrama de transiciones se puede hacer un programa que reconozca estructuras léxicas (cadenas válidas), aunque el resultado de la conversión no sea la mejor de las posibles soluciones.
      
      Se designa una variable para almacenar el estado actual y se inicializa como el estado inicial. Con una dentro de una sentencia WHILE (no sea fin de cadena), una sentencia CASE OF dirige las transiciones a otros estados, dando el estado siguiente mediante IF-THEN-ELSE anidados, dependiendo del símbolo leído. Si la cadena es inaceptable, el programa sale a una rutina de error.
      
      Tabla de transiciones
      
      Es una representación tabular (una tabla) del autómata donde la tabla tiene:
      • N filas, una por cada uno de los n estados del diagrama de transiciones.
      • Una columna por cada símbolo o categoría de los mismos posible en una cadena (estarán todos los símbolos o categoría de símbolos posibles).
      • Una columna etiquetada como FDC (fin de cadena).
      • El elemento de la tabla (m,n), estado m símbolo n, será el estado al que se llega desde un estado m a través de una arco (transición)con etiqueta n.
      • Si no hay transición (arco) desde el estado m con el símbolo n, entonces el elemento (m,n) es la transición a un estado de error.
      • En los elementos (m,FDC), si el estado m es de aceptación será aceptar, en caso contrario es error.
      
      Desde la tabla de transiciones también se puede hacer un programa, pero la solución es mejor, pues el algoritmo es el mismo para autómatas con el mismo número de estados y de símbolos, cambiando sólo el contenido de la tabla. Se asigna a una variable el estado inicial, que se actualizará con el elemento (variable, símbolo actual) que estará en memoria.
      
      El programa desde el diagrama de transiciones no es la mejor solución (si hay muchos estados, el CASE-OF puede ser interminable); Es mejor desde la tabla de transiciones.
            `
          ]
        },
      
        {
          contenido_id: 18,
          titulo: '5.2 Autómatas o Diagramas de transición',
      area: AreaComputacion.TEORIA_COMPUTACION,
          descripcion: 'pendiente',
          tipo: TipoContenido.RECURSO,
          orden: 2,
          url_recurso: null,
          unidad_id: 5,
          unidad: { unidad_id: 5, nombre: 'UNIDAD V - ANÁLISIS LÉXICO (Scanning)'},
          contenido: [
            `
      Autómata Finito no Determinista.
      Un autómata de estado-finito es un dispositivo que puede estar en uno de un número finito de estados. En ciertas condiciones, puede cambiar a otro estado. Esto se llama una transición.
      
      Cuando el autómata comienza a trabajar (cuando se enciende (ON)), puede estar en uno de sus estados iniciales. Hay también otro subconjunto importante de los estados del autómata: los estados del final. Si el autómata está en un estado final cuando para de trabajar, se dice acepta su entrada.
      
      La entrada es una secuencia de símbolos. La interpretación de los símbolos de entrada depende del uso; representan generalmente acontecimientos, o pueden ser interpretados como “el acontecimiento que los datos particulares llegaron a estar disponibles”. Los símbolos deben venir de un sistema finito de símbolos, llamado el alfabeto.
      
      Si un símbolo particular en un estado del detalle acciona una transición de ese estado otro, esa transición se etiqueta con ese símbolo. Las etiquetas de transiciones pueden contener un símbolo particular que no esté en el alfabeto. Una transición se etiqueta con ε (no presente en el alfabeto) si puede ser atravesado sin símbolo de la entrada.
      
      Es conveniente presentar los autómatas como gráficos dirigidos. Las cimas denotan estados. Se representan como círculos pequeños. Las transiciones forman los bordes - arcos con las flechas que señalan del estado de la fuente (el estado donde la transición origina) al estado destino. Se etiquetan con símbolos. A menos que esté claro el contexto, los estados iniciales tienen flechas cortas que señalen a ellas de “en ninguna parte”. Los estados finales se representan como dos círculos concéntricos.
       
      `,`https://drive.google.com/file/d/1Gas5kHYRHrEvth-sTpRlCnLCyVTV2ZCv/view?usp=drive_link`,`      
            
      El autómata del ejemplo (Figura 5.5), contiene 6 estados etiquetados A , B , C , D , E y F .El estado etiquetado A es inicial. Los estados A, C, y D son finales. El autómata no contiene ningún ciclo, pues es imposible dejar un estado, seguir algunas transiciones, y volver de esta manera al mismo estado original.
      
      Comenzando en uno de los estados iniciales, el autómata procesa una secuencia de los símbolos de la entrada. En un estado dado, comprueba si el símbolo siguiente de la entrada empareja cualquiera de las etiquetas de las transiciones que salen del estado. Si es así el autómata lo sigue al estado del blanco de la transición. Si ε está entre las etiquetas, la transición que etiqueta se sigue sin la lectura de la entrada. Puede haber más de una transición con la misma etiqueta, o una transición con una etiqueta que empareja y una transición etiquetada con ε. En ese caso, la decisión que la trayectoria elegir es arbitraria. Si no hay transición que empareja el símbolo de la entrada (en detalle, si hay no ε- transición), el autómata para y rechaza la entrada. Se acepta la entrada cuando se lee toda la entrada y emparejado por las transiciones y el autómata está en un estado final.
      
      Un sistema de secuencias de los símbolos recolectados persiguiendo todas las trayectorias de estados iniciales a los finales se llama el lenguaje que se acepta por el autómata. Por ejemplo, el autómata del ejemplo (Figura 5.5) acepta el lenguaje {ε, a, ac, ae, bc}. El símbolo ε, significando una entrada vacía, se acepta porque el estado inicial A es también el final. se acepta a, porque hay una transición de A a C etiquetada con a , y C es un estado final. La entrada se acepta a C., porque el control en el autómata puede ir de A a F con b , y entonces puede seguir ε- la transición etiquetada a B , y entonces una transición etiquetaron c a D , que es un estado final. Las secuencias: {anuncio, ae, af, Ba } son todos rechazados, porque E no es un estado final. El lenguaje del autómata en la Figura 5.5 es finito, porque el autómata no contiene ningún ciclo.
            
      Se llama un autómata que tiene ε número de transiciones etiquetadas ε- libera. Un autómata que tiene un estado inicial, es ε- libere, y para cada estado hay en la mayoría que una transición etiquetada con el mismo símbolo se llama un autómata determinista de estado-finito. El autómata de la Figura 5.5, se pueden transformar en el autómata determinista de la Figura 5.6.
      
      Autómata Finito Determinista.- A partir de este momento lo abreviaremos como AFD y son parte de la representación que se tiene del comportamiento de un sistema. Consiste en una serie de círculos que representan los diferentes estados y arcos dirigidos, que representan el paso o la transición de un estado a otro. Los AFD son elementos gráficos que nos permite definir los lenguajes aceptados para cada autómata. Es muy importante recalcar que en los estados o transiciones se pueden tener aceptados o rechazados cualquier tipo de símbolo.
            
      `,`https://drive.google.com/file/d/1JNH1u5ErODzmzMVpxaqpsWGQArznD1mu/view?usp=drive_link`,`
      
      Se dice que un estado para ser accesible de otro, debe existir una secuencia de las transiciones que conducen al estado de uno al otro. Un autómata puede tener un inicio-fin, cada estado del autómata es accesible desde cualquiera de sus estados iniciales. Un autómata tiene un lenguaje aceptado cuando los símbolos van de un inicio a un estado final. El autómata de la figura. 5.6 no es la versión mas útil; su versión útil se presenta en la versión reducida figura. 5.7. Esta versión si acepta el mismo lenguaje.
      
      `,`https://drive.google.com/file/d/1WrgiR_9M1TzpiFEquBeNGlbhjBnATU31/view?usp=drive_link`,`
      
      Un autómata se dice que es acíclico cuando no contiene ningún ciclo, es decir no es posible llegar al mismo estado dos veces al seguir las transiciones. Todos los autómatas en las figuras presentadas en esta disertación son acíclicos.
      
      Formalmente, un autómata es una quinteta de elementos: M = {Q,  \(\Sigma \),  \(\delta \), S, P}, donde está un conjunto de estados Q, un estado inicial de estados Q,  un estado inicila de estados i \(\in \) Q, un conjunto F \(\subseteq \) a, un alfabeto \(\Sigma \), y una función de transición \(\delta \) para Q. Que se denota como:
      
      `,`https://drive.google.com/file/d/18KdefNlNFXxHwCaJ_krXtRDO9zIYqCJQ/view?usp=drive_link`,`
      
      El lenguaje aceptado se define a la derecha de un estado Q en M (el sistema de todo el excedente de las secuencias \(\Sigma \)* que llevará uno del estado Q a cualquier estado final de M, usando la relación extendida de la transición \(\delta \)*):
      
      `,`https://drive.google.com/file/d/12YUAYj7wwwd8Vgfk2TfLgvxnD5iPP8Cs/view?usp=drive_link`,`
      
      `,`https://drive.google.com/file/d/1AHuWb2uXz_j04PVQJEB-Fjwd64B9b6Db/view?usp=drive_link`,`
      
      Ejemplo: Sea la sentencia:
      
      IF alfa< 718 THEN alfa := alfa + beta
      
      El analizador lexicográfico daría como resultado la siguiente cadena de caracteres correspondiente a la misma, según el contenido de la tabla de símbolos.
      
      (79);(12);(28);(13);(80);(12);(65);(12);(34);(12)
      
      Como puede verse, el analizador lexicográfico ha simplificado el texto de entrada, consistente en una secuencia de símbolos, en otra cadena de caracteres, representados cada uno de ellos por un número, y que corresponden a los siguientes significados:
      
      12 Variable real
      13 Constante entera
      28 Comparador <
      34 Signo +
      65 Asignador
      79 Palabra reservada IF
      80 Palabra reservada THEN
      
      La información que da esta secuencia de caracteres es suficiente para el análisis de la estructura de la sentencia, pero no basta para un análisis de su significado, para lo cual hay que tener cierta información de cuáles son las variables que entran en juego en esta sentencia. Esto se soluciona mediante un segundo elemento que compone el token, que por lo general consiste en un puntero a la tabla de símbolos en donde se hallan almacenadas las variables, quedando finalmente una secuencia de pares:
      
      En estos pares, el primer elemento nos indica el tipo de objeto que estamos procesando según una tabla que nosotros hemos diseñado previamente (tabla de tokens). El segundo miembro de estos pares es, en caso necesario, un puntero a la tabla de símbolos o a la tabla de constantes.
      
      AUTOMATA FINITO DETERMINISTA
      Un autómata finito (determinista) es pues una estructura de la forma:
      
      `,`https://drive.google.com/file/d/1PB-3qCsrX1FegL9ysdeBHyAQnp6d2jR7/view?usp=drive_link`,`
      
      es decir, es un autómata finito en el que no se han especificado estados finales. Todo autómata finito puede ser visto como un autómata con estados finales distinguidos. El autómata determinado por un autómata se dice ser el autómata subyacente del autómata. Todas las nociones y aseveraciones hechas sobre autómatas serán válidas también en los autómatas de los que son subyacentes. Como en las máquinas finitas, ya sea de Mealy o de Moore, en cada autómata
      
      `,`https://drive.google.com/file/d/1w7HiubYSht2mp3FdW_ArJTlfXDPJMw4U/view?usp=drive_link`,`
      
      Naturalmente, se tiene un algoritmo elemental para construir la parte accesible de cualquier autómata finito:
      
      1. Consideremos dos listas: una de estados ya revisados y otra de estados por revisar.
      Inicialmente la primera está vacía y la segunda consta sólo del estado inicial.
      
      2. Para cada estado por revisar,
      (a) se toma a ese estado como actual q,
      (b) para cada símbolo de entrada e \(\in \) End sea p = tran(q, e). Si p aparece en alguna de las dos listas se pasa al siguiente símbolo, en otro caso se lo coloca al final de los estados a revisar,
      (c) se coloca el estado actual en la lista de los ya revisados. 
      A continuación se presenta un seudo código de este algoritmo.
      
      `,`https://drive.google.com/file/d/1jy_SA34cEe6Ine-Ffr6A2ynU2eH27U-D/view?usp=drive_link`,`
      
      El lema anterior implica que el número de iteraciones en el ciclo principal del algoritmo anterior no excede al número de estados en el autómata.
      
      Ejemplos. Sea End = {0, 1}. 1. Construyamos un autómata que reconozca cadenas
      binarias con números pares de 0's y de 1's. Consideremos los estados siguientes:
      
      q0 = número par de 0´s y número par de 1´s,
      q1 = número par de 0´s y número impar de 1´s,
      q2 = número impar de 0´s y número par de 1´s,
      q3 = número impar de 0´s y número impar de 1´s,
      
      La tabla 5.2 muestra las transiciones de cada estado definida de manera natural:
      
      `,`https://drive.google.com/file/d/1cZOtLk57OE1X0QblDPpRJD5hiQY-g8sj/view?usp=drive_link`,`
      
      DIAGRAMAS DE TRANSICIONES
      
      `,`https://drive.google.com/file/d/1c557BgUhgdtJiHbY_KKyfmkDkgLXoc6B/view?usp=drive_link`,`
      
      y estado inicial q0. Observemos que si se arriba al estado q3 ya no se sale de ahí,
      
      • se arriba a q3 si inicialmente aparece un 1 y no hay 0's que lo precedan, o bien, habiendo llegado un bloque de 0's y luego uno de 1's, reaparece un 0.
      
      Así pues, si el conjunto de estados finales es F = {q1} entonces el lenguaje reconocido por este autómata es L = {0^n 1^m | n, m > 0}
      
      Un NFA no tiene restricciones para que exista más de una transición con el mismo nombre a diferentes estados, por lo que en una representación tabular no es posible determinar de manera única el estado destino para un símbolo determinado. Por ejemplo, el siguiente diagrama representa la expresión (a | b)* a b b
      
      `,`https://drive.google.com/file/d/1MU2XKsNN15njLYnWBC4zFj-F8GDaoTTd/view?usp=drive_link`,`
      
      No podemos determinar a qué estado se avanza del estado 0 con el símbolo a; puede ser al propio 0 o al 1 pero ¿bajo qué condición? No está determinado. Incluso podría existir transiciones sin ninguna restricción, que se denominan transiciones Ɛporque no requieren un símbolo determinado ocurra para realizarse.
      
      AUTOMATAS FINITOS NO DETERMINISTAS
      
      La única diferencia con los anteriores está en que en la transición de un estado determinado puede haber, para un mismo símbolo, más de un arco o no haber ninguno.
      
      Decimos que un autómata finito no determinista acepta una cadena si es posible que su análisis deje a la máquina en un estado de aceptación. Decimos que si es posible, pues si se toma el camino equivocado no se aceptaría una cadena que podría ser válida (una cadena del lenguaje aceptado por este autómata, designado por L(M).
      
      Formalmente el autómata finito no determinista consiste en una quíntupla (S, Σ, r i, F), donde:
      
      • S es un conjunto finito de estados
      • Σ es el alfabeto de la máquina
      • r es un subconjunto de S x = x S (posibles transiciones de la máquina)
      • i (un elemento de S) es el estado inicial
      • F (un subconjunto de S) es la colección de estados de aceptación
      
      Un autómata de la forma (S, Σ ,r i, F) acepta la cadena no vacía x1x2...xn si y solo si existe una serie de estados s0, s1,...sn tal que s0= Σ y sn = F y para cada entero j de 1 a n (sj-1,xj,sj) está en r. Además, las tripletas (p,x,q) y (p,x,r), donde q y r son estados que pueden ser distintos, pueden estar en r, diciéndose que al leer el símbolo x en el estado p se puede pasar al estado q o al r.
      
      Para hacer un programa de un autómata no determinista se podría hacer probando todas las rutas una a una hasta que se terminasen o se aceptase la cadena, lo cual no es eficiente por la cantidad de memoria necesaria (crece exponencialmente con el número de estados).
      
      Para analizar una cadena en un autómata finito no determinista vamos a seguir todas transiciones posibles en paralelo (atravesamos todas las rutas a la vez); la cadena se aceptará si alguna de las rutas acaba en un estado de aceptación. Nuestro estado en un momento dado ya no se hallará determinado por un estado del diagrama de transiciones, sino por la colección de los estados actuales de todas las rutas posibles; si K es la colección de estados actuales, al leer x del flujo de entrada obtendríamos un nuevo estado actual, representada por la colección de los estados a los que es posible llegar desde un estado K. Al pasar de conjuntos de estados a conjuntos de estados, se evitan los retrocesos (las rutas sucesivas distintas) además de superar el no determinismo del autómata.
      
      Para cada autómata finito no determinista, existe un autómata finito determinista que acepta exactamente el mismo lenguaje.
      
      Límite De Los Autómatas Finitos Deterministas
      
      Esta sección tratará de distinguir entre cadenas aceptables y no aceptables por autómatas finitos deterministas.
      
      Hay dos tipos especiales de lenguajes regulares:
      • La colección de todas las cadenas de longitud finita de un alfabeto
      • La colección de ninguna cadena, conocido como lenguaje vacío y se representa con (Ɛ)hay que diferenciar el lenguaje con la cadena vacía {φ } y el lenguaje que no tiene cadenas (el primero tiene una cadena y el segundo no tiene ninguna).
      
      `,`https://drive.google.com/file/d/1Qrox9rtsJbNNfigJX5RhsmHIFOVK6IHy/view?usp=drive_link`,`
      
      Como los dos son lenguajes regulares, entonces podemos generalizar a cualquier lenguaje regular y su complementario, que son regulares también. Un DFA es un caso especial de NFA en el que ningún estado tiene transiciones para diversos estados bajo el mismo símbolo y no se permiten transiciones Ɛ. Los diagramas de transición son autómatas determinísticos. Por ejemplo, el DFA de (a | b)* a b b puede ser:
      
      `,`https://drive.google.com/file/d/17reBnsrtzlELyf2p3JTq2N_7yECeiLcP/view?usp=drive_link`,`
      
      Que podría ser muy aproximado al diagrama de transición que construiríamos para la expresión.
      
      Para llegar de la expresión regular al autómata determinístico se emplea el método de Thompson que permite hacer la transformación y preparar la construcción del analizador de léxico.
            `
          ]
        },
      
        {
          contenido_id: 19,
          titulo: '5.3 Tablas de símbolos',
      area: AreaComputacion.TEORIA_COMPUTACION,
          descripcion: 'pendiente',
          tipo: TipoContenido.TAREA,
          orden: 3,
          url_recurso: null,
          unidad_id: 5,
          unidad: { unidad_id: 5, nombre: 'UNIDAD V - ANÁLISIS LÉXICO (Scanning)' },
          contenido: [
            `
      Las tablas de símbolos (también llamadas tablas de identificadores y tablas de nombres), realizan dos importantes funciones en el proceso de traducción: verificar que la semántica sea correcta y ayudar en la generación apropiada de código. Ambas funciones se realizan insertando o recuperando desde la tabla de símbolos los atributos de las variables usadas en el programa fuente. Estos atributos, tales como: el nombre, tipo, dirección de almacenamiento y dimensión de una variable, usualmente se encuentran explícitamente en las declaraciones o más implícitamente a través del contexto en que aparecen los nombres de variables en el programa.
      
      Una de las estructuras de datos que se encuentran relacionadas con las fases del proceso de compilación es la tabla de símbolos, la cual tiene como propósito registrar información que se comparte entre varias etapas y que permite administrar los recursos asociados a las entidades que manipulará el programa.
      La tabla de símbolos tiene típicamente la estructura de la siguiente forma:
      
      `,`https://drive.google.com/file/d/1yFZP6ndsH8V815Tv69Mu6ZsXuzZrURD6/view?usp=drive_link`,`
      
      En donde podemos apreciar la designación de la entidad y su token -derivados del análisis de léxico- así como una serie de atributos (tipo de dato, dirección en memoria) que emanan de otras fases (análisis gramatical y semántico). Las consultas a la tabla de símbolos se realizan por medio del lexema con que se designa a la entidad.
      
      Esta concepción de la tabla de símbolos es demasiado simple para fines prácticos si consideramos que el lexema de la entidad es de longitud variable y se desea que la estructura sea homogénea. Una solución es considerar que en el campo lexema se tiene un apuntador (que siempre ocupa el mismo espacio) hacia donde se registrarán propiamente los lexemas. Eso evitará el desperdicio de memoria al tener el espacio justo para representar a cada lexema.
      
      `,`https://drive.google.com/file/d/17xMA6NORr8toSFfazNhJGy6W4blwjatT/view?usp=drive_link`,`
      
      La creación de la tabla de símbolos compete inicialmente al analizador de léxico, quien registrará a las entidades (reconocidas bajo el patrón de Identificador) de manera única, por medio del binomio de operaciones Búsqueda-Inserción.
      
      En el contexto de un programa las entidades pueden describir propiamente objetos manipulables por el lenguaje (por ejemplo variables, constantes o funciones) o descriptores de acciones (las palabras reservadas); ambas situaciones son reconocidas bajo el mismo patrón de identificador y la tabla de símbolos se emplea para hacer su discriminación. El analizador de léxico funciona bajo el siguiente mecanismo:
      
      `,`https://drive.google.com/file/d/1bMj4oPWLHimAlHesuPXgbQ6GPSwDvmxw/view?usp=drive_link`,`
      
      Cuando construir la tabla de símbolos y cuando interactuar con ella. 
      
      El punto del procesador de traducción en el cual son invocadas las rutinas de manejo de la tabla de símbolos dependen primeramente del número y la naturaleza de los pasos del compilador.
      
      En un compilador multipasos, la tabla de símbolos es creada durante el paso de análisis léxico. Por medio de un índice se entra a la tabla de símbolos para ubicar la variable, a partir del token generado por el scanner.
      
      Contenido de la tabla de símbolos.
      Una tabla de símbolos puede conceptual izarse como una serie de renglones, cada uno de los cuales contiene una lista de valores de atributos que son asociados con una variable en particular. Las clases de los atributos que aparecen en una tabla de símbolos dependen en algún grado de la naturaleza del lenguaje de programación para el cual se escribe el compilador. Por ejemplo, un lenguaje puede ser sin tipos, y por lo tanto el atributo tipo no necesita aparecer en la tabla. Similarmente, la organización de la tabla de símbolos variará dependiendo de las limitaciones de memoria y tiempo de acceso.
      
      A continuación se presenta un ejemplo de una tabla de símbolos típica.
      
      `,`https://drive.google.com/file/d/19-ne8rmpS5gw3loQGHud6FwyLcufgnBq/view?usp=drive_link`,`
      
      Los atributos que se manejan en la tabla anterior y que se describen enseguida, no son estrictamente necesarios para todos los compiladores; sin embargo, cada uno de tales atributos deberá ser considerado para la implementación de un compilador de un compilador en particular.
      
          1. Nombre de la variable.
          2. Dirección del código objeto.
          3. Tipo.
          4. Valor (o número de parámetros para uno procedimiento).
          5. Número de línea fuente donde fue declarada la variable.
          6. Números de línea fuente donde se hace referencia a la variable.
          7. Liga. Campo cuyos valores sirven para listar las variables en orden alfabético.
      
      El nombre de la variable debe estar, en cualquier caso, formando parte de la tabla de símbolos, ya que es el medio por el cual una variable en particular es identificada en las etapas de análisis semántico y generación de código. Para proveer un acceso rápido, es conveniente manejar un tamaño predefinido pero lo suficientemente grande para los nombres de las variables. Una longitud igual o mayor que 16 caracteres es bastante adecuado. El identificador completo puede almacenarse, justificado a la izquierda, en un campo de longitud fija en la tabla de símbolos. Este criterio posibilita un acceso más rápido a la tabla de símbolos, a costa de no aprovechar eficientemente el espacio de almacenamiento en el caso de las variables con identificadores cortos.
      
      Otro criterio para manejar los identificadores en la tabla de símbolos consiste en colocar una cadena descriptora en el campo Nombre_Variable de la tabla. El descriptor contiene los sub-campos posición y longitud. El sub-campo posición es un apuntador que indica la posición del primer carácter del nombre de la variable en un área general de cadenas, y el sub-campo describe el número de caracteres del nombre de la variable. Este enfoque produce un acceso más lento a la tabla de símbolos, pero ofrece un ahorro considerable de espacio de almacenamiento.
      
      En el proceso de compilación, una dirección de código objeto debe asociarse con todo variable en un programa. Esta dirección establece la ubicación relativa para los valores de la variable en tiempo de ejecución. La dirección del código objeto se coloca en la tabla de símbolos cuando la variable es declarada (o encontrada por primera vez). Esta dirección es re-invocada desde la tabla cuando la variable es referenciada en el programa fuente. La dirección es luego utilizada en una instrucción objeto que accede al valor de esa variable (carga o almacena).
      
      El atributo tipo se almacena en la tabla de símbolos cuando los lenguajes compilados tienen tipos de datos explícitos o implícitos. Tradicionalmente, el tipo de dato de una variable es almacenado codificada en la tabla de símbolos; por ejemplo 1 puede representar el tipo real, 2 el tipo integer, etc. Los atributos número_de_dimensiones y número_de_parámetros son importantes en la fase de análisis semántico. En las referencias a los arreglos, el número de dimensiones debe coincidir con el especificado en la declaración del arreglo, y esto debe ser verificado en la fase de análisis semántico. El número de dimensiones se utiliza también como parámetro en el cálculo de la dirección de un elemento particular del arreglo. El número de parámetros de la invocación a un procedimiento también debe coincidir con el número usado en la declaración. En la construcción de la tabla de símbolos, es conveniente considerar el número de parámetros de un procedimiento como su número de dimensiones y así combinar estos dos atributos en uno. Además de conveniente, este enfoque también es consistente, ya que el tipo de verificación semántica para ambos atributos es similar.
      
      El atributo liga se ha incluido en la tabla de ejemplo simplemente para facilitar la producción de un listado de referencias cruzadas ordenado alfabéticamente por nombre de variable.
      
      La tabla de símbolos debe incluir cada uno de los elementos o cadenas aceptadas por el lenguaje, conocidos como elementos terminales, para asignarle el token o identificador numérico que le corresponda a cada elemento terminal. Los elementos no terminales, se deberán dar de alta en la tabla de símbolos y re-asignarle el mismo token o identificador cada vez que se utilicen.
      
      Ejemplo:
      Diseño de Tablas de símbolos por carácter para el lenguaje STOP.
      
      `,`https://drive.google.com/file/d/1bKDaEGsrpguJIAmPm2tL9-ZkXP2jFX0Q/view?usp=drive_link`,`
      
      `,`https://drive.google.com/file/d/1ERXPEdqVBgcbcNe8XLTv0Hu6L4uQEvKN/view?usp=drive_link`,`
            `
          ]
        },
        
        {
          contenido_id: 20,
          titulo: '5.4 Manejo de errores',
      area: AreaComputacion.TEORIA_COMPUTACION,
          descripcion: 'pendiente',
          tipo: TipoContenido.TAREA,
          orden: 4,
          url_recurso: null,
          unidad_id: 5,
          unidad: { unidad_id: 5, nombre: 'UNIDAD V - ANÁLISIS LÉXICO (Scanning)' },
          contenido: [
            `
      Algunos errores que se presentan en el análisis léxico son como escribir mal un identificador, palabra clave u operador.
      
      Hay diversa razones por la que se separa la fase léxica de la sintáctica son:
      
      • El diseño del analizador sintáctico es mas fácil de esa forma, ya que este no ha de preocuparse de leer el archivo de entrada, ni de saltar blancos, ni comentarios, ni de recibir caracteres inesperados, puesto que todo ello ha sufrido un filtrado previamente por el analizador lexicográfico. Por tanto, el diseño consiguiente se hace más claro y comprensible.
      
      • Se mejora la eficiencia del compilador en su conjunto. La lectura del programa fuente suele requerir gran parte del tiempo de compilación, que se ve reducido si el analizar lexicográfico incorpora técnicas especializadas de lectura, o esta realizando un ensamblador.
      
      • Aumenta la portabilidad del compilador, ya que de todas las diferencias que se produzcan en el alfabeto de entrada, o en el dispositivo de almacenamiento, pueden ser reducidas al analizador lexicográfico, dejando al análisis sintáctico intacto.
      
      • Se pueden resolver fácilmente casos dudosos.
      
      El analizador lexicográfico, además, realiza ciertas tareas adicionales como:
      
      Eliminar comentarios del programa fuente.
      
      Eliminar los blancos, saltos de página, tabuladores, retornos de carro, y demás caracteres propios del dispositivo de entrada.
      
      Reconocer las variables y asignarles una posición en la tabla de símbolos.
      
      Relacionar los mensajes de error que produce el compilador en sus diversas fases con la parte correspondiente del programa fuente (número de línea en que aparecen). En ciertos casos el analizador lexicográfico se encarga también de producir el listado del programa con los errores de compilación.
      
      Si el programa fuente incorpora meta-nociones o macros, el analizador lexicográfico puede incorporar un pre-procesador.
      Avisa de los errores lexicográficos que detecta.
      
      Hay diversas razones por las que se separa la fase de análisis de un compilador en análisis lexicográfico y análisis sintáctico. Son las siguientes:
      
      El diseño del analizador sintáctico es más fácil de esta forma, ya que éste no ha de preocuparse de leer el archivo de entrada, ni de saltar blancos, ni comentarios, ni de recibir caracteres inesperados, puesto que todo ello ha sido filtrado previamente por el analizador lexicográfico. Por tanto, el diseño consiguiente se hace más claro y comprensible.
      
      Se mejora la eficiencia del compilador en su conjunto. La lectura del programa fuente suele requerir gran parte del tiempo de compilación, que se ve reducido si el analizador lexicográfico incorpora técnicas especiales de lectura, o está realizado en ensamblador.
      
      Aumenta la portabilidad del compilador, ya que todas las diferencias que se produzcan en el alfabeto de entrada, o en el dispositivo de almacenamiento, pueden ser reducidas al analizador lexicográfico, dejando al analizador sintáctico intacto. Supóngase que el compilador lee un texto ASCII y nos interesa construir uno que sea capaz de leer un texto escrito bajo el estándar EBCDIC. Bastaría con modificar el analizador lexicográfico.
      
      Se pueden resolver fácilmente casos dudosos como la siguiente sentencia FORTRAN:
      
      DO5I=1.25 ( compárese con DO5I=1,25 )
      
      Hasta que no se reconoce el carácter "." o el carácter "," no podemos saber si se trata de una sentencia de asignación o de una instrucción DO.
      
      Para comprender mejor por qué se realiza un explorador veamos el siguiente ejemplo, que corresponde a una definición muy restringida del lenguaje de programación PASCAL:
      
      <SENT> -> if <EXP-BOOL> then <SENT> [else <SENT>]<SENT> -> <VAR> : =
      
      <EXP><EXP-BOOL>-> <VAR-BOOL> | <EXP> <COMP> <EXP><COMP> -> < | > | <> |
      
      <= | >= | =< | => | =<EXP> -> <EXP> <OP> <FACTOR> | <FACTOR><FACTOR> -> (
      
      <EXP> ) | <VAR> | <CTE><CTE> -> <DIGITO> [<DIGITO>]<VAR> -> <LETRA>
      
      [<ALFANUM>]<VAR-BOOL>-> <LETRA> [<ALFANUM>]<ALFANUM> -> <LETRA> |
      
      <DIGITO><LETRA> -> a | b | ...... | z<DIGITO> -> 0 | 1 | ...... | 9<OP> -> + | - | * | / | **
      
      En esta gramática serían símbolos terminales los siguientes:
      
      T = {, ,a,b,c,... z,(,),+,-,*,/,<,>,=,:}
      
      y los símbolos no terminales que se han empleado son:
      
      N = {<SENT>,<EXP-BOOL>,<VAR>,<EXP>,<VAR-BOOL>,<COMP>,<OP>,
      
      <FACTOR>,<CTE>,<LETRA>,<ALFANUM>,<DIGITO>}
      
      Esta gramática puede ser descompuesta o transformada en otras dos, como éstas:
      
      Primera:
      <PRES-IF> -> if<PRES-THEN> -> then<PRES-ELSE> -> else<COMP> -> < | > | <> |
      
      <= | >= | =< | => | =<CTE> -> <DIGITO> [<DIGITO>]<VAR> -> <LETRA>
      
      [<ALFANUM>]<VAR-BOOL> -> <LETRA> [<ALFANUM>]<ALFANUM> -> <LETRA> |
      
      <DIGITO><LETRA> -> a | b | ...... | z<DIGITO> -> 0 | 1 | ...... | 9<OP> -> + | - | * | /
      
      | **<ASIG> -> :=<ABREPAR> -> (<CIERRAPAR> -> )
      
      cuyos símbolos terminales y no terminales serían:
      
      T = {, ,a,b,c,... z,(,),+,-,*,/,<,>,=,:}
      
      N = {<PRES-IF>,<PRES-THEN>,<PRES-ELSE>,<COMP>,<CTE>,<VAR>, <VAR-
      
      BOOL>,<LETRA>,<DIGITO>,<ALFANUM>,<OP>,<ASIG>,
      
      <ABREPAR>,<CIERRAPAR>}
      
      Segunda:
      
      <SENT> -> <pres-if> <EXP-BOOL> <pres-then> <SENT> [<pres-else>
      
      <SENT>]<SENT> -> <var> <asig> <EXP><EXP-BOOL> -> <VAR-BOOL> | <EXP>
      
      <comp> <EXP><EXP> -> <EXP> <op> <FACTOR> | <FACTOR><FACTOR> ->
      
      <abrepar> <EXP> <cierrapar> | <var> | <cte>
      
      cuyos símbolos terminales y no terminales serían:
      
      T = {<pres-if>,<pres-then>,<pres-else>,<var>,<asig>, <var-
      
      b>,<comp>,<op>,<abrepar>,<cierrapar>,<cte>}
      
      N = {<SENT>,<EXP-BOOL>,<EXP>,<FACTOR>}
      
      La primera de estas dos gramáticas es la que utiliza el explorador o analizador lexicográfico, mientras que la segunda corresponde a la gramática del parser o analizador sintáctico.
      
      Como puede apreciarse, la primera gramática es de tipo 3 según la clasificación de Chomsky (es decir, es una gramática regular), mientras que la segunda es una gramática de contexto libre (o sea, de tipo 2).
      
      Debe hacerse notar que las meta-nociones (símbolos no terminales) de la gramática del analizador lexicográfico, o bien no aparecen en la gramática del analizador sintáctico, o son símbolos terminales en dicha gramática.
      Para la implementación de un analizador lexicográfico existen en la actualidad tres vías.
      
      La principal ventaja de cada una de ellas respecto a las siguientes es la mayor comodidad y facilidad de programación. Por el contrario, la implementación en un lenguaje más cercano a la máquina hace posible una mejor gestión de las entradas/salidas, con la consiguiente rapidez de ejecución.
      
      Escribir el analizador lexicográfico en lenguaje ensamblador directamente.
      
      Escribir el analizador lexicográfico en un lenguaje de alto nivel, usando las facilidades de entrada/salida que éste tenga.
      
      Usar un generador de analizadores lexicográficos, capaz de producir un analizador lexicográfico a partir de las expresiones regulares que definen los distintos tokens. En este caso, el generador incorpora sus propias rutinas de entrada/salida. Uno de los generadores de analizadores lexicográficos cuyo uso está más generalizado es el programa Lex. Mismo que se describe en el ejercicio de este capitulo.
            `
          ]
        },
      
        {
          contenido_id: 21,
          titulo: '5.5 Ejercicios de programación de analizadores mediante LEX',
      area: AreaComputacion.TEORIA_COMPUTACION,
          descripcion: 'pendiente',
          tipo: TipoContenido.TAREA,
          orden: 5,
          url_recurso: null,
          unidad_id: 5,
          unidad: { unidad_id: 5, nombre: 'UNIDAD V - ANÁLISIS LÉXICO (Scanning)' },
          contenido: [
            `
      En este apartado y en el siguiente se describe una herramienta particular, llamada Lex, que ha sido ampliamente usada para especificar analizadores léxicos para una variedad de lenguajes. Se hará referencia a la herramienta como el compilador Lex, y a su especificación de entrada como el lenguaje Lex. La discusión de una herramienta existente nos permitirá mostrar como la especificación de patrones usando expresiones regulares puede estar combinada con acciones, como por ejemplo, crear entradas en una tabla de símbolos, expandir macros, o incluso generar documentación automáticamente.
      
      El programa Lex está diseñado para ser utilizado junto con el programa Yacc, que es un generador de analizadores sintácticos.
      
      Lex suele ser usado según la figura 5.12:
      
      `,`https://drive.google.com/file/d/1dPqritxrZJ0AzeSzWhQfLwdO4BSLrO5M/view?usp=drive_link`,`
      
      Primero, se prepara una especificación de un analizador léxico creando un programa contenido, por ejemplo en el archivo prog.l, en lenguaje Lex. Entonces, prog.l se pasa a través del compilador Lex para producir un programa en C, que por defecto se denomina lex.yy.c en el sistema operativo UNIX. Éste consiste en una representación tabular de un diagrama de transición construido a partir de las expresiones regulares de prog.l, junto con una rutina estándar que usa la tabla de reconocimiento de lexemas. Las acciones asociadas con expresiones regulares en prog.l son trozos de código C, y son transcritas directamente a lex.yy.c. Finalmente, lex.yy.c se pasa a través del compilador C para producir un programa objeto, que por defecto se llama a.out, el cual es el analizador léxico que transforma una entrada en una secuencia de tokens.
      
      Un programa Lex consta de tres secciones:
      
      <declaraciones>
      
      %%<reglas de traducción>%%
      
      <procedimientos auxiliares>
      
      La sección de declaraciones incluye declaraciones de variables, constantes y definiciones regulares. Las definiciones regulares son sentencias usadas como componentes de las expresiones regulares que aparecen en las reglas.
      
      Las reglas de traducción de un programa Lex son sentencias de la forma:
      
      p1 { acción1 }
      
      p2 { acción2 }
      
      ......
      
      pn { acciónn }
      
      donde cada pi es una expresión regular y cada acción i es un fragmento de programa, describiendo qué acción debe realizar el analizador léxico cuando el patrón pi se corresponde con un lexema. En Lex, las acciones están escritas en C.
      
      La tercera sección contiene cualesquiera procedimientos auxiliares que sean requeridos por las acciones. Alternativamente, estos procedimientos pueden ser compilados separadamente y montados junto con el analizador léxico.
      
      Un analizador léxico creado por Lex funciona de acuerdo con un analizador sintáctico de la siguiente manera. Cuando es activado por el analizador sintáctico, el analizador léxico comienza leyendo de su entrada un carácter a la vez, hasta que encuentre el prefijo más largo de la entrada que ha correspondido con una de las expresiones regulares pi.
      Entonces, ejecuta acción i, que típicamente devolverá el control al parser. Pero, si no lo hace, entonces el analizador léxico procede a buscar más lexemas, hasta que una acción contenga una sentencia return o se lea el archivo completo. La búsqueda repetida de lexemas hasta una devolución explícita del control permite que el analizador léxico procese los espacios en blanco y comentarios convenientemente.
      
      El analizador léxico devuelve un entero, que representa el token, al analizador sintáctico.
      
      Para pasar un valor de atributo con información sobre el lexema, se puede usar una variable global llamada yylval. Esto se hace cuando se use Yacc como generador del analizador sintáctico.
      
      Los analizadores léxicos, para ciertas construcciones de lenguajes de programación, necesitan ver adelantadamente más allá del final de un lexema antes de que puedan determinar un token con certeza. En Lex, se puede escribir un patrón de la forma r1/r2, donde r1 y r2 son expresiones regulares, que significa que una cadena se corresponde con r1, pero sólo si está seguida por una cadena que se corresponde con r2. La expresión regular r2, después del operador lookahead "/", indica el contexto derecho para una correspondencia; se usa únicamente para restringir una correspondencia, no para ser parte de la correspondencia.
      
      • Recuperación de errores lexicográficos: Los programas pueden contener diversos tipos de errores, que pueden ser:
      
      • Errores lexicográficos: Que veremos a continuación.
      
      • Errores sintácticos: Por ejemplo, una expresión aritmética con mayor numero de paréntesis de apertura que de cierre.
      
      • Errores semánticos: Por ejemplo, la aplicación de un operador a un tipo de datos incompatible con el mismo.
      
      • Errores lógicos: Por ejemplo, un bucle sin final.
      
      Cuando se detecta un error, un compilador puede detenerse en ese punto e informar al usuario, o bien desechar una serie de caracteres del texto fuente y continuar con el análisis, dando al final una lista completa de todos los errores detectados. En ciertas ocasiones es incluso posible que el compilador corrija el error, haciendo una interpretación coherente de los caracteres leídos. En estos casos, el compilador emite una advertencia, indicando la suposición que ha tomado, y continúa el proceso sin afectar a las sucesivas fases de compilación.
      
      Los errores lexicográficos se producen cuando el analizador no es capaz de generar un token tras leer una determinada secuencia de caracteres. En general, puede decirse que los errores lexicográficos son a los lenguajes de programación lo que las faltas de ortografía a los lenguajes naturales. Las siguientes situaciones producen con frecuencia la aparición de errores lexicográficos:
      
      Lectura de un carácter que no pertenece al vocabulario terminal previsto para el autómata. Lo más normal en este caso es que el autómata ignore estos caracteres extraños y que continué el proceso normalmente. Por ejemplo, pueden dar error en la fase de análisis lexicográfico la inclusión de caracteres de control de la impresora en el programa fuente para facilitar su listado.
      
      Omisión de un carácter. Por ejemplo, si se ha escrito ELS en lugar de ELSE.
      
      Se ha introducido un nuevo carácter. Por ejemplo, si escribimos ELSSE en lugar de ELSE.
      Han sido permutados dos caracteres en el token analizado. Por ejemplo, si escribiéramos ESLE en lugar de ELSE.
      
      Un carácter ha sido cambiado. Por ejemplo, si se escribiera ELZE en vez de ELSE.
      
      Las técnicas de recuperación de errores lexicográficos se basan, en general, en la obtención de los distintos sinónimos de una determinada cadena que hemos detectado como errónea. Por otra parte, el analizador sintáctico es capaz en muchos casos de avisar al analizador lexicográfico de cuál es el token que espera que éste lea.
      
      Para el ejemplo de borrado de un carácter, tenemos que los sinónimos de ELSE son ELS, ELE, ESE, y LSE. Por tanto, si incluimos en nuestro analizador una rutina de recuperación de errores debidos a omisión de caracteres, cualquiera de estos sinónimos sería aceptado en lugar del lexema ELSE, se emitiría la correspondiente advertencia, y el proceso continuaría asumiendo que se ha leído el token <pal_res_ELSE>.
      
      Análogamente, podemos incluir rutinas para los demás casos. Por ejemplo, si el analizador lee el lexema ESLE, y no puede construir un token correcto para él mismo, procedería a generar los sinónimos por intercambio de caracteres (es decir, SELE, ELSE o ESEL) y comprobaría si alguno de ellos es reconocible. En caso afirmativo, genera el token correspondiente y advierte al usuario del posible error y de su interpretación automática, continuando con el proceso.
      
      Todos los procedimientos para la recuperación de errores lexicográficos son en la práctica métodos específicos, y muy dependientes del lenguaje que se pretende compilar.
      `
          ]
        },
      
        {
          contenido_id: 22,
          titulo: 'Ejercicios de repaso para la Unidad V',
      area: AreaComputacion.TEORIA_COMPUTACION,
          descripcion: 'pendiente',
          tipo: TipoContenido.TAREA,
          orden: 6,
          url_recurso: null,
          unidad_id: 5,
          unidad: { unidad_id: 5, nombre: 'UNIDAD V - ANÁLISIS LÉXICO (Scanning)' },
          contenido: [
            `
      1. Desarrolle un autómata que represente el comportamiento de una calculadora.
      
      Desarrollar un autómata para el comportamiento de una calculadora. Este autómata tomará en consideración las operaciones que se realizan en el teclado de la calculadora, mismas que se muestra en la figura 1, con las siguientes consideraciones:
      La Tecla CE/C. Si se pulsa una vez, borra la última entrada (clear). Si se pulsa dos veces (Clear all), borra todo lo introducido hasta regresar al estado de iniciar nuevamente.
      
      El contenido del display se toma como independiente, esto es, la salida de resultados es un aspecto que no se incluye dentro del autómata.
      Existen teclas de doble función como El ON/OFF. La primera vez que se pulsa la tecla
      
      ON/OFF se interpreta como ON. La segunda que se oprime la tecla ON/OFF representa
      
      un OFF. Esta calculadora cuando se pone la pila siempre espera el pulsar el ON/OFF.
      
      Otras teclas que incluyen doble función son las que tienen el sombreado, todas éstas se
      
      activan con la tecla gris. Ejemplo: Para oprimir la función 2 al cubo (2 a la 3), se oprime
      
      primero el 2, luego la tecla gris, posteriormente se oprime la tecla Y a la x para luego oprimir el signo de igual y obtener el resultado.
      
      Los paréntesis sólo funcionan una vez. En el caso de las funciones y operaciones.
      Las funciones de logaritmo y anti-logaritmo (no necesitan la tecla gris)
      La tecla EE, permite introducir el exponente de ingeniería base 10.
      
      Existen funciones unarias, mismas que requieren un solo operador (operan con el último valor). También existen funciones binarias, las cuales requieren de dos valores (un ejemplo de funciones binarias son ex y yx)
      
      La calculadora realiza operaciones aritméticas como son la suma, resta, multiplicación y división. Se aceptan funciones trigonométricas, Seno, Coseno, Tangente, el número PI ynotación científica. Así como las funciones alternas del inverso del seno, inverso del coseno e inverso de la tangente.
      
      https://drive.google.com/file/d/1JUWr8mTlmdVRMMpFgZgpap9yzpUG0CwP/view?usp=drive_link
      `
          ]
        },
      
        // ── UNIDAD VI ─────────────────────────────────────────────
      
        {
          contenido_id: 23,
          titulo: '6.1 Estructura General del Lenguaje y Gramáticas Independientes del contexto',
      area: AreaComputacion.TEORIA_COMPUTACION,
          descripcion: 'pendiente',
          tipo: TipoContenido.TAREA,
          orden: 1,
          url_recurso: null,
          unidad_id: 6,
          unidad: { unidad_id: 6, nombre: 'UNIDAD VI - ANÁLISIS SINTÁCTICO (Parsing)' },
          contenido: [
            `
      El análisis jerárquico se denomina análisis sintáctico, este implica agrupar los componentes léxicos del programa fuente en frases gramaticales que el compilador utiliza para sintetizar la salida.
      
      La estructura jerárquica de un programa normalmente se expresa utilizando reglas recursivas. Las construcciones léxicas no requieren recursión mientras que las construcciones sintácticas suelen requerirla.
      
      Normalmente se reconocen los identificadores por el simple examen del flujo de entrada esperando hasta encontrar un carácter que no sea ni letra ni digito y agrupando después todas las letras y dígitos encontrados hasta este punto en un componente léxico identificador. Los caracteres así agrupados se registran en una tabla llamada tabla de símbolos.
      
      ÁRBOLES SINTÁCTICOS
      
      Un árbol sintáctico es una representación objetiva y compacta del análisis sintáctico en el que los operadores aparecen como los nodos interiores (*,+,-,/) y los operandos (datos) de un operador son los hijos del nodo para ese operador
      
      Función del análisis sintáctico.
      Analizar sintácticamente una tira o cadena de tokens no es más que encontrar para ella el árbol sintáctico o de derivación que tiene como raíz el axioma de la gramática, y como nodos terminales la sucesión ordenada de símbolos que componen la cadena analizada.
      En caso de no existir este árbol sintáctico, la cadena no pertenecerá al lenguaje, y el analizador sintáctico ha de emitir el correspondiente mensaje de error.
      Existen dos formas de analizar sintácticamente una cadena:
      
      • Análisis descendente: Partiendo del axioma inicial de la gramática se va descendiendo utilizando las derivaciones izquierdas, hasta llegar a construir la cadena analizada.
      • Análisis ascendente: Se va construyendo el árbol desde sus nodos terminales. Es decir, se construye desde los símbolos de la cadena hasta llegar al axioma de la gramática. En este caso, se emplean normalmente las derivaciones más a la derecha hasta la localización de la raíz.
      
      Los principales métodos de análisis sintáctico son:
      
          • - Análisis descendente:
      • Análisis descendente con retroceso.
      • Análisis de gramáticas LL.
          • - Análisis ascendente:
      • Análisis ascendente con retroceso.
      • Análisis de gramáticas de precedencia simple.
      • Análisis de gramáticas de precedencia generalizada.
      • Análisis de gramáticas por el método mixto.
      • Análisis de gramáticas de precedencia de operador.
      • Análisis de gramáticas LR.
      
      Los análisis con retroceso se basan en la prueba sistemática de todas las alternativas posibles, dando marcha atrás tan pronto como se detecte que el camino seguido es erróneo. Pueden usarse para cualquier gramática de contexto libre, aunque tienen tres grandes inconvenientes: Primero, emplean mucho más tiempo para el análisis que los demás analizadores, dependiendo éste incluso de la ordenación de las reglas gramaticales; Segundo, no dan un buen diagnóstico de los errores que encuentran;
      Tercero, complican la generación de código cuando ésta se realiza al par que el análisis sintáctico.
      Los métodos más eficientes de análisis (tanto ascendente como descendente) no funcionan para todas las gramáticas de contexto libre, sino sólo para las gramáticas que cumplen unas determinadas condiciones. Afortunadamente, en la mayoría de los casos, pueden encontrase para los lenguajes de programación gramáticas de tipo LL o LR que los generen.
      
      Para representar el árbol sintáctico que conduce hasta una cadena se asigna a cada regla de la gramática un número. Se define el parse como la secuencia ordenada de números (de reglas) aplicadas para construir dicho árbol.
      
      Hay dos tipos de parse, que son:
      
      • El parse-izquierdo: Son los números de las reglas de derivación izquierda utilizadas para generar la cadena a partir del axioma, por tanto correspondiente a un análisis descendente.
      • El parse-derecho: Son los números de las reglas de derivación derecha utilizadas para generar la cadena a partir del axioma, en orden inverso. El tomar el orden inverso viene condicionado por ser el análisis ascendente el que normalmente utiliza las reglas de derivación derecha, con lo que el orden en el que aparecen al realizar el análisis es invertido.
      
      `,`https://drive.google.com/file/d/1OOjeDsIdw0e3xo9Ok39N9PtHVDD-AZek/view?usp=drive_link`,`
      
      Simultáneamente a la fase de análisis sintáctico, además de reconocer las secuencias de tokens, y analizar su estructura, pueden realizarse una serie de tareas adicionales, como:
      • Recopilar información de los distintos tokens y almacenarla en la tabla de símbolos.
      • Realizar algún tipo de análisis semántico, tal como la comprobación de tipos.
      • Generar código intermedio.
      • Avisar de los errores que se detecten
      
      ANÁLISIS SINTÁCTICO DESCENDENTE
      
      El análisis sintáctico descendente recursivo es un método en el que se ejecuta un conjunto de procedimientos recursivos para procesar la entrada. A cada elemento no terminal de la gramática se le asocia un procedimiento. Aquí, se considera una forma especial de análisis sintáctico descendente recursivo, llamado análisis sintáctico predictivo, en el que el símbolo de preanálisis determina sin ambigüedad el procedimiento seleccionado para cada elemento no terminal. La secuencia de procedimientos llamados en el procesamiento de la entrada define implícitamente un árbol de análisis sintáctico para la entrada.
      
      S --> cAd
      A --> ab | a
      
      El símbolo de pre análisis guía la selección de la producción que desea divisar. Si el lado derecho de una producción empieza con un componente léxico, entonces la producción se usa cuando el símbolo de pre análisis coincide con el componente léxico.
      
      Se puede considerar el análisis sintáctico descendente como un intento de encontrar una derivación por la izquierda para una cadena de entrada. También se puede considerar un intento de construir un árbol de análisis sintáctico para la entrada comenzando desde la raíz y creando los nodos del árbol en orden previo.
      
      En muchos casos, escribiendo con cuidado una gramática, eliminando su recursión por la izquierda, se puede obtener una gramática analizable con un analizador sintáctico predictivo. Para construir una analizador sintáctico predictivo, se debe conocer, dado el símbolo actual A de entrada y el no terminal A a expandir.
      
      Ejemplo:
      Considérese la siguiente gramática:
      S --> cAd
      A --> Ab | a
      
      Para construir un árbol de análisis sintáctico descendente para la cadena
      
      S = cAd
      
      Primero se forma un árbol con un solo nodo etiquetado con el símbolo inicial (S). Un apuntador a la entrada que apunta a C el primer símbolo de w. Después se utiliza la primera producción de S para expandir el árbol.
      
      `,`https://drive.google.com/file/d/1iExr2D4Q05F6ifIpBNyl7PpWdpa1_RlH/view?usp=drive_link`,`
      
      Se empareja o se compara la hoja situada mas a la izquierda, etiquetada con c, con el primer símbolo de la cadena de entrada y a continuación se aproxima el apuntador de la entrada al siguiente carácter, y se compara con la siguiente hoja etiquetada con A. Entonces se puede expandir o derivar A utilizando la primera alternativa para obtener un nuevo árbol. Como ya se tiene una concordancia para el segundo símbolo de la entrada se lleva el apuntador de entrada al tercer símbolo y se compara con la hoja siguiente,
      
      etiquetada con b. Como b no concuerda con d, se indica que fallo y se regresa a A para saber si existe alternativa de A que no se haya intentado.
      
      Al regresar a A Se debe restablecer el apuntador de entrada a la posición 2, debe almacenar el valor del apuntador a la entrada en una variable local para evitar repeticiones innecesarias. Se intenta a continuación la segunda alternativa de A y nuevamente obtenemos un árbol distinto. Ver figura 6.1
      
      Se empareja la hoja a con el segundo símbolo de la cadena de entrada, si se encuentra concordancia, se busca la siguiente hoja a la derecha para hacer la comparación delsiguiente símbolo. Si esta no existe se considera la hoja derecha pero de un nivel superior.
      
      Como ya se ha producido el árbol de análisis sintáctico para la cadena de entrada se separa y se avisa el éxito del análisis descendente. Una gramática recursiva por la izquierda puede hacer que una analizador sintáctico por descenso recursivo, entre en un lazo infinito. Es decir, cuando se intenta expandir A, puede que de nuevo se este intentando expandir A sin haber consumido ningún símbolo de entrada.
      
      Análisis Sintáctico Descendente Recursivo
      
      El análisis sintáctico descendente busca encontrar una derivación por la izquierda para una cadena de entrada. Se puede considerar como un intento por construir un árbol de análisis sintáctico para la entrada comenzando desde la raíz y creando los nodos del árbol hacia abajo del árbol.
      
      El análisis sintáctico descendente recursivo permite re-examinar la entrada (de forma recursiva). Se muestran los pasos que se siguen en el análisis sintáctico descendente para la gramática: S| cAd A aba
      
      El algoritmo con el que se implementa esta gramática es:
      
      `,`https://drive.google.com/file/d/1WYRvYQnixPJbA1k5Xh-cmJFabxfWIWhc/view?usp=drive_link`,`
      
      `,`https://drive.google.com/file/d/1lrlR88wu9-2xmmlMv-kvAv8hDxm25nGi/view?usp=drive_link`,`
      
      Una gramática recursiva por la izquierda puede hacer que un analizador sintáctico descendente recursivo entre en un ciclo infinito, por lo que es necesario eliminar la recursión de la gramática.
      
      RECURSIÓN POR LA IZQUIERDA
      
      Una gramática es recursiva por la izquierda si tiene un no-terminal A tal que exista una derivación S|A para alguna cadena cAd|ab|a. Los métodos de análisis sintáctico descendente no pueden manejar gramáticas recursivas por la izquierda, por lo que se necesita una transformación que elimine la recursión por la izquierda.
      
      La siguiente regla se utiliza para eliminar la recursión por la izquierda de una gramática:
      
      Independientemente de cuántas producciones de A existan, se puede eliminar de ellas la recursión directa por la izquierda mediante la siguiente técnica.
      
      Método
      
      Para encontrar la forma normal conjuntiva en su mínima expresión de una fórmula original se desarrolló un procedimiento para validar que la fórmula esté bien formada; si el procedimiento tiene éxito, construye un árbol de sintaxis, que es procesado (cambiando el contenido y añadiendo nuevos nodos) para reducir la fórmula la forma normal conjuntiva en su mínima expresión. Como parte del proceso de reducción, el programa determina si la fórmula capturada es válida o es inconsistente.
      El método aplicado se puede dividir en tres partes: Especificación de gramática, Validación de la fórmula bien formada y conversión a la forma normal conjuntiva.
      
      Comparación entre los métodos de análisis LR Y LL.
      
      Vamos a hacer una comparación no exhaustiva entre los distintos métodos de análisis sintáctico que se ha visto, atendiendo a distintos aspectos de los mismos. Algunas de las características que resumimos aquí han sido ya explicadas convenientemente dentro de su contexto.
      
      `,`https://drive.google.com/file/d/1aTdm_1WQbJeCgvuBbFH_q15XIHJQS6M4/view?usp=drive_link`,`
      
      Como se ha visto, no todos los analizadores sirven para todas las gramáticas, ya que para poder construir las tablas de análisis correspondientes hay que imponer ciertas restricciones a la gramática. En este sentido, podemos establecer una clasificación entre las gramáticas que pueden ser analizadas según cada uno de los métodos: Este grafo indica la inclusión de un tipo de gramática en otras. Sin embargo, no es en sí indicativo de la amplitud de la clase de gramáticas que abarca cada nodo en comparación con otro que le sea disjunto. Entre todos los métodos existentes, el que cubre un mayor espectro de gramáticas en la práctica es sin duda el método LR. Los métodos basados en precedencia, por lo general, imponen unas condiciones muy estrictas a la gramática, por lo que en la actualidad son menos usados que los LR o LL.
      
      En cuanto a los lenguajes, se ha demostrado que todos aquellos que pueden ser reconocidos mediante análisis LR(k), también pueden ser reconocidos mediante análisis LR(1), o mediante un análisis LALR(1) o SLR(1). Es decir, que para toda gramática que acepta un análisis LR(k), existe una gramática equivalente que acepta un análisis SLR(1).
      
      De hecho, existe un algoritmo de transformación que realiza dicha conversión (a estos lenguajes se les llama lenguajes deterministas, y son un subconjunto propio de aquellos que pueden ser generados por gramáticas de contexto libre). Del mismo modo se ha demostrado que los lenguajes que admiten un análisis mediante precedencia generalizada pertenecen a esta clase, pero los lenguajes analizables mediante precedencia simple son un subconjunto propio de ella, y éstos a su vez incluyen a los lenguajes para los que existe una gramática que cumple las condiciones necesarias para un análisis de precedencia de operador.
      
      Por otra parte, puede demostrarse que los lenguajes LL(k) son un subconjunto propio de los lenguajes LR(k), y que para todo k existen lenguajes que son LL(k+1) pero no LL(k).
      
      El siguiente árbol resume la estructuración de los lenguajes:
      
      `,`https://drive.google.com/file/d/1D1g8yJE2-Pnh6O2YKxxc4GaFBnlMQJnr/view?usp=drive_link`,`
      
      Facilidad de construcción.
      
      La dificultad de construcción de las tablas de análisis ha quedado ya plasmada con suficiente claridad al explicar cada uno de los métodos. La construcción más laboriosa es sin duda la de las tablas LALR, LR y SLR, por este orden, seguidos de los análisis LL. Los métodos de precedencia suelen ser más simples de construir (especialmente el método de precedencia de operador) ya que la gramática es más sencilla, y no contiene producciones nulas. Sin embargo, tal como se indicó en el punto anterior, puede ser más difícil (si no imposible) la tarea de hallar la gramática que cumpla las restricciones necesarias. Éste es el principal problema del método LL.
      
      Facilidad de depuración.
      
      Debido a su complejidad, en las tablas LR se hace más difícil la resolución de las ambigüedades locales o de los pequeños ajustes finales necesarios para el correcto funcionamiento del analizador. Esta tarea es más fácil en los análisis basados en precedencia, y más aún en los análisis LL, dada la claridad con que resultan los programas escritos siguiendo este tipo de análisis.
      
      Detección de errores.
      
      En cuanto a la detección y recuperación de los errores, los mejores métodos son los LR y los LL, ya que detectan el error tan pronto como es posible, y posibilitan un correcto diagnóstico de los mismos. De entre ellos el mejor es el LR(1) canónico. Los métodos basados en relaciones de precedencia dan un diagnóstico muy pobre, y en algunos casos no detectan el error más que tras haber leído una serie de símbolos adicionales, con la dificultad que esto entraña para la adecuada recuperación del proceso de análisis.
      
      Utilización de la memoria.
      
      Todos los analizadores sintácticos pueden ser representados mediante tablas. Las más pequeñas son las de los métodos basados en precedencia de operador (más pequeñas aún si existen funciones de precedencia) que tienen tamaño t2, siendo t el número de símbolos terminales de la gramática. Los análisis de precedencia simple y el método mixto (MSP) requieren unas tablas de tamaño proporcional a(n+t)2, siendo n el número de símbolos no terminales de la gramática. Las tablas de precedencia generalizada necesitan, por lo general, tablas mayores, aún en los casos en los que sólo se almacenen los elementos no nulos de las mismas.
      
      Los análisis SLR(1) y LALR(1) utilizan tablas del mismo tamaño, mucho menores que las necesarias para el análisis LR(1) canónico de la misma gramática. En cuanto a los análisis LL(1), suelen generar tablas de longitud menor que las correspondientes LALR(1) o SLR(1). Sin embargo, por lo general, las gramáticas que se emplean para el análisis LL(1) contienen mayor número de producciones que las que definen el mismo lenguaje y puedan ser analizadas según LALR(1). Ésto se debe a que la eliminación de la recursividad izquierda, o la factorización necesaria para encajar la gramática en la condición LL(1), introducen reglas adicionales, por lo que en la práctica se equipara la necesidad de memoria para un análisis LL(1) o LALR(1).
      
      Velocidad del análisis.
      
      En lo que se refiere a la rapidez del análisis los métodos LR y LL aventajan considerablemente a los métodos basados en precedencia, quedando entre medias de ambos el método mixto MSP. El método LL(1) es algo más lento que el LR(1) debido al mayor número de reglas de producción, y el consiguiente mayor número de movimientos necesarios para alcanzar la cadena final a partir del axioma.
      Dentro de cada uno de los métodos estudiados existen diferentes "trucos" para agilizar la ejecución de los programas, por lo que la comparación no debe hacerse tanto entre los métodos como entre determinadas aplicaciones de los mismos. Existen varios estudios prácticos en este sentido.
      
      Gramáticas atribuidas
      
      A diferencia del análisis sintáctico, en donde en la actualidad existe un marco teórico ampliamente aceptado, el tema del análisis semántico suele ser tratado de diversas formas. La teoría que seguiremos para la formulación del análisis semántico y la posterior generación de código se basa en las gramáticas atribuidas.
      
      Antes de dar una definición formal intentaremos dar una idea intuitiva de las mismas.
      
      Una gramática atribuida, no es más que una gramática de contexto libre a cuyos símbolos X (terminales y no terminales) asociamos un conjunto de atributos. Cada atributo es como una variable que representa una determinada propiedad del símbolo X, y puede tomar un valor cualquiera de un determinado conjunto de valores posibles. Denotaremos a este atributo con un nombre precedido del símbolo al que esta asociado: X.a, X.valor, X.tipo, etc.... Al conjunto de todos los atributos asociados al símbolo X se le llama conjunto de atributos de X, que denotaremos por A(X).
      
      Ejemplo: Sea la gramática que representa las asignaciones
          (1) ASIGNACION --> VARIABLE igual EXPRESION
          (2) EXPRESION --> EXPRESION OPERADOR numero
          (3) EXPRESION --> numero
          (4) VARIABLE --> identificador
          (5) OPERADOR --> mas
      
      Esta gramática genera el lenguaje que contiene las siguientes cadenas de tokens:
      • identificador igual numero
      • identificador igual numero mas numero
      • identificador igual numero mas numero mas numero etc ...
      
      Estas cadenas de tokens son formadas por el analizador lexicográfico a partir de un fichero de entrada que contendría los lexemas correspondientes como ya vimos en el capítulo dedicado a analizadores lexicográficos.
      
          Por ejemplo:
          Cuatro := 2.0 + 2
          Alfa := 3 + 4.5 + 1.5
      
      Vamos a considerar los atributos siguientes, cada uno de los cuales representa una propiedad determinada del símbolo al que esta asociado.
      
      `,`https://drive.google.com/file/d/1Z6knvamNZ4domcBboTPwLmrNaN5xqs4s/view?usp=drive_link`,`
      
      Los atributos asociados a X tomarán una serie de valores determinados en cada nodo del árbol sintáctico de una sentencia del lenguaje generado por la gramática en el que esté situado el símbolo X. Estos valores serán establecidos de acuerdo con un conjunto de reglas semánticas asociadas a alguna de las reglas sintácticas de la gramática de las que intervengan en el nodo. Al conjunto de reglas semánticas asociado a una regla sintáctica lo llamaremos R(p). Las reglas semánticas vienen dadas en función de los atributos de los demás símbolos que componen la regla.
      
      Ejemplo: Continuando con el ejemplo anterior, vamos a formar el árbol sintáctico correspondiente al análisis de la cadena de caracteres:
      
      Cuatro := 2.0 + 2
      
      Tras realizar el análisis lexicográfico obtenemos la cadena de tokens:
      
      identificador igual numero mas numero
      
      Además, el analizador lexicográfico ha realizado las correspondientes acciones semánticas y nos da los valores de algunos de los atributos de los tokens (símbolos terminales de nuestro análisis). Estos atributos, como ya veremos, reciben el nombre de atributos intrínsecos.
      
      Sean estos :
      
      identificador.tipo = Real
      numero.tipo = Real
      numero.valor = 2.000
      numero.tipo = Entero
      numero.valor = 2
      
      Cada nodo del árbol estará ocupado por un símbolo de la gramática. Aquellos símbolos que tengan atributos asociados los representaremos con ellos:
      
      `,`https://drive.google.com/file/d/1fBKiaaEw14rdxevOuen3yOMPGCp6dcWI/view?usp=drive_link`,`
      
      `,`https://drive.google.com/file/d/1rYzK5SX97q10Kpxr5VdoX3hcvF52VWkT/view?usp=drive_link`,`
      
      Vamos a suponer que las funciones Suma_real y Suma_Entera, y los procedimientos Ent_Real y Real_Ent (que convierten un entero en un real, y viceversa) pertenecen ya al nivel inferior que es capaz de ejecutar la máquina.
      
      Por lo general, pueden intervenir dos reglas en un nodo de un árbol sintáctico de una cadena del lenguaje, ocupado por el símbolo X:
      
      `,`https://drive.google.com/file/d/1jt1N0UA5-guDT18yYvGaGPSJ8VXTAhfW/view?usp=drive_link`,`
      
      Algunos de los valores de los atributos del símbolo X en dicho nodo se calculan mediante reglas semánticas asociadas a la regla anterior (p), mientras que otros se calculan mediante reglas asociadas a la regla posterior (q). En el primero de los casos diremos que el atributo correspondiente a X es heredado, mientras que en el segundo caso diremos que el atributo es sintetizado. Al conjunto de atributos heredados lo llamaremos AH(X), y al conjunto de atributos derivados AS(X). Los conjuntos AH(X) y AS(X) son disjuntos.
      
      Por último, y para garantizar la corrección semántica de una sentencia se establecen unas condiciones que han de cumplir los atributos de cada uno de los símbolos de una misma regla sintáctica. Llamamos a este conjunto de condiciones B(p).
      
      Ejemplo: Continuando con el ejemplo anterior, aplicando las reglas correspondientes en cada caso podemos calcular los atributos de todos los símbolos en todos los nodos del árbol sin más que aplicar la regla semántica que necesitemos. Nótese que sólo una regla semántica es aplicable para el cálculo de un determinado atributo de un símbolo en un nodo. El árbol sintáctico quedaría:
      
      `,`https://drive.google.com/file/d/10fgxvnENpiGFg1_FY9Zv0sMuD9kRfIyC/view?usp=drive_link`,`
      
      Dependiendo de la producción a la que esté asociada la regla que empleamos para calcular los atributos, podemos clasificar a estos en atributos sintetizados y atributos heredados. Se va a considerar que los símbolos terminales sólo tienen atributos sintetizados, que son proporcionados por el analizador lexicográfico. Los siguientes atributos son sintetizados:
      
          EXPRESION.tipo
          EXPRESION.valor
          VARIABLE.tipo
          numero.tipo
          numero.valor
          identificador.tipo
          Y los siguientes serían atributos heredados:
          VARIABLE.valor
          OPERADOR.tipo
      
      Por último, podemos establecer algunas condiciones para que las sentencias analizadas sean correctas. En este caso, sólo impondremos una condición asociada a la primera regla:
      
      B(1) := (VARIABLE.tipo = EXPRESION.tipo)
      
      A continuación vamos a definir formalmente el concepto de gramática atribuida:
      
      Definición: Una gramática atribuida es una cuádrupla GA={G,A,R,B}, en donde:
      
      • G={N,T,P,S} es una gramática de contexto libre.
      • A=U A(X) es el conjunto de atributos asociados a cada símbolo X de la gramática (terminal o no terminal), tales que cumplen que: "para todo símbolo X e Y (terminal o no terminal) A(X)^A(Y)=0". Es decir, los atributos de cada símbolo son disjuntos.
      • Dado un símbolo X, vamos a denotar los atributos asociados a él como X.a, X.b, etc..., o con las letras minúsculas v,w para casos generales.
      • R=U R(p) es un conjunto finito de reglas, o acciones semánticas, asociadas a cada una de las reglas sintácticas de la gramática G. Sea la regla p de la forma:
      
      X0 -> X1X2...Xn
      
      Entonces, las reglas semánticas asociadas a esta regla sintáctica son de la forma v:= f(w1,w2,...,wk), en donde:
          • f es una función.
          • v,w1,...,wn pertenecen a U A(Xi). Es decir, son atributos de los símbolos que componen la regla p.
      
      • B=U B(p) es un conjunto finito de condiciones asociadas a cada una de las reglas sintácticas de la gramática G. Sea la regla p de la forma X0 -> X1X2...Xn. Entonces, las condiciones son de la forma g(w1,w2,...wk), donde:
          • g es una función booleana
          • w1,w2,...,wk pertenecen a U A(Xi)
      
      Cuando las funciones de las reglas semánticas pueden tener efectos laterales, tales como imprimir un valor, introducir una variable en una tabla de símbolos, etc..., la gramática atribuida pasa a ser una definición atribuida, también denominada definición dirigida por sintaxis.
      
      Atributos sintetizados y heredados: Si p es una regla sintáctica de la forma:
      
      p: X0 -> X1X2...Xn
      
      entonces se define el conjunto de atributos calculados AC(p) mediante la regla p, como:
      
      AC(p) = {Xi.a / Xi.a = f (...) pertenece a R(p)}
      
      Dada una gramática atribuida, se dice que un atributo asociado a un símbolo X es sintetizado si existe una regla sintáctica de la forma X -> y una regla semántica que lo calcula a partir de los atributos de los símbolos del consecuente de dicha regla. Al conjunto de los atributos sintetizados asociados a X lo denotaremos mediante AS(X).
      
      AS(X)={X.a / Existe X -> perteneciente a P y X.a pertenece a AC(p)}
      
      Dada una gramática atribuida, se dice que un atributo asociado a un símbolo X es heredado si existe una regla sintáctica de la forma Y -> X , y una regla semántica que lo calcula a partir de los atributos de los demás símbolos que forman la regla. Al conjunto de los atributos heredados asociados a X lo denotaremos mediante AH(X).
      
      AH(X)={X.a / Existe Y -> X perteneciente a P y X.a pertenece a AC(p)}
      
      Gramatica atribuida completa: Se dice que una gramática atribuida es completa si se cumplen las cuatro condiciones siguientes para todo símbolo X.
      
      1. Para toda regla p: X -> , AS(X) está incluido en AC(p).
      2. Para toda regla q: Y -> X , AH(X) está incluido en AC(q).
      3. AS(X) U AH(X) = A(X)
      4. AS(X)^AH(X) = 0
      
      De estas condiciones se deduce que el axioma de la gramática (S) no puede tener más que atributos sintetizados (es decir, AH(S)=0). Los atributos de los símbolos terminales se consideran como sintetizados (también se les denomina atributos intrínsecos, ya que tienen un valor en sí mismos y no es necesario calcularlo)
      
      Gramáticas atribuidas bien definidas: Una gramática atribuida se dice que está bien definida si para toda sentencia de L(G) todos los atributos pueden ser computados. A este proceso se le denomina evaluación de la gramática. Una sentencia del lenguaje se dice que está correctamente atribuida si se verifican todas las condiciones B(p) asociadas a las reglas que la generan.
      
      `,`https://drive.google.com/file/d/1z7nVl92h7OqSXgYNnysLUO_PtbjHAwsj/view?usp=drive_link`,`
      
      Especificación de la gramática
      
      Para interpretar la fórmula capturada es necesario primero establecer cuales son todos los elementos que pueden formar una fórmula (elementos léxicos) y cual es la forma en que pueden agruparse para dar tener significado (elementos sintácticos).
      
      Elementos Léxicos
      
      Los símbolos que se aceptan como elementos de una fórmula bien formada se dividen en componentes léxicos (terminales).
      
      Componentes léxicos de una fórmula bien formada
      
      Los componentes léxicos son:
      • Las conectivas conectivas lógicas.
      • Los identificadores, que son cualquier letra del alfabeto reconocida por la computadora que representa una proposición, incluyendo al 0 para una contradicción y al 1 para una tautología.
      • Los paréntesis, que permiten agrupar proposiciones compuestas y aclaran cuestiones de precedencia.
      
      La tabla muestra los elementos léxicos aceptados para una fórmula bien formada, así como símbolos que lo pueden representar.
      
      `,`https://drive.google.com/file/d/10gLL1XOJttzdup4RyVppQg91zVaVPD27/view?usp=drive_link`,`
      
      Elementos léxicos de una fórmula bien formada.
      
      Componentes sintácticos
      
      Los componentes sintácticos se establecen construyendo la gramática de las fórmulas. En nuestro caso, la gramática sirve para:
      
      • Especificar la forma correcta en que se espera la construcción de una fórmula.
      • Establecer la precedencia y asociatividad de las conectivas lógicas.
      
      La gramática que se define para una fórmula bien formada es una gramática libre de contexto en BNF es la siguiente:
      
      `,`https://drive.google.com/file/d/149E7wDaKxDJB_9NvquVj6V1PzuPM5zVJ/view?usp=drive_link`,`
      
      El orden en que aparecen las reglas en la gramática establece la precedencia de operadores y la recursión por la izquierda indica la asociatividad por la izquierda de operadores con la misma precedencia. La gramática libre de contexto en BNF para formulas lógicas, sin recursión por la izquierda, en un parser recursivo descendente, es la siguiente:
      
      `,`https://drive.google.com/file/d/1wrasOuOOT-xZHAmLeQd-Mno6w5hNza4Y/view?usp=drive_link`,`
      
      Para simplificar la representación interna de las conectivas lógicas y las proposiciones, cada una tiene un equivalente como token.
      
      `,`https://drive.google.com/file/d/1slztpm9ON_Et2y8m38055MYb86xJpWVj/view?usp=drive_link`,`
      
      Tokens para elementos léxicos.
      
      Preprocesamiento de la cadena de entrada
      
      La fórmula a evaluar se recibe en una cadena de caracteres (string), la cual tiene un procesamiento previo antes de iniciar su validación. El reprocesamiento consiste en eliminar cualquier espacio en blanco de la cadena y convertir cualquier símbolo en minúsculas a mayúsculas. Es importante mencionar que esta conversión convierte al programa en un programa no sensible al caso (es decir, significa lo mismo ''p'' que ''P''); si no existiera esta conversión la gramática diseñada si es sensible (representarían proposiciones diferentes ''p'' que ''P'').
      
      En el proceso de validación de la fórmula bien formada se aplica conjuntamente el análisis léxico y sintáctico de la cadena recibida como fórmula.
      
      La figura muestra la forma que se enlazan estos procesos para evaluar la fórmula capturada.
      
      `,`https://drive.google.com/file/d/1yrTPFvCetYsmJ2phgv99kl_TY920NBAE/view?usp=drive_link`,`
      
      El análisis sintáctico hace uso del análisis léxico para la verificación de los caracteres; si el análisis léxico es correcto, se evalúa cada regla de la gramática diseñada para fórmulas lógicas, para determinar si el carácter está colocado en una posición correcta. Si el carácter esta colocado correctamente, de acuerdo a la gramática, entonces se crea un nuevo nodo en el árbol.
      
      Análisis Sintáctico
      
      El análisis sintáctico esta compuesto de las siguientes funciones:
      
      ExpOp1(), ExpOp2(), ExpOp3(), ExpOp4() y ExpOp5() se usan reconocer los operandos de la fórmula; al aceptar al operando, cada función adiciona un nodo al árbol.
      
      ExpOp6() se utiliza para reconocer los paréntesis. Es importante aclarar que los paréntesis no se incluyen en el árbol ya que la estructura del árbol contiene implícitamente el orden de evaluación de los operadores.
      
      ExpP() identifica al operando doble implicación (''='').
      ExpP1() identifica al operando implicación (''>'').
      ExpP2() identifica al operando disyunción (''|'').
      ExpP3() identifica al operando conjunción (''&'').
      ExpP4() identifica al operando negación (''¬ ").
      
      Árboles producidos
      
      A continuación se muestran algunos ejemplos de los árboles producidos por este paso de validación de una fórmula bien formada.
      
      La figura muestra el árbol generado para la fórmula ( P&( Q> R) ) > S y la figura muestra el árbol generado para la fórmula (P> S) & (S> U)&P.
      
      `,`https://drive.google.com/file/d/1aTKk1ooPf4bFSQESh0UVRVz2GZw5B_8q/view?usp=drive_link`,`
      
      Conversión a forma normal conjuntiva
      
      Una vez obtenido el árbol sintáctico de la fórmula bien formada, se procede a manipular
      este árbol para conseguir su forma normal conjuntiva en su mínima expresión.
      
      El proceso de conversión se produce de acuerdo al siguiente algoritmo:
      
      SustituyeBicondicionales();
      
      SustituyeImplicaciones();
      
      hacer
      
      {
      
      eliminaDobleNeg();
      
      aplicaDeMorgan();
      
      } mientras(detectaCambios);
      
      hacer
      {
      generaFNC();
      
      aplicaDistribucion();
      
      aplicaConmutacion();
      
      aplicaIdempotencia();
      
      aplicaComplementacion();
      
      aplicaIdentidad();
      
      aplicaCero();
      
      } mientras(detecta_cambio_en_arbol o no(condición_de_paro y raiz_es_&));
      
      Como se observa en el algoritmo anterior, se aplican todas las reglas de equivalencia, por lo que se asegura el llegar a la mínima expresión de la forma normal conjuntiva y la detección de una tautología o una contradicción. A continuación se presentan las figuras de los árboles producidos por cada regla aplicada.
      
      Doble Implicación
      
      La figura muestra la conversión de un árbol con doble implicación. La fórmula que convierte es: P = Q.
      
      `,`https://drive.google.com/file/d/1aZRvj7Zeaomk_gj89y26cDt9EDh0E8k_/view?usp=drive_link`,`
      
      Implicación
      
      La figura muestra la conversión de un árbol con doble implicación. La fórmula que convierte es: P > Q.
      
      `,`https://drive.google.com/file/d/1teZadBFWTzmijje8EhlHtbGdczAcdwFR/view?usp=drive_link`,`
      
      De Morgan
      
      La figura presenta la conversión de un árbol por Ley de De Morgan. La fórmula original es: ¬(P Q).
      
      `,`https://drive.google.com/file/d/160aVf5v9AYWJDt4cwv0qCdK_F2C3ETBD/view?usp=drive_link`,`
      
      Doble Negación
      
      En la figura se observa la forma de eliminar las dobles negaciones. En este ejemplo la fórmula a reducir es ¬¬ Q. Como la rutina es recursiva, se eliminan cualquier par de dobles negaciones, por ejemplo, la fórmula ¬¬¬¬ Q se reduce a Q.
      
      `,`https://drive.google.com/file/d/1V-tMnEXg4P8As6eT_ettGd2MXUtLGeFj/view?usp=drive_link`,`
      
      Distribución
      
      En la figura se presenta la forma de aplicar la ley distributiva. El ejemplo mostrado se aplica para la fórmula P| (Q&R).
      
      `,`https://drive.google.com/file/d/1IO4JMSjqNR72zJlWZnbctHuZPWFpqW6B/view?usp=drive_link`,`
      
      Conmutación
      
      La conmutación se utiliza en este programa para ordenar los identificadores; la ordenación de identificadores sirve para reducir la fórmula aplicando idempotencia. La figura muestra la forma de aplicar la ley conmutativa. El ejemplo es de la fórmula (P|Q)|P, pero la ley se aplica para | y negaciones.
      
      `,`https://drive.google.com/file/d/1W032EdVC6AbaFcJ3NNMwowq7aiYnoE3E/view?usp=drive_link`,`
      
      Idempotencia
      
      La idempotencia se utiliza para reducir una fórmula. La figura muestra la forma de aplicar esta ley. Se ilustra la aplicación para la disyunción, pero el programa esta diseñado también para las conjunciones.
      
      `,`https://drive.google.com/file/d/1rlkYb48v9St1433N90kgrq40ZGtdow4d/view?usp=drive_link`,`
      
      Complementación
      
      La complementación permite reducir una fórmula ya sea a una tautología o a una contradicción. La figura muestra la forma de aplicar la complementación.
      
      `,`https://drive.google.com/file/d/1_wp3VEvTjbUGLkETmicEP0wihQ3XZuVn/view?usp=drive_link`,`
      
      Identidad
      
      Esta ley se utiliza para reducir una fórmula donde se tenga de algún lado una tautología o una contradicción. La figura muestra la forma de aplicar la ley de identidad.
      
      `,`https://drive.google.com/file/d/1QVfyBUcRr09Bc2znTsduJdq-hFQoRtbH/view?usp=drive_link`,`
      
      Cero
      
      Esta ley se utiliza para reducir una fórmula donde se tenga de algún lado una tautología o una contradicción. La figura muestra la forma de aplicar la ley de cero.
      
      `,`https://drive.google.com/file/d/1A5kQBFlj6rp3-ITZhwT4CjPV7MC5wIFW/view?usp=drive_link`,`
      `
          ]
        },
      
          {
          contenido_id: 24,
          titulo: '6.2 Autómatas Sintácticos',
      area: AreaComputacion.TEORIA_COMPUTACION,
          descripcion: 'pendiente',
          tipo: TipoContenido.TAREA,
          orden: 2,
          url_recurso: null,
          unidad_id: 6,
          unidad: { unidad_id: 6, nombre: 'UNIDAD VI - ANÁLISIS SINTÁCTICO (Parsing)' },
          contenido: [
            `
      Gramática Para Expresiones Infijas
      
      Una expresión infija es una combinación de operadores +, - , * , /, div y mod, y operandos formados por números e identificadores, donde los operadores van en medio de los operandos. Los operadores div y mod también funcionan como palabras reservadas. Una palabra es reservada si el programador del lenguaje no puede identificar variables con estos nombres. Las palabras reservadas tienen un significado especial predeterminado por el diseñador del lenguaje.
      
      Un ejemplo de expresión infija es: suma + 120 div x Una expresión Postfija es aquella donde los operadores van después de los operandos. Por ejemplo suma 120 x div + (este el equivalente postfijo de la expresión infija anterior).
      
      Para realizar una conversión de una expresión infija a postfija hay que tener en cuenta la precedencia y asociatividad de los operadores. La precedencia es el orden en que se realizan las operaciones y la asociatividad, que puede ser a la izquierda o a la derecha, expresa si un operando es tomado primero por el operador de su izquierda o derecha al evaluar la expresión.
      
      La precedencia y asociatividad de expresiones que implementa el traductor de este artículo es la siguiente:
      
      Operador Precedencia Tipo de Asociatividad
      *, /, div, mod Mayor Izquierda
      +, - Menor Izquierda
      
      Los paréntesis violan la precedencia y asociatividad antes establecida.
      
      La gramática libre de contexto que representa la estructura de las expresiones infijas es la siguiente:
      
      (1) <expr> ::= <expr> + <term>
      
      Propiedades de Los Árboles de Análisis Sintácticos
      
      Se puede verificar la correctitud (es decir, sí está bien construido) de un árbol de parser mediante las siguientes propiedades:
      
      Dada una gramática G y una cadena de tokens, su correspondiente árbol de parser satisface:
      
      a) La raíz del árbol es el símbolo de inicio de la gramática
      b) Las hojas del árbol son tokens de la gramática o símbolos terminales
      c) Los nodos interiores del árbol son no terminales
      
      Si un nodo interior etiquetado <A> tiene como hijos de izquierda a derecha a X1, X2, X3, ..., Xn, donde cada Xi (con i entre 1 y n) representa un terminal o una no terminal, entonces debe existir una producción en la gramática de la forma <A> ::= X1X2X3 ... Xn
      
      En otras palabras, ésta última propiedad indica que cada paso en la derivación del árbol sintáctico debe estar justificado por una producción de la gramática; el recíproco de esta propiedad no es cierto porque pueden existir producciones en la gramática que no se utilicen para construir un árbol de parser en particular. Por ejemplo, la producción (7) <term> ::= <term> mod <factor> no se utilizan para construir ningunos de los árboles anteriores.
      
      Esquema de Traducción
      
      Es una notación que se utiliza para especificar la traducción de una cadena de entrada X en una cadena de salida Y. En este caso, la cadena de entrada X es una expresión en notación infija y la cadena de salida Y es una expresión en notación postifija.
      
      Un esquema de traducción está conformado por producciones que representan la estructura de la cadena de entrada; en el lado derecho de la producción se insertan unas instrucciones conocidas como acciones semánticas.
      
      Esquema de Traducción que Convierte Expresiones Infijas en postfijas
      
      <expr> ::= <expr> + <term> { print (“+”) }
      <expr> ::= <expr> - <term> { print (“-”) }
      <expr> ::= <term>
      <term> ::= <term> * <factor> { print (“*”) }
      <term> ::= <term> / <factor> { print (“/”) }
      <term> ::= <term> div <factor> { print (“div”) }
      <term> ::= <term> mod <factor> { print (“mod”) }
      <term> ::= <factor>
      <factor> ::= ( <expr> )
      <factor> ::= num { print(num.Valor) }
      <factor> ::= ident { print(ident.Lexema) }
      
      Árbol de Parser Anotado
      
      Es un árbol de parser donde se incluyen unas instrucciones conocidas como acciones semánticas. Lo interesante es que la cadena de salida se forma al aplicar las acciones semánticas en los nodos que las contienen cuando se recorre el árbol en postorden (en el recorrido en postorden primero se visita la raíz y luego todos sus nodos hijos de izquierda a derecha).
      
      A continuación se muestra el árbol de parser anotado para la cadena de tokens 120 + cont div 10
      
      `,`https://drive.google.com/file/d/1X_Y0Gnz6gJVu9lk0EQGAR-Bp0Ca9eXsl/view?usp=drive_link`,`
      
      Al recorrer el árbol en postorden se genera la cadena de tokens de salida: 120 cont 10 div +
      
      `,`https://drive.google.com/file/d/1T3J52Y77CV67kLmTcXbTpgSWzW-T7eB_/view?usp=drive_link`,`
      
      El árbol de parser anotado para la expresión infija de entrada: 7 / ( 9 + x) es: La cadena de tokens de salida es: 7 9 x + /
      
      Ambigüedad Sintáctica
      
      La gramática de un lenguaje es ambigua sintacticamente, o simplemente ambigua, si alguna cadena de su lenguaje tiene mas de un árbol de análisis sintáctico. Los lenguajes de programación se describen por lo general con gramáticas no ambiguas. Si hay ambigüedades, se resuelven median el establecimiento de convenciones que descartan todos los árboles de análisis sintáctico excepto uno para cada cadena.
      
      `,`https://drive.google.com/file/d/1-Q2PerLvJPcNHLvGp1AHoxoJx5rCjiqp/view?usp=drive_link`,`
      
      Notación sufija
      
      Llamada también postfija o polaca inversa, se usa para representar expresiones sin necesidad de paréntesis.
      
      Ejemplos:
      
          a*b ab*
          a*(b+c/d) abcd/+*
          a*b+c*d ab*cd*+
      
      Los identificadores aparecen en el mismo orden. Los operadores en el de evaluación (de izquierda a derecha).
      
      Problema: operadores monádicos (unarios). O bien se transforman en diádicos (binarios) o se cambia el símbolo.
      
      Ejemplo: -a se convierte en 0-a o en @a
      
      a*(-b+c/d) ab@cd/+*
      
      Existen dos problemas principales:
      
      • Construir la notación sufija a partir de la infija.
      • Analizar la notación sufija en el segundo paso de la compilación.
           `
          ]
        },
      
          {
          contenido_id: 25,
          titulo: '6.3 Algotirmo de conversión',
      area: AreaComputacion.TEORIA_COMPUTACION,
          descripcion: 'pendiente',
          tipo: TipoContenido.TAREA,
          orden: 3,
          url_recurso: null,
          unidad_id: 6,
          unidad: { unidad_id: 6, nombre: 'UNIDAD VI - ANÁLISIS SINTÁCTICO (Parsing)' },
          contenido: [
            `
      Rutina semántica para transformar de infijo a sufijo
      
      Si el analizador sintáctico es bottom-up, hacemos la siguiente suposición: "Cuando aparece un no terminal V en el asidero, la cadena polaca correspondiente a la subcadena que se redujo a V ya ha sido generada".
      
      Se utiliza una pila donde se genera la salida, inicialmente vacía. Las acciones semánticas asociadas a las reglas son:
      
      E ::= E + T Push +
      E ::= E - T Push -
      E ::= T
      T ::= T * F Push *
      T ::= T / F Push /
      T ::= F
      F ::= i Push i
      F ::= (E)
      F ::= - F Push @
      
      Análisis de la notación sufija
      
      La gramática completa que permite analizar la notación sufija es:
      
      <Operando> ::= id |
      
          cte |
      
          <Operando> <Operando> <Operador diádico> |
      
          <Operando> <Operador monádico>
      
      <Operador diádico> ::= + | - | * | / | ...
      
      <Operador monádico> ::= @ | ...
      
      Algoritmo de evaluación de una expresión en notación sufija que utiliza una pila:
      
      • Si el próximo símbolo es un identificador, se pasa a la pila. Corresponde a la aplicación de la regla
      • <Operando> ::= id
      • Si el próximo símbolo es una constante, se pasa a la pila. Corresponde a la aplicación de la regla
      • <Operando> ::= cte
      • Si el próximo símbolo es un operador diádico, se aplica el operador a los dos operandos situados en lo alto de la pila y se sustituyen éstos por el resultado de la operación. Corresponde a la aplicación de la regla
      • <Operando> ::= <Operando> <Operando> <Operador diádico>
      • Si el próximo símbolo es un operador monádico, se aplica el operador al operando situado en lo alto de la pila y se sustituye éste por el resultado de la operación.
      
      Corresponde a la aplicación de la regla
      • <Operando> ::= <Operando> <Operador monádico>
      
      Ejemplo: calcular ab@cd/+*.
      
      Extensión de la notación sufija a otros operadores
      
      • La asignación, teniendo en cuenta que podemos no querer valor resultante. Además, no interesa tener en la pila el valor del identificador izquierdo, sino su dirección.
      • a:=b*c+d abc*d+:=
      • La transferencia (GOTO).
      • GOTO L L TR
      • La instrucción condicional
      • if p then inst1 else inst2
      se convierte en p L1 TRZ inst1 L2 TR inst2
      L1: L2:
      • Subíndices:
      • a[exp1; exp2; ...; expn]
      se convierte en a exp1 exp2 ... expn SUBIN-n
      
      TABLAS DE PALABRAS RESERVADAS Y DE USUARIO
      
      Una palabra reservada es una palabra que tiene un significado especial para algún lenguaje de programación y no la puedes utilizar (su nombre) para otro propósito, es decir, no puedes usarla como identificador (nombre de variable, por ejemplo ). Las tablas de palabras reservadas son equivalentes a las palabras terminales y a las no terminales que acepta el lenguaje.
      
      MANEJO DE ERRORES
      
      Si un compilador tuviera que procesar solo programas correctos, su diseño e implantación se simplificarían mucho. Pero los programadores a menudo escriben programas incorrectos, y un buen compilador debería ayudar al programador a identificar y localizar errores. Sin embargo pocos lenguajes han sido diseñados teniendo en cuenta el manejo de errores. La mayoría de las especificaciones de los lenguajes de programación no describen como debe responder el compilador a los errores.
      
      Los programas pueden contener errores de diversos tipos:
      
      • Léxicos: Como escribir mal un identificador, palabra clave u operador.
      • Sintácticos: Como una expresión aritmética con paréntesis no equilibrados.
      • Semánticos: Como un operador aplicado a un operando incorrecto.
      • Lógicos: Como una llamada infinitamente recursiva.
      
      El manejador de errores de un analizador sintáctico tiene objetivos fáciles de establecer:
      1. Debe informar la presencia de errores con claridad y exactitud.
      2. Se debe recuperar de cada error con la suficiente rapidez como para detectar errores posteriores.
      3. No debe retrasar de manera significativa el procesamiento de programas correctos.
      
      
      
      
            `
          ]
        },
      
          {
          contenido_id: 26,
          titulo: 'Ejercicios de repaso para la Unidad VI',
      area: AreaComputacion.TEORIA_COMPUTACION,
          descripcion: 'pendiente',
          tipo: TipoContenido.TAREA,
          orden: 7,
          url_recurso: null,
          unidad_id: 6,
          unidad: { unidad_id: 6, nombre: 'UNIDAD VI - ANÁLISIS SINTÁCTICO (Parsing)' },
          contenido: [
            `
      1. Elaborar las tablas de símbolos para el análisis léxico de un lenguaje novedoso.
      
      2. Realice el programa que permita realizar el análisis semántico del lenguaje creado en el punto anterior.
      
      El programa deberá de eliminar (espacios, comentarios y caracteres extraños al lenguaje) y generar tokens por cada cadena de símbolos terminales y no terminales así como los errores léxicos en los que incurra el usuario programador. Agregar la tabla de errores (resultado de este análisis). Documentar el desarrollo y adjuntar las pruebas.
      
      3. Realice el programa correspondiente al análisis sintáctico. Seleccione el método de análisis sintáctico que mejor se ajuste a la gramática en cuestión y genere lo siguiente:
      
      • Tabla de símbolos para el análisis sintáctico
      • Tabla de errores sintácticos generados por la gramática de lenguajes
      • Prueba de diferentes corridas del programa de análisis sintáctico
      
      Nota: La documentación requerida en los puntos 1 y 2 deberá tener cada una, el siguiente contenido:
      
      1. Descripción del problema a resolver
      
      2. Objetivos
      
      3. Breve descripción de la metodología usada
      
      4. Breve descripción y justificación de la herramienta de programación elegida para la programación
      
      5. Diseño de interfases (manual de uso)
      
      6. Diseño de los programas (módulos, secciones, funciones, etc.)
      
          6.1Código fuente
      
          6.2Pruebas del programa
      
      7. Conclusiones
      
      8. Anexos. Aquí se deben incluir las tablas de análisis e información adicional.
            `
          ]
        },
      
        // ── UNIDAD VII ─────────────────────────────────────────────
      
        {
          contenido_id: 27,
          titulo: '7.1 Concepto de Semántica',
      area: AreaComputacion.TEORIA_COMPUTACION,
          descripcion: 'pendiente',
          tipo: TipoContenido.TAREA,
          orden: 1,
          url_recurso: null,
          unidad_id: 7,
          unidad: { unidad_id: 7, nombre: 'UNIDAD VII - ANÁLISIS SEMÁNTICO' },
          contenido: [
            `
      Análisis Semántico:
      
      El análisis semántico es posterior al sintáctico y mucho más difícil de formalizar que éste.
      
      Se trata de determinar el tipo de los resultados intermedios, comprobar que los argumentos que tiene un operador pertenecen al conjunto de los operadores posibles, y si son compatibles entre sí, etc. En definitiva, comprobará que el significado de lo que se va leyendo es válido.
      
      La salida "teórica" de la fase de análisis semántico sería un árbol semántico. Consiste en un árbol sintáctico en el que cada una de sus ramas ha adquirido el significado que debe tener. En el caso de los operadores polimórficos (un único símbolo con varios significados), el análisis semántico determina cuál es el aplicable. Por ejemplo, consideremos la siguiente sentencia de asignación:
      
          A := B + C
      
      En Pascal, el signo "+" sirve para sumar enteros y reales, concatenar cadenas de caracteres y unir conjuntos. El análisis semántico debe comprobar que B y C sean de un tipo común o compatible y que se les pueda aplicar dicho operador. Si B y C son enteros o reales los sumará, si son cadenas las concatenará y si son conjuntos calculará su unión.
      
      Ejemplo:
      •    VAR
      •    ch : CHAR; (* Un identificador no se puede utilizar si *)
      •    ent: INTEGER; (* previamente no se ha definido. *)
      •    ch := ent + 1; (* En Pascal no es válido, en C sí. *)
      
      CONCEPTO DE SEMÁNTICA
      
      Semántica (del griego semantikos, 'lo que tiene significado'), estudio del significado de los signos lingüísticos, esto es, palabras, expresiones y oraciones. Quienes estudian la semántica tratan de responder a preguntas del tipo "¿Cuál es el significado de X (la palabra)?". Para ello tienen que estudiar qué signos existen y cuáles son los que poseen significación —esto es, qué significan para los hablantes, cómo los designan (es decir, de qué forma se refieren a ideas y cosas), y por último, cómo los interpretan los oyentes—. La finalidad de la semántica es establecer el significado de los signos —lo que significan— dentro del proceso que asigna tales significados.
            
      En el Compilador
      
      Existen dos formas para describir las especificaciones semánticas de un lenguaje de programación: especificación natural y especificación formal.
      
      Especificación Natural: La especificación natural de la semántica de un lenguaje de programación, se basa en utilizar el lenguaje natural para especificar las características semánticas del lenguaje.
      
      Especificación Formal: La especificación formal puede dividirse en dos grandes grupos.
      
      • Especificación por medio de gramáticas atribuidas o gramáticas con atributos.
      • Utilización de metalenguajes de especificación semántica.
       
      En el lenguaje natural
      
      Especificación natural o informal.
      
      Especificación Natural: La especificación natural de la semántica de un lenguaje de programación es describir mediante un lenguaje natural sus características semánticas, que no sean deducibles de la gramática BNF que describe sintacticamente el lenguaje.
      
      Compatibilidad de tipos
      
      La compatibilidad de tipos (type checking) es la principal especificación semántica derivada de la sintaxis del lenguaje.
      
      Rutinas Semánticas.
      
      Las especificaciones semánticas descritas en lenguaje natural, no tienen reglas fijas para ser implementadas en el analizador semántica. Normalmente, lo que se hace es incorporar rutinas, denominadas semánticas, que comprueban las especificaciones descritas en lenguaje natural.
      
      Especificación Formal.
      
      La especificación formal de los aspectos semánticos de los lenguajes de programación se basa en la definición meta-matemática, y no en la definición por medio del lenguaje natural
      
      Es por tanto, una especificación mucho mas precisa, sin embargo requiere el uso de unas especificaciones mucho mas precisas, sin embargo requiere el uso de unas herramientas que pueden dividirse en dos grandes grupos:
      
      • Análisis Semántico en procesadores de lenguaje.
      • Gramáticas atribuidas o gramáticas con atributos.
      
      Las gramáticas con atributos o atribuidas, fueron definidas originalmente por Knuth para definir las especificaciones semánticas de los lenguajes de programación. Una gramática atribuida se caracteriza por:
      
          1. La estructura sintáctica del lenguaje se define mediante una gramática libre de contexto.
          2. Cada símbolo de la gramática, tiene asociado un conjunto finito de atributos.
          3. Cada regla de producción debe de especificar como se modifican los atributos con su aplicación.
          4. Una gramática atribuida describe un sub-lenguaje mediante las condiciones de contexto que deben ser cumplidas por los valores de los atributos.      
            `
          ]
        },
      
          {
          contenido_id: 28,
          titulo: '7.2 Autómatas Semánticos',
      area: AreaComputacion.TEORIA_COMPUTACION,
          descripcion: 'pendiente',
          tipo: TipoContenido.TAREA,
          orden: 2,
          url_recurso: null,
          unidad_id: 7,
          unidad: { unidad_id: 7, nombre: 'UNIDAD VII - ANÁLISIS SEMÁNTICO' },
          contenido: [
            `
      Inspirados en los primeros autómatas, en los últimos años se han surgido multitud de modelos, por lo general implementados en programas software, que intentan resolver un determinado tipo de problemas.
      
      Algoritmo de Intersección de autómatas
      
      El proceso de transducción de un AFD mediante su intersección con un transductor consiste en una búsqueda de todas las subcadenas del AFD que coinciden con las palabras que acepta el transductor.
      
      En el marco de la aplicación que hemos desarrollado, la intersección de dos autómatas, como p. Ej., T y M en la Fig. 7.1, se realiza recorriendo el autómata T, aplicando cada uno de sus estados a los estados del autómata M: esta forma de llevar a cabo la intersección de T y M permite identificar el subautómata M’ (o los subautómatas M’), M’  M, que tiene una intersección con T.
      
      Para identificar dicho subautómata, se aplica el estado inicial 0 de T al estado inicial 0 de M; como esta aplicación no da lugar a una intersección, se aplica de nuevo el estado 0 de T al estado 1 de M. A partir de esta segunda aplicación, el algoritmo puede realizar la intersección de T con M, puesto que el lenguaje que reconoce T y el que reconoce el subautómata de M, que está compuesto por los estados 1, 2 y 3, contienen la misma palabra ab.
      
      En el proceso de intersección de T con el subautómata de M, se eliminan las transiciones que no coinciden con el autómata T; así, la transducción elimina en M la transición etiquetada con el símbolo b, que va del estado 1 al estado 3. Para que se puedan detectar todas las posibles intersecciones que se puedan dar en M (aunque en el ejemplo de la Fig. 7.1 no se dé más que una), es necesario aplicar T a los restantes estados de M, es decir, a 2, a 3 y a 4.
      
      `,`https://drive.google.com/file/d/1vOHvZb63jK6Rb7FsXA62k1A4HwL5Dqd0/view?usp=drive_link`,`
      
      En el marco del tratamiento automático de la información textual que proponemos, los transductores tienen que aceptar construcciones sintácticas que, en general, no coinciden con la extensión de las oraciones procesadas y, por ello, es necesario que se puedan realizar transducciones de subcadenas dentro de la cadena procesada, que, en general, coincide con una oración. Para que un transductor pueda transducir las subcadenas que forman parte de una cadena y pertenecen al lenguaje que acepta dicho transductor, es necesario ampliar los transductores con transiciones-? y transiciones.
      
      Sin embargo, dado que los análisis léxicos de las oraciones se tienen que representar con AFD, puesto que las cadenas no pueden formalizar las ambigüedades de dichos análisis léxicos, nuestra aplicación transduce AFD y no cadenas, concretamente, transduce un AFD, mediante su intersección con transductores con transiciones-? y transiciones-, de forma tal que la intersección y la transducción se realicen conjuntamente.
      
      • Las transiciones-? de un transductor, que se etiquetan con los símbolos ?/?, aceptan cualquier símbolo del autómata de entrada (siempre que dicho símbolo no sea aceptado por ninguna otra transición) y lo transducen mediante el símbolo aceptado. Las transiciones-? sólo se aplican si se cumple la condición de determinismo, es decir, cuando, para un estado p y para una función de transición  (p, ?), la función  (p, a) no está definida para ningún símbolo a del alfabeto.
      
      • Las transiciones- se introducen en los estados finales del transductor, con objeto de que, en el caso de que haya más transiciones en el AFD de entrada, el transductor pueda volver a su estado inicial para poder transducir si existen nuevas subcadenas pertenecientes a su lenguaje. Las transiciones-, al igual que las transiciones-?, sólo se aplican si se cumple la condición de determinismo.
      
      Así p. ej., si el autómata T, que reconoce el lenguaje L(T) = {ab}, se ampliara con una transición-? y una transición-, convirtiéndolo en T', podríamos detectar todos los M’, M’  M, resultantes de la intersección de T' con M, aplicando una sola vez el estado inicial de T al estado inicial de M; asimismo, si se amplía el algoritmo de intersección para que pueda operar con autómatas que posean transiciones-? y transiciones-, dicho algoritmo resultaría más robusto.
      
      En efecto, al aplicar el estado inicial de T' al estado inicial de M, el algoritmo detectaría que la transición que está etiquetada con el símbolo c no pertenece al lenguaje aceptado por T' y, en lugar de volver a aplicar el estado inicial de T' al estado 1 de M (tal como se hacía al intersectar T con M), la transición-? de T’, situaría el estado inicial de T' en el estado 1 de M, con lo cual sería el propio transductor T' el que se desplazaría por los estados de M; de este modo, en el siguiente estado, se daría una intersección, ya que la subcadena ab de M pertenece al lenguaje aceptado por T'.
      
      Al realizar la intersección, la transducción suprimiría en M la transición etiquetada con el símbolo b y la transición- situaría a T' en su estado inicial para que pudiera encontrar eventuales nuevas intersecciones.
      
      Los algoritmos que utilizan transductores con transiciones-? y transiciones- permiten crear aplicaciones más robustas y también más rápidas, lo cual constituye un aspecto crucial para una propuesta como la nuestra, que se propone tratar la información textual a partir transducciones cíclicas, que tienen que ser necesariamente complejas tanto desde el punto de formal como lingüístico.
      
      Algunas transducciones introducen códigos específicos en el AFD de salida, los cuales constituyen identificadores inequívocos de su aplicación. Así p. Ej., las transducciones que van a permitir identificar los tiempos verbales compuestos y/o continuos, introducirán un código, como p. Ej., _COMP, _CONT o _COMP_CONT, que irá asociado a la especificación del tiempo del lema verbal del AFD; dicho lema podrá ser:
      
      • un verbo predicativo,
      • el núcleo verbal de una locución verbal
      • un verbo de soporte.
      
      Por el contrario, las transducciones que conviertan una construcción sintáctica en otra construcción sintáctica distinta, como p. ej., las transducciones que conviertan una oración pasiva en una activa, no podrán dejar una huella de su aplicación en el AFD de salida. De hecho, la huella de su aplicación es la diferencia entre el AFD de entrada y el de salida, pero con los transductores ampliados con transiciones- y transiciones-? dicha diferencia no se puede especificar en el AFD de salida.
      
      Sin embargo, esta huella puede resultar crucial para poder restituir la oración en su forma original, lo cual puede ser necesario en sistemas de tratamiento automático de la información textual, en los que el usuario no solo desee recuperar la información, sino además consultar el texto en su estado original.
      
      Para poder etiquetar las oraciones con marcas que especifiquen la transducción aplicada es necesario utilizar transductores subsecuenciales (con transiciones- y transiciones-?).
      
      Los transductores subsecuenciales tienen las siguientes características:
      
      • La función de producción, es decir, la salida que se genera a medida que el transductor reconoce los símbolos de entrada, se pospone hasta que el transductor llega a un estado final;
      
      • Poseen una función de emisión final, que genera una salida adicional en los estados finales, que se concatena con la salida producida por la función de producción.
      
      • Los transductores subsecuenciales se pueden ampliar de forma tal que, en cada estado final, se produzcan p salidas adicionales (como p. ej., cadenas, etc.), que se pueden concatenar con la salida generada por el transductor. Estos transductores subsecuenciales ampliados se denominan transductores p- subsecuenciales.
      
      • La utilización de transductores p-subsecuenciales permite dejar una huella de las transducciones aplicadas a una oración y ofrecen así la posibilidad de restituir el AFD de la oración original a partir del AFD de la oración transducida.
            `
          ]
        },
      
          {
          contenido_id: 29,
          titulo: '7.3 Gramática con atributos y expresión mínima',
      area: AreaComputacion.TEORIA_COMPUTACION,
          descripcion: 'pendiente',
          tipo: TipoContenido.TAREA,
          orden: 3,
          url_recurso: null,
          unidad_id: 7,
          unidad: { unidad_id: 7, nombre: 'UNIDAD VII - ANÁLISIS SEMÁNTICO' },
          contenido: [
            `
      Conversión de un diccionario electrónico en un transductor
      
      En el marco de la creación de las aplicaciones que gestionan las bases de información lingüística, hemos desarrollado sistemas que agilizan el acceso a su información, ya que ello es crucial para procesar la información de grandes volúmenes de textos. Por ello, hemos desarrollado:
      
      • una aplicación que convierte el diccionario electrónico de formas expandidas en un transductor residente en memoria en el que:
      • la parte de lectura se corresponde con la entrada del diccionario
      • la parte de escritura corresponde con el lema asociado a dicha entrada, junto con la especificación de sus propiedades morfológicas de flexión y/o su categoría distribucional.
      • una aplicación que permita consultar el diccionario convertido en un transductor en memoria, de forma tal, que el proceso de etiquetación de un texto es una transducción, en la que se transducen sus elementos léxicos con la información que tiene el transductor (diccionario) en su parte de escritura.
      
      Esta aplicación permite acelerar enormemente la velocidad de acceso a la información del diccionario expandido, lo cual resulta crucial para los objetivos globales de esta propuesta.
      
      Bases de información sintáctica
      
      Nuestro sistema realiza cinco procesos claramente diferenciados:
      
      • (1) Representación de la etiquetación de un texto en un AFD minimizado, utilizando para ello la información de un diccionario electrónico expandido.
      • (2) Desambiguación del AFD resultante de la etiquetación, intersectándolo con un transductor, que formaliza restricciones léxicas contextuales asociadas a elementos léxicos específicos.
      • (3) Identificación de los tiempos verbales compuestos;
      • (4) Detección de todas las locuciones predicativas (verbales, nominales y adjetivas);
      • (5) Detección de las relaciones entre predicados y argumentos.
      
      La identificación de los tiempos verbales compuestos (tanto verbos predicativos como verbos de soporte) se lleva a cabo mediante una aplicación, que transduce el AFD resultante del análisis léxico de una oración mediante su intersección con los transductores correspondientes a las configuraciones sintácticas de las formas verbales compuestas del español: la transducción elimina en el AFD de salida las formas auxiliares de los tiempos compuestos y asocia al lema verbal correspondiente el código de su tiempo verbal compuesto y/o continuo. El objetivo de este proceso es detectar los núcleos verbales para posibilitar la identificación de:
      
      • los verbos predicativos
      • los verbos de soporte de los predicados no verbales.
      
      La detección de las locuciones predicativas, tanto verbales, nominales como adjetivas, se lleva a cabo con una aplicación, que intersecta el AFD resultante del proceso (3) con transductores procedentes de gramáticas electrónicas de locuciones, que especifican:
      
      La caracterización sistemática de los aspectos léxico-sintácticos de las locuciones mediante transductores permite identificar los predicados locutivos de forma inequívoca.
      
      Para ello:
      
      Se utilizan transductores, asociados a cada una de las locuciones de las gramáticas electrónicas de Garrido y Mogorrón, los cuales al igual que los transductores de la gramática electrónica de las locuciones verbales de Bobes  permiten detectar las locuciones que admiten adverbios y/o pronombres entre su núcleo verbal y su parte conexa.
      
      Las relaciones de predicación constituyen el soporte formal que permite vehicular la información en las lenguas naturales. En consecuencia, la detección de dichas relaciones permite identificar el contenido de la información textual.
      
      En el marco de nuestro sistema, la identificación de las relaciones entre predicados y argumentos se realiza intersecando el AFD resultante de (4) con transductores creados automáticamente a partir de gramáticas electrónicas. Para ello, es necesario:
      
      1. Completar el desarrollo de las gramáticas electrónicas;
      2. Homogeneizar la formalización de las propiedades sintácticas y semánticas de las gramáticas electrónicas utilizadas.
            
      `,`https://drive.google.com/file/d/1LZxEwnqTraWjLc50qBgEEjze_mOznq4M/view?usp=drive_link`,`      
      
      '<' y '>' marcará respectivamente el principio y el final de la transición;
      
      '\' introducirá el nombre de la variable (que será un valor numérico del 1 al 40), en el que se cargará el valor de la transición correspondiente;
      
      'VAR-' será una variable, que tomará su valor de la posición correspondiente del AFD de entrada;
      
      &' indicará que la transducción se realizará con la cadena que le sigue;
      
      '|' indicará la creación de una nueva transición en el AFD de salida;
      
      LOCVPRED será un código que se introducirá en la transducción: significa locución verbal predicativa.
           `
          ]
        },
      
          {
          contenido_id: 30,
          titulo: '7.4 Tablas Semánticas',
      area: AreaComputacion.TEORIA_COMPUTACION,
          descripcion: 'pendiente',
          tipo: TipoContenido.TAREA,
          orden: 4,
          url_recurso: null,
          unidad_id: 7,
          unidad: { unidad_id: 7, nombre: 'UNIDAD VII - ANÁLISIS SEMÁNTICO' },
          contenido: [
            `
      `,`https://drive.google.com/file/d/1lDGZRl1BBWLe0JN5j02PHPUlalb5XbY1/view?usp=drive_link`,`
            
      `,`https://drive.google.com/file/d/1FpgM_ylsOqRTq5sv9PGHZy7NxURKoRrb/view?usp=drive_link`,`
          
      Conversión de redes de relaciones semánticas en autómatas finitos deterministas (AFD)
      
      En el marco de nuestra propuesta, el estudio del significado consiste en integrar las bases de información semántica en las relaciones de predicación, tal como se estructuran en el modelo de la sintaxis léxica (Subirats). Para ello, nos proponemos reutilizar la parte
      
      española de las redes semánticas multilingües, que han sido creadas en el marco de un proyecto europeo.
      
      Las bases de información semántica se utilizarán para explorar las posibilidades de organizar las redes de relaciones semánticas del español en autómatas finitos deterministas (AFD) semánticos, que puedan ser utilizadas por las mismas aplicaciones que utilizan los transductores sintácticos.
      
      Así p. Ej., en la Fig. 7, 7b y 7c son autómatas inversos, ya que uno se puede obtener a partir del otro y a la inversa, mediante una inversión del autómata correspondiente. En consecuencia, sólo 7(b) o sólo 7(c) resulta necesario, pero no ambos, ya que (c) se puede generar a partir de (b) y a la inversa. En consecuencia, la generación de relaciones semánticas reversibles a partir de la inversión de un AFD permitirá reducir el número de autómatas que se va a requerir para formalizar las relaciones semánticas que se dan en el léxico.
      
      En la medida en la que en el marco de nuestra propuesta, las oraciones se representan por medio de AFD, la representación de las relaciones que configuran el significado en AFD, que formalizan las relaciones de predicación que configuran el significado, permitirá integrar la semántica y la sintaxis en un formalismo único. Nuestro objetivo es explorar las posibilidades y las características que debe tener la integración de los AFD semánticos y sintácticos en un único AFD sintáctico-semántico.
      
      Desde el punto de vista del tratamiento automático de la información, la unificación de los formalismos de representación de las construcciones sintácticas y del significado de los elementos léxicos que las integran permitirá operar sobre ellos, utilizando los mismos algoritmos. Dado que es posible desarrollar transductores que incorporen tanto información sintáctica como semántica, queremos explorar las posibilidades de que se pueda operar simultánea o alternativamente sobre las relaciones sintácticas y/o semánticas de un autómata oracional.
      
      Ello permitirá integrar la sintaxis y la semántica en un lenguaje formal único desde el punto de vista de su representación y podrá tener una incidencia crucial en el tratamiento automático de la información textual, en la medida en que supondrá una integración real del tratamiento del significado de los elementos léxicos, de la información oracional y de las formas sintácticas que la vinculan.
      
      `,`https://drive.google.com/file/d/1ZT88BPMEzScu3QpIUWI4McBy9couUQSa/view?usp=drive_link`,`
      `
          ]
        },
      
          {
          contenido_id: 31,
          titulo: '7.5 Manejo de errores',
      area: AreaComputacion.TEORIA_COMPUTACION,
          descripcion: 'pendiente',
          tipo: TipoContenido.TAREA,
          orden: 5,
          url_recurso: null,
          unidad_id: 7,
          unidad: { unidad_id: 7, nombre: 'UNIDAD VII - ANÁLISIS SEMÁNTICO' },
          contenido: [
            `
      Los analizadores sintácticos y semánticos deben estar preparados para manejar
      programas tanto incorrectos como correctos. En cualquier punto, el analizador léxico
      puede enviar al analizador sintáctico un elemento sintáctico que no encaja en el contexto
      circundante. Por ejemplo, un delimitador de enunciado en medio de una expresión, una
      declaración a la mitad de una serie de enunciados, un símbolo de operador donde se
      espera un identificador.
      
      El error puede ser sutil como una variable real donde se requiere una variable
      entera o una referencia de variable de subíndice con tres subíndices cuando se declaró
      que el arreglo tenía dos dimensiones. En cada paso de la traducción puede ocurrir una
      multitud de estos errores.
      
      Los errores encontrados en las distintas fases de análisis se envían a un módulo
      denominado manejo de errores. En el caso más sencillo puede ser un subprograma al que
      se le invoca enviándole el código de error, y que se encarga de escribir un mensaje con el
      error correspondiente, y el número de línea donde se ha producido, así como de cortar el
      proceso.
      
      Si se desea construir un tratamiento de errores más completo, por ejemplo
      detectando todos los errores del programa fuente, el módulo se complica dado que los
      analizadores deben proseguir su trabajo con falta de datos.
      
      Si bien las etapas donde más se utiliza el manejo de errores en las etapas de
      análisis sintáctico y semántico se pueden descubrir errores en cualquier etapa de la
      compilación.
      
      Conclusión de la Unidad
      
      Para concluir esta unidad tenemos que tener bien establecido cual es la verdadera función del análisis semántico.
      
      Funciones principales:
      
      • Identificar cada tipo de instrucción y sus componentes.
      • Completar la Tabla de Símbolos.
      • Realizar distintas comprobaciones y validaciones:
      
      * Comprobaciones de tipos.
      * Comprobaciones del flujo de control.
      * Comprobaciones de unicidad.
      * Comprobaciones de emparejamiento.
       
      • El Analizador Semántico finaliza la fase de Análisis del compilador y comienza la fase de Síntesis, en la cual se comienza a generar el código objeto.
      • La especificación de la semántica puede realizarse de dos formas:
          • Lenguaje natural.
          • Especificación formal: semántica Operacional, semántica Denotacional, semántica Axiomática
            `
          ]
        },
      
          {
          contenido_id: 32,
          titulo: 'Ejercicios de repaso para la Unidad VII',
      area: AreaComputacion.TEORIA_COMPUTACION,
          descripcion: 'pendiente',
          tipo: TipoContenido.TAREA,
          orden: 6,
          url_recurso: null,
          unidad_id: 7,
          unidad: { unidad_id: 7, nombre: 'UNIDAD VII - ANÁLISIS SEMÁNTICO' },
          contenido: [
            `
      Se le solicita diseñe un pequeño lenguaje, con instrucciones en inglés el cual cumpla con las siguientes funciones:
      
        1. La entrada será un archivo o bien a través de la pantalla en la que cada línea puede ser un dato o instrucción de graficación.
        2. Los datos podrán parecer en pares de números, el primero será la abscisa y el segundo la ordenada, o sólo un numero... en cuyo caso el valor de la abscisa se asigna por defecto (1,2, 3, etc.)... y un carácter opcional de graficación puede seguir a cada dato.
        3. Los datos pueden ser asignados e incluir exponentes científicos.
        4. Se debe poder especificar el título de la gráfica, rangos de abscisa y ordena (en la misma línea), las marcas de cada eje cartesiano. El largo y acho de la gráfica. Las especificaciones pueden aparecer en cualquier orden, y todas deben ser opcionales, una por línea y no debe ser necesario indicar le tamaño de la muestra.
      
      SE PIDE:
      
      Desarrolle la especificación de este lenguaje en notación BNF o BNFE.
            `
          ]
        },
      
        // ── UNIDAD VIII ─────────────────────────────────────────────
      
        {
          contenido_id: 33,
          titulo: '8.1 Elaboración del Proyecto',
      area: AreaComputacion.TEORIA_COMPUTACION,
          descripcion: 'pendiente',
          tipo: TipoContenido.TAREA,
          orden: 1,
          url_recurso: null,
          unidad_id: 8,
          unidad: { unidad_id: 8, nombre: 'UNIDAD VIII - PROYECTO (APLICACIÓN DE CONOCIMIENTOS)' },
          contenido: [
            `
      Objetivo: Aplicación de conocimientos de todos los aspectos teóricos del curso. Para lograr este objetivo se desarrollará un software llamado “Compilador Prototipo” el cual se evaluará en tres entregas.
      
      ELECCIÓN Y ACEPTACIÓN DEL TEMA A DESARROLLAR.
      
      Se solicita el diseño de un lenguaje nuevo, útil, práctico, con aplicación específica y su compilador, o bien, se puede elegir por el desarrollo del compilador para el lenguaje de programación STOP diseñado por el M. en C. Eduardo Rodríguez Ávila.
      
      8.2 PLANEACIÓN Y CALENDARIZACIÓN DE ACTIVIDADES.
      
      Primera entrega.
      
      Diseño conceptual de un lenguaje de programación útil, “nuevo” o muy original.
      
      Se solicitará en esta primera entrega:
      
      1. Escribir claramente el objetivo del nuevo lenguaje
      2. Descripción de la aplicación. Contendrá estos dos aspectos, mismos que corresponden a definir su paradigma y conocer las características básicas de los lenguajes actuales para construir el prototipo del nuevo lenguaje.
      3. Descripción textual o verbal, misma que corresponde a un análisis de su semántica o significado de todas y cada una de las instrucciones que manejará con operandos, funciones y parámetros.
      4. Descripción sintáctica, utilizando diagramas con explicaciones claras, completas y bien presentadas.
      
      Segunda entrega.
      
      Agregando a los cuatro puntos de la primera entrega:
      
      5. Descripción formal del lenguaje diseñado como novedoso. Utilizando el metalenguaje BNF y BNFE, diagramas o bien autómatas (AFD o AFND). Cuidar la presentación, incluir explicaciones verbales en cada diagrama que permitan documentar plenamente los aspectos técnicos y operativos del lenguaje a desarrollar. Tercera entrega. Desarrollo del lenguaje. Integrando la primera y segunda entrega a lo siguiente:
      6. Prototipo del compilador del nuevo lenguaje.
      7. Documentación del código fuente.
      8. Diseño de interfaces de entrada y salida (parámetros y opciones).
      9. Pruebas realizadas, explicadas y documentadas.
      10.Disco con la o las herramientas utilizadas en el desarrollo del prototipo, información sobre implementación y utilización.
      
      REVISIÓNES DEL AVANCE DEL PROYECTO Y ASESORÍAS
      
      En todas y cada una de las tres entregas se evaluará la calidad y el contenido: Carátula, Índice, buena presentación, buena redacción y cuidar la ortografía, esto es, la calidad del trabajo deberá ser excelente, la idea original e inédita, se acepta trabajar el nuevo lenguaje de forma individual o en equipo de máximo tres personas por lenguaje. Se evaluará la participación de cada integrante de forma personal.
      
      Si se decide trabajar con la modalidad de equipo, se deberá anexar en cada una de las tres entregas el programa de trabajo con las actividades o detalle de la participación de cada uno de los integrantes del equipo, con nombres completos y firmas de los integrantes (en cada entrega), para avalar su contenido, se sancionará con expulsión o anulación de la calificación a aquel integrante que no se involucre en la totalidad del proyecto que se entrega de forma conjunta por los integrantes en fechas y horas definidas con anticipación para la revisión de cada proyecto.
      
      PRESENTACIONES Y EVALUACIONES DE LOS PROYECTOS FUNCIONANDO.
      
      En cada una de las entregas se espera recibir:
      
      • Carpeta con broche o engargolado o bien fijar perfectamente bien las hojas, verificando que quede todo su contenido integrado.
      
      En la tercera etapa donde se agrega el disco del prototipo del compilador:
      
      • Cuidar la revisión de virus usando una vacuna actual, pues en el momento de la revisión, si existen problemas de daño por virus o no se verificó que la copia este completa y correcta, se anulará la revisión.
      • Verificar que el disco este bien etiquetado de forma interna y externa, fijando a la documentación.
      • No olvidarse de integrar el software o herramienta que se utilizó para el desarrollo. Este puede ser JAVA, C++, AWK, Ensambladores de cualquier tipo o la herramienta que el alumno decida en el análisis y diseño, a excepción de los sistemas manejadores de bases de datos.
            `
          ]
        },
  // ── UNIDAD I ─────────────────────────────────────────────
  {
    contenido_id: 1,
    titulo: '1.1 Sistemas formales y teoría de conjuntos',
area: AreaComputacion.COMPILADORES,
    descripcion: 'Definición de sistema formal, propiedades (coherencia, completitud, decidibilidad) y operaciones con conjuntos.',
    tipo: TipoContenido.LECCION,
    orden: 1,
    url_recurso: null,
    unidad_id: 1,
    unidad: { unidad_id: 1, nombre: 'Unidad I - Bases teóricas para el diseño de compiladores' },
    contenido: [
      `
“Un sistema es un conjunto de elementos independientes pero interrelacionados (recursos) que interactúan, directa o indirectamente, que forman un todo indivisible y organizado (nombre del sistema), que afecta y se ve afectado por su medio ambiente y realiza actividades, para el cumplimiento de su propósito u objetivo, valiéndose de mecanismos de retroalimentación que le permiten efectuar su auto control para continuar su existencia”.

De forma muy simplificada, un sistema es un conjunto de elementos organizados, que interactúan entre sí para lograr un fin común, incluye la aceptación de entradas, estímulos del medio ambiente para que mediante procesos que realiza el sistema permita generar salidas o resultados que cumplen con la razón de ser del sistema.

`,`https://drive.google.com/file/d/1WoBOP3LoxRSFfrs2qr0B37mJuWrxGA5l/view?usp=drive_link`,`

El concepto de formal se define como el cumplimiento de las condiciones necesarias o con los requisitos establecidos para llevarse a cabo, un ejemplo de esto puede ser la formalidad en cuanto a vestimenta que es requerida en ocasiones específicas, por ejemplo, una boda o el trabajo. 
Por lo tanto, se define a un sistema formal como el conjunto de los elementos destinados a cumplir cierta tarea o tareas siguiendo condiciones o, los requisitos establecidos. Aplicado a la teoría de lenguajes y compiladores, esto puede verse desde un punto de vista matemático y axiomático.


Los Sistemas Formales poseen propiedades, las cuales son:
•	Coherencia: El sistema formal es coherente si cada teorema o cadena integrada por símbolos yuxtapuestos al ser interpretados corresponden a una decisión verdadera.
•	Completitud: El sistema formal es completo si cada proposición verdadera puede ser representada mediante un teorema. Es incompleto si alguna verdad no puede expresarse.
•	Decidibilidad: Un sistema formal es decidible (de decisión), si existe un algoritmo (conjunto de instrucciones o reglas bien definidas, ordenadas y finitas, que permite realizar una actividad mediante pasos sucesivos que no generen dudas a quien deba realizar dicha actividad) que diga en tiempo finito, si una cadena cualquiera es un teorema o no lo es. 
Aquí colocamos como ejemplo el conocido teorema de Pitágoras donde se reúnen los tres elementos ya descritos: Coherencia, completitud y decidibilidad. La intención de describir procedimientos de manera más exacta y precisa es lo que ha motivado la formalización.
Teorema de Pitágoras como ejemplo de que reúne los elementos de un sistema formal.

`,`https://drive.google.com/file/d/1Pwr14i0-iltf84tDKtaFX-h8W0RJih0I/view?usp=drive_link`,`

En este sistema tenemos la coherencia, ya que el teorema se cumple como verdadero.
Tenemos la completitud ya que cada proposición es verdadera y la decidibilidad es gracias a que se puede realizar mediante un conjunto de pasos sucesivos de sus proposiciones.

`,`https://drive.google.com/file/d/1CIwPgi0boqM0rv3p8oyN9SqNL5uiW-f4/view?usp=drive_link`,
`
Teoria de conjuntos
Un conjunto es unión o agrupación de elementos u objetos especificados en tal forma que se puede afirmar con certeza si cualquier objeto dado pertenece o no a la agrupación. Un CONJUNTO es también una colección de objetos diferentes que pueden ser concretos (tangibles) o bien objetos abstractos, es el caso de los sistemas formales. Los objetos que lo forman se denominan ELEMENTOS ABSTRACOS o simbólicos. 
Es fundamental en el diseño de compiladores para definir, manipular y optimizar lenguajes de programación. Se utiliza principalmente en el análisis léxico (conjuntos de caracteres, tokens) y sintáctico (conjuntos FIRST y FOLLOW), permitiendo construir autómatas finitos y analizar gramáticas libres de contexto para traducir código fuente.
Para denotar los conjuntos se utilizan letras mayúsculas y para sus elementos, minúsculas o letras o números, también llamados símbolos del alfabeto que se puede utilizar de los alfabetos ya existentes como alfabéticos, numéricos, especiales, etc. Lo más importante en este material, es que también podemos crear elementos nuevos icónicos o abreviaturas como símbolos del alfabeto y de ahí crear un nuevo lenguaje. Más adelante en el punto 1.1.2 se profundizará más sobre el tema de Fundamentos básicos de conjuntos en el 1.1.3 sus Relaciones y funciones 
`
,
`•	1.1.1 Lenguaje formal 

Lenguaje en su concepto más amplio es un conjunto de símbolos, sonidos y actitudes que se utilizan para expresar ideas y sentimientos entre seres humanos.

Lenguaje Natural:
Así un lenguaje natural como el español es tan amplio y versátil, que podemos dar órdenes, suplicar. expresar admiración, temor, odio, alegría, amor o simplemente comunicar lo que pensamos. Una clase especial de lenguaje más restringido en expresión es el que se utiliza para comunicarse con máquinas como las computadoras.

`,`https://drive.google.com/file/d/14Wpfo56Ktx2x7ghZqedxEkUTr3TCc2fS/view?usp=drive_link`,`

Este grupo ha sido creado por el mismo ser humano, con el objetivo de poder entablar una comunicación directa con diversos objetos, de entre los cuales encontramos a las computadoras u ordenadores. Dentro de esta clasificación de lenguajes, tenemos VARIAS formas de clasificarlos: Una de ellas es en tres divisiones:

1)	Los lenguajes de alto nivel: 

Los podemos definir, como un lenguaje simbólico en el que una instrucción de programa fuente da lugar a varias instrucciones de lenguaje máquina, debido a que es compilado o interpretado.
“Chomsky Clasifica las gramáticas como no restringidas, sensibles al contexto, independientes de él, y regulares.”

2)	Lenguajes de medio nivel

Después de los lenguajes de bajo nivel y como un lenguaje que guarda la amabilidad de los lenguajes de alto nivel con el poderío de un lenguaje de programación de bajo nivel como son los lenguajes ensambladores, surge el lenguaje C estructurado. El mejor lenguaje de programación de computadoras que ha permitido programar sistemas operativos de la familia UNIX, hojas electrónicas de cálculo y muchos otros lenguajes más.

3)	Lenguajes de bajo nivel.

Son el lenguaje máquina, es en otras palabras, el lenguaje específico de las computadoras, en el que las instrucciones se expresan en código binario directamente asimilable por la máquina. También aquí entran los lenguajes ensambladores que son los primeros que se crearon y tienen una relación uno a uno con los lenguajes de máquina (que tienen control con microcódigo o control alambrado). 

En estos apuntes, para cumplir con el propósito de la unidad de aprendizaje principalmente nos enfocaremos en los Lenguajes Artificiales, conocidos también como Lenguajes de Programación de Alto Nivel o bien Simbólicos; esto se debe a que no son directamente utilizados por las computadoras, sino que primero pasan por un proceso de traducción, un proceso de ensamble, hasta llegar al punto en que son comprendidos por las computadoras.

Podemos definir a los Lenguajes de Programación como un conjunto de reglas y elementos gramaticales, de los que un usuario programador dispone para escribir un conjunto de instrucciones o indicaciones para la realización de una labor específica en la resolución de un problema (algoritmos más estructuras de datos). Como se ha visto hasta este momento, los lenguajes se pueden clasificar por alguna de las siguientes maneras:
•	Niveles con respecto al hardware (nivel bajo, medio y alto).
•	Generaciones (más de cinco generaciones).
•	Modelos de Interpretación (son 3, ensamblados, compilados e intérpretes de instrucciones).
•	Aplicación (general y particular).
•	Tipos. (según sus diversas características: “lenguajes, metalenguajes y super-lenguajes”) 
•	Paradigmas (más de 10 y los nuevos paradigmas de la inteligencia artificial).

Es por lo que tenemos como ejemplo los siguientes lenguajes:
•	Lenguajes Específicos conocidos como Metalenguajes o el lenguaje de los lenguajes también los podemos identificar como “formales”. Ejemplos: las expresiones regulares, los autómatas que representan un lenguaje regular que en el siguiente tema se describirán con detalle.
•	Lenguajes de Presentación y Formateo de Datos como el lenguaje de marcación de hipertextos HTML.
•	Lenguajes de Definición de Datos como DDl dentro de SQL, XML, etc.
•	Lenguajes de Propósito General como C, Pascal, Visual Basic, etc.
•	Lenguajes Orientados a Objetos como C++ y Java.
•	Lenguajes Orientados a la Inteligencia Artificial como Lisp.


Una gran parte de lenguajes de computadora, solo tienen un modo de expresión que es el imperativo y que solo transmite ordenes de un ser humano a una computadora. Un programa en este tipo de lenguajes es una serie de instrucciones que debe de ejecutar la computadora. La función principal de éstos lenguajes ordenar acciones de control a la computadora para obtener algún resultado y no expresar ideas. Un objetivo que se debe de cumplir al escribir un programa de éste tipo es el dar la secuencia correcta para realizar éstas acciones.

En este tipo de lenguaje a partir de sentencias o expresiones del tipo “si existe esta condición, se tiene una determinada conclusión” se pueden deducir o inferir soluciones a problemas. 

Traductor
Un traductor es un programa que convierte un programa que se llama “fuente” en otro “objeto”. El programa fuente esta escrito en un lenguaje llamado fuente y el programa objeto en fiorma del lenguaje del objeto.

`,`https://drive.google.com/file/d/19MdI7eGaK9uARshLms9oAb2zvlmYrB3G/view?usp=drive_link`,
`
Compilador 
Es un traductor que convierte un programa escrito en un lenguaje de alto o medio nivel como C, PASCAL, MODULA, FORTRAN O COBOL en lenguaje de máquina o ensamblador. Posteriormente este programa objeto es procesado para su ejecución. El programa fuente y los datos del programa se procesan separadamente dos fases diferentes que son la compilación y la ejecución.

Intérprete
Es un programa que traduce y ejecuta al mismo tiempo un programa escrito en un lenguaje de alto nivel como BASIS, LIPS, LOGO, ALP, SMALLTALK. Su función es la traducción de un programa fuente y el procesamiento de los datos que utiliza este programa.

Jerarquía de lenguajes
La jerarquía de lenguajes indicar el grado de dependencia que tienen estos resécto de una máquina o procesador en especial y se pueden clasificar como: 
•	Lenguaje máquina
•	Lenguaje ensamblador
•	Lenguaje de nivel medio
•	Lenguaje de alto nivel
•	Lenguaje de propósito especial
•	Lenguaje de inteligencia artificial
•	Lenguaje natural
`
,
`•     1.1.2 Fundamentos básicos de conjuntos

En el contenido temático de esta materia, lo que más importa, son tres relaciones básicas que se toman de los fundamentos de los conjuntos y son: 
1)	CONCATENACIÓN. Dos elementos yuxtapuestos o contiguos uno junto con otro. 
Ejemplo: ab (formando una cadena de dos elementos o símbolos). 
2)	DISYUNCION. Cuando sus elementos no se unen y se puede representar con x,y esto significa que son dos alternativas o la y o bien la y. También se pueden representar como x|y (y o Y) y otra representación exclusiva de las expresiones regulares es x + y (el signo de más se interpreta como disyunción al igual que la coma entre “x” y “y” (solo se incluyen las comillas para efectos de distinguir la y que significa disyunción. 
3)	CERRADURAS: positiva + y asterisco o estrella * 
En el caso de la cerradura positiva x+ Implica que la x se repetirá hasta el infinito, esto es el conjunto de (x, xx, xxx, xxx, …, hasta un  número infinito de x). El conjunto de y* está determinado por un conjunto de “y” que incluyen a un símbolo muy útil formalmente en las expresiones regulares que es la cadena vacía, misma que se expresa con épsilon, lambda o vacío. Y denota un conjunto infinito cadenas de longitud cero, uno, dos, tres, cuatro y hasta el infinito. 

Un conjunto está determinado cuando se conoce cuáles son los objetos que lo forman, es decir, cuáles son sus elementos. Para determinar un conjunto hay dos métodos: por extensión y por compresión.
a) Un conjunto está determinado por extensión cuando se enumeran todos sus elementos.
Ejemplo: A = {a, e, i, o, u}   <conjunto de los elementos conocidos como vocales>
b) Un conjunto determinado por comprensión cuando se da una propiedad que verifican todos y cada uno de sus elementos y sólo ellos.
Un caso particular de determinación de un conjunto por compresión es definirlo dando una propiedad recursiva, es decir, dando una ley que permita construir el conjunto a partir de los primeros elementos.
Ejemplos: A = {1, 11, 111, 1111 ,..., α}    <Conjunto de cadenas de 1´s hasta el infinito>
Cuando un elemento x pertenece a un conjunto A se expresa de forma simbólica como: x ϵ A.
Existen otras cuatro formas de enunciar a los conjuntos:
1)	Por extensión o enumeración: Los elementos son encerrados entre llaves y separados por comas. Es decir, el conjunto se describe listando todos sus elementos entre llaves. Ejemplo: Sean los conjuntos 
      A= {1,3,5,7,9}  y  B= {10,11,12}
2)	Por comprensión: Los elementos se determinan a través de una condición que se establece entre llaves. En este caso se emplea el símbolo | que significa “tal que". En forma simbólica es:
      A= {x | P(x)} = (x_1,x_2,x_3,…,x_n)
3)    Diagramas de Venn: Son regiones cerradas que sirven para visualizar el contenido de un conjunto o las relaciones entre conjuntos.
4)    Por descripción verbal: Es un enunciado que describe la característica que es común para los elementos. Un ejemplo sencillo de aplicación de lo anterior, son las cinco vocales.
De forma verbal, se define simplemente como tal: “El conjunto de las cinco letras vocales”
      Por extensión: V= {a,e,i,o,u}
      Por comprensión: V= {x | x sea una vocal} 

NOTA: En el caso de la descripción de las CERRADURAS: positiva + y asterisco o estrella * solo se dio una descripción verbal de sus elementos, la descripción formal por comprensión sería: 
      X^+ = {x, xx, xxx, xxxx, ..., α}    y     Y*= {y, yy, yyy, yyyy, ..., α}
`
,
`•    1.1.3 Relaciones y funciones
La teoría de conjuntos es indispensable para las matemáticas discretas, siendo estas dos indispensables para la teoría de la computación. Basándonos en este ejemplo podemos definir la existencia de operaciones con conjuntos. Los cuales se especifican de manera general en la siguiente tabla.

`,`https://drive.google.com/file/d/1gV8KG28d3KBMQihsVNX8LE_Sjjp38TyT/view?usp=drive_link`,`

•     Subconjunto ( A⊆B)
Significa que: Todos los elementos de A están contenidos en B 
•     Igualdad (A=B): Dos conjuntos son iguales si tienen exactamente los mismos elementos.
•     Finito: Número limitado de elementos.
•     Infinito: Número ilimitado de elementos, como los números naturales 

Ejemplo:
      N= {1,2,3,…} N’= {1,2,3,…}      N = N’

Operaciones Básicas:
Estas son tres de las operaciones básicas, pero existen más como la potencia que es la que describiremos más adelante en la Expresiones Regulares = ER
•     Unión (𝐴∪𝐵): Elementos que están en A se unen a los elementos en B 
•     Intersección : 𝐴∩𝐵 ): Elementos comunes entre A y B.
•     Diferencia (𝐴−𝐵): Elementos que están en A pero no en  B
`
,
`•    1.1.4 Inducción matemática
Es un método de demostración que prueba la validez de una proposición, fórmula o teorema para todos los números naturales  𝑛 = 1,2,3,… 

Funciona demostrando un caso base (normalmente n=1 y luego probando que si es válida para un caso 𝑘, entonces también lo es para el siguiente, k + 1 

Empezando con un 1:  1 + 1= 2 + 1= 3,      por lo tanto      n= 1, 2, 3, …, α
`
,
`•    1.1.5 Cardinalidad de Conjuntos
La cardinalidad de un conjunto es el número de elementos distintos que lo componen, representándose comúnmente con una relación uno a uno.
Para conjuntos finitos, es un número natural (ej.   (Que para este ejemplo e = 3)
            |a,b,c|=3
mientras que, para conjuntos infinitos, indica su tamaño o "potencia". 
Aquí hay ejemplos de cardinalidad de conjuntos: 
•     Conjunto A = {manzana, pera, uva}: La cardinalidad es |A|= 3
•     Conjunto B = {2, 4, 6, 8, 10}: Es un conjunto finito con cardinalidad |𝐵|=5
•     Conjunto C = {x | x es una vocal en "banana"}: El conjunto es {a}, por lo que la cardinalidad |𝐶|=1. Los elementos repetidos no se cuentan.
•     Conjunto D = { }: Es el conjunto vacío, por lo que su cardinalidad es |𝐷|=0
•     Conjuntos Infinitos: El conjunto de los números naturales 
            N={1,2,3,...}
Tiene una cardinalidad infinita, a menudo denominada N = 0 (cero)
 
Ejemplo de cardinalidad y subconjuntos: 
      Si 𝑋= {𝑎, 𝑏, 𝑐}       Y= {𝑚𝑎𝑛𝑧𝑎𝑛𝑎𝑠, 𝑛𝑎𝑟𝑎𝑛𝑗𝑎𝑠, 𝑝𝑒𝑟𝑎𝑠}
Ambos conjuntos tienen  |𝑋|= |𝑌|= 3. Lo que significa que tienen la misma cardinalidad o son conjuntos equipotentes. 
`
    ]
  },

  {
    contenido_id: 2,
    titulo: '1.2 Conceptos y elementos para el diseño de lenguajes',
area: AreaComputacion.COMPILADORES,
    descripcion: 'Elementos fundamentales para el diseño de lenguajes de programación.',
    tipo: TipoContenido.LECCION,
    orden: 2,
    url_recurso: null,
    unidad_id: 1,
    unidad: { unidad_id: 1, nombre: 'Unidad I - Bases teóricas para el diseño de compiladores' },
    contenido: [
      `Algunas de las características básicas a considerar en el diseño de los lenguajes de programación son:
      
•	Abstracción. El lenguaje debe evitar forzar a los programadores a tener que enunciar algo más de una vez. El lenguaje debe permitir al programador la identificación de patrones repetitivos y automatizar tareas mecánicas, tediosas o susceptibles de cometer errores. Ejemplos de técnicas de abstracción son los procedimientos y funciones, la generalidad, los lenguajes de patrones de diseño, etc.
•	Concisión notacional. El lenguaje proporciona un marco conceptual para pensar algoritmos y expresar dichos algoritmos con el nivel de detalle adecuado. El lenguaje debe ser una ayuda al programador (incluso antes de comenzar a codificar) proporcionando un conjunto de conceptos de forma clara, simple y unificada. La sintaxis debe ser legible por el programador (o por otras personas que vayan a utilizar esos programas). Deben buscarse soluciones de compromiso entre lenguajes demasiado crípticos (por ejemplo, C) y lenguajes con código demasiado largo o dilatado con exceso. (Cobol, XSLT).
•	Eficiencia. El programador debe poder expresar algoritmos suficientemente eficientes o el lenguaje debe incorporar técnicas de optimización de los programas escritos en él.
•	Entorno. Aunque el entorno no forma parte del lenguaje, muchos lenguajes débiles técnicamente son ampliamente utilizados debido a que disponen de un entorno de desarrollo potente o agradable. De la misma forma, la disposición de documentación, ejemplos de programas e incluso programadores pueden ser factores clave de la popularidad de un lenguaje de programación.
•	Expresividad. El programador debe poder expresar sus intenciones. En ocasiones, demasiada expresividad puede implicar falta de seguridad. De hecho, algunos sistemas limitan la expresividad para mejorar la fiabilidad de los programas (por ejemplo, la aritmética de punteros no es permitida en algunos lenguajes).
•	Extensibilidad. El lenguaje debe facilitar mecanismos para que el programador pueda aumentar la capacidad expresiva del lenguaje añadiendo nuevas construcciones. En Haskell, por ejemplo, el programador puede definir sus propias estructuras de control.
•	Librerías e interacción con el exterior. La inclusión de un conjunto de librerías que facilita el rápido desarrollo de aplicaciones es una componente esencial de la popularidad de los lenguajes. Si no se dispone de tales librerías, es necesario contemplar mecanismos de enlace con otros lenguajes que facilitan la incorporación de librerías externas.
•	Ortogonalidad. Ofrece la posibilidad de combinar características de todas las formas posibles (sin excepciones). La falta de ortogonalidad puede suponer la enumeración de situaciones excepcionales o la aparición de incoherencias. Un ejemplo de falta de ortogonalidad es la limitación que impone Pascal para que una función devuelva determinados tipos de valores.
•	Portabilidad. El lenguaje debe facilitar la creación de programas que funcionen en el mayor número de entornos computacionales. Este requisito es una garantía de supervivencia de los programas escritos en el lenguaje y, por tanto, del propio lenguaje. Para conseguir la portabilidad, es necesario limitar las características dependientes de una arquitectura concreta.
•	Seguridad. La fiabilidad de los productos software es cada vez más importante. Lo ideal es que los programas incorrectos no pertenezcan al lenguaje y sean rechazados por el compilador. Por ejemplo, los sistemas con chequeo de tipos establecen restricciones a los posibles programas que pueden escribirse en un lenguaje para evitar que en tiempo de ejecución se produzcan errores. Existen lenguajes como Charity que garantizan la terminación de sus programas.

PREVENCIÓN Y DETECCION DE ERRORES

Tener una serie de defensas tal que, si un error no es detectado por el programador que desarrolla el código, este error probablemente sea detectado por otro programador. Los errores deben ser detectados por el compilador, si un mecanismo no es capaz de detectar un error es necesario implementar otro que lo detecte, pero nunca ignorarlo.
Prevención y tolerancia de fallos.
Hay dos formas de aumentar la fiabilidad de un sistema:
Prevención de fallos: Se trata de evitar que se introduzcan fallos en el sistema antes de que entre en funcionamiento.
Se realiza en tres etapas:
•	Evitación de fallos: Se trata de impedir que se introduzcan fallos durante la construcción del sistema.
•	Eliminación de fallos: Consiste en encontrar y eliminar los fallos que se producen en el sistema una vez construido.
•	Tolerancia de fallos: Se trata de conseguir que el sistema continúe funcionando, aunque produzcan fallos. En ambos casos el objetivo es desarrollar sistemas con modos de fallo bien definidos.
Detección de errores o Por el entorno de ejecución o hardware (p.ej. instrucción ilegal) o Núcleo o sistema operativo (p.ej. puntero nulo) o Por el software de aplicación o Duplicación (redundancia con dos versiones) o Comprobaciones de tiempo o Inversión de funciones o Códigos detectores de error o Validación de estado o Validación estructural. 

EFICACIA.

Los lenguajes de programación contienen un repertorio de tipos básicos o primitivos junto con una serie de operaciones sobre dichos tipos. Los tipos básicos más habituales son:
•	Números enteros: Normalmente se representan mediante un número de bytes fijo, limitando su rango. Algunos lenguajes, como Haskell, incluyen una representación ilimitada.
•	Caracteres: Como en el caso anterior, suelen representarse mediante un número fijo de bytes. En algunos lenguajes, los caracteres se identifican con los enteros.
•	Números reales representados en punto flotante. La representación también suele realizarse mediante un número fijo de bytes, limitando la precisión de los programas.
•	Booleanos: Con los valores verdadero o falso.
•	Referencias. Algunos lenguajes incluyen un tipo básico que se utiliza para hacer referencia a otros elementos. Estas referencias pueden implementarse mediante direcciones de memoria.
Cada tipo básico contiene un conjunto de operaciones primitivas. Por ejemplo, los enteros y flotantes incluyen operaciones aritméticas, los caracteres, operaciones de conversión y los booleanos (operaciones lógicas).
Los lenguajes con chequeo estático de tipos permiten comprobar en tiempo de compilación que en tiempo de ejecución no se van a producir errores de tipos. El chequeo estático de tipos aumenta la seguridad de los programas, al detectar errores antes de la ejecución. Otra ventaja es la eficiencia, ya que en la fase de ejecución no es necesario realizar comprobaciones de tipo.
Otros lenguajes, como LISP, BASIC, Perl, Prolog, etc. no incluyen chequeo estático de tipos. Las ventajas de no incluirlo son una mayor flexibilidad (es posible construir más programas) y sencillez para el programador. El programador no se preocupa de incluir declaraciones de tipos y los programas dan menos errores de tipo al compilar (aunque pueden darlos al ejecutarse).
Algunos lenguajes, como Haskell o ML, incluyen además un sistema de inferencia de tipos. El programador no tiene obligación de declarar el tipo de las expresiones, ya que el sistema es capaz de inferirlo. En caso de que el programador lo hubiese declarado, el sistema puede comprobar que el tipo declarado coincide con el tipo inferido.
`
    ]
  },

  {
    contenido_id: 3,
    titulo: '1.3 Sistemas de traducción y compilación',
area: AreaComputacion.COMPILADORES,
    descripcion: 'Conceptos de traductores, intérpretes y compiladores.',
    tipo: TipoContenido.LECCION,
    orden: 3,
    url_recurso: null,
    unidad_id: 1,
    unidad: { unidad_id: 1, nombre: 'Unidad I - Bases teóricas para el diseño de compiladores' },
    contenido: [
      `LENGUAJE DE MÁQUINA.
Es el sistema de códigos directamente interpretable por una máquina, como el procesador de un ordenador o computadora. Este lenguaje está compuesto por un conjunto de instrucciones que determinan acciones a ser tomadas por la máquina. Un programa de computadora consiste en una cadena de estas instrucciones de lenguaje de máquina (más datos). 

Estas instrucciones son normalmente ejecutadas en secuencia, con eventuales cambios de flujo causados por el propio programa o eventos externos. El lenguaje de máquina es específico de cada máquina o arquitectura de la máquina, aunque el conjunto de instrucciones disponibles pueda ser similar entre ellas.
 
El lenguaje-máquina sólo utiliza dos signos. Y éstos se corresponden exactamente con las únicas dos constantes del álgebra booleana, y también con los dos estados exclusivos de un conmutador. Estos signos, constantes o estados de conmutación son el 1 y el 0, llamados dígitos binarios.  Claude Elwood Shannon, en su Analysis of Relay and Switching Circuits, y con sus experiencias en redes de conmutación sentó las bases para la aplicación del álgebra de Boole a redes de conmutación.  Una Red de Conmutación es un circuito de interruptores eléctricos que, al cumplir ciertas combinaciones booleanas con las variables de entrada, define el estado de la salida. 

Este concepto es el núcleo de las Compuertas Lógicas, las cuales son por su parte, los ladrillos con que se construyen sistemas lógicos cada vez más complejos.  Shannon utilizaba al “relay” como dispositivo físico de conmutación en sus redes. El “relay”, igual que el interruptor de una lámpara eléctrica, es 1 o es 0; está prendido o está apagado.

El desarrollo tecnológico ha permitido evolucionar desde las redes de relays electromagnéticos de Shannon, pasar a circuitos con tubos de vacío, luego a redes transistorizadas, hasta llegar a los modernos circuitos integrados. El Microprocesador de la CPU de la computadora u ordenador opera en lenguaje-máquina, ya que su repertorio de instrucciones consiste en la ejecución de conjuntos binarios. Por cierto, que Shannon fue quien aportó el término de bit para los guarismos 1 o 0, acrónimo de las palabras inglesas binary digit o el equivalente en español: "dígito binario". 

LENGUAJE ENSAMBLADOR.

El lenguaje ensamblador consiste en una selección de abreviaturas (mnemónicos o mnemoclaves) tomadas de palabras del lenguaje inglés, las cuales dan una idea de su significado. Este lenguaje está muy cercano a la arquitectura de la computadora y se dan instrucciones indicando el direccionamiento para cada instrucción. Este es una versión mnemotécnica del código de máquina, donde se usan nombres (identificadores) en lugar de códigos binarios para operaciones, y también se usan nombres (también identificadores) para las direcciones de memoria.

Existe un lenguaje ensamblador para cada tipo de computadora en especial, por lo que se dice que son dependientes del hardware y de bajo nivel, por lo que suelen ser complejos dependiendo de la capacidad de la computadora, a mayor capacidad mayor complejidad en la elaboración del código en este tipo de lenguaje.
	 Un ejemplo puede ser lo que se muestra a continuación...

`,`https://drive.google.com/file/d/1b5e1Ao1xJEh4wCK_D6cwOGbNj-cmh_LL/view?usp=drive_link`,`

Se concibe una pequeña palabra de instrucción, en la que los cuatro primeros bits son el código de la instrucción, donde 0001 y 0010 representan hipotéticamente las instrucciones MOV (mover) y ADD (sumar) respectivamente, el 00 representa (también hipotéticamente) la dirección de la variable a, el 01 representa la dirección de la variable R1, de donde se concluye que las tres instrucciones en ensamblador corresponden a:

MOV a, R1 - Se mueve el contenido de la constante cuya dirección es a (00) a la variable R1 (cuya dirección en 10) y esto equivale a igualar el valor de la variable a= R1
ADD #2, R1 - Se incremente el valor de la variable R1 en dos unidades (que convertidas a binario es 10) y equivale a R1 = R1 + 2
MOV R1, a	El valor que tenga R1 se guarda en la variable a 
			(Igualándolos) R1 = a

De esta forma podemos imaginar que todo lo que se escribe en mnemónicos conlleva una traducción a binario. Según se mostró con un tipo muy particular (ya simplificado) de lenguaje ensamblador, solo con el objetivo de entender una traducción simulada de ensamblador a binario

LENGUAJE DE ALTO NIVEL
La programación en el lenguaje de la máquina o en lenguaje simbólico tiene ciertas ventajas: 
Mayor adaptación al equipo. 
Posibilidad de obtener la máxima velocidad con mínimo uso de memoria. 

También tienen importantes inconvenientes: 
Imposibilidad de escribir código independiente de la máquina. 
Mayor dificultad en la programación y en la comprensión de los programas. 

Por esta razón, a finales de los años 1950 surgió un nuevo tipo de lenguaje que evitaba los inconvenientes, a costa de ceder un poco en las ventajas. Estos lenguajes se llaman "de tercera generación" o "de alto nivel", en contraposición a los "de bajo nivel" o "de nivel próximo a la máquina". 
Principales lenguajes de alto nivel 
Basic 
Pascal, Object Pascal 
C, C#, C++ 
Python 
Rubi
Perl 
Ada 
Cobol 
Java 
Fortran  
Lenguajes funcionales 
Lisp 
Haskell 
Nota: Dentro de los lenguajes de nivel alto, el lenguaje C y sus derivados son considerados lenguajes de nivel intermedio.

TRADUCTORES
Los traductores son un conjunto de programas, necesarios para lograr la conversión de un código a otro, de un lenguaje a otro y de diferentes niveles. Antes de mostrar los diferentes tipos de traductores es importante remarcar la importancia de la traducción de un código a otro. Para poder lograr la comunicación hombre máquina, simplificando esta labor, se han creado herramientas “traductores” cada vez más cercanos al hombre y más lejanos del lenguaje de máquina, Por esta razón trataremos de definir brevemente que es un nivel.

Los niveles en los programas se consideran tomando en cuenta las características del lenguaje que se utiliza. En términos muy generales, los lenguajes pueden ser:

•	De alto nivel. - Cercanos al hombre y lejanos a las características particulares de la computadora o al lenguaje de máquina.
•	De bajo nivel. - Cercanos a la arquitectura de las computadoras y con gran detalle para el código que realiza el hombre debido a su cercanía con el tipo particular de computadora.
•	De nivel intermedio. - Estos son poderosos como los lenguajes de bajo nivel (ensambladores) y accesibles al hombre, como son los lenguajes de alto nivel. El ejemplo clásico de este tipo de lenguajes de nivel medio, son los que tienen alguna relación con los diferentes tipos de lenguaje C, ya que estos tienen una gran variedad por la cantidad de derivados que se han generado, incluyendo a JAVA.
Con base a lo anterior, existen infinidad de niveles intermedios de traducción o interpretación, los cuales llevan diferentes nombres tales como:

•	Ensambladores. - Estos existen en gran variedad y en diferentes tipos, de acuerdo con sus particularidades, ya que, dentro de los mismos ensambladores, también incluyen varios tipos de niveles de traductores debido a que son de bajo nivel y dependen de las características específicas de cada computadora. Esto hace que se tenga un tipo especial de ensamblador para cada tipo de procesador en particular, dependiendo de su tamaño de palabra, el número de registros internos con los que cuenta, así como características específicas de sus tipos de direccionamiento. 

Además de las características físicas con las que se diseña un lenguaje ensamblador, estos lenguajes pueden ser identificados de forma genérica, en los siguientes tipos: Los pseudo-ensambladores o emuladores de ensamblador, un ejemplo de este tipo diseñado para el procesador INTEL modelo 80286 es el programa que se ejecuta como comando externo, conocido como el DEBUG. 

Otro tipo de ensambladores son los macroensambladores, también para procesadores INTEL, un ejemplo de este es MASM y los ensambladores en sí. Es importante hacer la diferencia entre el concepto de ensambladores como procesos y como lenguajes, ya que en el proceso de traducción de un lenguaje de programación de alto nivel se requiere traducir a bajo nivel y para esto se tiene un programa o procesador que por lo general proporcionan los sistemas operativos llamado ensamblador (ASSEMBLER), y este adecua el código de un lenguaje de alto nivel a otro de bajo nivel, mismo que es el que la computadora interpreta y ejecuta. 
Los lenguajes ensambladores son a los que nos referimos en la clasificación de los niveles que aquí se describen, ya que un compilador puede incluir una fase de síntesis o ensamble que se describirá con más detalle en las siguientes unidades.

INTÉRPRETES O TRADUCTORES INMEDIATOS.

Estos tienen como principal característica la posibilidad de emitir una repuesta inmediata (en tiempo real), esto es, para cada instrucción se genera una acción o respuesta que se obtiene de la máquina al mismo tiempo que se realiza la interpretación del código escrito por el usuario programador. Este es un nivel de traducción eficiente y económica, debido a que no requiere gran capacidad de almacenamiento, ya que no genera código intermedio y por eso es eficiente al producir una respuesta inmediata. Su inconveniente es que deja el código fuente a disposición del usuario.

Existen lenguajes como BASIC y C de los cuales se han construido versiones compiladas e intérpretes con respuesta inmediata, la diferencia entre uno y otro es la cantidad de recursos que requiere cada tipo de herramienta y los niveles de traducción que a continuación se describen. Es importante ubicar a los traductores, intérpretes y compiladores como herramientas de desarrollo de programas para la utilización de computadoras cualquiera que sea su capacidad y complejidad. Por lo que se abrevian como herramientas de desarrollo o productividad, existiendo una gran variedad por la combinación de sus características.

Niveles de traducción. Recordemos la necesidad de realizar una comunicación hombre máquina para poder controlar los trabajos que realiza una computadora. Para esto ya se explicó que el nivel más alto de traducción es el lenguaje cercano al hombre, los cuales se conocen como lenguajes naturales tales como el inglés, español, francés, alemán, etc. Estos lenguajes son entendibles para el hombre, pero difíciles de definir en sus reglas gramaticales debido a la gran cantidad de excepciones, así como la variedad de palabras y distintos significados que se requieren para expresar ideas que por lo general están sujetas a un contexto. 

Recapitulando lo anterior, para poder lograr que la máquina identifique palabras, se necesita establecer reglas gramaticales y realizar procesos tales como:

•	Codificación, Análisis, Síntesis, estos tres conocidos como traducción y la parte de interpretación o ejecución del código conocido como tiempo de ejecución o RUN TIME.
•	Codificación es una operación consistente en representar una información o instrucción mediante un código. 
•	Código es un conjunto de reglas que proporcionan una correspondencia biunívoca que permite representar datos, programas y otras informaciones con vistas a facilitar su tratamiento automático o su transmisión. 
•	Análisis es el estudio realizado para separar las distintas partes de un todo. 
•	Síntesis es la unión de esas partes (o la composición) del todo.

En la siguiente figura se presenta un diagrama esquemático de un proceso de codificación, en este se incluye un usuario programador, el cual escribe un código en algún lenguaje de programación. El código se puede introducir directamente en la computadora (de forma interprete) o bien grabar el código en un archivo llamado programa fuente.

La codificación es la que realiza el hombre, las cuales se guardan en un archivo conocido como programa fuente o código fuente. Este programa fuente entra a un proceso de análisis y síntesis conocido como compilación, donde además se realiza la labor de análisis de las palabras estructuradas en el código fuente para verificar que sean léxica, semántica y sintácticamente correctas.

`,`https://drive.google.com/file/d/1f0w0o0RYVDVZnXlqmng5Pk9MmGIi26I7/view?usp=drive_link`,`

Después de realizado lo anterior, si son correctas, pasan a la fase de análisis y después se aceptan para pasar a la siguiente etapa que es de síntesis y generación de un código que será el que la máquina interpretará y ejecutará. 

De aquí que en esa cantidad de pasos intermedios se tienen una variedad de compiladores que en términos generales y basándonos en sus niveles de traducción, los podemos describir como:
Precompiladores o Preprocesadores, Compiladores y Pseudocompiladores.
Estos conceptos se ilustran a continuación. Los compiladores también se pueden clasificar por el número de pasadas, pero todos estos tipos de compiladores requieren de otro proceso de invocación o ejecución conocido como RUN-TIME. Los dos tiempos que tiene un compilador: COMPILE-TIME y RUN-TIME es otra característica que diferencia a un compilador de un intérprete, ya que éste último solo tiene un tiempo que es una invocación y su inmediata ejecución.

•	Intérpretes. - Programa que conjunta el tiempo de revisión, análisis, síntesis y ejecución (RUN-TIME), en una sola orden o instrucción. Es eficiente y económico porque no requiere de grandes recursos de almacenamiento y se realiza todo en un solo tiempo.
•	Compiladores. - Como ya se describió, los diferentes nombres y tipos de compiladores están en función del nivel de traducción que se tiene del código fuente. Cuando el código fuente es de muy alto nivel, por ejemplo, herramientas que se conocen como 5GL (Quinta generación). Que se describirán como los diferentes tipos de lenguajes en la siguiente unidad. 

Los lenguajes 5GL pueden requerir de un preproceso o etapa previa de adaptación o traducción agregada para disminuir el nivel de 5º a 4º nivel y con esto agregarle instrucciones que completen la información que la computadora requiere.

`,`https://drive.google.com/file/d/11TYwL64iGBRe-ZC9Q2_GCmfCDHQvguGp/view?usp=drive_link`,`

Fases y etapas que intervienen, en el proceso de compilación y elementos que intervienen en el proceso de codificación

Los compiladores pueden ser clasificados de acuerdo a su construcción como de una pasada, dos pasadas, pasadas múltiples, o dependiendo de la manera en que fue construido u otra
característica especial corno optimizado o depurador.

El compilador en general, divide en dos fases: análisis y síntesis. La parte de análisis se compone de lo siguiente:
•	'Scanner' o analizador de léxico. Este separa el programa fuente en 'tokens', que son fragmentos de texto o unidades básicas como palabras reservadas, variables, símbolos aritméticos, de relación. etc. de acuerdo a su significado. Además, quita comentarios, procesa directivas de control y almacena los tokens en la tabla de símbolos.
•	'Parser' o analizador de sintaxis. Verifica el correcto agrupamiento de los 'tokens' en frases gramaticales, que se representan para su análisis en un árbol de parsing.
•	Analizador semántico. Verifica la consistencia de las expresiones o el significado del proarama localizando errores. Ejem. verificar que cada operador tenga operandos del mismo tipo, valor o con una relación lógica adecuada.
La parte de síntesis está formada por:
•	Generador de código intermedio. Produce código para una máquina abstracta que sea fAcil de simplificar y traducir.
•	Optimizador de código. El código intermedio se analiza y transforma en código equivalente que es más eficiente.
•	Generador da código. Produce código en ensamblador o código ejecutable.


`,`https://drive.google.com/file/d/1OjhOJnLUECbGxyjV0QVkJNhHpLmbHteu/view?usp=sharing`,`

Ejemplo de un preprocesador o precompilador:
En el siguiente diagrama del lado izquierdo, sólo se esquematiza de forma genérica la función de un pre-proceso que es bajar el nivel del lenguaje a procesar. Este diagrama del lado derecho se puede observar en el código que se escribe para una herramienta 4GL, solo se tienen dos líneas de instrucciones y en una herramienta 3GL, se agregan más instrucciones para realizar la misma función descrita en la herramienta 4GL, que consiste en tomar la base de datos conocida como clientes “customer” y de ella obtener una lista con el nombre y la dirección de los clientes. Este ejemplo corresponde a: SQL Informix. Ejemplo preproceso


`,`https://drive.google.com/file/d/15L1klQqUQbm4wJAq-Rh5mg1FzORrRpgs/view?usp=sharing`,`

El último ejemplo relacionado con los niveles de traducción es el caso de un pseudocompilador el cual se puede describir como un generador de código intermedio, esto es, se crea un código estándar para lograr algunas ventajas con respecto a la arquitectura de la computadora, de forma muy general tenemos en el siguiente diagrama de bloques un pseudocompilador o máquina virtual.

`,`https://drive.google.com/file/d/1ovq2Gob0ObmdgqJ2Kpxw46B4UJsJOE2n/view?usp=drive_link`,`

En este caso el pseudocompilador es un generador de código intermedio, cuya principal ventaja es su compatibilidad El ejemplo clásico, conocido y actual de este tipo de herramientas es la máquina virtual de JAVA, donde se tiene un generador de código intermedio conocido con BYTECODE el cual es independiente de la arquitectura de la computadora donde se corre para hacer posible que las aplicaciones corran en cualquier plataforma, lo mismo para UNIX, MACHINTOSH Y MICROSOFT. Una máquina virtual es una capa intermedia de software que se le agrega al hardware para lograr la compatibilidad y el enmascaramiento o bien el ocultamiento de las particularidades del hardware donde se ejecutan las aplicaciones diseñadas para la máquina virtual en cuestión.

`,`https://drive.google.com/file/d/1n8fkPZynvH6dRvV3SnItp1RCqBE1XyDc/view?usp=drive_link`,`

Ya para concluir sobre los niveles de traducción es importante remarcar que, con el éxito de la computadora personal, se tienen muchas facilidades en cuanto a herramientas de desarrollo y paqueterías, pero es difícil, por ejemplo, pensar que se tienen microprocesadores con velocidades medibles en gigahertzs y aún no se tiene un ensamblador para procesador INTEL PENTIUM. Por lo que en este tema se pretende aprovechar la necesidad de crear niveles de traducción más eficientes y realizarlos con herramientas de bajo nivel como son los ensambladores.

`,`https://drive.google.com/file/d/1618E3d03JeNmPxP_DzzxqWfWy79E3c2Z/view?usp=drive_link`,`

A continuación, se da una lista con los paradigmas o modelos que tienen los lenguajes actuales de programación, no sin olvidar que cada día se puede desarrollar un nuevo lenguaje o paradigma. Ya que los lenguajes que se conocen hasta la fecha corresponden a los modelos actuales o paradigmas conocidos con la tecnología que existe en este momento, pero estos generarán nuevos modelos, mismos que guardan características heredadas, tal como los hijos se parecen a sus padres.  





Los paradigmas conocidos hasta la fecha son:

Imperativo. - Corresponden a la arquitectura de John Von Newmann “programa almacenado en memoria”, con instrucciones estructuradas, funciones y manejo de memoria dinámica con apuntadores a direcciones de memoria que controla el usuario. Ejecución señalizada. Ejemplos: ALGOL, COBOL y FORTRAN.

Funcional (operacional). - Los lenguajes que responden a este modelo optimizan la representación interna de los datos y le dan particular importancia al orden de las decisiones que se toman en la lógica del código. Este paradigma está basado en la optimización de los datos que se almacenan en memoria. El ejemplo más representativo de este tipo de paradigma es LISP.
J. McCarthy “Recursive Functions of Symbolic Expressions and Their Computation by Machine. Part 1. Comm ACM Vol. 3 No. 4. abril de 1960 páginas 184-195.

Orientado a objetos. - Este quizá es el paradigma más difundido y conocido para los nuevos programadores, ya que pretende facilitar la labor de codificar el detalle de cómo resolver un problema. Los lenguajes orientados a objetos proporcionan una gran cantidad de elementos con los cuales no se tiene que definir el cómo, sólo lo que se desea obtener del lenguaje y aprovechar el encapsulamiento (ocultamiento y protección del código), la inferencia, el paso de mensajes, las clases, subclases, la herencia, etc. El primer lenguaje representativo de este paradigma es el Smalltalk (en 1980), luego C++ (en 1986), el Object Pascal (en 1989), Object Cobol (en 1993) hasta el actual y exitoso Java (en 1995).

Asíncrono. - Este paradigma y el que se describe a continuación corresponde a las nuevas arquitecturas avanzadas de las computadoras, pueden optimizar las características de los microprocesadores con tipo de procesamiento paralelo o vectorial. Este paradigma corresponde a procesos asíncronos (en diferentes tiempos de ejecución) los cuales se hacen posibles mediante la comunicación entre procesos. El lenguaje de programación LINDA es un ejemplo representativo de uno de los lenguajes que agrega estas facilidades, tomando como base a los lenguajes C y FORTRAN.

Síncrono. - En este modelo se tiene un procesamiento paralelo con alto grado de acoplamiento. Debe de haber una sincronía en todos los procesos que se ejecutan al mismo tiempo. Un ejemplo de un lenguaje que corresponde a este paradigma es el ACTUS, Paralation LISP que proveen construcciones independientes de la arquitectura de la computadora.

Funcional (definicional). - Este paradigma ofrece mayores facilidades que el paradigma operacional, pues tiene una gran variedad de funciones que el usuario programador puede utilizar para simplificar su código. Un ejemplo de este tipo de lenguajes es el lenguaje de programación llamado Miranda y el Haskell. Este último es un polimorfismo estático (variedad de formas predefinidas) derivadas de Miranda y ambos lenguajes (Miranda y Haskell) se caracterizan por tener funciones de alto orden, usar datos algebraicos definidos por el usuario y un sistema de clases. También proporciona operadores con redireccionamiento dinámico (overloading), sistema funcional de entradas y salidas, arreglos funcionales y compilación por separado.

Transformacional. - Este paradigma permite definir reglas sobre argumentos y términos que se reescriben. El ejemplo representativo de este tipo de lenguaje es Bertrand, que corresponde a la característica de ser un lenguaje de especificación basado en reglas, sobre argumentos y términos que se pueden reescribir. En los lenguajes restrictivos el usuario programador debe especificar explícitamente los árboles de búsqueda y la propagación restrictiva que es la característica básica de este paradigma transformacional.

Lógico. - Este paradigma emplea la lógica y las reglas de inferencia, tratando de adecuarse al lenguaje natural. El ejemplo representativo de este paradigma es PROLOG y todos sus derivados.

Basado en formas (Form-based). - Este es el paradigma que corresponde a todas las hojas electrónicas de cálculo que se han diseñado, desde Visical, Lotus hasta MS-Excel, iWork, OpenOffice, Tables, Mesa, Mariner Calc, Papyrus Office, Ragtime 6, Neo Office Calc, ThinkFree Calc, KSpread 2.

De flujo de datos (dataflow). - Los lenguajes que corresponden a este paradigma se programan a través de elementos gráficos. Un ejemplo de este lenguaje es “Show and Tell”. 
Restringido (constraint). - Especifica la relación que debe permanecer. El usuario programador es el responsable de especificar la relación y el sistema es el encargado de mantenerla. Aunque no se tienen muchos lenguajes que respondan a este paradigma, un ejemplo que corresponde a este paradigma es el lenguaje visual ThigLab.

Demostracional. - Mejor conocido como de “Query by example”. ¿En este paradigma se presenta el “qué quiero?” con un ejemplo y automáticamente se genera código, mismo que le indica a la computadora el cómo obtener lo que quiero con una generación inmediata de resultados.

Otro enfoque de clasificar a los traductores de forma genérica en ciencias de la computación es definir a los procesadores de lenguajes como aquellos programas destinados a trabajar sobre una entrada que por la forma como ha sido elaborada, pertenece a un lenguaje en particular reconocido o aceptado por el programa en cuestión. Los procesadores de lenguajes se clasifican como traductores o intérpretes.

Los traductores son clasificados en compiladores, ensambladores y preprocesadores.

Conversores Fuente-Fuente: (LCP) Traducen un lenguaje fuente de alto nivel a otro (por ejemplo, PASCAL C). Una aplicación interesante de la traducción fuente-fuente es el desarrollo e implementación de prototipos de nuevos lenguajes de programación. Así, por ejemplo, si se desea definir un lenguaje especializado puede implementarse rápidamente mediante su traducción a un lenguaje convencional de alto nivel.

Rutinas de análisis de instrucciones: El conjunto de instrucciones del entorno de un sistema operativo constituye un lenguaje que debe ser analizado previamente para realizar las acciones oportunas. Igualmente, ciertos programas como editores de texto, sistemas de diseño asistido, etc., utilizan instrucciones complejas que deben interpretarse adecuadamente. Ensambladores: Son compiladores cuyo lenguaje de entrada, llamado ensamblador, permite la traducción de cada sentencia fuente a una instrucción en código máquina. Compilador cruzado: Es el que genera un código objeto ejecutable en un ordenador distinto de aquél en el que se realiza la compilación.

Compilación-Montaje-Ejecución: En las aplicaciones grandes es conveniente fragmentar el programa a realizar en módulos que se compilan por separado, y una vez que estos estén compilados unirlos mediante un programa denominado montador para formar el módulo ejecutable. El montador se encarga, a su vez, de incluir las librerías donde están guardadas las funciones predefinidas de uso común.

Compilación en una o varias pasadas: Se llama pasada a cada lectura que hace el compilador del texto fuente. Compilación incremental. Este compilador actúa de la siguiente manera. Compila un programa fuente. Caso de detectar errores al volver a compilar el programa corregido sólo compila las modificaciones que se han hecho respecto al primero.

Auto compilador: Es aquél que está escrito en el mismo lenguaje que se pretende compilar. Supongamos, por ejemplo, que queremos desarrollar la versión 2.0 de un compilador Pascal. Dicho compilador generará un código mucho más rápido y eficiente que el que generaba la versión anterior 1.0. Sin embargo, son ya muchas las máquinas (IBM 370, Serie 1, PDP 11, ...) que disponen del antiguo compilador, o que al menos tienen otro compilador Pascal. 

La mejor opción consiste en escribir el nuevo compilador en Pascal, ya que así podrá (el compilador) ser compilado en las distintas máquinas por los compiladores Pascal ya existentes.
•	Metacompilador: Es un traductor que tiene como entrada la definición de un lenguaje y como salida el compilador para dicho lenguaje.
•	Decompilador: Es el que traduce código máquina a lenguaje de alto nivel. Los decompiladores más usuales son los desensambladores, que traducen un programa en lenguaje máquina a otro en ensamblador.
•	Bootstrapping. Es una técnica muy usada actualmente para el desarrollo de compiladores de lenguajes de alto nivel, en especial si se quiere obtener un auto-compilador, o sea, un compilador que se compile a sí mismo.

Para describir el proceso de autocomparación se emplea la notación en T que representa gráficamente los tres lenguajes implicados en el proceso de compilación:

`,`https://drive.google.com/file/d/12bLT6KvQT5-qrniQi03YcW1Jlex_jqGU/view?usp=drive_link`,`

Esto en la práctica resulta bastante complicado, dado que programar en ensamblador es muy laborioso.

Lo que se hace en estos casos es desarrollar un lenguaje restringido A (1), parecido al A(N) pero más simple, y para este lenguaje escribir el compilador en ensamblador, o en cualquier otro lenguaje soportado por la máquina.

Una vez construido este compilador, y dado que nuestra máquina es ya capaz de entender el lenguaje A (1), se puede desarrollar un compilador para otro lenguaje A (2) escribiéndolo en el lenguaje A (1), y así sucesivamente hasta llegar a obtener un auto compilador del lenguaje A(N). Esta técnica se conoce como bootstrapping.

`,`https://drive.google.com/file/d/1mECc3DC_blCngJPGGaDUduDQE7Sdy8rA/view?usp=drive_link`,`

El primer compilador de Pascal desarrollado en Zurich por Wirth fue posible gracias a esta técnica. El conocido compilador C de GNU emplea también este mecanismo en tres pasos.
`
    ]
  },

  {
    contenido_id: 4,
    titulo: '1.4 Fases y pasos del compilador',
area: AreaComputacion.COMPILADORES,
    descripcion: 'Análisis léxico, sintáctico, semántico, generación de código intermedio y optimización.',
    tipo: TipoContenido.LECCION,
    orden: 4,
    url_recurso: null,
    unidad_id: 1,
    unidad: { unidad_id: 1, nombre: 'Unidad I - Bases teóricas para el diseño de compiladores' },
    contenido: [
      `
      Estructura de un compilador.

Un compilador es un programa, en el que pueden distinguirse dos subprogramas o fases principales: una fase de análisis, en la cual se lee el programa fuente y se estudia la estructura y el significado de este; y otra fase de síntesis, en la que se genera el programa objeto.

En un compilador pueden distinguirse, además, algunas estructuras de datos comunes, la más importante de las cuales es la tabla de símbolos, junto con las funciones de gestión de ésta y de los demás elementos del compilador, y de una serie de rutinas auxiliares para detección de errores.
Las funciones de estos módulos son las siguientes:

Analizador lexicográfico: Las principales funciones que realiza son:
•	Identificar los símbolos. 
•	Eliminar los blancos, caracteres de fin de línea, etc... 
•	Eliminar los comentarios que acompañan al código fuente. 
•	Crear unos símbolos intermedios llamados tokens. 
•	Avisar de los errores que detecte. 
Ejemplo: A partir de la sentencia en PASCAL:
•	nuevo: = viejo + RAZON*2
•	Genera un código simplificado para el análisis sintáctico posterior, por ejemplo:
•	<id1> <: => <id2> <+> <id3> <*> <ent>
Nota: Cada elemento encerrado entre <> representa un único token. Las abreviaturas id y ent significan identificador y entero, respectivamente.

`,`https://drive.google.com/file/d/1TRUaU7ddziofYtnS4Lw5r7eHns7VaUs_/view?usp=drive_link`,`

Analizador Léxico. 
Para definir los analizadores de léxico se utilizan gramáticas y expresiones regulares. Las expresiones regulares son una representación compacta de estas gramáticas. Estas expresiones se utilizan para especificar la estructura de las unidades de léxico o 'tokens'.
Comprueba que las sentencias que componen el texto fuente son correctas en el lenguaje, creando una representación interna que corresponde a la sentencia analizada. De esta manera se garantiza que sólo serán procesadas las sentencias que pertenezcan al lenguaje fuente. Durante el análisis sintáctico, así como en las demás etapas, se van mostrando los errores que se encuentran.

Ejemplo: El esquema de la sentencia anterior corresponde al de una sentencia de asignación del lenguaje Pascal. Estas sentencias son de la forma:
•	<id> <: => <EXPRESION>
y la parte que se denomina <EXPRESION> es de la forma:

•	<id> <+> <EXPRESION> o bien 
•	<id> <*> <EXPRESION> o bien 
•	<real> 

La estructura de la sentencia queda, por tanto, de manifiesto mediante el siguiente esquema:

`,`https://drive.google.com/file/d/1TeA9x4AlAMAajfLdtqO2-DR-OaiX0nxk/view?usp=drive_link`,`

Análisis semántico: Se ocupa de analizar si la sentencia tiene algún significado. Se pueden encontrar sentencias que son sintácticamente correctas pero que no se pueden ejecutar porque carecen de sentido. En general, el análisis semántico se hace a la par que el análisis sintáctico introduciendo en éste unas rutinas semánticas.

Ejemplo: En la sentencia que se ha analizado existe una variable entera. Sin embargo, las operaciones se realizan entre identificadores reales, por lo que hay dos alternativas: o emitir un mensaje de error "Discordancia de tipos", o realizar una conversión automática al tipo superior, mediante una función auxiliar inttoreal.

`,`https://drive.google.com/file/d/1ZJI5DR1N4ukGAJStCSGc9-TD75Bhqhp-/view?usp=drive_link`,`

Generador de código intermedio: El código intermedio es un código abstracto independiente de la máquina para la que se generará el código objeto. El código intermedio ha de cumplir dos requisitos importantes: ser fácil de producir a partir del análisis sintáctico, y ser fácil de traducir al lenguaje objeto. Esta fase puede no existir si se genera directamente código máquina, pero suele ser conveniente emplearla.

Ejemplo: Consideremos, por ejemplo, un código intermedio de tercetos, llamado así porque en cada una de sus instrucciones aparecen como máximo tres operandos. La sentencia traducida a este código intermedio quedaría:

•	temp1: = inttoreal (2) temp2: = id3 * temp1temp3: = id2 + temp2id1: = temp3

Optimizador de código: A partir de todo lo anterior crea un nuevo código más compacto y eficiente, eliminando por ejemplo sentencias que no se ejecutan nunca, simplificando expresiones aritméticas, etc. La profundidad con que se realiza esta optimización varía mucho de unos compiladores a otros. En el peor de los casos esta fase se suprime.

Ejemplo: Siguiendo con el ejemplo anterior, es posible evitar la función inttoreal mediante el cambio de 2 por 2.0, obviando además una de las operaciones anteriores. El código optimizado queda como sigue:

•	temp1: = id3 * 2.0id1: = id2 + temp1

Generador de código: A partir de los análisis anteriores y de las tablas que estos análisis van creando durante su ejecución produce un código o lenguaje objeto que es directamente ejecutable por la máquina. Es la fase final del compilador. Las instrucciones del código intermedio se traducen una a una en código máquina reubicable.

Nota: Cada instrucción de código intermedio puede dar lugar a más de una de código máquina.

Ejemplo: El código anterior traducido a ensamblador DLX quedaría:

•	LW R1, id3 MUL R1, R1,2 LW R2, id2 ADD R2, R2, R1 SW id1, R2

En donde id1, id2 y id3 representan las posiciones de memoria en las que se hallan almacenadas estas variables; R1 y R2 son los registros de la máquina; y las instrucciones LW, SW, MUL y ADD representan las operaciones de colocar un valor de memoria en un registro, colocar un valor de un registro en memoria, multiplicar en punto flotante y sumar, respectivamente.
La tabla de símbolos: Es el medio de almacenamiento de toda la información referente a las variables y objetos en general del programa que se está compilando.
La tabla de símbolos se compone de un registro formado por dos campos: un apuntador al 'token' almacenado y la identificación o número de token. Este arreglo se utiliza para ahorrar espacio al almacenar 'tokens' de diferente longitud.
Ejemplo: Hemos visto que en ciertos momentos del proceso de compilación debemos hacer uso de cierta información referente a los identificadores o los números que aparecen en nuestra sentencia, como son su tipo, su posición de almacenamiento en memoria, etc. Esta información es la que se almacena en la tabla de símbolos.

Rutinas de errores: Están incluidas en cada uno de los procesos de compilación (análisis lexicográfico, sintáctico y semántico), y se encargan de informar de los errores que encuentran en texto fuente.

Ejemplo: El analizador semántico podría emitir un error (o al menos un aviso) cuando detectase una diferencia en los tipos de una operación.

ENSAMBLADOR:
Un ensamblador es el programa encargado de llevar a cabo un proceso denominado de ensamble o ensamblado. Este proceso consiste en que, a partir de un programa escrito en lenguaje ensamblador, se produzca el correspondiente programa en lenguaje máquina (sin ejecutarlo), realizando:
•	La integración de los diversos módulos que conforman al programa. 
•	La resolución de las direcciones de memoria designadas en el área de datos para el almacenamiento de variables, constantes y estructuras complejas; así como la determinación del tamaño de éstas. 
•	La identificación de las direcciones de memoria en la sección de código correspondientes a los puntos de entrada en saltos condicionales e incondicionales junto con los puntos de arranque de las subrutinas. 
•	La resolución de los diversos llamados a los servicios o rutinas del sistema operativo, código dinámico y bibliotecas de tiempo de ejecución. 
•	La especificación de la cantidad de memoria destinada para las áreas de datos, código, pila y montículo necesaria y otorgada para su ejecución. 
•	La incorporación de datos y código necesarios para la carga del programa y su ejecución. 
Turbo Assembler. - De Borland Intl., es muy superior al Turbo Editassm. Trabaja de la misma forma, pero proporciona una interfaz mucho más fácil de usar y un mayor conjunto de utilerías y servicios.

Un precompilador, también llamado preprocesador, es un programa que se ejecuta antes de invocar al compilador. Este programa es utilizado cuando el programa fuente, escrito en el lenguaje que el compilador es capaz de reconocer (de aquí en adelante denominado lenguaje anfitrión-- en inglés “host language”), incluye estructuras, instrucciones o declaraciones escritas en otro lenguaje (el lenguaje empotrado-- en inglés “embeded language”). El lenguaje empotrado es siempre un lenguaje de nivel superior o especializado (Por ejemplo, de consulta, de cuarta generación, simulación, cálculo numérico o estadístico, etcétera). Siendo que el único lenguaje que el compilador puede trabajar es aquel para el cual ha sido escrito, todas las instrucciones del lenguaje empotrado deben ser traducidas a instrucciones del lenguaje anfitrión para que puedan ser compiladas. Así púes un precompilador también es un traductor.

Los precompiladores son una solución rápida y barata a la necesidad de llevar las instrucciones de nuevos paradigmas de programación (Por ejemplo, los lenguajes de cuarta generación), extensiones a lenguajes ya existentes (como el caso de C y C++) y soluciones de nivel conceptual superior (por ejemplo, paquetes de simulación o cálculo numérico) a código máquina utilizando la tecnología existente, probada, optimizada y confiable (lo que evita el desarrollo de nuevos compiladores). Facilitan la incorporación de las nuevas herramientas de desarrollo en sistemas ya elaborados (por ejemplo, la consulta a bases de datos relacionales substituyendo las instrucciones de acceso a archivos por consultas en SQL). Resulta común encontrar que el flujo de proceso en los lenguajes de cuarta generación o de propósito especial puede resultar demasiado inflexible para su implantación en los procesos de una empresa, flujos de negocio o interacción con otros elementos de software y hardware, de aquí que se recurra o prefiera la creación de sistemas híbridos soportados en programas elaborados en lenguajes de tercera generación con instrucciones empotradas de nivel superior o propósito especial.

Un pseudocompilador es un programa que actúa como un compilador, salvo que su producto no es ejecutable en ninguna máquina real sino en una máquina virtual. Un pseudocompilador toma de entrada un programa escrito en un lenguaje determinado y lo transforma a una codificación especial llamada código de byte. Este código no tendría nada de especial o diferente al código máquina de cualquier microprocesador salvo por el hecho de ser el código máquina de un microprocesador ficticio. Tal procesador no existe, en su lugar existe un programa que emula a dicho procesador, de aquí el nombre de máquina virtual.

La ventaja de los pseudocompiladores que permite tener tantos emuladores como microprocesadores reales existan, pero sólo se requiere un compilador para producir código que se ejecutará en todos estos emuladores. Este método es una de las respuestas más aceptadas para el problema del tan ansiado lenguaje universal o código portable independiente de plataforma.

Los programas interpretados suelen ser más lentos que los compilados, pero los intérpretes son más flexibles como entornos de programación y depuración.  Comparando su actuación con la de un ser humano, un compilador equivale a un traductor profesional que, a partir de un texto, prepara otro independiente traducido a otra lengua, mientras que un intérprete corresponde al intérprete humano, que traduce de viva voz las palabras que oye, sin dejar constancia por escrito. Los intérpretes de instrucciones pueden tener Interfaces Graficas de usuario en inglés “GUI´s” (Graphical User Interface), se pueden usar desde el cmd (command) del sistema operativo o bien la consola de operación también en archivos por lotes o conjunto de instrucciones conocidos como “.bat” (batch).
`
    ]
  },

  {
    contenido_id: 5,
    titulo: '1.5 Traductor simple orientado a la sintaxis',
area: AreaComputacion.COMPILADORES,
    descripcion: 'Análisis semántico y traducción orientada a la sintaxis.',
    tipo: TipoContenido.LECCION,
    orden: 5,
    url_recurso: null,
    unidad_id: 1,
    unidad: { unidad_id: 1, nombre: 'Unidad I - Bases teóricas para el diseño de compiladores' },
    contenido: [
      `CONCEPTO
Un compilador es un programa que recibe como entrada un programa escrito en un lenguaje X y deja otro programa escrito en un lenguaje Y. 


Es usual que se realicen compiladores que logren la traducción de un lenguaje de nivel medio o superior (el programa fuente) y lo transforma a su equivalente en lenguaje ensamblador (el programa objeto), e inclusive hasta lenguaje máquina (el programa ejecutable) pero sin ejecutarlo. Un compilador es un traductor. La forma de cómo llevará a cabo tal traducción es el objetivo central en el diseño de un compilador.
`,
      `https://drive.google.com/file/d/1yhrq-CjvmAIp_7ANQbi6FLHynZcDE-Ul/view?usp=drive_link`,
      `PROCESO DE INTERPRETACIÓN
Aunque es equivocado, es común encontrar referencias en documentación de productos, publicidad y textos (inclusive escuchar a la gente del medio informático), utilizando los términos traductor, compilador e intérprete de una forma libre e indistinta. Estas palabras no se utilizan para identificar de manera genérica a un programa que nos permitiría poder programar una computadora. Debemos ser precisos al emplear estas palabras, ya que se refieren a programas de distinta naturaleza que realizan labores encaminadas a un objetivo específico y particular. Aunque la conducta manifestada pueda ser similar, su comportamiento interno definitivamente es diferente.
Genéricamente hablando, en ciencias de la computación, lo procesadores de lenguajes son aquellos programas destinados a trabajar sobre una entrada que, por la forma en la que ha sido elaborada, pertenece a un lenguaje en particular reconocido o aceptado por el programa en cuestión. Los procesadores de lenguajes se clasifican como traductores o intérpretes.
Un traductor es un programa que recibe una entrada escrita en un lenguaje (el lenguaje fuente), a una salida perteneciente a otro lenguaje (el lenguaje objeto), conservando su significado. En términos computacionales esto significa que tanto la entrada como la salida sean capaces de producir los mismos resultados. Un intérprete, por otra parte, no lleva a cabo tal transformación; en su lugar obtiene los resultados conforme va analizando la entrada. Los traductores son clasificados en compiladores, ensambladores y preprocesadores.


Un ensamblador es el programa encargado de llevar a cabo un proceso denominado de ensamble o ensamblado.

PROCESO DE COMPILACIÓN
Lo primero que hace es el reconocimiento de caracteres para identificar que las instrucciones que introdujo el usuario programador estén léxica y sintácticamente de acuerdo con el lenguaje de programación.
Después realiza un manejo de errores y consulta a la tabla de símbolos para avisar que el usuario programador realice su corrección.
Una vez corregidos los errores y comprobada la fase de análisis, se realiza una traducción o conversión de un código a otro cercano a la máquina en la fase de síntesis.
El código que se produce de este proceso es estático, pues el código que se genera en la traducción tiene posteriormente que invocarse o ejecutarse para obtener una acción o resultado.
En la invocación del código se tiene una alta eficiencia, pues éste ya está en lenguaje de máquina y adecuado para obtener una respuesta más eficiente, que la que se obtiene en un intérprete. 
Lo anterior se trata de esquematizar en el siguiente diagrama.
En la fase de síntesis se realiza la generación de código y en algunos compiladores se da también en esta fase la optimización de código.
Independientemente de estas dos fases se puede requerir un pre-proceso para adecuar el código fuente. Y en ambas fases se consulta la tabla de símbolos para el manejo de errores.  Esto se muestra en la siguiente Figura.
Fases y Componentes. - Como ya se describió un compilador puede tener dos fases: La fase de análisis y la de síntesis.
Dentro de la fase de análisis está el análisis léxico, sintáctico y semántico (conceptos que se describen más adelante). Con un manejo de errores y consulta en la tabla de símbolos. Diagrama esquemático de las dos fases de un compilador.
`,
      `https://drive.google.com/file/d/1CRxcYYcSA1bBroqv5Xad8QMMKkRGoGrM/view?usp=drive_link`,
      `Análisis y Síntesis. - Estas dos actividades, dependiendo de la fuente de información que se consulte, se pueden encontrar definidas como fases o bien como etapas. Para efectos de este material, se describirán las dos como fases básicas, mismas que requiere un compilador. Dentro de la fase de análisis también definiremos a los tres tipos de análisis como etapas a cada una de ellas. Representadas con rectángulos en el diagrama anterior. 
La fase de análisis permite separar cada uno de los símbolos o caracteres que integran el código fuente, les asigna un componente léxico conocido como token, que es código numérico que facilita el chequeo posterior; se toma de la tabla de símbolos para su posterior procesamiento; donde se realiza el análisis sintáctico con base a las gramáticas del lenguaje y posteriormente el análisis semántico que da un significado a los conjuntos de tokens para después realizar la conversión en la siguiente fase.
`,
      `https://drive.google.com/file/d/1L9Pmg-5plZTd06vzpXKIAVbcEVQTVeeE/view?usp=drive_link`,
      `Diagrama esquemático de las fases y etapas de un compilador
En la fase de síntesis se toman los elementos por separado, ya aceptados, y se genera código con ellos, en los que se le agregan códigos adecuados a la máquina. Se tratará de esquematizar esos pasos de análisis y síntesis en el siguiente ejemplo.
Ejemplo. - Tomemos la siguiente cadena de una sencilla instrucción...    PRINT X
•	Análisis Léxico. - Es recibir la cadena PRINT y al identificar cada uno de los caracteres, consulta la tabla de símbolos, si es correcto y se encuentra en la tabla de símbolos: le genera un token para este caso, de manera hipotética se asigna como token el 503 y se da de alta el identificador X como variable, también asignándole un token, para este ejemplo es 001.
•	Análisis Sintáctico. - Se tiene como entrada dos tokens...503 001. Con base a la búsqueda en el orden definido como parsing de la gramática que acepta el lenguaje, tenemos que la cadena puede ser aceptada y pasar al 

siguiente análisis o bien, puede ser rechazada y generar un error de sintaxis (es decir, un orden no aceptado entre los dos elementos (el “PRINT” y la “X”). Un error de sintaxis puede ser X PRINT o bien PRNT X.  
•	Análisis Semántico. - Una vez que se pasa el análisis léxico y sintáctico se da un significado a los conjuntos de tokens aceptados y se le da un significado en otro lenguaje más cerca de la computadora. El significado se toma de la tabla de símbolos donde se obtiene un código equivalente pero más detallado.
Generación de Código. - Para este ejemplo, de dos cadenas en una sola instrucción, se toma un código equivalente en un ensamblador ficticio que puede ser:
Optimización de Código. - Siguiendo con el mismo ejemplo de una sola instrucción de impresión y con una emulación simulada queda...
`,
      `https://drive.google.com/file/d/1QE6V9p8f4V7tmuRyqKQ985Tcfqa7TGpf/view?usp=drive_link`,
      `La siguiente figura presenta un diagrama que ilustra de forma general las dos fases que componen al proceso de compilación y cada fase desglosada en sus etapas componentes. En una primera fase de análisis el programa es descompuesto en sus elementos fundamentales.
En la posterior fase de síntesis es construido el programa ejecutable correspondiente a los elementos identificados en la fase previa. El proceso es irreversible e inclusive puede considerarse destructivo, ya que no hay forma de reconstruir el programa fuente a partir del ejecutable.


Etapas del proceso de compilación.
Únicamente por facilidad descriptiva, el proceso es presentado con las etapas que componen a cada fase perfectamente diferenciadas y separadas; aunque en la práctica los límites no son estrictamente bien definidos; en la práctica se ha demostrado que productos muy rápidos y eficientes pueden ser desarrollados alterando el orden de algunas etapas o entremezclándolas. La entrada a este proceso es por supuesto el programa fuente. Por lo general este es un archivo que es creado por el usuario como un texto ASCII con o sin un formato específico, aunque también puede ser el resultado de algún otro proceso. A partir de este archivo, diversos pasos pueden ser llevados a cabo:
Preprocesamiento. - Un preprocesador es la estrategia generalmente adoptada como solución a lenguajes huéspedes, extensiones, lenguajes 4GL, o lenguajes de dominio específico. El preprocesador es un traductor encargado de transformar dichas instrucciones a instrucciones del lenguaje anfitrión, sobre las cuales finalmente trabajará el compilador. Esta etapa es definitivamente opcional.

`,
      `https://drive.google.com/file/d/12zseCF_BWdO_wvMH2bhTeArJ_upPBgK7/view?usp=drive_link`,
      `El anterior es un Diagrama esquemático completo de proceso de compilación

•	Análisis Léxico. - En esta fase, la cadena de caracteres que conforma al programa fuente es despojada de comentarios, espacios en blanco y otros elementos superfluos. El programa encargado de hacer esto es conocido como un scanner, y de aquí que al proceso se le refiera comúnmente como scanning (exploración). Durante esta fase se identifican los elementos gramaticales usados en la creación del programa. Cada elemento identificado es substituido por un código numérico conocido como token.
•	Análisis Sintáctico. - La cadena de tokens resultante es alimentada a un programa conocido como parser. El parser es el encargado de verificar que la secuencia y disposición de los tokens corresponda con la sintaxis del lenguaje. Este proceso de verificación sintáctica es conocido como parsing y es completamente guiado por la gramática del lenguaje. 
•	Análisis Semántico y Generación de Código. - Una vez que la secuencia de tokens ha sido validada, ésta es utilizada para identificar el sentido de la acción a realizar y generar el correspondiente código en lenguaje máquina. Algunos compiladores recurren a la creación de código intermedio para posteriormente generar la secuencia de instrucciones de máquina necesarias, mientras que algunos otros proceden a la generación directa del código máquina. 
•	Optimización de Código. - Esta es otra etapa opcional. La optimización de código es una actividad que raya en un arte dominado solamente por un experimentado programador de ensamblador y conocedor de la arquitectura del computador. Existen algunas técnicas desarrolladas al respecto, pero nada supera a la experiencia de un hábil programador. En esta etapa, ya sea posteriormente o trabajando al unísono con el generador de código, secuencias de instrucciones y estructuras de datos son examinadas buscando su substitución con secuencias, instrucciones o estructuras más cortas, rápidas o eficientes. 
•	Ligado. - Como paso final, todas las referencias pendientes de resolver sobre rutinas, módulos, bibliotecas y demás porciones de código necesarias para el funcionamiento del programa son cubiertas en esta parte. La resolución puede consistir desde el proporcionar meramente una dirección o llamado a una función hasta la inclusión de enormes porciones de código.
Al final, como producto de todo este proceso, lo que se obtiene es un programa escrito en código máquina que puede ser cargado en memoria y ejecutado.



El proceso seguido por un intérprete es ligeramente diferente, ya que mientras que cubre todas las etapas de análisis no cuenta con una fasede síntesis. Un intérprete no genera código, se limita a invocar rutinas ya escritas (proceso muchas veces llamado de interpretación). La siguiente figura ilustra esto el diagrama esquemático de las etapas del proceso de interpretación
En el caso de un pseudocompilador, cuyo caso mejor conocido es el de Java, la diferencia consiste en el código generado. Mientras que todas las etapas de un compilador son cubiertas, el programa ejecutable no es creado para ser ejecutado en un procesador "real" sino para uno "hipotético" o "imaginario" y conocido generalmente como máquina virtual. La máquina virtual es otro programa cuyo funcionamiento simula al de un procesador. Este procesador recibe de entrada el pseudocódigo creado por el compilador y procede a la ejecución de las instrucciones contenidas en éste; puede verse que no se trata más que de un intérprete muy sencillo.
`,
      `https://drive.google.com/file/d/1vH_P9hOtxO6m-fNNV31csm4r6PsF09Xr/view?usp=drive_link`,
      `La siguiente figura ilustra con mayor detalle lo que pasa en cada una de las etapas del proceso de compilación. El procesamiento de instrucciones de un lenguaje huésped (como puede ser SQL) correría a cargo del preprocesador, siendo transformadas instrucciones del lenguaje anfitrión. Durante la fase de análisis léxico el scanner se encarga de identificar cada uno de los elementos usados para escribir el programa fuente, substituyendo a cada uno de estos por un código numérico único (tokens). 
En este proceso se eliminan comentarios y espacios en blanco. Los tokens son alimentados al analizador sintáctico que, valida, que su disposición está acorde a las reglas del lenguaje. Validado éste, el analizador semántico procede a identificar el propósito de las diversas secuencias de tokens, y buscará generar representaciones intermedias de cada acción o directamente código máquina. 
Resultados obtenidos
`,
      `https://drive.google.com/file/d/1tqh2aAyvKzorjDhblhrUThpd5WMuu3iu/view?usp=drive_link`,
      `Diagrama esquemático del proceso de pseudocompilación



Este posteriormente es optimizado. El código optimizado es un nuevo código el cual contiene elementos que permiten la optimización de recursos computacionales, menor tiempo de respuesta, disminución del espacio de memoria para alojar direcciones y los resultados. Los algoritmos de asignación de memoria son implementados en la lógica del compilador.

Análisis: Dado un sistema, identificar los elementos constituyentes, las interrelaciones entre estos, y determinar la conducta creada.
Síntesis: Dado un conjunto de elementos y estableciendo un determinado número de interrelaciones entre éstos, crear uno de muchos posibles sistemas con una determinada conducta.
El "descompilar" un programa, sólo es posible si se cuenta con información de depuración, generada por el compilador. Mientras que es posible "desensamblar" un programa, sin información adicional que permita asociar secuencias de instrucciones ensamblador a instrucciones de nivel alto, es imposible reconstruir el programa fuente a partir del código ejecutable.

FASES Y COMPONENTES DE UN COMPILADOR
`,
      `https://drive.google.com/file/d/1F4dIuVIOYpb29-oD-hoIq60Mc2Dxv8Dk/view?usp=drive_link`,
      `Conceptualmente un compilador opera en fases. Cada una de las cuales transforma el programa fuente de una representación a otra. En la siguiente figura se muestra una descomposición típica de un compilador. En la práctica se pueden agrupar fases y las representaciones intermedias entre las fases agrupadas no necesitan ser construidas explícitamente.

Las tres primeras fases, que forman la mayor parte de la porción de análisis de un compilador se analizan en la sección IX. Otras dos actividades, la administración de la tabla se símbolos y el manejo de errores, se muestran en interacción con las seis fases de análisis léxico, análisis sintáctico, análisis semántico, generación de código intermedio, optimación de código y generación de código. De modo informal, también se llamarán "fases" al administrador de la tabla de símbolos y al manejador de errores.

FASE DE ANÁLISIS Y SÍNTESIS DE UN COMPILADOR
En la compilación hay dos partes: Análisis y Síntesis. La parte del análisis divide al programa fuente en sus elementos componentes y crea una representación intermedia. De las dos partes, la síntesis es la que requiere la técnica más especializada.

Durante el análisis se determina las operaciones que implica el programa fuente y se registra en una estructura jerárquica llamada árbol. A menudo, se usa una clase especial de árbol llamado árbol sintáctico, donde cada nodo representa una operación y los hijos de un nodo son los argumentos de la operación. Por ejemplo, en la figura se muestra un árbol sintáctico para una proposición de asignación. Árbol sintáctico para:  posición: = inicial + velocidad * 60
`,
      `https://drive.google.com/file/d/1Nl1ky9MxS-OSLNjSn4ZpYg1cxtzxtBYd/view?usp=drive_link`,
      `Conforme avanza la traducción, la representación interna del programa fuente que tiene el compilador se modifica. Para ilustrar esas representaciones, considérese las traducciones en el siguiente ejemplo.`,
      `https://drive.google.com/file/d/18k0IrGIaFarPJBasUv1pnkgFWzM56xCh/view?usp=drive_link`,
      `ANÁLISIS LÉXICO
La fase de análisis léxico lee los caracteres de un programa fuente y los agrupa en una cadena de componentes léxicos en los que cada componente representa una secuencia lógicamente coherente de caracteres, como un identificador, una palabra clave (if, while, etc.), un carácter de puntuación, o un operador de varios caracteres, como: =. La secuencia de caracteres que forman un componente léxico se denomina lexema del componente.

A ciertos componentes léxicos se les agregará un "valor léxico". Así, cuando se encuentra un identificador como velocidad, el analizador léxico no sólo genera un componente léxico (por ejemplo, id,) sino que también introduce el lexema velocidad en la tabla de símbolos, si aún no estaba allí. El valor léxico asociado con esta aparición de id, señala la entrada de la tabla de símbolos correspondiente a velocidad.

Usaremos id1, id2 e id3 para posición, inicial y velocidad, respectivamente, para enfatizar que la representación interna de un identificador es diferente de la secuencia de caracteres que forman el identificador. Por tanto, la representación de (1) después del análisis léxico queda sugerida por:

id1: = id2 + id3 * 60 					... (2)

Se deberían construir componentes para el operador de varios caracteres: = y el número 60, para reflejar su representación interna. En la sección IX ya se introdujeron las fases segunda y tercera: los análisis sintáctico y semántico. El análisis sintáctico impone una estructura jerárquica a la cadena de componentes léxicos, que se representará por medio de árboles sintácticos, (como se muestra en la figura 1.47). Una estructura de datos típica para el árbol se da cuando un nodo interior es un registro con un campo para el operador y dos campos que contienen apuntadores a los registros de los hijos izquierdo y derecho. Una hoja es un registro con dos o más campos, uno para identificar el componente léxico de la hoja, y los otros para registrar información sobre el componente léxico. Se puede tener información adicional sobre las construcciones del lenguaje añadiendo más campos a los registros de los nodos.

ANÁLISIS SINTÁCTICO
El analizador sintáctico, también llamado parser, recibe como entrada los tokens que le pasa el Analizador Léxico (el analizador sintáctico no maneja directamente caracteres) y comprueba si esos tokens van llegando en el orden correcto 

La salida "teórica" de la fase de análisis sintáctico sería un árbol sintáctico.

Así pues, sus funciones son:
•	Aceptar lo que es válido sintácticamente y rechazar lo que no lo es. 
•	Hacer explícito el orden jerárquico que tienen los operadores en el lenguaje que se trate. Por ejemplo, la cadena A/B*C es interpretada como (A/B) *C en FORTRAN y como A/(B*C) en APL. 
•	Guiar el proceso de traducción (traducción dirigida por la sintaxis).

ANÁLISIS SEMÁNTICO
El análisis semántico es posterior al sintáctico y mucho más difícil de formalizar que éste. Se trata de determinar el tipo de los resultados intermedios, comprobar que los argumentos que tiene un operador pertenecen al conjunto de los operadores posibles, y si son compatibles entre sí, etc. En definitiva, comprobará que el significado de lo que se va leyendo es válido.

La salida "teórica" de la fase de análisis semántico sería un árbol semántico. Consiste en un árbol sintáctico en el que cada una de sus ramas ha adquirido el significado que debe tener. En el caso de los operadores polimórficos (un único símbolo con varios significados), el análisis semántico determina cuál es el aplicable. 

Por ejemplo, consideremos la siguiente sentencia de asignación:
A: = B + C

En Pascal, el signo "+" sirve para sumar enteros y reales, concatenar cadenas de caracteres y unir conjuntos. El análisis semántico debe comprobar que B y C sean de un tipo común o compatible y que se les pueda aplicar dicho operador. Si B y C son enteros o reales los sumará, si son cadenas las concatenará y si son conjuntos calculará su unión.

Ejemplo
VAR
ch: CHAR; 	(*Un identificador no se puede utilizar si previamente no se ha definido*)
(* En Pascal no es válido, en C sí. *)
ent: INTEGER;
 ...
ch: = ent + 1; 

GENERACIÓN DE CÓDIGO 

Después de los análisis sintáctico y semántico, algunos compiladores generan una representación intermedia explícita del programa fuente. Se puede considerar esta representación intermedia como un programa para una máquina abstracta. Esta representación intermedia debe tener dos propiedades importantes; debe ser fácil de producir y fácil de traducir al programa objeto.

La representación intermedia puede tener diversas formas. Existe una forma intermedia llamada "código de tres direcciones", que es como el lenguaje ensamblador para una máquina en la que cada posición de memoria puede actuar como un registro. El código de tres direcciones consiste en una secuencia de instrucciones, cada una de las cuales tiene como máximo tres operandos.

El programa fuente de (1) puede aparecer en código de tres direcciones como
temp1: = entarea1(60)
temp2: = id3 * temp1 (2)
temp3: = id2 + temp2
id1: = temp3

Esta representación intermedia tiene varias propiedades. Primera, cada instrucción de tres direcciones tiene a lo sumo un operador, además de la asignación. Por tanto, cuando se generan esas instrucciones el compilador tiene que decidir el orden en que deben efectuarse, las operaciones; la multiplicación precede a la adición al programa fuente de (1), mostrado anteriormente. 

Segunda, el compilador debe generar un nombre temporal para guardar los valores calculados por cada instrucción. Tercera, algunas instrucciones de "tres direcciones" tienen menos de tres operadores, por ejemplo, la primera y la última instrucción de (2).

OPTIMIZACIÓN DE CÓDIGO 
La fase de optimación de código trata de mejorar el código intermedio de modo que resulte un código de máquina más rápido de ejecutar. Algunas optimaciones son triviales. Por ejemplo, un algoritmo natural genera el código intermedio (2) utilizando una instrucción para cada operador de la representación del árbol después del análisis semántico, aunque hay una forma mejor de realizar los mismos cálculos usando las dos instrucciones


Temp1: = id3 * 60.0				… (3)
id1: = 
id2 + temp1

Este sencillo algoritmo no tiene nada de malo, puesto que el problema se puede solucionar en la fase de optimación de código. Esto es, el compilador puede deducir que la conversión de 60 de entero a real se puede hacer en el momento de la compilación, de modo que la operación entera se puede eliminar. Además, temp3 se usa sólo una vez, para transmitir su valor a id1. Entonces resulta seguro sustituir a id1 por temp3, a partir de lo cual la última proposición de (2) no se necesita y se obtiene el código de (3).

Hay muchas variaciones en la cantidad de optimación de código que ejecutan los distintos compiladores. Los compiladores que realizan mucha optimización de código son llamados: "compiladores optimadores”. Sin embargo, hay optimaciones sencillas que mejoran significativamente el tiempo del compilador que se ocupa en esta fase.

`
    ]
  },

  // ── UNIDAD II ────────────────────────────────────────────
  {
    contenido_id: 6,
    titulo: '2.1 Expresiones regulares y Autómatas Finitos',
area: AreaComputacion.COMPILADORES,
    descripcion: 'Conceptos de expresiones regulares y autómatas finitos deterministas y no deterministas.',
    tipo: TipoContenido.LECCION,
    orden: 1,
    url_recurso: null,
    unidad_id: 2,
    unidad: { unidad_id: 2, nombre: 'Unidad II - Autómatas Finitos' },
    contenido: [
      `Conceptos de expresiones regulares.
Las expresiones regulares, aplicado a las ciencias computacionales, especifican la estructura de los datos integrados por cadenas, caracteres o símbolos. También conocido como un Lenguaje Regular o “Formal”.
`,
      `https://drive.google.com/file/d/11R7ChxHTKAFGs4qehUrk09uk1QFIltDe/view?usp=drive_link`,
      `
Los patrones de caracteres que pueden describir expresiones regulares son los mismos que pueden ser descritos por autómatas finitos. Su estilo es muy diferente al de las gramáticas. Es a menudo llamada también patrón, es una expresión que ejemplifica un conjunto de cadenas sin enumerar sus elementos.

Más específicamente las expresiones regulares están constituidas por los operadores unión, concatenación y clausura de Kleene (también conocida como cerradura de Klenee positiva + y estrella o asterisco *). Además de esto, cada expresión regular tiene asociado un autómata finito. IMPORTANTE: Las expresiones regulares se pueden representar por Autómatas Finitos ya sea No Determinísticos con épsilon transiciones, sin épsilon transiciones y Determinísticos.

Concepto de Autómatas Finitos.
El autómata finito es un modelo matemático que consta de una quíntupla o tabla con, cinco elementos  y estos son: M = {Q, Σ, δ, q0, F} 
•	La M significa Modelo o Máquina de estados finitos también conocido como diagrama de transiciones.
•	Q se define como el conjunto de estados que se pueden etiquetar con q0, q1, q2, q3, … qf  También pueden ser enumerados: 0, 1, 2, 3, 4, 5, 6, etc. 
Q = {q0, q1, q2, q3, … qf} Se representan con círculos. 
 
`,
      `https://drive.google.com/file/d/1_U3JoAhL4EBbuO3MEbuVuP8y0BD_OTge/view?usp=drive_link`,
      `•	Σ (sigma) es el alfabeto o símbolos que se requieren para pasar de un estado a otro. Ejemplo: Σ = {a}
Las transiciones son un eje cartesiano entre el conjunto de los estados y el alfabeto: δ  =  Q x Σ  δ
`,
      `https://drive.google.com/file/d/1gv-8kYTX7zOWiEUKVqtVE8LbVAFQ3kOS/view?usp=drive_link`,
      `•	F es el conjunto de estados finales o un sub-conjunto de Q Ejemplo: qf
Se dibuja con un círculo con línea doble. 
`,
      `https://drive.google.com/file/d/1X2P4P7Uckr581TTQFn6DsYMbIgQIOidc/view?usp=drive_link`,
      `El diagrama de autómata e la tabla anterior es el siguiente:`,
      `https://drive.google.com/file/d/1A01hIiJy5X-q4G37iDRoGOph8KziUmNE/view?usp=drive_link`,
      `Este autómata finito se considera determinista en base a que se tiene un solo símbolo del alfabeto esto es: Σ =a  que es el mismo que se utiliza en todas las transiciones para integrar un lenguaje regular que expresa una sola cadena.

 LR = {aaa} 

Para llegar desde q0 a qf necesitamos tres símbolos a (o bien la “a” tres veces)

PASOS PARA CONSTRUIR UN AUTOMÁTA FINITO

•	Paso 1 La palabra inicio de forma explicita
•	Paso 2 Los estados Q, etiquetados (con un número, letra mayúscula o  q0, q1, q2, q3, … qf)
•	Paso 3 Cada transición o flecha debe llevar una solo una y al menos una dirección y cada transición  AL menos un símbolo del alfabeto o en ausencia de símbolos a la cadena vacía (épsilon).
`,
      `•	Paso 4 EVITAR CRUZAR TRANSICIONES
•	Paso 5 Al menos un estado final etiquetado y con doble circulo.

 

El mecanismo de control de un elevador es un buen ejemplo de un sistema de estados finitos. El mecanismo no recuerda todas las demandas previas de servicio, sino solo el piso en el que se encuentra, la dirección de movimiento (hacia arriba o hacia abajo) y el conjunto de demandas de servicio aún no satisfechas.

Otro ejemplo que tenemos es que ciertos programas como los editores de texto y los analizadores léxicos que se encuentran en la mayoría de los compiladores son diseñados como sistemas de estado finito. En teoría, una Expresión Regular o Lenguaje Regular LR es posible representar con un Autómata que puede ser No Determinista con épsilon transiciones, No Determinista sin épsilon transiciones o bien un Autómata Determinista, para esto son los procesos de Transformación que se describen en esta unidad temática.

AUTÓMATA FINITO DETERMINISTA (AFD abreviando)
Entonces podemos definir que un autómata finito determinista AFD consiste en un conjunto finito de estados y un conjunto de transiciones de estado a estado, que se dan sobre el símbolo de entrada tomado de un alfabeto Σ. Un estado q0, que es el estado inicial, en el que el autómata comienza.
Para determinar los distintos símbolos de un lenguaje podemos construir un diagrama, este diagrama tiene la forma de un grafo dirigido con información adicional, y se llama diagrama de transición. Los nodos del grafo se llaman estados y se usan para señalar hasta que lugar se ha analizado la cadena. 
Las aristas del grafo que se etiquetan con caracteres del alfabeto determinan las transiciones. Naturalmente nosotros debemos comenzar por un estado inicial, y cuando se hayan tratado todos los caracteres de la cadena correspondiente, necesitamos saber si la cadena es legal. Para ello se marcan ciertos estados como estados de aceptación o estados finales.

Ejemplo

En la siguiente página se ilustra el diagrama de transiciones de un Autómata Finito. El estado inicial q0 está indicado por la flecha con la etiqueta “inicio” 

(en este ejemplo existe solo un estado final, pero pueden existir más en otros autómatas), también q0 en este caso  indicado por el doble círculo. Este autómata acepta todas las cadenas de ceros y unos, en las que el número de 0´s y el número de 1´s son pares.

Dado este ejemplo, formalmente, un autómata finito determinista AFD es una colección de cinco elementos:
1	Un alfabeto de entrada Σ.
2	Una colección finita de estados Q.
3	Un estado inicial S.
4	Una colección F de estados finales o de aceptación.
5	Una función δ: Q x Σ → Q, conocida como función de transición que determina el único estado siguiente para el par (qi,σ) correspondiente al estado actual qi y la entrada σ. (Donde “i” puede ser 0, 1, 2, 3, etc.)
`,
      `https://drive.google.com/file/d/1bGF81s0ybV9IV0tVR5uBCpvUXCsg8E8t/view?usp=drive_link`,
      `Diagrama de transiciones de un Autómata Finito  Determinístico

Denominaremos a un AFD con M, por lo que usaremos M = {Q, Σ, S, F, δ} para indicar el conjunto de estados, el alfabeto, el estado inicial, el conjunto de estados finales y la función asociada con el AFD. Se dice que una cadena x es aceptada por un AFD.



Si δ (q0, x) = p para algún p en F, es decir que la cadena termine en uno de los estados de aceptación o bien estados finales. El lenguaje aceptado por M, denominado L(M), es el conjunto {x | δ (q0, x) está en F}. Por lo que un lenguaje es regular, si es el conjunto de cadenas es aceptado por un autómata finito.
Ejemplo
Considerando el diagrama de nuestro ejemplo anterior, en notación formal, este AFD se denota como M = {Q, Σ, S, F, δ} de la siguiente manera:
Q = {q0, q1, q2, q3}
Σ = {0, 1}
S = q0
F = {q0}
δ = según la tabla 2.1              
`,
      `https://drive.google.com/file/d/1TJh5F55RNuY5yWAOmvixVmTzCtQixvaE/view?usp=drive_link`,
      `Dada la cadena 110101 vemos que pertenece a L(M). Ejemplo
El siguiente AFD que se representa mediante la siguiente manera 
M = {Q, Σ, S, F, δ}.
Q = {q0, q1}
Σ = {a, b}
S = q0
F = {q0}
δ  = según tabla 1.2
`,
      `https://drive.google.com/file/d/1VIolZTVjm9P1aIcyEC5IVZGwTyyE5oFi/view?usp=drive_link`,
      `Tabla 1.2 Diagrama de transiciones δ  de un autómata finito determinístico
La secuencia completa es          por lo tanto.
Dada la siguiente cadena ababa, vemos que pertenece a L(M). (Está integrado por las letras o símbolos de las transiciones en la parte superior izquierda de la secuencia completa que se forma).
AUTÓMATA FINITO NO DETERMINISTA
Si se permite que desde un estado se realicen cero o más transiciones mediante el mismo símbolo de entrada, se dice que el autómata finito es no determinista AFDN o AFN, pero llegaremos a la conclusión de que cualquier lenguaje aceptado por un AFN también es aceptado por un AFD. 
A veces es más conveniente diseñar AFN en lugar de AFD.
De manera formal denotamos a un AFN mediante una colección de cinco objetos (Q, Σ, S, F, δ), donde:
1	Q es un estado finito de estados.
2	Σ es el alfabeto de entrada.
3	S es uno de los estados de Q designado como estado de partida.
4	F es una colección de estados de aceptación o finales.
5	δ es una relación sobre (Q x Σ) y se llama relación de transición o función de transición expresada en una tabla de transiciones que hacen objetiva la función de producto cartesiano.
Ejemplo

En la siguiente página se muestra un diagrama de transiciones de un AFN. Observe que existen dos aristas con la etiqueta 0 que salen del estado q0, uno que regresa a q0 y otro que va al estado q3.

Por lo que su relación de transición δ está en la siguiente página.
`,
      `https://drive.google.com/file/d/1HLR--xuqnENOuBY1qvYL18DiJ8KA80BE/view?usp=drive_link`,
      `Tabla 1.3 Transiciones del diagrama de la siguiente figura.

AUTÓMATA Є–TRANSICIONES
`,
      `https://drive.google.com/file/d/1tyhHWYA4BId3ZiIqPv_jWu4lf941uk2_/view?usp=drive_link`,
      `Diagrama de un autómata finto no determinístico.

Este autómata es también un AFN, que incluye transiciones sobre la cadena vacía Ԑ, cuando hablamos de una cadena vacía conecta a dos estados, nos referimos a que no se consume ningún símbolo del alfabeto. 


Como ejemplo de estos autómatas tenemos los siguientes, en este primer ejemplo tenemos a un autómata  que puede cambiar su estado de q0 a q1 sin consumir nada en la entrada. Observemos que q1 es el único estado de aceptación de este AFN. Si w es cualquier cadena de 0 o más a’s, este autómata cicla sobre q0 hasta que consume las a’s. Una vez que la cadena se vacía, se desplaza a q1 con ε y lo acepta.
A continuación, se muestra un diagrama de un autómata finto no determinístico con ε – transiciones
`,
      `https://drive.google.com/file/d/1mpmDhIsqGJQgmcxvSAz5Nh5I9HnPfdej/view?usp=drive_link`,
      `En esta figura el AFND puede moverse del estado q0 al estado q1 sin consumir nada en la entrada. En ambos AFND, la decisión de elegir una ε-transición se realiza de la misma forma que la de cualquier otra transición con elección múltiple que exista en un AFND. Según se muestra en la siguiente figura.
Diagrama de un autómata finito no determinístico con ε – transiciones
`,
      `https://drive.google.com/file/d/1klKx1T83hpfizomYgNVwAbN4uaaaefmy/view?usp=drive_link`,
      `Este AFND asocia Q x (Σ U { Ԑ }) x Q con subconjuntos Q. Por lo que la figura anterior genera la siguiente tabla de transición:`,
      `https://drive.google.com/file/d/1P6gHLF7wc5y_z4UToO9QzoDmU_5eqc1n/view?usp=drive_link`,
    ]
  },
  {
    contenido_id: 7,
    titulo: '2.2 Autómata Finito No Determinista (AFND) a Autómata Finito Determinista (AFD)',
area: AreaComputacion.COMPILADORES,
    descripcion: 'Transformación de Expresiones Regulares a Autómatas Finitos No Deterministas con transiciones épsilon.',
    tipo: TipoContenido.LECCION,
    orden: 2,
    url_recurso: null,
    unidad_id: 2,
    unidad: { unidad_id: 2, nombre: 'Unidad II - Autómatas Finitos' },
    contenido: [
      `No Deterministas con épsilon (Ԑ) transiciones.

En teoría de la computación, la construcción Thompson es un algoritmo también llamado el algoritmo de McNaughton-Yamada-Thompson, es un método de transformación de una expresión regular en un equivalente Autómata Finito NO Determinista (AFND). Las expresiones regulares y autómatas finitos no deterministas son dos representaciones de lenguajes formales, de forma más explícita son también lenguajes “regulares” según la jerarquía de Noam Chomsky.
Por ejemplo, en los procesadores de texto son muy útiles las expresiones regulares para describir los patrones de búsqueda avanzada, pero un AFND son más adecuados para su ejecución en una computadora. Por lo tanto, este algoritmo es de interés práctico, ya que puede analizar expresiones regulares en AFND. Desde un punto de vista teórico, este algoritmo es una parte de la prueba que ambos aceptan exactamente los mismos lenguajes formales, es decir, los lenguajes regulares.
Un AFND puede hacerse determinista por la construcción de un conjunto potencia y luego se reduce al mínimo para obtener un autómata óptimo correspondiente a la expresión regular dada. Sin embargo, un AFND también puede interpretarse directamente. 
Para decidir si dos expresiones regulares dadas describen el mismo lenguaje, cada uno se puede convertir en un mínimo equivalente autómata finito determinista a través de la construcción de Thompson, mediante la  construcción de conjunto potencia, y la minimización del AFND. Si, y sólo si, los autómatas resultantes están de acuerdo hasta el cambio de nombre de los estados, PRODUCIENTO EL MISMO LENGUAJE o las mismas cadenas de las expresiones regulares de acuerdo. 
Para entender lo anterior, vamos a empezar con un ejemplo muy sencillo, una expresión de un solo símbolo que representa un lenguaje regular. Los lenguajes regulares pueden ser finitos como el caso del diagrama de la cadena
W = aaa Es una sola cadena o palabra formada con un sólo símbolo (que se repita tres veces) formado un LENGUAJE FINITO (UNA sola palabra)
Ahora tenemos la expresión regular a*



Con la cerradura de “Kleene” estrella o asterisco, incluye a la cadena vacía épsilon Ԑ y al único símbolo que es la letra o símbolo “a”, se repite el símbolo “a” un número infinito de veces, creando también un número infinito de cadenas, por lo que el lenguaje regular que representa también es infinito y “formalmente” se puede representar de las siguientes formas: 
1)	LR = { Ԑ, a, aa, aaa, aaaa, aaaaa, aaaaaa, aaaaaaa, aaaaaaaa, aaaaaaaaa, aaaaaaaaaa, aaaaaaaaaaa,…,∞ }
2)	LR = { Ԑ| an ,n ≥ 0 } 
Se lee, que el lenguaje regular  puede estar integrado por cadenas que incluyan a la cadena vacía Ԑ  o al símbolo “a” donde n significa un numero de repeticiones mayores o iguales a cero. 
Nota: “n” NO REPRESENTA UN EXPONENTE SINO LAS VECES QUE REPITE EL SIMBOLO.
El autómata AFND- Ԑ correspondiente para la expresión regular, se abrevia  /ER/ es a*
Uno de varios diagramas de Autómatas Finitos NO Deterministas (AFND) de la anterior /ER/ es el siguiente:
`,
`https://drive.google.com/file/d/1Pz8RBVY_Eo1PR6EEXvX5AT8G0KgxXPa6/view?usp=drive_link`,
`La definición formal de este diagrama es la siguiente:
AFND- Ԑ que se representa LA /ER/ = a*mediante M = {Q, Σ, S, F, δ}.
Q = {q0, q1, q2, qf }
Σ = { Ԑ, a}
S = q0
F = {qf}
δ  = según la siguiente tabla:	
`,
`https://drive.google.com/file/d/1eyZSciwJ7fLiSR4HFTZ4K-nzMqmMIDbS/view?usp=drive_link`,
`Otro diagrama de Autómatas Finitos NO Deterministas (AFND) de la anterior /ER/=a* es el siguiente:`,
`https://drive.google.com/file/d/1s8qYJ9B9-IiOeTiFTzP2zgpQkx_uGCRr/view?usp=drive_link`,
`La definición formal de este diagrama es la siguiente:
AFND- Ԑ que se representa la  /ER/ = a*  mediante M = {Q, Σ, S, F, δ}.
Q = {q0, q1}
Σ = { Ԑ, a}
S = q0
F = {q1}
δ  = según la siguiente tabla:	
`,
`https://drive.google.com/file/d/1gY2_9eLYqqT-tBwb5MC2vQ86dLI0QlWm/view?usp=drive_link`,
`Otros ejemplos básicos de AFND- Ԑ son: La expresión regular /ER/ = b+ 



Se lee: Cerradura de Kleene positiva, la cual incluye a la cadena vacía, si y solo sí está en el lenguaje originalmente y genera el siguiente Lenguaje Regular (LR) que se puede representar de las siguientes formas:
1)	LR = { b, bb, bbb, bbbb, bbbbb, bbbbbb, bbbbbbb, bbbbbbbb, bbbbbbbbb, bbbbbbbbbb, bbbbbbbbbbb,…,∞ }
2)	LR = { bn | n > 0 } 
Los diagramas de Autómata Finitos NO Determinista (AFND-Ԑ) de la anterior /ER/ = b+ puede ser alguno de los siguientes (A), (B), o bien (C):
Diagrama (A)
`,
`https://drive.google.com/file/d/1RvHT32dJ7OQ_V4f3IQl0bbEv6i8f-90u/view?usp=drive_link`,
`La definición formal de este diagrama es la siguiente:
AFND- Ԑ que se representa LA /ER/ = a*mediante M = {Q, Σ, S, F, δ}.
Q = {q0, q1, q2, qf }
Σ = { Ԑ, b}
S = q0
F = {qf}
δ  = según la siguiente tabla:	
`,
`https://drive.google.com/file/d/1Mz13GSwIuugj-azo7GbVfcuRXT_wKf_n/view?usp=drive_link`,
`NOTA: Recuerde que la cadena: ԐbԐ = b y que al regresar con Ԑ tenemos un número infinito de símbolos “b”

Diagrama (B) Equivalente al anterior porque genera el mismo lenguaje regular:   LR = {bn | n > 0}
`,
`https://drive.google.com/file/d/1cW1QHnfGjK56AwXMY7YDyIpjjOy8SK64/view?usp=drive_link`,
`La definición formal de este diagrama AFND-Ԑ es la siguiente:
AFND- Ԑ que se representa LA /ER/ = a*mediante M = {Q, Σ, S, F, δ}.
Q = {q0, qf }
Σ = { Ԑ, b}
S = q0
F = {qf}
δ  = según la siguiente tabla:	
`,
`https://drive.google.com/file/d/1MFjt53kmJd_ZdRi0Z79zDgNW49hH7NO-/view?usp=drive_link`,
`Diagrama (C) Equivalente al anterior porque genera el mismo lenguaje regular:  LR = {bn | n > 0} CON UN MINIMO NUMERO DE ESTADOS`,
`https://drive.google.com/file/d/1VRkFyGYPQYszR6FibKxI0IvQmTXri6pN/view?usp=drive_link`,
`NOTA IMPORTANTE: Es posible dibujar diferentes AFND-Ԑ con diferente forma e incluir más estados conectados con la cadena vacía siempre y cuando se genere el MISMO LENGUAJE o las mismas cadenas, por lo que lo que represente el símbolo a, depende del creador del lenguaje regular. Los anteriores diagramas de AFND-Ԑ son los más simples.


La definición formal de este diagrama AFND-Ԑ es la siguiente:
AFND- Ԑ que se representa LA /ER/ = a*mediante M = {Q, Σ, S, F, δ}.
Q = {q0, qf }
Σ = { Ԑ, b}
S = q0
F = {qf}
δ  = según la siguiente tabla:			
`,
`https://drive.google.com/file/d/1qyckj-EFNsA8Aplv71UqEYF31GQ9R3k6/view?usp=drive_link`
    ]
  },
  {
    contenido_id: 8,
    titulo: '2.3 Autómata Finito No Determinista con épsilon (AFND-Ɛ) a Autómata Finito No Determinista (AFD)',
area: AreaComputacion.COMPILADORES,
    descripcion: 'Transformación de AFND con épsilon a AFND sin épsilon.',
    tipo: TipoContenido.LECCION,
    orden: 3,
    url_recurso: null,
    unidad_id: 2,
    unidad: { unidad_id: 2, nombre: 'Unidad II - Autómatas Finitos' },
    contenido: [
      `El origen de los autómatas finitos probablemente se remonta a su uso implícito en máquinas electromecánicas, desde principios del siglo XX. En 1907, el matemático ruso Andréi Márkov formalizó un proceso llamado “cadena de Markov”, donde la ocurrencia de cada evento depende con una cierta probabilidad del evento anterior. Esta capacidad de "recordar" es utilizada posteriormente por los autómatas finitos, que poseen una memoria primitiva similar, en que la activación de un estado también depende del estado anterior, así como del símbolo o palabra presente en la función de transición.
Posteriormente, en 1943, surge una primera aproximación formal de los autómatas finitos con el modelo neuronal de McCulloch-Pitts. Durante la década de 1950 prolifera su estudio, frecuentemente llamando seles “máquinas de secuencia”; se establecen muchas de sus propiedades básicas, incluyendo su interpretación como “lenguajes regulares” y, su equivalencia con las “expresiones regulares” abreviadas /ER/. Al final de esta década, en 1959, surge el concepto de “autómata finito no determinista” abreviado AFND en manos de los primeros  teóricos de la computación:

Michael Oser Rabin (nacido en 1931 en Breslavia, Alemania, hoy en día parte de Polonia, es un notable científico de la computación y ganador del Premio Turing, el galardón más prestigioso en el campo computacional) y Dana Stewart Scott (nacido en 1932 es el Profesor Emérito de Ciencias de la Computación, Filosofía y Lógica Matemática en Carnegie Mellon University).
 En la década de 1960 se establece su conexión con las series de potencias y los sistemas de sobreescritura. Finalmente, con el desarrollo del sistema operativo Unix en la década de 1970, los autómatas finitos encuentran su nicho en el uso masivo de expresiones regulares para fines prácticos, específicamente en el diseño de analizadores léxicos (comando lex) y la búsqueda y reemplazo de texto (comandos ed y grep). A partir de ese tiempo, los autómatas finitos también se comienzan a utilizar en sistemas dinámicos.
Las máquinas no deterministas se han convertido en un concepto clave en la teoría de la complejidad computacional.
Fuente de información: Wikipedia

Existen varios métodos de trasformación de un Autómata Finito No Determinístico con épsilon transiciones a otro que no las tenga. Con la práctica se pueden diseñar o crear directamente de la expresión regular. Por ejemplo: De la expresión regular b+ que representa el Lenguaje Regular (LR) con cadenas que incluyen solo al símbolo b que se repite desde la primera cadena de longitud uno (b), la segunda cadena de longitud dos (bb), de longitud 3 (bbb) y así sucesivamente hasta un número infinito de b´s. Aquí tenemos un AFND ya sin épsilon transiciones abreviado Ԑ-transiciones.

El siguiente diagrama de autómata representa el LR = {b, bb, bbb, …, ∞}
Con la /ER/ = b+
`,
`https://drive.google.com/file/d/1umgByCm7Xgfak63fDMgYQSS0NBhzvcWC/view?usp=drive_link`,
`La definición formal de este diagrama AFND es la siguiente:
M = {Q, Σ, S, F, δ}.
Q = {qf }
Σ = {b}
S = {qf}
F = {qf}
δ  = según la siguiente tabla:
`,
`https://drive.google.com/file/d/1SPorAw2M4SRFCfCoWNXF0A-3RvwSF7cS/view?usp=drive_link`,
`Sin embargo para llegar a este autómata, también se puede realizar una Transformación con un método denominado “formal”, conocido como el método de la épsilon cerradura. Aquí es pertinente preguntar: 
¿Qué es la épsilon cerradura? 
También conocida como la cerradura de épsilon, abreviado: “Ԑ-C” o bien “C- Ԑ” Es identificar dentro del autómata finito con épsilon transiciones A todos aquellos estados que se conectan con épsilon y si no tienen a la cadena vacía o épsilon, se elige el mismo estado. Ejemplo, tomaremos el siguiente AFND-Ԑ.
`,
`https://drive.google.com/file/d/1ayVgF3JoMwG88fFzd1eIlmCjityc5RZh/view?usp=drive_link`,
`PASO 1. Se analiza la “Ԑ-C” de cada uno de los estados del autómata`,
`https://drive.google.com/file/d/17FfAoxGCPFHaW6jc_Uwnso6uuAr99uyR/view?usp=drive_link`,
`PASO 2. Se renombran los grupos de estados y se realiza un nuevo diagrama ya sin las épsilon transiciones.
{q0, q1, qf} = A			{q1} Está contenido en el grupo A
{q1, q2, qf} = B			En este grupo está un estado final, por lo que el nuevo estado será también final. {qf} Está contenido en el grupo B.
PASO 3. Se desarrolla otra tabla de transiciones con los nuevos estados
`,
`https://drive.google.com/file/d/1gis1M5jVxnjbl8F7q9S12g68zzywJ64Q/view?usp=drive_link`,
`Con la /ER/ = a*`,
`https://drive.google.com/file/d/13iNAaKhZcqFLxZuhMPGRPvOQ-T_H8o3h/view?usp=drive_link`,
`Este es un AFND sin épsilon transiciones. Transformado mediante el método de la épsilon cerradura.`
    ]
  },
  {
    contenido_id: 9,
    titulo: '2.4 Lema de Arden, Conversión de Autómata Finito a Expresión Regular',
area: AreaComputacion.COMPILADORES,
    descripcion: 'Transformación de Autómatas Finitos No Deterministas a Deterministas.',
    tipo: TipoContenido.TAREA,
    orden: 4,
    url_recurso: null,
    unidad_id: 2,
    unidad: { unidad_id: 2, nombre: 'Unidad II - Autómatas Finitos' },
    contenido: [
      `Estas transformaciones nos permiten llegar a un autómata mínimo cuyo procesamiento resulta más objetivo y práctico, y recordemos que un autómata finito no determinista, NO incluye una transición para cada uno de los símbolos del alfabeto, sin embargo, un ejemplo sencillo de presentar esto es cuando se tiene como únicos símbolos del alfabeto al 0 y al 1 o bien la letra “a” o “b”. 
La parte aplicativa de los Autómatas Finitos es el hecho de que nosotros podemos realizar procesos de abstracción sobre el significado de dos o más símbolos, así como integrar con varios símbolos palabras como Si, No, Encendido, Apagado, Abierto Cerrado, Nombres, cualquier dato que nosotros queramos procesar y abstraer de forma “discreta”. Dependiendo de los datos o conjunto de símbolos concatenados que deseamos procesar se pueden diseñar Autómatas que de forma simbólica o discreta logren abstraer el comportamiento de sistemas tan simples como el comportamiento de una puerta que se abre y se cierra, imaginando que la A significa abrir y la C significa cerrar la puerta. 
Para este simple ejemplo de abstracción podemos definir el estado A (de Abierto) y el estado C (de Cerrado) para indicar que la puerta está abierta podemos agregar el símbolo del alfabeto 1 (uno) y para cerrar un 0 (cero). De esta forma es factible diseñar un autómata finito NO determinista (AFND), formalmente:
M = {Q, Σ, S, F, δ}.
Q = {A, C }
Σ = {0,1}
S = {A}
F = {A,B}
δ  = según la siguiente tabla:		
Entradas (alfabeto) =  Σ
`,
`https://drive.google.com/file/d/1AreZRloo7ubfHmuhhG8wyRp4nSajQnHZ/view?usp=drive_link`,
`Esta tabla que muestra las transiciones, al dejar conjuntos con vacío deja en evidencia un Autómata Finito NO Determinista (AFND).

Aquí la /ER/ = [0|1]* (casualmente esta es la expresión regular de un lenguaje binario).
`,
`https://drive.google.com/file/d/1kluaWJUOxjywjz_u3IXmVaaei-zNMkRo/view?usp=drive_link`,
`Aquí tenemos un ejemplo muy sencillo de la abstracción de una puerta que tiene sólo dos estados y en el paso de un estado a otro un alfabeto con dos símbolos 0 y 1. Recordemos que un Autómata Finito Determinista (AFD) incluye solo una transición, (de salida) desde cada uno de los estados A y C. Por lo que falta una transición con 1 (UNO) de salida de A y otra con un 0 (CERO) de salida de C. ¿Cómo lograr esto?
La alternativa más sencilla, de manera gráfica y NO formal, sin afectar el alfabeto es crear un estado NO FINAL que sirve como comodín para las transiciones que faltan. Dejando el autómata de la siguiente forma:
`,
`https://drive.google.com/file/d/1Uw-_4Kjy2Oa4Xpl8_q-UYABTLas_crgn/view?usp=drive_link`,
`Aquí se acepta
L = {Ԑ ,0,1, 01, 10, 11, 100, 101, 110, 111, 1000, 1001, 1010,…,∞} 
Este es un AFD donde el estado B puede ser una condición de ERROR o NO ACEPTADO, ya que es un estado No Final y según la definición de un AFD se tiene una transición con cada uno de los símbolos del alfabeto Σ = {0, 1} desde cada uno de los estados Q = {A, B, C}
 Con la siguiente definición formal.
M = {Q, Σ, S, F, δ}.
Q = {A, B, C }
Σ = {0,1}
S = {A}
F = {A,B}
δ  = según la siguiente tabla:			


Entradas (alfabeto) = Σ
`,
`https://drive.google.com/file/d/1OS6jv3UEBdZ-1S-OhJXnRgM4zVfZB_kk/view?usp=drive_link`,
`Ahora vamos a realizar una conversión con un método formal del siguiente AFND. Se puede observar que desde el estado A, tenemos dos transiciones con el símbolo 1 que van a los estados A y B; dos transiciones con el símbolo 0, una al estado A y otra al D; motivo por el que No se cumple el requisito de un AFD.`,
`https://drive.google.com/file/d/14RbKyWT-HxGOLJTKbL7xvkg9tfGqMmfL/view?usp=drive_link`,
`El Lenguaje regular lo podemos abstraer de la siguiente forma:
LR = {[0|1]*0|[0|1]*1 [0|1] [0|1]}

La definición formal es:
M = {Q, Σ, S, F, δ}.
Q = {A, B, C, D }
Σ = {0,1}
S = {A}
F = {D}
δ  = según la siguiente tabla:			
Entradas (alfabeto) = Σ
`,
`https://drive.google.com/file/d/1LlbaPOT4FE9Sztl6MYZIWvhONGg6jYT1/view?usp=drive_link`,
`El Lenguaje regular lo podemos abstraer de la siguiente forma Partimos del autómata finito no determinista (AFND) del anterior diagrama.
PASO 1. Añadimos un estado de error o “X” puede ser etiquetado con cualquier nombre según se muestra en el siguiente diagrama:
IMPORTANTE: El nuevo estado es NO FINAL y tiene una transición por cada uno de los símbolos del alfabeto. A este estado vamos a enviar las transiciones que sobran
`,
`https://drive.google.com/file/d/1WTzah2rkoth83ZRvs9D_dcD3bBG12Xz8/view?usp=drive_link`,
`PASO 2. Generamos una tabla considerando la transición de error y agrupando las nuevas transiciones, agregando a las nuevas transiciones los símbolos del alfabeto y nos queda la siguiente tabla:`,
`https://drive.google.com/file/d/1jUQV0BBuKt7R7SKI66ZeYlzZoRYqkvs3/view?usp=drive_link`,
`
PASO 3. Se pueden renombrar los estados en grupos y se re-emplazan en la tabla para generar una nueva tabla.
`,
`https://drive.google.com/file/d/1dPe4lTNGxZGFH9LJktw1WDIE2DOfelQ0/view?usp=drive_link`,
`PASO 4. Con esta tabla se construye el autómata finito determinista (AFD), ya sin épsilon transiciones y dado que acepta el mismo lenguaje:
LR = {[0|1]*0 | [0|1]*1[0|1] [0|1]} Es un autómata equivalente.
IMPORTANTE: Se conserva el estado D como estado final, considerándose como final el grupo de estados que contiene a D y también el nuevo estado de error es final de los símbolos del alfabeto.
`,
`https://drive.google.com/file/d/1O7VFbimAa4KS2DKrvpufA0cUO2q62RQk/view?usp=drive_link`,
`PASO 5.La definición formal del AFD de la anterior página es:
M = {Q, Σ, S, F, δ}.
Q = {q0, q1, q2, q3, q4, q5, q6}
Σ = {0,1}
S = {q0}
F = {q4, q5, q6}
δ  = según la siguiente tabla:			
Entradas (alfabeto) = Σ
`,
`https://drive.google.com/file/d/1PUPKJFCoe37fUJU8bwDksg3FG8KIDE-t/view?usp=drive_link`,
`El anterior autómata lo podemos convertir en un AFD mínimo, para el mismo lenguaje regular: LR = {[0|1]*0 | [0|1]*1[0|1] [0|1] }  esto es, con el menor número de estados.`,
`https://drive.google.com/file/d/1aMDx5j6MLumGmrMj1oRLlR5Me_l-KNR7/view?usp=drive_link`,
`La definición formal de este AFD es la siguiente:`,
`https://drive.google.com/file/d/1yj5YCkvBz1X_Xb08PuH_HNShkxgSu94d/view?usp=drive_link`,
`M = {Q, Σ, S, F, δ}.
Q = {q0, q1, q2, q3, q4}
Σ = {0,1}
S = {q0}
F = {q2, q4}
Para concluir con los temas de esta unidad, haremos un ejemplo completo de conversión de un AFND-Ԑ a AFND sin épsilon transiciones y luego a un AFD. 
`,
`https://drive.google.com/file/d/1xkMwk7HFQ7OOXuBFHg_1r5FUcRa59CDi/view?usp=drive_link`,
`Recordemos lo que es la épsilon cerradura: Son el conjunto de todos aquellos estados en los cuales se accede a ellos mediante la cadena vacía o épsilon cerradura. La épsilon cerradura de un estado, es al menos el estado en cuestión, por ejemplo:
La épsilon cerradura de q0 es q0  de una forma “formal” se especifica:
 Ԑ-C(qo, Ԑ) = ᵹ*(qo, Ԑ) = {qo}
Aclaramos que, para este material, los símbolos Ԑ-C se leen como la épsilon cerradura. El símbolo ᵹ se le como la transición y ᵹ* es la transición modificada de la ᵹ transición.
La descripción formal del autómata es:
M = {Q, ∑, ᵹ, S, F} donde:      Q = {q0, q1,  q2, q3}
El alfabeto, que es el conjunto de símbolos que se utilizan para el lenguaje (de solo dos palabras de longitud uno) es: ∑  = {Ԑ, 0, 1 } 
Las transiciones son: ᵹ = Q x ∑
`,
`https://drive.google.com/file/d/1QCivB_hQ-7cbDCjt05LsYHb05qLC0CeT/view?usp=drive_link`,
`El lenguaje aceptado para este autómata, son todas y cada una de las cadenas que llegan al estado final de q3 y este lenguaje a su vez puede incluir una expresión regular o varias de éstas. Consideradas las expresiones regulares como metalenguajes, esto es, el lenguaje de los lenguajes y queda:
L = {0*, 1, 11, [01*1|1|11]0*}
A continuación, vamos a obtener la épsilon cerradura de los estados que se definen en el autómata de la página anterior. Empezamos con la épsilon cerradura de todos y cada uno de los cuatro estados del autómata desde qo… q1…  q2…  q3… primero con épsilon y luego con cada uno de los símbolos del alfabeto.
Que para este autómata el alfabeto es: 
∑  = { Ԑ, 0, 1 } (según descripción “formal” anterior) Ԑ
Ԑ-C(qo, Ԑ)= ᵹ*(qo, Ԑ) = {qo, q3}
Ԑ-C(q1, Ԑ)= ᵹ*(q1, Ԑ) = {q1}
Ԑ-C(q2, Ԑ)= ᵹ*(q2, Ԑ) = {q2,, q3}
Ԑ-C(q3, Ԑ)= ᵹ*(q3, Ԑ) = { q3}
ᵹ*(qo, 0) = Ԑ-C(ᵹ (ᵹ*(qo, Ԑ),0)) = Ԑ-C(ᵹ ({qo, q3},0))= Ԑ-C({q1}ᴜ{q3}) = Ԑ-C({q1, q3,})= {q1, q3}
ᵹ*(q1, 0) = Ԑ-C(ᵹ (ᵹ*(q1, Ԑ),0)) = Ԑ-C(ᵹ ({q1},0)) = {ⱷ}
ᵹ*(q2,, 0) = Ԑ-C(ᵹ (ᵹ*(q2, Ԑ),0)) = Ԑ-C(ᵹ ({q2,, q3},0)) = Ԑ-C({q3})= { q3}
ᵹ*(q3,, 0) = Ԑ-C(ᵹ (ᵹ*(q3, Ԑ),0)) = Ԑ-C(ᵹ ({q2},0)) = Ԑ-C({q3})= { q3}
ᵹ*(q0,, 1) = Ԑ-C(ᵹ (ᵹ*(q0, Ԑ),1)) = Ԑ-C(ᵹ {q0,q3}, 1) = Ԑ-C({q2,})= {q2, q3,}
ᵹ*(q1,, 1) = Ԑ-C(ᵹ (ᵹ*(q1, Ԑ),1)) = Ԑ-C(ᵹ ({q1},1)) = Ԑ-C({q1,q3})= {q1, q3,}
ᵹ*(q2,, 1) = Ԑ-C(ᵹ (ᵹ*(q2, Ԑ),1)) = Ԑ-C(ᵹ ({q2,q3},1)) = Ԑ-C({q3}ᴜ{ ⱷ}) = Ԑ-C({q3})={q3}
ᵹ*(q3,, 1) = Ԑ-C(ᵹ (ᵹ*(q3,, Ԑ),1)) = Ԑ-C(ᵹ ({q3},1))= Ԑ-C({ ⱷ})= { ⱷ }
Conviene comprobar en el modelo gráfico, si este autómata que se forma de las transiciones anteriores es ya un autómata finito no determinístico, pero sin la cadena vacía o épsilon dentro de sus transiciones, por lo que es evidente que ya no está, y también gráficamente podemos verificar si el lenguaje aceptado es el mismo que en el autómata anterior para validar que ambos son autómatas equivalentes. 

L = {0*, 1, 11, [01*1|1|11]0*}
Con todo lo anterior, obtenemos un nuevo AFND ya sin épsilon transiciones y su descripción es la que se muestra en el siguiente diagrama:
`,
`https://drive.google.com/file/d/14n2g51uup_V7pkqnzMhT6ZXZgDxqcCyF/view?usp=drive_link`,
`La descripción formal de éste AFND es:
M = {Q, ∑, ᵹ, S, F} donde:
Q = {q0, q1, q2, q3}
El alfabeto, que es el conjunto de símbolos que se utilizan para el lenguaje (de solo dos palabras de longitud uno) es: ∑  = {0, 1}  (este ya no incluye a la cadena vacía o épsilon)
Las transiciones son: ᵹ = Q x ∑ 
`,
`https://drive.google.com/file/d/1k9OM_qnWHuk0lPEaB5MMPPrYiLJ_FB9l/view?usp=drive_link`,
`Ejemplo de transformación de Autómata Finito no Determinista (AFND) a un Autómata Finito  Determinista (AFD) EQUIVALENTE.

Como ya se explicó anteriormente, Estas transformaciones nos permiten llegar a un autómata mínimo cuyo procesamiento resulta más objetivo y práctico, y recordemos que un autómata finito no determinista, no incluye una transición para cada uno de los símbolos del alfabeto, sin embargo, un ejemplo sencillo de presentar es cuando se tiene como únicos símbolos del alfabeto al 0 y al 1. Es por esto la razón de que las computadoras se hayan diseñado con sistemas binarios en su lenguaje de máquina.

Partimos del autómata finito no determinista sin épsilon transiciones del diagrama anterior. AFND. Añadimos un estado de error o “X” puede ser etiquetado con cualquier nombre según se muestra en la siguiente Tabla. Generamos la tabla considerando la transición de error y agrupando nuevas transiciones, agregando las nuevas transiciones y nos queda la tabla en la siguiente página.

Las transiciones son: ᵹ = Q x ∑ 
`,
`Ejemplo de transformación de Autómata Finito no Determinista (AFND) a un Autómata Finito  Determinista (AFD) EQUIVALENTE.

Como ya se explicó anteriormente, Estas transformaciones nos permiten llegar a un autómata mínimo cuyo procesamiento resulta más objetivo y práctico, y recordemos que un autómata finito no determinista, no incluye una transición para cada uno de los símbolos del alfabeto, sin embargo, un ejemplo sencillo de presentar es cuando se tiene como únicos símbolos del alfabeto al 0 y al 1. Es por esto la razón de que las computadoras se hayan diseñado con sistemas binarios en su lenguaje de máquina.

Partimos del autómata finito no determinista sin épsilon transiciones del diagrama anterior. AFND. Añadimos un estado de error o “X” puede ser etiquetado con cualquier nombre según se muestra en la siguiente Tabla. Generamos la tabla considerando la transición de error y agrupando nuevas transiciones, agregando las nuevas transiciones y nos queda la tabla en la siguiente página.

Las transiciones son: ᵹ = Q x ∑ 
`,
`https://drive.google.com/file/d/1yrLWabK3pjDZ7T_FWTorHW3spbRZ9Gdk/view?usp=drive_link`,
`Con esta tabla se construye el autómata finito determinista ya sin épsilon transiciones y dado que acepta el mismo lenguaje regular:

L = {0*, 1, 11, [01*1|1|11]0*}
Este es un AFD o Autómata Finito Determinístico equivalente. Se conserva el estado {q3} como estado fina
`,
`https://drive.google.com/file/d/1nxekIddLfPBD9b4JWwHfY_wGXPbSPjnc/view?usp=drive_link`,
`La descripción formal de éste AFD es:
M = {Q, ∑, ᵹ, S, F} donde:
Q = {q0, q1, q2, q3}

El alfabeto, que es el conjunto de símbolos que se utilizan para el lenguaje (de solo dos palabras de longitud uno) es: ∑  = {0, 1}  (este ya no incluye a la cadena vacía o épsilon)
S = {q0}
F = {q0, q1, q2, q3}
`
    ]
  },

  // ── UNIDAD III ───────────────────────────────────────────
  {
    contenido_id: 10,
    titulo: '3.1 Elementos de diseño de Analizadores Léxicos',
area: AreaComputacion.COMPILADORES,
    descripcion: 'Principios y componentes del análisis léxico en compiladores.',
    tipo: TipoContenido.LECCION,
    orden: 1,
    url_recurso: null,
    unidad_id: 3,
    unidad: { unidad_id: 3, nombre: 'Unidad III - Construcción de un analizador Léxico' },
    contenido: [
      `Los analizadores léxicos han tenido múltiples aplicaciones en el desarrollo de software de base, tales como los Sistemas Operativos y los protocolos de comunicación. Los recorridos del código fuente que se realizan dentro de los lenguajes ensambladores, intérpretes de instrucciones  y los compiladores. Todas estas herramientas requieren de un analizador léxico. Además de las aplicaciones de software de base se tienen convertidores o traductores tan simples como indispensables que convierten una cantidad escrita con números a su correspondiente representación escrita con lenguajes tales como el inglés, español, francés, etc. 
Dentro de los sistemas teleinformáticas de gestión se requiere de un proceso indispensable de validar o identificar los datos numéricos requeridos o cualquier otro tipo de dato que debe entrar al procesamiento para generar resultados. A este proceso se le considera como FILTROS, dependiendo de las necesidades o requerimientos que son identificados símbolo por símbolo, carácter por carácter, integrando palabras o cadenas que se conocen como los componentes léxicos del lenguaje o código de entrada también denominado código fuente. 
Actualmente, cada vez son más requeridos los traductores en lenguajes naturales, el procesamiento de datos o información no estructura en la red, ya sea de datos digitales, voz o videos. Todos estos elementos también requieren de analizadores léxicos realizados con herramientas computacionales, tanto para aplicaciones en dispositivos móviles como todo tipo de aplicaciones que pueda crear el intelecto y la creatividad del diseñador de sistemas. 
Las funciones de estos módulos de un analizador léxico de tipo digital son las siguientes:
•	Analizador Lexicográfico: Las principales funciones que realiza son:
•	Identificar los símbolos. 
•	Eliminar los blancos, caracteres de fin de línea, etc... 
•	Eliminar los comentarios que acompañan al código fuente. 
•	Crear símbolos intermedios por cada lexema, estos símbolos son llamados tokens. 
•	Avisar de los errores que detecte.
•	Actualizar la tabla de errores 


•	Avanzar en la revisión sin importar el número de errores y sin caer en ciclos repetitivos “loop”.
•	Actualizar la tabla de símbolos
Ejemplo: A partir de la sentencia en PASCAL:
nuevo:= viejo + RAZON*2
Esto genera un código simplificado para el análisis sintáctico posterior, por ejemplo:
<id1> <:=> <id2> <+> <id3> <*> <ent>
Nota: Cada elemento encerrado entre <> representa un único token. Las abreviaturas <id> y <ent> significan identificador y entero, respectivamente.
<id1> significa identificador 1 equivale a nuevo
<:=> separador
 <id2> significa identificador 2 equivale a viejo 
<+> es el signo de más
 <id3> significa identificador 3 equivale a RAZON 
<*> es el signo de multiplicación
<ent> significa el número entero 2
De los elementos más importantes del diseño de un analizador léxico son la tabla de símbolos y el manejador de errores. Mismos que se describen a continuación:
TABLAS DE SÍMBOLOS.
Las tablas de símbolos (también llamadas tablas de identificadores y tablas de nombres), realizan dos importantes funciones en el proceso de traducción: 
1)	Verificar que la semántica sea correcta y 
2)	Ayudar en la generación apropiada de código. 
Ambas funciones se realizan insertando o recuperando desde la tabla de símbolos los atributos de las variables usadas en el programa fuente. Estos atributos, tales como: el nombre, tipo, dirección de almacenamiento y dimensión de una variable, usualmente se encuentran explícitamente en las declaraciones o más implícitamente a través del contexto en que aparecen los nombres de variables en el programa.


Una de las estructuras de datos que se encuentran relacionadas con las fases del proceso de compilación es la tabla de símbolos, la cual tiene como propósito registrar información que se comparte entre varias etapas y que permite administrar los recursos asociados a las entidades que manipulará el programa. 
La tabla de símbolos tiene típicamente la estructura de la siguiente forma:
`,
`https://drive.google.com/file/d/1YHGkyeuRxHpUB67FtBJQClJxviHtmB-M/view?usp=drive_link`,
`Primera propuesta de formato para el diseño de tabla de símbolos.

En donde podemos apreciar la designación de la entidad y su token -derivados del análisis de léxico- así como una serie de atributos (tipo de dato, dirección en memoria) que emanan de otras fases (análisis gramatical y semántico). Las consultas a la tabla de símbolos se realizan por medio del lexema con que se designa a la entidad.

Esta concepción de la tabla de símbolos es demasiado simple para fines prácticos, si consideramos que el lexema de la entidad es de longitud variable y se desea que la estructura sea homogénea. Una solución es considerar que en el campo lexema se tiene un apuntador (que siempre ocupa el mismo espacio) hacia donde se registrarán propiamente los lexemas. Eso evitará el desperdicio de memoria al tener el espacio justo para representar a cada lexema.
`,
`https://drive.google.com/file/d/1ylH-ujlXAyFpDnCyBYqXpNCqDR0H1u6t/view?usp=drive_link`,
`Propuesta de formato para el análisis de lexemas.

La creación de la tabla de símbolos compete inicialmente al analizador de léxico, quien registrará a las entidades (reconocidas bajo el patrón de Identificador) de manera única, por medio del binomio de operaciones Búsqueda-Inserción. 
En el contexto de un programa las entidades pueden describir propiamente objetos manipulables por el lenguaje (por ejemplo, variables, constantes o funciones) o descriptores de acciones (las palabras reservadas); ambas situaciones son reconocidas bajo el mismo patrón de identificador y la tabla de símbolos se emplea para hacer su discriminación. El analizador de léxico funciona bajo el siguiente mecanismo:
REPITE
	Token = AnaLex();
	SI Token == Identificador
	ENTONCES
		Token= REVISA_RESERVADAS (lexema)
	FSI
HASTA QUE Token == EOF
FREPITE
¿Cuándo construir la tabla de símbolos y cuando interactuar con ella?
El punto del procesador de traducción en el cual son invocadas las rutinas de manejo de la tabla de símbolos. Esto depende primeramente del número y la naturaleza de los pasos del compilador.
En un compilador multipasos, la tabla de símbolos es creada durante el paso de análisis léxico. Por medio de un índice se entra a la tabla de símbolos para ubicar la variable, a partir del token generado por el “scanner”.
Contenido de la tabla de símbolos.
Una tabla de símbolos puede conceptualizarse como una serie de renglones, cada uno de los cuales contiene una lista de valores de atributos que son asociados con una variable en particular. Las clases de los atributos que aparecen en una tabla de símbolos dependen en algún grado de la naturaleza del lenguaje de programación para el cual se escribe el compilador. 


Por ejemplo, un lenguaje puede ser sin tipos, y por lo tanto el atributo tipo no necesita aparecer en la tabla. Similarmente, la organización de la tabla de símbolos variará dependiendo de las limitaciones de memoria y tiempo de acceso.
A continuación, se presenta un ejemplo de una tabla de símbolos típica.
`,
`https://drive.google.com/file/d/1ShMG_RpEzIphXt_V0M85VbhXA9-71nG7/view?usp=drive_link`,
`
Éste es un ejemplo de tabla de símbolos
Los atributos que se manejan en la tabla anterior y que se describen enseguida, no son estrictamente necesarios para todos los compiladores; sin embargo, cada uno de tales atributos deberá ser considerado para la implementación de un compilador de un compilador en particular.
•	Nombre de la variable. 
•	Dirección del código objeto. 
•	Tipo. 
•	Valor (o número de parámetros para uno procedimiento). 
•	Número de línea fuente donde fue declarada la variable. 
•	Números de línea fuente donde se hace referencia a la variable. 
•	Liga. Campo cuyos valores sirven para listar las variables en orden alfabético.
El nombre de la variable debe estar, en cualquier caso, formando parte de la tabla de símbolos, ya que es el medio por el cual una variable en particular es identificada en las etapas de análisis semántico y generación de código. Para proveer un acceso rápido, es conveniente manejar un tamaño predefinido pero lo suficientemente grande para los nombres de las variables. Una longitud igual o mayor que 16 caracteres es bastante adecuado. El identificador completo puede almacenarse, justificado a la izquierda, en un campo de longitud fija en la tabla de símbolos. Este criterio posibilita un acceso más rápido a la tabla de símbolos, a costa de no aprovechar eficientemente el espacio de almacenamiento en el caso de las variables con identificadores cortos.

Otro criterio para manejar los identificadores en la tabla de símbolos consiste en colocar una cadena descriptora en el campo Nombre Variable de la tabla. El descriptor contiene los subcampos posición y longitud. El subcampo posición es un apuntador que indica la posición del primer carácter del nombre de la variable en un área general de cadenas, y el subcampo describe el número de caracteres del nombre de la variable. Este enfoque produce un acceso más lento a la tabla de símbolos, pero ofrece un ahorro considerable de espacio de almacenamiento.
En el proceso de compilación, una dirección de código objeto debe asociarse con todo variable en un programa. Esta dirección establece la ubicación relativa para los valores de la variable en tiempo de ejecución. La dirección del código objeto se coloca en la tabla de símbolos cuando la variable es declarada (o encontrada por primera vez). Esta dirección es reinvocada desde la tabla cuando la variable es referenciada en el programa fuente. La dirección es luego utilizada en una instrucción objeto que accede al valor de esa variable (carga o almacena).
El atributo tipo se almacena en la tabla de símbolos cuando los lenguajes compilados tienen tipos de datos explícitos o implícitos. Tradicionalmente, el tipo de dato de una variable es almacenado codificada en la tabla de símbolos; por ejemplo 1 puede representar el tipo real, 2 el tipo integer, etc.
Los atributos número_de_dimensiones y número_de_parámetros son importantes en la fase de análisis semántico. En las referencias a los arreglos, el número de dimensiones debe coincidir con el especificado en la declaración del arreglo, y esto debe ser verificado en la fase de análisis semántico. El número de dimensiones se utiliza también como parámetro en el cálculo de la dirección de un elemento particular del arreglo. El número de parámetros de la invocación a un procedimiento también debe coincidir con el número usado en la declaración. En la construcción de la tabla de símbolos, es conveniente considerar el número de parámetros de un procedimiento como su número de dimensiones y así combinar estos dos atributos en uno. Además de conveniente, este enfoque también es consistente, ya que el tipo de verificación semántica para ambos atributos es similar.
El atributo liga se ha incluido en la tabla de ejemplo simplemente para facilitar la producción de un listado de referencias cruzadas ordenado alfabéticamente por nombre de variable. La tabla de símbolos debe incluir cada uno de los elementos o cadenas aceptadas por el lenguaje, conocidos como elementos terminales, para asignarle el token o identificador numérico que le corresponda a cada elemento terminal. Los elementos no terminales, se deberán dar de alta en la tabla de símbolos y reasignarle el mismo token o identificador cada vez que se utilicen.

`
    ]
  },
  {
    contenido_id: 113,
    titulo: '3.2 Diseño o descripción de una aplicación que requiera el uso de un lenguaje de programación.',
area: AreaComputacion.COMPILADORES,
    descripcion: 'Construcción de una aplicación usando un lenguaje de programación (Java, C++, C)',
    tipo: TipoContenido.RECURSO,
    orden: 2,
    url_recurso: null,
    unidad_id: 3,
    unidad: { unidad_id: 3, nombre: 'Unidad III - Construcción de un Analizador Léxico' },
    contenido: [
      `CASO PRÁCTICO
Usted se encuentra trabajando para una compañía desarrolladora de software a la medida. Su jefe se acaba de enterar que está llevando una unidad de aprendizaje de Teoría de Lenguajes y Compiladores, así que decide que es la persona ideal para el proyecto de uno de sus principales clientes. Se le asigna a asistir a una entrevista con el usuario a fin de obtener las especificaciones finales del último módulo del producto.



En la entrevista el cliente comenta:
“Para el módulo de análisis necesitamos generar gráficas y que se conserven para posteriores análisis, pero requerimos que tanto los datos como los parámetros de graficación se guarden, ya que pasado el tiempo la gráfica pierde sentido y el analista sólo puede saber qué hacer si cuenta con los datos y los parámetros usados para generar la gráfica. Guardar datos y especificaciones no nos sirve, todo debe quedar en un mismo archivo. Todas nuestras gráficas  son con dos variables (bidimensionales). ¿Qué sugiere?
Tras un minuto de meditación, usted responde: “Hmmm… Hasta donde veo la única forma es… Creando una forma de especificación para generar la gráfica… Como un pequeño lenguaje que iría al inicio del archivo de datos. De esta forma se puede alimentar el sistema y siempre general la gráfica deseada”
Su cliente lo piensa un rato… Acepta la idea… Pero conociendo como son sus analistas él le indica como debe ser este lenguaje:
“- Frecuentemente tenemos visitantes o clientes extranjeros que utilizan el sistema… Por lo que las palabras de este lenguaje deben ser en inglés.
- La entrada será un archivo a través de la pantalla en la que cada línea puede ser un dato o una instrucción de graficación.
-Los datos podrán aparecer en pares de números, el primero será la abscisa y el segundo la ordenad, o sólo un numero… en cuyo caso el valor de la abscisa se asigna por defecto (1, 2, 3, etc.) … Y un carácter opcional de graficación puede seguir a cada dato.
- Los datos pueden ser asignados e incluir exponentes científicos.
- Se debe especificar el título de la gráfica, rangos de abscisa y ordenada (en la misma línea), las marcas de cada eje… El largo y ancho de la gráfica. Las especificaciones pueden aparecer en cualquier orden, y todas deben ser opcionales…
Una por línea y no debe ser necesario indicar el tamaño de la muestra…”
“Y eso sería todo. Sólo le pido que todas las instrucciones lleven una cantidad de argumentos fijos, analizadores lexicográficos, capaz de producir un analizador salvo las marcas que podrán ser libres”
La entrevista termina.



SE PIDE: Desarrolle la especificación de este lenguaje en notación BNF o BNFE.
Redacción Dr. Eduardo René Rodríguez Ávila, IEEE computer Society Branch & Neural Networks Council https://eravila.wordpress.com/home/intereses/apuntes/

¿Qué son los BNF y BNFE?
La Notación de Backus-Naur, también llamado BNF extendido o EBNF (del inglés Extended Backus–Naur Form) es un metalenguaje usado para expresar gramáticas libres de contexto. Esta es una extensión de la Notación de Backus-Naur. Fuente de esta definición: Wikipedia
Para comprender mejor este concepto, nos adelantaremos un poco a describir breve y coloquialmente lo que es una Gramática libre de contexto abreviada (GLC).
Una GLC es la definición formal de una gramática “formal” que también puede ser regular como las expresiones regulares ya descritas con anterioridad. Dentro de la definición tenemos que dentro de una GLC se tienen cuatro tipos de variables: Variables No Terminales (NT) y dentro de estas La variable inicial No terminal (“Start” con el símbolo S), Variables Terminales (con el símbolo T) y las Reglas de producción, denominadas Producciones, reglas generadoras y un sinfín de nombres que se pueden encontrar dependiente de la fuente de información, pero para efectos de estos apuntes las definiremos con el símbolo P.
Queda: GLC = {S, NT, T, P}
Ejemplo: Si decidimos crear una instrucción simple como “dibujar” esta palabra DIBUJAR puede servir para crear una Gramática Libre de Contexto. Si definimos que podemos dibujar tres figuras geométricas: Cuadrado, Triangulo y Círculo de tamaño  1 a 10 centímetros y en colores, azul, rojo, amarillo, blanco y negro. Para esto podemos definir un BNF
<dibujar>: = DIBUJA <figuras> <tamaño> <color>
<figuras>: = <cuadrado> |<triangulo>|<circulo>
<tamaño>: = 1|2|3|4|5|6|7|8|91|10
<color>: = azul|rojo|amarillo|blanco|negro
<cuadrado>: = □ <circulo>: = Ο
<triangulo>: = Δ

Los elementos NO terminales se pueden definir con mayúsculas o bien entre “tags” <y>, las variables terminales son símbolos alfabéticos, numéricos, alfanuméricos o especiales. Estos signos especiales: = separan la variable NO terminales (a la izquierda) de las Terminales a la derecha. No existe un estándar de este signo que se lee: PRODUCE ya que puede ser un guion intermedio -, puede ser también una flecha de izquierda a derecha  un símbolo de =, etc.
La siguiente definición se escribió anteriormente y también se puede configurar como un BNF:
<SENT>: = if <EXP-BOOL> then <SENT> [else <SENT>]
<SENT>: = <VAR> 
<VAR>: = <EXP><EXP-BOOL>
<EXP-BOOL>: = <VAR-BOOL> | <EXP> <COMP> 
<EXP><COMP>: = < | > | <> | <= | >= | =< | => | =
<EXP>: = <EXP> <OP> <FACTOR> | <FACTOR> 
<FACTOR>: = (<EXP>) | <VAR> | <CTE>
<CTE>: = <DIGITO> [<DIGITO>]<VAR>
 <VAR-BOOL>: = <LETRA> [<ALFANUM>] <ALFANUM> 
<ALFANUM>: = <LETRA> | <DIGITO>
<LETRA>: = a | b | ...... | z
<DIGITO>: =  0 | 1 | ...... | 9
<OP>:: = + | - | * | / | **
Esta es la definición de un BNFE el cual tiene a las variables NO terminales con mayúscula y entre “tags” <…> y por cada NO terminal, la definición de sus variables Terminales.

`
    ]
  },
  {
    contenido_id: 11,
    titulo: '3.3 Diseño de un lenguaje simple de programación.',
area: AreaComputacion.COMPILADORES,
    descripcion: 'Construcción de un lenguaje de programación',
    tipo: TipoContenido.RECURSO,
    orden: 4,
    url_recurso: null,
    unidad_id: 3,
    unidad: { unidad_id: 3, nombre: 'Unidad III - Construcción de un Analizador Léxico' },
    contenido: [
      `La teoría sin la práctica se olvida. El aprendizaje además de ser un proceso intrapersonal, conviene que sea significativo, esto es, el que nos es útil para la vida o ganarnos un medio de ingresos económicos.

Usted como estudiante tiene creatividad, inteligencia, habilidad matemática y lo único que hace falta es que ponga en práctica lo aprendido en la mayor cantidad de unidades de aprendizaje, como la ingeniería de software, programación, estructura de datos, bases de datos, lenguajes de programación, tecnología digital, idiomas como el inglés, etc. Esa es la justificación de que realice un proyecto real donde se aplique la teoría de Lenguajes y compiladores, y logre un software conocido como traductor.
RESUMEN EJECUTIVO.
Este proyecto se elabora desde el principio del periodo escolar ya que cuenta para tres evaluaciones, una por cada periodo. En el primer periodo es el diseño conceptual con respecto a un analizador que puede ser léxico, sintáctico, semántico, un traductor o compilador parcial o completo.
El proyecto se puede realizar de forma individual o en equipos, el número de integrantes del equipo dependiente de la complejidad del proyecto. Si se elabora en equipo, se tendrá que adjuntar desde la primera etapa o entrega, elaborar la asignación de actividades para cada elemento del equipo sin duplicar las actividades asignadas a cada responsable.
Primera etapa
“Diseño conceptual de un lenguaje experimental”
SE ENTREGA IMPRESO EXCLUSIVAMENTE. EN EL HORARIO DE CLASE, EN LA CLASE ANTERIOR A LA FECHA DEL EXAMEN DEL PRIMER PERIODO. (Oportunidad en la entrega 2 puntos)
Se entrega la programación, pruebas y presentación, su contenido, además de los contenidos de la primera etapa, se agrega al menos tres páginas más, con lo siguiente:


1.	Manual de usuario o descripción de ¿Cómo se ejecuta el software? Proceso de instalación y utilización. (Dos puntos)
2.	Descripción técnica del proyecto. Recordar que estamos elaborando un software de base y se detalla de lo general a lo particular como lo requiere la programación estructurada. (Dos puntos) Incluir: Diagramas, mapas mentales, conceptuales, redes semánticas, diagramas de autómatas, formatos de Backus y Naur (BNF´s), etc. Los diagramas son creados específicamente para el programa en cuestión. (Dos puntos)
3.	CODIGO FUENTE (sintético) con documentación interna, esto es, comentarios en cada línea de código (dos puntos) En congruencia con los diagramas.
4.	EVIDENCIA DE LA EJECUCIÓN O CIFRAS DE CONTROL (dos puntos). Valor total de la etapa (diez puntos).  
Si el proyecto tiene una evaluación menor a 8 (ocho), se considera SOLO como DERECHO para presentar el tercer examen parcial y el examen extraordinario.
Tercera etapa
“Presentación del proyecto completo”
Considerar todos los elementos del proyecto desde el PRIMER PARCIAL. Si el proyecto tiene una evaluación mayor o igual a 8 (ocho), se corrige y se prepara una presentación con material de apoyo y ya corregido se asignarán fechas de presentación de los mejores proyectos presentados y agregando las correcciones al diseño.
1)	Preparación de presentación para el grupo, mismas que se evalúan con una co-evaluación. La calificación de las presentaciones se promedian y complementan el otro 50% con la evaluación de la presentación realizada por parte del profesor. Al final se suman ambas evaluaciones y se tiene la calificación para el tercer parcial.


2)	Apegarse a la fecha, hora de la presentación por todos los integrantes del equipo. Esto es un requisito para no perder el derecho a la calificación del tercer parcial. Elaborado por: Sara Méndez García. En la Ciudad de México el 3 de abril de 2020.

ELEMENTOS IMPORTANTES PARA LA PRESENTACIÓN O DISCURSO (3ª. etapa):
Cualquier persona necesita comunicarse con sus semejantes, el uso adecuado de las palabras, principalmente al hablar; con correcta entonación, dicción y el uso impecable de las palabras nos genera muchas ventajas como: inspirar confianza, transmitir ideas de forma asertiva, convencer, conseguir un buen empleo. También ayuda a evitar conflictos, puede ser un medio para ganarse la vida como los políticos, locutores, profesores, vendedores, etc. A todos nos conviene ser buenos comunicadores. 
Para aprender a nadar no hay alternativa, sólo cambiar el temor por preparación, tirarnos al agua y practicar; para caminar se aprende caminando y también para hablar en público necesitamos ejercitar con un programa académico pertinente, de calidad y la constancia; conjuntamente con el deseo y la práctica; las evaluaciones respetuosas y el conocimiento de nuestras áreas de oportunidad nos permitirán de forma consiente lograr que todos seamos comunicadores competentes.
RESUMEN EJECUTIVO.
Para su primer proyecto de oratoria, se presentará a los asistentes con información acerca de su vida, trayectoria académica, intereses, ambiciones, habilidades, presentación de un proyecto, etc. Practique dando su discurso y escríbalo antes de presentarlo. Evite leerlo y explíquelo en 5 a 20 minutos.
OBJETIVOS:
Comenzar a hablar ante un público. Descubrir las habilidades de oratoria que ya posee y las habilidades que necesita fortalecer sus áreas de oportunidad.
DESARROLLAR SU DISCURSO, primero por escrito –el escrito no se entrega, solo se explica al público de forma opcional como evaluación continua- con la siguiente estructura. 



Introducción. - Debe captar inmediatamente la atención del público y decirle al público algo de lo siguiente:
•	Una pregunta sorprendente o un enunciado desafiante.
•	Una cita, ilustración o historia apropiada de forma breve.
•	Un despliegue de algún objeto o figura.
•	Una generalización atractiva que esté vinculada con su personalidad.
Evitar introducciones deficientes: Un enunciado apologético; Un cuento o chiste que no está relacionado con su tema; Una observación común; Un enunciado o historia larga o lenta y Una pregunta trivial, tal como ¿Alguna vez te has detenido a pensar…? 
Desarrollo. - No perder el punto principal, después dejar claro el subpunto y se puede llevar material de apoyo fácil de mostrar.
Conclusión. - Puede ser la revisión de lo descrito, un resumen, llamado a la acción o enunciado digno de recordarlo.
`
    ]
  },
  {
    contenido_id: 11,
    titulo: '3.4 Definición de Léxico mediante expresiones regulares',
area: AreaComputacion.COMPILADORES,
    descripcion: 'Uso de expresiones regulares para definir los tokens de un lenguaje.',
    tipo: TipoContenido.RECURSO,
    orden: 5,
    url_recurso: null,
    unidad_id: 3,
    unidad: { unidad_id: 3, nombre: 'Unidad III - Construcción de un Analizador Léxico' },
	contenido: [ 
		`DESARROLLAR un Analizador léxico puede ser algo tan trivial o sencillo como diseñar una expresión regular; hacer un traductor de cantidades numéricas a algún lenguaje que puede ser en español o en inglés de las cantidades numéricas, esta traducción requiere de una tabla de símbolos y un manejador de errores, mismo que podemos afirmar tiene un nivel medio de complejidad; Algo más complejo como crear un lenguaje de programación nuevo, pero; ¿Porque crear nuevos lenguajes? cuando ya casi son 3000 los lenguajes de programación de computadoras.
En un principio se pensaba que la teoría de lenguajes y compiladores era el área exclusiva de los “gurús” de la computación, pero actualmente se pueden crear un sin fin de herramientas que requieren un analizador léxico que, con las herramientas adecuadas, como los intérpretes de instrucciones, nos permiten tener resultados inmediatos. Aquí vamos a presentar el planteamiento de analizadores léxicos que se pueden realizar con una sola línea de código que incluya una expresión regular para seleccionar de un archivo de texto, las cadenas, palabras o elementos que deseamos seleccionar. Para esto, se solicita que también se incluya el autómata Finito para cada expresión regular y sus resultados.
	
	Paso 1.-  Existe un archivo en formato de texto que contiene información relacionada con los lenguajes de programación de computadoras recopilados el:
23 de enero de 1995. Disponible en: https://sites.google.com/site/upiicsasaramendez/Inicio/compiladores
	
Paso 2.- Descargue este archivo, analícelo y seleccione solo el nombre de los lenguajes enumerándolos, desplegarlos en pantalla, imprimiendo el número de lenguajes seleccionados para aproximarnos a los 2350 lenguajes de programación de computadoras que incluye dicho archivo, ordenados desde la letra A a la Z. Este proceso se le conoce como “filtro” dentro del procesamiento de datos. 
Paso 3.- Desarrolle el Diagrama del Autómata Finito No determinista con épsilon transiciones de la expresión que más se aproxime a la selección solicitada en el paso anterior.
`, `https://drive.google.com/file/d/1vxStUZp1Ctc5AVQuoXc_v4x_FpGmE39Z/view?usp=sharing`,
`Para poder ejecutar este paso se requiere lo siguiente:
Si se trabaja en ambiente UNIX o LINUX el lenguaje AWK se puede ejecutar directamente desde el intérprete de instrucciones del sistema operativo. También trabaja igual en ambientes de MAC. 
Si se trabaja en ambientes Microsoft será necesario descargar el lenguaje intérprete AWK.EXE o GAWK.EXE  y tener este archivo en la misma carpeta que el archivo de texto. - LANGUAGE.TXT para poder ejecutar alguna de las siguientes expresiones regulares: / - / Esta expresión regular de un solo símbolo (guion intermedio) Servirá como prueba para ejecutar por primera vez, de la siguiente forma en el intérprete de instrucciones: awk “/ -  /” LANGUAGE.TXT
La primera diagonal le indica a AWK el inicio de una expresión regular y la segunda diagonal, el final de la misma expresión regular. Sobre el archivo de entrada. 
IMPORTANTE: Dependiendo de la versión del sistema operativo, puede requerir una doble comilla o comilla simple, así que se verifica que los dos archivos estén en la misma carpeta. SI No da resultados la expresión regular, se prueba con comilla sencilla.
La  expresión regular de un solo símbolo queda así:
r1 =  -
Conversión a un autómata finito no determinista:`

,`https://drive.google.com/file/d/1BOvn9lYmVT-KWwnwBu2YGelyEecXjHAu/view?usp=drive_link`,

`Existe otra forma de ejecutar el AWK y es mediante un código guardado en un archivo de texto: En este caso será nombrado L.awk cuyo contenido es lo siguiente:
# UPIICSA
# TERORIA DE LENGUAJES Y COMPILADORES
# PROF. SARA MENDEZ GARCIA
BEGIN { print "LISTA DE LENGUAJES RECOPILADOS POR BILL KINNERSLEY.."
        print "LISTA DE LOS LENGUAJES DE 1900 A 1999"
FS = "    "}
# LISTA DE LOS LENGUAJES DE 1900 A 1999
 /19[0-9] [0-9]/ {
 if(length ($2) != 0) {
                n=n+1
		print n, $2
                }}
END { print "---------------------"
print "proceso terminado, suma de lenguajes…”, n 
} 
En este código la expresión regular queda limitada a seleccionar una fecha:

/19[0-9][0-9]/ 

Si se desea ejecutar este código, necesitamos teclear lo siguiente en el intérprete de instrucciones:

   awk – f /19[0-9][0-9]/ l.awk language.txt

También podemos incluir el redireccionamiento del resultado de esta expresión regular que funciona como analizador léxico con el símbolo > (mayor que) para guardar la salida en otro archivo, que en este caso es: “salida.txt” que si existe lo reemplaza y si no existe lo crea.

   awk – f /19[0-9] [0-9]/ l.awk language.txt > salida.txt
Conversión a un autómata finito no determinista:
r2 = 19[0-9][0-9] `
,`https://drive.google.com/file/d/1jh4jiJEiRHfSkR3eKvUdWEIrBEtJfHIz/view?usp=sharing`,

`En este autómata se ha simplificado la concatenación de 4 símbolos correspondientes a una fecha que corresponde al formato del siglo XX 19.
Los dos últimos dígitos al este autómata representado con un rango de valores, se incluye del cero al nueve y corresponde a todas las posibilidades desde 0, 1, 2, 3, 4, 5, 6, 7, 8 y 9.  
IMPORTANTE: También es posible incluir en la ejecución de una expresión regular instrucciones del lenguaje awk para desde el intérprete de instrucciones con una sola línea de código generemos el desplegado de la selección con el número de lenguaje seleccionado de la siguiente forma:
   awk /[a-z|A-Z|0-9] *] - / language.txt {n++; print n, $2}`
,`https://drive.google.com/file/d/1XNV32KocHVyRfxxfNq8spm_gjWqGkdX7/view?usp=drive_link`,

`Este autómata representa la posibilidad de tener cadenas escritas con mayúsculas, minúsculas o bien cadenas numéricas o la cadena vacía.

EJERCICIO.
Desarrolle un autómata que represente el comportamiento de una calculadora, así como su analizador léxico. El autómata (AFND con épsilon transiciones) tomará en consideración las operaciones que se realizan en el teclado de la calculadora, mismas que se muestra en la siguiente figura, con las siguientes consideraciones:

La Tecla CE/C. Si se pulsa una vez, borra la última entrada (clear). Si se pulsa dos veces (Clear all), borra todo lo introducido hasta regresar al estado de iniciar nuevamente. El contenido del display se toma como independiente, esto es, la salida de resultados es un aspecto que no se incluye dentro del autómata. Existen teclas de doble función como El ON/OFF. La primera vez que se pulsa la tecla ON/OFF se interpreta como ON. La segunda que se oprime la tecla ON/OFF representa un OFF. Esta calculadora cuando se pone la pila siempre espera el pulsar el ON/OFF.

Otras teclas que incluyen doble función son las que tienen el sombreado, todas éstas se activan con la tecla gris. Ejemplo: Para oprimir la función 2 al cubo (2 a la 3), se oprime primero el 2, luego la tecla gris, posteriormente se oprime la tecla Y a la x para luego oprimir el signo de igual y obtener el resultado.
Los paréntesis sólo funcionan una vez. En el caso de las funciones y operaciones. Las funciones de logaritmo y anti-logaritmo (no necesitan la tecla gris) La tecla EE, permite introducir el exponente de ingeniería base 10.

Existen funciones unarias, mismas que requieren un solo operador (operan con el último valor). También existen funciones binarias, las cuales requieren de dos valores (un ejemplo de funciones binarias son ex y yx).


La calculadora realiza operaciones aritméticas como son la suma, resta, multiplicación y división. Se aceptan funciones trigonométricas, Seno, Coseno, Tangente, el número PI y la notación científica. Así como las funciones alternas del inverso del seno, inverso del coseno e inverso de la tangente.

	`
		]
  },
  {
    contenido_id: 12,
    titulo: '3.5 Implementación con herramienta automatizada (JFLAP, MTSolution)',
area: AreaComputacion.COMPILADORES,
    descripcion: 'Uso de herramientas como Lex/Flex para generar analizadores léxicos automáticamente.',
    tipo: TipoContenido.TAREA,
    orden: 6,
    url_recurso: null,
    unidad_id: 3,
    unidad: { unidad_id: 3, nombre: 'Unidad III - Construcción de un Analizador Léxico' },
    contenido: [
      `La herramienta automatizada que se va a utilizar para las prácticas de esta unidad de aprendizaje es AWK. Es un lenguaje intérprete completo de aplicación general. Dentro de las herramientas automatizadas las más versátiles son las que se conocen como “OPEN SOURCE”, esto significa que se encuentra el código fuente disponible de forma gratuita. Si a esto agregamos que AWK es multiplataforma ya que se diseñó para trabajar de forma “nativa” en los ambientes UNIX.

Es muy parecido a lenguaje en C el cual permite integrar en el código expresiones regulares: C + /ER/ = awk
PRONTUARIO DE AWK EN EXPRESIONES REGULARES /ER/
En AWK, una expresión regular /ER/, es una de las siguientes:
•	Un carácter, diferente de cualquier meta-carácter, como A, que empata consigo misma.
•	La definición especial de un carácter o grupo de estas mediante meta-caracteres.
•	La combinación de una o más /ER/ mediante operaciones.
•	La sintáxis de las /ER/ en los patrones, comparaciones y funciones de cadena y búsqueda son:
1)	/ER/
2)	Expresión  ~ /ER/
3)	Expresión ~/ER/
4)	/ER/, /ER/

METACARACTERES
\ Secuencia de escape para presentar un carácter especial.
^ Al inicio de una cadena
$ Al final de una cadena
. Cualquier carácter
[ ] Clase o rango de caracteres
| Operador de alternación
( ) Delimitadores para el uso de operadores y expresiones
*Cerradura de Klenee
+ Cerradura positiva
? Cerrdura 0 o 1

 METACARACTERES DE CLASE
Dentro de una clase, todos los caracteres tienen un significado literal (entre corchetes) excepto
- (guion intermedio) Entre dos caracteres representa un rango de caracteres
\ (diagonal invertida) Conserva su comportamiento de meta-caracteres
^ (circunflejo) Al inicio, representa el complemento de la clase de caracteres
o de rango indicado.

EJEMPLOS:
/^C/ Empata con cualquier cadena con una C al inicio
/C$/ Empata con cualquier cadena con una C al final
/^C$/ Empata con una cadena con que sólo tenga una letra C
/^.$/ Empata con una cadena que sólo tenga carácter cualquiera
/^…/ Empata con una cadena que consiste en tres caracteres
/…/ Empata con cualquier cadena consecutivos
/\.$/ Empata con cualesquiera consecutivos que tenga un punto final
/^\c/ Empata con cualesquiera consecutivos que empieza con c
/[AEIOU]/ Empata con la cadena que tenga las letras interiores
/[ABC]/  Empata con la cadena que empieza con A, B o C. 
/^ [^^]/ Cualquier carácter excepto el circunflejo al inicio de la cadena
/B*/ Cadena vacia, B, BB, BBB,…,∞
/AB*C/   Genera:  AC, ABC, ABBC,…, ∞
/AB+C/   Genera: ABC, ABBC, ABBBC,…, ∞
`
    ]
  },

  // ── UNIDAD IV ────────────────────────────────────────────
  {
    contenido_id: 13,
    titulo: '4.1 Gramáticas Regulares y Gramáticas Libres de Contexto',
area: AreaComputacion.COMPILADORES,
    descripcion: 'Conceptos básicos, árboles de derivación y recursividad.',
    tipo: TipoContenido.LECCION,
    orden: 1,
    url_recurso: null,
    unidad_id: 4,
    unidad: { unidad_id: 4, nombre: 'Unidad IV - Normalización de Gramáticas' },
    contenido: [
      `
Las gramáticas son reglas que permiten describir cómo se construyen las cadenas de un lenguaje.

Para especificar la sintaxis de un lenguaje, se presenta una notación muy usada que llamada gramática independiente del contexto (GIC), también definida como Gramáticas Libres de Contexto (GLC) que son lo mismo.

Las gramáticas se utilizan para describir la estructura sintáctica de los lenguajes de programación, permitiendo verificar si un programa está correctamente escrito.

Las GLC son el fundamento para especificar la sintaxis de la mayoría de los lenguajes de programación.
•	Definición: Es una cuádrupla donde se definen variables, terminales, reglas de producción y un símbolo inicial.
•	Función: Permiten generar estructuras jerárquicas como expresiones matemáticas anidadas o bloques de código.

Una gramática se define mediante cuatro elementos principales:
•	Un conjunto de símbolos terminales (T). También se identifican como variables o símbolos terminales ∑T
•	Un conjunto de símbolos no terminales (NT). También se identifican como variables o símbolos NO terminales ∑NT
•	Un conjunto de producciones (P). Donde cada producción tiene un símbolo no terminal en su parte izquierda y un conjunto de terminales o no terminales en su parte derecha.
•	Un símbolo inicial o generador de la gramática. S, no terminal.

Las gramáticas se clasifican en diferentes tipos según su complejidad.
Los lenguajes de programación generalmente se describen mediante gramáticas libres de contexto, porque permiten representar estructuras más complejas que las gramáticas regulares.

4.1.1 Tipos de gramática: Jerarquía de Chomsky, árboles de derivación por la derecha e izquierda y recursividad por la derecha e izquierda.

Jerarquía de Chomsky
Se le considera fundador de la gramática generativa transformacional, que es un sistema de análisis del lenguaje y que ha revolucionado la lingüística. Chomsky cree que el lenguaje es consecuencia de una facultad humana innata y que, por lo tanto, la finalidad de la lingüística consiste en determinar qué propiedades universales existen y también en establecer la "gramática universal" que pudiera explicar el amplio espectro que abarca todas las lenguas humanas posibles.
Chomsky hizo una clasificación jerárquica de distintos tipos de gramáticas formales que generan lenguajes formales.

`,`https://drive.google.com/file/d/1ib4YHAlnb8IefYBBGHkwF2OVkkBilTtI/view?usp=drive_link`,`

Las categorías principales son:

•	Tipo 3: Gramáticas regulares
Son las más simples y se utilizan para describir lenguajes regulares.

Estas gramáticas pueden ser reconocidas por autómatas finitos.
•	Tipo 2: Gramáticas libres de contexto
Permiten describir estructuras más complejas como expresiones matemáticas o estructuras de programación.

Son reconocidas por autómatas de pila.
•	Tipo 1: Gramáticas dependientes del contexto
Permiten describir reglas más complejas donde el contexto de los símbolos es importante.

•	Tipo 0: Gramáticas recursivamente enumerables
Son las más generales y pueden describir cualquier lenguaje que pueda reconocer una máquina de Turing.

Cada tipo permite describir lenguajes con mayor complejidad.
Árboles de derivación por la derecha e izquierda
Un árbol de derivación es una representación gráfica que muestra cómo una cadena se genera a partir de una gramática formado a partir de la derivación de una gramática.

Características:
•	La raíz del árbol es el símbolo inicial.
•	Los nodos internos representan variables o no terminales.
•	Las hojas representan símbolos terminales.
Los árboles permiten visualizar la estructura sintáctica de las cadenas generadas por una gramática.
Una derivación es el proceso mediante el cual se generan cadenas a partir del símbolo inicial.


Existen dos tipos:

Derivación por la izquierda
•	Siempre se reemplaza el primer símbolo no terminal de izquierda a derecha.

Derivación por la derecha
•	Siempre se reemplaza el símbolo no terminal más a la derecha.

Ambos tipos de derivación generan la misma cadena final, pero el proceso de sustitución es diferente.

Recursividad por la derecha e izquierda
La recursividad es la característica de una gramática formal, la cual puede ser recursiva o repetitiva cuando existe una producción que se incluye a sí misma dentro de las reglas de producción de la gramática.
La recursividad tiene como característica principal la sensación de infinito, de algo que es continuo y que por tanto no puede ser delimitado en el espacio o el tiempo porque se sigue replicando y multiplicando de manera lógica y matemática.

Recursividad por la izquierda
Se presenta cuando el símbolo aparece al inicio de la producción.
Ejemplo:
      A → Aa

Este tipo de recursión puede causar problemas en algunos analizadores sintácticos, ya que puede provocar ciclos infinitos.

Recursividad por la derecha
Se presenta cuando el símbolo aparece al final de la producción.

Ejemplo:
      A → aA

Este tipo de recursión es más fácil de manejar en muchos algoritmos de análisis sintáctico.
Una gramática G se llama recursiva en A, A  ∈ ΣN 

      A → + xAy

•     Si x es la palabra vacía, se dice que la gramática es recursiva a la izquierda

      A → + Ay

•     Si y es la palabra vacía, se dice que la gramática es recursiva a la derecha
      
      A → + xA
`
    ]
  },

    {
    contenido_id: 14,
    titulo: '4.2 Obtención de una forma depurada (simplificada) de una gramática',
area: AreaComputacion.COMPILADORES,
    descripcion: 'Eliminación de aquellos símbolos que no derivan en terminales o son inalcanzables, producciones vacías e inconsistencias para simplificar el análisis sintáctico.',
    tipo: TipoContenido.LECCION,
    orden: 1,
    url_recurso: null,
    unidad_id: 4,
    unidad: { unidad_id: 4, nombre: 'Unidad IV - Normalización de Gramáticas' },
    contenido: [
      `
      Simplificar una gramática significa eliminar reglas innecesarias sin cambiar el lenguaje que genera. Esto permite obtener una gramática más clara y fácil de analizar.
Los pasos principales son:

1.	Eliminar símbolos inútiles
2.	Eliminar producciones vacías
3.	Eliminar producciones unitarias

Este proceso produce una gramática más sencilla para su análisis.

      4.2.1 Eliminación de Símbolos y Producciones Inútiles

Un símbolo inútil es aquel que:
•	No puede generar cadenas de terminales, o
•	No puede alcanzarse desde el símbolo inicial.

Para simplificar la gramática se eliminan:
•	Variables que no generan cadenas válidas.
•	Producciones que nunca se utilizan. 

      4.2.2 Eliminación de Producciones de cadena vacía (A → -ϵ ó A → -λ)

Las producciones vacías son aquellas que generan la cadena vacía, representada por:
ϵ  	λ

Estas producciones pueden complicar el análisis sintáctico.
Para eliminarlas se identifican las variables que pueden producir ε y se generan nuevas producciones equivalentes que no utilicen la cadena vacía.

      4.2.3 Eliminación de Producciones Unitarias.

Una producción unitaria es una regla donde una variable produce otra variable.
      Ejemplo:
      A → B

Estas producciones no agregan información al lenguaje, por lo que se reemplazan por las producciones de la variable correspondiente.
Esto ayuda a simplificar la gramática.
      `
    ]
  },

    {
    contenido_id: 15,
    titulo: '4.3 Obtención de la forma normal de Chomsky de una gramática libre de contexto',
area: AreaComputacion.COMPILADORES,
    descripcion: 'Simplificación de una gramática libre de contexto limitando sus producciones a dos tipos: no terminal derivando en dos no terminales y no terminal derivado en un único terminal',
    tipo: TipoContenido.LECCION,
    orden: 1,
    url_recurso: null,
    unidad_id: 4,
    unidad: { unidad_id: 4, nombre: 'Unidad IV - Normalización de Gramáticas' },
    contenido: [
      `
      La Forma Normal de Chomsky (FNC) es una forma estándar de representar una gramática libre de contexto (GLC) en la cual todas sus producciones cumplen con una estructura restringida, lo que permite simplificar su análisis y procesamiento dentro del diseño de compiladores.
Una gramática se encuentra en FNC si todas sus producciones son de la forma:
•     A → BC
•     A → a
•     Opcionalmente: S → ε (solo si el lenguaje contiene la cadena vacía)

Donde:
•     A, B, C son variables (no terminales)
•     a es un símbolo terminal

Objetivo de la Forma Normal de Chomsky
•     Simplificar la estructura de la gramática
•     Facilitar el análisis sintáctico
•     Permitir la aplicación de algoritmos como CYK
•     Preparar la gramática para procesos formales en compiladores

Procedimiento para obtener la FNC
Para transformar una gramática libre de contexto a Forma Normal de Chomsky, se deben seguir los siguientes pasos:

1. Eliminación de producciones vacías (ε)
Se eliminan todas las producciones de la forma:
      A → ε

2. Eliminación de producciones unitarias
Se eliminan producciones como:
      A → B

Sustituyéndolas por las producciones correspondientes de B.

3. Eliminación de símbolos inútiles
•     Símbolos no generativos
•     Símbolos no alcanzables

4. Transformación de producciones largas
Si existe una producción como:
      A → BCD

Se descompone en:
      A → BX1_
      X1_ → CD

5. Sustitución de terminales en producciones mixtas
Si hay producciones como:
      A → aB

Se reemplaza por:
      A → XB
      X → a

Importancia en compiladores
La FNC permite estructurar las gramáticas de manera uniforme, lo cual es fundamental en el análisis sintáctico y en la implementación de algoritmos que procesan lenguajes formales dentro de un compilador.
Ejemplo completo paso a paso

Sea la siguiente gramática libre de contexto:
      S → ASA | aB
      A → B | S | 𝜀
      B → b | 𝜀

Se desea transformar esta gramática a Forma Normal de Chomsky.

Paso 1. Identificar el símbolo inicial
El símbolo inicial es:
      S

Como en algunos procedimientos conviene que el símbolo inicial no aparezca del lado derecho, agregamos un nuevo símbolo inicial:
      S0 → S

La gramática queda:

      S0 → S
      S → ASA | aB
      A → B | S | 𝜀
      B → b | 𝜀

Paso 2. Eliminar producciones vacías
Las producciones vacías son:
      A → ε
      B → 𝜀

Como A y B son anulables, se generan nuevas producciones quitando esas variables donde aparezcan.
Para S → ASA

Como A es anulable en ambos extremos:
      S → ASA
      S → SA
      S → AS
      S → S

Para S → aB
Como B es anulable:
      S → aB
      S → a

Ahora quitamos las producciones vacías originales. La gramática queda:
      S0 → S
      S → ASA | SA | AS | S | aB | a
      A → B | S
      B → b

Paso 3. Eliminar producciones unitarias
Las producciones unitarias son:
      S0 → S
      S → S
      A → B
      A → S

Sustituyendo A → B
Como B→b, entonces:
      A → b

Sustituyendo A → S
Se copian las producciones no unitarias de SSS:
      A → ASA | SA | AS | aB | a

Sustituyendo S0 → S
Se copian las producciones no unitarias de S:
      S0 → ASA | SA | AS | aB | a

Quitamos las unitarias. La gramática queda:
      S0 → ASA | SA | AS | aB | a
      A → b | ASA | SA | AS | aB | a
      B → b

Paso 4. Revisar la forma de las producciones
En Forma Normal de Chomsky solo se permiten producciones de tipo:
      A → BC
      o
      A → a

Por lo tanto, hay que corregir producciones como:
      ASA
       y
      aB

Paso 5. Sustituir terminales mezclados con variables
Para la producción:
      aB

el terminal aaa no puede aparecer junto con una variable. Entonces creamos:
      C→a

y sustituimos:
      aB⇒CB

Paso 6. Descomponer producciones largas
Para:
      ASA

hay tres variables. Debe quedar en forma binaria. Creamos:
      X→SA

Entonces:
      ASA⇒AX

porque:
      X→SA

Paso 7. Escribir la gramática final en FNC
La gramática queda:
      S0 → AX | SA | AS | CB | a
      S → AX | SA | AS | CB | a
      A → AX | SA | AS | CB | a | b
      B → b
      C → a
      X → SA

Verificación
Ahora todas las producciones tienen una de estas formas:

•     dos variables:
      A → BC
•     un terminal:
      A → a

Por lo tanto, la gramática ya está en Forma Normal de Chomsky.
      `
    ]
  },

  {
    contenido_id: 16,
    titulo: '4.4 Obtención de la forma normal de Greibach de una Gramática Libre de Contexto',
area: AreaComputacion.COMPILADORES,
    descripcion: 'Eliminación de la recursión a la izquierda para garantizar que cada paso consuma exactamente un símbolo de la entrada, facilitando el diseño de autómatas de pila.',
    tipo: TipoContenido.LECCION,
    orden: 2,
    url_recurso: null,
    unidad_id: 4,
    unidad: { unidad_id: 4, nombre: 'Unidad IV - Normalización de Gramáticas' },
    contenido: [
      `
La Forma Normal de Greibach (FNG) es una representación de una gramática libre de contexto en la cual todas las producciones comienzan con un símbolo terminal.
Toda producción debe tener la forma:
      A → a∝

Donde:
●	a es un símbolo terminal
●	∝ es una cadena de variables (posiblemente vacía)

Objetivo de la Forma Normal de Greibach
●	Facilitar la construcción de Autómatas de Pila (PDA)
●	Garantizar que cada derivación produce al menos un símbolo terminal
●	Optimizar procesos de análisis sintáctico

Procedimiento para obtener la FNG

1. Partir de una gramática simplificada
La gramática debe estar previamente libre de:
●	Producciones vacías
●	Producciones unitarias
●	Símbolos inútiles

2. Eliminación de recursividad por la izquierda
Si existe:
      A → A∝ | β

Se transforma en:
      A → βA'
      A' → ∝A' | ε

3. Sustitución de variables iniciales
Si una producción inicia con una variable:
      A → B∝

Se sustituyen las producciones de B hasta que inicie con un terminal.

4. Reorganización de producciones
Se asegura que todas las producciones comiencen con un símbolo terminal.

Relación con el Autómata de Pila (PDA)
La FNG es especialmente importante porque permite construir directamente un Autómata de Pila.
Por ejemplo, una producción:
      A→aBC
      
Se traduce en el PDA como:
●	Leer el símbolo a
●	Reemplazar A en la pila por CB

Esto establece una relación directa entre gramáticas y autómatas.

Importancia en compiladores
La Forma Normal de Greibach es fundamental para:
●	Modelar el comportamiento de lenguajes mediante autómatas
●	Implementar analizadores sintácticos basados en pila
●	Estudiar formalmente la generación de cadenas en lenguajes

Ejemplo completo paso a paso
Sea la gramática:
      S → AB | b
      A → a | S
      B → b

Se desea transformar esta gramática a Forma Normal de Greibach.

Recordatorio
En la Forma Normal de Greibach, toda producción debe empezar con un terminal:
      A → aα

donde a es terminal y α es una secuencia de variables.

Paso 1. Revisar qué producciones ya cumplen
Tenemos:
      S → AB | b
      A → a | S
      B → b

Las producciones que ya cumplen son:
      S → b
      A → a
      B → b

Las que no cumplen son:
      S → AB
      A → S

porque empiezan con variable.

Paso 2. Sustituir variables iniciales
      Para S → AB

La variable inicial es A. Sustituimos usando las producciones de A:
      A→ a | S

Entonces:

      S → AB ⇒ aB | SB

Ahora la gramática queda provisionalmente:
      S→aB | SB | b
      A → a | S
      B → b

Pero aparece:
      S → SB

que tiene recursividad izquierda.

Paso 3. Eliminar recursividad izquierda
Tenemos:
      S → SB | aB | b

Esto es de la forma:
      S → Sa | β

donde:
      a = B
      β = aB, b

Aplicamos la transformación:
      S → βS'
      S' → aS' | ε

Queda:
      S → aBS' | bS'
      S' → BS' | ε

La gramática ahora es:
      S → aBS' | bS'
      S' → BS' | ε
      A → a | S
      B → b

Paso 4. Hacer que todas empiecen con terminal
La producción:
      S' → BS'

no cumple porque inicia con variable. Como:
      B → b

sustituimos:
      S' → bS' | ε

Verificación
Todas las producciones empiezan con terminal:
●	S → aB
●	A → a
●	B → b

Por lo tanto, está en Forma Normal de Greibach.

Relación con el Autómata de Pila
Si se tiene una producción en FNG como:
      S → aB

esto significa que el autómata de pila puede:
●	leer el símbolo a
●	sacar S de la pila
●	meter B en la pila

Si se tiene:
      A → a

      el autómata:
●	lee a
●	reemplaza A sin agregar nuevas variables
Por eso la FNG se usa para construir autómatas de pila de manera más directa.
      `
    ]
  },


  // ── UNIDAD V ─────────────────────────────────────────────
  {
    contenido_id: 17,
    titulo: '5.1 Análisis Sintáctico Descendente Predictivo y gramáticas LL y LR',
area: AreaComputacion.COMPILADORES,
    descripcion: 'Gramáticas LL, LR y construcción de analizadores descendentes predictivos.',
    tipo: TipoContenido.LECCION,
    orden: 1,
    url_recurso: null,
    unidad_id: 5,
    unidad: { unidad_id: 5, nombre: 'Unidad V - Implementación de un Analizador Sintáctico' },
    contenido: [
      `Un analizador sintáctico predictivo es un analizador sintáctico descendente recursivo que NO necesita marcha atrás. Su objetivo es tomar los tokens (palabras clasificadas) y verificar que sigan las reglas de una Gramática Libre de Contexto (GLC).
Condición exigible a una gramática para que sea posible:
–	En todo momento, a partir del siguiente token (palabras clasificadas) de entrada, sea posible determinar qué regla aplicar
Esto es posible cuando (una de dos):
–	ningún no terminal tiene alternativas en su parte derecha
–	no terminales con alternativas que empiecen por distintos símbolos
Este método construye el "árbol genealógico" de una instrucción empezando desde la regla más general (la raíz) hasta llegar a los símbolos específicos (las hojas).
Se llama predictivo porque el analizador "adivina" qué regla aplicar mirando solo el siguiente símbolo de la entrada (llamado lookahead).
Analogía: Es como armar un rompecabezas sabiendo de antemano que la imagen final es un paisaje. Si ves una pieza azul, "predices" que va en el cielo y no en el pasto.
Análisis Sintáctico Descendente (LL)
Este análisis intenta "predecir" qué regla de la gramática usar para llegar a los tokens que está leyendo.
Las gramáticas LL tienen una debilidad: no pueden manejar reglas donde una definición empieza con ella misma.
Ejemplo de error: Expresion -> Expresion + Numero.
Esto falla porque el analizador entraría en un ciclo infinito intentando resolver Expresion antes de haber leído siquiera el primer número. Para usar LL, debemos refactorizar la gramática (quitar la recursividad).
Primeros y Siguientes (First & Follow)
Para que el análisis sea Predictivo, el compilador calcula dos conjuntos matemáticos:
•	First (Primero): Los símbolos con los que puede empezar una regla.
•	Follow (Siguiente): Los símbolos que pueden aparecer inmediatamente después de una regla.
Con esto, se construye una Tabla de Análisis Sintáctico. Si la tabla tiene dos opciones en una misma celda, la gramática es ambigua y no es LL(1).
Análisis Sintáctico Ascendente (LR)
Este es más robusto y es el que utilizan herramientas profesionales como Yacc o Bison. Se basa en un autómata que maneja una Pila para ir guardando lo que lee.
Operaciones principales (Shift y Reduce)
•	Shift (Desplazar): Toma un token de la entrada y lo mete a la pila.
•	Reduce (Reducir): Cuando los símbolos en la parte superior de la pila coinciden con el lado derecho de una regla gramatical, los "compacta" y los sustituye por el símbolo de la izquierda.
Ejemplo: Si en la pila tengo id + id y mi regla es E -> id + id, el analizador "reduce" todo eso a una sola E.
Jerarquía de los analizadores LR
No todos los LR son iguales; varían según su potencia:
•	LR(0): El más simple, no mira hacia adelante. Muy limitado.
•	SLR (Simple LR): Usa el conjunto Follow para decidir cuándo reducir.
•	LALR (Look-Ahead LR): Es el estándar de la industria. Es potente pero no requiere tablas gigantescas.
•	LR(1): El más potente de todos, pero sus tablas de decisión pueden ser enormes (miles de estados).
Ejemplo de una Gramática LL(1)
Para que una gramática sea LL(1), no puede tener recursividad por la izquierda. Si la tuviera, el analizador caería en un bucle infinito al intentar expandir la regla. Por eso, las gramáticas LL suelen verse "desglosadas" con símbolos auxiliares (generalmente marcados con una comilla, como E' o T').
Gramática para expresiones aritméticas (LL):
E --> T E’
E' --> + T E’ | Ɛ
T --> F T’
T’ --> *F T’ | Ɛ
F --> (E) | id
¿Por qué es LL? Observa que ninguna regla empieza por sí misma. El analizador puede leer el primer token y decidir exactamente qué camino tomar. La Ɛ representa el "vacío" o la terminación de la regla.
      Ejemplo de una Gramática LR
Las gramáticas LR son mucho más naturales y potentes. Pueden manejar la recursividad por la izquierda sin ningún problema, lo que las hace más cortas y fáciles de escribir para un humano. Gramática para expresiones aritméticas (LR):
E --> E + T | T
T --> T * F | F
F --> (E) | id
¿Por qué es LR? Aquí sí tenemos recursividad por la izquierda (E  E + T). Un analizador LR no tiene problema con esto porque, en lugar de intentar predecir, espera a "ver" toda la cadena (Shift) y luego la reduce (Reduce) cuando encuentra una coincidencia completa.
      `
    ]
  },

    {
    contenido_id: 18,
    titulo: '5.2 Herramientas automatizadas para el desarrollo de un Analizador Sintáctico',
area: AreaComputacion.COMPILADORES,
    descripcion: 'Las herramientas automatizadas (Yacc o ANTLR) generan código para un analizador sintáctico a partir de una gramática formal, facilitando la construcción de compiladores.',
    tipo: TipoContenido.RECURSO,
    orden: 2,
    url_recurso: null,
    unidad_id: 5,
    unidad: { unidad_id: 5, nombre: 'Unidad V - Implementación de un Analizador Sintáctico' },
    contenido: [
    `Los ingenieros utilizan Generadores de Analizadores Sintácticos (también conocidos como Compiler-Compilers), en lugar de escribir miles de líneas de código a mano (lo cual es propenso a errores)

Estas herramientas funcionan de manera que les entregas un archivo con las reglas de tu gramática (en un formato parecido a Notación BNF) y la herramienta "escupe" automáticamente el código fuente (en C, Java, Python, etc.) que realiza el análisis.

1. GNU Bison (y el clásico Yacc)
Resuelve la ambigüedad mediante el poder del análisis Ascendente (LR).

•	Su objetivo es permitir que el programador defina gramáticas muy complejas (como las de C o C++) donde una palabra puede significar cosas distintas dependiendo de lo que viene después.
•	Bison automatiza la gestión de una "pila de estados". Sabe exactamente cuándo una serie de símbolos ya forman una estructura completa (como una función) y debe ser "reducida".
•	Genera tablas de decisión extremadamente compactas y rápidas, ideales para compiladores que deben procesar millones de líneas de código en segundos.

2. ANTLR (ANother Tool for Language Recognition)
Hace posible que el desarrollo de lenguajes sea humano, visual y multiplataforma.

•	Su gran objetivo fue romper la limitación de los analizadores descendentes tradicionales (LL). ANTLR puede "mirar hacia adelante" de forma ilimitada en el código para decidir qué regla aplicar, algo que antes era imposible o muy lento.
•	Permite que el programador separe las reglas de la gramática del código que ejecuta las acciones (usando "Listeners" o "Visitors"). Esto mantiene el código limpio y fácil de mantener.
3. Flex (Fast Lexical Analyzer)
La velocidad extrema en el reconocimiento de patrones.

•	Su objetivo es convertir expresiones regulares complejas en un Autómata Finito Determinista (DFA). Esto significa que no importa qué tan larga sea la palabra, Flex la identificará en un tiempo constante.
•	Sirve como el "portero" del analizador sintáctico. Su meta es eliminar comentarios, espacios en blanco y tabulaciones para que el analizador sintáctico reciba solo tokens útiles.

4. JavaCC (Java Compiler Compiler)
Integración total con el ecosistema de objetos de Java.

•	A diferencia de Bison, su objetivo es generar código Java que tú mismo podrías leer y entender. Genera un método por cada regla de tu gramática.
•	Permite insertar código Java directamente dentro de las reglas gramaticales para realizar validaciones en tiempo real (por ejemplo, verificar si una variable ya fue declarada antes de usarla).
    `
    ]
  },

  {
    contenido_id: 19,
    titulo: '5.3 Notaciones para especificar la sintaxis y tabla de símbolos',
area: AreaComputacion.COMPILADORES,
    descripcion: 'Direfentes notaciones para la estructura de un Lenguaje de progrmación',
    tipo: TipoContenido.RECURSO,
    orden: 3,
    url_recurso: null,
    unidad_id: 5,
    unidad: { unidad_id: 5, nombre: 'Unidad V - Implementación de un Analizador Sintáctico'},
    contenido: [
      `Notaciones para la sintaxis
1. BNF (Backus-Naur Form)
La notación BNF es la base clásica para describir gramáticas independientes del contexto. Se utiliza para definir la estructura jerárquica de un lenguaje.
•	Símbolos No Terminales: Se encierran entre paréntesis angulares < >. Representan estructuras que aún pueden descomponerse.
•	Símbolos Terminales: Son los caracteres o palabras literales (ej. +, if, 0).
•	Producción (::=): Significa "se define como".
•	Alternación (|): El operador "OR" para elegir entre diferentes opciones.

Ejemplo de un número entero en BNF:
<digito> ::= "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
<numero> ::= <digito> | <digito> <numero>
Nota: La repetición en BNF se logra mediante recursividad (como se ve en <numero>).

2. EBNF (Extended Backus-Naur Form)
EBNF es una extensión que añade "azúcar sintáctica" para hacer las reglas más compactas y legibles, eliminando la necesidad de recursividad constante para listas simples.
Operadores Clave:
•	Opcional [ ]: Lo que está dentro puede aparecer 0 o 1 vez.
•	Repetición { }: Lo que está dentro puede aparecer 0 o más veces (Cierre de Kleene).
•	Agrupación ( ): Para aplicar operadores a un conjunto de símbolos.
•	Terminales: Suelen ir entre comillas " ".

El mismo ejemplo de número en EBNF:
digito = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" ;
numero = digito { digito } ;

En el flujo de compiladores, las ER se encargan del Análisis Léxico (tokens), mientras que BNF/EBNF se encargan del Análisis Sintáctico (estructura).
Sin embargo, puedes ver a EBNF como una "super-ER". Mientras que una ER como [0-9]+ es plana, EBNF permite definir estructuras anidadas que una ER simple no puede (como paréntesis balanceados).
Ejemplo: Reconocedor de Identificadores
Se está diseñando un lenguaje donde un identificador (nombre de variable) debe empezar con una letra y puede seguir con letras o números.
1. Definición en EBNF
Primero definimos la estructura formal:
letra = "a" | "b" | ... | "z" ;
digito = "0" | "1" | ... | "9";
identificador = letra {letra | digito};
2. Conversión a Expresión Regular
La parte {letra | digito} en EBNF equivale a la cerradura de Kleene (*) en ER:
id =  letra (letra | digito)*


3. Construcción del Diagrama de Transición (Autómata)
Para dibujar el diagrama, seguimos estos estados:
Estado q0 (Inicial): Espera una letra. Si recibe un dígito, es un error (cadena rechazada).
Estado q1 (Aceptación): Se llega aquí tras la primera letra. Mientras sigan llegando letras o números, el autómata "cicla" sobre sí mismo.
Supongamos que queremos reconocer números como 12, 3.14 o 0.5.
EBNF: numero = digito { digito } [ "." digito { digito } ] ;
Diagrama de Transición:`
,`https://drive.google.com/file/d/172WtFUXFBkMsTFHyVBuYrxImMXAyOCWL/view?usp=sharing`,
    ]
  },

  {
    contenido_id: 20,
    titulo: '5.4 Procedimientos para la tabla de análisis sintáctico',
area: AreaComputacion.COMPILADORES,
    descripcion: 'Cálculo de conjuntos Primero y Siguiente para construcción de tablas LL',
    tipo: TipoContenido.TAREA,
    orden: 4,
    url_recurso: null,
    unidad_id: 5,
    unidad: { unidad_id: 5, nombre: 'Unidad V - Implementación de un Analizador Sintáctico' },
    contenido: [
      `Para construir una tabla de análisis sintáctico (específicamente para un analizador LL(1)), el objetivo es predecir qué regla de producción aplicar basándose en el símbolo actual de la entrada. Para lograrlo, la teoría de la computación define tres funciones fundamentales: PRIMERO, SIGUIENTE y PREDICCIÓN.
1. Conjunto PRIMERO (FIRST)
El conjunto PRIMERO(A) es el conjunto de todos los símbolos terminales (los que ya no se pueden descomponer, como +, if, id) que pueden aparecer al inicio de las cadenas derivadas de A.
Reglas para calcularlo:
•	Si X es un terminal, entonces PRIMERO(X) = {X}.
•	Si hay una regla X --> Ɛ ( vacío), entonces Ɛ se agrega a PRIMERO(X).
•	Si X --> Y1, Y2, ..., Yn es una regla:
1.	Agregas todo lo que esté en PRIMERO(Y1).
2.	Si Y1 puede ser vacío (Ɛ), entonces también agregas lo que esté en PRIMERO(Y2), y así sucesivamente.
2. Conjunto SIGUIENTE (FOLLOW)
El conjunto SIGUIENTE (A) es el conjunto de terminales que pueden aparecer inmediatamente después de A en alguna derivación.
Reglas para calcularlo:
•	Para el símbolo inicial de la gramática, coloca el símbolo $ (que indica el fin de la entrada) en su conjunto SIGUIENTE.

•	Si tienes una regla A --> α B β:
Todo lo que esté en PRIMERO (β) (excepto Ɛ) se agrega a SIGUIENTE(B).
•	Si tienes una regla A --> α B o A --> α B β donde β puede ser vacío (Ɛ):
Todo lo que esté en SIGUIENTE(A) se agrega a SIGUIENTE(B).      
      `
    ]
  },
  
  {
    contenido_id: 21,
    titulo: '5.5 Implementación de un analizador Sintáctico con un lenguaje de programación (Java, C++, C)',
area: AreaComputacion.COMPILADORES,
    descripcion: 'Desarrollar e implementar analizadores sintácticos eficientes mediante el uso de herramientas automatizadas y lenguajes de programación de alto nivel',
    tipo: TipoContenido.TAREA,
    orden: 5,
    url_recurso: null,
    unidad_id: 5,
    unidad: { unidad_id: 5, nombre: 'Unidad V - Implementación de un Analizador Sintáctico' },
    contenido: [
      `El compilador se divide en dos grandes etapas: 
•	Análisis: Examina el programa fuente para descomponerlo en componentes y extraer su significado. 
•	Síntesis:  Utiliza la información obtenida en el análisis para generar el programa equivalente en el lenguaje objeto.
Estas dos etapas contienen seis fases principales:
1.	Análisis léxico
2.	Análisis Sintáctico
3.	Análisis Semántico
4.	Generación de código intermedio
5.	Optimización de código
6.	Generación de código final
1.- Análisis Léxico
El análisis léxico es la primera fase del compilador. Su función consiste en leer la cadena de caracteres del código fuente y agruparlos en unidades con significado mínimo llamadas componentes léxicos o tokens.


Ejemplos de tokens:
•	Identificadores (nombres de las variables)
•	Palabras reservadas (BEING, END, IF, VAR, etc.)
•	Operadores (+, -, *, /)
•	Constantes numéricas o de texto
Durante esta fase se genera una secuencia de tokens y se actualiza la tabla de símbolos con los identificadores detectados. 
El analizador léxico suele estar implementado mediante autómatas finitos que reconocen patrones definidos por expresiones regulares.
2.- Análisis Sintáctico
En esta fase, los tokens producidos por el analizador léxico se agrupan en estructuras jerárquicas de acuerdo con las reglas gramaticales del lenguaje. El resultado es un árbol sintáctico, donde cada nodo representa una construcción del lenguaje.
El análisis sintáctico verifica que las secuencias de tokens siguen la sintaxis correcta (por ejemplo, correspondencia de paréntesis o el orden adecuado de operadores).  
Existen varios tipos de analizadores sintácticos, como los descendentes (LL) y ascendentes (LR). En el ejemplo del documento, se analiza la expresión: 
posición := inicial + velocidad * 60 
y se construye un árbol que refleja la precedencia de los operadores.
3.- Análisis Semántico
El análisis semántico examina el árbol sintáctico para verificar el significado del programa.  Se asegura de que las operaciones sean lógicamente válidas, por ejemplo, que los tipos de datos sean compatibles. 
Durante esta etapa: 
•	Se verifican los tipos de datos (por ejemplo, que no se sumen números enteros con cadenas).  
•	Se completan los atributos en la tabla de símbolos (tipo, alcance, posición en memoria, etc.). 
•	Se generan estructuras más abstractas como el árbol de sintaxis abstracta (AST), que representa la lógica del programa sin detalles sintácticos innecesarios.
En el ejemplo, el compilador detecta que la constante 60 es entera, por lo que debe convertirse a tipo real antes de operar con variables de ese tipo.



4.- Generación del código intermedio
En esta fase se produce un código intermedio, que representa las operaciones del programa de forma independiente de la máquina. Este código debe ser fácil de generar y fácil de traducir posteriormente al lenguaje máquina. 
Una forma común es el código de tres direcciones, donde cada instrucción contiene como máximo tres operandos.
Por ejemplo: 
temp1 := InToReal(60) 
temp2 := id26 * temp1 
temp3 := id24 + temp2 
id25 := temp3 
El código intermedio permite aplicar optimizaciones y facilita la portabilidad del compilador.
5.- Optimización del código 
La optimización busca mejorar el código intermedio reduciendo el consumo de tiempo o memoria, sin alterar su comportamiento.
Ejemplos de optimizaciones: 
•	Sustitución de expresiones constantes (InToReal(60) por 60.0). 
•	Eliminación de código muerto o inalcanzable. 
•	Reubicación de cálculos fuera de bucles. 
•	Eliminación de variables temporales innecesarias. El nivel de optimización puede ser ajustable según las necesidades (por ejemplo, -O1, -O2, -O3 en compiladores modernos).
El nivel de la optimización puede ser ajustable según las necesidades (por ejemplo, -01, -02, -03 en compiladores modernos).
6.- Generación de código final
En esta fase se traduce el código intermedio a instrucciones máquina o código ensamblador. 
Se asignan direcciones de memoria y registros para las variables, y cada operación se convierte en una secuencia de instrucciones concretas. 
Ejemplo de código máquina simplificado: 
•	MOVF 0068, R2 
•	MULF #60.0, R2 
•	MOVF 0060, R1 
•	ADDF R2, R1 
•	MOVF R1, 0064 
Aquí, cada instrucción corresponde a una operación aritmética o de movimiento, y las direcciones (0060H, 0064H, 0068H) representan posiciones asignadas en memoria.
      `
    ]
  },
];
