"use client";
import { Accordion, AccordionItem, Button, Input } from "@nextui-org/react";
import { UtilityService } from "@prisma/client";
import { Form, useForm } from "react-hook-form";

interface UtilityAccordionProps {
  utilities: UtilityService[];
}

const defaultValues = {
  prevValue: "",
  currentValue: "",
  difference: "",
  rate: "",
  sumToPay: "",
};

interface UtilityPayForm {
  prevValue: string;
  currentValue: string;
  difference: string;
  rate: string;
  sumToPay: string;
}

export function UtilityAccordion({ utilities }: UtilityAccordionProps) {
  const renderUtilities = () => {
    return utilities.map((utility, index) => {
      const { control, register, handleSubmit, setValue, getValues, watch } =
        useForm<UtilityPayForm>({
          defaultValues: {
            ...defaultValues,
            prevValue: utility.prevValue || "",
            rate: utility.rate || "",
          },
        });

      const action: () => void = handleSubmit(
        async (formData: UtilityPayForm) => {
          console.log(formData);
        },
      );
      const getDifference = (prevValueFormDb: string | null) => {
        const prevValue = prevValueFormDb
          ? prevValueFormDb
          : watch("prevValue");
        const difference = (
          Number(watch("currentValue")) - Number(prevValue)
        ).toString();
        setValue("difference", difference);
        return difference;
      };

      const getSumToPay = (rateFromDb: string | null) => {
        const rate = rateFromDb ? rateFromDb : watch("rate");
        const sumToPay = (
          Number(rate) * Number(getValues("difference"))
        ).toString();
        setValue("sumToPay", sumToPay);
        return sumToPay;
      };

      return (
        <AccordionItem
          className="mb-3"
          aria-label={`Accordion ${index}`}
          title={utility.name}
          key={utility.id}
        >
          <div className="flex gap-8">
            <div>
              IBAN{" "}
              <span className="font-bold text-header-logo">{utility.iban}</span>
            </div>
            <div>
              EDRPOU{" "}
              <span className="font-bold text-header-logo">
                {utility.edrpou}
              </span>
            </div>
            <div>
              Personal Account Number{" "}
              <span className="font-bold text-header-logo">
                {utility.personalAccountNumber}
              </span>
            </div>
          </div>
          <Form className="my-8" control={control}>
            <div className="flex flex-row gap-4 items-center">
              <Input
                className="text-header-logo"
                size="sm"
                {...register("currentValue")}
                label="Current value"
                name="currentValue"
                classNames={{
                  input: ["!text-header-logo font-bold"],
                }}
              />
              <div className="flex items-center px-4 font-bold text-header-logo">
                -
              </div>
              <Input
                size="sm"
                {...register("prevValue")}
                label="Previous value"
                name="prevValue"
                classNames={{
                  input: ["!text-header-logo font-bold"],
                }}
              />
              <div className="flex items-center px-4 font-bold text-header-logo">
                =
              </div>
              <Input
                disabled
                contentEditable="false"
                size="sm"
                label="Difference"
                value={getDifference(utility.prevValue)}
                {...register("difference")}
                name="difference"
                classNames={{
                  input: ["!text-header-logo font-bold"],
                }}
              />
            </div>
            <div className="flex gap-4 items-center mt-4">
              <Input
                size="sm"
                label="Rate"
                {...register("rate")}
                name="rate"
                classNames={{
                  input: ["!text-header-logo font-bold"],
                }}
              />
              <Input
                disabled
                contentEditable={false}
                size="sm"
                label="Sum to pay"
                value={getSumToPay(utility.rate)}
                {...register("sumToPay")}
                name="sumToPay"
                classNames={{
                  input: ["!text-header-logo font-bold"],
                }}
              />
              <Button
                onPress={action}
                type="submit"
                className="font-bold"
                color="secondary"
              >
                Pay
              </Button>
              <Button className="font-bold" color="primary">
                Cart
              </Button>
            </div>
          </Form>
        </AccordionItem>
      );
    });
  };
  return <Accordion variant="splitted">{renderUtilities()}</Accordion>;
}
