"use client";
import { Button, Divider, Input } from "@nextui-org/react";
import { GoogleSignIn } from "@/app/signIn/google-sign-in";
import { Link } from "@nextui-org/link";
import { Form, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleSignInWithCredentials } from "@/app/actions/auth";

interface LoginForm {
  email: string;
  password: string;
}

const defaultValues = {
  email: "",
  password: "",
};

const loginValidationSchema = z.object({
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

export default function SignIn() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    defaultValues,
    resolver: zodResolver(loginValidationSchema),
  });
  const action: () => void = handleSubmit(async (data: LoginForm) => {
    await handleSignInWithCredentials(data.email, data.password);
  });
  return (
    <div className="container flex flex-row min-h-screen justify-center items-center mx-auto">
      <div className="border-1 border-header-logo rounded-2xl w-[500px] p-10">
        <Form
          onSubmit={action}
          control={control}
          className="flex flex-col gap-2"
        >
          <Input
            {...register("email")}
            id="email"
            type="email"
            label="Email"
            required
            isInvalid={!!errors.email?.message}
            errorMessage={errors.email?.message}
          />
          <Input
            {...register("password")}
            id="password"
            type="password"
            label="Password"
            required
            isInvalid={!!errors.password?.message}
            errorMessage={errors.password?.message}
          />
          <Button
            type="submit"
            className="border-0 text-header-logo font-bold"
            fullWidth
            variant="faded"
          >
            Login
          </Button>
        </Form>

        <Divider className="my-3" />

        <GoogleSignIn />
        <div className="text-end mt-4">
          <Link href="/register">Create Account</Link>
        </div>
      </div>
    </div>
  );
}
