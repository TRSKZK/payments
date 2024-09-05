"use client";
import { useSession } from "next-auth/react";
import { userSkeleton } from "@/components/skeletons/user-skeleton";
import { AuthenticatedUserHeader } from "@/components/header/authenticated-user-header";
import { UnAuthenticatedHeader } from "@/components/header/un-authenticated-header";

export default function HeaderAuth() {
  const { data, status } = useSession();

  if (status === "loading") {
    return userSkeleton();
  }

  return (
    <>
      {data?.user ? (
        <AuthenticatedUserHeader
          email={data?.user?.email}
          name={data?.user.name}
          imageSrc={data?.user.image}
        />
      ) : (
        <UnAuthenticatedHeader />
      )}
    </>
  );
}
