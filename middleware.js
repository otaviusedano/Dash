import { withAuth } from 'next-auth/middleware'


export default withAuth(
  function middleware() {},
  {
    callbacks: {
      authorized: (params) => {
        let { token } = params
        return !!token
      }
    }
  }
)

export const config = {
  matcher: ["/((?!signup|api|login|_next/static|favicon.ico).*)"],
}