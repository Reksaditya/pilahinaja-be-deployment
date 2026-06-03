import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!
});

async function main() {
  const response =
    await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Halo, perkenalkan dirimu."
    });

  console.log(response.text);
}

main();