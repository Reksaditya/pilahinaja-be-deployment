import { Router } from "express";
import * as controller from "../controllers/title.controller";

const router = Router();

router.get("/", controller.findAll);
router.get("/:id", controller.findOne);

router.post("/", controller.create);
router.patch("/:id", controller.update);
router.delete("/:id", controller.remove);

router.patch("/:id/updateTitle", controller.updateTitle);

export default router;
