import prisma from "../configs/prisma.js";

export const createRiwayat = async (
  userId: number,
  sampahId: number,
  jumlah: number,
) => {
  return await prisma.$transaction(async (tx) => {
    const sampah = await tx.sampah.findUnique({
      where: {
        id: sampahId,
      },
    });

    if (!sampah) {
      throw new Error("Sampah not found");
    }

    const totalXP = sampah.xp * jumlah;

    const totalPoint = sampah.point * jumlah;

    const riwayat = await tx.riwayat.create({
      data: {
        userId,
        sampahId,
        jumlah,
        xp: totalXP,
        point: totalPoint,
      },
    });

    await tx.userXP.create({
      data: {
        userId,
        xp: totalXP,
      },
    });

    await tx.userPoints.create({
      data: {
        userId,
        points: totalPoint,
      },
    });

    return riwayat;
  });
};
