import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req) {
    try {
       
        const token = req.cookies.get("token")?.value;
        
     
        if (!token) {
            return NextResponse.json({ message: "Token not found in cookies", status: 401 });
        }

        let verifyToken;
        try {
            verifyToken = jwt.verify(token, process.env.JWT_KEY);
        } catch (error) {
            console.error("JWT Verification Error:", error.message);
            return NextResponse.json({ message: "Invalid token", status: 401 });
        }

        if(verifyToken){

            return NextResponse.json({ message: "Authorized", token });
        }
    } catch (error) {
        console.error("Error in GET handler:", error.message);
        return NextResponse.json({ message: "Invalid access", status: 500 });
    }
}
