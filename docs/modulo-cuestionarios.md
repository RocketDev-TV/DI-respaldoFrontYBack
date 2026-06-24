# Módulo de Cuestionarios Dinámicos

## Propósito

Permitir a profesores y administradores crear cuestionarios con preguntas de opción múltiple y preguntas abiertas, que los alumnos contestan una sola vez. Las preguntas abiertas son revisadas manualmente por el profesor.

---

## Arquitectura del módulo

```
Back_Oficial/src/cuestionario/
├── cuestionario.module.ts         # Providers + imports
├── cuestionario.resolver.ts       # GraphQL: queries y mutations
├── cuestionario.service.ts        # Lógica de negocio
├── entities/
│   └── cuestionario.entity.ts     # ObjectTypes (@ObjectType)
└── dto/
    └── crear-cuestionario.input.ts # InputTypes (@InputType)

Front_Oficial/src/
├── components/
│   ├── QuizBuilder.jsx            # Creador visual de cuestionarios
│   ├── QuizPlayer.jsx             # Reproductor para alumnos
│   └── QuizAdminPanel.jsx         # Panel de gestión (staff)
└── services/
    └── cuestionarioApi.js          # Cliente GraphQL del módulo
```

---

## Entidades del módulo

### Tipos de pregunta

```typescript
enum TipoPregunta {
  MULTIPLE = 'MULTIPLE',  // Opción múltiple con una respuesta correcta
  ABIERTA  = 'ABIERTA',  // Texto libre, revisión manual
}
```

### Relaciones de datos

```
Cuestionario (1)
  └── Pregunta (N)  [CASCADE DELETE]
        └── OpcionRespuesta (N)  [CASCADE DELETE, solo si MULTIPLE]

Alumno (1)
  ├── EvaluacionCuestionario (N)  [UNIQUE por alumno+cuestionario]
  └── RespuestaAbierta (N)  [una por pregunta ABIERTA por intento]
```

---

## Flujo completo: creación de cuestionario

### 1. Crear con una sola llamada (QuizBuilder)

El creador de cuestionarios envía todo el cuestionario en un solo mutation:

```
[Profesor]                         [Backend]
   │                                   │
   │ crearCuestionarioCompleto(datos)  │
   │──────────────────────────────────>│
   │                                   │ INSERT "Cuestionario"
   │                                   │ INSERT "Pregunta" × N
   │                                   │ INSERT "OpcionRespuesta" × M
   │<──────────────────────────────────│
   │   { cuestionario con preguntas }  │
```

### 2. Editar en línea (QuizEditorInline)

El editor inline hace llamadas individuales por cambio:

| Acción | Mutation |
|---|---|
| Cambiar título/descripción/activo | `actualizarCuestionario` |
| Guardar pregunta | `actualizarPregunta` |
| Cambiar opción correcta | `actualizarOpcion` (todas las opciones) |
| Agregar pregunta | `agregarPregunta` |
| Eliminar pregunta | `eliminarPregunta` (CASCADE elimina opciones) |
| Agregar opción | `agregarOpcion` |
| Eliminar opción | `eliminarOpcion` |

---

## Flujo completo: contestar un cuestionario

```
[Alumno]                           [Backend]                    [DB]
   │                                   │                          │
   │ cuestionario(id: 5)               │                          │
   │──────────────────────────────────>│                          │
   │                                   │ SELECT cuestionario+relaciones │
   │<──────────────────────────────────│<─────────────────────────│
   │ { titulo, preguntas+opciones }    │                          │
   │                                   │                          │
   │ [Alumno contesta]                 │                          │
   │                                   │                          │
   │ evaluacionesCuestionario(         │                          │
   │   alumnoId:5, cuestionarioId:5)   │                          │
   │──────────────────────────────────>│                          │
   │<──────────────────────────────────│ [] (no ha contestado)    │
   │                                   │                          │
   │ [Calcula puntaje local]           │                          │
   │ Solo cuenta preguntas MULTIPLE    │                          │
   │                                   │                          │
   │ registrarEvaluacionCuestionario({ │                          │
   │   alumnoId:5, cuestionarioId:5,   │                          │
   │   calificacionFinal:80,           │                          │
   │   pendienteRevision:true          │                          │
   │ })                                │                          │
   │──────────────────────────────────>│                          │
   │                                   │ INSERT ON CONFLICT DO NOTHING │
   │<──────────────────────────────────│<─────────────────────────│
   │ { id:1, calificacionFinal:80 }    │                          │
   │                                   │                          │
   │ registrarRespuestaAbierta(×N)     │                          │
   │──────────────────────────────────>│                          │
   │                                   │ INSERT "RespuestaAbierta" │
   │<──────────────────────────────────│<─────────────────────────│
   │                                   │                          │
   │ [Muestra resultado + aviso]       │                          │
```

### Regla de un solo intento

La tabla `EvaluacionCuestionario` tiene `UNIQUE("alumnoId", "cuestionarioId")`. El INSERT usa:

```sql
INSERT INTO "EvaluacionCuestionario" (...)
VALUES (...)
ON CONFLICT ("alumnoId", "cuestionarioId") DO NOTHING
RETURNING id, ...
```

Si ya existe, el RETURNING devuelve vacío (`null` en el servicio). El frontend verifica si ya existe la evaluación al cargar el cuestionario y muestra la pantalla "Ya contestado" en lugar del formulario.

---

## Flujo completo: calificar respuestas abiertas

```
[Profesor]                         [Backend]
   │                                   │
   │ respuestasAbiertas(               │
   │   cuestionarioId:5,               │
   │   calificada: false               │
   │ )                                 │
   │──────────────────────────────────>│
   │<──────────────────────────────────│
   │ [lista de respuestas pendientes]  │
   │                                   │
   │ calificarRespuestaAbierta({       │
   │   id:3, esCorrecta:true,          │
   │   puntosOtorgados:20              │
   │ })                                │
   │──────────────────────────────────>│
   │                                   │ UPDATE "RespuestaAbierta"
   │                                   │ SET calificada=true,
   │                                   │     esCorrecta=true,
   │                                   │     puntosOtorgados=20
   │                                   │
   │                                   │ ¿Todas las abiertas calificadas?
   │                                   │ → Sí: recalcular calificacionFinal
   │                                   │       UPDATE "EvaluacionCuestionario"
   │                                   │       SET calificacionFinal=nueva_nota,
   │                                   │           pendienteRevision=false
   │<──────────────────────────────────│
   │ { calificada:true, ... }          │
```

### Recálculo de calificación

Cuando el profesor califica la última respuesta abierta de un intento, el servicio:

1. Suma los `puntosOtorgados` de todas las respuestas abiertas calificadas de ese intento
2. Suma los puntos obtenidos del registro de evaluación (previamente calculados para MULTIPLE)
3. Calcula el porcentaje sobre el total de puntos del cuestionario
4. Actualiza `calificacionFinal` y pone `pendienteRevision = false`

---

## Componentes del frontend

### `QuizBuilder.jsx`

**Props:** `onCreado: () => void`

Formulario de creación en 4 pasos:
1. Título y descripción
2. Agregar preguntas (tipo MULTIPLE/ABIERTA)
3. Para cada MULTIPLE: agregar opciones y marcar la correcta
4. Validar y enviar con `crearCuestionarioCompleto`

**Validaciones:**
- Título requerido
- Al menos una pregunta
- Todas las preguntas con texto
- Cada pregunta MULTIPLE debe tener al menos una opción correcta

### `QuizPlayer.jsx`

**Props:** `cuestionarioId: number`, `alumnoId?: number`

Si `alumnoId` no se pasa, se obtiene de `obtenerSesionAuth()?.usuario?.id` como fallback.

**Pantallas:**
1. **Cargando** — spinner mientras carga quiz + evalución previa
2. **Ya contestado** — si existe `EvaluacionCuestionario`, muestra nota y estado
3. **Activo** — formulario con preguntas. MULTIPLE → radio buttons, ABIERTA → textarea
4. **Resultado** — modal post-envío con nota, detalle por pregunta, aviso si hay pendientes

### `QuizAdminPanel.jsx`

**Props:** ninguna (obtiene datos propios)

Panel con 4 pestañas:

| Pestaña | Componente interno | Función |
|---|---|---|
| Crear | `QuizBuilder` | Formulario de nuevo cuestionario |
| Gestionar | `QuizEditorInline` | Editar / eliminar cuestionarios existentes |
| Métricas | `QuizMetrics` | KPIs + gráfica + tabla, filtro por grupo |
| Calificar abiertas | `OpenAnswerGrader` | Lista de respuestas abiertas pendientes |

#### `QuizMetrics` (sub-componente)

- Carga todas las evaluaciones con `fetchEvaluacionesConAlumno(cuestionarioId)`
- Filtro por grupo (botones de toggle, sin llamada extra al servidor)
- KPIs: promedio, más alta, más baja, aprobados/total
- BarChart (Recharts) con 4 buckets de color: 0-59 (rojo), 60-74 (naranja), 75-89 (amarillo), 90-100 (verde)
- Tabla de alumnos con nombre, email, grupo, calificación, estado

#### `OpenAnswerGrader` (sub-componente)

- Filtros: "pendientes" (`calificada: false`), "calificadas" (`calificada: true`), "todas"
- Si hay error de carga, lo muestra en lugar de ocultar silenciosamente
- Al calificar (Correcta/Incorrecta), elimina la fila de la vista local y llama al backend

---

## Integración en los dashboards

### TeacherDashboard

```jsx
// Pestaña "Cuestionarios":
{tabActiva === 'cuestionarios' && <QuizAdminPanel />}
```

### AdminDashboard

```jsx
// Pestaña "Cuestionarios":
{tabActiva === 'cuestionarios' && <QuizAdminPanel />}
```

### StudentDashboard

```jsx
{/* Sección de cuestionarios: */}
{cuestionarios.map((q) => (
  <QuizCard
    quiz={q}
    evaluacion={misEvaluaciones.find(e => e.cuestionarioId === q.id)}
    onContestar={() => setCuestionarioActivo(q.id)}
  />
))}

{/* Modal con QuizPlayer: */}
{cuestionarioActivo && (
  <QuizPlayer cuestionarioId={cuestionarioActivo} alumnoId={usuario?.id} />
)}
```

---

## Puntos de atención en producción

1. **Respuestas abiertas no guardadas:** Si el alumno cierra el navegador después de registrar la evaluación pero antes de que terminen las llamadas de `registrarRespuestaAbierta`, las respuestas abiertas se pierden. La evaluación queda con `pendienteRevision: true` pero sin filas en `RespuestaAbierta`. Mitigation: mejorar con transacciones en el backend.

2. **Recálculo de calificación:** Actualmente el recálculo se hace al calificar la ÚLTIMA respuesta abierta. Si el profesor califica en desorden, el porcentaje puede no actualizarse hasta que estén todas calificadas. Verificar que no queden respuestas sin calificar.

3. **Unicidad de intento:** La restricción `UNIQUE("alumnoId","cuestionarioId")` en `EvaluacionCuestionario` es la única defensa real. Si el backend recibe dos requests simultáneos del mismo alumno, PostgreSQL garantiza que solo uno se inserte.
