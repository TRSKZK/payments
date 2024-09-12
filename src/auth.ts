import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/db";
import Google from "@auth/core/providers/google";
import Credentials from "@auth/core/providers/credentials";
import bcrypt from "bcrypt";
import { decode, encode } from "next-auth/jwt";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

export const { handlers, signIn, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  jwt: { encode, decode },
  trustHost: true,

  providers: [
    Google({ clientSecret: GOOGLE_CLIENT_SECRET, clientId: GOOGLE_CLIENT_ID }),
    Credentials({
      credentials: {
        email: { label: "email" },
        password: { label: "password" },
      },

      async authorize(credentials) {
        const { email, password } = credentials;

        const user = await db.user.findFirst({
          where: { email: email as string },
        });

        if (typeof password === "string" && user) {
          if (bcrypt.compareSync(password, user.password || "")) {
            return user;
          }
        }
        return null;
      },
    }),
  ],
  adapter: PrismaAdapter(db),
});
