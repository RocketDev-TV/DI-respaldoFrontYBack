-- CreateTable
CREATE TABLE "Rubrica" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "criterios" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "periodo" INTEGER NOT NULL,

    CONSTRAINT "Rubrica_pkey" PRIMARY KEY ("id")
);
