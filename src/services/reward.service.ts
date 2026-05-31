import prisma from "../configs/prisma";

export const createReward = async (body: any) => {
  return await prisma.reward.create({
    data: body,
  });
};

export const getRewards = async () => {
  return await prisma.reward.findMany();
};

export const redeemReward = async (userId: number, rewardId: number) => {
  return await prisma.$transaction(async (tx) => {
    const reward = await tx.reward.findUnique({
      where: {
        id: rewardId,
      },
    });

    if (!reward) {
      throw new Error("Reward not found");
    }

    if (reward.stok <= 0) {
      throw new Error("Reward out of stock");
    }

    const userPoint = await tx.userPoints.aggregate({
      where: {
        userId,
      },
      _sum: {
        points: true,
      },
    });

    const totalPoint = userPoint._sum.points || 0;

    if (totalPoint < reward.poin) {
      throw new Error("Insufficient points");
    }

    await tx.userPoints.create({
      data: {
        userId,
        points: -reward.poin,
      },
    });

    await tx.reward.update({
      where: {
        id: rewardId,
      },
      data: {
        stok: {
          decrement: 1,
        },
      },
    });

    return await tx.penukaranReward.create({
      data: {
        userId,
        rewardId,
        status: "SUCCESS",
      },
    });
  });
};
