-- AlterTable
ALTER TABLE "Contenido" ALTER COLUMN "tipoMateria" SET DEFAULT 'TEORIA_DE_LENGUAJES';

-- Existing mock content belongs to Teoria de Lenguajes.
UPDATE "Contenido" SET "tipoMateria" = 'TEORIA_DE_LENGUAJES';
