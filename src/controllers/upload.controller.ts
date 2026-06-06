import { Request, Response } from "express";
import * as service from "../services/gemini.service.ts";

const analyzeImageController = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const result = await service.detectWaste(
      req.file.buffer,
      req.file.mimetype
    );

    return res.json({
      success: true,
      result,
    });
  } catch (err:any) {
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

export { analyzeImageController };