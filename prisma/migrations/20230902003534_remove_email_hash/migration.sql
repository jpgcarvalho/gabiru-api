/*
  Warnings:

  - You are about to drop the column `emailHash` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_emailHash_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "emailHash";
