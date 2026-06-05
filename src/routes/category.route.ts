import { Router } from "express";
import * as controller from "../controllers/category.controller.js"

const router = Router();

router.get("/", controller.findAll);
router.get("/:id", controller.findOne);
router.post("/", controller.create);
router.patch("/:id", controller.update);
router.delete("/:id", controller.remove);

export default router;