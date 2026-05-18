-- CreateTable
CREATE TABLE "users" (
    "id_user" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "id_title" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "user_xp" (
    "id_history" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "xp" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_xp_pkey" PRIMARY KEY ("id_history")
);

-- CreateTable
CREATE TABLE "user_points" (
    "id_history" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "points" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_points_pkey" PRIMARY KEY ("id_history")
);

-- CreateTable
CREATE TABLE "titles" (
    "id_title" SERIAL NOT NULL,
    "nama_title" TEXT NOT NULL,
    "min_xp" INTEGER NOT NULL,

    CONSTRAINT "titles_pkey" PRIMARY KEY ("id_title")
);

-- CreateTable
CREATE TABLE "kategori_sampah" (
    "id_kategori" SERIAL NOT NULL,
    "nama_kategori" TEXT NOT NULL,
    "deskripsi" TEXT,

    CONSTRAINT "kategori_sampah_pkey" PRIMARY KEY ("id_kategori")
);

-- CreateTable
CREATE TABLE "sampah" (
    "id_sampah" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "id_kategori" INTEGER NOT NULL,
    "xp" INTEGER NOT NULL,
    "point" INTEGER NOT NULL,
    "deskripsi" TEXT,

    CONSTRAINT "sampah_pkey" PRIMARY KEY ("id_sampah")
);

-- CreateTable
CREATE TABLE "panduan_daur_ulang" (
    "id_panduan" SERIAL NOT NULL,
    "id_sampah" INTEGER NOT NULL,
    "hasil" TEXT NOT NULL,
    "langkah" TEXT NOT NULL,

    CONSTRAINT "panduan_daur_ulang_pkey" PRIMARY KEY ("id_panduan")
);

-- CreateTable
CREATE TABLE "riwayat" (
    "id_sorting" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "id_sampah" INTEGER NOT NULL,
    "jumlah" INTEGER NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "xp" INTEGER NOT NULL,
    "point" INTEGER NOT NULL,

    CONSTRAINT "riwayat_pkey" PRIMARY KEY ("id_sorting")
);

-- CreateTable
CREATE TABLE "achievement" (
    "id_achievement" SERIAL NOT NULL,
    "nama_achievement" TEXT NOT NULL,
    "deskripsi" TEXT,
    "target" INTEGER NOT NULL,
    "reward_xp" INTEGER NOT NULL,

    CONSTRAINT "achievement_pkey" PRIMARY KEY ("id_achievement")
);

-- CreateTable
CREATE TABLE "user_achievement" (
    "id_user_achievement" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "id_achievement" INTEGER NOT NULL,
    "tanggal_tercapai" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_achievement_pkey" PRIMARY KEY ("id_user_achievement")
);

-- CreateTable
CREATE TABLE "reward" (
    "id_reward" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "jenis" TEXT NOT NULL,
    "poin" INTEGER NOT NULL,
    "stok" INTEGER NOT NULL,

    CONSTRAINT "reward_pkey" PRIMARY KEY ("id_reward")
);

-- CreateTable
CREATE TABLE "penukaran_reward" (
    "id_penukaran" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "id_reward" INTEGER NOT NULL,
    "tanggal_penukaran" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL,

    CONSTRAINT "penukaran_reward_pkey" PRIMARY KEY ("id_penukaran")
);

-- CreateTable
CREATE TABLE "komunitas" (
    "id_komunitas" SERIAL NOT NULL,
    "nama_komunitas" TEXT NOT NULL,
    "deskripsi" TEXT,
    "created_by" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "komunitas_pkey" PRIMARY KEY ("id_komunitas")
);

-- CreateTable
CREATE TABLE "anggota" (
    "id_anggota" SERIAL NOT NULL,
    "id_komunitas" INTEGER NOT NULL,
    "id_user" INTEGER NOT NULL,
    "role" TEXT NOT NULL,
    "joined_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "anggota_pkey" PRIMARY KEY ("id_anggota")
);

-- CreateTable
CREATE TABLE "post" (
    "id_post" SERIAL NOT NULL,
    "id_komunitas" INTEGER NOT NULL,
    "id_user" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "media" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id_post")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_id_title_fkey" FOREIGN KEY ("id_title") REFERENCES "titles"("id_title") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_xp" ADD CONSTRAINT "user_xp_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_points" ADD CONSTRAINT "user_points_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sampah" ADD CONSTRAINT "sampah_id_kategori_fkey" FOREIGN KEY ("id_kategori") REFERENCES "kategori_sampah"("id_kategori") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "panduan_daur_ulang" ADD CONSTRAINT "panduan_daur_ulang_id_sampah_fkey" FOREIGN KEY ("id_sampah") REFERENCES "sampah"("id_sampah") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "riwayat" ADD CONSTRAINT "riwayat_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "riwayat" ADD CONSTRAINT "riwayat_id_sampah_fkey" FOREIGN KEY ("id_sampah") REFERENCES "sampah"("id_sampah") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_achievement" ADD CONSTRAINT "user_achievement_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_achievement" ADD CONSTRAINT "user_achievement_id_achievement_fkey" FOREIGN KEY ("id_achievement") REFERENCES "achievement"("id_achievement") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "penukaran_reward" ADD CONSTRAINT "penukaran_reward_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "penukaran_reward" ADD CONSTRAINT "penukaran_reward_id_reward_fkey" FOREIGN KEY ("id_reward") REFERENCES "reward"("id_reward") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "komunitas" ADD CONSTRAINT "komunitas_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anggota" ADD CONSTRAINT "anggota_id_komunitas_fkey" FOREIGN KEY ("id_komunitas") REFERENCES "komunitas"("id_komunitas") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anggota" ADD CONSTRAINT "anggota_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_id_komunitas_fkey" FOREIGN KEY ("id_komunitas") REFERENCES "komunitas"("id_komunitas") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;
