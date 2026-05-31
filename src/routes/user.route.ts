import { Router } from "express";
import * as controller from "../controllers/user.controller";

const router = Router();

router.get("/", controller.findAll);
router.get("/:id", controller.findOne);
router.get("/:id/profile", controller.profile);

router.post("/", controller.create);
router.patch("/:id", controller.update);
router.patch("/:id/password", controller.updatePassword);
router.delete("/:id", controller.remove);

router.get("/:id/xp", controller.totalXp);
router.get("/:id/point", controller.totalPoint);

export default router;
