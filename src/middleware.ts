import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const isLogin = true;
    if(!isLogin){
        return NextResponse.redirect(new URL("/Login", request.url));
    }

    //cara satu satu
//   if (request.nextUrl.pathname.startsWith("/about")) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }
//   if (request.nextUrl.pathname.startsWith("/product")) {
//     return NextResponse.redirect(new URL("/Login", request.url));
//   }

}
//CARA CEPAT
//matcher => memfilter url yang ingin ditampilkan
export const config = {
    matcher : ["/dashboard/:path*","/about/:path*"],
}
