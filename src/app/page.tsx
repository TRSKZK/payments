import Header from "@/components/header/header";
import Container from "@/components/container";
import Image from "next/image";
import hero from "../../public/hero.png";
import { LandingCard } from "@/components/landing-card";
import { LANDING_CARDS } from "@/common/landing-cards-data";

export default async function Home() {
  return (
    <div>
      <Header />
      <Container>
        <div className="mt-16">
          <Image
            priority={true}
            className="rounded-lg"
            src={hero}
            alt="Image of a hero section"
            loading="eager"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-20">
          {LANDING_CARDS.map((card) => (
            <LandingCard key={card.cardTitle} cardData={card} />
          ))}
        </div>
      </Container>
    </div>
  );
}
