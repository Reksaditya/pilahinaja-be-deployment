import { Router } from "express";
import * as controller from "../controllers/leaderboard.controller";

const router = Router();

router.get("/", controller.getLeaderboard);

export default router;
