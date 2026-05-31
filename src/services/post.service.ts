import prisma from "../configs/prisma";

export const createPost = async (body: any) => {
  return await prisma.post.create({
    data: body,
  });
};

export const getPosts = async () => {
  return await prisma.post.findMany({
    include: {
      user: true,
      komunitas: true,
    },
  });
};

export const getPost = async (id: number) => {
  return await prisma.post.findUnique({
    where: {
      id,
    },
    include: {
      user: true,
      komunitas: true,
    },
  });
};

export const updatePost = async (id: number, body: any) => {
  return await prisma.post.update({
    where: {
      id,
    },
    data: body,
  });
};

export const deletePost = async (id: number) => {
  return await prisma.post.delete({
    where: {
      id,
    },
  });
};
