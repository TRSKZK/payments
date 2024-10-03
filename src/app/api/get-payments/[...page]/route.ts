import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { Payment } from "@prisma/client";
import { ROWS_PER_PAGE } from "@/common/constants";

export interface ResponseWithCount {
  results: Payment[];
  count: number;
}

export async function GET(
  req: NextRequest,
  { params }: { params: { page: string; userId: string } },
): Promise<NextResponse<ResponseWithCount | string>> {
  let result: Payment[] = [];
  let count = 0;
  try {
    count = await db.payment.count({ where: { id: params.userId } });
    const payments = await db.payment.findMany({
      where: {
        id: params.userId,
      },
      take: Number(params.page[0]) * ROWS_PER_PAGE,
      skip: (Number(params.page[0]) - 1) * ROWS_PER_PAGE,
    });

    result = [...payments];
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(error.message, { status: 500 });
    }
  }
  return NextResponse.json({ results: result, count }, { status: 200 });
}
