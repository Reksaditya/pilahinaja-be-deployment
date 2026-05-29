import { Request, Response } from "express";
import * as service from "../services/guide.service"

export const create = async (req: Request, res: Response) => {
  try {
    const data = await service.createGuide(req.body)
    res.status(201).json(data)
  } catch (error:any) {
    res.status(500).json({ message:"Failed to create guide" })
  }
}

export const findAll = async (req: Request, res: Response) => {
  try {
    const data = await service.getGuides()
    res.json(data)
  } catch (error:any) {
    res.status(500).json({ message: error.message || "Failed to fetch guides" })
  }
}

export const findOne = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    const data = await service.getGuide(id)

    if (!data) {
      res.status(404).json({ message:"Guide not found" })
    }

    res.json(data)
  } catch (error:any) {
    res.status(500).json({ message: error.message || "Failed to fetch guides" })
  }
}

export const update = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    const data = await service.updateGuide(id, req.body)

    if (!data) {
      res.status(404).json({ message:"Guide not found" })
    }

    res.status(200).json(data)
  } catch (error:any) {
    res.status(500).json({ message: error.message || "Failed to fetch guide" })
  }
}

export const remove = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    const data = await service.deleteGuide(id)
    res.json({ message:"User deleted" })
  } catch (error: any) {
    res.status(500).json({ message: error.message || "Failed to delete guide" })
  };
};