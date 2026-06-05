import { Router } from "express";
import * as controller from "../controllers/user.controller.js";
import {
  createUserSchema,
  updateUserSchema,
  updatePasswordSchema
} from "../validations/user.validation.js"
import { validate } from "../middlewares/validate.middleware.js";

const router = Router();

router.get("/",
  validate(createUserSchema),
  controller.findAll
);
router.get("/:id", controller.findOne);
router.get("/profile/:id", controller.profile);

router.patch("/:id",
  validate(updateUserSchema),
  controller.update
);
router.patch("/password/:id",
  validate(updatePasswordSchema),
  controller.updatePassword
);
router.delete("/:id", controller.remove);

router.get("/xp/:id", controller.totalXp);
router.get("/point/:id", controller.totalPoint);

export default router;
