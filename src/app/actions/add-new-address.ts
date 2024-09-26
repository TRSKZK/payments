"use server";

import { NewAddressForm } from "@/components/add-new-address/new-address-form-hook";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { Routes } from "@/common/routes";
import { baseUrl } from "@/common/constants";

export async function addNewAddress(slug: string, data: NewAddressForm) {
  if (!baseUrl) {
    return null;
  }
  await axios.post(
    `${baseUrl}/api/add-new-address`,
    { ...data, slug },
    {
      headers: { "Content-Type": "application/json" },
    },
  );
  revalidatePath(`${Routes.USER_PROFILE}/${slug}`, "page");
}
