import { z } from "zod";

export const loginValidationSchema = z.object({
  email: z.string().email({ message: "Must be a valid email address" }),
  password: z
    .string()
    .min(8)
    .max(20)
    .regex(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Minimum length of eight characters, at least one uppercase and one lowercase letter, one number and one special character",
    ),
});
