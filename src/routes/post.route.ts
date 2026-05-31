import { Router }
from "express";

import * as controller
from "../controllers/post.controller";

const router = Router();

router.post("/", controller.create);

router.get("/", controller.findAll);

router.get("/:id", controller.findOne);

router.patch("/:id", controller.update);

router.delete("/:id", controller.remove);

export default router;