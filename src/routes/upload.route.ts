import { Router } from "express";
import upload from "../middlewares/multer.middleware.ts";
import * as controller from "../controllers/upload.controller.ts";

const router = Router();

router.post("/", upload.single("image"), controller.analyzeImageController);

export default router;