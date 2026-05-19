import { prisma } from "../configs/prisma"

export const createTrash = async (data:any) => {
  return prisma.sampah.create({ data })
}

export const getTrashs = () => {
  return prisma.sampah.findMany({
    include: {
      kategori: true
    }
  })
}

export const getTrash = (id:number) => {
  return prisma.sampah.findUnique({
    where: {id},
    include: {
      kategori: true,
      panduan_daur_ulang: true
    }
  })
}

export const updateTrash = (id:number, data:any) => {
  return prisma.sampah.update({
    where: {id},
    data
  })
}

export const deleteTrash = (id:number) => {
  return prisma.sampah.delete({
    where: {id}
  })
}