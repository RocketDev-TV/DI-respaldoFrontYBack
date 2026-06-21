// pages/UnidadPage.jsx
// Recibe un objeto de CONTENIDOS_MOCK y renderiza su array `contenido[]`
// Cada elemento del array puede ser:
//   - string con URL de Google Drive → imagen
//   - string de texto                → párrafo / cita / bullets / título de sección
//
// Props:
//   contenido  — objeto de CONTENIDOS_MOCK (con campo contenido[])

import React, { useState, useEffect, useRef } from 'react';

// ── Helpers ──────────────────────────────────────────────────────────────────
const isGoogleDriveUrl = (str) =>
    typeof str === 'string' && str.includes('drive.google.com');

const toPreviewUrl = (url) => {
    const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    return match ? `https://drive.google.com/file/d/${match[1]}/preview` : url;
};

const hasBullets = (text) => /^[\t ]*[•\-–]|\t[A-Z]/m.test(text);

// ── Hook: fade-in al entrar al viewport ──────────────────────────────────────
const useFadeIn = () => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setVisible(true); },
            { threshold: 0.05 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    return { ref, visible };
};

// ── Bloque: Imagen desde Google Drive ────────────────────────────────────────
const ImageBloque = ({ url, figureNum }) => {
    const { ref, visible } = useFadeIn();
    const [loaded, setLoaded] = useState(false);
    const error = false;

    return (
        <div
            ref={ref}
            className={`my-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
            <figure className="rounded-2xl overflow-hidden border border-green-100 shadow-md bg-white">
                {!error ? (
                    <>
                        {!loaded && (
                            <div className="flex flex-col items-center justify-center h-44 bg-green-50 gap-3 animate-pulse">
                                <svg className="w-8 h-8 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className="text-xs text-green-400">Cargando figura {figureNum}…</span>
                            </div>
                        )}
                        <iframe
                            src={toPreviewUrl(url)}
                            className="w-full h-72 sm:h-96"
                            allow="autoplay"
                            title={`Figura ${figureNum}`}
                            onLoad={() => setLoaded(true)}
                        />
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center h-32 text-gray-400 gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-xs">Imagen no disponible</span>
                    </div>
                )}
                <figcaption className="px-4 py-2 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-xs text-gray-400 italic">Figura {figureNum}</span>
                    <a href={url} target="_blank" rel="noopener noreferrer"
                        className="text-xs text-green-600 hover:text-green-800 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Ver en Drive
                    </a>
                </figcaption>
            </figure>
        </div>
    );
};

// ── Helper: renderiza negritas **texto** e itálicas *texto* dentro de un string ─
const renderInline = (text) => {
    // Procesa **negrita** y *itálica* alternadamente
    const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
    return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="font-semibold text-gray-900">{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*')) {
            return <em key={i}>{part.slice(1, -1)}</em>;
        }
        return part;
    });
};

// ── Bloque: Texto (párrafos, citas, bullets, títulos internos) ────────────────
const TextoBloque = ({ texto }) => {
    const { ref, visible } = useFadeIn();
    const fade = `transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`;

    // Divide el texto en párrafos por doble salto de línea
    const paragraphs = texto.trim().split(/\n{2,}/);

    const renderParagraph = (para, i) => {
        const trimmed = para.trim();
        if (!trimmed) return null;

        // ── Encabezado Markdown: ## Título (solo o con contenido debajo) ────────
        if (/^#{1,3} /.test(trimmed)) {
            const firstNewline = trimmed.indexOf('\n');
            const titleLine = firstNewline === -1 ? trimmed : trimmed.slice(0, firstNewline);
            const restText = firstNewline === -1 ? '' : trimmed.slice(firstNewline + 1).trim();
            const level = titleLine.match(/^(#{1,3}) /)[1].length;
            const title = titleLine.replace(/^#{1,3} /, '').trim();
            const styles = [
                'text-xl font-bold text-green-900 mt-8 mb-3 pb-1 border-b border-green-100',
                'text-base font-bold text-green-800 mt-6 mb-2 flex items-center gap-2',
                'text-sm font-bold text-green-700 mt-4 mb-1 uppercase tracking-wide',
            ][level - 1];
            return (
                <div key={i}>
                    <div className={styles}>
                        {level === 2 && <span className="w-1 h-5 bg-green-400 rounded-full inline-block shrink-0" />}
                        {renderInline(title)}
                    </div>
                    {restText && renderParagraph(restText, `${i}-body`)}
                </div>
            );
        }

        // ── Separador horizontal: --- ─────────────────────────────────────────
        if (/^-{3,}$/.test(trimmed)) {
            return <hr key={i} className="my-6 border-gray-200" />;
        }

        // ── Cita Markdown: > texto ────────────────────────────────────────────
        if (trimmed.startsWith('> ') || trimmed.startsWith('>')) {
            const citaText = trimmed.replace(/^> ?/gm, '').trim();
            return (
                <blockquote key={i} className="my-4 border-l-4 border-green-500 bg-green-50 rounded-r-2xl px-5 py-4">
                    <p className="text-gray-700 italic text-sm leading-relaxed">{renderInline(citaText)}</p>
                </blockquote>
            );
        }

        // ── Cita estilo original: empieza con " ───────────────────────────────
        if (trimmed.startsWith('"') || trimmed.startsWith('\u201c')) {
            const lines = trimmed.split('\n');
            const fuente = lines.find(
                (l) => l.startsWith('Fuente:') || (!l.startsWith('Al aplicar') && l.startsWith('Fuente')),
            );
            const cita = lines.filter(l => !l.startsWith('Fuente:')).join(' ').trim();
            return (
                <blockquote key={i} className="my-4 border-l-4 border-green-500 bg-green-50 rounded-r-2xl px-5 py-4">
                    <p className="text-gray-700 italic text-sm leading-relaxed">{cita}</p>
                    {fuente && (
                        <p className="text-xs text-green-700 mt-2 font-semibold">
                            — {fuente.replace('Fuente:', '').trim()}
                        </p>
                    )}
                </blockquote>
            );
        }

        // ── Lista ordenada Markdown: 1. item ──────────────────────────────────
        if (/^\d+\. /.test(trimmed)) {
            const lines = trimmed.split('\n').filter(Boolean);
            const titleLines = [];
            const listLines = [];
            let inList = false;

            lines.forEach(line => {
                if (/^\d+\. /.test(line.trim())) {
                    inList = true;
                    listLines.push(line.replace(/^\d+\. /, '').trim());
                } else if (!inList) {
                    titleLines.push(line.trim());
                } else {
                    // línea de continuación del ítem anterior
                    if (listLines.length > 0) {
                        listLines[listLines.length - 1] += ' ' + line.trim();
                    }
                }
            });

            return (
                <div key={i} className="my-4">
                    {titleLines.length > 0 && (
                        <p className="font-semibold text-gray-800 text-sm mb-3">{renderInline(titleLines.join(' '))}</p>
                    )}
                    <ol className="space-y-2.5 list-none">
                        {listLines.map((item, li) => {
                            const colonIdx = item.indexOf(':');
                            const hasTerm = colonIdx > 0 && colonIdx < 40 && /\*\*/.test(item.slice(0, colonIdx + 1));
                            return (
                                <li key={li} className="flex gap-3 items-start bg-gray-50 rounded-xl px-4 py-2.5 border border-gray-100">
                                    <span className="shrink-0 w-6 h-6 rounded-full bg-green-600 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                                        {li + 1}
                                    </span>
                                    <span className="text-gray-700 text-sm leading-relaxed">{renderInline(item)}</span>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            );
        }

        // ── Bullets Markdown (- item) o estilo original (• – \t) ─────────────
        const isMarkdownBullet = /^[\-\*] /.test(trimmed) || trimmed.split('\n').some(l => /^[\-\*] /.test(l.trim()));
        if (isMarkdownBullet || hasBullets(trimmed)) {
            const lines = trimmed.split('\n').filter(Boolean);
            const titleLines = [];
            const bulletLines = [];
            let inBullets = false;

            lines.forEach(line => {
                const isMdBullet = /^[\-\*] /.test(line.trim());
                const isOldBullet = /^[\t ]*[•\-–]/.test(line) || (/^\t/.test(line) && inBullets);
                if (isMdBullet || isOldBullet) {
                    inBullets = true;
                    bulletLines.push(
                        line.replace(/^[\-\*] /, '').replace(/^[\t ]*[•\-–]\s*/, '').replace(/^\t/, '').trim()
                    );
                } else if (!inBullets) {
                    titleLines.push(line.trim());
                }
            });

            const titleText = titleLines.join(' ').trim();
            const isSectionTitle = titleText.length > 0 && titleText === titleText.toUpperCase() && titleText.length < 60;

            return (
                <div key={i} className="my-4">
                    {titleText && (
                        isSectionTitle ? (
                            <h3 className="text-base font-bold text-green-800 mb-3 flex items-center gap-2">
                                <span className="w-1 h-5 bg-green-400 rounded-full inline-block shrink-0" />
                                {titleText}
                            </h3>
                        ) : (
                            <p className="font-semibold text-gray-800 text-sm mb-3">{renderInline(titleText)}</p>
                        )
                    )}
                    <ul className="space-y-2.5">
                        {bulletLines.map((b, bi) => {
                            const colonIdx = b.indexOf(':');
                            const hasTerm = colonIdx > 0 && colonIdx < 30;
                            return (
                                <li key={bi} className="flex gap-3 items-start bg-gray-50 rounded-xl px-4 py-2.5 border border-gray-100">
                                    <span className="mt-1 w-2 h-2 rounded-full bg-green-500 shrink-0" />
                                    <span className="text-gray-700 text-sm leading-relaxed">
                                        {hasTerm ? (
                                            <>
                                                <strong className="text-gray-900">{b.slice(0, colonIdx + 1)}</strong>
                                                {renderInline(b.slice(colonIdx + 1))}
                                            </>
                                        ) : renderInline(b)}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );
        }

        // ── Párrafo con posible título de sección en primera línea ────────────
        const lines = trimmed.split('\n');
        const firstLine = lines[0].trim();
        const rest = lines.slice(1).join(' ').trim();
        const isAllCaps = firstLine === firstLine.toUpperCase() && /[A-ZÁÉÍÓÚÑ]{3,}/.test(firstLine);
        const looksLikeTitle =
            firstLine.length < 80 &&
            !firstLine.endsWith('.') &&
            !firstLine.endsWith(',') &&
            (rest.length > 0 || isAllCaps);

        if (looksLikeTitle) {
            return (
                <div key={i} className="my-5">
                    <h3 className="text-base font-bold text-green-800 mb-1.5 flex items-center gap-2">
                        <span className="w-1 h-5 bg-green-400 rounded-full inline-block" />
                        {renderInline(firstLine)}
                    </h3>
                    {rest && <p className="text-gray-700 text-sm leading-relaxed pl-3">{renderInline(rest)}</p>}
                </div>
            );
        }

        // ── Párrafo normal ────────────────────────────────────
        return (
            <p key={i} className="text-gray-700 text-sm leading-relaxed my-3">
                {renderInline(trimmed.split('\n').join(' '))}
            </p>
        );
    };

    return (
        <div ref={ref} className={`${fade}`}>
            {paragraphs.map(renderParagraph)}
        </div>
    );
};

// ── Componente principal ──────────────────────────────────────────────────────
const UnidadPage = ({ contenido, onBack, onNextSection, nextSectionLabel }) => {
    const [progreso, setProgreso] = useState(0);

    // ✅ Scroll al contentArea al montar
    useEffect(() => {
        const timer = setTimeout(() => {
            const contentArea = document.getElementById('contentArea');
            if (contentArea) {
                contentArea.scrollTop = 0;
            }
        }, 50);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const el = document.documentElement;
            const total = el.scrollHeight - el.clientHeight;
            setProgreso(total > 0 ? Math.round((el.scrollTop / total) * 100) : 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!contenido?.contenido) {
        return (
            <div className="flex items-center justify-center min-h-screen text-gray-400 text-sm">
                No hay contenido disponible para esta lección.
            </div>
        );
    }

    const items = contenido.contenido;
    const numFiguras = items.filter(isGoogleDriveUrl).length;
    const numSecciones = items.filter(i => !isGoogleDriveUrl(i)).length;
    const videos = contenido.videos || [];

    const tipoNormalizado = typeof contenido.tipo === 'string'
        ? contenido.tipo.toLowerCase()
        : '';

    const tipoBadge = {
        leccion: { label: 'Lección', bg: 'bg-blue-100 text-blue-700' },
        recurso: { label: 'Recurso', bg: 'bg-yellow-100 text-yellow-700' },
        tarea: { label: 'Tarea', bg: 'bg-red-100 text-red-700' },
    }[tipoNormalizado] ?? { label: contenido.tipo, bg: 'bg-gray-100 text-gray-600' };

    let figureCounter = 0;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* ── Barra de progreso ── */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
                <div
                    className="h-full bg-green-600 transition-all duration-150 ease-out rounded-r-full"
                    style={{ width: `${progreso}%` }}
                />
            </div>

            {/* ── Header sticky ── */}
            <header className="sticky top-1 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-3">
                    {onBack && (
                        <button
                            onClick={onBack}
                            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-green-700 transition-colors shrink-0 font-medium"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            <span className="hidden sm:inline">Volver</span>
                        </button>
                    )}
                    <div className="h-4 w-px bg-gray-200 hidden sm:block" />
                    <div className="flex-1 min-w-0">
                        <p className="text-xs text-green-700 font-semibold truncate leading-none mb-0.5">
                            {contenido.unidad?.nombre}
                        </p>
                        <p className="text-sm font-bold text-gray-800 truncate leading-tight">
                            {contenido.titulo}
                        </p>
                    </div>
                    <span className={`shrink-0 text-xs font-semibold px-2.5 py-0.5 rounded-full ${tipoBadge.bg}`}>
                        {tipoBadge.label}
                    </span>
                    <span className="shrink-0 text-xs text-gray-400 tabular-nums hidden sm:block w-8 text-right">
                        {progreso}%
                    </span>
                </div>
            </header>

            {/* ── Body ── */}
            <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
                {/* Hero */}
                <div className="mb-10 rounded-2xl bg-gradient-to-br from-green-700 via-green-800 to-green-900 p-7 sm:p-10 text-white shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-56 h-56 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/4 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-36 h-36 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/4 pointer-events-none" />

                    <div className="relative">
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-white/20">
                                {tipoBadge.label}
                            </span>
                            <span className="text-green-300 text-xs">{contenido.unidad?.nombre}</span>
                        </div>

                        <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-3">
                            {contenido.titulo}
                        </h1>
                        <p className="text-green-200 text-sm leading-relaxed max-w-xl">
                            {contenido.descripcion}
                        </p>

                        <div className="flex flex-wrap gap-4 mt-6">
                            <div className="flex items-center gap-1.5 text-green-200 text-xs">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                                {numSecciones} sección{numSecciones !== 1 ? 'es' : ''}
                            </div>
                            {numFiguras > 0 && (
                                <div className="flex items-center gap-1.5 text-green-200 text-xs">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
                                    </svg>
                                    {numFiguras} figura{numFiguras !== 1 ? 's' : ''}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Bloques de contenido */}
                <div>
                    {items.map((item, index) => {
                        if (isGoogleDriveUrl(item)) {
                            figureCounter++;
                            return <ImageBloque key={index} url={item} figureNum={figureCounter} />;
                        }
                        return <TextoBloque key={index} texto={item} />;
                    })}
                </div>

                {videos.length > 0 && (
                    <section className="mt-12">
                        <div className="flex items-center justify-between gap-3 mb-5">
                            <div>
                                <p className="text-xs uppercase tracking-[0.25em] text-red-500 font-semibold">
                                    Videos
                                </p>
                                <h2 className="text-2xl font-bold text-gray-900">
                                    Material audiovisual del tema
                                </h2>
                            </div>
                            <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
                                {videos.length} recurso{videos.length !== 1 ? 's' : ''}
                            </span>
                        </div>

                        <div className="grid gap-5">
                            {videos.map((video) => (
                                <article key={video.id} className="rounded-2xl border border-red-100 bg-white shadow-sm overflow-hidden">
                                    <div className="aspect-video bg-black">
                                        <iframe
                                            src={`https://www.youtube.com/embed/${video.youtubeId}`}
                                            title={video.titulo}
                                            className="w-full h-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                    <div className="p-5">
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {(video.tipos || []).map((tipo) => (
                                                <span
                                                    key={tipo}
                                                    className="rounded-full bg-red-50 px-3 py-1 text-[11px] font-semibold text-red-700"
                                                >
                                                    {tipo.toLowerCase()}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900">{video.titulo}</h3>
                                        {video.descripcion ? (
                                            <p className="mt-2 text-sm text-gray-600">{video.descripcion}</p>
                                        ) : null}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                )}

                {/* Footer */}
                <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Fin de <span className="font-semibold text-gray-600 ml-1">{contenido.titulo}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                        {onNextSection && (
                            <button
                                onClick={onNextSection}
                                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white text-sm px-6 py-2.5 rounded-xl transition-colors shadow-sm font-medium"
                            >
                                Siguiente sección
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        )}
                        {onBack && (
                            <button
                                onClick={onBack}
                                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white text-sm px-6 py-2.5 rounded-xl transition-colors shadow-sm font-medium"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Regresar al curso
                            </button>
                        )}
                    </div>
                </div>
                {onNextSection && nextSectionLabel ? (
                    <p className="mt-4 text-right text-xs text-gray-500">
                        Sigue: <span className="font-medium text-gray-700">{nextSectionLabel}</span>
                    </p>
                ) : null}
            </main>
        </div>
    );
};

export default UnidadPage;
