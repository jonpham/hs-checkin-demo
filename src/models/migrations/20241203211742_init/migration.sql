/*
  Warnings:

  - A unique constraint covering the columns `[email_address]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email_address` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "email_address" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_address_key" ON "Student"("email_address");
