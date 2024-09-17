import Container from "@/components/container";
import { Link } from "@nextui-org/link";

export default function Footer() {
  return (
    <div className="bg-violet-300 h-80 mt-32">
      <Container>
        <div className="grid grid-cols-2 py-16">
          <div className="flex flex-col gap-2 text-header-logo font-bold">
            <div>
              <Link className="text-header-logo" href="/about">
                About us
              </Link>
            </div>
            <div>
              <a href="mailto: taraskozakmail@gmail.com">
                Email: taraskozakmail@gmail.com
              </a>
            </div>
            <div>
              <a href="tel: +380938349232">Phone: +380938349232</a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
