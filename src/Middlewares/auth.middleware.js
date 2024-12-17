import jwt from "jsonwebtoken";
import User from "../Models/user.model.js";

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt

        if(!token){
            return res.status(401).json({message:"Unauthorized- No Token Provided"});
        }

        const decode =  jwt.verify(token, process.env.JWT_SECRET)
        if(!decode){
            return res.status(401).json({message:"Unauthorized- Invalid Token"});
        }
        console.log('This is decoded token', decode)
        const user = await User.findById(decode.userId).select('-password');

        if(!user){
            res.status(404).json({message:"User not found"});
        }

        req.user = user

        next()

    } catch (error) {
        console.log("Error in protectRoute middleware", error)
        res.status(500).json({message: "Access denied"})
    }
}