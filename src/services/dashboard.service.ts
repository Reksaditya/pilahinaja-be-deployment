import prisma from "../configs/prisma.js";
import { getTotalXP } from "./user.service.js";
import { getTotalPoint } from "./user.service.js";

export const getDashboard = async (id: number) => {
  const totalXP = await getTotalXP(id);

  const totalPoint = await getTotalPoint(id);

  const achievementCount = await prisma.userAchievement.count({
    where: {
      userId: id,
    },
  });

  const recycleCount = await prisma.riwayat.count({
    where: {
      userId: id,
    },
  });

  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
    include: {
      title: true,
    },
  });

  return {
    user,
    totalXP,
    totalPoint,
    achievementCount,
    recycleCount,
    title: user?.title?.nama_title,
  };
};
