import prisma from "../configs/prisma";

export const createCommunity = async (body: any) => {
  return await prisma.komunitas.create({
    data: body,
  });
};

export const getCommunity = async () => {
  return await prisma.komunitas.findMany({
    include: {
      creator: true,
      anggota: true,
      post: true,
    },
  });
};

export const joinCommunity = async (komunitasId: number, userId: number) => {
  return await prisma.anggota.create({
    data: {
      komunitasId,
      userId,
      role: "MEMBER",
    },
  });
};

export const leaveCommunity = async (komunitasId: number, userId: number) => {
  return await prisma.anggota.deleteMany({
    where: {
      komunitasId,
      userId,
    },
  });
};
