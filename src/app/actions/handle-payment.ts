"use server";

import { db } from "@/db";
import { UtilityPayForm } from "@/app/user/profile/[slug]/[addressId]/payment-form";

export async function handlePayment(
  formData: UtilityPayForm,
  utilityId: string,
  ownerId: string,
) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  try {
    const utilityServiceUpdate = await db.utilityService.update({
      where: {
        id: utilityId,
      },
      data: {
        rate: formData.rate,
        prevValue: formData.currentValue,
      },
    });
    await db.payment.create({
      data: {
        iban: utilityServiceUpdate.iban,
        edrpou: utilityServiceUpdate.edrpou,
        ownerId,
        currentValue: formData.currentValue,
        prevValue: formData.prevValue,
        serviceId: utilityServiceUpdate.id,
        personalAccountNumber: utilityServiceUpdate.personalAccountNumber,
        payed: Number(formData.sumToPay),
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}
