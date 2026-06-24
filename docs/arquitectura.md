# Arquitectura del Sistema

## Visión general

El sistema sigue una arquitectura de **monolito modular** con separación clara entre frontend y backend, comunicándose exclusivamente a través de una API GraphQL.

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENTE                              │
│              React 18 SPA (Create React App)                │
│         Tailwind CSS · Lucide React · Recharts              │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │ AdminDashboard│  │TeacherDashboard│  │StudentDashboard│  │
│  └──────┬───────┘  └──────┬───────┘  └────────┬─────────┘  │
│         │                  │                   │            │
│         └──────────────────┴───────────────────┘           │
│                            │                               │
│                    fetch() + JWT Bearer                     │
└────────────────────────────┼────────────────────────────────┘
                             │ HTTPS / GraphQL
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                       SERVIDOR                              │
│                NestJS 10 + Apollo Server 4                  │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐   │
│  │                    GraphQL Layer                      │   │
│  │  Resolvers: Auth · Alumno · Asignacion · Cuestionario│   │
│  │             Evaluacion · Contenido · Recurso · Video  │   │
│  └────────────────────────┬─────────────────────────────┘   │
│                            │                               │
│  ┌─────────────────────────▼────────────────────────────┐   │
│  │                  Servicio Layer                       │   │
│  │  Services: Auth · Alumno · Asignacion · Cuestionario │   │
│  │            Evaluacion · Contenido · Recurso           │   │
│  └────────────────────────┬─────────────────────────────┘   │
│                            │                               │
│  ┌─────────────────────────▼────────────────────────────┐   │
│  │              PrismaService (Custom SQL)               │   │
│  │         pg.Pool · Raw SQL · ensureCoreSchema()        │   │
│  └────────────────────────┬─────────────────────────────┘   │
│                            │                               │
└────────────────────────────┼────────────────────────────────┘
                             │ TCP 5433
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                   PostgreSQL 15                              │
│              (Dockerizado · puerto 5433)                     │
└─────────────────────────────────────────────────────────────┘
```

---

## Capa de transporte: GraphQL

Toda la comunicación usa **GraphQL sobre HTTP POST** a `/graphql`. El cliente no usa una librería Apollo Client completa sino `fetch()` nativo con un helper `gql()` que:

1. Adjunta el token JWT como header `Authorization: Bearer <token>`
2. Serializa el cuerpo como `{ query, variables }`
3. Lanza excepción ante errores HTTP o errores GraphQL
4. Devuelve `payload.data`

### Autenticación

- El backend firma tokens JWT con la clave `AUTH_SECRET` del entorno
- El resolver de auth expone `iniciarSesion(datos)` que devuelve `{ token, usuario }`
- El token se guarda en `localStorage` bajo la clave `auth_session`
- Cada request subsecuente incluye el token en el header `Authorization`
- Los resolvers usan `alumnoService.getSessionUserFromContext(ctx)` para extraer el usuario del contexto Apollo

---

## Módulos del backend

| Módulo | Responsabilidad |
|---|---|
| `auth` | Login/registro, firma y validación de JWT |
| `alumno` | CRUD de usuarios, verificación de roles |
| `asignacion` | Asignaciones académicas por parcial y grupo |
| `contenido` | Unidades de contenido educativo |
| `evaluacion` | Entregas de alumnos, calificaciones |
| `cuestionario` | Cuestionarios dinámicos (ver [módulo detallado](./modulo-cuestionarios.md)) |
| `recurso` | Archivos y recursos adjuntos |
| `rubrica` | Rúbricas de evaluación |
| `unidad` | Unidades temáticas del currículo |
| `video` | Gestión de videos educativos |
| `insignia` | Sistema de logros/insignias |
| `prisma` | Capa de acceso a datos SQL (no es Prisma Client) |

---

## Patrón de PrismaService personalizado

> **Crítico:** El proyecto NO usa el cliente generado de Prisma. `PrismaService` es una abstracción sobre `pg.Pool` con métodos SQL escritos a mano.

```typescript
// Cada "modelo" es una propiedad readonly con funciones SQL
class PrismaService {
  readonly cuestionario = {
    findMany: (args?) => this.findCuestionarios(args?.where),
    findUnique: (args)  => this.findCuestionarioById(args.where.id),
    create:    (args)   => this.createCuestionarioCompleto(args.data),
    update:    (args)   => this.updateCuestionarioInfo(args.where.id, args.data),
    delete:    (args)   => this.deleteCuestionario(args.where.id),
  };
  // ... más modelos ...
}
```

Las tablas se crean automáticamente en `ensureCoreSchema()` con `CREATE TABLE IF NOT EXISTS`, eliminando la necesidad de migraciones.

---

## Flujo de autenticación

```
[Browser]                    [NestJS]                    [PostgreSQL]
   │                             │                              │
   │  POST /graphql              │                              │
   │  { iniciarSesion(datos) }   │                              │
   │────────────────────────────>│                              │
   │                             │  SELECT * FROM "Alumno"      │
   │                             │  WHERE email=$1             │
   │                             │─────────────────────────────>│
   │                             │<─────────────────────────────│
   │                             │  bcrypt.compare(pass, hash) │
   │                             │  signJwt(payload, secret)   │
   │<────────────────────────────│                              │
   │  { token, usuario }         │                              │
   │                             │                              │
   │  Guarda en localStorage     │                              │
   │                             │                              │
   │  POST /graphql              │                              │
   │  Authorization: Bearer <t>  │                              │
   │────────────────────────────>│                              │
   │                             │  verifyJwt(token, secret)   │
   │                             │  ctx.user = { id, rol, ... }│
```

---

## Enrutamiento del frontend (basado en estado)

El frontend NO usa React Router. El enrutamiento es un estado `currentView` en `App.jsx` que controla qué componente se muestra:

```javascript
const VISTAS_PANEL = {
  alumno:    'Panel Alumno',
  moderador: 'Panel Moderador',
  admin:     'Panel Administrador',
};
```

Al iniciar sesión, el rol del usuario determina la vista inicial. Los dashboards no tienen URL propia — toda la SPA vive en la misma URL raíz.
