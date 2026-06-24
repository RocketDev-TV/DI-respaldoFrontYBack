import React from 'react';

const GUIDE_ROOT = '/descargas/guias/didacmax';
const IMAGE_ROOT = `${GUIDE_ROOT}/imagenes`;
const DDMC_DOWNLOAD = '/descargas/paquetes/DDMC.zip';
const DOSBOX_DOWNLOAD = 'https://www.dosbox.com/download.php?main=1';

const sections = [
  { id: 'antes-de-empezar', label: 'Antes de empezar', icon: 'circle-check-big' },
  { id: 'instalar-dosbox', label: '1. Instalar DOSBox', icon: 'monitor-down' },
  { id: 'descargar-archivos', label: '2. Descargar archivos', icon: 'download' },
  { id: 'preparar-carpeta', label: '3. Preparar la carpeta', icon: 'folder-open' },
  { id: 'montar-unidad', label: '4. Montar la unidad', icon: 'terminal' },
  { id: 'abrir-manual', label: '5. Abrir DIDACMAX', icon: 'book-open' },
  { id: 'realizar-practica', label: '6. Realizar la práctica', icon: 'clipboard-check' },
  { id: 'consultar-reporte', label: '7. Consultar el reporte', icon: 'file-search' },
];

function DownloadLink({ href, icon, title, description, external = false, muted = false }) {
  return (
    <a
      href={href}
      download={external ? undefined : true}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={`group flex items-start gap-4 rounded-xl border p-4 transition ${
        muted
          ? 'border-gray-200 bg-gray-50 hover:border-gray-300'
          : 'border-[#6b2132]/20 bg-[#6b2132]/5 hover:border-[#6b2132]/50 hover:bg-[#6b2132]/10'
      }`}
    >
      <span
        className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${
          muted ? 'bg-white text-gray-600' : 'bg-[#6b2132] text-white'
        }`}
      >
        <i data-lucide={icon} className="h-5 w-5"></i>
      </span>
      <span className="min-w-0">
        <span className="flex items-center gap-2 font-bold text-gray-900">
          {title}
          {external && <i data-lucide="external-link" className="h-3.5 w-3.5"></i>}
        </span>
        <span className="mt-1 block text-sm leading-5 text-gray-600">{description}</span>
      </span>
    </a>
  );
}

function Command({ children }) {
  const [copied, setCopied] = React.useState(false);

  const copyCommand = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="mt-5 flex items-center justify-between gap-4 overflow-hidden rounded-xl bg-gray-950 px-5 py-4 text-gray-100 shadow-inner">
      <code className="overflow-x-auto font-mono text-sm">{children}</code>
      <button
        type="button"
        onClick={copyCommand}
        className="flex flex-shrink-0 items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold transition hover:bg-white/20"
      >
        <i data-lucide={copied ? 'check' : 'copy'} className="h-4 w-4"></i>
        {copied ? 'Copiado' : 'Copiar'}
      </button>
    </div>
  );
}

function Screenshot({ src, alt, caption }) {
  return (
    <figure className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
      <div className="flex min-h-48 items-center justify-center bg-[#e8e5dd] p-4 md:p-7">
        <img src={src} alt={alt} className="max-h-[420px] w-auto max-w-full object-contain shadow-md" />
      </div>
      {caption && <figcaption className="px-5 py-3 text-sm text-gray-600">{caption}</figcaption>}
    </figure>
  );
}

function GuideSection({ id, number, eyebrow, title, children }) {
  return (
    <section id={id} className="scroll-mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-9">
      <div className="flex items-start gap-4">
        {number && (
          <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#1f4f46] text-lg font-bold text-white">
            {number}
          </span>
        )}
        <div>
          {eyebrow && (
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6b2132]">{eyebrow}</p>
          )}
          <h2 className="mt-1 text-2xl font-bold text-gray-900 md:text-3xl">{title}</h2>
        </div>
      </div>
      <div className={number ? 'mt-6 md:pl-[3.75rem]' : 'mt-6'}>{children}</div>
    </section>
  );
}

const DidacmaxGuide = ({ onBack }) => {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
    document.getElementById('contentArea')?.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="mx-auto max-w-6xl space-y-8 fade-in">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#6b2132] hover:underline"
      >
        <i data-lucide="arrow-left" className="h-4 w-4"></i>
        Volver a todas las descargas
      </button>

      <header className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#6b2132] to-[#1f4f46] p-7 text-white shadow-lg md:p-11">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">Guía práctica</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
          Ejecutar DIDACMAX 2000 con DOSBox
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-white/85 md:text-lg">
          Sigue el instructivo directamente desde la página. Conservamos sus capturas originales,
          pero organizamos el procedimiento en pasos breves y verificables.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={`${GUIDE_ROOT}/Instructivo-DIDACMAX-2000-C2P.docx`}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#6b2132] transition hover:bg-gray-100"
          >
            <i data-lucide="file-down" className="h-4 w-4"></i>
            Descargar instructivo original
          </a>
          <a
            href={DDMC_DOWNLOAD}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-white/35 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/20"
          >
            <i data-lucide="archive" className="h-4 w-4"></i>
            Descargar DDMC.zip
          </a>
        </div>
      </header>

      <div className="grid items-start gap-8 lg:grid-cols-[250px_minmax(0,1fr)]">
        <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">Índice</p>
          <nav className="mt-4" aria-label="Índice de la guía">
            <ol className="space-y-1">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-[#1f4f46]/10 hover:text-[#1f4f46]"
                  >
                    <i data-lucide={section.icon} className="h-4 w-4 flex-shrink-0"></i>
                    {section.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <main className="min-w-0 space-y-8">
          <GuideSection id="antes-de-empezar" eyebrow="Preparación" title="Antes de empezar">
            <p className="max-w-3xl leading-7 text-gray-700">
              DIDACMAX 2000 es software educativo de 16 bits. Para usarlo en una computadora
              moderna debe ejecutarse dentro de DOSBox. Reserva entre 15 y 25 minutos para completar
              la preparación inicial.
            </p>
            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5 text-amber-950">
              <div className="flex items-start gap-3">
                <i data-lucide="shield-alert" className="mt-0.5 h-5 w-5 flex-shrink-0"></i>
                <div>
                  <h3 className="font-bold">Trabaja dentro de DOSBox</h3>
                  <p className="mt-1 text-sm leading-6">
                    No intentes abrir directamente los ejecutables históricos desde Windows.
                    Descomprime el paquete y utiliza DOSBox como entorno aislado.
                  </p>
                </div>
              </div>
            </div>
          </GuideSection>

          <GuideSection
            id="instalar-dosbox"
            number="1"
            eyebrow="Herramienta necesaria"
            title="Instala DOSBox"
          >
            <p className="leading-7 text-gray-700">
              Descarga DOSBox desde su sitio oficial, instala la versión correspondiente a tu
              sistema operativo y confirma que aparezca en el escritorio o en el menú de aplicaciones.
            </p>
            <div className="mt-6 max-w-xl">
              <DownloadLink
                href={DOSBOX_DOWNLOAD}
                external
                icon="monitor-down"
                title="Descargar DOSBox"
                description="Abre la página oficial de descargas de DOSBox."
              />
            </div>
            <Screenshot
              src={`${IMAGE_ROOT}/paso-4.png`}
              alt="Acceso a DOSBox desde el escritorio de Windows"
              caption="Captura original del instructivo: acceso a DOSBox desde el escritorio."
            />
          </GuideSection>

          <GuideSection
            id="descargar-archivos"
            number="2"
            eyebrow="Material de trabajo"
            title="Descarga los archivos de DIDACMAX"
          >
            <p className="leading-7 text-gray-700">
              Para seguir esta versión de la práctica utiliza el paquete completo DDMC. También
              puedes conservar el documento original como referencia fuera de línea.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <DownloadLink
                href={DDMC_DOWNLOAD}
                icon="archive"
                title="DDMC.zip"
                description="Paquete completo disponible: runtime, compilador, manual, fuentes, imágenes y ejemplos."
              />
              <DownloadLink
                href={`${GUIDE_ROOT}/Instructivo-DIDACMAX-2000-C2P.docx`}
                icon="file-text"
                title="Instructivo DOCX"
                description="Documento original con todas las capturas utilizadas en esta guía."
                muted
              />
            </div>
            <p className="mt-5 text-sm leading-6 text-gray-500">
              El instructivo también menciona <strong>C2P.zip</strong>, pero ese paquete específico
              aún no forma parte de los archivos proporcionados al sitio. DDMC.zip sí está disponible
              y permite explorar DIDACMAX y su manual.
            </p>
            <Screenshot
              src={`${IMAGE_ROOT}/paso-17.png`}
              alt="Listado original de archivos para la práctica C2P"
              caption="Referencia original: el paquete C2P contiene seis archivos para la evaluación."
            />
          </GuideSection>

          <GuideSection
            id="preparar-carpeta"
            number="3"
            eyebrow="En Windows"
            title="Prepara la carpeta DDMC"
          >
            <ol className="space-y-3 text-gray-700">
              <li className="flex gap-3 leading-7">
                <strong className="text-[#1f4f46]">1.</strong>
                Crea una carpeta llamada <code className="font-mono font-bold">DDMC</code> en un lugar
                fácil de localizar.
              </li>
              <li className="flex gap-3 leading-7">
                <strong className="text-[#1f4f46]">2.</strong>
                Descomprime dentro de ella el archivo <code className="font-mono font-bold">DDMC.zip</code>.
              </li>
              <li className="flex gap-3 leading-7">
                <strong className="text-[#1f4f46]">3.</strong>
                Verifica que aparezcan archivos como <code className="font-mono">ADMIN.EXE</code>,
                <code className="font-mono"> AYUDA.EXE</code> y <code className="font-mono">MANUAL.OUT</code>.
              </li>
            </ol>
            <Screenshot
              src={`${IMAGE_ROOT}/paso-10.png`}
              alt="Listado de archivos de la carpeta DIDACMAX"
              caption="La carpeta debe contener los programas y materiales ya descomprimidos."
            />
          </GuideSection>

          <GuideSection
            id="montar-unidad"
            number="4"
            eyebrow="Dentro de DOSBox"
            title="Monta la carpeta como unidad C"
          >
            <p className="leading-7 text-gray-700">
              Abre DOSBox. Sustituye la ruta del ejemplo por la ubicación real de tu carpeta DDMC.
              El instructivo original monta todo el disco, pero montar únicamente la carpeta de la
              práctica es más sencillo y limita el acceso del entorno.
            </p>
            <Command>{'mount c "C:\\DDMC"'}</Command>
            <Command>{'c:'}</Command>
            <Command>{'dir'}</Command>
            <Screenshot
              src={`${IMAGE_ROOT}/paso-8.png`}
              alt="Comando mount ejecutado dentro de DOSBox"
              caption="DOSBox confirma cuando la carpeta queda montada como unidad C."
            />
          </GuideSection>

          <GuideSection
            id="abrir-manual"
            number="5"
            eyebrow="Primera ejecución"
            title="Abre el manual de DIDACMAX"
          >
            <p className="leading-7 text-gray-700">
              El paquete conservado en este sitio incluye el manual ya compilado. Ejecútalo con el
              runtime ADMIN. Navega con <strong>Tab</strong>, entra con <strong>Enter</strong>, cambia
              de página con <strong>PgUp/PgDn</strong> y regresa con <strong>Esc</strong>.
            </p>
            <Command>{'admin manual.out'}</Command>
            <Screenshot
              src={`${IMAGE_ROOT}/paso-11.png`}
              alt="Pantalla del manual de DIDACMAX 2000"
              caption="Portada del manual ejecutándose dentro de DOSBox."
            />
          </GuideSection>

          <GuideSection
            id="realizar-practica"
            number="6"
            eyebrow="Cuando tengas C2P"
            title="Realiza la evaluación"
          >
            <p className="leading-7 text-gray-700">
              Si el docente te proporciona la carpeta C2P, móntala de la misma forma y ejecuta el
              programa. Escribe un nombre corto, responde las 20 preguntas y evita dejar respuestas
              en blanco: el sistema las registra como incorrectas.
            </p>
            <Command>{'c2p'}</Command>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <Screenshot
                src={`${IMAGE_ROOT}/paso-26.png`}
                alt="Presentación de la evaluación C2P en DOSBox"
                caption="Inicio de la evaluación."
              />
              <Screenshot
                src={`${IMAGE_ROOT}/paso-25.png`}
                alt="Pregunta de la evaluación C2P"
                caption="Ejemplo de reactivo dentro de C2P."
              />
            </div>
            <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50 p-5 text-blue-950">
              <p className="text-sm leading-6">
                La versión histórica no permite regresar a una pregunta anterior. Si necesitas
                cambiar respuestas, deberás comenzar nuevamente la evaluación.
              </p>
            </div>
          </GuideSection>

          <GuideSection
            id="consultar-reporte"
            number="7"
            eyebrow="Al terminar"
            title="Consulta el reporte de resultados"
          >
            <p className="leading-7 text-gray-700">
              C2P genera el archivo <code className="font-mono font-bold">C2P.REP</code>. Ábrelo con
              REPENC para revisar cada pregunta, tu respuesta y la respuesta correcta. Usa las
              flechas para desplazarte por el reporte.
            </p>
            <Command>{'repenc c2p.rep'}</Command>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <Screenshot
                src={`${IMAGE_ROOT}/paso-27.png`}
                alt="Resultado final de la evaluación C2P"
                caption="Pantalla de resultado al concluir la práctica."
              />
              <Screenshot
                src={`${IMAGE_ROOT}/paso-29.png`}
                alt="Reporte detallado abierto con REPENC"
                caption="El reporte permite comparar las respuestas registradas."
              />
            </div>
          </GuideSection>

          <section className="rounded-2xl bg-[#1f4f46] p-7 text-white md:p-9">
            <h2 className="text-2xl font-bold">¿Listo para comenzar?</h2>
            <p className="mt-3 max-w-2xl leading-7 text-white/80">
              Descarga el paquete completo y conserva el instructivo original por si necesitas
              consultar las capturas con mayor detalle.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={DDMC_DOWNLOAD}
                download
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#1f4f46]"
              >
                <i data-lucide="archive" className="h-4 w-4"></i>
                Descargar DDMC.zip
              </a>
              <a
                href="#antes-de-empezar"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-bold"
              >
                <i data-lucide="arrow-up" className="h-4 w-4"></i>
                Volver al inicio
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default DidacmaxGuide;
