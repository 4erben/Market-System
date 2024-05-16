const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const scheme = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    displayName:{
        type:String,
        required:true
    }
},{strict:true});


//creating a signup method for the user model
scheme.statics.signup = async function(username,password,displayName){
    if(!username||!password || !displayName){
        throw Error("All Fields Must Be Filled!");
    };
    const exists = await this.findOne({username});
    if(exists){
        throw Error("username already in use");
    };
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);

    const user = await this.create({
        username: username,
        password: hash,
        displayName: displayName
    });
    return user;
}

//creating a login method for the user model

scheme.statics.login = async function(username,password){
    if(!username || !password){
        throw Error("All fields Must be Filled!");
    };
    const user = await this.findOne({username});
    if(!user){
        throw Error("Enter a valid credentials");
    }
    const match = await bcrypt.compare(password , user.password);
    if(!match){
        throw Error("Enter a valid credentials");
    };
    return user;
}


const User = mongoose.model("User",scheme);

module.exports = User;