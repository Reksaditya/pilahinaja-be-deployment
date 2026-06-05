import { Request, Response } from "express";
import * as service from "../services/trash.service.js"

export const create = async (req: Request, res: Response) => {
  try {
    const data = await service.createTrash(req.body);
    res.status(201).json(data);
  } catch (error:any) {
    res.status(500).json({ message: error.message});
  };
};

export const findAll = async (req: Request, res: Response) => {
  try {
    const data = await service.getTrash();
    res.json(data);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  };
};

export const findOne = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = await service.getTrashById(id);

    if (!data) {
      res.status(404).json({ message:"Category not found" });
    };

    res.json(data);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  };
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = await service.updateTrash(id, req.body);

    if (!data) {
      res.status(404).json({ message:"Category not found" });
    };

    res.status(200).json(data);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  };
};

export const remove = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = await service.deleteTrash(id);
    res.json({ message:"User deleted" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  };
};