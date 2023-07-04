export { default } from "next-auth/middleware"

export const config = {
  matcher: ["/((?!signup|api|login|_next/static|favicon.ico).*)"],
}