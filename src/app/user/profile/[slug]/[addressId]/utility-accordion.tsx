"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { UtilityService } from "@prisma/client";

interface UtilityAccordionProps {
  utilities: UtilityService[];
}

export function UtilityAccordion({ utilities }: UtilityAccordionProps) {
  const renderUtilities = () =>
    utilities.map((utility, index) => (
      <AccordionItem
        className="mb-3"
        aria-label={`Accordion ${index}`}
        title={utility.name}
        key={utility.id}
      >
        {utility.name}
      </AccordionItem>
    ));
  return (
    <Accordion className="flex flex-col gap-4" variant="splitted">
      {renderUtilities()}
    </Accordion>
  );
}
