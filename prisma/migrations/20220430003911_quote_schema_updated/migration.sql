/*
  Warnings:

  - Added the required column `balcony` to the `Quotes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `blinds` to the `Quotes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fridge` to the `Quotes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `garage` to the `Quotes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `separateToilet` to the `Quotes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `steamBedroom` to the `Quotes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `steamHallway` to the `Quotes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `steamLiving` to the `Quotes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `steamStairs` to the `Quotes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studyRoom` to the `Quotes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wallWash` to the `Quotes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Quotes" ADD COLUMN     "balcony" INTEGER NOT NULL,
ADD COLUMN     "blinds" INTEGER NOT NULL,
ADD COLUMN     "fridge" INTEGER NOT NULL,
ADD COLUMN     "garage" INTEGER NOT NULL,
ADD COLUMN     "separateToilet" INTEGER NOT NULL,
ADD COLUMN     "steamBedroom" INTEGER NOT NULL,
ADD COLUMN     "steamHallway" INTEGER NOT NULL,
ADD COLUMN     "steamLiving" INTEGER NOT NULL,
ADD COLUMN     "steamStairs" INTEGER NOT NULL,
ADD COLUMN     "studyRoom" INTEGER NOT NULL,
ADD COLUMN     "wallWash" INTEGER NOT NULL;
