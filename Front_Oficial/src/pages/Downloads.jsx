import React from 'react';
import DidacmaxGuide from './DidacmaxGuide';

const MATERIAL_ROOT = '/descargas/materiales';
const PACKAGE_ROOT = '/descargas/paquetes';
const DIDACMAX_GUIDE_ROOT = '/descargas/guias/didacmax';

const featuredDownloads = [
  {
    id: 'presentaciones',
    title: 'Presentaciones',
    eyebrow: 'Nuevo paquete',
    description:
      'Colección de presentaciones, PDFs y materiales de apoyo de Teoría de la Computación y Compiladores.',
    meta: '55 archivos · 60.7 MB',
    href: `${PACKAGE_ROOT}/archivostcyc.zip`,
    download: 'archivostcyc.zip',
    icon: 'presentation',
    accent: 'bg-[#1f4f46]',
    items: ['BNF y gramáticas', 'AWK', 'GLC', 'proyectos', 'material didáctico'],
  },
  {
    id: 'didacmax',
    title: 'DIDACMAX 2000',
    eyebrow: 'Manual y práctica',
    description:
      'Paquete listo para trabajar en DOSBox, con runtime, manual, fuentes y ejemplos históricos.',
    meta: 'DDMC.zip · guía en línea',
    href: `${PACKAGE_ROOT}/DDMC.zip`,
    download: 'DDMC.zip',
    icon: 'archive',
    accent: 'bg-[#6b2132]',
    items: ['DOSBox', 'manual en línea', 'capturas', 'archivos de práctica'],
  },
  {
    id: 'instructivo',
    title: 'Instructivo DIDACMAX',
    eyebrow: 'Documento original',
    description:
      'Versión DOCX del instructivo con capturas originales para consultarlo fuera de línea.',
    meta: 'DOCX',
    href: `${DIDACMAX_GUIDE_ROOT}/Instructivo-DIDACMAX-2000-C2P.docx`,
    download: 'Instructivo-DIDACMAX-2000-C2P.docx',
    icon: 'file-text',
    accent: 'bg-gray-800',
    items: ['consulta offline', 'capturas originales'],
  },
];

const collections = [
  {
    id: 'M',
    title: 'Evaluación de MS-DOS',
    description:
      'Aplicación educativa histórica para presentar y consultar una evaluación de Sistemas Operativos MS-DOS.',
    files: [
      ['ESCOLAR.EXE', 35994],
      ['LETRERO.EXE', 53216],
      ['M.BAT', 251],
      ['MSDOS.TXT', 24300],
      ['R.BAT', 147],
      ['REPENC.EXE', 12146],
    ],
  },
  {
    id: 'DDM',
    title: 'DIDACMAX 2000 y prácticas de compiladores',
    description:
      'Colección de utilerías, fuentes, resultados compilados, imágenes y ejemplos del sistema didáctico DIDACMAX 2000.',
    files: [
      ['ADMIN.EXE', 42230],
      ['AYUDA.EXE', 9554],
      ['CALCULA.EXE', 25630],
      ['CAM1.TIF', 8504],
      ['CAM2.TIF', 8728],
      ['CAM3.TIF', 8807],
      ['CAM4.TIF', 8552],
      ['CAM5.TIF', 8819],
      ['CAM6.TIF', 8763],
      ['CAM7.TIF', 8840],
      ['CAM8.TIF', 8753],
      ['CAM9.TIF', 8753],
      ['CAMA.TIF', 8895],
      ['CAMB.TIF', 8972],
      ['CAMC.TIF', 8904],
      ['CAMD.TIF', 8114],
      ['CAME.TIF', 6975],
      ['CAMF.TIF', 6851],
      ['CAMG.TIF', 6660],
      ['CAMH.TIF', 5404],
      ['CAMION', 208],
      ['CGA.BGI', 6332],
      ['COM.OUT', 3898],
      ['COMILA.OUT', 649],
      ['COMPIL.CUR', 652],
      ['COMPIL.OUT', 671],
      ['COMPILA.CUR', 571],
      ['COMPILA.OUT', 665],
      ['COMPU', 12],
      ['CURSO', 2],
      ['CURSO.OUT', 21051],
      ['DIDAC.OUT', 0],
      ['dir.sal', 2944],
      ['EGAVGA.BGI', 5554],
      ['ESCOLAR.EXE', 35994],
      ['FLOR', 10],
      ['FLOR.CUR', 170],
      ['FLOR.OUT', 87],
      ['FLOR.TIF', 23769],
      ['GRAFBAR.EXE', 46438],
      ['GRAFLIN.EXE', 46758],
      ['GRAFPIE.EXE', 45878],
      ['HERC.BGI', 6204],
      ['IMAGEN.EXE', 47037],
      ['INICIAL.EXE', 25290],
      ['LEER.EXE', 11366],
      ['LETRAS.EXE', 10876],
      ['LETRERO.EXE', 53216],
      ['MANUAL.DOC', 19230],
      ['MANUAL.OUT', 18214],
      ['MANUAL.TXT', 16332],
      ['MEDICO.OUT', 34621],
      ['MIC.CUR', 605],
      ['MIC.OUT', 675],
      ['MICRO.CUR', 559],
      ['MICRO.OUT', 637],
      ['MODO40.EXE', 36976],
      ['MODO40.OUT', 2325],
      ['MONI.TIF', 22065],
      ['PONFOTO.EXE', 31744],
      ['Practicas de Teoría de Compiladores.pptx', 95657],
      ['PRUEBA.CUR', 1515],
      ['PRUEBA.OUT', 1400],
      ['REPENC.EXE', 12146],
      ['SISOP.CUR', 4449],
      ['SISOP.OUT', 4512],
      ['SO.bat', 73],
      ['SO.OUT', 4512],
      ['U.OUT', 0],
      ['Unidad_ico.CUR', 4426],
      ['Unidad_ico.mht', 4426],
      ['~$Practicas de Teoría de Compiladores.pptx', 165],
    ],
  },
];

const exactDescriptions = {
  'ADMIN.EXE': 'Ejecutor o runtime de DIDACMAX 2000 para abrir materiales ya compilados.',
  'AYUDA.EXE': 'Compilador de DIDACMAX 2000: transforma archivos fuente .CUR en archivos .OUT.',
  'CALCULA.EXE': 'Calculadora para DOS incluida como utilería invocable desde DIDACMAX.',
  'ESCOLAR.EXE': 'Aplicación para aplicar evaluaciones a partir de una base de reactivos.',
  'GRAFBAR.EXE': 'Utilería DOS que genera gráficas de barras desde datos en texto.',
  'GRAFLIN.EXE': 'Utilería DOS que genera gráficas de líneas desde datos en texto.',
  'GRAFPIE.EXE': 'Utilería DOS que genera gráficas circulares desde datos en texto.',
  'IMAGEN.EXE': 'Reproductor de secuencias de imágenes TIFF para simular animaciones.',
  'INICIAL.EXE': 'Programa auxiliar de inicio perteneciente al entorno DIDACMAX.',
  'LEER.EXE': 'Visor DOS para leer archivos de texto ASCII desde los materiales.',
  'LETRAS.EXE': 'Generador de mensajes grandes en modo texto.',
  'LETRERO.EXE': 'Generador de letreros grandes en modo gráfico para DOS.',
  'MODO40.EXE': 'Ejecutor de una presentación DIDACMAX adaptada al modo de 40 columnas.',
  'PONFOTO.EXE': 'Visor DOS para mostrar una imagen TIFF individual.',
  'REPENC.EXE': 'Lector de reportes encriptados producidos por la aplicación ESCOLAR.',
  'M.BAT': 'Script que presenta el examen parcial de MS-DOS mediante LETRERO y ESCOLAR.',
  'R.BAT': 'Script que abre el reporte del examen de MS-DOS mediante REPENC.',
  'SO.bat': 'Script que compila y abre el material de Sistemas Operativos en DIDACMAX.',
  'MSDOS.TXT': 'Base de reactivos utilizada por ESCOLAR para la evaluación de MS-DOS.',
  'MANUAL.DOC': 'Versión de texto extendido del manual de uso de DIDACMAX 2000.',
  'MANUAL.TXT': 'Manual estructurado de DIDACMAX 2000 en su formato histórico.',
  'MANUAL.OUT': 'Versión compilada del manual, preparada para el runtime ADMIN.',
  'Practicas de Teoría de Compiladores.pptx':
    'Presentación de PowerPoint con prácticas relacionadas con Teoría de Compiladores.',
  '~$Practicas de Teoría de Compiladores.pptx':
    'Archivo temporal de bloqueo creado por Microsoft Office; se conserva sólo como parte del material original.',
  'dir.sal': 'Listado histórico del contenido que existía en el directorio C:\\DDM.',
  'CGA.BGI': 'Controlador gráfico Borland para adaptadores CGA usado por las utilerías DOS.',
  'EGAVGA.BGI': 'Controlador gráfico Borland para adaptadores EGA/VGA.',
  'HERC.BGI': 'Controlador gráfico Borland para adaptadores Hercules.',
  CAMION: 'Lista que indica el orden y duración de los cuadros CAM1.TIF a CAMH.TIF.',
  COMPU: 'Lista de imágenes que apunta a MONI.TIF para una demostración sobre computadoras.',
  CURSO: 'Pequeño archivo de control asociado con el curso autodidacta.',
  FLOR: 'Lista de imágenes utilizada por la demostración gráfica de una flor.',
  'DIDAC.OUT': 'Archivo de salida vacío reservado como destino predeterminado del compilador.',
  'U.OUT': 'Archivo de salida vacío conservado como parte del conjunto original.',
  'Unidad_ico.CUR': 'Captura web guardada con extensión .CUR; contiene el fuente de una unidad didáctica.',
  'Unidad_ico.mht': 'Copia MHTML de una unidad didáctica guardada desde Internet Explorer.',
};

const sourceDescriptions = {
  'COMPIL.CUR': 'Fuente DIDACMAX sobre tipos de compiladores, con colores y clave de acceso.',
  'COMPILA.CUR': 'Fuente DIDACMAX de un ejemplo sobre tipos de compiladores.',
  'FLOR.CUR': 'Fuente DIDACMAX para la demostración de hipertexto “La flor”.',
  'MIC.CUR': 'Fuente DIDACMAX sobre las partes de una microcomputadora.',
  'MICRO.CUR': 'Fuente DIDACMAX sobre computadoras y sus componentes.',
  'PRUEBA.CUR': 'Fuente DIDACMAX de prueba para experimentar con ventanas y colores.',
  'SISOP.CUR': 'Fuente didáctica de Sistemas Operativos para compilar con AYUDA.EXE.',
};

const outputDescriptions = {
  'COM.OUT': 'Material compilado de DIDACMAX relacionado con conceptos de computación.',
  'COMILA.OUT': 'Material compilado sobre los tipos de compiladores.',
  'COMPIL.OUT': 'Resultado compilado y protegido del fuente COMPIL.CUR.',
  'COMPILA.OUT': 'Resultado compilado del ejemplo COMPILA.CUR.',
  'CURSO.OUT': 'Curso autodidacta compilado para DIDACMAX 2000.',
  'FLOR.OUT': 'Resultado compilado de la demostración “La flor”.',
  'MEDICO.OUT': 'Programa didáctico compilado con temática médica.',
  'MIC.OUT': 'Resultado compilado del material sobre microcomputadoras.',
  'MICRO.OUT': 'Resultado compilado del material sobre computadoras.',
  'MODO40.OUT': 'Presentación compilada sobre DIDACMAX en modo de 40 columnas.',
  'PRUEBA.OUT': 'Resultado compilado del archivo de pruebas.',
  'SISOP.OUT': 'Material compilado sobre Sistemas Operativos.',
  'SO.OUT': 'Copia del material compilado de Sistemas Operativos.',
};

function getExtension(fileName) {
  const dotIndex = fileName.lastIndexOf('.');
  return dotIndex === -1 ? '' : fileName.slice(dotIndex + 1).toUpperCase();
}

function describeFile(fileName) {
  if (exactDescriptions[fileName]) return exactDescriptions[fileName];
  if (sourceDescriptions[fileName]) return sourceDescriptions[fileName];
  if (outputDescriptions[fileName]) return outputDescriptions[fileName];

  if (/^CAM[1-9A-H]\.TIF$/.test(fileName)) {
    return `Cuadro ${fileName.slice(3, 4)} de la secuencia TIFF utilizada para animar la demostración del camión.`;
  }

  if (fileName === 'FLOR.TIF') {
    return 'Imagen TIFF monocromática utilizada por la demostración “La flor”.';
  }

  if (fileName === 'MONI.TIF') {
    return 'Imagen TIFF de un monitor utilizada en el ejemplo sobre computadoras.';
  }

  const extension = getExtension(fileName);

  if (extension === 'CUR') return 'Archivo fuente de un material creado para DIDACMAX 2000.';
  if (extension === 'OUT') return 'Archivo compilado para ejecutarse con el runtime de DIDACMAX.';
  if (extension === 'EXE') return 'Programa histórico para MS-DOS; requiere un entorno compatible como DOSBox.';
  if (extension === 'TIF') return 'Imagen TIFF utilizada por una demostración gráfica de DIDACMAX.';
  return 'Archivo auxiliar conservado como parte del material educativo original.';
}

function getCategory(fileName) {
  const extension = getExtension(fileName);

  if (extension === 'PPTX' || extension === 'DOC' || extension === 'TXT' || extension === 'MHT') {
    return 'Documentación';
  }
  if (extension === 'CUR' || extension === 'OUT') return 'Fuentes y materiales DIDACMAX';
  if (extension === 'TIF') return 'Imágenes';
  if (extension === 'EXE' || extension === 'BAT' || extension === 'BGI') return 'Programas para DOS';
  return 'Archivos auxiliares';
}

function getIcon(fileName) {
  const category = getCategory(fileName);
  return {
    Documentación: 'file-text',
    'Fuentes y materiales DIDACMAX': 'braces',
    Imágenes: 'image',
    'Programas para DOS': 'terminal',
    'Archivos auxiliares': 'file',
  }[category];
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 bytes';
  if (bytes < 1024) return `${bytes} bytes`;
  return `${(bytes / 1024).toFixed(1)} KB`;
}

function buildDownloadUrl(collectionId, fileName) {
  return `${MATERIAL_ROOT}/${collectionId}/${encodeURIComponent(fileName)}`;
}

function FileCard({ collectionId, file }) {
  const [fileName, size] = file;
  const category = getCategory(fileName);

  return (
    <article className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-[#6b2132]/10 text-[#6b2132]">
          <i data-lucide={getIcon(fileName)} className="h-5 w-5"></i>
        </div>
        <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
          {getExtension(fileName) || 'SIN EXT.'}
        </span>
      </div>

      <h4 className="break-words text-base font-bold text-gray-900">{fileName}</h4>
      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-[#1f4f46]">{category}</p>
      <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">{describeFile(fileName)}</p>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-gray-100 pt-4">
        <span className="text-xs text-gray-500">{formatBytes(size)}</span>
        <a
          href={buildDownloadUrl(collectionId, fileName)}
          download={fileName}
          className="inline-flex items-center gap-2 rounded-lg bg-[#6b2132] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#541827]"
        >
          <i data-lucide="download" className="h-4 w-4"></i>
          Descargar
        </a>
      </div>
    </article>
  );
}

function FeaturedDownloadCard({ item, onOpenGuide }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start gap-4">
        <span className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${item.accent} text-white`}>
          <i data-lucide={item.icon} className="h-6 w-6"></i>
        </span>
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6b2132]">{item.eyebrow}</p>
          <h3 className="mt-1 text-xl font-bold text-gray-900">{item.title}</h3>
          <p className="mt-1 text-sm font-semibold text-gray-500">{item.meta}</p>
        </div>
      </div>

      <p className="mt-4 flex-1 leading-7 text-gray-600">{item.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {item.items.map((label) => (
          <span key={label} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
            {label}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3 border-t border-gray-100 pt-5">
        <a
          href={item.href}
          download={item.download}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#6b2132] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#541827]"
        >
          <i data-lucide="download" className="h-4 w-4"></i>
          Descargar
        </a>
        {item.id === 'didacmax' && (
          <button
            type="button"
            onClick={onOpenGuide}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#1f4f46]/30 px-4 py-2.5 text-sm font-bold text-[#1f4f46] transition hover:bg-[#1f4f46]/10"
          >
            <i data-lucide="book-open" className="h-4 w-4"></i>
            Ver guía
          </button>
        )}
      </div>
    </article>
  );
}

const Downloads = () => {
  const [query, setQuery] = React.useState('');
  const [showDidacmaxGuide, setShowDidacmaxGuide] = React.useState(false);
  const [showCatalog, setShowCatalog] = React.useState(false);

  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [query, showDidacmaxGuide, showCatalog]);

  if (showDidacmaxGuide) {
    return <DidacmaxGuide onBack={() => setShowDidacmaxGuide(false)} />;
  }

  const catalogCollections = collections.filter((collection) => collection.id !== 'DDM');
  const totalCatalogFiles = catalogCollections.reduce((total, collection) => total + collection.files.length, 0);

  return (
    <div className="mx-auto max-w-7xl space-y-7 fade-in">
      <section className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#6b2132] to-[#1f4f46] p-7 text-white shadow-lg md:p-10">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div className="max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-white/70">
            Archivo educativo
          </p>
          <h1 className="text-3xl font-bold md:text-4xl">Materiales para descargar</h1>
          <p className="mt-4 leading-7 text-white/85">
            Descarga los paquetes principales primero. Si necesitas un archivo específico,
            abre el catálogo detallado al final de la página.
          </p>
          </div>
          <div className="rounded-2xl bg-white/10 p-4 text-sm text-white/85">
            <p className="font-bold text-white">Vista simplificada</p>
            <p className="mt-1">3 paquetes principales · {totalCatalogFiles} archivos sueltos en catálogo</p>
          </div>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-3">
        {featuredDownloads.map((item) => (
          <FeaturedDownloadCard
            key={item.id}
            item={item}
            onOpenGuide={() => setShowDidacmaxGuide(true)}
          />
        ))}
      </section>

      <aside className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-amber-950">
        <div className="flex items-start gap-3">
          <i data-lucide="shield-alert" className="mt-0.5 h-5 w-5 flex-shrink-0"></i>
          <div>
            <h2 className="font-bold">Aviso sobre compatibilidad</h2>
            <p className="mt-1 text-sm leading-6">
              Los archivos EXE, BAT y BGI son software histórico para MS-DOS. No se ejecutan en
              esta página y no deben abrirse directamente en un sistema moderno; para estudiarlos
              se recomienda un entorno aislado y compatible, como DOSBox.
            </p>
          </div>
        </div>
      </aside>

      <section className="overflow-hidden rounded-2xl border border-[#1f4f46]/20 bg-white shadow-sm">
        <div className="grid items-center gap-5 p-5 md:grid-cols-[minmax(0,1fr)_auto] md:p-6">
          <div className="flex items-start gap-5">
            <span className="hidden h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#1f4f46] text-white sm:flex">
              <i data-lucide="book-open-check" className="h-6 w-6"></i>
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6b2132]">
                DIDACMAX sin saturación
              </p>
              <h2 className="mt-1 text-xl font-bold text-gray-900">Guía separada del catálogo</h2>
              <p className="mt-2 max-w-3xl leading-7 text-gray-600">
                La guía queda como recorrido enfocado; el listado completo de archivos queda oculto
                hasta que lo necesites.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setShowDidacmaxGuide(true)}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1f4f46] px-5 py-3 font-bold text-white transition hover:bg-[#173e37]"
          >
            Abrir guía
            <i data-lucide="arrow-right" className="h-4 w-4"></i>
          </button>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
              Catálogo avanzado
            </p>
            <h2 className="mt-1 text-xl font-bold text-gray-900">Archivos individuales</h2>
            <p className="mt-1 text-sm text-gray-600">
              Usa esta vista sólo si necesitas descargar un archivo suelto.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowCatalog((current) => !current)}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
          >
            {showCatalog ? 'Ocultar catálogo' : 'Ver catálogo'}
            <i data-lucide={showCatalog ? 'chevron-up' : 'chevron-down'} className="h-4 w-4"></i>
          </button>
        </div>
      </section>

      {showCatalog && (
        <>
      <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div>
          <label className="relative block">
            <span className="sr-only">Buscar archivos</span>
            <i
              data-lucide="search"
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
            ></i>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar por nombre o descripción..."
              className="w-full rounded-lg border border-gray-300 py-3 pl-12 pr-4 outline-none transition focus:border-[#6b2132] focus:ring-2 focus:ring-[#6b2132]/20"
            />
          </label>
        </div>
      </section>

      {catalogCollections.map((collection) => {
        const normalizedQuery = query.trim().toLowerCase();
        const visibleFiles = collection.files.filter(([fileName]) => {
          const searchableText = `${fileName} ${describeFile(fileName)}`.toLowerCase();
          return !normalizedQuery || searchableText.includes(normalizedQuery);
        });

        if (visibleFiles.length === 0) return null;

        return (
          <section key={collection.id} className="space-y-5">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl font-bold text-gray-900">{collection.title}</h2>
                <span className="rounded-full bg-[#6b2132]/10 px-3 py-1 text-xs font-bold text-[#6b2132]">
                  {visibleFiles.length} archivos
                </span>
              </div>
              <p className="mt-2 max-w-4xl text-gray-600">{collection.description}</p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {visibleFiles.map((file) => (
                <FileCard key={`${collection.id}-${file[0]}`} collectionId={collection.id} file={file} />
              ))}
            </div>
          </section>
        );
      })}

      {catalogCollections.every((collection) =>
        collection.files.every(([fileName]) => {
          const searchableText = `${fileName} ${describeFile(fileName)}`.toLowerCase();
          return !searchableText.includes(query.trim().toLowerCase());
        }),
      ) && (
        <div className="rounded-xl border-2 border-dashed border-gray-300 bg-white p-12 text-center">
          <i data-lucide="file-search" className="mx-auto h-10 w-10 text-gray-400"></i>
          <p className="mt-3 font-semibold text-gray-700">No encontramos archivos con esos filtros.</p>
        </div>
      )}
        </>
      )}
    </div>
  );
};

export default Downloads;
