import { NextResponse } from "next/server"
import connectDb from "../../helper/db"
import User from "../../models/User"
import bcryptjs from "bcryptjs"
export async function POST(req) {
    try {
        await connectDb()
        const { name, registerNo, password, role } = await req.json()
        if (!name || !registerNo || !password || !role) {
            return NextResponse.json({ message: "All fields required", status: 404 })
        }
        const user = await User.findOne({registerNo})
        if(user){
            return NextResponse.json({message:"User already exist",status:403})
        }else{
            const hashPassword = await bcryptjs.hash(password,10)
            const newUser = new User({
                name,
                registerNo,
                role,
                password:hashPassword
            })
            await newUser.save()
            return NextResponse.json({message:"user created successfully",status:201})
        }

    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: "internal server error", status: 500 })
    }

}