import { z } from "zod";

export const postSchema = z.object({
  komunitasId: z.number(),

  userId: z.number(),

  title: z.string().min(3),

  desc: z.string().min(0),

  media: z.string().optional(),
});
