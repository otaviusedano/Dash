import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export async function middleware(req, _) {
  if (req.nextUrl.pathname !== "/login" || "signup") {
    const session = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    })

    if (!session) {
      const url = req.nextUrl.clone()

      url.pathname = "/login"

      return NextResponse.redirect(url)
    }
  }
}

export const config = {
  matcher: ["/((?!signup|api|login|_next/static|favicon.ico).*)"],
}