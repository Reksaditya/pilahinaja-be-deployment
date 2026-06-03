import { Router } from "express";

import * as controller from "../controllers/auth.controller";
import { loginSchema } from "../validations/auth.validation";
import { validate } from "../middlewares/validate.middleware";

const router = Router();

router.post("/login", validate(loginSchema), controller.login);

router.post("/register", validate(loginSchema), controller.register);

export default router;
