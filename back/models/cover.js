const mongoose = require("mongoose");

const scheme = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        default:"Covers"
    },
    color:{
        type:String,
        required:true
    },
    width:{
        type:Number,
        required:true
    },
    height:{
        type:Number,
        required:true
    }
},{strict:true});

const Cover = mongoose.model("Cover",scheme);

module.exports = Cover;