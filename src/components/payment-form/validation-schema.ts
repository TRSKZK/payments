import { z } from "zod";

export const validationSchema = z
  .object({
    prevValue: z.string().regex(/^[0-9]*$/, "Should contain only digits"),
    currentValue: z.string().regex(/^[0-9]*$/, "Should contain only digits"),
    difference: z
      .string()
      .refine((data) => Number(data) > 0, "Must be a positive number"),
    rate: z.string().regex(/^[0-9]*$/, "Should contain only digits"),
    sumToPay: z.string().regex(/^[0-9]*$/, "Should contain only digits"),
  })
  .refine((data) => Number(data.currentValue) > Number(data.prevValue), {
    message: "Current value must be bigger than previous value",
  });
