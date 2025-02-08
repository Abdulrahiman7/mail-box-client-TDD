import { Router } from "express";
import { Authorize } from "../Middleware/AuthorizeUser.js";
import { getInboxController , getsentMailController, SendMailController } from "../Controllers/Mail.js";

const router=Router();

router.post('/sendMail',Authorize, SendMailController);

router.get('/getInbox', Authorize, getInboxController);

router.get('/getSentMails', Authorize, getsentMailController);

export default router;