"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Address, UtilityService } from "@prisma/client";
import { UtilityAccordion } from "@/components/payment-form/utility-accordion";
import { useMemo } from "react";

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
  const renderUtilities = useMemo(() => {
    return utilities.map((utility, index) => (
      <AccordionItem
        key={utility.id}
        className="mb-3"
        aria-label={`Accordion ${index}`}
        title={utility.name}
      >
        <UtilityAccordion
          key={utility.id}
          address={address}
          userId={userId}
          utility={utility}
        />
      </AccordionItem>
    ));
  }, [utilities]);
  return <Accordion variant="splitted">{renderUtilities}</Accordion>;
}
