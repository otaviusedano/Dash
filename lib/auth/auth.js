import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email } = credentials

        const user = { id: "1", name: "Otavio", email: email};
        return user;
      },
    }),
  ],
  pages: {
    signIn: '/login',
    signUp: '/signup'
  }
};
