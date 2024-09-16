"use client";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { Badge } from "@nextui-org/badge";
import Image from "next/image";
import cart from "../../../public/cart1.svg";
import user from "../../../public/user.svg";
import payments from "../../../public/payments.svg";
import { Button, Divider } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import { Routes } from "@/common/routes";

export function UserPopoverCard() {
  return (
    <Card className="p-2 w-full">
      <CardBody>
        <Link
          className="text-header-logo font-bold flex justify-between w-full"
          href={Routes.USER_CART}
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
          href={Routes.USER_PROFILE}
        >
          <div>Profile</div>
          <div>
            <Badge>
              <Image width={35} height={35} src={user} alt="Image of a user" />
            </Badge>
          </div>
        </Link>
        <Link
          className="text-header-logo font-bold flex justify-between w-full"
          href={Routes.USER_PAYMENTS}
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
        <Button
          onClick={() => signOut({ callbackUrl: "/" })}
          color="secondary"
          type="button"
        >
          Log Out
        </Button>
      </CardFooter>
    </Card>
  );
}
