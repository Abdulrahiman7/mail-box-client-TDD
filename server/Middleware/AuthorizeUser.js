import jwt from "jsonwebtoken";
import User from "../Models/User.js";

export const Authorize=(req, res,next)=>{
    try{
        const token=req.headers['token'];
        console.log(token);
        if(!token) throw new Error();
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded)=>{
            if(err) throw new Error();
            User.findOne({_id: decoded.userId})
            .then((user)=>{
                req.user=user;
                next();
            })
        })
    }catch(err)
    {
        console.log(err);
        res.status(400).json({message:"UnAuthorized Access"});
    }
}