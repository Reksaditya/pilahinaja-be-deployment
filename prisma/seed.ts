import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // =====================
  // TITLE
  // =====================
  const titles = await prisma.title.createMany({
    data: [
      { nama_title: "Pemula Hijau", min_xp: 0 },
      { nama_title: "Pejuang Lingkungan", min_xp: 100 },
      { nama_title: "Eco Warrior", min_xp: 500 },
      { nama_title: "Guardian Earth", min_xp: 1000 },
    ],
    skipDuplicates: true,
  });

  // =====================
  // KATEGORI
  // =====================
  await prisma.kategori.createMany({
    data: [
      {
        nama_kategori: "Plastik",
        deskripsi: "Sampah berbahan plastik",
      },
      {
        nama_kategori: "Kertas",
        deskripsi: "Sampah berbahan kertas",
      },
      {
        nama_kategori: "Logam",
        deskripsi: "Sampah berbahan logam",
      },
      {
        nama_kategori: "Kaca",
        deskripsi: "Sampah berbahan kaca",
      },
      {
        nama_kategori: "Organik",
        deskripsi: "Sampah yang mudah terurai",
      },
    ],
    skipDuplicates: true,
  });

  const plastik = await prisma.kategori.findFirst({
    where: {
      nama_kategori: "Plastik",
    },
  });

  const kertas = await prisma.kategori.findFirst({
    where: {
      nama_kategori: "Kertas",
    },
  });

  // =====================
  // SAMPAH
  // =====================
  const botol = await prisma.sampah.create({
    data: {
      nama: "Botol Plastik",
      kategoriId: plastik!.id,
      xp: 10,
      point: 5,
      deskripsi: "Botol plastik PET",
    },
  });

  const kardus = await prisma.sampah.create({
    data: {
      nama: "Kardus",
      kategoriId: kertas!.id,
      xp: 15,
      point: 8,
      deskripsi: "Kardus bekas kemasan",
    },
  });

  // =====================
  // PANDUAN DAUR ULANG
  // =====================
  await prisma.panduanDaurUlang.createMany({
    data: [
      {
        sampahId: botol.id,
        hasil: "Pot tanaman",
        langkah:
          "Bersihkan botol, potong bagian atas, isi tanah dan tanam.",
      },
      {
        sampahId: kardus.id,
        hasil: "Kotak penyimpanan",
        langkah:
          "Lipat dan bentuk menjadi kotak penyimpanan.",
      },
    ],
  });

  // =====================
  // ACHIEVEMENT
  // =====================
  await prisma.achievement.createMany({
    data: [
      {
        nama_achievement: "Pemilah Pemula",
        deskripsi: "Membuang 10 sampah",
        target: 10,
        reward_xp: 50,
      },
      {
        nama_achievement: "Eco Hero",
        deskripsi: "Membuang 100 sampah",
        target: 100,
        reward_xp: 500,
      },
    ],
    skipDuplicates: true,
  });

  // =====================
  // REWARD
  // =====================
  await prisma.reward.createMany({
    data: [
      {
        nama: "Voucher Rp10.000",
        jenis: "Voucher",
        poin: 100,
        stok: 50,
      },
      {
        nama: "Tumbler Ramah Lingkungan",
        jenis: "Merchandise",
        poin: 250,
        stok: 20,
      },
    ],
    skipDuplicates: true,
  });

  // =====================
  // USER
  // =====================
  const password = await bcrypt.hash(
    "password123",
    10
  );

  const user = await prisma.user.create({
    data: {
      username: "admin",
      email: "admin@pilahinaja.com",
      password,
      titleId: 1,
    },
  });

  // =====================
  // USER XP
  // =====================
  await prisma.userXP.create({
    data: {
      userId: user.id,
      xp: 120,
    },
  });

  // =====================
  // USER POINTS
  // =====================
  await prisma.userPoints.create({
    data: {
      userId: user.id,
      points: 80,
    },
  });

  // =====================
  // RIWAYAT
  // =====================
  await prisma.riwayat.create({
    data: {
      userId: user.id,
      sampahId: botol.id,
      jumlah: 5,
      xp: 50,
      point: 25,
    },
  });

  // =====================
  // USER ACHIEVEMENT
  // =====================
  const achievement =
    await prisma.achievement.findFirst();

  await prisma.userAchievement.create({
    data: {
      userId: user.id,
      archievementId: achievement!.id,
    },
  });

  // =====================
  // PENUKARAN REWARD
  // =====================
  const reward =
    await prisma.reward.findFirst();

  await prisma.penukaranReward.create({
    data: {
      userId: user.id,
      rewardId: reward!.id,
      status: "SUCCESS",
    },
  });

  // =====================
  // KOMUNITAS
  // =====================
  const komunitas =
    await prisma.komunitas.create({
      data: {
        nama_komunitas: "Komunitas Hijau",
        deskripsi:
          "Komunitas peduli lingkungan",
        created_by: user.id,
      },
    });

  // =====================
  // ANGGOTA
  // =====================
  await prisma.anggota.create({
    data: {
      komunitasId: komunitas.id,
      userId: user.id,
      role: "ADMIN",
    },
  });

  // =====================
  // POST
  // =====================
  await prisma.post.create({
    data: {
      komunitasId: komunitas.id,
      userId: user.id,
      title: "Selamat Datang",
      desc: "Mari menjaga lingkungan bersama",
    },
  });

  console.log("✅ Seed completed");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });