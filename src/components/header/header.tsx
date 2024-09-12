"use server";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import HeaderAuth from "@/components/header/header-auth";
import { auth } from "@/auth";

export default async function Header() {
  const session = await auth();
  return (
    <Navbar className="bg-violet-300 sticky top-0 z-10">
      <NavbarBrand>
        <Link href="/" className="font-bold text-header-logo">
          Payments
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
        <HeaderAuth session={session} />
      </NavbarContent>
    </Navbar>
  );
}
