const User = require("../models/user.js");
const jwt = require("jsonwebtoken");


const createToken = (payload)=>{
    return jwt.sign(
        payload,
        process.env.TOKEN_SECRET,
        {expiresIn:"1d"}
    )
}


const registerUser = async(req,res)=>{
    const {username,password,displayName} = req.body;
    try{
        const user = await User.signup(username,password,displayName);
        //create token
        const token = createToken({_id:user._id});
        res.status(200).json({token,username,displayName});
    }catch(err){
        res.status(400).json({error:err.message})
    }
};

const loginUser = async(req,res)=>{
    const {username,password} = req.body;
    try{
        const user = await User.login(username,password);
        //create token
        const token = createToken({_id:user._id});
        res.status(200).json({username:user.username,displayName:user.displayName,token:token});
    }catch(err){
        res.status(400).json({error:err.message});
    }
}

module.exports = {registerUser, loginUser};