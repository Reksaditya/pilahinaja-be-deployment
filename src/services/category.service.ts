import prisma from "../configs/prisma.js"

export const createCategory = (data:any) => {
  return prisma.kategori.create({ data });
};

export const getCategories = () => {
  return prisma.kategori.findMany();
};

export const getCategory = (id:number) => {
  return prisma.kategori.findUnique({
    where: {id}
  });
};

export const deleteCategory = (id:number) => {
  return prisma.kategori.delete({
    where: {id}
  });
};

export const updateCategory = (id:number, data:any) => {
  return prisma.kategori.update({
    where: {id},
    data
  });
};