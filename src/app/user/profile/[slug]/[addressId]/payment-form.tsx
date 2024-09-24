import { UtilityService } from "@prisma/client";
import { useForm } from "react-hook-form";
import { handlePayment } from "@/app/actions/handle-payment";

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
  utilityId: string,
  userId: string,
  utility: UtilityService,
) {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { isSubmitting },
  } = useForm<UtilityPayForm>({
    defaultValues: {
      ...defaultValues,
      prevValue: utility.prevValue || "",
      rate: utility.rate || "",
    },
  });

  const action: () => void = handleSubmit(async (formData: UtilityPayForm) => {
    await handlePayment(formData, utilityId, userId);
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
  };
}
