import type { Request, Response } from "express";

import * as service from "../services/history.service.js";

export const create = async (req: Request, res: Response) => {
  try {
    const data = await service.createRiwayat(
      req.body.userId,
      req.body.sampahId,
      req.body.jumlah,
    );

    return res.status(201).json(data);
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
