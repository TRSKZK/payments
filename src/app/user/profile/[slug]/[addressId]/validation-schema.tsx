import { z } from "zod";

export const validationSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[A-Za-z ]+$/, "Only alphabetical symbols are allowed "),
  iban: z.string().regex(/^UA\d{3}\d{15}$/),
  edrpou: z
    .string()
    .regex(/^\d{8}$/, "Must be 8 characters long and contain only digits"),
  personalAccountNumber: z.string().regex(/^[0-9]*$/),
});
