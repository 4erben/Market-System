const jwt = require("jsonwebtoken");
const User = require("../models/user.js");


const auth = async(req,res,next)=>{

    const authorization = req.headers.authorization;
    if(!authorization){
       return res.status(401).json({error:"Authorization Token Required"});
    };
    const token = authorization && authorization.split(" ")[1];
    try{
    const {_id} = jwt.verify(token,process.env.TOKEN_SECRET);
    req.user = await User.findOne({_id});
    next();
    }catch(err){
        console.log(err);
        res.status(401).json({error:"Request isnt Authorized",message:err.message})
    }
}

module.exports = auth;