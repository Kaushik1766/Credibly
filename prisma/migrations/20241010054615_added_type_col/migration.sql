/*
  Warnings:

  - Added the required column `type` to the `Links` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Links" ADD COLUMN     "type" TEXT NOT NULL;