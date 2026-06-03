import { Router } from "express";

import * as controller from "../controllers/reward.controller";
import { validate } from "../middlewares/validate.middleware";
import { redeemRewardSchema, rewardSchema } from "../validations/reward.validation";

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