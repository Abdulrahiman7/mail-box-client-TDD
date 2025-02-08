import { Router } from "express";
import { Authorize } from "../Middleware/AuthorizeUser.js";
import { getInboxController , SendMailController } from "../Controllers/Mail.js";

const router=Router();

router.post('/sendMail',Authorize, SendMailController);

router.get('/getInbox', Authorize, getInboxController);

export default router;