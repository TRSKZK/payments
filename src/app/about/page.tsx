import Container from "@/components/container";
import Image from "next/image";
import about from "../../../public/about-page.png";

export default async function About() {
  return (
    <Container>
      <div className="grid grid-cols-2 mt-16">
        <div>
          <h1 className="text-header-logo text-6xl font-bold">About us</h1>
          <div className="flex flex-col gap-8 mt-8">
            <p>
              Welcome to Payments, where we believe managing your utility bills
              should be as simple and stress-free as possible. Our mission is to
              empower individuals and families by providing a seamless platform
              for handling all your utility payments in one place.
            </p>
            <p>
              Our team is dedicated to providing you with a user-friendly
              experience. We prioritize transparency, convenience, and security,
              so you can focus on what truly matters in your life. We are
              passionate about helping you save time, make informed decisions
              about your utilities, and take control of your finances.
            </p>
            <p>
              Join us on this journey to simplify your utility payments.
              Experience the peace of mind that comes from having everything you
              need in one convenient place. Welcome to the future of managing
              your utility bills.
            </p>
            <p>
              Thank you for choosing Payments. Together, let’s make utility
              management effortless!
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image src={about} alt="Image of a lady with utility bill" />
        </div>
      </div>
    </Container>
  );
}
