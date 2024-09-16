import { LandingCardData } from "@/app/landing-cards-data";
import bills from "../../public/bills.png";
import place from "../../public/in-one-place.png";
import track from "../../public/track.png";
import reminder from "../../public/reminder.png";

export const LANDING_CARDS: LandingCardData[] = [
  {
    image: bills,
    cardTitle: "Store all your bills in one place",
    cardHeaderTitle: "Store All Your Bills in One Place",
    cardContent:
      "Store all your utility bills securely in one place. Access them anytime, from anywhere, and simplify your bill management.",
  },

  {
    image: place,
    cardTitle: "Keep All Your Payments Organized in One Place",
    cardHeaderTitle: "Keep All Your Payments Organized in One Place",
    cardContent:
      "Our platform allows you to organize all your utility payments in one convenient location, making it easy to manage and stay on top of your finances.",
  },

  {
    image: track,
    cardTitle: "Keep Track of Your Payments",
    cardHeaderTitle: "Keep Track of Your Payments",
    cardContent:
      "Get real-time updates on your payment status, reminders for upcoming due dates, and insights into your spending habits",
  },

  {
    image: reminder,
    cardTitle: "Schedule Your Next Payment",
    cardHeaderTitle: "Schedule Your Next Payment",
    cardContent:
      " Set reminders or schedule payments in advance so you never miss a due date and maintain your peace of mind",
  },
];
