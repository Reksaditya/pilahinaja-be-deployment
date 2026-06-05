import { Request, Response } from "express";
import * as service from "../services/title.service.js";

export const create = async (req: Request, res: Response) => {
  try {
    const data = await service.createTitle(req.body);
    res.status(201).json(data);
  } catch (error: any) {
    res.status(500).json({ message: "Failed to create title" });
  }
};

export const findAll = async (req: Request, res: Response) => {
  try {
    const data = await service.getTitles();
    res.json(data);
  } catch (error: any) {
    res.status(500).json({ message: "Failed to fetch titles" });
  }
};

export const findOne = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = await service.getTitle(id);

    if (!data) {
      res.status(404).json({ message: "Title not found" });
    }

    res.json(data);
  } catch (error: any) {
    res.status(500).json({ message: "Failed to fetch title" });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = await service.updateTitle(id, req.body);

    if (!data) {
      res.status(404).json({ message: "Title not found" });
    }

    res.status(200).json(data);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: error.message || "Failed to update title" });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = await service.deleteUser(id);
    res.json({ message: "Title deleted" });
  } catch (error: any) {
    res.status(500).json({ message: "Failed to delete title" });
  }
};

export const updateTitle = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = await service.updateUserTitle(id);
    res.json(data);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
