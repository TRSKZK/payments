"use client";
import { useSession } from "next-auth/react";
import { userSkeleton } from "@/components/skeletons/user-skeleton";
import { AuthenticatedUserHeader } from "@/components/header/authenticated-user-header";
import { UnAuthenticatedHeader } from "@/components/header/un-authenticated-header";
import { Session } from "next-auth";

interface HeaderAuthProps {
  session: Session | null;
  id: string | null;
}

export default function HeaderAuth({ session, id }: HeaderAuthProps) {
  const { status } = useSession();

  if (status === "loading") {
    return userSkeleton();
  }

  return (
    <>
      {session?.user ? (
        <AuthenticatedUserHeader
          id={id}
          email={session?.user?.email}
          name={session?.user.name}
          imageSrc={session?.user.image}
        />
      ) : (
        <UnAuthenticatedHeader />
      )}
    </>
  );
}
