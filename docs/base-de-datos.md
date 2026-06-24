# Esquema de Base de Datos

**Motor:** PostgreSQL 15  
**Gestión:** Las tablas se crean automáticamente en `PrismaService.ensureCoreSchema()` con `CREATE TABLE IF NOT EXISTS` al arrancar el backend.

> **Nota:** El archivo `schema.prisma` existe como referencia documental, pero NO se usa el cliente Prisma generado. Todas las queries son SQL puro a través de `pg.Pool`.

---

## Tablas del sistema

### `"Alumno"` — Usuarios del sistema

| Columna | Tipo | Restricciones | Descripción |
|---|---|---|---|
| `id` | `SERIAL` | `PRIMARY KEY` | ID auto-incremental |
| `nombre` | `TEXT` | `NOT NULL` | Nombre del usuario |
| `apellido` | `TEXT` | `NOT NULL` | Apellido |
| `email` | `TEXT` | `NOT NULL UNIQUE` | Email (identificador único) |
| `password` | `TEXT` | `NOT NULL` | Hash bcrypt |
| `grupo` | `TEXT` | `NOT NULL DEFAULT ''` | Grupo académico (ej. "G1") |
| `rol` | `TEXT` | `NOT NULL DEFAULT 'ALUMNO'` | `ALUMNO` \| `MODERADOR` \| `ADMINISTRADOR` |
| `estado` | `TEXT` | `NOT NULL DEFAULT 'activo'` | `activo` \| `inactivo` |

---

### `"Asignacion"` — Actividades académicas

| Columna | Tipo | Restricciones | Descripción |
|---|---|---|---|
| `id` | `SERIAL` | `PRIMARY KEY` | — |
| `titulo` | `TEXT` | `NOT NULL` | Nombre de la actividad |
| `descripcion` | `TEXT` | — | Descripción detallada |
| `porcentaje` | `FLOAT` | — | Peso en calificación |
| `parcial` | `INTEGER` | — | Número de parcial (1, 2, 3) |
| `grupo` | `TEXT` | — | Grupo objetivo |
| `activa` | `BOOLEAN` | `DEFAULT TRUE` | Visible para alumnos |
| `entregable` | `BOOLEAN` | `DEFAULT FALSE` | Requiere entrega de archivo |
| `rubrica` | `TEXT` | — | Texto de rúbrica |
| `archivoRespuestas` | `BYTEA` | — | Archivo de respuestas adjunto |
| `nombreArchivoRespuestas` | `TEXT` | — | Nombre del archivo |
| `mimeTypeRespuestas` | `TEXT` | — | MIME type del archivo |
| `creadoEn` | `TIMESTAMPTZ` | `DEFAULT NOW()` | — |

---

### `"Entrega"` — Entregas de alumnos

| Columna | Tipo | Restricciones | Descripción |
|---|---|---|---|
| `id` | `SERIAL` | `PRIMARY KEY` | — |
| `alumnoId` | `INT` | `REFERENCES "Alumno"` | FK alumno |
| `asignacionId` | `INT` | `REFERENCES "Asignacion"` | FK asignación |
| `archivo` | `BYTEA` | — | Contenido del archivo |
| `nombreArchivo` | `TEXT` | — | Nombre original |
| `mimeType` | `TEXT` | — | Tipo MIME |
| `calificacion` | `FLOAT` | — | Nota asignada |
| `comentario` | `TEXT` | — | Comentario del evaluador |
| `estado` | `TEXT` | `DEFAULT 'pendiente'` | `pendiente` \| `calificado` |
| `entregadoEn` | `TIMESTAMPTZ` | `DEFAULT NOW()` | — |

---

### `"Cuestionario"` — Cuestionarios dinámicos

| Columna | Tipo | Restricciones | Descripción |
|---|---|---|---|
| `id` | `SERIAL` | `PRIMARY KEY` | — |
| `titulo` | `TEXT` | `NOT NULL` | Título del cuestionario |
| `descripcion` | `TEXT` | `NOT NULL DEFAULT ''` | Descripción breve |
| `activo` | `BOOLEAN` | `NOT NULL DEFAULT TRUE` | Si `false`, invisible para alumnos |
| `creadoEn` | `TIMESTAMPTZ` | `NOT NULL DEFAULT NOW()` | — |

---

### `"Pregunta"` — Preguntas de cuestionarios

| Columna | Tipo | Restricciones | Descripción |
|---|---|---|---|
| `id` | `SERIAL` | `PRIMARY KEY` | — |
| `texto` | `TEXT` | `NOT NULL` | Enunciado de la pregunta |
| `tipo` | `TEXT` | `NOT NULL DEFAULT 'MULTIPLE'` | `MULTIPLE` \| `ABIERTA` |
| `puntos` | `FLOAT` | `NOT NULL DEFAULT 1` | Valor en puntos |
| `cuestionarioId` | `INTEGER` | `NOT NULL REFERENCES "Cuestionario" ON DELETE CASCADE` | FK cuestionario |

---

### `"OpcionRespuesta"` — Opciones de respuesta múltiple

| Columna | Tipo | Restricciones | Descripción |
|---|---|---|---|
| `id` | `SERIAL` | `PRIMARY KEY` | — |
| `texto` | `TEXT` | `NOT NULL` | Texto de la opción |
| `esCorrecta` | `BOOLEAN` | `NOT NULL DEFAULT FALSE` | Si es la respuesta correcta |
| `preguntaId` | `INTEGER` | `NOT NULL REFERENCES "Pregunta" ON DELETE CASCADE` | FK pregunta |

---

### `"EvaluacionCuestionario"` — Intentos de cuestionario

| Columna | Tipo | Restricciones | Descripción |
|---|---|---|---|
| `id` | `SERIAL` | `PRIMARY KEY` | — |
| `alumnoId` | `INTEGER` | `NOT NULL REFERENCES "Alumno"` | FK alumno |
| `cuestionarioId` | `INTEGER` | `NOT NULL REFERENCES "Cuestionario"` | FK cuestionario |
| `calificacionFinal` | `FLOAT` | `NOT NULL DEFAULT 0` | Nota final (0-100) |
| `pendienteRevision` | `BOOLEAN` | `NOT NULL DEFAULT FALSE` | Hay respuestas abiertas sin calificar |
| `completadoEn` | `TIMESTAMPTZ` | `NOT NULL DEFAULT NOW()` | — |
| — | — | `UNIQUE("alumnoId","cuestionarioId")` | Un solo intento por alumno |

> La restricción `UNIQUE` con `ON CONFLICT DO NOTHING` en el INSERT garantiza que un alumno solo pueda contestar cada cuestionario **una vez**.

---

### `"RespuestaAbierta"` — Respuestas de texto libre

| Columna | Tipo | Restricciones | Descripción |
|---|---|---|---|
| `id` | `SERIAL` | `PRIMARY KEY` | — |
| `alumnoId` | `INT` | `REFERENCES "Alumno"` | FK alumno |
| `cuestionarioId` | `INT` | `REFERENCES "Cuestionario"` | FK cuestionario |
| `preguntaId` | `INT` | `REFERENCES "Pregunta"` | FK pregunta |
| `texto` | `TEXT` | — | Respuesta del alumno |
| `calificada` | `BOOLEAN` | `DEFAULT FALSE` | Si ya fue revisada por el profesor |
| `esCorrecta` | `BOOLEAN` | — | Resultado de la revisión |
| `puntosOtorgados` | `FLOAT` | — | Puntos asignados al calificar |
| `creadoEn` | `TIMESTAMPTZ` | `DEFAULT NOW()` | — |

---

## Relaciones entre entidades

```
Alumno
  ├── many EvaluacionCuestionario (alumnoId)
  └── many RespuestaAbierta (alumnoId)

Cuestionario
  ├── many Pregunta (cuestionarioId, CASCADE)
  ├── many EvaluacionCuestionario (cuestionarioId)
  └── many RespuestaAbierta (cuestionarioId)

Pregunta
  ├── many OpcionRespuesta (preguntaId, CASCADE)
  └── many RespuestaAbierta (preguntaId)
```

---

## Notas de integridad

- **CASCADE eliminar preguntas:** Cuando se elimina un cuestionario, todas sus preguntas y sus opciones se eliminan en cascada automáticamente.
- **Unicidad de evaluación:** La restricción `UNIQUE("alumnoId","cuestionarioId")` en `EvaluacionCuestionario` es la única defensa real contra re-intentos — el INSERT usa `ON CONFLICT DO NOTHING`.
- **Sin migraciones:** El esquema se inicializa con `CREATE TABLE IF NOT EXISTS`. Si se necesita alterar una columna existente (en producción), se debe ejecutar `ALTER TABLE` manualmente o recrear la tabla.
