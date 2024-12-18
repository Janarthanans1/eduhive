import { NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";

export async function middleware(req) {
    const path = req.nextUrl.pathname;
    const token = req.cookies.get('token')?.value
    const isPublic = path === "/pages/login"
    const protectedPage = path === "/pages/admin_dashboard"
    if (isPublic && token) {
        return NextResponse.redirect(new URL("/", req.nextUrl))
    }
    if (!isPublic && !token) {
        return NextResponse.redirect(new URL("/pages/login", req.nextUrl))
    }
    if (path !== "/pages/login") {
        const { role } = jwtDecode(token)
        if (role !== "admin" && protectedPage) {
            return NextResponse.redirect(new URL("/", req.nextUrl))
        }
    }


    return NextResponse.next()
}

export const config = {
    matcher: ["/", "/pages/:path*",]
}