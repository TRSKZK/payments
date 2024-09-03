"use client";

import { useSession } from "next-auth/react";
import { handleRegisterClick, handleSignIn } from "@/app/actions/auth";
import {
  Button,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Skeleton,
} from "@nextui-org/react";
import { User } from "@nextui-org/user";

const skeleton = () => (
  <NavbarItem className="max-w-[200px] w-full flex items-center gap-3">
    <div>
      <Skeleton className="flex rounded-full w-10 h-10" />
    </div>
    <div className="w-full flex flex-col gap-2">
      <Skeleton className="h-2 w-3/5 rounded-lg" />
      <Skeleton className="h-2 w-4/5 rounded-lg" />
    </div>
  </NavbarItem>
);

function AuthenticatedUserHeader({
  imageSrc,
  name,
  email,
}: {
  imageSrc?: string | null;
  name?: string | null;
  email?: string | null;
}) {
  return (
    <NavbarItem>
      <Popover>
        <PopoverTrigger>
          <User
            as="button"
            description={<span className="text-slate-100">{email}</span>}
            className="text-header-logo"
            name={name}
            avatarProps={{ src: imageSrc || "" }}
          />
        </PopoverTrigger>
        <PopoverContent>
          <div>Content</div>
        </PopoverContent>
      </Popover>
    </NavbarItem>
  );
}

function UnAuthorizedHeader() {
  return (
    <>
      <NavbarItem>
        <form action={handleSignIn}>
          <Button type="submit" color="secondary">
            Sign In
          </Button>
        </form>
      </NavbarItem>
      <NavbarItem>
        <form action={handleRegisterClick}>
          <Button type="submit" color="secondary">
            Register
          </Button>
        </form>
      </NavbarItem>
    </>
  );
}

export default function HeaderAuth() {
  const session = useSession();

  if (session.status === "loading") {
    return skeleton();
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
        <UnAuthorizedHeader />
      )}
    </>
  );
}
