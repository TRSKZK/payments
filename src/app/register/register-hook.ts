import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerValidationSchema } from "@/app/register/registerValidationSchema";

export interface RegisterFormValues {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

const registerDefaultValues = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
};

export function useRegister() {
  const router = useRouter();
  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
    reset,
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerValidationSchema),
    defaultValues: registerDefaultValues,
  });

  const action: () => void = handleSubmit(async (data: RegisterFormValues) => {
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

  return { action, control, register, errors };
}
