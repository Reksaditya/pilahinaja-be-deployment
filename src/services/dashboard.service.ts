import prisma from "../configs/prisma";
import { getTotalXP } from "./user.service";
import { getTotalPoint } from "./user.service";

export const getDashboard = async (userId: number) => {
  const totalXP = await getTotalXP(userId);

  const totalPoint = await getTotalPoint(userId);

  const achievementCount = await prisma.userAchievement.count({
    where: {
      userId,
    },
  });

  const recycleCount = await prisma.riwayat.count({
    where: {
      userId,
    },
  });

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      title: true,
    },
  });

  return {
    totalXP,
    totalPoint,
    achievementCount,
    recycleCount,
    title: user?.title?.nama_title,
  };
};
