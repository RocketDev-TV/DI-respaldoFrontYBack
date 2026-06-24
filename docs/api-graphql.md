# API GraphQL — Referencia

**Endpoint:** `POST /graphql`  
**Autenticación:** Header `Authorization: Bearer <JWT_TOKEN>`

Todas las operaciones requieren autenticación salvo `iniciarSesion` y `registrarAlumno`.

---

## Convenciones

- Los tipos `Int` en variables corresponden a IDs numéricos enteros
- Los tipos `Float` corresponden a calificaciones (0.0 – 100.0)
- Los tipos `Boolean` pueden ser `null` para indicar "sin filtro"
- Las mutations protegidas lanzan error `401 Unauthorized` sin token válido
- Las mutations de staff lanzan `403 Forbidden` si el rol no es MODERADOR o ADMINISTRADOR

---

## Autenticación

### `iniciarSesion`

```graphql
mutation IniciarSesion($datos: LoginInput!) {
  iniciarSesion(datos: $datos) {
    token
    usuario {
      id
      nombre
      apellido
      email
      grupo
      rol
      estado
    }
  }
}
```

Variables:
```json
{
  "datos": {
    "email": "alumno@ejemplo.com",
    "password": "mi_contraseña"
  }
}
```

### `registrarAlumno`

```graphql
mutation RegistrarAlumno($datos: RegistrarAlumnoInput!) {
  registrarAlumno(datos: $datos) {
    id
    nombre
    apellido
    email
    grupo
    rol
  }
}
```

---

## Gestión de usuarios (ADMINISTRADOR)

### `usuarios` — Listar todos

```graphql
query Usuarios {
  usuarios {
    id nombre apellido email grupo rol estado
  }
}
```

### `actualizarUsuario`

```graphql
mutation ActualizarUsuario($id: Int!, $datos: ActualizarAlumnoInput!) {
  actualizarUsuario(id: $id, datos: $datos) {
    id nombre apellido email grupo rol estado
  }
}
```

### `eliminarUsuario`

```graphql
mutation EliminarUsuario($id: Int!) {
  eliminarUsuario(id: $id) {
    id
  }
}
```

---

## Cuestionarios

### Tipos de retorno

```graphql
type Cuestionario {
  id: Int!
  titulo: String!
  descripcion: String!
  activo: Boolean!
  creadoEn: String!
  preguntas: [Pregunta!]!
}

type Pregunta {
  id: Int!
  texto: String!
  tipo: TipoPregunta!     # MULTIPLE | ABIERTA
  puntos: Float!
  cuestionarioId: Int!
  opciones: [OpcionRespuesta!]!
}

type OpcionRespuesta {
  id: Int!
  texto: String!
  esCorrecta: Boolean!
  preguntaId: Int!
}

type EvaluacionCuestionario {
  id: Int!
  alumnoId: Int!
  cuestionarioId: Int!
  calificacionFinal: Float!
  pendienteRevision: Boolean!
  completadoEn: String!
}

type EvaluacionConAlumno {
  # Todos los campos de EvaluacionCuestionario +
  alumnoNombre: String!
  alumnoApellido: String!
  alumnoEmail: String!
  alumnoGrupo: String!
}

type RespuestaAbierta {
  id: Int!
  alumnoId: Int!
  cuestionarioId: Int!
  preguntaId: Int!
  texto: String!
  calificada: Boolean!
  esCorrecta: Boolean
  puntosOtorgados: Float
  creadoEn: String!
  alumnoNombre: String!
  alumnoApellido: String!
  preguntaTexto: String!
  preguntaPuntos: Float!
}
```

### Queries

#### `cuestionarios` — Listar cuestionarios

```graphql
query Cuestionarios($todos: Boolean) {
  cuestionarios(todos: $todos) {
    id titulo descripcion activo creadoEn
    preguntas {
      id texto tipo puntos
      opciones { id texto esCorrecta }
    }
  }
}
```

- `todos: true` → devuelve todos (incluyendo inactivos). Requiere MODERADOR o ADMINISTRADOR.
- `todos: false` o sin argumento → solo activos. Para alumnos.

#### `cuestionario` — Obtener uno por ID

```graphql
query Cuestionario($id: Int!) {
  cuestionario(id: $id) {
    id titulo descripcion activo creadoEn
    preguntas {
      id texto tipo puntos
      opciones { id texto esCorrecta }
    }
  }
}
```

#### `evaluacionesCuestionario` — Evaluaciones de un alumno

```graphql
query EvaluacionesCuestionario($alumnoId: Int, $cuestionarioId: Int) {
  evaluacionesCuestionario(alumnoId: $alumnoId, cuestionarioId: $cuestionarioId) {
    id alumnoId cuestionarioId calificacionFinal pendienteRevision completadoEn
  }
}
```

#### `evaluacionesConAlumno` — Métricas con datos del alumno (STAFF)

```graphql
query EvaluacionesConAlumno($cuestionarioId: Int!) {
  evaluacionesConAlumno(cuestionarioId: $cuestionarioId) {
    id alumnoId cuestionarioId calificacionFinal pendienteRevision completadoEn
    alumnoNombre alumnoApellido alumnoEmail alumnoGrupo
  }
}
```

#### `respuestasAbiertas` — Respuestas abiertas para calificar (STAFF)

```graphql
query RespuestasAbiertas($cuestionarioId: Int, $alumnoId: Int, $calificada: Boolean) {
  respuestasAbiertas(cuestionarioId: $cuestionarioId, alumnoId: $alumnoId, calificada: $calificada) {
    id alumnoId cuestionarioId preguntaId texto calificada esCorrecta puntosOtorgados creadoEn
    alumnoNombre alumnoApellido preguntaTexto preguntaPuntos
  }
}
```

- `calificada: false` → pendientes de calificar
- `calificada: true` → ya calificadas
- Sin argumento → todas

### Mutations

#### `crearCuestionarioCompleto` (STAFF)

```graphql
mutation CrearCuestionarioCompleto($datos: CrearCuestionarioInput!) {
  crearCuestionarioCompleto(datos: $datos) {
    id titulo descripcion activo creadoEn
    preguntas { id texto tipo puntos opciones { id texto esCorrecta } }
  }
}
```

Input:
```json
{
  "datos": {
    "titulo": "Examen de álgebra",
    "descripcion": "Primer parcial",
    "activo": true,
    "preguntas": [
      {
        "texto": "¿Cuánto es 2+2?",
        "tipo": "MULTIPLE",
        "puntos": 10,
        "opciones": [
          { "texto": "3", "esCorrecta": false },
          { "texto": "4", "esCorrecta": true },
          { "texto": "5", "esCorrecta": false }
        ]
      },
      {
        "texto": "Explica el teorema de Pitágoras",
        "tipo": "ABIERTA",
        "puntos": 20,
        "opciones": []
      }
    ]
  }
}
```

#### `actualizarCuestionario` (STAFF)

```graphql
mutation ActualizarCuestionario($id: Int!, $datos: ActualizarCuestionarioInput!) {
  actualizarCuestionario(id: $id, datos: $datos) { id titulo descripcion activo }
}
```

#### `eliminarCuestionario` (STAFF)

```graphql
mutation EliminarCuestionario($id: Int!) {
  eliminarCuestionario(id: $id)   # Devuelve Boolean
}
```

#### `agregarPregunta` / `actualizarPregunta` / `eliminarPregunta` (STAFF)

```graphql
mutation AgregarPregunta($datos: AgregarPreguntaInput!) {
  agregarPregunta(datos: $datos) { id texto tipo puntos cuestionarioId opciones { id texto esCorrecta } }
}

mutation ActualizarPregunta($id: Int!, $datos: ActualizarPreguntaInput!) {
  actualizarPregunta(id: $id, datos: $datos) { id texto tipo puntos cuestionarioId opciones { id texto esCorrecta } }
}

mutation EliminarPregunta($id: Int!) {
  eliminarPregunta(id: $id)   # Devuelve Boolean
}
```

#### `agregarOpcion` / `actualizarOpcion` / `eliminarOpcion` (STAFF)

```graphql
mutation AgregarOpcion($datos: AgregarOpcionInput!) {
  agregarOpcion(datos: $datos) { id texto esCorrecta preguntaId }
}

mutation ActualizarOpcion($id: Int!, $datos: ActualizarOpcionInput!) {
  actualizarOpcion(id: $id, datos: $datos) { id texto esCorrecta preguntaId }
}

mutation EliminarOpcion($id: Int!) {
  eliminarOpcion(id: $id)   # Devuelve Boolean
}
```

#### `registrarEvaluacionCuestionario` (ALUMNO)

```graphql
mutation RegistrarEvaluacion($datos: RegistrarEvaluacionInput!) {
  registrarEvaluacionCuestionario(datos: $datos) {
    id alumnoId cuestionarioId calificacionFinal pendienteRevision completadoEn
  }
}
```

> Si el alumno ya contestó el cuestionario, devuelve `null` (ON CONFLICT DO NOTHING).

#### `registrarRespuestaAbierta` (ALUMNO)

```graphql
mutation RegistrarRespuestaAbierta($datos: RegistrarRespuestaAbiertaInput!) {
  registrarRespuestaAbierta(datos: $datos) {
    id alumnoId cuestionarioId preguntaId texto calificada
  }
}
```

Input:
```json
{
  "datos": {
    "alumnoId": 5,
    "cuestionarioId": 3,
    "preguntaId": 12,
    "texto": "El teorema de Pitágoras establece que..."
  }
}
```

#### `calificarRespuestaAbierta` (STAFF)

```graphql
mutation CalificarRespuestaAbierta($datos: CalificarRespuestaAbiertaInput!) {
  calificarRespuestaAbierta(datos: $datos) {
    id calificada esCorrecta puntosOtorgados alumnoNombre alumnoApellido preguntaTexto
  }
}
```

Input:
```json
{
  "datos": {
    "id": 7,
    "esCorrecta": true,
    "puntosOtorgados": 20
  }
}
```

> Al calificar la última respuesta abierta de un intento, el servicio recalcula `calificacionFinal` de la `EvaluacionCuestionario` y pone `pendienteRevision = false`.

---

## Códigos de error

| Mensaje | Causa |
|---|---|
| `Unauthorized` | Token ausente, inválido o expirado |
| `Forbidden` | Rol insuficiente para la operación |
| `Error HTTP 500` | Error interno del servidor (revisar logs de NestJS) |
| `Error GraphQL: ...` | Error de negocio devuelto por el resolver |
