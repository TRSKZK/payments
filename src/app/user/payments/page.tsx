"use server";

import { auth } from "@/auth";
import Container from "@/components/container";
import { getUserId } from "@/app/actions/get-user-id";
import { PaymentTable } from "@/app/user/payments/payment-table";
import axios from "axios";
import { baseUrl } from "@/common/constants";

export default async function Payments() {
  const session = await auth();
  const userId = await getUserId(session?.user?.email);
  const payments = await axios.get(
    `${baseUrl}/api/get-payments/1/${userId}/asc`,
  );

  if (!session?.user) {
    return <div>You are not logged in</div>;
  }

  return (
    <>
      <Container>
        <div>Payments</div>
        <PaymentTable />
      </Container>
    </>
  );
}
