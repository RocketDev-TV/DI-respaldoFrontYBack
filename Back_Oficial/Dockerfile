# --- ETAPA 1: Construcción ---
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Generamos el build de producción (o el archivo JS final)
RUN npm run build

# --- ETAPA 2: Producción ---
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/package*.json ./
# Instalamos solo dependencias de producción para que pese menos
RUN npm install --only=production
COPY --from=build /app/dist ./dist
# Si usas Prisma, necesitamos copiar el esquema
COPY --from=build /app/prisma ./prisma
COPY --from=build /app/src/data ./src/data
# Corremos la migración (opcional pero recomendado)
RUN npx prisma generate

EXPOSE 3001
CMD ["node", "dist/src/main.js"]
