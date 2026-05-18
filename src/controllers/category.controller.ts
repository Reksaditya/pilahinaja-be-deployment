import { Request, Response } from "express";
import * as service from "../services/category.service"

export const create = async (req: Request, res: Response) => {
  try {
    const data = await service.createCategory(req.body)
    res.status(201).json(data)
  } catch (error:any) {
    res.status(500).json({ message:"Failed to create category" })
  }
}

export const findAll = async (req: Request, res: Response) => {
  try {
    const data = await service.getCategories()
    res.json(data)
  } catch (error:any) {
    res.status(500).json({ message: error.message || "Failed to fetch categories" })
  }
}

export const findOne = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    const data = await service.getCategory(id)

    if (!data) {
      res.status(404).json({ message:"Category not found" })
    }

    res.json(data)
  } catch (error:any) {
    res.status(500).json({ message: error.message || "Failed to fetch category" })
  }
}

export const update = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    const data = await service.updateCategory(id, req.body)

    if (!data) {
      res.status(404).json({ message:"Category not found" })
    }

    res.status(200).json(data)
  } catch (error:any) {
    res.status(500).json({ message: error.message || "Failed to fetch category" })
  }
}

export const remove = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    const data = await service.deleteCategory(id)
    res.json({ message:"User deleted" })
  } catch (error: any) {
    res.status(500).json({ message: error.message || "Failed to delete user" })
  };
};