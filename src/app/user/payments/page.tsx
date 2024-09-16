"use server";

import { auth } from "@/auth";
import Container from "@/components/container";

export default async function Payments() {
  const session = await auth();

  if (!session?.user) {
    return <div>You are not logged in</div>;
  }

  return (
    <>
      <Container>
        <div>Payments</div>
      </Container>
    </>
  );
}
