import { Router } from "express";
import Validate from "../Middleware/ValidateUser.js";
import { loginController, signupController } from "../Controllers/User.js";

const router=Router();

router.post('/login',Validate, loginController);

router.post('/signup',Validate, signupController);

export default router;