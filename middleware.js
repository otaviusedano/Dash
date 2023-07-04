import { withAuth } from 'next-auth/middleware'
import { authOptions } from './lib/auth/auth'


export default withAuth(
  function middleware(req) {
    console.log(req.nextauth.token)
  },
  {
    jwt: { decode: authOptions.jwt },
    callbacks: {
      authorized: ({ token }) => token
    },
    pages: {
      signIn: '/login',
      signUp: '/signup',
      error: '/auth/error',
    }
  },
)

export const config = {
  matcher: ["/((?!signup|api|login|_next/static|favicon.ico).*)"],
}