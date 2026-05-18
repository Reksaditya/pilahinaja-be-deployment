import type { Request, Response } from "express";
import * as service from "../services/user.service"


export const create = async (req: Request, res: Response) => {
  try {
    const data = await service.createUser(req.body)
    res.status(201).json(data)
  } catch (error:any) {
    res.status(500).json({ message: error.message || "Failed to create user" })
  }
}

export const findAll = async (req: Request, res: Response) => {
  try {
    const data = await service.getUsers()
    res.json(data)
  } catch (error:any) {
    res.status(500).json({ message: error.message || "Failed to fetch users" })
  }
}

export const findOne = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    const data = await service.getUser(id)

    if (!data) {
      res.status(404).json({ message: "User not found" })
    }

    res.json(data).json(data)
  } catch (error:any) {
    res.status(500).json({ message: error.message || "Failed to fetch user" })
  }
}

export const update = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    const data = await service.updateUser(id, req.body)

    if (!data) {
      res.status(404).json({ message: "User not found" })
    }

    res.status(200).json(data)
  } catch (error:any) {
    res.status(500).json({ message: error.message ||  "Failed to update user" })
  }
}

export const updatePassword = async (req:Request, res:Response) => {
  try {
    const id = Number(req.params.id)
    const data = await service.updatePassword(id, req.body)
    res.status(200)
  } catch (error:any) {
    res.status(500).json({ message: error.message || "Failed to update password" })
  }
}

export const remove = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    const data = await service.deleteUser(id)
    res.json({ message:"User deleted" })
  } catch (error: any) {
    res.status(500).json({ message: error.message || "Failed to delete user" })
  }
}

export const findUserProfile = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    const data = await service.getUserProfile(id)

    if (!data) {
      res.status(404).json({ message: "User profile not found" })
    }

    res.json(data)
  } catch (error:any) {
    res.status(500).json({ message: "Failed to get user profile" })
  }
}