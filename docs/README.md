# Plataforma LMS — Diseño Instruccional

**Versión:** 1.0.0  
**Entorno objetivo:** Educación superior técnica  
**Stack principal:** NestJS · GraphQL · PostgreSQL · React 18 · Tailwind CSS

---

## Descripción general

Sistema de gestión de aprendizaje (LMS) diseñado para la gestión de actividades académicas, entrega de evidencias, evaluación por rúbricas y cuestionarios dinámicos. Soporta tres roles de usuario: **Alumno**, **Moderador** (profesor) y **Administrador**.

---

## Índice de documentación

| Documento | Contenido |
|---|---|
| [Arquitectura del sistema](./arquitectura.md) | Diagrama de capas, flujo de datos, comunicación entre servicios |
| [Backend (NestJS)](./backend.md) | Módulos, servicio Prisma personalizado, guards de roles, manejo de JWT |
| [Frontend (React)](./frontend.md) | Componentes, enrutamiento basado en estado, servicios API, manejo de sesión |
| [Esquema de base de datos](./base-de-datos.md) | Tablas, columnas, relaciones, restricciones |
| [API GraphQL](./api-graphql.md) | Queries y mutations documentadas, tipos, autenticación |
| [Módulo de Cuestionarios](./modulo-cuestionarios.md) | Diseño completo del módulo de quizzes dinámicos |
| [Guía de despliegue](./despliegue.md) | Docker Compose, variables de entorno, producción |

---

## Estructura del repositorio

```
DI_Main/
├── Back_Oficial/          # API GraphQL — NestJS
│   ├── src/
│   │   ├── alumno/        # Gestión de usuarios y roles
│   │   ├── auth/          # Autenticación JWT
│   │   ├── asignacion/    # Asignaciones por parcial
│   │   ├── contenido/     # Unidades de contenido
│   │   ├── cuestionario/  # Módulo de cuestionarios dinámicos
│   │   ├── evaluacion/    # Entregas y calificaciones
│   │   ├── prisma/        # Servicio SQL personalizado
│   │   └── app.module.ts
│   ├── prisma/
│   │   └── schema.prisma  # Esquema de referencia (documentación)
│   └── docker-compose.yml
├── Front_Oficial/         # SPA React
│   └── src/
│       ├── components/    # Componentes reutilizables
│       ├── pages/         # Dashboards por rol
│       ├── services/      # Clientes GraphQL (fetch nativo)
│       └── utils/         # localStorage, auth helpers
├── docs/                  # Esta documentación técnica
└── docker-compose.yml     # Orquestación de producción
```

---

## Roles de usuario

| Rol | Código interno | Capacidades principales |
|---|---|---|
| Alumno | `ALUMNO` | Ver contenidos, entregar actividades, contestar cuestionarios |
| Moderador | `MODERADOR` | Todo lo de alumno + crear/editar asignaciones, cuestionarios, calificar respuestas abiertas |
| Administrador | `ADMINISTRADOR` | Acceso total: gestión de usuarios, métricas, todo lo de moderador |

---

## Inicio rápido (desarrollo local)

```bash
# 1. Clonar y levantar base de datos
docker compose up postgres_db -d

# 2. Backend
cd Back_Oficial
cp .env.example .env   # configurar variables
npm install
npm run start:dev      # http://localhost:3001/graphql

# 3. Frontend
cd Front_Oficial
npm install
npm start              # http://localhost:3000
```

Ver [Guía de despliegue](./despliegue.md) para producción completa.
