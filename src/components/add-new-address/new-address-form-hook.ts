import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newAddressFormSchema } from "@/components/add-new-address/validation-schema";

export interface NewAddressForm {
  city: string;
  street: string;
  building: string;
  apartment: string;
}

export const defaultValues = {
  city: "",
  street: "",
  building: "",
  apartment: "",
};
export const useCreateNewAddress = () => {
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<NewAddressForm>({
    defaultValues,
    resolver: zodResolver(newAddressFormSchema),
  });

  const action: () => void = handleSubmit(async (data: NewAddressForm) => {
    reset();
  });

  return { control, register, errors, action, reset };
};
