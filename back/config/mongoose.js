const mongoose = require("mongoose");

const dbLink = process.env.MONGO_URI;


const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(dbLink);
        console.log(`MongoDB connect at:${conn.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;