import { comparePassword, hashPassword} from "../helpers/authHelper.js";
import userModel from "../models/userModel.js"; 
import JWT from "jsonwebtoken";

export const registerController = async(req,res) =>{

    try {

        const {name,email,password,phone,address} = req.body

        if(!name){
            res.send({message: "name is required"}) 
        }
        if(!email){
            res.send({message: "email is required"}) 
        }
        if(!password){
            res.send({message: "password is required"}) 
        }
        if(!phone){
            res.send({message: "phone no is required"}) 
        }
        if(!address){
            res.send({message: "address is required"}) 
        }
        // check user
        const existingUser = await userModel.findOne({email});
        // existing user
        if(existingUser)
        {
            return res.status(200).send({
                success: false,
                message: "Already Exist Please Login",
            })
        }

        // register user
        const hashedPassword = await hashPassword(password);
        const user = await new userModel({name,email,phone,address,password: hashedPassword}).save();

        res.status(201).send({
            success: true,
            message: 'User Registered Successfully',
            user
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "some error in registration",
            error
        })
    }

}

export const loginController = async(req,res) =>{
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(404).send({success: false, message: "Invalid username or password"})
        }

        const user = await userModel.findOne({email});
        if(!user){
            return res.status(404).send({success: false, message: "user is not registered"})
        }
        const match = await comparePassword(password,user.password);

        if(!match){
            return res.status(200).send({
                success: false,
                message: "Invalid Password"
            })
        }

        const token = await JWT.sign({_id: user._id},process.env.JWT_SECRET,{
            expiresIn: "7d",
        });
        res.status(200).send({
            success: true,
            message: "login successful",
            user:{
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address
            },
            token,
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "password or email incorrect",
            error
        })
    }

}

export const testController = (req,res) =>{
    res.send({
        message: "protected route"
    })

}