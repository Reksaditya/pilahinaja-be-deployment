import { Router } from "express";
import * as controller from "../controllers/dashboard.controller";

const router = Router();

router.get("/:userId", controller.getDashboard);

export default router;
