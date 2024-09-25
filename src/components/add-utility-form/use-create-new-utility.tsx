import { useDisclosure } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "@/components/add-utility-form/validation-schema";
import { createUtilityService } from "@/app/actions/create-utility-service";

const defaultValues = {
  name: "",
  iban: "",
  edrpou: "",
  personalAccountNumber: "",
};

export interface AddNewUtilityServiceForm {
  name: string;
  iban: string;
  edrpou: string;
  personalAccountNumber: string;
}

export function useCreateNewUtility(addressId: string, slug: string) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    control,
    register,
    formState: { errors, isValid },
    reset,
    handleSubmit,
  } = useForm<AddNewUtilityServiceForm>({
    defaultValues,
    resolver: zodResolver(validationSchema),
  });

  const action: () => void = handleSubmit(
    async (formData: AddNewUtilityServiceForm) => {
      await createUtilityService(formData, addressId, slug);
    },
  );

  return {
    isOpen,
    onOpen,
    onOpenChange,
    control,
    register,
    errors,
    reset,
    action,
    isValid,
  };
}
