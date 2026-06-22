# --- Etapa 1: Compilación ---
FROM node:18-alpine AS build
WORKDIR /app

# Copiamos solo los archivos de dependencias primero para aprovechar el caché
COPY package*.json ./
RUN npm install

# Copiamos todo el código fuente de una vez
COPY . .

# Copiamos el .env explícitamente a su lugar
COPY .env /app/.env

RUN ls -la /app/src/services/
# Ejecutamos la compilación
RUN npm run build

# --- Etapa 2: Servidor de producción ---
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Copiamos tu archivo nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
