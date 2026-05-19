import { Router } from "express";
import * as controller from "../controllers/trash.controller"

const router = Router();

router.get("/", controller.findAll);
router.get("/:id", controller.findOne);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

export default router;