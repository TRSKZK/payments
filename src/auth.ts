import NextAuth from "next-auth"
import { PrismaAdapter } from '@auth/prisma-adapter'
import { db } from '@/db'
import Google from '@auth/core/providers/google'

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google({ clientSecret: GOOGLE_CLIENT_SECRET, clientId: GOOGLE_CLIENT_ID })],
  adapter: PrismaAdapter(db)
})
