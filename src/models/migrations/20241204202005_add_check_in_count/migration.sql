/*
  Warnings:

  - Added the required column `check_in_count` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "check_in_count" INTEGER NOT NULL;
