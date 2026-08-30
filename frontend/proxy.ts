import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

export const proxy = async (req: NextRequest) => {
    const token = req.cookies.get("accessToken")?.value

    if(!token){
        return NextResponse.redirect(new URL("/login", req.url))
    }

     try {

        await jwtVerify(
            token,
            new TextEncoder().encode(
                process.env.ACCESS_TOKEN
            )
        );


        return NextResponse.next();

    } catch(error){

        return NextResponse.redirect(
            new URL("/login", req.url)
        );
    }


}

export const config = {
    matcher: "/admin/:path*"
}