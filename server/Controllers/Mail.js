import Mail from "../Models/Mail.js";

export const SendMailController=async (req, res)=>{
    try{
        const {mail, to}=req.body;
        const {email}=req.user;
        const newMail=await Mail.create({...mail, from:email});
        res.status(200).json({status:"success", message:"Email sent to the user successfully"});
    }catch(err)
    {
        console.log(err);
        res.status(400).json({status:'failed', message:err});
    }
}