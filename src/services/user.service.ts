import prisma from "../configs/prisma.js";
import bcrypt from "bcrypt";

export const createUser = async (body: any) => {
  const hashedPassword = await bcrypt.hash(body.password, 10);

  return await prisma.user.create({
    data: {
      username: body.username,
      email: body.email,
      password: hashedPassword,
    },
  });
};

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

export const getUserProfile = async (id: number) => {
  return await prisma.user.findUnique({
    where: {id},
    include: {
      title: true,
      user_xp: true,
      user_points: true,
      user_achievement: {
        include: {
          achievement: true,
        },
      },
      riwayat: {
        include: {
          sampah: true,
        },
      },
      anggota: {
        include: {
          komunitas: true,
        },
      },
      post: true,
    },
  });
};
