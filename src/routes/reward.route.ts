import { Router } from "express";

import * as controller from "../controllers/reward.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import { redeemRewardSchema, rewardSchema } from "../validations/reward.validation.js";

const router = Router();

router.post("/", 
  validate(rewardSchema),
  controller.create
);

router.get("/", controller.findAll);

router.post("/redeem", 
  validate(redeemRewardSchema),
  controller.redeem
);

export default router;