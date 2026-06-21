--
-- PostgreSQL database dump
--

\restrict Yep03oTKUqA8KPbY4lnsd1d9OGtV6m3f0eBa8x2LJcIpouPfT0blHblIhAgjjuu

-- Dumped from database version 15.18 (Debian 15.18-1.pgdg13+1)
-- Dumped by pg_dump version 15.18 (Debian 15.18-1.pgdg13+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: TipoContenido; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."TipoContenido" AS ENUM (
    'LECCION',
    'RECURSO',
    'TAREA'
);


ALTER TYPE public."TipoContenido" OWNER TO postgres;

--
-- Name: TipoMateria; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."TipoMateria" AS ENUM (
    'COMPILADORES',
    'TEORIA_DE_LA_COMPUTACION',
    'TEORIA_DE_LENGUAJES'
);


ALTER TYPE public."TipoMateria" OWNER TO postgres;

--
-- Name: TipoVideo; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."TipoVideo" AS ENUM (
    'APRENDIZAJE',
    'ACTIVIDAD',
    'OTRO'
);


ALTER TYPE public."TipoVideo" OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Alumno; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Alumno" (
    id integer NOT NULL,
    nombre text NOT NULL,
    apellido text DEFAULT ''::text NOT NULL,
    email text NOT NULL,
    grupo text DEFAULT ''::text NOT NULL,
    password text DEFAULT ''::text NOT NULL,
    rol text DEFAULT 'ALUMNO'::text NOT NULL,
    estado text DEFAULT 'ACTIVO'::text NOT NULL
);


ALTER TABLE public."Alumno" OWNER TO postgres;

--
-- Name: Alumno_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Alumno_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Alumno_id_seq" OWNER TO postgres;

--
-- Name: Alumno_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Alumno_id_seq" OWNED BY public."Alumno".id;


--
-- Name: Asignacion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Asignacion" (
    id integer NOT NULL,
    titulo text NOT NULL,
    descripcion text DEFAULT ''::text NOT NULL,
    porcentaje integer DEFAULT 0 NOT NULL,
    periodo integer NOT NULL,
    grupo text DEFAULT ''::text NOT NULL,
    entregable boolean DEFAULT true NOT NULL,
    rubrica text DEFAULT ''::text NOT NULL,
    orden integer DEFAULT 0 NOT NULL,
    activa boolean DEFAULT true NOT NULL,
    "contenidoId" integer
);


ALTER TABLE public."Asignacion" OWNER TO postgres;

--
-- Name: Asignacion_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Asignacion_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Asignacion_id_seq" OWNER TO postgres;

--
-- Name: Asignacion_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Asignacion_id_seq" OWNED BY public."Asignacion".id;


--
-- Name: CalificacionAsignacion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."CalificacionAsignacion" (
    id integer NOT NULL,
    "asignacionId" integer NOT NULL,
    "alumnoId" integer NOT NULL,
    grupo text DEFAULT ''::text NOT NULL,
    parcial integer NOT NULL,
    calificacion integer DEFAULT 0 NOT NULL,
    observaciones text DEFAULT ''::text NOT NULL,
    "fechaCalificacion" timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public."CalificacionAsignacion" OWNER TO postgres;

--
-- Name: CalificacionAsignacion_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."CalificacionAsignacion_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."CalificacionAsignacion_id_seq" OWNER TO postgres;

--
-- Name: CalificacionAsignacion_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."CalificacionAsignacion_id_seq" OWNED BY public."CalificacionAsignacion".id;


--
-- Name: Contenido; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Contenido" (
    id integer NOT NULL,
    titulo text NOT NULL,
    descripcion text NOT NULL,
    tipo public."TipoContenido" DEFAULT 'LECCION'::public."TipoContenido" NOT NULL,
    "tipoMateria" public."TipoMateria" DEFAULT 'TEORIA_DE_LENGUAJES'::public."TipoMateria" NOT NULL,
    orden integer NOT NULL,
    url_recurso text,
    contenido text[],
    "unidadId" integer NOT NULL
);


ALTER TABLE public."Contenido" OWNER TO postgres;

--
-- Name: Contenido_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Contenido_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Contenido_id_seq" OWNER TO postgres;

--
-- Name: Contenido_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Contenido_id_seq" OWNED BY public."Contenido".id;


--
-- Name: Curso; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Curso" (
    id text NOT NULL,
    nombre text NOT NULL,
    codigo text NOT NULL,
    descripcion text NOT NULL,
    color text NOT NULL,
    proposito text,
    contenidos text[],
    "programaOficial" text
);


ALTER TABLE public."Curso" OWNER TO postgres;

--
-- Name: Entrega; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Entrega" (
    id integer NOT NULL,
    "asignacionId" integer NOT NULL,
    "alumnoId" integer NOT NULL,
    grupo text DEFAULT ''::text NOT NULL,
    parcial integer NOT NULL,
    "nombreArchivo" text NOT NULL,
    "mimeType" text DEFAULT 'application/octet-stream'::text NOT NULL,
    tamano integer DEFAULT 0 NOT NULL,
    "archivoBase64" text NOT NULL,
    estado text DEFAULT 'entregado'::text NOT NULL,
    "fechaEntrega" timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public."Entrega" OWNER TO postgres;

--
-- Name: Entrega_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Entrega_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Entrega_id_seq" OWNER TO postgres;

--
-- Name: Entrega_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Entrega_id_seq" OWNED BY public."Entrega".id;


--
-- Name: Estudiante; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Estudiante" (
    id integer NOT NULL,
    nombre text NOT NULL,
    matricula text NOT NULL,
    programa text NOT NULL,
    foto text
);


ALTER TABLE public."Estudiante" OWNER TO postgres;

--
-- Name: Estudiante_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Estudiante_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Estudiante_id_seq" OWNER TO postgres;

--
-- Name: Estudiante_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Estudiante_id_seq" OWNED BY public."Estudiante".id;


--
-- Name: Insignia; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Insignia" (
    id integer NOT NULL,
    nombre text NOT NULL,
    nivel text NOT NULL,
    descripcion text NOT NULL,
    icon text NOT NULL,
    color text NOT NULL,
    requisito integer NOT NULL
);


ALTER TABLE public."Insignia" OWNER TO postgres;

--
-- Name: Insignia_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Insignia_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insignia_id_seq" OWNER TO postgres;

--
-- Name: Insignia_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Insignia_id_seq" OWNED BY public."Insignia".id;


--
-- Name: Recurso; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Recurso" (
    id integer NOT NULL,
    tipo text NOT NULL,
    titulo text NOT NULL,
    url text NOT NULL,
    duracion text,
    tamano text,
    "cursoId" text NOT NULL
);


ALTER TABLE public."Recurso" OWNER TO postgres;

--
-- Name: Recurso_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Recurso_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Recurso_id_seq" OWNER TO postgres;

--
-- Name: Recurso_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Recurso_id_seq" OWNED BY public."Recurso".id;


--
-- Name: Rubrica; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Rubrica" (
    id integer NOT NULL,
    titulo text NOT NULL,
    criterios text NOT NULL,
    url text NOT NULL,
    periodo integer NOT NULL
);


ALTER TABLE public."Rubrica" OWNER TO postgres;

--
-- Name: Rubrica_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Rubrica_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Rubrica_id_seq" OWNER TO postgres;

--
-- Name: Rubrica_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Rubrica_id_seq" OWNED BY public."Rubrica".id;


--
-- Name: Unidad; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Unidad" (
    id integer NOT NULL,
    nombre text NOT NULL
);


ALTER TABLE public."Unidad" OWNER TO postgres;

--
-- Name: Unidad_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Unidad_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Unidad_id_seq" OWNER TO postgres;

--
-- Name: Unidad_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Unidad_id_seq" OWNED BY public."Unidad".id;


--
-- Name: VerificationCode; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."VerificationCode" (
    id text NOT NULL,
    code text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "expiresAt" timestamp(3) without time zone NOT NULL,
    "alumnoId" integer NOT NULL
);


ALTER TABLE public."VerificationCode" OWNER TO postgres;

--
-- Name: Video; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Video" (
    id integer NOT NULL,
    titulo text NOT NULL,
    descripcion text DEFAULT ''::text NOT NULL,
    "youtubeUrl" text NOT NULL,
    "youtubeId" text NOT NULL,
    tipos public."TipoVideo"[],
    publicado boolean DEFAULT true NOT NULL,
    "contenidoId" integer
);


ALTER TABLE public."Video" OWNER TO postgres;

--
-- Name: Video_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Video_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Video_id_seq" OWNER TO postgres;

--
-- Name: Video_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Video_id_seq" OWNED BY public."Video".id;


--
-- Name: _AsignacionToVideo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."_AsignacionToVideo" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_AsignacionToVideo" OWNER TO postgres;

--
-- Name: Alumno id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Alumno" ALTER COLUMN id SET DEFAULT nextval('public."Alumno_id_seq"'::regclass);


--
-- Name: Asignacion id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Asignacion" ALTER COLUMN id SET DEFAULT nextval('public."Asignacion_id_seq"'::regclass);


--
-- Name: CalificacionAsignacion id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CalificacionAsignacion" ALTER COLUMN id SET DEFAULT nextval('public."CalificacionAsignacion_id_seq"'::regclass);


--
-- Name: Contenido id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Contenido" ALTER COLUMN id SET DEFAULT nextval('public."Contenido_id_seq"'::regclass);


--
-- Name: Entrega id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Entrega" ALTER COLUMN id SET DEFAULT nextval('public."Entrega_id_seq"'::regclass);


--
-- Name: Estudiante id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Estudiante" ALTER COLUMN id SET DEFAULT nextval('public."Estudiante_id_seq"'::regclass);


--
-- Name: Insignia id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Insignia" ALTER COLUMN id SET DEFAULT nextval('public."Insignia_id_seq"'::regclass);


--
-- Name: Recurso id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Recurso" ALTER COLUMN id SET DEFAULT nextval('public."Recurso_id_seq"'::regclass);


--
-- Name: Rubrica id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Rubrica" ALTER COLUMN id SET DEFAULT nextval('public."Rubrica_id_seq"'::regclass);


--
-- Name: Unidad id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Unidad" ALTER COLUMN id SET DEFAULT nextval('public."Unidad_id_seq"'::regclass);


--
-- Name: Video id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Video" ALTER COLUMN id SET DEFAULT nextval('public."Video_id_seq"'::regclass);


--
-- Data for Name: Alumno; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Alumno" (id, nombre, apellido, email, grupo, password, rol, estado) FROM stdin;
1	Administrador	Sistema	admin@ipn.mx		105e78ed925d96254add3989290499a9:da37ef5b5c72f784c3b24df9a976562629256dd13f57bf259d6bd256ce6d11598ab939ba6f81f3d1713337b91e01876fddf16053b4e366c196cc8af1730ad55c	ADMINISTRADOR	ACTIVO
2	Moderador	Academico Uno	moderador1@ipn.mx		563186ae7497b4db92676e930e9c2605:ff0591fc4363615707f0b90bdc787fa0fbd010b91088d5b01214b32fed09945510d16a7016e7dfa9da1a519f609c8e7461567163bae0630ec7c85f44e83f8e32	MODERADOR	ACTIVO
3	Moderador	Academico Dos	moderador2@ipn.mx		335f83584c0e6005a7e8953788936262:41ceb415d7f40da35fcc0a849ef50b1b1401d942f97b053cc472a09d98ea825f8d7693f6fd9c2b4a109636d08cae769b8c3806cd9058acdbfcdc15eca2700476	MODERADOR	ACTIVO
4	Moderador	Academico Tres	moderador3@ipn.mx		539628fbaaac653584e126f3892f58f0:b6c2bacffcb337f8bc989de374200183079ee8bce92e8fe5484403b04ece7d0c1a373d91d40bdb9f70d4998eca90fa0df0478d9cc68ffc3525b98769ea9cb0e8	MODERADOR	ACTIVO
6	sara	pruebas	soportesaramgarcia@gmail.com	TC-01	b8d6dc1172bce58ddfee693b9d21eab9:87efcd160adf5ef51bca60fe633fc2462d4085085b149b757d07a865095714d11caabebc7a73210930946be5a99025db328efb3a08c9149f8c5e14db24e07314	ALUMNO	ACTIVO
7	Pruebaaa	Nueva	prueba1@gmail.com	TC-01	4c6c7342aa07c25add217938441201b9:44449432d291d3aea5128d060ace19d531b63b6d240f81274fe3cf6134a28f64e51bbdc0905a6c9fdec2355924092979ee3e6394162c709cb4a13276a6b8e2a6	ALUMNO	ACTIVO
8	Ivan	Prueba	prueba@gmail.com	TC-04	688debfe55f2cec79de82186bbbcd97d:ad191e0b6a2d05728d1978187d48379949c39b0932ebfcbaadff8cbbfece355af0c805764d4721b0c11d3be8b9f0a1c5ed7426cfa008a2346a086c1b4e981fad	ALUMNO	ACTIVO
5	Ivan	Prueba	ivangh@gmail.com	TC-03	6b014f870190398de8e9a2fe22dcfc01:0980342a889f95e498ad5dc4fb5183574be9deb0420fd3c9ba4592754c3eae3d8462a900a54af68a84c1214ae647eb91fe71a6a37060f6557ab12c8061b55559	ALUMNO	ACTIVO
\.


--
-- Data for Name: Asignacion; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Asignacion" (id, titulo, descripcion, porcentaje, periodo, grupo, entregable, rubrica, orden, activa, "contenidoId") FROM stdin;
\.


--
-- Data for Name: CalificacionAsignacion; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."CalificacionAsignacion" (id, "asignacionId", "alumnoId", grupo, parcial, calificacion, observaciones, "fechaCalificacion") FROM stdin;
\.


--
-- Data for Name: Contenido; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Contenido" (id, titulo, descripcion, tipo, "tipoMateria", orden, url_recurso, contenido, "unidadId") FROM stdin;
\.


--
-- Data for Name: Curso; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Curso" (id, nombre, codigo, descripcion, color, proposito, contenidos, "programaOficial") FROM stdin;
\.


--
-- Data for Name: Entrega; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Entrega" (id, "asignacionId", "alumnoId", grupo, parcial, "nombreArchivo", "mimeType", tamano, "archivoBase64", estado, "fechaEntrega") FROM stdin;
\.


--
-- Data for Name: Estudiante; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Estudiante" (id, nombre, matricula, programa, foto) FROM stdin;
\.


--
-- Data for Name: Insignia; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Insignia" (id, nombre, nivel, descripcion, icon, color, requisito) FROM stdin;
\.


--
-- Data for Name: Recurso; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Recurso" (id, tipo, titulo, url, duracion, tamano, "cursoId") FROM stdin;
\.


--
-- Data for Name: Rubrica; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Rubrica" (id, titulo, criterios, url, periodo) FROM stdin;
\.


--
-- Data for Name: Unidad; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Unidad" (id, nombre) FROM stdin;
\.


--
-- Data for Name: VerificationCode; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."VerificationCode" (id, code, "createdAt", "expiresAt", "alumnoId") FROM stdin;
30a38706-5089-4d68-9403-0949e5fa4c71	771229	2026-05-27 02:28:16.544	2026-05-26 20:43:16.542	7
\.


--
-- Data for Name: Video; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Video" (id, titulo, descripcion, "youtubeUrl", "youtubeId", tipos, publicado, "contenidoId") FROM stdin;
\.


--
-- Data for Name: _AsignacionToVideo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."_AsignacionToVideo" ("A", "B") FROM stdin;
\.


--
-- Name: Alumno_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Alumno_id_seq"', 8, true);


--
-- Name: Asignacion_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Asignacion_id_seq"', 1, false);


--
-- Name: CalificacionAsignacion_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."CalificacionAsignacion_id_seq"', 1, false);


--
-- Name: Contenido_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Contenido_id_seq"', 1, false);


--
-- Name: Entrega_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Entrega_id_seq"', 1, false);


--
-- Name: Estudiante_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Estudiante_id_seq"', 1, false);


--
-- Name: Insignia_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Insignia_id_seq"', 1, false);


--
-- Name: Recurso_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Recurso_id_seq"', 1, false);


--
-- Name: Rubrica_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Rubrica_id_seq"', 1, false);


--
-- Name: Unidad_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Unidad_id_seq"', 1, false);


--
-- Name: Video_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Video_id_seq"', 1, false);


--
-- Name: Alumno Alumno_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Alumno"
    ADD CONSTRAINT "Alumno_pkey" PRIMARY KEY (id);


--
-- Name: Asignacion Asignacion_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Asignacion"
    ADD CONSTRAINT "Asignacion_pkey" PRIMARY KEY (id);


--
-- Name: CalificacionAsignacion CalificacionAsignacion_asignacionId_alumnoId_parcial_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CalificacionAsignacion"
    ADD CONSTRAINT "CalificacionAsignacion_asignacionId_alumnoId_parcial_key" UNIQUE ("asignacionId", "alumnoId", parcial);


--
-- Name: CalificacionAsignacion CalificacionAsignacion_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CalificacionAsignacion"
    ADD CONSTRAINT "CalificacionAsignacion_pkey" PRIMARY KEY (id);


--
-- Name: Contenido Contenido_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Contenido"
    ADD CONSTRAINT "Contenido_pkey" PRIMARY KEY (id);


--
-- Name: Curso Curso_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Curso"
    ADD CONSTRAINT "Curso_pkey" PRIMARY KEY (id);


--
-- Name: Entrega Entrega_asignacionId_alumnoId_parcial_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Entrega"
    ADD CONSTRAINT "Entrega_asignacionId_alumnoId_parcial_key" UNIQUE ("asignacionId", "alumnoId", parcial);


--
-- Name: Entrega Entrega_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Entrega"
    ADD CONSTRAINT "Entrega_pkey" PRIMARY KEY (id);


--
-- Name: Estudiante Estudiante_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Estudiante"
    ADD CONSTRAINT "Estudiante_pkey" PRIMARY KEY (id);


--
-- Name: Insignia Insignia_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Insignia"
    ADD CONSTRAINT "Insignia_pkey" PRIMARY KEY (id);


--
-- Name: Recurso Recurso_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Recurso"
    ADD CONSTRAINT "Recurso_pkey" PRIMARY KEY (id);


--
-- Name: Rubrica Rubrica_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Rubrica"
    ADD CONSTRAINT "Rubrica_pkey" PRIMARY KEY (id);


--
-- Name: Unidad Unidad_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Unidad"
    ADD CONSTRAINT "Unidad_pkey" PRIMARY KEY (id);


--
-- Name: VerificationCode VerificationCode_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."VerificationCode"
    ADD CONSTRAINT "VerificationCode_pkey" PRIMARY KEY (id);


--
-- Name: Video Video_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Video"
    ADD CONSTRAINT "Video_pkey" PRIMARY KEY (id);


--
-- Name: Alumno_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Alumno_email_key" ON public."Alumno" USING btree (email);


--
-- Name: Curso_codigo_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Curso_codigo_key" ON public."Curso" USING btree (codigo);


--
-- Name: Estudiante_matricula_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Estudiante_matricula_key" ON public."Estudiante" USING btree (matricula);


--
-- Name: VerificationCode_alumnoId_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "VerificationCode_alumnoId_idx" ON public."VerificationCode" USING btree ("alumnoId");


--
-- Name: _AsignacionToVideo_AB_unique; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "_AsignacionToVideo_AB_unique" ON public."_AsignacionToVideo" USING btree ("A", "B");


--
-- Name: _AsignacionToVideo_B_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "_AsignacionToVideo_B_index" ON public."_AsignacionToVideo" USING btree ("B");


--
-- Name: Asignacion Asignacion_contenidoId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Asignacion"
    ADD CONSTRAINT "Asignacion_contenidoId_fkey" FOREIGN KEY ("contenidoId") REFERENCES public."Contenido"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: CalificacionAsignacion CalificacionAsignacion_alumnoId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CalificacionAsignacion"
    ADD CONSTRAINT "CalificacionAsignacion_alumnoId_fkey" FOREIGN KEY ("alumnoId") REFERENCES public."Alumno"(id) ON DELETE CASCADE;


--
-- Name: CalificacionAsignacion CalificacionAsignacion_asignacionId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CalificacionAsignacion"
    ADD CONSTRAINT "CalificacionAsignacion_asignacionId_fkey" FOREIGN KEY ("asignacionId") REFERENCES public."Asignacion"(id) ON DELETE CASCADE;


--
-- Name: Contenido Contenido_unidadId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Contenido"
    ADD CONSTRAINT "Contenido_unidadId_fkey" FOREIGN KEY ("unidadId") REFERENCES public."Unidad"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Entrega Entrega_alumnoId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Entrega"
    ADD CONSTRAINT "Entrega_alumnoId_fkey" FOREIGN KEY ("alumnoId") REFERENCES public."Alumno"(id) ON DELETE CASCADE;


--
-- Name: Entrega Entrega_asignacionId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Entrega"
    ADD CONSTRAINT "Entrega_asignacionId_fkey" FOREIGN KEY ("asignacionId") REFERENCES public."Asignacion"(id) ON DELETE CASCADE;


--
-- Name: Recurso Recurso_cursoId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Recurso"
    ADD CONSTRAINT "Recurso_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES public."Curso"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: VerificationCode VerificationCode_alumnoId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."VerificationCode"
    ADD CONSTRAINT "VerificationCode_alumnoId_fkey" FOREIGN KEY ("alumnoId") REFERENCES public."Alumno"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Video Video_contenidoId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Video"
    ADD CONSTRAINT "Video_contenidoId_fkey" FOREIGN KEY ("contenidoId") REFERENCES public."Contenido"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: _AsignacionToVideo _AsignacionToVideo_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_AsignacionToVideo"
    ADD CONSTRAINT "_AsignacionToVideo_A_fkey" FOREIGN KEY ("A") REFERENCES public."Asignacion"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _AsignacionToVideo _AsignacionToVideo_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_AsignacionToVideo"
    ADD CONSTRAINT "_AsignacionToVideo_B_fkey" FOREIGN KEY ("B") REFERENCES public."Video"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

\unrestrict Yep03oTKUqA8KPbY4lnsd1d9OGtV6m3f0eBa8x2LJcIpouPfT0blHblIhAgjjuu

