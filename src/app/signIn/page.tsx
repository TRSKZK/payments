"use client";
import { Button, Divider, Input } from "@nextui-org/react";
import { GoogleSignIn } from "@/app/signIn/google-sign-in";
import { Link } from "@nextui-org/link";
import { Form } from "react-hook-form";
import { useSignIn } from "@/app/signIn/signin-hook";

export default function SignIn() {
  const { action, register, control, errors } = useSignIn();
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
