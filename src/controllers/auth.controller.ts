import type { Request, Response } from "express";

import * as service from "../services/auth.service.js";

export const login = async (req: Request, res: Response) => {
  try {
    const data = await service.login(req.body.email, req.body.password);

    return res.json(data);
  } catch (error: any) {
    return res.status(401).json({
      message: error.message,
    });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const data = await service.register(
      req.body.username,
      req.body.email,
      req.body.password,
    );

    return res.status(201).json(data);
  } catch (error: any) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
