"use server";
import { signIn } from "@/auth";
import { redirect } from "next/navigation";
import { Routes } from "@/common/routes";

export const handleSignInWithGoogle = async () =>
  signIn("google", { redirectTo: Routes.HOME });

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
    path = Routes.HOME;
  } catch {
    path = null;
  } finally {
    if (path) {
      redirect(path);
    }
  }
};
