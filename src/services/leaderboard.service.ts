import prisma from "../configs/prisma.js";

export const getLeaderboard = async () => {
  const users = await prisma.user.findMany({
    include: {
      user_xp: true,
      title: true,
    },
  });

  return users
    .map((user) => {
      const totalXP = user.user_xp.reduce((sum, item) => sum + item.xp, 0);

      return {
        id: user.id,
        username: user.username,
        title: user.title?.nama_title,
        totalXP,
      };
    })
    .sort((a, b) => b.totalXP - a.totalXP);
};
