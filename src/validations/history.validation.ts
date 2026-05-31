import { z } from "zod";

export const riwayatSchema = z.object({
  userId: z.number(),

  sampahId: z.number(),

  jumlah: z.number().positive(),
});
