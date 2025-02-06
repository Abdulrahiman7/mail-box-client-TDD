import { Router } from "express";
import { Authorize } from "../Middleware/AuthorizeUser.js";
import { SendMailController } from "../Controllers/Mail.js";

const router=Router();

router.post('/sendMail',Authorize, SendMailController);

export default router;