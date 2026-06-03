import { Request, Response } from "express";
import { GoogleGenAI } from "@google/genai";

import * as service from "../services/gemini.service";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export const prompt = async (req: Request, res: Response) => {
  try {
    const file = req.file as Express.Multer.File;

    if (!req.file) {
      return res.status(400).json({
        message: "Image is required",
      });
    }

    const result = await service.detectWaste(req.file.buffer);

    res.json({
      success: true,
      result: result,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const detectWaste = async (req: Request, res: Response) => {
  try {
    const file = req.file as Express.Multer.File;

    console.log(req.file);

    if (!req.file) {
      return res.status(400).json({
        message: "Image is required",
      });
    }

    const result = await service.detectWaste(req.file.buffer);

    return res.json(result);
  } catch (error: any) {
    console.error(error);

    return res.status(500).json({
      message: error.message,
    });
  }
};
