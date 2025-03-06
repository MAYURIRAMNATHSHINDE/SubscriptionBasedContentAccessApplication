const express=require("express");
const { ConnectToDB } = require("./config/mongo.config");
require("dotenv").config()
const app=express()



const PORT=process.env.PORT || 3000;





app.listen(PORT,()=>{
    ConnectToDB()
    console.log("Server Started...")
})