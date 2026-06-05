import { Router } from "express";

import * as controller from "../controllers/community.controller.js";

const router = Router();

router.post("/", controller.create);

router.get("/", controller.findAll);

router.post("/:id/join", controller.join);

router.delete("/:id/leave", controller.leave);

export default router;