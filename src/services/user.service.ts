import prisma from "../configs/prisma";
import bcrypt from "bcrypt";

export const getUsers = async () => {
  return await prisma.user.findMany({
    include: {
      title: true,
    },
  });
};

export const getUser = async (id: number) => {
  return await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      title: true,
      user_xp: true,
      user_points: true,
    },
  });
};

export const updateUser = async (id: number, body: any) => {
  return await prisma.user.update({
    where: {
      id,
    },
    data: body,
  });
};

export const deleteUser = async (id: number) => {
  return await prisma.user.delete({
    where: {
      id,
    },
  });
};

export const getUserProfile = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      title: true,
      user_achievement: {
        include: {
          achievement: true,
        },
      },
    },
  });

  return {
    ...user,
    totalXP: await getTotalXP(userId),
    totalPoint: await getTotalPoint(userId),
  };
};

export const getTotalXP = async (id: number) => {
  const result = await prisma.userXP.aggregate({
    where: {
      id,
    },
    _sum: {
      xp: true,
    },
  });

  return result._sum.xp || 0;
};

export const getTotalPoint = async (id: number) => {
  const result = await prisma.userPoints.aggregate({
    where: {
      id,
    },
    _sum: {
      points: true,
    },
  });

  return result._sum.points || 0;
};

export const updatePassword = async (
  userId: number,
  oldPassword: string,
  newPassword: string,
) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const valid = await bcrypt.compare(oldPassword, user.password);

  if (!valid) {
    throw new Error("Wrong password");
  }

  const hashed = await bcrypt.hash(newPassword, 10);

  return await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      password: hashed,
    },
  });
};
