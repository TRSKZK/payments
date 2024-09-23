"use server";

import { AddNewUtilityServiceForm } from "@/app/user/profile/[slug]/[addressId]/use-create-new-utility";
import { db } from "@/db";
import { revalidatePath } from "next/cache";

export async function createUtilityService(
  formData: AddNewUtilityServiceForm,
  addressId: string,
  slug: string,
) {
  let newUtility;
  try {
    newUtility = await db.utilityService.create({
      data: {
        iban: formData.iban,
        edrpou: formData.edrpou,
        name: formData.name,
        personalAccountNumber: formData.personalAccountNumber,
        addressId,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message, status: 500 };
    }
  }
  if (newUtility) {
    revalidatePath(`/user/profile/${slug}/${addressId}`);
    return { newUtility, status: 200 };
  }
  return { error: "Something went wrong", status: 401 };
}
