"use server";

import { db } from "@/db";
import { UtilityService } from "@prisma/client";

export async function getUtilityServices(
  addressId: string,
): Promise<UtilityService[] | []> {
  const addressWithUtilities = await db.address.findFirst({
    where: { id: addressId },
    include: { utilityServices: true },
  });
  if (addressWithUtilities) {
    return addressWithUtilities.utilityServices;
  }
  return [];
}
