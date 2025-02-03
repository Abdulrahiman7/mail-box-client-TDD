const Validate=(req, res, next)=>{
    try{
        const {user}=req.body;
        console.log(user);
        if(!user) throw new Error("Enter valid Input data");
        if(user.name && user.name.trim().length===0) throw new Error('Enter Valid Name');
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const emailRegex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!emailRegex.test(user.email)) throw new Error('Enter Valid Email');
        if(!passwordRegex.test(user.password)) throw new Error("Enter Valid Password");
        console.log("next");
        next();
    }catch(err)
    {
        console.log(err);
        res.status(400).json({message:err.toString()});
    }
}
export default Validate;