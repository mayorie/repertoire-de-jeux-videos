/*
  Warnings:

  - You are about to drop the `Task` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Task";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Jeu" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titre" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "miseEnAvant" BOOLEAN NOT NULL DEFAULT false,
    "idgenre" INTEGER NOT NULL,
    "idediteur" INTEGER NOT NULL,
    CONSTRAINT "Jeu_idgenre_fkey" FOREIGN KEY ("idgenre") REFERENCES "Genre" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Jeu_idediteur_fkey" FOREIGN KEY ("idediteur") REFERENCES "Editeur" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Editeur" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Genre_nom_key" ON "Genre"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "Editeur_nom_key" ON "Editeur"("nom");
