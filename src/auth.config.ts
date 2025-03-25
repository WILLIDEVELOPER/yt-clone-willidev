import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const email = "test@example.com";
        const password = "123456";

        if (credentials.email === email && credentials.password === password) {
          return {
            id: "1",
            email: email,
            name: "Test User",
          };
        }

        return null;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
} satisfies NextAuthConfig;
