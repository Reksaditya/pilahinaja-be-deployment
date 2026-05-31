import prisma from "../configs/prisma";

export const createAchievement = async (body: any) => {
  return await prisma.achievement.create({
    data: body,
  });
};

export const getAchievements = async () => {
  return await prisma.achievement.findMany();
};

export const checkAchievement = async (userId: number) => {
  const totalRecycle = await prisma.riwayat.count({
    where: {
      userId,
    },
  });

  const achievements = await prisma.achievement.findMany();

  for (const achievement of achievements) {
    const existing = await prisma.userAchievement.findFirst({
      where: {
        userId,
        archievementId: achievement.id,
      },
    });

    if (existing) continue;

    if (totalRecycle >= achievement.target) {
      await prisma.userAchievement.create({
        data: {
          userId,
          archievementId: achievement.id,
        },
      });

      await prisma.userXP.create({
        data: {
          userId,
          xp: achievement.reward_xp,
        },
      });
    }
  }
};
