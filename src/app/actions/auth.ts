'use server'
import { signIn, signOut } from '@/auth'

export const handleSignIn = (formData: FormData) => signIn()

export const handleSignOut = (formData: FormData) => signOut()
