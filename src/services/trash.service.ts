import prisma from "../configs/prisma";

export const createTrash = async (body: any) => {
  return await prisma.sampah.create({
    data: body,
  });
};

export const getTrash = async () => {
  return await prisma.sampah.findMany({
    include: {
      kategori: true,
      panduan_daur_ulang: true,
    },
  });
};

export const getTrashById = async (id: number) => {
  return await prisma.sampah.findUnique({
    where: {
      id,
    },
    include: {
      kategori: true,
      panduan_daur_ulang: true,
    },
  });
};

export const updateTrash = async (id: number, body: any) => {
  return await prisma.sampah.update({
    where: {
      id,
    },
    data: body,
  });
};

export const deleteTrash = async (id: number) => {
  return await prisma.sampah.delete({
    where: {
      id,
    },
  });
};
