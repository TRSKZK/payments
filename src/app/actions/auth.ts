"use server";
import { signIn } from "@/auth";

export const handleSignInWithGoogle = async () =>
  signIn("google", { redirectTo: "/" });
