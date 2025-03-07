import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Check if the provided username and password match the ones in .env
        if (
          credentials?.username === process.env.ADMIN_USERNAME &&
          credentials?.password === process.env.ADMIN_PASSWORD
        ) {
          // Return a user object if credentials are valid
          return {
            id: "1",
            name: "Admin User",
            email: "admin@example.com",
          };
        }
        // Return null if credentials are invalid
        return null;
      }
    })
  ],
  pages: {
    signIn: '/admin/login',
  },
};

const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;