# --- ETAPA 2: Producción ---
FROM node:18-alpine
WORKDIR /app

# INSTALAMOS OPENSSL PARA QUE PRISMA LO DETECTE
RUN apk add --no-cache openssl

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