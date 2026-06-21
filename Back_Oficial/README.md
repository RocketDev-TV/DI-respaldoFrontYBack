## Navegacion general

Sin sesion iniciada, la barra lateral muestra:

- `Cursos`
- `General`
- `Acceso`

Con sesion iniciada, la barra cambia segun el rol:

- `alumno`: acceso a `Panel del Alumno` y cursos
- `moderador`: acceso a `Panel de Moderacion` y cursos
- `administrador`: acceso a `Panel de Administracion` y cursos

## Flujos comunes para cualquier usuario

### 1. Pantalla de inicio

Validar:

- que cargue la vista `Inicio`;
- que el menu lateral responda en escritorio y movil;
- que los enlaces generales naveguen sin romper la app.

### 2. Acceso a cursos protegidos

Intentar abrir `Compiladores` o `Teoría de la Computación.` sin sesion.

Resultado esperado:

- la app debe redirigir a `Iniciar Sesion`.

### 3. Inicio de sesion

Desde `Iniciar Sesion`, validar:

- campos `Correo Electronico` y `Contrasena`;
- mensaje de error si falta algun dato;
- redireccion automatica al panel correcto segun el rol;
- persistencia de sesion al recargar;
- cierre de sesion desde el boton del panel o sidebar.

### 4. Secciones generales

Validar que sigan disponibles con y sin sesion:

- `Contacto`
- `Presentaciones`
- `Sobre Mi`
- `Tesis`

## Flujo de alumno

### Alta de cuenta

Ruta: `Registrarse`

Validar:

- captura de `nombre`, `apellido`, `email`, `password`, `confirmPassword` y `grupo`;
- error si faltan campos;
- error si el correo no es valido;
- error si la contrasena tiene menos de 6 caracteres;
- error si las contrasenas no coinciden;
- redireccion a `Iniciar Sesion` al registrarse correctamente.

Nota:

- el grupo se elige desde una lista fija: `TC-01`, `TC-02`, `TC-03`, `TC-04`.

### Panel del alumno

Ruta esperada despues de login: `Panel del Alumno`

Validar:

- nombre, apellido, correo y grupo visibles en cabecera;
- cambio entre `Parcial 1`, `Parcial 2` y `Parcial 3`;
- carga de asignaciones filtradas por grupo y parcial;
- resumen con total de actividades, entregadas y porcentaje total;
- estado por actividad: `Pendiente`, `Entregada` o `No Aplica`.

### Entrega de actividades

Dentro del checklist del parcial:

- abrir una actividad entregable;
- usar `Subir`;
- seleccionar archivo valido;
- enviar entrega.

Validar:

- que se acepte solo archivo de hasta `10 MB`;
- tipos permitidos: `PDF`, `DOC`, `DOCX`, `XLS`, `XLSX`, `ZIP`, `TXT`, `JPG`, `PNG`;
- que despues de entregar cambie el estado a `Entregada`;
- que se muestre el nombre del archivo enviado;
- que no aparezca el boton de subida para una actividad ya entregada.

### Consulta de cursos

Como alumno autenticado, validar:

- acceso a `Compiladores` y `Teoría de la Computación.`;
- cambio entre `Periodo 1`, `Periodo 2` y `Periodo 3`;
- descarga de documentos visibles;
- apertura del modal de `Evaluaciones de Reposicion`;
- listado de unidades y lecciones del `Guion Didactico`;
- entrada a una leccion individual y regreso al curso.

Observacion:

- algunas descargas y accesos son demostrativos o dependen de archivos/backend disponibles.

## Flujo de moderador

### Acceso

Ruta esperada despues de login: `Panel de Moderacion`

Validar:

- cabecera con nombre del usuario;
- boton de `Cerrar sesion`;
- carga del modulo `Moderacion de contenidos`.

### Gestion de contenidos

El moderador puede trabajar por materia desde el selector superior.

Validar:

- cambio de materia;
- carga del catalogo actual;
- recarga manual con `Recargar`.

### CRUD de unidades

Validar:

- crear unidad;
- editar unidad;
- eliminar unidad;
- reflejo inmediato en el catalogo.

### CRUD de temas

Validar:

- seleccionar unidad;
- crear tema con titulo, descripcion, tipo, orden, URL y bloques de contenido;
- editar tema;
- eliminar tema.

### CRUD de videos

Validar:

- asociar video a un tema;
- capturar `youtubeUrl`;
- asignar tipos (`APRENDIZAJE`, `ACTIVIDAD`, `OTRO`);
- vincularlo con asignaciones del mismo tema cuando existan;
- editar y eliminar video.

### CRUD de asignaciones

Validar:

- asociar asignacion a un tema;
- definir `periodo`, `porcentaje`, `orden`, `grupo` y `rubrica`;
- vincular videos;
- editar y eliminar asignacion.

Puntos a revisar en pruebas:

- que una asignacion del grupo correcto aparezca luego en el panel del alumno;
- que los videos vinculados se vean dentro de la actividad del alumno;
- que los mensajes de exito y error sean claros.

## Flujo de administrador

### Acceso

Ruta esperada despues de login: `Panel de Administracion`

Validar:

- KPIs de cantidad de `alumnos`, `moderadores` y `administradores`;
- tabs `Usuarios`, `Calificaciones` y `Contenidos`;
- cierre de sesion correcto.

### Tab de usuarios

El administrador puede crear, editar y eliminar cuentas.

Validar:

- alta de usuario con nombre, apellido, correo, password, grupo, rol y estado;
- edicion sin obligar a cambiar password;
- cambio de rol entre `Alumno`, `Moderador` y `Administrador`;
- cambio de estado `activo` e `inactivo`;
- eliminacion de usuario;
- actualizacion de la tabla despues de cada operacion.

Casos recomendados:

- crear un `moderador` nuevo y verificar que pueda iniciar sesion;
- crear un `alumno` nuevo y verificar que aparezca asociado a su grupo;
- marcar un usuario como `inactivo` y validar el comportamiento del backend si aplica.

### Tab de calificaciones

El administrador puede calificar entregas por grupo y por parcial.

Validar:

- seleccion de grupo;
- carga de alumnos del grupo;
- carga de asignaciones;
- captura y guardado de calificacion por asignacion;
- persistencia al recargar la vista.

Este flujo depende de que antes existan:

- alumnos en el grupo;
- asignaciones publicadas;
- entregas registradas por alumnos.

### Tab de contenidos

El administrador comparte el mismo modulo de gestion de contenidos que el moderador.

Videos a agregar

unidad 5 IMplementador de un analizador sintactico
https://www.youtube.com/embed/xdEAPpk-oGI?si=Vff0-LMHUfAhIIiR

Unidad 2 Automatas finitos
https://www.youtube.com/embed/mm30LqoW5XA?si=X6Fx9mBSoHZYt9rX

Tema 7: DEFINICIÓN DE AFD Y SUS DOS REQUISITOS 
https://www.youtube.com/embed/aWelqKymPAw?si=IdUigL4PACtE2oPg

MÉTODOS FORMALES Y NO FORMALES
https://www.youtube.com/embed/J8PUT33woko?si=fVJjKvgYZGZsRuyu

Reto de programación 2 Didacmax2000 
https://www.youtube.com/embed/4z4VXNP2-nU?si=K990yuoookJ3avIS

Presentacion Curso Compiladores UPIICSA
https://www.youtube.com/embed/2lpBQe6DYHA?si=YnusCr-m3uDVT7LO

Presentacion de diferencias
https://www.youtube.com/embed/tTxN9hTJ--c?si=gKLU_2DPJXkWgszg

Automatas finitos
https://www.youtube.com/embed/poBW6RzN1F0?si=qRx7BHrBaYithCl0
