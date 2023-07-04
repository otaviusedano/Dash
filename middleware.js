import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export async function middleware(req, _) {
  if (req.nextUrl.pathname === "/") {
    const session = await getToken({
      req,
      secret: process.env.JWT_SECRET,
      secureCookie: process.env.NODE_ENV === "production",
    })

    if (!session) {
      const url = req.nextUrl.clone()

      url.pathname = "/login"

      return NextResponse.redirect(url)
    }
  }
}

export const config = {
  matcher: ["/((?!signup|api|login).*)"],
}