/*
  Warnings:

  - You are about to drop the column `convidados` on the `projetos` table. All the data in the column will be lost.
  - You are about to drop the column `data_apresentacao` on the `projetos` table. All the data in the column will be lost.
  - You are about to drop the column `observacoes` on the `projetos` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_projetos" (
    "UUID" TEXT NOT NULL,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome_projeto" TEXT NOT NULL,
    "membros_projeto" TEXT NOT NULL,
    "turma_projeto" TEXT NOT NULL,
    "data_criacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status_projeto" TEXT NOT NULL DEFAULT 'Pendente',
    "updateAt" DATETIME NOT NULL
);
INSERT INTO "new_projetos" ("UUID", "data_criacao", "id", "membros_projeto", "nome_projeto", "status_projeto", "turma_projeto", "updateAt") SELECT "UUID", "data_criacao", "id", "membros_projeto", "nome_projeto", "status_projeto", "turma_projeto", "updateAt" FROM "projetos";
DROP TABLE "projetos";
ALTER TABLE "new_projetos" RENAME TO "projetos";
CREATE UNIQUE INDEX "projetos_UUID_key" ON "projetos"("UUID");
CREATE UNIQUE INDEX "projetos_id_key" ON "projetos"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
