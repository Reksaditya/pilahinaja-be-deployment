import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI_API_KEY is missing");
}

export const genAI = new GoogleGenAI({
  apiKey,
});

export const geminiModel = "gemini-2.5-flash";