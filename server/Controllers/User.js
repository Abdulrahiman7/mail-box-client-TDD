
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const generateToken=(key)=>{
  return jwt.sign({userId:key}, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
}
export const loginController=async (req, res)=>{
    try{
        const {user}=req.body;
        const storedUser=await User.findOne({where:{email:user.email}});
        if(!storedUser) throw new Error("User Not found");
        const isMatch=await bcrypt.compare(user.password, storedUser.password);
            if(!isMatch) throw new Error();
        const token=generateToken(storedUser.id);
        res.status(200).json({message:'Logged In Successfully', 'token':token });
    }catch(err)
    {
        console.log(err);
        res.status(500).json({message:"Internal Sever Error, Failed to Sign Up"})
    }
}; 

export const signupController=async (req, res)=>{
    try{
        const {user}=req.body;
        console.log(user.password);
        const hashedPassword= bcrypt.hash(user.password, 10, async (err, hash)=>{
            if(err) throw new Error();
        const token=generateToken(newUser.id);
        res.status(200).json({message:'User Signed Up Successfully', 'token':token });
        });
        
    }catch(err)
    {
        console.log(err);
        res.status(500).json({message:"Internal Sever Error, Failed to Sign Up"})
    }
}