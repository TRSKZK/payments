import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/db";
import Google from "@auth/core/providers/google";
import Credentials from "@auth/core/providers/credentials";
import { User } from "@prisma/client";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signIn",
  },
  providers: [
    Google({ clientSecret: GOOGLE_CLIENT_SECRET, clientId: GOOGLE_CLIENT_ID }),
    Credentials({
      credentials: {
        email: { label: "email" },
        password: { label: "password" },
      },
      async authorize(credentials, request) {
        return {} as User;
      },
    }),
  ],
  adapter: PrismaAdapter(db),
});
