import type { Request, Response } from "express";

import * as service from "../services/dashboard.service.js";

export const getDashboard = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);

    const data = await service.getDashboard(userId);

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to get dashboard",
    });
  }
};
