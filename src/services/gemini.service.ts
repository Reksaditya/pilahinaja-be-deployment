import prisma from "../configs/prisma.js";
import { genAI, geminiModel } from "../configs/gemini.js";

export const detectWaste = async (image: Buffer, mimeType: string) => {
  const prompt = `
Identifikasi sampah dari gambar.

Kembalikan HANYA JSON seperti ini:
{
  "nama": "",
  "kategori": "",
  "deskripsi": ""
}
`;

  const result = await genAI.models.generateContent({
    model: geminiModel,
    contents: [
      {
        inlineData: {
          mimeType,
          data: image.toString("base64"),
        },
      },
      prompt,
    ],
  });

  const text = result.text || "";

  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");

  if (start === -1 || end === -1) {
    return {
      source: "AI",
      error: "Invalid AI response",
      raw: text,
    };
  }

  let parsed;

  try {
    parsed = JSON.parse(text.slice(start, end + 1));
  } catch (err) {
    return {
      source: "AI",
      error: "JSON parse failed",
      raw: text,
    };
  }

  const sampah = await prisma.sampah.findFirst({
    where: {
      nama: {
        contains: parsed.nama || "",
        mode: "insensitive",
      },
    },
    include: {
      kategori: true,
      panduan_daur_ulang: true,
    },
  });

  if (!sampah) {
    return {
      source: "AI",
      ...parsed,
    };
  }

  return {
    source: "DATABASE",
    nama: sampah.nama,
    kategori: sampah.kategori?.nama_kategori,
    xp: sampah.xp,
    point: sampah.point,
    deskripsi: sampah.deskripsi,
    panduan: sampah.panduan_daur_ulang,
  };
};