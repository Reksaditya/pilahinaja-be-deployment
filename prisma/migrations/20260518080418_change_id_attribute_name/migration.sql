/*
  Warnings:

  - The primary key for the `achievement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_achievement` on the `achievement` table. All the data in the column will be lost.
  - The primary key for the `anggota` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_anggota` on the `anggota` table. All the data in the column will be lost.
  - You are about to drop the column `id_komunitas` on the `anggota` table. All the data in the column will be lost.
  - You are about to drop the column `id_user` on the `anggota` table. All the data in the column will be lost.
  - The primary key for the `kategori_sampah` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_kategori` on the `kategori_sampah` table. All the data in the column will be lost.
  - The primary key for the `komunitas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_komunitas` on the `komunitas` table. All the data in the column will be lost.
  - The primary key for the `panduan_daur_ulang` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_panduan` on the `panduan_daur_ulang` table. All the data in the column will be lost.
  - You are about to drop the column `id_sampah` on the `panduan_daur_ulang` table. All the data in the column will be lost.
  - The primary key for the `penukaran_reward` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_penukaran` on the `penukaran_reward` table. All the data in the column will be lost.
  - You are about to drop the column `id_reward` on the `penukaran_reward` table. All the data in the column will be lost.
  - You are about to drop the column `id_user` on the `penukaran_reward` table. All the data in the column will be lost.
  - The primary key for the `post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_komunitas` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `id_post` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `id_user` on the `post` table. All the data in the column will be lost.
  - The primary key for the `reward` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_reward` on the `reward` table. All the data in the column will be lost.
  - The primary key for the `riwayat` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_sampah` on the `riwayat` table. All the data in the column will be lost.
  - You are about to drop the column `id_sorting` on the `riwayat` table. All the data in the column will be lost.
  - You are about to drop the column `id_user` on the `riwayat` table. All the data in the column will be lost.
  - The primary key for the `sampah` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_kategori` on the `sampah` table. All the data in the column will be lost.
  - You are about to drop the column `id_sampah` on the `sampah` table. All the data in the column will be lost.
  - The primary key for the `titles` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_title` on the `titles` table. All the data in the column will be lost.
  - The primary key for the `user_achievement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_achievement` on the `user_achievement` table. All the data in the column will be lost.
  - You are about to drop the column `id_user` on the `user_achievement` table. All the data in the column will be lost.
  - You are about to drop the column `id_user_achievement` on the `user_achievement` table. All the data in the column will be lost.
  - The primary key for the `user_points` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_history` on the `user_points` table. All the data in the column will be lost.
  - You are about to drop the column `id_user` on the `user_points` table. All the data in the column will be lost.
  - The primary key for the `user_xp` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_history` on the `user_xp` table. All the data in the column will be lost.
  - You are about to drop the column `id_user` on the `user_xp` table. All the data in the column will be lost.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_title` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `id_user` on the `users` table. All the data in the column will be lost.
  - Added the required column `komunitasId` to the `anggota` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `anggota` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sampahId` to the `panduan_daur_ulang` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rewardId` to the `penukaran_reward` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `penukaran_reward` table without a default value. This is not possible if the table is not empty.
  - Added the required column `komunitasId` to the `post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sampahId` to the `riwayat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `riwayat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kategoriId` to the `sampah` table without a default value. This is not possible if the table is not empty.
  - Added the required column `archievementId` to the `user_achievement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `user_achievement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `user_points` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `user_xp` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "anggota" DROP CONSTRAINT "anggota_id_komunitas_fkey";

-- DropForeignKey
ALTER TABLE "anggota" DROP CONSTRAINT "anggota_id_user_fkey";

-- DropForeignKey
ALTER TABLE "komunitas" DROP CONSTRAINT "komunitas_created_by_fkey";

-- DropForeignKey
ALTER TABLE "panduan_daur_ulang" DROP CONSTRAINT "panduan_daur_ulang_id_sampah_fkey";

-- DropForeignKey
ALTER TABLE "penukaran_reward" DROP CONSTRAINT "penukaran_reward_id_reward_fkey";

-- DropForeignKey
ALTER TABLE "penukaran_reward" DROP CONSTRAINT "penukaran_reward_id_user_fkey";

-- DropForeignKey
ALTER TABLE "post" DROP CONSTRAINT "post_id_komunitas_fkey";

-- DropForeignKey
ALTER TABLE "post" DROP CONSTRAINT "post_id_user_fkey";

-- DropForeignKey
ALTER TABLE "riwayat" DROP CONSTRAINT "riwayat_id_sampah_fkey";

-- DropForeignKey
ALTER TABLE "riwayat" DROP CONSTRAINT "riwayat_id_user_fkey";

-- DropForeignKey
ALTER TABLE "sampah" DROP CONSTRAINT "sampah_id_kategori_fkey";

-- DropForeignKey
ALTER TABLE "user_achievement" DROP CONSTRAINT "user_achievement_id_achievement_fkey";

-- DropForeignKey
ALTER TABLE "user_achievement" DROP CONSTRAINT "user_achievement_id_user_fkey";

-- DropForeignKey
ALTER TABLE "user_points" DROP CONSTRAINT "user_points_id_user_fkey";

-- DropForeignKey
ALTER TABLE "user_xp" DROP CONSTRAINT "user_xp_id_user_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_id_title_fkey";

-- AlterTable
ALTER TABLE "achievement" DROP CONSTRAINT "achievement_pkey",
DROP COLUMN "id_achievement",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "achievement_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "anggota" DROP CONSTRAINT "anggota_pkey",
DROP COLUMN "id_anggota",
DROP COLUMN "id_komunitas",
DROP COLUMN "id_user",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "komunitasId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "anggota_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "kategori_sampah" DROP CONSTRAINT "kategori_sampah_pkey",
DROP COLUMN "id_kategori",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "kategori_sampah_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "komunitas" DROP CONSTRAINT "komunitas_pkey",
DROP COLUMN "id_komunitas",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "komunitas_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "panduan_daur_ulang" DROP CONSTRAINT "panduan_daur_ulang_pkey",
DROP COLUMN "id_panduan",
DROP COLUMN "id_sampah",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "sampahId" INTEGER NOT NULL,
ADD CONSTRAINT "panduan_daur_ulang_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "penukaran_reward" DROP CONSTRAINT "penukaran_reward_pkey",
DROP COLUMN "id_penukaran",
DROP COLUMN "id_reward",
DROP COLUMN "id_user",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "rewardId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "penukaran_reward_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "post" DROP CONSTRAINT "post_pkey",
DROP COLUMN "id_komunitas",
DROP COLUMN "id_post",
DROP COLUMN "id_user",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "komunitasId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "post_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "reward" DROP CONSTRAINT "reward_pkey",
DROP COLUMN "id_reward",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "reward_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "riwayat" DROP CONSTRAINT "riwayat_pkey",
DROP COLUMN "id_sampah",
DROP COLUMN "id_sorting",
DROP COLUMN "id_user",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "sampahId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "riwayat_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "sampah" DROP CONSTRAINT "sampah_pkey",
DROP COLUMN "id_kategori",
DROP COLUMN "id_sampah",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "kategoriId" INTEGER NOT NULL,
ADD CONSTRAINT "sampah_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "titles" DROP CONSTRAINT "titles_pkey",
DROP COLUMN "id_title",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "titles_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "user_achievement" DROP CONSTRAINT "user_achievement_pkey",
DROP COLUMN "id_achievement",
DROP COLUMN "id_user",
DROP COLUMN "id_user_achievement",
ADD COLUMN     "archievementId" INTEGER NOT NULL,
ADD COLUMN     "idt" SERIAL NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "user_achievement_pkey" PRIMARY KEY ("idt");

-- AlterTable
ALTER TABLE "user_points" DROP CONSTRAINT "user_points_pkey",
DROP COLUMN "id_history",
DROP COLUMN "id_user",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "user_points_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "user_xp" DROP CONSTRAINT "user_xp_pkey",
DROP COLUMN "id_history",
DROP COLUMN "id_user",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "user_xp_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
DROP COLUMN "id_title",
DROP COLUMN "id_user",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "titleId" INTEGER,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_titleId_fkey" FOREIGN KEY ("titleId") REFERENCES "titles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_xp" ADD CONSTRAINT "user_xp_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_points" ADD CONSTRAINT "user_points_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sampah" ADD CONSTRAINT "sampah_kategoriId_fkey" FOREIGN KEY ("kategoriId") REFERENCES "kategori_sampah"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "panduan_daur_ulang" ADD CONSTRAINT "panduan_daur_ulang_sampahId_fkey" FOREIGN KEY ("sampahId") REFERENCES "sampah"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "riwayat" ADD CONSTRAINT "riwayat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "riwayat" ADD CONSTRAINT "riwayat_sampahId_fkey" FOREIGN KEY ("sampahId") REFERENCES "sampah"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_achievement" ADD CONSTRAINT "user_achievement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_achievement" ADD CONSTRAINT "user_achievement_archievementId_fkey" FOREIGN KEY ("archievementId") REFERENCES "achievement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "penukaran_reward" ADD CONSTRAINT "penukaran_reward_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "penukaran_reward" ADD CONSTRAINT "penukaran_reward_rewardId_fkey" FOREIGN KEY ("rewardId") REFERENCES "reward"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "komunitas" ADD CONSTRAINT "komunitas_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anggota" ADD CONSTRAINT "anggota_komunitasId_fkey" FOREIGN KEY ("komunitasId") REFERENCES "komunitas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anggota" ADD CONSTRAINT "anggota_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_komunitasId_fkey" FOREIGN KEY ("komunitasId") REFERENCES "komunitas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
