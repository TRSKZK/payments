import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import HeaderAuth from "@/components/header/header-auth";

export default function Header() {
  return (
    <Navbar className="bg-violet-300 sticky top-0 z-10">
      <NavbarBrand>
        <Link href="/" className="font-bold text-header-logo">
          Payments
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
