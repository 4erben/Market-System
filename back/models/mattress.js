const mongoose = require("mongoose");

const scheme = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        default: "Mattresses"
    },
    type: {
        type:String,
        required: true,
        enum:["medical","spanish","box top"]
    },
    height:{
        type: Number,
        required: true
    },
    width:{
        type: Number,
        required: true
    }
},{strict:true});

const Mattress = mongoose.model("Mattress",scheme);

module.exports = Mattress;