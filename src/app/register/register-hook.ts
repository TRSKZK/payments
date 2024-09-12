import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "@/app/register/validation-schema";

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
    resolver: zodResolver(validationSchema),
    defaultValues: registerDefaultValues,
  });

  const action: () => void = handleSubmit(async (data: RegisterFormValues) => {
    const response = await fetch("/api/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      router.push("/signIn");
    }
    reset();
  });

  return { action, control, register, errors };
}
