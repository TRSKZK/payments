import { z } from "zod";

export const newAddressFormSchema = z.object({
  city: z
    .string()
    .min(3)
    .regex(/^[A-Za-z ]+$/, "Alphabetical symbols only"),
  street: z
    .string()
    .min(3)
    .regex(/^[a-zA-Z ]*$/, "Alphabetical symbols only"),
  building: z.string().min(1, "Should be at least one character long"),
  apartment: z.string().min(1, "Should be at least one character long"),
});
