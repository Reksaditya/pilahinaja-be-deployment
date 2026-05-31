import { z } from "zod";

export const kategoriSchema = z.object({
  nama_kategori: z.string().min(2),

  deskripsi: z.string().optional(),
});
