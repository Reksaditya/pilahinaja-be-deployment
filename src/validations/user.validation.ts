import { z } from "zod";

export const createUserSchema = z.object({
  username: z.string().min(3),
  email: z.email(),
  password: z.string().min(8),
  titleId: z.number().optional(),
});

export const updateUserSchema = z.object({
  username: z.string().min(3).optional(),

  email: z.email().optional(),

  titleId: z.number().optional(),
});

export const updatePasswordSchema = z.object({
  oldPassword: z.string().min(6),

  newPassword: z.string().min(6),
});
