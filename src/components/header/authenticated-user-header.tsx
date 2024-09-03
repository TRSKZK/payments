import {
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { User } from "@nextui-org/user";

interface AuthenticatedUserHeaderProps {
  imageSrc?: string | null;
  name?: string | null;
  email?: string | null;
}

export function AuthenticatedUserHeader({
  imageSrc,
  name,
  email,
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
        <PopoverContent>
          <div>Content</div>
        </PopoverContent>
      </Popover>
    </NavbarItem>
  );
}
