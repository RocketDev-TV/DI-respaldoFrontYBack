-- CreateEnum
CREATE TYPE "TipoPregunta" AS ENUM ('MULTIPLE', 'ABIERTA');

-- AlterTable
ALTER TABLE "Asignacion" ADD COLUMN     "archivoRespuestas" TEXT,
ADD COLUMN     "mimeTypeRespuestas" TEXT,
ADD COLUMN     "nombreArchivoRespuestas" TEXT;

-- AlterTable
ALTER TABLE "Entrega" ADD COLUMN     "archivoBase64" TEXT,
ADD COLUMN     "estado" TEXT NOT NULL DEFAULT 'ENTREGADO',
ADD COLUMN     "mimeType" TEXT,
ADD COLUMN     "nombreArchivo" TEXT,
ADD COLUMN     "respuestasDesbloqueadas" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tamano" INTEGER;

-- CreateTable
CREATE TABLE "Cuestionario" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL DEFAULT '',
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cuestionario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pregunta" (
    "id" SERIAL NOT NULL,
    "texto" TEXT NOT NULL,
    "tipo" "TipoPregunta" NOT NULL DEFAULT 'MULTIPLE',
    "puntos" DOUBLE PRECISION NOT NULL DEFAULT 1,
    "cuestionarioId" INTEGER NOT NULL,

    CONSTRAINT "Pregunta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OpcionRespuesta" (
    "id" SERIAL NOT NULL,
    "texto" TEXT NOT NULL,
    "esCorrecta" BOOLEAN NOT NULL DEFAULT false,
    "preguntaId" INTEGER NOT NULL,

    CONSTRAINT "OpcionRespuesta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EvaluacionCuestionario" (
    "id" SERIAL NOT NULL,
    "alumnoId" INTEGER NOT NULL,
    "cuestionarioId" INTEGER NOT NULL,
    "calificacionFinal" DOUBLE PRECISION NOT NULL,
    "completadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EvaluacionCuestionario_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pregunta" ADD CONSTRAINT "Pregunta_cuestionarioId_fkey" FOREIGN KEY ("cuestionarioId") REFERENCES "Cuestionario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OpcionRespuesta" ADD CONSTRAINT "OpcionRespuesta_preguntaId_fkey" FOREIGN KEY ("preguntaId") REFERENCES "Pregunta"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EvaluacionCuestionario" ADD CONSTRAINT "EvaluacionCuestionario_alumnoId_fkey" FOREIGN KEY ("alumnoId") REFERENCES "Alumno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EvaluacionCuestionario" ADD CONSTRAINT "EvaluacionCuestionario_cuestionarioId_fkey" FOREIGN KEY ("cuestionarioId") REFERENCES "Cuestionario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
