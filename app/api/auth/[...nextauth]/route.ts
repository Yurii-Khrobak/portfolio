import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/admin/login",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        login: {},
        password: {},
      },
      async authorize(credentials, req) {
        const user = req.body;

        const passwordCorrect = 

        if (passwordCorrect) {
          return {
            login: user.login
          };
        }

        console.log("credentials", credentials);
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };