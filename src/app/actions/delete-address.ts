"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { Routes } from "@/common/routes";

export async function deleteAddress({
  addressId,
  slug,
}: {
  addressId: string;
  slug: string;
}) {
  try {
    await db.address.delete({ where: { id: addressId } });
    revalidatePath(`${Routes.USER_PROFILE}/${slug}`, "page");
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}
