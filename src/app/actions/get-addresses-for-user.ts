"use server";

import { db } from "@/db";

export async function getAddressesForUser(slug: string) {
  const userWithAddress = await db.user.findFirst({
    where: { id: slug },
    include: {
      address: true,
    },
  });

  return userWithAddress && userWithAddress.address;
}
