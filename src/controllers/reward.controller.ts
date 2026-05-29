import { Request, Response } from "express";
import * as service from "../services/reward.service"

export const create = async (req: Request, res: Response) => {
  try {
    const data = await service.createReward(req.body);

    return res.status(201).json(data)
  } catch (error:any) {
    return res.status(500).json({
      message: error.message,
    });
  };
};

export const findAll = async (req: Request, res: Response) => {
  try {
    const data = await service.getRewards();

    return res.json(data);
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  };
};

export const redeem = async (req: Request, res: Response) => {
  try {
    const data = await service.redeemReward(req.body.userId, req.body.rewardId)

    return res.json(data)
  } catch (error: any) {
    return res.status(500).json({
      message: error.message
    })
  }
}