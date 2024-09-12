"use server";

import { auth } from "@/auth";
import Header from "@/components/header/header";
import Container from "@/components/container";

export default async function Payments() {
  const session = await auth();

  if (!session?.user) {
    return <div>You are not logged in</div>;
  }

  return (
    <>
      <Header />
      <Container>
        <div>Payments</div>
      </Container>
    </>
  );
}
