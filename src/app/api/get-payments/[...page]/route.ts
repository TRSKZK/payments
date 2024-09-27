import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { DMMF } from "@prisma/client/runtime/binary";
import SortOrder = DMMF.SortOrder;

export async function GET(
  req: NextRequest,
  { params }: { params: { page: string; userId: string; order: SortOrder } },
) {
  const payments = await db.payment.findMany({
    where: {
      id: params.userId,
    },
    orderBy: {
      paymentDateTime: params.order,
    },
  });
  return NextResponse.json(payments, { status: 200 });
}
