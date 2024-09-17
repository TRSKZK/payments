import {
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { User } from "@nextui-org/user";
import { UserPopoverCard } from "@/components/header/user-popover-card";

interface AuthenticatedUserHeaderProps {
  imageSrc?: string | null;
  name?: string | null;
  email?: string | null;
  id?: string | null;
}

export function AuthenticatedUserHeader({
  imageSrc,
  name,
  email,
  id,
}: AuthenticatedUserHeaderProps) {
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
        <PopoverContent className="m-0 p-0 w-[200px]">
          <UserPopoverCard id={id} />
        </PopoverContent>
      </Popover>
    </NavbarItem>
  );
}
