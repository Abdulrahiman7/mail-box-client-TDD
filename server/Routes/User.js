import { Router } from "express";
import Validate from "../Middleware/ValidateUser.js";
import { signupController } from "../Controllers/User.js";

const router=Router();

router.post('/login',Validate, signupController);

export default router;