import NextAuth, { User } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/db";
import Google from "@auth/core/providers/google";
import Credentials from "@auth/core/providers/credentials";
import { decode, encode } from "next-auth/jwt";
import axios, { AxiosResponse } from "axios";
import { baseUrl } from "@/common/constants";

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

        const response: AxiosResponse<string | User | null> = await axios.post(
          `${baseUrl}/api/sign-in`,
          { email, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        if (typeof response.data === "string") {
          return null;
        }
        return response.data;
      },
    }),
  ],
  adapter: PrismaAdapter(db),
});
