'use server'
import { signIn, signOut } from '@/auth'
import { redirect } from 'next/navigation'

export const handleSignIn = (formData: FormData) => signIn('google')

export const handleSignOut = (formData: FormData) => signOut()

export const handleRegisterClick = async () => redirect('/register')
