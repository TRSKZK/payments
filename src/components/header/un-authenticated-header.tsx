import { Button, NavbarItem } from "@nextui-org/react";
import { Link } from "@nextui-org/link";

export function UnAuthenticatedHeader() {
  return (
    <>
      <NavbarItem>
        <Button type="submit" color="secondary">
          <Link className="text-inherit" href="/signIn">
            Sign In
          </Link>
        </Button>
      </NavbarItem>
      <NavbarItem>
        <Button type="submit" color="secondary">
          <Link className="text-inherit" href="/register">
            Register
          </Link>
        </Button>
      </NavbarItem>
    </>
  );
}
