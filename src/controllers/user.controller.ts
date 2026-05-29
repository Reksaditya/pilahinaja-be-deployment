import type { Request, Response } from "express";

import * as service from "../services/user.service.js";

export const create = async (req: Request, res: Response) => {
  try {
    const data = await service.createUser(req.body);

    return res.status(201).json(data);
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

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

    if (!data) {
      return res.status(404).json({
        message: "User not found",
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
