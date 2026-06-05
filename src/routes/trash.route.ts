import { Router } from "express";
import * as controller from "../controllers/trash.controller.js";
import { trashSchema } from "../validations/trash.validation.js";
import { validate } from "../middlewares/validate.middleware.js";

const router = Router();

router.get("/", controller.findAll);
router.get("/:id", controller.findOne);
router.post("/", validate(trashSchema), controller.create);
router.patch("/:id", controller.update);
router.delete("/:id", controller.remove);

export default router;
