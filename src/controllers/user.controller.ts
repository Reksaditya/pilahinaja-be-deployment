import type { Request, Response } from "express";

import * as service from "../services/user.service.js";

export const findAll = async (req: Request, res: Response) => {
  try {
    const data = await service.getUsers();

    return res.json(data);
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const findOne = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const data = await service.getUser(id);

      if (!id || isNaN(id)) {
      return res.status(400).json({
        message: "Invalid user id",
      });
    }

    return res.json(data);
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const data = await service.updateUser(id, req.body);

    return res.json(data);
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    await service.deleteUser(id);

    return res.json({
      message: "User deleted",
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const profile = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const data = await service.getUserProfile(id);

    return res.json(data);
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const totalXp = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = await service.getTotalXP(id);

    return res.json(data);
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const totalPoint = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = await service.getTotalPoint(id);

    return res.json(data);
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const updatePassword = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.id);

    const { oldPassword, newPassword } = req.body;

    const data = await service.updatePassword(userId, oldPassword, newPassword);

    return res.status(200).json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
