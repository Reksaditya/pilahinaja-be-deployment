import prisma from "../configs/prisma.js";
import { getTotalXP } from "./user.service.js";

export const createTitle = async (data: any) => {
  return prisma.title.create({ data });
};

export const getTitles = async () => {
  return prisma.title.findMany();
};

export const getTitle = async (id: number) => {
  return prisma.title.findUnique({
    where: { id },
  });
};

export const updateTitle = async (id: number, data: any) => {
  return prisma.title.update({
    where: { id },
    data,
  });
};

export const deleteUser = async (id: number) => {
  return prisma.title.delete({
    where: { id },
  });
};

export const updateUserTitle = async (userId: number) => {
  const totalXP = await getTotalXP(userId);

  const title = await prisma.title.findFirst({
    where: {
      min_xp: {
        lte: totalXP,
      },
    },
    orderBy: {
      min_xp: "desc",
    },
  });

  if (!title) return;

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      titleId: title.id,
    },
  });
};
