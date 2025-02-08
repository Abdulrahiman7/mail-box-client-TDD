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

export const getInboxController=async (req, res)=>{
    try{
        const inbox=await Mail.find({to:req.user.email});
        console.log(inbox);
        res.status(200).json({inbox:inbox});
    }catch(err)
    {
        console.log(err);
        res.status(400).json({status:'failed', message:err});
    }
}

export const deleteMailController=async(req, res)=>{
    try{
        const {id}=req.params;
        const deleteMail=await Mail.findByIdAndDelete(id);
        res.status(200).json({status:'success'});
    }catch(err)
    {
        console.log(err);
    }
}