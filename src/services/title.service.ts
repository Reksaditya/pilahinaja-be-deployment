import { prisma } from "../configs/prisma";

export const createTitle = async (data:any) => {
  return prisma.title.create({ data });
};

export const getTitles = async () => {
  return prisma.title.findMany();
};

export const getTitle = async (id:number) => {
  return prisma.title.findUnique({
    where: {id}
  });
};

export const updateTitle = async (id:number,data:any) => {
  return prisma.title.update({
    where: {id},
    data
  });
};

export const deleteUser = async (id:number) => {
  return prisma.title.delete({
    where: {id}
  });
};