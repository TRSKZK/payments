"use server";

import { db } from "@/db";
import { UtilityPayForm } from "@/components/payment-form/use-payment-form";
import { Address } from "@prisma/client";

const prepareAddressString = (address: Address | null) => {
  return address
    ? `${address.city}, ${address.street} st., b. ${address.building}, ap. ${address.apartment}`
    : "No address provided";
};

export async function handlePayment(
  formData: UtilityPayForm,
  utilityId: string,
  ownerId: string,
  address: Address | null,
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
        address: prepareAddressString(address),
        serviceName: utilityServiceUpdate.name,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}
