import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { DMMF } from "@prisma/client/runtime/binary";
import SortOrder = DMMF.SortOrder;
import { Payment } from "@prisma/client";

export interface ResponseWithCount {
  results: Payment[];
  count: number;
}

export async function GET(
  req: NextRequest,
  { params }: { params: { page: string; userId: string; order: SortOrder } },
): Promise<NextResponse<ResponseWithCount>> {
  const payments = await db.payment.findMany({
    where: {
      id: params.userId,
    },
  });
  return NextResponse.json(
    { results: payments, count: payments.length },
    { status: 200 },
  );
}
