import { auth } from "@/auth";
import Container from "@/components/container";

export default async function Cart() {
  const session = await auth();

  if (!session?.user) {
    return <div>You are not logged in</div>;
  }

  return (
    <div>
      <Container>
        <div>Cart</div>
      </Container>
    </div>
  );
}
