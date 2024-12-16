import connectDb from "../../helper/db"
import jwt from "jsonwebtoken"
import bcryptjs from "bcryptjs"
import User from "../../models/User"
import { NextResponse } from "next/server"

export async function POST(req){
    const MAX_AGE = 60 * 60 * 24 * 30
    try {
        await connectDb()

        const {registerNo,password} = await req.json()
        if(!registerNo || !password){
            return NextResponse.json({ message: "All fields required", status: 400 })
        }
        const user = await User.findOne({registerNo})
        if(!user){
            return NextResponse.json({message:"user not found",status:404})
        }else if(user){
            const checkPassword = await bcryptjs.compare(password,user.password)
            if(!checkPassword){
                return NextResponse.json({message:"Invalid password",status:401})
            }
            const token = jwt.sign({
                registerNo,
                role:user.role
            },process.env.JWT_KEY,{
                expiresIn: MAX_AGE
            })

            const response =NextResponse.json({message:"Logged in successful",status:200})
            response.cookies.set("token",token,{
                httpOnly:true,
                secure:process.env.NODE_ENV === "production",
                sameSite:"strict",
                maxAge:MAX_AGE
            })
            
            return response
        }
        
    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: "internal server error", status: 500 })
    }
}