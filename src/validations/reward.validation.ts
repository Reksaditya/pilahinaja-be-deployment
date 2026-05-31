import { z } from "zod";

export const rewardSchema = z.object({
  nama: z.string().min(2),

  jenis: z.string(),

  poin: z.number().positive(),

  stok: z.number().min(0),
});

export const redeemRewardSchema = z.object({
  userId: z.number(),

  rewardId: z.number(),
});
