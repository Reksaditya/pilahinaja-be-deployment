import { Router } from "express";
import * as controller from "../controllers/user.controller"

const router = Router()

router.get("/", controller.findAll)
router.get("/:id", controller.findOne)
router.get("/profile/:id", controller.findUserProfile)

router.post("/", controller.create)
router.put("/:id", controller.update)
router.put("/up/:id", controller.updatePassword)
router.delete("/:id", controller.remove)

export default router

