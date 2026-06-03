import { Router } from "express";
import * as controller from "../controllers/user.controller";
import {
  createUserSchema,
  updateUserSchema,
  updatePasswordSchema
} from "../validations/user.validation"
import { validate } from "../middlewares/validate.middleware";

const router = Router();

router.get("/",
  validate(createUserSchema),
  controller.findAll
);
router.get("/:id", controller.findOne);
router.get("/:id/profile", controller.profile);

router.post("/", controller.create);
router.patch("/:id",
  validate(updateUserSchema),
  controller.update
);
router.patch("/:id/password",
  validate(updatePasswordSchema),
  controller.updatePassword
);
router.delete("/:id", controller.remove);

router.get("/:id/xp", controller.totalXp);
router.get("/:id/point", controller.totalPoint);

export default router;
