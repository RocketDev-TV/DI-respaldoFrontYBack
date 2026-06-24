# Backend — NestJS + GraphQL

## Stack y versiones

| Tecnología | Versión | Uso |
|---|---|---|
| Node.js | 18+ | Runtime |
| NestJS | 10 | Framework principal |
| `@nestjs/graphql` | 12 | Decoradores GraphQL code-first |
| `@nestjs/apollo` | 12 | Driver Apollo Server 4 |
| `pg` | 8.19 | Driver PostgreSQL nativo |
| TypeScript | 5.7 | Lenguaje |
| bcrypt | (via auth.utils) | Hash de contraseñas |
| JWT | (via auth.utils) | Tokens de sesión |

---

## Arranque de la aplicación

### `main.ts`

```typescript
const app = await NestFactory.create(AppModule);
app.enableCors({ origin: '*' });
await app.listen(process.env.PORT ?? 3001);
```

El backend expone GraphQL en `http://localhost:3001/graphql`. En desarrollo, el playground de Apollo está disponible en la misma URL.

### `app.module.ts`

```typescript
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',  // Code-first, genera el esquema
      context: ({ req }) => ({ req }),   // Inyecta la request en el contexto
    }),
    PrismaModule,
    AlumnoModule,
    AuthModule,
    AsignacionModule,
    EvaluacionModule,
    ContenidoModule,
    CuestionarioModule,
    // ... otros módulos
  ],
})
```

---

## PrismaService — Capa de datos SQL

> **Importante:** `PrismaService` NO es un cliente Prisma generado. Es una abstracción manual sobre `pg.Pool`.

### Inicialización

```typescript
@Injectable()
export class PrismaService implements OnModuleInit {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({ connectionString: process.env.DATABASE_URL });
  }

  async onModuleInit() {
    await this.ensureCoreSchema();  // Crea todas las tablas si no existen
  }
}
```

### Método `ensureCoreSchema()`

Ejecuta `CREATE TABLE IF NOT EXISTS` para todas las entidades del sistema. Esto elimina la necesidad de migraciones — el esquema se auto-crea al arrancar.

Tablas creadas automáticamente:
- `"Alumno"` — usuarios del sistema
- `"Asignacion"` — actividades académicas
- `"Entrega"` — entregas de alumnos
- `"Contenido"` — unidades de contenido
- `"Cuestionario"` — cuestionarios
- `"Pregunta"` — preguntas de cuestionarios
- `"OpcionRespuesta"` — opciones de respuesta múltiple
- `"EvaluacionCuestionario"` — intentos de cuestionario por alumno
- `"RespuestaAbierta"` — respuestas de texto libre
- Y otras tablas de soporte

### Patrón de propiedades de modelo

Cada tabla tiene una propiedad `readonly` en `PrismaService` que expone métodos CRUD:

```typescript
readonly cuestionario = {
  findMany:   async (args?)  => this.findCuestionarios(args?.where),
  findUnique: async (args)   => this.findCuestionarioById(args.where.id),
  create:     async (args)   => this.createCuestionarioCompleto(args.data),
  update:     async (args)   => this.updateCuestionarioInfo(args.where.id, args.data),
  delete:     async (args)   => this.deleteCuestionario(args.where.id),
};
```

Los métodos privados de SQL usan `queryRows()` y `queryOne()`:

```typescript
private async queryRows<T>(sql: string, params?: unknown[]): Promise<T[]> {
  const client = await this.pool.connect();
  try {
    const res = await client.query(sql, params);
    return res.rows as T[];
  } finally {
    client.release();
  }
}
```

---

## Sistema de roles y autenticación

### Enum `RolUsuario`

```typescript
enum RolUsuario {
  ALUMNO        = 'ALUMNO',
  MODERADOR     = 'MODERADOR',
  ADMINISTRADOR = 'ADMINISTRADOR',
}
```

### Extracción del usuario del contexto

En todos los resolvers, el usuario autenticado se obtiene así:

```typescript
@Query(...)
miQuery(@Context() ctx: any) {
  const usuario = this.alumnoService.getSessionUserFromContext(ctx);
  // usuario: { id, rol, grupo, email, ... }
}
```

`getSessionUserFromContext` verifica el JWT del header `Authorization: Bearer <token>`.

### Guard de roles (para operaciones de staff)

```typescript
this.alumnoService.requireRoles(ctx, [RolUsuario.MODERADOR, RolUsuario.ADMINISTRADOR]);
```

Lanza `UnauthorizedException` si el usuario no tiene alguno de los roles especificados.

---

## Estructura de un módulo NestJS típico

Cada módulo sigue esta estructura:

```
módulo/
├── módulo.module.ts        # Declaración de providers e imports
├── módulo.resolver.ts      # Queries y Mutations de GraphQL
├── módulo.service.ts       # Lógica de negocio
├── entities/
│   └── módulo.entity.ts    # ObjectTypes de GraphQL (@ObjectType)
└── dto/
    └── crear-módulo.input.ts  # InputTypes de GraphQL (@InputType)
```

### Ejemplo: resolver code-first

```typescript
@Resolver()
export class CuestionarioResolver {
  constructor(
    private readonly cuestionarioService: CuestionarioService,
    private readonly alumnoService: AlumnoService,
  ) {}

  @Query(() => [Cuestionario], { name: 'cuestionarios' })
  cuestionarios(
    @Args('todos', { type: () => Boolean, nullable: true }) todos: boolean,
    @Context() ctx: any,
  ) {
    this.alumnoService.getSessionUserFromContext(ctx);  // requiere autenticación
    return this.cuestionarioService.obtenerCuestionarios(!todos);
  }

  @Mutation(() => Cuestionario, { name: 'crearCuestionarioCompleto' })
  crearCuestionarioCompleto(
    @Args('datos') datos: CrearCuestionarioInput,
    @Context() ctx: any,
  ) {
    this.alumnoService.requireRoles(ctx, [RolUsuario.MODERADOR, RolUsuario.ADMINISTRADOR]);
    return this.cuestionarioService.crearCuestionarioCompleto(datos);
  }
}
```

---

## Módulo de autenticación

### Endpoints expuestos

| Operación GraphQL | Tipo | Descripción |
|---|---|---|
| `iniciarSesion(datos)` | Mutation | Valida credenciales, devuelve JWT + usuario |
| `registrarAlumno(datos)` | Mutation | Crea cuenta de alumno |
| `usuarios` | Query | Lista todos los usuarios (ADMIN) |
| `actualizarUsuario(id, datos)` | Mutation | Edita perfil (propio o ADMIN) |
| `eliminarUsuario(id)` | Mutation | Elimina cuenta (ADMIN) |

### Payload del JWT

```typescript
interface SessionUser {
  id: number;
  rol: RolUsuario;
  grupo: string;
  email: string;
}
```

---

## Variables de entorno

| Variable | Descripción | Ejemplo |
|---|---|---|
| `DATABASE_URL` | Cadena de conexión PostgreSQL | `postgresql://user:pass@host:5432/db` |
| `PORT` | Puerto del servidor | `3001` |
| `AUTH_SECRET` | Clave para firmar JWT | `mi-clave-secreta-segura` |
| `AUTH_TRANSPORT_SECRET` | Clave secundaria (email/transport) | `otra-clave` |
| `NODE_ENV` | Entorno de ejecución | `development` / `production` |
