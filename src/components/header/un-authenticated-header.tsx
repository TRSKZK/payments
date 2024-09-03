import { Button, NavbarItem } from "@nextui-org/react";
import { handleRegisterClick, handleSignIn } from "@/app/actions/auth";

export function UnAuthenticatedHeader() {
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
