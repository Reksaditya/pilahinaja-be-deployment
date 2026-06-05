import prisma from "../configs/prisma.js";
import { checkAchievement } from "./achievement.service.js";
import { updateUserTitle } from "./title.service.js";

export const createRiwayat = async (
  userId: number,
  sampahId: number,
  jumlah: number,
) => {
  if (jumlah <= 0) {
    throw new Error("Jumlah harus lebih dari 0");
  }

  return await prisma.$transaction(async (tx) => {
    const user = await tx.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const sampah = await tx.sampah.findUnique({
      where: {
        id: sampahId,
      },
    });

    if (!sampah) {
      throw new Error("Sampah not found");
    }

    const xp = sampah.xp * jumlah;

    const point = sampah.point * jumlah;

    const riwayat = await tx.riwayat.create({
      data: {
        userId,
        sampahId,
        jumlah,
        xp,
        point,
      },
    });

    await tx.userXP.create({
      data: {
        userId,
        xp,
      },
    });

    await tx.userPoints.create({
      data: {
        userId,
        points: point,
      },
    });

    await checkAchievement(userId);

    await updateUserTitle(userId);

    return riwayat;
  });
};
