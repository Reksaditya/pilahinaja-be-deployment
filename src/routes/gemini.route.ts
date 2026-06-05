import { Router } from "express";
import * as controller from "../controllers/gemini.controller.js";
import upload from "../middlewares/multer.middleware.js";

const router = Router();

router.post("/gemini", controller.prompt);
router.post("/detect", upload.single("image"), controller.detectWaste);

export default router;
