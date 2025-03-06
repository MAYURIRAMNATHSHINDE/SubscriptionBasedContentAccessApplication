const express=require("express");
const { ConnectToDB } = require("./config/mongo.config");
const { userRoute } = require("./route/user.route");
require("dotenv").config()
const app=express()
app.use(express.json())


const PORT=process.env.PORT || 3000;

app.use("/user",userRoute)



app.listen(PORT,()=>{
    ConnectToDB()
    console.log("Server Started...")
})