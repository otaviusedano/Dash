import { withAuth } from "next-auth/middleware";

// export const config = {
//   matcher: ["/((?!signup|api|login).*)"],
// };

  
export default withAuth(
  function middleware(_) {},
  {
    callbacks: {
      authorized: (params) => {
        let { token } = params;
        return !!token;
      },
    },
  }
)

export const config = {
  matcher: [
    "/",
    "/profile/**",
  ],
};