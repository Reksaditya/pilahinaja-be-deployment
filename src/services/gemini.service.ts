import prisma from "../configs/prisma.js";
import { genAI, geminiModel } from "../configs/gemini.js";

export const detectWaste = async (image: Buffer) => {
  const prompt = `
Identifikasi sampah.

Kembalikan HANYA JSON:

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
          mimeType: "image/jpeg",
          data: image.toString("base64"),
        },
      },
      prompt,
    ],
  });

  console.log(result.text);

  let jsonText = result.text ?? "{}";
  const jsonMatch = jsonText.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (jsonMatch) {
    jsonText = jsonMatch[1]!.trim();
  }

  const response = JSON.parse(jsonText) as { nama?: string; kategori?: string; deskripsi?: string }; 

  const sampah = await prisma.sampah.findFirst({
    where: {
      nama: {
        contains: response.nama || "",
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
      ...response,
    };
  }

  return {
    source: "DATABASE",
    nama: sampah.nama,
    kategori: sampah.kategori.nama_kategori,
    xp: sampah.xp,
    point: sampah.point,
    deskripsi: sampah.deskripsi,
    panduan: sampah.panduan_daur_ulang,
  };
};
