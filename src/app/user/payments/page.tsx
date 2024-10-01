"use server";

import { auth } from "@/auth";
import Container from "@/components/container";
import { getUserId } from "@/app/actions/get-user-id";
import { PaymentTable } from "@/app/user/payments/payment-table";

export default async function Payments() {
  const session = await auth();
  const userId = await getUserId(session?.user?.email);

  if (!session?.user) {
    return <div>You are not logged in</div>;
  }

  return (
    <>
      <Container>
        <div className="mt-16">
          <PaymentTable userId={userId} />
        </div>
      </Container>
    </>
  );
}
