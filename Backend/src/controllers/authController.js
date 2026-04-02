import User from "../models/User.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

//Register Ku idhu
export const registerUser = async (req,res)=>{
    try{
        const { name,email,password }= req.body;

        //check user exists
        const userExists = await User.findOne({email});
        if (userExists){
            return res.status(400).json({message:"user already exists"});
        }

        //Hash Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //create user
        const user = await User.create({
            name,
            email,
            password:hashedPassword,
        });

        //Response
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            role:user.role,
            message:"user registered successfully",
        });

    }catch(error) {
        res.status(500).json({message:error.message});
    }
};

//ippo login ku
export const loginUser = async (req,res)=>{
    try{
        const { email,password}=req.body;

        //Check user ku
        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({message:"user not found"});
        }
        //password compare panradhuku
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:"invalid credentials"});
        }
        //nammaku vara response idhu
        res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            role:user.role,
            token:generateToken(user._id),
            message:"Login successful",
        });
    }catch(error) {
        res.status(500).json({message:error.message});
    }
};