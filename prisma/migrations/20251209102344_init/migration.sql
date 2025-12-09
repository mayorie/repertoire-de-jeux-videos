/*
  Warnings:

  - You are about to drop the column `idgenre` on the `Jeu` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_JeuGenres" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_JeuGenres_A_fkey" FOREIGN KEY ("A") REFERENCES "Genre" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_JeuGenres_B_fkey" FOREIGN KEY ("B") REFERENCES "Jeu" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Jeu" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titre" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "miseEnAvant" BOOLEAN NOT NULL DEFAULT false,
    "idediteur" INTEGER NOT NULL,
    CONSTRAINT "Jeu_idediteur_fkey" FOREIGN KEY ("idediteur") REFERENCES "Editeur" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Jeu" ("date", "desc", "id", "idediteur", "miseEnAvant", "titre") SELECT "date", "desc", "id", "idediteur", "miseEnAvant", "titre" FROM "Jeu";
DROP TABLE "Jeu";
ALTER TABLE "new_Jeu" RENAME TO "Jeu";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "_JeuGenres_AB_unique" ON "_JeuGenres"("A", "B");

-- CreateIndex
CREATE INDEX "_JeuGenres_B_index" ON "_JeuGenres"("B");
