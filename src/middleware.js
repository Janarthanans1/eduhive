import { NextResponse } from "next/server";

export async function middleware(req) {
    const path = req.nextUrl.pathname;
    const token = req.cookies.get('token')?.value
    const isPublic = path === "/pages/login"
    if (isPublic && token) {
        return NextResponse.redirect(new URL("/", req.nextUrl))
    }
    if (!isPublic && !token) {
        return NextResponse.redirect(new URL("/pages/login", req.nextUrl))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/", "/pages/:path*",]
}