import { z } from "zod";

export const komunitasSchema = z.object({
  nama_komunitas: z.string().min(3),

  deskripsi: z.string().optional(),

  created_by: z.number(),
});

export const joinKomunitasSchema = z.object({
  userId: z.number(),
});
