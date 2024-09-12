import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidationSchema } from "@/app/signIn/validation-schema";
import { handleSignInWithCredentials } from "@/app/actions/auth";

interface SignInForm {
  email: string;
  password: string;
}

const defaultValues = {
  email: "",
  password: "",
};

export function useSignIn() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({
    defaultValues,
    resolver: zodResolver(loginValidationSchema),
  });
  const action: () => void = handleSubmit(async (data: SignInForm) => {
    await handleSignInWithCredentials(data.email, data.password);
  });

  return { action, register, errors, control };
}
