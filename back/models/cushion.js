const mongoose = require("mongoose");

const scheme = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        default: "Pillows"
    },
    type: {
        type:String,
        required: true,
        enum:["kudadiya","memory","spanish","cushion","pillow"]
    },
    width:{
        type: Number,
        required: true
    }
},{strict:true});

const Cushion = mongoose.model("Cushion",scheme);

module.exports = Cushion;