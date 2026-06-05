import { Router } from "express";
import * as controller from "../controllers/achievement.controller.js"

const router = Router();

router.post('/', controller.create)
router.get('/', controller.findAll)
router.get('/:id', controller.findById)

export default router;