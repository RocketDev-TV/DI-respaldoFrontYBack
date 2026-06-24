# Guía de Despliegue

## Arquitectura de producción

```
Internet
   │
   ▼ HTTPS
[Tailscale / Reverse Proxy]   ← https://anton-server.tailb29b29.ts.net
   │
   ├──► [Frontend container]  :8080 (nginx sirve la build de React)
   │
   └──► [Backend container]   :3001 (NestJS + GraphQL)
               │
               ▼ TCP 5432
       [PostgreSQL container] :5433 (mapeado del host)
```

---

## Docker Compose (`docker-compose.yml`)

```yaml
services:
  postgres_db:
    image: postgres:15-alpine
    ports:
      - "5433:5432"
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: <PASSWORD_SEGURO>
      POSTGRES_DB: project_db
    volumes:
      - postgres_data:/var/lib/postgresql/data

  backend:
    build:
      context: ./Back_Oficial
      dockerfile: Dockerfile
    env_file: ./Back_Oficial/.env
    ports:
      - "3001:3001"
    environment:
      NODE_ENV: production
      DATABASE_URL: postgresql://postgres:<PASSWORD>@postgres_db:5432/project_db
      PORT: 3001
      AUTH_SECRET: <JWT_SECRET_SEGURO>
    depends_on:
      - postgres_db

  frontend:
    build:
      context: ./Front_Oficial
      args:
        REACT_APP_GRAPHQL_API_URL: https://tu-dominio.com/graphql
      dockerfile: Dockerfile
    ports:
      - "8080:80"
    depends_on:
      - backend

volumes:
  postgres_data:
```

---

## Variables de entorno del backend (`.env`)

```env
# Base de datos
DATABASE_URL=postgresql://postgres:PASSWORD@localhost:5433/project_db

# Servidor
PORT=3001
NODE_ENV=production

# JWT
AUTH_SECRET=genera-una-clave-aleatoria-larga-aqui
AUTH_TRANSPORT_SECRET=otra-clave-para-transport

# Email (opcional)
MAIL_HOST=smtp.ejemplo.com
MAIL_PORT=587
MAIL_USER=no-reply@ejemplo.com
MAIL_PASS=password_email
```

Generar clave segura:
```bash
openssl rand -base64 48
```

---

## Variables de entorno del frontend

Las variables de React deben configurarse **en tiempo de build** (no en runtime), porque Create React App las embede en el bundle JS.

```env
# URL del API GraphQL en producción
REACT_APP_GRAPHQL_API_URL=https://tu-dominio.com/graphql

# Para desarrollo apuntando a API remota (opcional)
REACT_APP_USE_REMOTE_API=true
```

En el `Dockerfile` del frontend, se pasan como `--build-arg`:

```dockerfile
ARG REACT_APP_GRAPHQL_API_URL
ENV REACT_APP_GRAPHQL_API_URL=$REACT_APP_GRAPHQL_API_URL

RUN npm run build
```

---

## Dockerfiles

### Backend (`Back_Oficial/Dockerfile`)

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS production
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
EXPOSE 3001
CMD ["node", "dist/main"]
```

### Frontend (`Front_Oficial/Dockerfile`)

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
ARG REACT_APP_GRAPHQL_API_URL
ENV REACT_APP_GRAPHQL_API_URL=$REACT_APP_GRAPHQL_API_URL
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### `nginx.conf` para SPA

```nginx
server {
    listen 80;
    root /usr/share/nginx/html;
    index index.html;

    # SPA fallback — todas las rutas devuelven index.html
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache agresivo para assets estáticos
    location /static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## Despliegue paso a paso

### Primera vez

```bash
# 1. Clonar el repositorio
git clone <url-del-repo> DI_Main
cd DI_Main

# 2. Configurar variables de entorno del backend
cp Back_Oficial/.env.example Back_Oficial/.env
# Editar Back_Oficial/.env con valores reales

# 3. Construir y levantar todo
docker compose up --build -d

# 4. Verificar que los contenedores están corriendo
docker compose ps

# 5. Ver logs del backend (la primera vez crea las tablas)
docker compose logs -f backend
# Buscar: "Schema ensured" o similar
```

### Actualización sin downtime

```bash
# 1. Pull de cambios
git pull origin main

# 2. Reconstruir solo el servicio que cambió
docker compose up --build -d backend
# o
docker compose up --build -d frontend

# 3. Verificar
docker compose logs -f backend
```

### Reiniciar todo (sin perder datos)

```bash
docker compose down
docker compose up -d
# Los datos de PostgreSQL persisten en el volumen postgres_data
```

### Eliminar todo y empezar de cero (DESTRUCTIVO)

```bash
docker compose down -v  # -v elimina los volúmenes (¡borra la BD!)
docker compose up --build -d
```

---

## Desarrollo local (sin Docker)

### Backend

```bash
cd Back_Oficial
npm install

# Configurar .env (apuntar DATABASE_URL a PostgreSQL local)
# Si no tienes PostgreSQL local, usar solo el servicio de Docker:
docker compose up postgres_db -d

npm run start:dev
# Servidor en http://localhost:3001/graphql
```

### Frontend

```bash
cd Front_Oficial
npm install
npm start
# App en http://localhost:3000
# Se conecta automáticamente a http://localhost:3001/graphql
```

---

## Verificación del sistema

### Comprobar que el backend está activo

```bash
curl -X POST http://localhost:3001/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"{ __typename }"}'
# Respuesta esperada: {"data":{"__typename":"Query"}}
```

### Comprobar que las tablas existen

```bash
docker exec -it project_postgres psql -U postgres -d project_db \
  -c "\dt"
# Lista todas las tablas del esquema
```

### Comprobar logs de errores del backend

```bash
docker compose logs backend --tail=100
```

---

## Backup de la base de datos

```bash
# Exportar
docker exec project_postgres pg_dump -U postgres project_db > backup_$(date +%Y%m%d).sql

# Restaurar
docker exec -i project_postgres psql -U postgres project_db < backup_20260624.sql
```
