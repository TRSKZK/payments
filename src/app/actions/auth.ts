"use server";
import { signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";

export const handleSignIn = async () => signIn("google");

export const handleSignOut = async () => {
  return await signOut();
};

export const handleRegisterClick = async () => redirect("/register");
