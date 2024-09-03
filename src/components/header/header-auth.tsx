"use client";

import { useSession } from "next-auth/react";
import { userSkeleton } from "@/components/skeletons/user-skeleton";
import { AuthenticatedUserHeader } from "@/components/header/authenticated-user-header";
import { UnAuthenticatedHeader } from "@/components/header/un-authenticated-header";

export default function HeaderAuth() {
  const session = useSession();

  if (session.status === "loading") {
    return userSkeleton();
  }

  return (
    <>
      {session.data?.user ? (
        <AuthenticatedUserHeader
          email={session.data?.user?.email}
          name={session.data?.user.name}
          imageSrc={session.data?.user.image}
        />
      ) : (
        <UnAuthenticatedHeader />
      )}
    </>
  );
}
