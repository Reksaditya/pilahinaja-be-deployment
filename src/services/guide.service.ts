import prisma from "../configs/prisma"

export const createGuide = async (data:any) => {
  return prisma.panduanDaurUlang.create({ data })
}

export const getGuides = () => {
  return prisma.panduanDaurUlang.findMany()
}

export const getGuide = (id:number) => {
  return prisma.panduanDaurUlang.findUnique({
    where: {id}
  })
}

export const updateGuide = (id:number, data:any) => {
  return prisma.panduanDaurUlang.update({
    where: {id},
    data
  })
}

export const deleteGuide = (id:number) => {
  return prisma.panduanDaurUlang.delete({
    where: {id}
  })
}