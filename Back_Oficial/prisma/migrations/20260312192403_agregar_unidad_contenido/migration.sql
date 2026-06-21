-- CreateEnum
CREATE TYPE "TipoContenido" AS ENUM ('LECCION', 'RECURSO', 'TAREA');

-- CreateTable
CREATE TABLE "Unidad" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Unidad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contenido" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "tipo" "TipoContenido" NOT NULL DEFAULT 'LECCION',
    "orden" INTEGER NOT NULL,
    "url_recurso" TEXT,
    "contenido" TEXT[],
    "unidadId" INTEGER NOT NULL,

    CONSTRAINT "Contenido_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Contenido" ADD CONSTRAINT "Contenido_unidadId_fkey" FOREIGN KEY ("unidadId") REFERENCES "Unidad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
