import NextAuth from "next-auth"
import { PrismaAdapter } from '@auth/prisma-adapter'
import { db } from '@/db'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [],
  adapter: PrismaAdapter(db)
})
