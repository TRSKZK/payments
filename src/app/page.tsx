import Header from "@/components/header/header";
import Container from "@/components/container";
import Image from "next/image";
import hero from "../../public/hero.png";
import { LandingCard } from "@/components/landing-card";
import { LANDING_CARDS } from "@/common/landing-cards-data";
import Footer from "@/components/footer/footer";

export default async function Home() {
  return (
    <div>
      <Header />
      <Container>
        <div className="mt-16 group">
          <Image
            priority={true}
            className="rounded-lg group-hover:scale-105 group-hover:duration-300 duration-700 ease-in-out scale-100 blur-0"
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
      <Footer />
    </div>
  );
}
