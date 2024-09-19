import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newAddressFormSchema } from "@/components/add-new-address/validation-schema";
import { addNewAddress } from "@/app/actions/add-new-address";

export interface NewAddressForm {
  city: string;
  street: string;
  building: string;
  apartment: string;
}

const defaultValues = {
  city: "",
  street: "",
  building: "",
  apartment: "",
};
export const useCreateNewAddress = (slug: string) => {
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
    await addNewAddress(slug, data);
    reset();
  });

  return { control, register, errors, action, reset };
};
