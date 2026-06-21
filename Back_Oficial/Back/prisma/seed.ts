import { PrismaClient, TipoVideo } from '@prisma/client';
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';
import * as vm from 'vm';

type MockContenido = {
  contenido_id: number;
  titulo: string;
  area: string;
  descripcion: string;
  tipo: string;
  orden: number;
  url_recurso: string | null;
  unidad_id: number;
  unidad: {
    unidad_id: number;
    nombre: string;
  };
  contenido: string[];
};

const prisma = new PrismaClient();

type TipoContenidoValue = 'LECCION' | 'RECURSO' | 'TAREA';
type TipoMateriaValue =
  | 'COMPILADORES'
  | 'TEORIA_DE_LA_COMPUTACION'
  | 'TEORIA_DE_LENGUAJES';

const TIPO_CONTENIDO = {
  LECCION: 'LECCION',
  RECURSO: 'RECURSO',
  TAREA: 'TAREA',
} as const satisfies Record<TipoContenidoValue, TipoContenidoValue>;

const TIPO_MATERIA = {
  COMPILADORES: 'COMPILADORES',
  TEORIA_DE_LA_COMPUTACION: 'TEORIA_DE_LA_COMPUTACION',
  TEORIA_DE_LENGUAJES: 'TEORIA_DE_LENGUAJES',
} as const satisfies Record<TipoMateriaValue, TipoMateriaValue>;

const AREA_TO_TIPO_MATERIA: Record<string, TipoMateriaValue> = {
  Compiladores: TIPO_MATERIA.COMPILADORES,
  'Teoría de la Computación.': TIPO_MATERIA.TEORIA_DE_LA_COMPUTACION,
  'Teoría de Lenguajes': TIPO_MATERIA.TEORIA_DE_LENGUAJES,
};

const UNIT_ID_OFFSET: Record<TipoMateriaValue, number> = {
  [TIPO_MATERIA.TEORIA_DE_LA_COMPUTACION]: 0,
  [TIPO_MATERIA.COMPILADORES]: 100,
  [TIPO_MATERIA.TEORIA_DE_LENGUAJES]: 200,
};

function cargarMock(): MockContenido[] {
  const posiblesRutas = [
    resolve(process.cwd(), '../Instruccional/src/data/mockGuionDidactico.js'),
    resolve(process.cwd(), '../compiladores/src/data/mockGuionDidactico.js'),
  ];
  const mockPath = posiblesRutas.find((path) => existsSync(path));

  if (!mockPath) {
    throw new Error('No se encontró mockGuionDidactico.js en las rutas esperadas.');
  }

  const rawSource = readFileSync(mockPath, 'utf8');
  const scriptSource = `
    const AreaComputacion = {
      TEORIA_DE_LENGUAJES: 'Teoría de Lenguajes',
      COMPILADORES: 'Compiladores',
      TEORIA_COMPUTACION: 'Teoría de la Computación.'
    };
  `
    .concat(
      rawSource
    .replace(/import\s+\{\s*AreaComputacion\s*\}\s+from\s+["'][^"']+["'];?/, '')
    .replace(/export\s+const\s+/g, 'const ')
    )
    .concat('\nmodule.exports = { CONTENIDOS_MOCK };');

  const sandbox = {
    module: { exports: {} as { CONTENIDOS_MOCK?: MockContenido[] } },
    exports: {},
  };

  vm.runInNewContext(scriptSource, sandbox, { filename: mockPath });

  return sandbox.module.exports.CONTENIDOS_MOCK ?? [];
}

function normalizarTipoContenido(tipo: string): TipoContenidoValue {
  switch (tipo.toUpperCase()) {
    case TIPO_CONTENIDO.RECURSO:
      return TIPO_CONTENIDO.RECURSO;
    case TIPO_CONTENIDO.TAREA:
      return TIPO_CONTENIDO.TAREA;
    case TIPO_CONTENIDO.LECCION:
    default:
      return TIPO_CONTENIDO.LECCION;
  }
}

function limpiarTexto(texto: string | null | undefined) {
  if (typeof texto !== 'string') {
    return texto ?? null;
  }

  return texto.replace(/\u0000/g, '');
}

function construirDatos(mock: MockContenido[]) {
  const unidades = new Map<number, { id: number; nombre: string }>();
  const contenidos = mock.map((item) => {
    const tipoMateria = AREA_TO_TIPO_MATERIA[item.area];

    if (!tipoMateria) {
      throw new Error(`Area no soportada en mock: ${item.area}`);
    }

    const unidadId = UNIT_ID_OFFSET[tipoMateria] + item.unidad_id;

    if (!unidades.has(unidadId)) {
      unidades.set(unidadId, {
        id: unidadId,
        nombre: item.unidad.nombre,
      });
    }

    return {
      titulo: limpiarTexto(item.titulo) ?? '',
      descripcion: limpiarTexto(item.descripcion) ?? '',
      tipo: normalizarTipoContenido(item.tipo),
      tipoMateria,
      orden: item.orden,
      url_recurso: limpiarTexto(item.url_recurso),
      contenido: item.contenido.map((bloque) => limpiarTexto(bloque) ?? ''),
      unidadId,
    };
  });

  return {
    unidades: [...unidades.values()].sort((a, b) => a.id - b.id),
    contenidos,
  };
}

async function sembrarUnidades(unidades: { id: number; nombre: string }[]) {
  for (const unidad of unidades) {
    await prisma.unidad.upsert({
      where: { id: unidad.id },
      update: { nombre: unidad.nombre },
      create: unidad,
    });
  }
}

async function sembrarContenidos(
  contenidos: {
    titulo: string;
    descripcion: string;
    tipo: TipoContenidoValue;
    tipoMateria: TipoMateriaValue;
    orden: number;
    url_recurso: string | null;
    contenido: string[];
    unidadId: number;
  }[],
) {
  await prisma.contenido.deleteMany({
    where: {
      tipoMateria: {
        in: [TIPO_MATERIA.TEORIA_DE_LA_COMPUTACION, TIPO_MATERIA.COMPILADORES],
      },
    },
  });

  await prisma.contenido.createMany({
    data: contenidos,
  });
}

async function sembrarVideosYAsignacionesDemo() {
  await prisma.asignacion.deleteMany();
  await prisma.video.deleteMany();

  const contenidosDemo = await prisma.contenido.findMany({
    where: {
      tipoMateria: {
        in: [TIPO_MATERIA.TEORIA_DE_LA_COMPUTACION, TIPO_MATERIA.COMPILADORES],
      },
    },
    orderBy: [{ tipoMateria: 'asc' }, { unidadId: 'asc' }, { orden: 'asc' }],
    take: 6,
  });

  if (contenidosDemo.length === 0) {
    return;
  }

  const registros = [
    {
      contenido: contenidosDemo[0],
      video: {
        titulo: 'Introducción guiada al tema',
        descripcion: 'Video de aprendizaje para iniciar la unidad.',
        youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        youtubeId: 'dQw4w9WgXcQ',
        tipos: [TipoVideo.APRENDIZAJE],
      },
      asignacion: {
        titulo: 'Actividad diagnóstica',
        descripcion: 'Entrega breve para validar comprensión inicial del tema.',
        porcentaje: 15,
        periodo: 1,
        grupo: '',
        entregable: true,
        rubrica: 'Rúbrica diagnóstica',
        orden: 1,
        activa: true,
      },
    },
    {
      contenido: contenidosDemo[1] ?? contenidosDemo[0],
      video: {
        titulo: 'Resolución comentada de ejercicios',
        descripcion: 'Video de apoyo para la actividad central del contenido.',
        youtubeUrl: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
        youtubeId: '9bZkp7q19f0',
        tipos: [TipoVideo.ACTIVIDAD, TipoVideo.APRENDIZAJE],
      },
      asignacion: {
        titulo: 'Práctica de aplicación',
        descripcion: 'Actividad evaluable con evidencia en archivo.',
        porcentaje: 25,
        periodo: 1,
        grupo: 'TC-01',
        entregable: true,
        rubrica: 'Rúbrica práctica',
        orden: 2,
        activa: true,
      },
    },
    {
      contenido: contenidosDemo[2] ?? contenidosDemo[0],
      video: {
        titulo: 'Revisión del caso de estudio',
        descripcion: 'Material audiovisual complementario para profundizar el tema.',
        youtubeUrl: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
        youtubeId: '3JZ_D3ELwOQ',
        tipos: [TipoVideo.OTRO],
      },
      asignacion: {
        titulo: 'Análisis del caso',
        descripcion: 'Entrega escrita con observaciones del contenido y del video.',
        porcentaje: 20,
        periodo: 2,
        grupo: '',
        entregable: true,
        rubrica: 'Rúbrica de análisis',
        orden: 1,
        activa: true,
      },
    },
  ];

  for (const registro of registros) {
    const [video] = await prisma.$queryRawUnsafe<
      { id: number }[]
    >(
      `
        INSERT INTO "Video" ("titulo", "descripcion", "youtubeUrl", "youtubeId", "tipos", "publicado", "contenidoId")
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id
      `,
      registro.video.titulo,
      registro.video.descripcion,
      registro.video.youtubeUrl,
      registro.video.youtubeId,
      registro.video.tipos,
      true,
      registro.contenido.id,
    );

    const asignacion = await prisma.asignacion.create({
      data: {
        ...registro.asignacion,
        contenidoId: registro.contenido.id,
      },
    });

    await prisma.$executeRawUnsafe(
      `
        INSERT INTO "_AsignacionToVideo" ("A", "B")
        VALUES ($1, $2)
        ON CONFLICT DO NOTHING
      `,
      asignacion.id,
      video.id,
    );
  }
}

async function sembrarInsignias() {
  await prisma.insignia.createMany({
    data: [
      {
        nombre: 'Primer Paso',
        nivel: 'Bronce',
        descripcion: 'Completaste tu primer contenido del curso.',
        icon: '🥉',
        color: '#cd7f32',
        requisito: 1,
      },
      {
        nombre: 'En Camino',
        nivel: 'Bronce',
        descripcion: 'Completaste 5 contenidos.',
        icon: '📚',
        color: '#cd7f32',
        requisito: 5,
      },
      {
        nombre: 'Mitad del Camino',
        nivel: 'Plata',
        descripcion: 'Completaste 9 contenidos.',
        icon: '🥈',
        color: '#c0c0c0',
        requisito: 9,
      },
      {
        nombre: 'Casi Experto',
        nivel: 'Plata',
        descripcion: 'Completaste 14 contenidos.',
        icon: '⚡',
        color: '#c0c0c0',
        requisito: 14,
      },
      {
        nombre: 'Compilador Master',
        nivel: 'Oro',
        descripcion: 'Completaste todos los contenidos del curso.',
        icon: '🥇',
        color: '#ffd700',
        requisito: 18,
      },
    ],
    skipDuplicates: true,
  });
}

async function main() {
  console.log('🌱 Sincronizando contenidos desde compiladores/src/data/mockGuionDidactico.js');

  const mock = cargarMock();
  const { unidades, contenidos } = construirDatos(mock);

  await sembrarUnidades(unidades);
  await sembrarContenidos(contenidos);
  await sembrarVideosYAsignacionesDemo();
  await sembrarInsignias();

  console.log(`✅ Seed completado: ${unidades.length} unidades y ${contenidos.length} contenidos.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
