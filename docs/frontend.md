# Frontend — React 18 SPA

## Stack y versiones

| Tecnología | Versión | Uso |
|---|---|---|
| React | 18.2 | UI framework |
| Create React App | 5.0 | Build tooling |
| Tailwind CSS | (CDN / PostCSS) | Estilos utilitarios |
| Lucide React | 1.18 | Iconografía |
| Recharts | 3.8 | Gráficas BI |
| `pg` (cliente) | — | No aplica (solo backend) |

El cliente GraphQL es **`fetch()` nativo** — NO se usa Apollo Client, react-query ni similar.

---

## Estructura de carpetas

```
Front_Oficial/src/
├── components/           # Componentes reutilizables
│   ├── ChecklistPartial.jsx   # Lista de actividades del alumno
│   ├── QuizAdminPanel.jsx     # Panel de gestión de cuestionarios (staff)
│   ├── QuizBuilder.jsx        # Creador de cuestionarios
│   └── QuizPlayer.jsx         # Reproductor de cuestionarios (alumno)
├── pages/                # Vistas principales por rol
│   ├── AdminDashboard.jsx     # Panel de administrador
│   ├── TeacherDashboard.jsx   # Panel de moderador/profesor
│   └── StudentDashboard.jsx   # Panel de alumno
├── services/             # Clientes API
│   ├── apiConfig.js           # Configuración de URL del API
│   ├── authApi.js             # Login, registro, usuarios
│   ├── contenidoApi.js        # Asignaciones y contenidos
│   ├── evaluacionApi.js       # Entregas y calificaciones
│   └── cuestionarioApi.js     # Cuestionarios y evaluaciones
└── utils/
    └── localStorage.js        # Gestión de sesión y BD local
```

---

## Enrutamiento basado en estado

No hay React Router. `App.jsx` controla la vista actual con un estado:

```javascript
const [currentView, setCurrentView] = useState('Inicio');
const [usuarioLogueado, setUsuarioLogueado] = useState(null);

// Al iniciar sesión exitosamente:
const handleLoginSuccess = (usuario) => {
  setUsuarioLogueado(usuario);
  guardarSesionAuth({ token, usuario });
  if (usuario.tipo === 'alumno')     setCurrentView('Panel Alumno');
  if (usuario.tipo === 'moderador')  setCurrentView('Panel Moderador');
  if (usuario.tipo === 'admin')      setCurrentView('Panel Administrador');
};
```

Las navegaciones entre vistas usan `onNavigate('NombreVista')` pasado como prop.

---

## Gestión de sesión (`localStorage.js`)

```javascript
// Estructura del localStorage
localStorage['auth_session'] = JSON.stringify({
  token: "eyJ...",
  usuario: {
    id: 5,
    nombre: "Juan",
    apellido: "García",
    email: "juan@example.com",
    grupo: "G1",
    tipo: "alumno",    // 'alumno' | 'moderador' | 'admin'
    estado: "activo",
  }
});
```

Funciones clave:

| Función | Descripción |
|---|---|
| `obtenerSesionAuth()` | Devuelve `{ token, usuario }` o `null` |
| `obtenerUsuarioLogueado()` | Devuelve solo el objeto `usuario` |
| `guardarSesionAuth({ token, usuario })` | Persiste la sesión |
| `cerrarSesion()` | Limpia el localStorage |

---

## Helper de comunicación GraphQL (`gql()`)

Todos los servicios usan el mismo patrón:

```javascript
// En cuestionarioApi.js (y demás servicios):
function getAuthHeaders() {
  const headers = { 'Content-Type': 'application/json' };
  const token = obtenerSesionAuth()?.token;
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
}

async function gql(query, variables) {
  const res = await fetch(GRAPHQL_API_URL, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`Error HTTP ${res.status}`);
  const payload = await res.json();
  if (payload.errors?.length) throw new Error(payload.errors[0].message);
  return payload.data;
}
```

---

## Configuración de URL del API (`apiConfig.js`)

```javascript
// En desarrollo: apunta a localhost:3001
// En producción: usa REACT_APP_GRAPHQL_API_URL del entorno de build
export function getGraphqlApiUrl() {
  if (process.env.NODE_ENV === 'development') {
    const useRemote = process.env.REACT_APP_USE_REMOTE_API === 'true';
    return useRemote ? process.env.REACT_APP_GRAPHQL_API_URL : 'http://localhost:3001/graphql';
  }
  return process.env.REACT_APP_GRAPHQL_API_URL || '/graphql';
}
```

---

## Componentes principales

### `AdminDashboard.jsx`

Panel para usuarios con rol ADMINISTRADOR. Tabs:
- **Contenidos:** gestión de asignaciones y recursos
- **Cuestionarios:** `<QuizAdminPanel />` (crear, gestionar, métricas, calificar)
- **Analíticas:** métricas globales del sistema

### `TeacherDashboard.jsx`

Panel para MODERADOR (profesor). Tabs:
- **Contenido:** asignaciones del profesor
- **Recursos:** archivos y materiales
- **Cuestionarios:** `<QuizAdminPanel />`

### `StudentDashboard.jsx`

Panel para ALUMNO. Incluye:
- Lista de asignaciones por parcial con estado de entrega
- Sección de cuestionarios disponibles con estado de evaluación
- Modal con `<QuizPlayer />` para contestar cuestionarios

---

## Manejo de roles en el frontend

El tipo de usuario (`usuario.tipo`) controla qué dashboard se renderiza. Los componentes de staff (`QuizAdminPanel`, `QuizBuilder`) nunca se montan en la vista del alumno.

Las verificaciones de rol del lado del servidor son la autorización real — el frontend solo hace routing por conveniencia UX.

---

## Convenciones de código

- **Sin React Router:** navegación por props `onNavigate`
- **Sin Context API global:** el `usuario` se pasa por props desde App
- **Hooks estándar:** `useState`, `useEffect`, `useCallback`
- **Fetch nativo:** sin Apollo Client ni react-query
- **Tailwind inline:** todos los estilos con clases utilitarias
- **Error handling:** errores de API se muestran en UI, no solo en consola
