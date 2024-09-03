import {
  Button,
  Divider,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { User } from "@nextui-org/user";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { handleSignOut } from "@/app/actions/auth";
import { redirect } from "next/navigation";
import cart from "../../../public/cart1.svg";
import user from "../../../public/user.svg";
import payments from "../../../public/payments.svg";
import Image from "next/image";
import { Badge } from "@nextui-org/badge";

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
  const signOut = async () => {
    await handleSignOut();
    redirect("/");
  };
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
          <Card className="p-2 w-full">
            <CardBody>
              <Link
                className="text-header-logo font-bold flex justify-between w-full"
                href="/cart"
              >
                <div>Cart</div>
                <div>
                  <Badge color="danger" content={10}>
                    <Image
                      width={35}
                      height={35}
                      src={cart}
                      alt="Image of a shopping cart"
                    />
                  </Badge>
                </div>
              </Link>
              <Link
                className="text-header-logo font-bold flex justify-between w-full"
                href="/profile"
              >
                <div>Profile</div>
                <div>
                  <Badge>
                    <Image
                      width={35}
                      height={35}
                      src={user}
                      alt="Image of a user"
                    />
                  </Badge>
                </div>
              </Link>
              <Link
                className="text-header-logo font-bold flex justify-between w-full"
                href="/payments"
              >
                <div>Payments</div>
                <div>
                  <Badge>
                    <Image
                      width={35}
                      height={35}
                      src={payments}
                      alt="Image of a bag with money"
                    />
                  </Badge>
                </div>
              </Link>
            </CardBody>
            <Divider />
            <CardFooter>
              <form action={signOut}>
                <Button color="secondary" type="submit">
                  Log Out
                </Button>
              </form>
            </CardFooter>
          </Card>
        </PopoverContent>
      </Popover>
    </NavbarItem>
  );
}
