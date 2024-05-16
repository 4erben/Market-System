require("dotenv").config();
const express = require("express");
const connectDB = require("./config/mongoose.js");
const { loginUser, registerUser } = require("./controllers/userControllers.js");
const auth = require("./middlewares/auth.js");


//Routes
const loginRouter = require("./routes/loginRouter.js");
const registerRouter = require("./routes/registerRouter.js");
const mattressRouter = require("./routes/mattressRouter.js"); 
const cushionRouter = require("./routes/cushionRouter.js"); 
const CoverRouter = require("./routes/coverRouter.js");




//Initializing the app instance
const app = express();
const port = 3000 || process.env.PORT;


//app middlewares
app.use(express.static(__dirname+"/public"));
app.use(express.json());

//using routes
app.use("/login",loginRouter);
app.use("/register",registerRouter);
app.use("/mattress",mattressRouter);
app.use("/cushion",cushionRouter);
app.use("/cover",CoverRouter);


connectDB().then(()=>{
    app.listen(port,()=>{
    console.log("server started  at port:",port);
})
})
