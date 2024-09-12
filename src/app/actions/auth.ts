"use server";
import { signIn } from "@/auth";
import { redirect } from "next/navigation";

export const handleSignInWithGoogle = async () =>
  signIn("google", { redirectTo: "/" });

export const handleSignInWithCredentials = async (
  email: string,
  password: string,
) => {
  let path: string | null = null;
  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    path = "/";
  } catch {
    path = null;
  } finally {
    if (path) {
      redirect(path);
    }
  }
};
