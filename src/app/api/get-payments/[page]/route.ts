import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { page: string } },
) {
  return NextResponse.json("response", { status: 200 });
}
