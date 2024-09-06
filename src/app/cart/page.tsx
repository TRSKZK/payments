import { auth } from "@/auth";
import Header from "@/components/header/header";
import Container from "@/components/container";

export default async function Cart() {
  const session = await auth();

  if (!session?.user) {
    return <div>You are not logged in</div>;
  }

  return (
    <div>
      <Header />
      <Container>
        <div>Cart</div>
      </Container>
    </div>
  );
}
