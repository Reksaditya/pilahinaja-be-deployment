import { Request, Response } from "express";
import * as service from "../services/achievement.service.js"

export const create = async (req: Request, res: Response) => {
  try {
    const data = await service.createAchievement(req.body);

    res.status(201).json(data);
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  };
};

export const findAll = async (req: Request, res: Response) => {
  try {
    const data = await service.getAchievements();

    res.json(data);
  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  };
};

export const findById = async (req: Request, res: Response) => {
  try {
    const data = await service.checkAchievement(req.body.id);

    res.json(data);
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  };
};