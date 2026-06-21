-- CreateEnum
CREATE TYPE "TipoVideo" AS ENUM ('APRENDIZAJE', 'ACTIVIDAD', 'OTRO');

-- AlterTable
ALTER TABLE "Alumno" ADD COLUMN     "apellido" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "estado" TEXT NOT NULL DEFAULT 'ACTIVO',
ADD COLUMN     "grupo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "password" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "rol" TEXT NOT NULL DEFAULT 'ALUMNO';

-- CreateTable
CREATE TABLE "Video" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL DEFAULT '',
    "youtubeUrl" TEXT NOT NULL,
    "youtubeId" TEXT NOT NULL,
    "tipos" "TipoVideo"[],
    "publicado" BOOLEAN NOT NULL DEFAULT true,
    "contenidoId" INTEGER,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Asignacion" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL DEFAULT '',
    "porcentaje" INTEGER NOT NULL DEFAULT 0,
    "periodo" INTEGER NOT NULL,
    "grupo" TEXT NOT NULL DEFAULT '',
    "entregable" BOOLEAN NOT NULL DEFAULT true,
    "rubrica" TEXT NOT NULL DEFAULT '',
    "orden" INTEGER NOT NULL DEFAULT 0,
    "activa" BOOLEAN NOT NULL DEFAULT true,
    "contenidoId" INTEGER,

    CONSTRAINT "Asignacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationCode" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "alumnoId" INTEGER NOT NULL,

    CONSTRAINT "VerificationCode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Entrega" (
    "id" SERIAL NOT NULL,
    "alumnoId" INTEGER NOT NULL,
    "asignacionId" INTEGER NOT NULL,
    "entregadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "calificacion" DOUBLE PRECISION,

    CONSTRAINT "Entrega_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AsignacionToVideo" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE INDEX "VerificationCode_alumnoId_idx" ON "VerificationCode"("alumnoId");

-- CreateIndex
CREATE UNIQUE INDEX "_AsignacionToVideo_AB_unique" ON "_AsignacionToVideo"("A", "B");

-- CreateIndex
CREATE INDEX "_AsignacionToVideo_B_index" ON "_AsignacionToVideo"("B");

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_contenidoId_fkey" FOREIGN KEY ("contenidoId") REFERENCES "Contenido"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asignacion" ADD CONSTRAINT "Asignacion_contenidoId_fkey" FOREIGN KEY ("contenidoId") REFERENCES "Contenido"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VerificationCode" ADD CONSTRAINT "VerificationCode_alumnoId_fkey" FOREIGN KEY ("alumnoId") REFERENCES "Alumno"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Entrega" ADD CONSTRAINT "Entrega_alumnoId_fkey" FOREIGN KEY ("alumnoId") REFERENCES "Alumno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Entrega" ADD CONSTRAINT "Entrega_asignacionId_fkey" FOREIGN KEY ("asignacionId") REFERENCES "Asignacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AsignacionToVideo" ADD CONSTRAINT "_AsignacionToVideo_A_fkey" FOREIGN KEY ("A") REFERENCES "Asignacion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AsignacionToVideo" ADD CONSTRAINT "_AsignacionToVideo_B_fkey" FOREIGN KEY ("B") REFERENCES "Video"("id") ON DELETE CASCADE ON UPDATE CASCADE;
