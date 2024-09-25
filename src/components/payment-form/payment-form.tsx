"use client";
import { Accordion, AccordionItem, Button, Input } from "@nextui-org/react";
import { Address, UtilityService } from "@prisma/client";
import { Form } from "react-hook-form";
import { useState } from "react";
import { usePaymentForm } from "@/components/payment-form/use-payment-form";

interface UtilityAccordionProps {
  utilities: UtilityService[];
  userId: string;
  address: Address | null;
}

export function PaymentForm({
  utilities,
  userId,
  address,
}: UtilityAccordionProps) {
  const [utilityId, setUtilityId] = useState<string>("");

  const renderUtilities = () => {
    return utilities.map((utility, index) => {
      const {
        getDifference,
        getSumToPay,
        control,
        register,
        action,
        isSubmitting,
        errors,
      } = usePaymentForm(utilityId, userId, utility, address);

      return (
        <AccordionItem
          className="mb-3"
          aria-label={`Accordion ${index}`}
          title={utility.name}
          key={utility.id}
          onPress={() => setUtilityId(utility.id)}
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
                isInvalid={!!errors.currentValue}
                errorMessage={errors.currentValue?.message}
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
                isInvalid={!!errors.prevValue}
                errorMessage={errors.prevValue?.message}
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
                value={getDifference()}
                {...register("difference")}
                name="difference"
                isInvalid={!!errors.difference}
                errorMessage={errors.difference?.message}
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
                value={getSumToPay()}
                {...register("sumToPay")}
                name="sumToPay"
                classNames={{
                  input: ["!text-header-logo font-bold"],
                }}
              />
              <Button
                onPress={action}
                isLoading={isSubmitting}
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
