"use client";
import { Button, Input } from "@nextui-org/react";
import { Form } from "react-hook-form";
import { useRegister } from "@/app/register/register-hook";

export default function RegisterPage() {
  const { action, control, register, errors } = useRegister();

  return (
    <div className="flex items-center min-h-screen justify-center">
      <Form
        control={control}
        onSubmit={action}
        className="flex min-w-[500px] flex-col gap-4"
      >
        <Input
          {...register("email")}
          id="email"
          type="email"
          label="Email"
          required
          name="email"
          isInvalid={!!errors.email?.message}
          errorMessage={errors.email?.message}
        />
        <Input
          {...register("firstName")}
          id="firstName"
          type="text"
          label="First Name"
          name="firstName"
          required
          isInvalid={!!errors.firstName?.message}
          errorMessage={errors.firstName?.message}
        />
        <Input
          {...register("lastName")}
          type="text"
          label="Last Name"
          required
          name="lastName"
          isInvalid={!!errors.lastName?.message}
          errorMessage={errors.lastName?.message}
        />
        <Input
          {...register("password")}
          type="password"
          label="Password"
          required
          name="password"
          isInvalid={!!errors.password?.message}
          errorMessage={errors.password?.message}
        />
        <Button type="submit">Register</Button>
      </Form>
    </div>
  );
}
