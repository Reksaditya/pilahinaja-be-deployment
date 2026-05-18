import { prisma } from "../configs/prisma";

export const createUser = async (data: any) => {
  return prisma.user.create({ data });
};

export const getUsers = async () => {
  return prisma.user.findMany({
    include: {
      title: true,
    },
  });
};

export const getUser = async (id: number) => {
  return prisma.user.findUnique({
    where: { id },
    include: {
      title: true,
      user_xp: true,
      user_points: true,
      user_achievement: true,
    },
  });
};

export const getUserByEmail = (email: string) => {
  return prisma.user.findUnique({
    where: { email },
  });
};

export const updateUser = async (id: number, data: any) => {
  return prisma.user.update({
    where: { id },
    data,
  });
};

export const updatePassword = async (id: number, password: string) => {
  return prisma.user.update({
    where: { id },
    data: { password: password },
  });
};

export const deleteUser = async (id: number) => {
  return prisma.user.delete({
    where: { id },
  });
};

export const getUserProfile = async (id: number) => {
  return prisma.user.findUnique({
    where: { id },
    include: {
      title: true,
      user_xp: true,
      user_points: true,
      riwayat: true,
      user_achievement: {
        include: {
          achievement: true,
        },
      },
      komunitas_dibuat: true,
      anggota: true,
      post: true,
    },
  });
};
