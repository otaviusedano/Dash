import { withAuth } from 'next-auth/middleware'

export default withAuth(
  function middleware(req) {
    console.log(req.nextauth.token)
  },
  {
    callbacks: {
      authorized: ({ token }) => token,
    },
    pages: {
      signIn: '/login',
      signUp: '/signup',
      error: '/login',
    }
  },
)

export const config = {
  matcher: ["/((?!signup|api|login|_next/static|favicon.ico).*)"],
}