import { StaticImageData } from "next/image";

export interface LandingCardData {
  image: StaticImageData;
  cardTitle: string;
  cardHeaderTitle: string;
  cardContent: string;
}
