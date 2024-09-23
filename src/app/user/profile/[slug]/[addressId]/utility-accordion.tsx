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
};

interface UtilityPayForm {
  prevValue: string;
  currentValue: string;
  difference: string;
}

export function UtilityAccordion({ utilities }: UtilityAccordionProps) {
  const renderUtilities = () => {
    return utilities.map((utility, index) => {
      const { control, register, watch } = useForm<UtilityPayForm>({
        defaultValues,
      });

      const findDifference = () => {
        return (
          Number(watch("currentValue")) - Number(watch("prevValue"))
        ).toString();
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
                value={findDifference()}
                contentEditable="false"
                size="sm"
                label="Difference"
                {...register("difference")}
                name="difference"
                classNames={{
                  input: ["!text-header-logo font-bold"],
                }}
              />
              <Button color="secondary">Pay</Button>
              <Button color="primary">Add to Cart</Button>
            </div>
          </Form>
        </AccordionItem>
      );
    });
  };
  return <Accordion variant="splitted">{renderUtilities()}</Accordion>;
}
