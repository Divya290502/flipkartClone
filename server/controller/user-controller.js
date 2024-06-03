import { response } from "express";
import User from "../model/userSchema.js"

export const userSignup = async function(req, res){
    try{
        let exist = await User.findOne({username: req.body.findOne});
        if(exist){
            return res.status(401).json({message: "Username already exists"});
        }

        const user = req.body;
        const newUser = new User(user);
        await newUser.save();
        res.status(200).json({message: user});
    }catch(error){
        console.log("Error saving user", error.message);
    }
}

export const userLogin = async function(req, res){
    try{
        const username = req.body.username;
        const password = req.body.password;
        let user = await User.findOne({username: username, password: password});
        if(user){
            return res.status(200).json({data: user});
        }else{
            return res.status(401).json({message: 'Invalid Login'});
        }
    }catch(error){
        return res.status(500).json('Error', error.message);
    }
}