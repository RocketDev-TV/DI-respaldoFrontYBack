import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { existsSync, readFileSync } from 'fs';
import { URL } from 'url';
import { hashPassword } from '../auth/auth.utils';
import { EstadoUsuario, RolUsuario } from '../alumno/entities/alumno.entity';

const { Pool } = require('pg');

type QueryArgs = {
  where?: Record<string, unknown>;
  data?: any;
  include?: Record<string, unknown>;
  orderBy?: Record<string, 'asc' | 'desc' | Record<string, 'asc' | 'desc'>>;
};

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  private readonly databaseUrl = this.getDatabaseUrl();
  private readonly pool = new Pool({ connectionString: this.databaseUrl });

  readonly contenido = {
    findMany: async (args?: QueryArgs) => this.findContenidosByFilters(args?.where),
    findUnique: async ({ where }: QueryArgs) => this.findContenidoById(Number(where?.id)),
    create: async ({ data }: QueryArgs) => this.createContenido(data),
    update: async ({ where, data }: QueryArgs) => this.updateContenido(Number(where?.id), data),
    delete: async ({ where }: QueryArgs) => this.deleteContenido(Number(where?.id)),
  };

  readonly unidad = {
    findMany: async (args?: QueryArgs) => this.findUnidades(args),
    findUnique: async ({ where, include }: QueryArgs) =>
      this.findUnidadById(Number(where?.id), Boolean(include?.contenidos)),
    create: async ({ data }: QueryArgs) => this.createUnidad(data),
    update: async ({ where, data }: QueryArgs) => this.updateUnidad(Number(where?.id), data),
    delete: async ({ where }: QueryArgs) => this.deleteUnidad(Number(where?.id)),
  };

  readonly alumno = {
    findMany: async () => this.findUsuarios(),
    findUnique: async ({ where }: QueryArgs) => {
      if (where?.email) {
        return this.queryOne(
          'SELECT id, nombre, apellido, email, grupo, password, rol, estado FROM "Alumno" WHERE email = $1',
          [String(where.email)],
        );
      }

      if (where?.id) {
        return this.queryOne(
          'SELECT id, nombre, apellido, email, grupo, password, rol, estado FROM "Alumno" WHERE id = $1',
          [Number(where.id)],
        );
      }

      return null;
    },
    create: async ({ data }: QueryArgs) => this.createUsuario(data),
    update: async ({ where, data }: QueryArgs) => this.updateUsuario(Number(where?.id), data),
    delete: async ({ where }: QueryArgs) => this.deleteUsuario(Number(where?.id)),
    findGroups: async () => this.findGroups(),
  };

  readonly asignacion = {
    findMany: async (args?: QueryArgs) => this.findAsignaciones(args?.where),
    findUnique: async ({ where }: QueryArgs) => this.findAsignacionById(Number(where?.id)),
    create: async ({ data }: QueryArgs) => this.createAsignacion(data),
    update: async ({ where, data }: QueryArgs) => this.updateAsignacion(Number(where?.id), data),
    delete: async ({ where }: QueryArgs) => this.deleteAsignacion(Number(where?.id)),
  };

  readonly video = {
    findMany: async (args?: QueryArgs) => this.findVideos(args?.where),
    findUnique: async ({ where }: QueryArgs) => this.findVideoById(Number(where?.id)),
    create: async ({ data }: QueryArgs) => this.createVideo(data),
    update: async ({ where, data }: QueryArgs) => this.updateVideo(Number(where?.id), data),
    delete: async ({ where }: QueryArgs) => this.deleteVideo(Number(where?.id)),
  };



  readonly entrega = {
    findMany: async (args?: QueryArgs) => this.findEntregas(args?.where),
    upsert: async ({ data }: QueryArgs) => this.upsertEntrega(data),
  };

  readonly calificacionAsignacion = {
    findMany: async (args?: QueryArgs) => this.findCalificacionesAsignacion(args?.where),
    upsert: async ({ data }: QueryArgs) => this.upsertCalificacionAsignacion(data),
  };

  readonly insignia = {
    findMany: async () =>
      this.queryRows(
        'SELECT id, nombre, nivel, descripcion, icon, color, requisito FROM "Insignia" ORDER BY id ASC',
      ),
  };

  readonly rubrica = {
    findMany: async ({ where }: QueryArgs) =>
      this.queryRows(
        'SELECT id, titulo, criterios, url, periodo FROM "Rubrica" WHERE periodo = $1 ORDER BY id ASC',
        [where?.periodo],
      ),
  };

  readonly verificationCode = {
    create: async ({ data }: QueryArgs) => {
      return this.queryOne(
        `INSERT INTO "VerificationCode" (id, code, "expiresAt", "alumnoId")
         VALUES (gen_random_uuid()::text, $1, $2, $3)
         RETURNING *`,
        [data?.code, data?.expiresAt, data?.alumnoId]
      );
    },
    findFirst: async ({ where }: QueryArgs) => {
      return this.queryOne(
        `SELECT * FROM "VerificationCode" 
         WHERE "alumnoId" = $1 AND code = $2 
         ORDER BY "createdAt" DESC LIMIT 1`,
        [where?.alumnoId, where?.code]
      );
    },
    deleteMany: async ({ where }: QueryArgs) => {
      return this.queryRows(
        `DELETE FROM "VerificationCode" WHERE "alumnoId" = $1`,
        [where?.alumnoId]
      );
    }
  };
  
  async onModuleInit() {
    await this.ensureCoreSchema();
    await this.ensureDefaultUsuarios();
    await this.pool.query('SELECT 1');
  }

  async onModuleDestroy() {
    await this.pool.end();
  }

  private async findUsuarios() {
    return this.queryRows(
      'SELECT id, nombre, apellido, email, grupo, password, rol, estado FROM "Alumno" ORDER BY id ASC',
    );
  }

  private async findGroups() {
    const rows = await this.queryRows(
      "SELECT DISTINCT grupo FROM \"Alumno\" WHERE grupo IS NOT NULL AND grupo <> '' ORDER BY grupo ASC",
    );
    return rows.map((row) => row.grupo);
  }

  private async createUsuario(data?: any) {
    return this.queryOne(
      `
        INSERT INTO "Alumno" (nombre, apellido, email, grupo, password, rol, estado)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id, nombre, apellido, email, grupo, password, rol, estado
      `,
      [
        data?.nombre,
        data?.apellido,
        data?.email,
        data?.grupo ?? '',
        data?.password,
        data?.rol ?? RolUsuario.ALUMNO,
        data?.estado ?? EstadoUsuario.ACTIVO,
      ],
    );
  }

  private async updateUsuario(id: number, data?: any) {
    return this.updateRow(
      '"Alumno"',
      id,
      {
        nombre: data?.nombre,
        apellido: data?.apellido,
        email: data?.email,
        grupo: data?.grupo,
        password: data?.password,
        rol: data?.rol,
        estado: data?.estado,
      },
      'RETURNING id, nombre, apellido, email, grupo, password, rol, estado',
    );
  }

  private async deleteUsuario(id: number) {
    return this.queryOne(
      'DELETE FROM "Alumno" WHERE id = $1 RETURNING id, nombre, apellido, email, grupo, password, rol, estado',
      [id],
    );
  }

  private async findContenidosByFilters(where?: Record<string, unknown>) {
    const clauses: string[] = [];
    const params: unknown[] = [];

    if (typeof where?.tipoMateria === 'string') {
      params.push(where.tipoMateria);
      clauses.push(`"tipoMateria" = $${params.length}`);
    }

    if (typeof where?.unidadId === 'number') {
      params.push(where.unidadId);
      clauses.push(`"unidadId" = $${params.length}`);
    }

    const whereClause = clauses.length ? `WHERE ${clauses.join(' AND ')}` : '';
    const rows = await this.queryRows(
      `
        SELECT id, titulo, descripcion, tipo, "tipoMateria", orden, url_recurso, contenido, "unidadId"
        FROM "Contenido"
        ${whereClause}
        ORDER BY "unidadId" ASC, orden ASC, id ASC
      `,
      params,
    );

    return this.attachContenidoRelations(rows);
  }

  private async findContenidoById(id: number) {
    const row = await this.queryOne(
      `
        SELECT id, titulo, descripcion, tipo, "tipoMateria", orden, url_recurso, contenido, "unidadId"
        FROM "Contenido"
        WHERE id = $1
      `,
      [id],
    );

    if (!row) {
      return null;
    }

    const [contenido] = await this.attachContenidoRelations([row]);
    return contenido ?? null;
  }

  private async createContenido(data?: any) {
    const row = await this.queryOne(
      `
        INSERT INTO "Contenido" (titulo, descripcion, tipo, "tipoMateria", orden, url_recurso, contenido, "unidadId")
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING id, titulo, descripcion, tipo, "tipoMateria", orden, url_recurso, contenido, "unidadId"
      `,
      [
        data?.titulo,
        data?.descripcion,
        data?.tipo,
        data?.tipoMateria,
        data?.orden,
        data?.url_recurso ?? null,
        data?.contenido ?? [],
        data?.unidadId,
      ],
    );

    const [contenido] = await this.attachContenidoRelations([row]);
    return contenido;
  }

  private async updateContenido(id: number, data?: any) {
    const row = await this.updateRow(
      '"Contenido"',
      id,
      {
        titulo: data?.titulo,
        descripcion: data?.descripcion,
        tipo: data?.tipo,
        '"tipoMateria"': data?.tipoMateria,
        orden: data?.orden,
        url_recurso: data?.url_recurso,
        contenido: data?.contenido,
        '"unidadId"': data?.unidadId,
      },
      'RETURNING id, titulo, descripcion, tipo, "tipoMateria", orden, url_recurso, contenido, "unidadId"',
    );

    if (!row) {
      return null;
    }

    const [contenido] = await this.attachContenidoRelations([row]);
    return contenido;
  }

  private async deleteContenido(id: number) {
    await this.queryRows(
      'DELETE FROM "_AsignacionToVideo" WHERE "A" IN (SELECT id FROM "Asignacion" WHERE "contenidoId" = $1)',
      [id],
    );
    await this.queryRows(
      'DELETE FROM "_AsignacionToVideo" WHERE "B" IN (SELECT id FROM "Video" WHERE "contenidoId" = $1)',
      [id],
    );
    await this.queryRows('DELETE FROM "Asignacion" WHERE "contenidoId" = $1', [id]);
    await this.queryRows('DELETE FROM "Video" WHERE "contenidoId" = $1', [id]);
    return this.queryOne(
      'DELETE FROM "Contenido" WHERE id = $1 RETURNING id, titulo, descripcion, tipo, "tipoMateria", orden, url_recurso, contenido, "unidadId"',
      [id],
    );
  }

  private async findUnidades(args?: QueryArgs) {
    const tipoMateria = args?.where?.tipoMateria;
    const unidades =
      typeof tipoMateria === 'string'
        ? await this.queryRows(
            `
              SELECT DISTINCT u.id, u.nombre
              FROM "Unidad" u
              INNER JOIN "Contenido" c ON c."unidadId" = u.id
              WHERE c."tipoMateria" = $1
              ORDER BY u.id ASC
            `,
            [tipoMateria],
          )
        : await this.queryRows('SELECT id, nombre FROM "Unidad" ORDER BY id ASC');

    if (!args?.include?.contenidos) {
      return unidades;
    }

    const contenidos = await this.findContenidosByFilters(
      typeof tipoMateria === 'string' ? { tipoMateria } : undefined,
    );

    return unidades.map((unidad) => ({
      ...unidad,
      contenidos: contenidos
        .filter((contenido) => contenido.unidadId === unidad.id)
        .map((contenido) => ({ ...contenido, unidad })),
    }));
  }

  private async findUnidadById(id: number, includeContenidos: boolean) {
    const unidad = await this.queryOne('SELECT id, nombre FROM "Unidad" WHERE id = $1', [id]);
    if (!unidad || !includeContenidos) {
      return unidad;
    }

    const contenidos = await this.findContenidosByFilters({ unidadId: id });
    return { ...unidad, contenidos: contenidos.map((contenido) => ({ ...contenido, unidad })) };
  }

  private async createUnidad(data?: any) {
    await this.syncTableSequence('"Unidad"');
    return this.queryOne('INSERT INTO "Unidad" (nombre) VALUES ($1) RETURNING id, nombre', [data?.nombre]);
  }

  private async updateUnidad(id: number, data?: any) {
    return this.updateRow('"Unidad"', id, { nombre: data?.nombre }, 'RETURNING id, nombre');
  }

  private async deleteUnidad(id: number) {
    return this.queryOne('DELETE FROM "Unidad" WHERE id = $1 RETURNING id, nombre', [id]);
  }

  private async findAsignaciones(where?: Record<string, unknown>) {
    const clauses: string[] = [];
    const params: unknown[] = [];

    if (typeof where?.periodo === 'number') {
      params.push(where.periodo);
      clauses.push(`periodo = $${params.length}`);
    }

    if (typeof where?.contenidoId === 'number') {
      params.push(where.contenidoId);
      clauses.push(`"contenidoId" = $${params.length}`);
    }

    if (typeof where?.grupo === 'string' && where.grupo.trim()) {
      params.push(where.grupo.trim());
      clauses.push(`(grupo = '' OR grupo = $${params.length})`);
    }

    const whereClause = clauses.length ? `WHERE ${clauses.join(' AND ')}` : '';
    const rows = await this.queryRows(
      `
        SELECT id, titulo, descripcion, porcentaje, periodo, grupo, entregable, rubrica, orden, activa, "contenidoId"
        FROM "Asignacion"
        ${whereClause}
        ORDER BY periodo ASC, orden ASC, id ASC
      `,
      params,
    );

    return this.attachAsignacionRelations(rows);
  }

  private async findAsignacionById(id: number) {
    const row = await this.queryOne(
      `
        SELECT id, titulo, descripcion, porcentaje, periodo, grupo, entregable, rubrica, orden, activa, "contenidoId"
        FROM "Asignacion"
        WHERE id = $1
      `,
      [id],
    );

    if (!row) {
      return null;
    }

    const [asignacion] = await this.attachAsignacionRelations([row]);
    return asignacion ?? null;
  }

  private async createAsignacion(data?: any) {
    const row = await this.queryOne(
      `
        INSERT INTO "Asignacion" (titulo, descripcion, porcentaje, periodo, grupo, entregable, rubrica, orden, activa, "contenidoId")
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        RETURNING id, titulo, descripcion, porcentaje, periodo, grupo, entregable, rubrica, orden, activa, "contenidoId"
      `,
      [
        data?.titulo,
        data?.descripcion ?? '',
        data?.porcentaje ?? 0,
        data?.periodo,
        data?.grupo ?? '',
        data?.entregable ?? true,
        data?.rubrica ?? '',
        data?.orden ?? 0,
        data?.activa ?? true,
        data?.contenidoId ?? null,
      ],
    );

    await this.syncAsignacionVideos(row.id, data?.videoIds ?? []);
    return this.findAsignacionById(row.id);
  }

  private async updateAsignacion(id: number, data?: any) {
    const row = await this.updateRow(
      '"Asignacion"',
      id,
      {
        titulo: data?.titulo,
        descripcion: data?.descripcion,
        porcentaje: data?.porcentaje,
        periodo: data?.periodo,
        grupo: data?.grupo,
        entregable: data?.entregable,
        rubrica: data?.rubrica,
        orden: data?.orden,
        activa: data?.activa,
        '"contenidoId"': data?.contenidoId,
      },
      'RETURNING id, titulo, descripcion, porcentaje, periodo, grupo, entregable, rubrica, orden, activa, "contenidoId"',
    );

    if (!row) {
      return null;
    }

    if (Array.isArray(data?.videoIds)) {
      await this.syncAsignacionVideos(id, data.videoIds);
    }

    return this.findAsignacionById(id);
  }

  private async deleteAsignacion(id: number) {
    await this.queryRows('DELETE FROM "_AsignacionToVideo" WHERE "A" = $1', [id]);
    return this.queryOne(
      'DELETE FROM "Asignacion" WHERE id = $1 RETURNING id, titulo, descripcion, porcentaje, periodo, grupo, entregable, rubrica, orden, activa, "contenidoId"',
      [id],
    );
  }

  private async findVideos(where?: Record<string, unknown>) {
    const clauses: string[] = [];
    const params: unknown[] = [];
    let joinClause = '';

    if (typeof where?.contenidoId === 'number') {
      params.push(where.contenidoId);
      clauses.push(`v."contenidoId" = $${params.length}`);
    }

    if (typeof where?.asignacionId === 'number') {
      joinClause = 'LEFT JOIN "_AsignacionToVideo" av ON av."B" = v.id';
      params.push(where.asignacionId);
      clauses.push(`av."A" = $${params.length}`);
    }

    if (typeof where?.publicado === 'boolean') {
      params.push(where.publicado);
      clauses.push(`v.publicado = $${params.length}`);
    }

    const whereClause = clauses.length ? `WHERE ${clauses.join(' AND ')}` : '';

    const rows = await this.queryRows(
      `
        SELECT DISTINCT v.id, v.titulo, v.descripcion, v."youtubeUrl", v."youtubeId", v.tipos, v.publicado, v."contenidoId"
        FROM "Video" v
        ${joinClause}
        ${whereClause}
        ORDER BY v.id DESC
      `,
      params,
    );

    return this.attachVideoRelations(rows);
  }

  private async findVideoById(id: number) {
    const row = await this.queryOne(
      `
        SELECT id, titulo, descripcion, "youtubeUrl", "youtubeId", tipos, publicado, "contenidoId"
        FROM "Video"
        WHERE id = $1
      `,
      [id],
    );

    if (!row) {
      return null;
    }

    const [video] = await this.attachVideoRelations([row]);
    return video ?? null;
  }

  private async createVideo(data?: any) {
    const youtubeId = this.extractYoutubeId(data?.youtubeUrl);
    const row = await this.queryOne(
      `
        INSERT INTO "Video" (titulo, descripcion, "youtubeUrl", "youtubeId", tipos, publicado, "contenidoId")
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id, titulo, descripcion, "youtubeUrl", "youtubeId", tipos, publicado, "contenidoId"
      `,
      [
        data?.titulo,
        data?.descripcion ?? '',
        data?.youtubeUrl,
        youtubeId,
        data?.tipos ?? [],
        data?.publicado ?? true,
        data?.contenidoId ?? null,
      ],
    );

    await this.syncVideoAsignaciones(row.id, data?.asignacionIds ?? []);
    return this.findVideoById(row.id);
  }

  private async updateVideo(id: number, data?: any) {
    const row = await this.updateRow(
      '"Video"',
      id,
      {
        titulo: data?.titulo,
        descripcion: data?.descripcion,
        '"youtubeUrl"': data?.youtubeUrl,
        '"youtubeId"': data?.youtubeUrl ? this.extractYoutubeId(data.youtubeUrl) : undefined,
        tipos: data?.tipos,
        publicado: data?.publicado,
        '"contenidoId"': data?.contenidoId,
      },
      'RETURNING id, titulo, descripcion, "youtubeUrl", "youtubeId", tipos, publicado, "contenidoId"',
    );

    if (!row) {
      return null;
    }

    if (Array.isArray(data?.asignacionIds)) {
      await this.syncVideoAsignaciones(id, data.asignacionIds);
    }

    return this.findVideoById(id);
  }

  private async deleteVideo(id: number) {
    await this.queryRows('DELETE FROM "_AsignacionToVideo" WHERE "B" = $1', [id]);
    return this.queryOne(
      'DELETE FROM "Video" WHERE id = $1 RETURNING id, titulo, descripcion, "youtubeUrl", "youtubeId", tipos, publicado, "contenidoId"',
      [id],
    );
  }

  private async attachContenidoRelations(rows: any[]) {
    if (!rows.length) {
      return [];
    }

    const unidadIds = [...new Set(rows.map((row) => row.unidadId))];
    const unidades = unidadIds.length
      ? await this.queryRows('SELECT id, nombre FROM "Unidad" WHERE id = ANY($1::int[])', [unidadIds])
      : [];
    const unidadMap = new Map(unidades.map((unidad) => [unidad.id, unidad]));
    const allVideos = await this.findVideos({});
    const allAsignaciones = await this.findAsignaciones({});

    return rows.map((row) => ({
      ...row,
      unidad: unidadMap.get(row.unidadId) ?? null,
      videos: allVideos.filter((video) => video.contenidoId === row.id),
      asignaciones: allAsignaciones.filter((asignacion) => asignacion.contenidoId === row.id),
      contenido: row.contenido ?? [],
    }));
  }

  private async attachAsignacionRelations(rows: any[]) {
    if (!rows.length) {
      return [];
    }

    const ids = rows.map((row) => row.id);
    const links = await this.queryRows(
      'SELECT "A" AS "asignacionId", "B" AS "videoId" FROM "_AsignacionToVideo" WHERE "A" = ANY($1::int[])',
      [ids],
    );
    const videoIds = [...new Set(links.map((link) => link.videoId))];
    const videos = videoIds.length
      ? await this.queryRows(
          'SELECT id, titulo, descripcion, "youtubeUrl", "youtubeId", tipos, publicado, "contenidoId" FROM "Video" WHERE id = ANY($1::int[]) ORDER BY id DESC',
          [videoIds],
        )
      : [];
    const videoMap = new Map(videos.map((video) => [video.id, video]));

    return rows.map((row) => ({
      ...row,
      videos: links
        .filter((link) => link.asignacionId === row.id)
        .map((link) => videoMap.get(link.videoId))
        .filter(Boolean),
    }));
  }

  private async attachVideoRelations(rows: any[]) {
    if (!rows.length) {
      return [];
    }

    const ids = rows.map((row) => row.id);
    const links = await this.queryRows(
      'SELECT "A" AS "asignacionId", "B" AS "videoId" FROM "_AsignacionToVideo" WHERE "B" = ANY($1::int[])',
      [ids],
    );
    const asignacionIds = [...new Set(links.map((link) => link.asignacionId))];
    const asignaciones = asignacionIds.length
      ? await this.queryRows(
          'SELECT id, titulo, descripcion, porcentaje, periodo, grupo, entregable, rubrica, orden, activa, "contenidoId" FROM "Asignacion" WHERE id = ANY($1::int[]) ORDER BY periodo ASC, orden ASC, id ASC',
          [asignacionIds],
        )
      : [];
    const asignacionMap = new Map(asignaciones.map((asignacion) => [asignacion.id, asignacion]));

    return rows.map((row) => ({
      ...row,
      tipos: row.tipos ?? [],
      asignaciones: links
        .filter((link) => link.videoId === row.id)
        .map((link) => asignacionMap.get(link.asignacionId))
        .filter(Boolean),
    }));
  }

  private async syncAsignacionVideos(asignacionId: number, videoIds: number[]) {
    await this.queryRows('DELETE FROM "_AsignacionToVideo" WHERE "A" = $1', [asignacionId]);
    for (const videoId of [...new Set(videoIds)]) {
      await this.queryRows(
        'INSERT INTO "_AsignacionToVideo" ("A", "B") VALUES ($1, $2) ON CONFLICT DO NOTHING',
        [asignacionId, videoId],
      );
    }
  }

  private async syncVideoAsignaciones(videoId: number, asignacionIds: number[]) {
    await this.queryRows('DELETE FROM "_AsignacionToVideo" WHERE "B" = $1', [videoId]);
    for (const asignacionId of [...new Set(asignacionIds)]) {
      await this.queryRows(
        'INSERT INTO "_AsignacionToVideo" ("A", "B") VALUES ($1, $2) ON CONFLICT DO NOTHING',
        [asignacionId, videoId],
      );
    }
  }

  private async updateRow(tableName: string, id: number, data: Record<string, unknown>, returning: string) {
    const sets: string[] = [];
    const params: unknown[] = [];

    Object.entries(data).forEach(([column, value]) => {
      if (value !== undefined) {
        params.push(value);
        sets.push(`${column} = $${params.length}`);
      }
    });

    if (!sets.length) {
      return this.queryOne(`SELECT * FROM ${tableName} WHERE id = $1`, [id]);
    }

    params.push(id);
    return this.queryOne(
      `UPDATE ${tableName} SET ${sets.join(', ')} WHERE id = $${params.length} ${returning}`,
      params,
    );
  }

  private async syncTableSequence(tableName: string) {
    await this.pool.query(
      `
        SELECT setval(
          pg_get_serial_sequence($1, 'id'),
          COALESCE((SELECT MAX(id) + 1 FROM ${tableName}), 1),
          false
        )
      `,
      [tableName],
    );
  }



  private async findEntregas(where?: Record<string, unknown>) {
    const clauses: string[] = [];
    const params: unknown[] = [];

    if (typeof where?.grupo === 'string' && where.grupo.trim()) {
      params.push(where.grupo.trim());
      clauses.push(`grupo = $${params.length}`);
    }

    if (typeof where?.parcial === 'number') {
      params.push(where.parcial);
      clauses.push(`parcial = $${params.length}`);
    }

    if (typeof where?.alumnoId === 'number') {
      params.push(where.alumnoId);
      clauses.push(`"alumnoId" = $${params.length}`);
    }

    if (typeof where?.asignacionId === 'number') {
      params.push(where.asignacionId);
      clauses.push(`"asignacionId" = $${params.length}`);
    }

    const whereClause = clauses.length ? `WHERE ${clauses.join(' AND ')}` : '';
    return this.queryRows(
      `
        SELECT id, "asignacionId", "alumnoId", grupo, parcial, "nombreArchivo", "mimeType", tamano, "archivoBase64", estado, "fechaEntrega"
        FROM "Entrega"
        ${whereClause}
        ORDER BY "fechaEntrega" DESC, id DESC
      `,
      params,
    );
  }

  private async upsertEntrega(data?: any) {
    return this.queryOne(
      `
        INSERT INTO "Entrega" ("asignacionId", "alumnoId", grupo, parcial, "nombreArchivo", "mimeType", tamano, "archivoBase64", estado, "fechaEntrega")
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'entregado', NOW())
        ON CONFLICT ("asignacionId", "alumnoId", parcial)
        DO UPDATE SET
          grupo = EXCLUDED.grupo,
          "nombreArchivo" = EXCLUDED."nombreArchivo",
          "mimeType" = EXCLUDED."mimeType",
          tamano = EXCLUDED.tamano,
          "archivoBase64" = EXCLUDED."archivoBase64",
          estado = 'entregado',
          "fechaEntrega" = NOW()
        RETURNING id, "asignacionId", "alumnoId", grupo, parcial, "nombreArchivo", "mimeType", tamano, "archivoBase64", estado, "fechaEntrega"
      `,
      [
        data?.asignacionId,
        data?.alumnoId,
        data?.grupo ?? '',
        data?.parcial,
        data?.nombreArchivo,
        data?.mimeType,
        data?.tamano ?? 0,
        data?.archivoBase64,
      ],
    );
  }

  private async findCalificacionesAsignacion(where?: Record<string, unknown>) {
    const clauses: string[] = [];
    const params: unknown[] = [];

    if (typeof where?.grupo === 'string' && where.grupo.trim()) {
      params.push(where.grupo.trim());
      clauses.push(`grupo = $${params.length}`);
    }

    if (typeof where?.parcial === 'number') {
      params.push(where.parcial);
      clauses.push(`parcial = $${params.length}`);
    }

    if (typeof where?.alumnoId === 'number') {
      params.push(where.alumnoId);
      clauses.push(`"alumnoId" = $${params.length}`);
    }

    if (typeof where?.asignacionId === 'number') {
      params.push(where.asignacionId);
      clauses.push(`"asignacionId" = $${params.length}`);
    }

    const whereClause = clauses.length ? `WHERE ${clauses.join(' AND ')}` : '';
    return this.queryRows(
      `
        SELECT id, "asignacionId", "alumnoId", grupo, parcial, calificacion, observaciones, "fechaCalificacion"
        FROM "CalificacionAsignacion"
        ${whereClause}
        ORDER BY "fechaCalificacion" DESC, id DESC
      `,
      params,
    );
  }

  private async upsertCalificacionAsignacion(data?: any) {
    return this.queryOne(
      `
        INSERT INTO "CalificacionAsignacion" ("asignacionId", "alumnoId", grupo, parcial, calificacion, observaciones, "fechaCalificacion")
        VALUES ($1, $2, $3, $4, $5, $6, NOW())
        ON CONFLICT ("asignacionId", "alumnoId", parcial)
        DO UPDATE SET
          grupo = EXCLUDED.grupo,
          calificacion = EXCLUDED.calificacion,
          observaciones = EXCLUDED.observaciones,
          "fechaCalificacion" = NOW()
        RETURNING id, "asignacionId", "alumnoId", grupo, parcial, calificacion, observaciones, "fechaCalificacion"
      `,
      [
        data?.asignacionId,
        data?.alumnoId,
        data?.grupo ?? '',
        data?.parcial,
        data?.calificacion ?? 0,
        data?.observaciones ?? '',
      ],
    );
  }

  private async queryRows(sql: string, params: unknown[] = []) {
    const result = await this.pool.query(sql, params);
    return result.rows;
  }

  private async queryOne(sql: string, params: unknown[] = []) {
    const result = await this.pool.query(sql, params);
    return result.rows[0] ?? null;
  }

  private extractYoutubeId(url: string) {
    const trimmed = url?.trim() ?? '';
    const match = trimmed.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/,
    );

    if (!match) {
      throw new Error('La URL de YouTube no es valida');
    }

    return match[1];
  }

  private getDatabaseUrl() {
    const databaseUrl =
      process.env.DATABASE_URL?.trim() ??
      process.env.DATABASE_PRIVATE_URL?.trim() ??
      process.env.DATABASE_PUBLIC_URL?.trim() ??
      process.env.POSTGRES_URL?.trim() ??
      this.buildDatabaseUrlFromPgEnv();

    if (databaseUrl) {
      this.assertDatabaseUrlIsReachable(databaseUrl);
      return databaseUrl;
    }

    if (process.env.NODE_ENV === 'production' || process.env.RAILWAY_ENVIRONMENT) {
      throw new Error(
        'DATABASE_URL no esta configurada. En Railway debes vincular una base PostgreSQL o definir DATABASE_URL manualmente.',
      );
    }

    if (!existsSync('.env')) {
      throw new Error(
        'DATABASE_URL no esta configurada. Define DATABASE_URL en tu entorno local o en un archivo .env.',
      );
    }

    const env = readFileSync('.env', 'utf8');
    const envDatabaseUrl = env.match(/DATABASE_URL="?([^"\n]+)"?/)?.[1]?.trim();

    if (envDatabaseUrl) {
      return envDatabaseUrl;
    }

    throw new Error(
      'DATABASE_URL no esta configurada. Revisa el archivo .env o las variables de entorno del despliegue.',
    );
  }

  private buildDatabaseUrlFromPgEnv() {
    const host = process.env.PGHOST?.trim();
    const port = process.env.PGPORT?.trim();
    const database = process.env.PGDATABASE?.trim();
    const user = process.env.PGUSER?.trim();
    const password = process.env.PGPASSWORD?.trim();

    if (!host || !port || !database || !user || !password) {
      return null;
    }

    const url = new URL('postgresql://placeholder');
    url.hostname = host;
    url.port = port;
    url.pathname = `/${database}`;
    url.username = user;
    url.password = password;

    const sslMode = process.env.PGSSLMODE?.trim();
    if (sslMode) {
      url.searchParams.set('sslmode', sslMode);
    }

    return url.toString();
  }

  private assertDatabaseUrlIsReachable(databaseUrl: string) {
    const isProductionLike = process.env.NODE_ENV === 'production' || process.env.RAILWAY_ENVIRONMENT;
    if (!isProductionLike) {
      return;
    }

    let hostname: string;

    try {
      hostname = new URL(databaseUrl).hostname;
    } catch {
      return;
    }

    if (['localhost', '127.0.0.1', '::1'].includes(hostname)) {
      throw new Error(
        'DATABASE_URL apunta a localhost. En Railway debes vincular PostgreSQL al servicio backend o usar la URL privada/publica que entrega Railway; localhost dentro del contenedor no apunta a tu base.',
      );
    }
  }

  private async ensureCoreSchema() {
    await this.pool.query(`
      ALTER TABLE "Alumno"
      ADD COLUMN IF NOT EXISTS apellido TEXT NOT NULL DEFAULT '',
      ADD COLUMN IF NOT EXISTS grupo TEXT NOT NULL DEFAULT '',
      ADD COLUMN IF NOT EXISTS password TEXT NOT NULL DEFAULT '',
      ADD COLUMN IF NOT EXISTS rol TEXT NOT NULL DEFAULT 'ALUMNO',
      ADD COLUMN IF NOT EXISTS estado TEXT NOT NULL DEFAULT 'ACTIVO'
    `);

    await this.pool.query(`
      CREATE TABLE IF NOT EXISTS "Video" (
        id SERIAL PRIMARY KEY,
        titulo TEXT NOT NULL,
        descripcion TEXT NOT NULL DEFAULT '',
        "youtubeUrl" TEXT NOT NULL,
        "youtubeId" TEXT NOT NULL,
        tipos TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
        publicado BOOLEAN NOT NULL DEFAULT TRUE,
        "contenidoId" INTEGER REFERENCES "Contenido"(id) ON DELETE SET NULL
      )
    `);

    await this.pool.query(`
      CREATE TABLE IF NOT EXISTS "Asignacion" (
        id SERIAL PRIMARY KEY,
        titulo TEXT NOT NULL,
        descripcion TEXT NOT NULL DEFAULT '',
        porcentaje INTEGER NOT NULL DEFAULT 0,
        periodo INTEGER NOT NULL,
        grupo TEXT NOT NULL DEFAULT '',
        entregable BOOLEAN NOT NULL DEFAULT TRUE,
        rubrica TEXT NOT NULL DEFAULT '',
        orden INTEGER NOT NULL DEFAULT 0,
        activa BOOLEAN NOT NULL DEFAULT TRUE,
        "contenidoId" INTEGER REFERENCES "Contenido"(id) ON DELETE SET NULL
      )
    `);

    await this.pool.query(`
      CREATE TABLE IF NOT EXISTS "_AsignacionToVideo" (
        "A" INTEGER NOT NULL REFERENCES "Asignacion"(id) ON DELETE CASCADE,
        "B" INTEGER NOT NULL REFERENCES "Video"(id) ON DELETE CASCADE,
        PRIMARY KEY ("A", "B")
      )
    `);

    await this.pool.query(`
      CREATE TABLE IF NOT EXISTS "Entrega" (
        id SERIAL PRIMARY KEY,
        "asignacionId" INTEGER NOT NULL REFERENCES "Asignacion"(id) ON DELETE CASCADE,
        "alumnoId" INTEGER NOT NULL REFERENCES "Alumno"(id) ON DELETE CASCADE,
        grupo TEXT NOT NULL DEFAULT '',
        parcial INTEGER NOT NULL,
        "nombreArchivo" TEXT NOT NULL,
        "mimeType" TEXT NOT NULL DEFAULT 'application/octet-stream',
        tamano INTEGER NOT NULL DEFAULT 0,
        "archivoBase64" TEXT NOT NULL,
        estado TEXT NOT NULL DEFAULT 'entregado',
        "fechaEntrega" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        UNIQUE ("asignacionId", "alumnoId", parcial)
      )
    `);

    await this.pool.query(`
      CREATE TABLE IF NOT EXISTS "CalificacionAsignacion" (
        id SERIAL PRIMARY KEY,
        "asignacionId" INTEGER NOT NULL REFERENCES "Asignacion"(id) ON DELETE CASCADE,
        "alumnoId" INTEGER NOT NULL REFERENCES "Alumno"(id) ON DELETE CASCADE,
        grupo TEXT NOT NULL DEFAULT '',
        parcial INTEGER NOT NULL,
        calificacion INTEGER NOT NULL DEFAULT 0,
        observaciones TEXT NOT NULL DEFAULT '',
        "fechaCalificacion" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        UNIQUE ("asignacionId", "alumnoId", parcial)
      )
    `);

    await this.pool.query(`
      CREATE TABLE IF NOT EXISTS "VerificationCode" (
        id TEXT PRIMARY KEY,
        code TEXT NOT NULL,
        "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        "expiresAt" TIMESTAMPTZ NOT NULL,
        "alumnoId" INTEGER NOT NULL REFERENCES "Alumno"(id) ON DELETE CASCADE
      );
      CREATE INDEX IF NOT EXISTS "VerificationCode_alumnoId_idx" ON "VerificationCode"("alumnoId");
    `);
  }

  private async ensureDefaultUsuarios() {
    const admin = {
      nombre: 'Administrador',
      apellido: 'Sistema',
      email: process.env.DEFAULT_ADMIN_EMAIL?.trim() ?? 'admin@ipn.mx',
      grupo: '',
      password: process.env.DEFAULT_ADMIN_PASSWORD?.trim() ?? 'Admin123!',
      rol: RolUsuario.ADMINISTRADOR,
      estado: EstadoUsuario.ACTIVO,
    };

    const moderadores = [
      {
        nombre: 'Moderador',
        apellido: 'Academico Uno',
        email: process.env.DEFAULT_MODERATOR_1_EMAIL?.trim() ?? 'moderador1@ipn.mx',
        grupo: '',
        password: process.env.DEFAULT_MODERATOR_1_PASSWORD?.trim() ?? 'Moderador123!',
        rol: RolUsuario.MODERADOR,
        estado: EstadoUsuario.ACTIVO,
      },
      {
        nombre: 'Moderador',
        apellido: 'Academico Dos',
        email: process.env.DEFAULT_MODERATOR_2_EMAIL?.trim() ?? 'moderador2@ipn.mx',
        grupo: '',
        password: process.env.DEFAULT_MODERATOR_2_PASSWORD?.trim() ?? 'Moderador123!',
        rol: RolUsuario.MODERADOR,
        estado: EstadoUsuario.ACTIVO,
      },
      {
        nombre: 'Moderador',
        apellido: 'Academico Tres',
        email: process.env.DEFAULT_MODERATOR_3_EMAIL?.trim() ?? 'moderador3@ipn.mx',
        grupo: '',
        password: process.env.DEFAULT_MODERATOR_3_PASSWORD?.trim() ?? 'Moderador123!',
        rol: RolUsuario.MODERADOR,
        estado: EstadoUsuario.ACTIVO,
      },
    ];

    for (const usuario of [admin, ...moderadores]) {
      const existente = await this.queryOne('SELECT id FROM "Alumno" WHERE email = $1', [usuario.email]);
      if (!existente) {
        await this.createUsuario({
          ...usuario,
          password: hashPassword(usuario.password),
        });
      }
    }
  }
}
