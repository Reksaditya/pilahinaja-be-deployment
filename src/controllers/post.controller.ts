import { Request, Response } from "express";

import * as service from "../services/post.service";

export const create = async (req: Request, res: Response) => {
  try {
    const data = service.createPost(req.body);

    res.status(201).json(data);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const findAll = async (req: Request, res: Response) => {
  try {
    const data = service.getPosts();

    res.json(data);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const findOne = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = service.getPost(id);

    if (!data) {
      res.status(404).json({message: "Post not found"})
    }

    res.json(data);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = service.updatePost(id, req.body);

    if (!data) {
      res.status(404).json({message: "Post not found"})
    }

    res.json(data);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = service.deletePost(id);

    if (!data) {
      res.status(404).json({message: "Post not found"})
    }

    res.json(data);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
