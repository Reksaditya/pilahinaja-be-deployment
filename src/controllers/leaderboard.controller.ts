import type { Request, Response } from "express";

import * as service from "../services/leaderboard.service";

export const getLeaderboard = async (req: Request, res: Response) => {
  try {
    const data = await service.getLeaderboard();

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to get leaderboard",
    });
  }
};
