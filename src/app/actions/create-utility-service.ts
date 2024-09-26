"use server";

import { AddNewUtilityServiceForm } from "@/components/add-utility-form/use-create-new-utility";
import { db } from "@/db";
import { revalidatePath } from "next/cache";

export async function createUtilityService(
  formData: AddNewUtilityServiceForm,
  addressId: string,
  slug: string,
) {
  try {
    await db.utilityService.create({
      data: {
        iban: formData.iban,
        edrpou: formData.edrpou,
        name: formData.name,
        personalAccountNumber: formData.personalAccountNumber,
        addressId,
      },
    });
    revalidatePath(`/user/profile/${slug}/${addressId}`);
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message, status: 500 };
    }
  }
}
