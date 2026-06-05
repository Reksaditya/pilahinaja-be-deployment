import { Request, Response } from "express";
import * as service from "../services/community.service.js";

export const create = async (req: Request, res: Response) => {
  try {
    const data = await service.createCommunity(req.body);

    res.status(201).json(data);
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const findAll = async (req: Request, res: Response) => {
  try {
    const data = await service.getCommunity();

    res.json(data);
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const join = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = await service.joinCommunity(id, req.body.userId);

    res.json(data);
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const leave = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = await service.leaveCommunity(id, req.body.userId);

    res.json(data);
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};
