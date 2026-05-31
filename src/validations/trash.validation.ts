import { z } from "zod";

export const sampahSchema = z.object({
  nama: z.string().min(2),

  kategoriId: z.number(),

  xp: z.number().min(0),

  point: z.number().min(0),

  deskripsi: z.string().optional(),
});
