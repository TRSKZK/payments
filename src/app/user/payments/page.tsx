"use server";

import { auth } from "@/auth";
import Container from "@/components/container";
import { getUserId } from "@/app/actions/get-user-id";
import { getUserPayments } from "@/app/actions/get-user-payments";

export default async function Payments() {
  const session = await auth();
  const userId = await getUserId(session?.user?.email);
  const user = await getUserPayments(userId || "");

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
