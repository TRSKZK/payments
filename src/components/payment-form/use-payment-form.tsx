import { Address, UtilityService } from "@prisma/client";
import { useForm } from "react-hook-form";
import { handlePayment } from "@/app/actions/handle-payment";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "@/components/payment-form/validation-schema";

const defaultValues = {
  prevValue: "",
  currentValue: "",
  difference: "",
  rate: "",
  sumToPay: "",
};

export interface UtilityPayForm {
  prevValue: string;
  currentValue: string;
  difference: string;
  rate: string;
  sumToPay: string;
}

export function usePaymentForm(
  userId: string,
  utility: UtilityService,
  address: Address | null,
) {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<UtilityPayForm>({
    defaultValues: {
      ...defaultValues,
      prevValue: utility.prevValue || "",
      rate: utility.rate || "",
    },
    resolver: zodResolver(validationSchema),
  });

  const action: () => void = handleSubmit(async (formData: UtilityPayForm) => {
    await handlePayment(formData, utility.id, userId, address);
  });

  const actualPrevValue = watch("prevValue");
  const actualRate = watch("rate");

  const getDifference = () => {
    const difference = (
      Number(watch("currentValue")) - Number(actualPrevValue)
    ).toString();
    setValue("difference", difference);
    return difference;
  };

  const getSumToPay = () => {
    const sumToPay = (
      Number(actualRate) * Number(getValues("difference"))
    ).toString();
    setValue("sumToPay", sumToPay);
    return sumToPay;
  };

  return {
    getDifference,
    getSumToPay,
    control,
    register,
    action,
    isSubmitting,
    errors,
  };
}
