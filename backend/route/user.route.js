const express = require("express")
const bcrypt = require('bcrypt');
const { UserModel } = require("../model/user.model");

const userRoute = express.Router()
const saltRounds = 10;


userRoute.post("/signup", (req, res) => {
    try {
        const originalPassword = req.body.password;
        bcrypt.hash(originalPassword, saltRounds, function (err, hash) {
            if (err) {
                req.status(500).json({ msg: "error occured while hashing password.", err })
            } else {
                const userData = UserModel.create({ ...req.body, password: hash })
                res.status(201).json({msg:"Signup Success...", userData})
            }
        });

    } catch (err) {
        res.status(201).json({ msg: "error occured while signup.", err })
    }

})

userRoute.post("/login", (req, res) => {

})

userRoute.post("/subscription", (req, res) => {

})







module.exports = { userRoute }