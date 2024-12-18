import { NextResponse } from "next/server"
import { cookies } from "next/headers"


export async function POST(){
    try {
        cookies().set({
            name:"token",
            value:"",
            expires:new Date(0),
            httpOnly:true,

        })
        return NextResponse.json({message:"Logout successfully",status:200})
    } catch (error) {
        console.error(error)
        return NextResponse.json({message:"internal server error",status:500})
    }
}