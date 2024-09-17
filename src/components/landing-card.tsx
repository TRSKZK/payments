import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import { LandingCardData } from "@/app/landing-cards-data";

interface LandingCardProps {
  cardData: LandingCardData;
}

export function LandingCard({ cardData }: LandingCardProps) {
  return (
    <div className="group">
      <Card
        className="group-hover:scale-105 group-hover:duration-300 duration-700 ease-in-out scale-100 blur-0"
        title={cardData.cardTitle}
      >
        <CardBody className="flex flex-row gap-6">
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-6 md:col-span-4">
              <Image
                priority
                height={200}
                src={cardData.image}
                className="object-cover"
                alt="image of a receipt"
              />
            </div>
            <div className="flex flex-col col-span-6 md:col-span-8">
              <h2 className="text-header-logo font-bold">
                {cardData.cardHeaderTitle}
              </h2>
              <p>{cardData.cardContent}</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
