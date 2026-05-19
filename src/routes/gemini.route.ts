import { Router } from "express";
import * as controller from "../controllers/gemini.controller"

const router = Router();

router.post("/gemini", controller.prompt);

export default router;