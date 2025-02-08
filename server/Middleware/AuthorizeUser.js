import jwt from "jsonwebtoken";
import User from "../Models/User.js";
import dotenv from 'dotenv';
dotenv.config();


export const Authorize=(req, res,next)=>{
    try{
        const token=req.headers['token'];
       
        if(!token) throw new Error();
       
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded)=>{
            console.log(decoded);
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