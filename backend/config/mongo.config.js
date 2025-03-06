const { mongoose } = require("mongoose")
require("dotenv").config()

const ConnectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected To DB.")
    } catch (err) {
        console.log("error occured while connecting to DB.", err)
    }
}



module.exports = { ConnectToDB }