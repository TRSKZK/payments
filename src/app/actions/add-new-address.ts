"use server";

import { NewAddressForm } from "@/components/add-new-address/new-address-form-hook";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { Routes } from "@/common/routes";
import { baseUrl } from "@/common/constants";

export async function addNewAddress(slug: string, data: NewAddressForm) {
  const url = baseUrl ? baseUrl : "";
  await axios.post(
    `${url}/api/add-new-address`,
    { ...data, slug },
    {
      headers: { "Content-Type": "application/json" },
    },
  );
  revalidatePath(`${Routes.USER_PROFILE}/${slug}`, "page");
}
