import { Router } from "express";

import * as controller from "../controllers/reward.controller";

const router = Router();

router.post("/", controller.create);

router.get("/", controller.findAll);

router.post("/redeem", controller.redeem);

export default router;