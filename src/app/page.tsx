import Header from "@/components/header/header";
import Container from "@/components/container";
import Image from "next/image";
import hero from "../../public/hero.png";

export default async function Home() {
  return (
    <div>
      <Header />
      <Container>
        <div className="mt-12">
          <Image
            className="rounded-lg"
            src={hero}
            alt="Image of a hero section"
            loading="lazy"
          />
        </div>
      </Container>
    </div>
  );
}
