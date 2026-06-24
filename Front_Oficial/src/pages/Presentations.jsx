import React from 'react';

const PRESENTATIONS_ROOT = '/descargas/presentaciones';
const FULL_PACKAGE_URL = '/descargas/paquetes/archivostcyc.zip';

const presentations = [
  { name: 'BNF_MT.pptx', file: 'bnf-mt.pptx', size: 617659, topic: 'Gramáticas y BNF' },
  { name: 'Conversion GLC.pptx', file: 'conversion-glc.pptx', size: 362282, topic: 'Gramáticas libres de contexto' },
  { name: 'Correccion examen.pdf', file: 'correccion-examen.pdf', size: 14717070, topic: 'Evaluación' },
  { name: 'Código en AWK ¿Qué hace.pdf', file: 'codigo-awk-que-hace.pdf', size: 147666, topic: 'AWK' },
  {
    name: 'Diferencias - Ensamblador_Compilador_Interprete  .pptx',
    file: 'diferencias-ensamblador-compilador-interprete.pptx',
    size: 200430,
    topic: 'Compiladores',
  },
  {
    name: 'Ejemplo - Conversión AFND-e a AFD.pptx',
    file: 'ejemplo-conversion-afnde-afd.pptx',
    size: 892897,
    topic: 'Autómatas',
  },
  {
    name: 'Ejemplo - Resolución autómata finito.pdf',
    file: 'ejemplo-resolucion-automata-finito.pdf',
    size: 820298,
    topic: 'Autómatas',
  },
  { name: 'GRAMATICAS.pptx', file: 'gramaticas.pptx', size: 3891566, topic: 'Gramáticas' },
  { name: 'Introducción AWK.pptx', file: 'introduccion-awk.pptx', size: 2042909, topic: 'AWK' },
  {
    name: 'Material Didactico - Sistemas Operativos.ppt',
    file: 'material-didactico-sistemas-operativos.ppt',
    size: 1740800,
    topic: 'Sistemas Operativos',
  },
  { name: 'PROYECTO 1.pdf', file: 'proyecto-1.pdf', size: 290836, topic: 'Proyectos' },
  {
    name: 'PROYECTO_CarritoCompilador.pdf',
    file: 'proyecto-carrito-compilador.pdf',
    size: 1844497,
    topic: 'Proyectos',
  },
  { name: 'PROYECTO_FINAL.pdf', file: 'proyecto-final.pdf', size: 205123, topic: 'Proyectos' },
  {
    name: 'Prototipo de analizador léxico en AWK.pdf',
    file: 'prototipo-analizador-lexico-awk.pdf',
    size: 1999084,
    topic: 'AWK',
  },
  {
    name: 'Proyecto 1 - Rompe Hielo.pptx',
    file: 'proyecto-1-rompe-hielo.pptx',
    size: 1017505,
    topic: 'Proyectos',
  },
  {
    name: 'Puntos basicos para un ENSAYO.pdf',
    file: 'puntos-basicos-ensayo.pdf',
    size: 213777,
    topic: 'Ensayo',
  },
  {
    name: 'RETO_PROGRAMACION_feb2026.pptx',
    file: 'reto-programacion-feb2026.pptx',
    size: 155198,
    topic: 'Programación',
  },
  {
    name: 'Requisitos para la contratacion.pdf',
    file: 'requisitos-contratacion.pdf',
    size: 166898,
    topic: 'Proyecto final',
  },
  { name: 'Uso de Gramaticas.pdf', file: 'uso-gramaticas.pdf', size: 456718, topic: 'Gramáticas' },
];

function getFileUrl(fileName) {
  return `${PRESENTATIONS_ROOT}/${fileName}`;
}

function getExtension(fileName) {
  return fileName.split('.').pop()?.toUpperCase() || 'ARCHIVO';
}

function isPdf(fileName) {
  return fileName.toLowerCase().endsWith('.pdf');
}

function formatBytes(bytes) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

const Presentations = () => {
  const [selected, setSelected] = React.useState(presentations[0]);
  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [selected, query]);

  const filteredPresentations = presentations.filter((item) => {
    const text = `${item.name} ${item.topic}`.toLowerCase();
    return text.includes(query.trim().toLowerCase());
  });

  const selectedUrl = getFileUrl(selected.file);

  return (
    <div className="mx-auto max-w-7xl space-y-6 fade-in">
      <section className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6b2132]">
              Material de clase
            </p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">Presentaciones</h2>
            <p className="mt-3 max-w-3xl leading-7 text-gray-600">
              Consulta los PDF directamente en la página y descarga las presentaciones de PowerPoint
              para abrirlas en tu equipo.
            </p>
          </div>
          <a
            href={FULL_PACKAGE_URL}
            download="archivostcyc.zip"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#6b2132] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#541827]"
          >
            <i data-lucide="archive" className="h-4 w-4"></i>
            Descargar paquete completo
          </a>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[360px_minmax(0,1fr)]">
        <aside className="rounded-2xl bg-white p-5 shadow-sm">
          <label className="relative block">
            <span className="sr-only">Buscar presentaciones</span>
            <i
              data-lucide="search"
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
            ></i>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar por tema o archivo..."
              className="w-full rounded-lg border border-gray-300 py-3 pl-12 pr-4 outline-none transition focus:border-[#6b2132] focus:ring-2 focus:ring-[#6b2132]/20"
            />
          </label>

          <div className="mt-5 max-h-[620px] space-y-2 overflow-y-auto pr-1">
            {filteredPresentations.map((item) => {
              const active = item.name === selected.name;

              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setSelected(item)}
                  className={`w-full rounded-xl border p-4 text-left transition ${
                    active
                      ? 'border-[#1f4f46] bg-[#1f4f46]/10'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <span className="flex items-start gap-3">
                    <span
                      className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${
                        isPdf(item.name) ? 'bg-red-50 text-red-700' : 'bg-[#6b2132]/10 text-[#6b2132]'
                      }`}
                    >
                      <i data-lucide={isPdf(item.name) ? 'file-text' : 'presentation'} className="h-5 w-5"></i>
                    </span>
                    <span className="min-w-0">
                      <span className="block break-words font-bold text-gray-900">{item.name}</span>
                      <span className="mt-1 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                        {item.topic} · {getExtension(item.name)} · {formatBytes(item.size)}
                      </span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        <main className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <div className="border-b border-gray-200 p-5">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1f4f46]">
                  {selected.topic}
                </p>
                <h3 className="mt-1 break-words text-2xl font-bold text-gray-900">{selected.name}</h3>
                <p className="mt-1 text-sm text-gray-500">
                  {getExtension(selected.name)} · {formatBytes(selected.size)}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {isPdf(selected.name) && (
                  <a
                    href={selectedUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
                  >
                    <i data-lucide="external-link" className="h-4 w-4"></i>
                    Abrir
                  </a>
                )}
                <a
                  href={selectedUrl}
                  download={selected.name}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#6b2132] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#541827]"
                >
                  <i data-lucide="download" className="h-4 w-4"></i>
                  Descargar
                </a>
              </div>
            </div>
          </div>

          {isPdf(selected.name) ? (
            <iframe
              title={`Vista previa de ${selected.name}`}
              src={selectedUrl}
              className="h-[680px] w-full bg-gray-100"
            />
          ) : (
            <div className="flex min-h-[520px] flex-col items-center justify-center bg-gray-50 p-8 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6b2132]/10 text-[#6b2132]">
                <i data-lucide="presentation" className="h-8 w-8"></i>
              </span>
              <h4 className="mt-5 text-xl font-bold text-gray-900">
                Esta presentación se descarga para abrirse en PowerPoint
              </h4>
              <p className="mt-2 max-w-md leading-7 text-gray-600">
                Los archivos PPT y PPTX no tienen visor nativo confiable dentro del navegador.
                Para mantenerlo simple y estable, descárgalos desde aquí.
              </p>
              <a
                href={selectedUrl}
                download={selected.name}
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#6b2132] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#541827]"
              >
                <i data-lucide="download" className="h-4 w-4"></i>
                Descargar presentación
              </a>
            </div>
          )}
        </main>
      </section>
    </div>
  );
};

export default Presentations;
