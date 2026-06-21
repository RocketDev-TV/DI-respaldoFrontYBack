const fs = require('fs');
const http = require('http');
const path = require('path');
const { URL } = require('url');

loadEnvFiles();

const { Pool } = loadPgModule();
const isProduction = process.env.NODE_ENV === 'production';
const apiPort = Number(process.env.API_PORT || 3001);
const port = Number(process.env.PORT || (isProduction ? 3000 : apiPort));
const host = process.env.HOST || (isProduction ? '0.0.0.0' : '127.0.0.1');
const buildDir = path.join(__dirname, 'build');

const databaseUrl = getDatabaseUrl();
const pool = new Pool(buildPoolConfig(databaseUrl));

let schemaReadyPromise = null;

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
};

const server = http.createServer(async (req, res) => {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const requestUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

  if (requestUrl.pathname === '/api/health') {
    return json(res, 200, { ok: true });
  }

  if (requestUrl.pathname === '/graphql' && req.method === 'POST') {
    try {
      await ensureSchema();

      const body = await readJsonBody(req);
      const payload = await handleGraphqlRequest(body);
      return json(res, 200, payload);
    } catch (error) {
      return json(res, 200, {
        errors: [{ message: error instanceof Error ? error.message : 'Error interno del servidor' }],
      });
    }
  }

  if (isProduction) {
    const served = await tryServeStatic(requestUrl.pathname, res);
    if (served) {
      return;
    }
  }

  json(res, 404, { error: 'Ruta no encontrada' });
});

server.listen(port, host, () => {
  const mode = isProduction ? 'production' : 'development';
  console.log(`Prototype server listening on http://${host}:${port} (${mode})`);
});

async function handleGraphqlRequest(body) {
  const query = String(body?.query || '');
  const variables = body?.variables || {};

  if (query.includes('query UnidadesPorMateria')) {
    const unidades = await fetchUnidadesPorMateria(variables.tipoMateria);
    return { data: { unidades } };
  }

  if (query.includes('mutation IniciarSesion')) {
    const alumno = await iniciarSesion(variables?.datos || {});
    return { data: { iniciarSesion: alumno } };
  }

  if (query.includes('mutation CrearAlumno')) {
    const alumno = await crearAlumno(variables?.datos || {});
    return { data: { crearAlumno: alumno } };
  }

  throw new Error('Operacion GraphQL no soportada por el prototipo.');
}

async function fetchUnidadesPorMateria(tipoMateria) {
  if (!tipoMateria) {
    throw new Error('tipoMateria es requerido.');
  }

  const unidadesResult = await pool.query(
    `
      SELECT DISTINCT u.id, u.nombre
      FROM "Unidad" u
      INNER JOIN "Contenido" c ON c."unidadId" = u.id
      WHERE c."tipoMateria" = $1
      ORDER BY u.id ASC
    `,
    [tipoMateria],
  );

  const contenidosResult = await pool.query(
    `
      SELECT
        id,
        titulo,
        descripcion,
        tipo,
        "tipoMateria",
        orden,
        url_recurso,
        contenido,
        "unidadId"
      FROM "Contenido"
      WHERE "tipoMateria" = $1
      ORDER BY "unidadId" ASC, orden ASC, id ASC
    `,
    [tipoMateria],
  );

  return unidadesResult.rows.map((unidad) => ({
    id: unidad.id,
    nombre: unidad.nombre,
    contenidos: contenidosResult.rows
      .filter((contenido) => contenido.unidadId === unidad.id)
      .map((contenido) => ({
        id: contenido.id,
        titulo: contenido.titulo,
        descripcion: contenido.descripcion,
        tipo: contenido.tipo,
        tipoMateria: contenido.tipoMateria,
        orden: contenido.orden,
        url_recurso: contenido.url_recurso,
        contenido: contenido.contenido,
        unidadId: contenido.unidadId,
      })),
  }));
}

async function iniciarSesion(datos) {
  const email = String(datos?.email || '').trim().toLowerCase();
  const password = String(datos?.password || '');

  if (!email || !password) {
    throw new Error('Correo y contrasena son requeridos.');
  }

  const result = await pool.query(
    `
      SELECT id, nombre, apellido, email, grupo, password
      FROM "Alumno"
      WHERE LOWER(email) = $1
      LIMIT 1
    `,
    [email],
  );

  const alumno = result.rows[0];
  if (!alumno || alumno.password !== password) {
    throw new Error('Credenciales invalidas.');
  }

  return sanitizeAlumno(alumno);
}

async function crearAlumno(datos) {
  const nombre = String(datos?.nombre || '').trim();
  const apellido = String(datos?.apellido || '').trim();
  const email = String(datos?.email || '').trim().toLowerCase();
  const grupo = String(datos?.grupo || '').trim();
  const password = String(datos?.password || '');

  if (!nombre || !apellido || !email || !grupo || !password) {
    throw new Error('Todos los campos son requeridos.');
  }

  const existing = await pool.query('SELECT id FROM "Alumno" WHERE LOWER(email) = $1 LIMIT 1', [
    email,
  ]);

  if (existing.rows.length > 0) {
    throw new Error('Ya existe una cuenta registrada con ese correo.');
  }

  const created = await pool.query(
    `
      INSERT INTO "Alumno" (nombre, apellido, email, grupo, password)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, nombre, apellido, email, grupo
    `,
    [nombre, apellido, email, grupo, password],
  );

  return sanitizeAlumno(created.rows[0]);
}

function sanitizeAlumno(alumno) {
  return {
    id: alumno.id,
    nombre: alumno.nombre,
    apellido: alumno.apellido || '',
    email: alumno.email,
    grupo: alumno.grupo || '',
  };
}

async function ensureSchema() {
  if (!schemaReadyPromise) {
    schemaReadyPromise = pool.query(`
      ALTER TABLE "Alumno"
      ADD COLUMN IF NOT EXISTS apellido TEXT NOT NULL DEFAULT '',
      ADD COLUMN IF NOT EXISTS grupo TEXT NOT NULL DEFAULT '',
      ADD COLUMN IF NOT EXISTS password TEXT NOT NULL DEFAULT ''
    `);
  }

  await schemaReadyPromise;
}

function buildPoolConfig(connectionString) {
  const url = new URL(connectionString);
  const isLocal = ['127.0.0.1', 'localhost'].includes(url.hostname);

  return {
    connectionString,
    ssl: isLocal ? false : { rejectUnauthorized: false },
  };
}

function getDatabaseUrl() {
  const databaseUrl = process.env.DATABASE_URL?.trim();
  if (!databaseUrl) {
    throw new Error(
      'DATABASE_URL no esta configurada. Define la variable en compiladores/.env o en tu entorno.',
    );
  }

  return databaseUrl;
}

function loadPgModule() {
  try {
    return require('pg');
  } catch (error) {
    return require('../Project-Site-Backend/node_modules/pg');
  }
}

function loadEnvFiles() {
  const envFiles = ['.env', '.env.local'];

  for (const file of envFiles) {
    const filePath = path.join(__dirname, file);
    if (!fs.existsSync(filePath)) {
      continue;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    parseEnv(content);
  }
}

function parseEnv(content) {
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) {
      continue;
    }

    const separator = trimmed.indexOf('=');
    if (separator === -1) {
      continue;
    }

    const key = trimmed.slice(0, separator).trim();
    if (!key || process.env[key]) {
      continue;
    }

    let value = trimmed.slice(separator + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    process.env[key] = value;
  }
}

function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
}

function json(res, statusCode, payload) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(payload));
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        reject(new Error('El body de la solicitud es demasiado grande.'));
        req.destroy();
      }
    });

    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(new Error('No fue posible interpretar el body JSON.'));
      }
    });

    req.on('error', reject);
  });
}

async function tryServeStatic(requestPath, res) {
  const normalizedPath = requestPath === '/' ? '/index.html' : requestPath;
  const safePath = path.normalize(normalizedPath).replace(/^(\.\.[/\\])+/, '');
  const filePath = path.join(buildDir, safePath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    return sendFile(res, filePath);
  }

  const indexPath = path.join(buildDir, 'index.html');
  if (fs.existsSync(indexPath)) {
    return sendFile(res, indexPath);
  }

  return false;
}

function sendFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const mimeType = mimeTypes[ext] || 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': mimeType });
  fs.createReadStream(filePath).pipe(res);
  return true;
}
