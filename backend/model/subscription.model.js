const mongoose = require("mongoose");

const SubscriptionSchema=new mongoose.Schema(
    {
        name:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
        plan:{type:String,enum:["Basic","Standard","Premium"]},
        startAt:{type: Date,default: Date.now},
        endAt:{type: Date,required:true},
        status: {type: String,enum: ["Active", "Expired", "Cancelled"],default: "Active"},
    }
)

const SubscriptionModel=mongoose.model("subscription",UserSchema)

module.exports={SubscriptionModel}