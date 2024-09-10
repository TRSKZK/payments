"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import { Form, useForm } from "react-hook-form";
import { validationSchema } from "@/app/register/validationSchema";
import { useRouter } from "next/navigation";

export interface FormValues {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

const defaultValues = { email: "", firstName: "", lastName: "", password: "" };

export default function RegisterPage() {
  const router = useRouter();
  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(validationSchema),
    defaultValues,
  });

  const action: () => void = handleSubmit(async (data: FormValues) => {
    const response = await fetch("/api/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      router.push("/");
    }
    reset();
  });

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
