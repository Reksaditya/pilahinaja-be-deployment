import { Router } from "express";

import * as controller from "../controllers/auth.controller.js";
import { loginSchema } from "../validations/auth.validation.js";
import { validate } from "../middlewares/validate.middleware.js";

const router = Router();

router.post("/login", validate(loginSchema), controller.login);

router.post("/register", validate(loginSchema), controller.register);

export default router;
