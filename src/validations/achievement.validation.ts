import { z } from "zod";

export const achievementSchema = z.object({
  nama_achievement: z.string().min(3),

  deskripsi: z.string().optional(),

  target: z.number().positive(),

  reward_xp: z.number().min(0),
});
