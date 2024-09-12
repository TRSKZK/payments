import { NextRequest, NextResponse } from "next/server";
import { User } from "next-auth";
import { db } from "@/db";
import bcrypt from "bcrypt";

type BodyRequest = {
  email: string;
  password: string;
};

export async function POST(
  req: NextRequest,
): Promise<NextResponse<User | string | null>> {
  if (req.method !== "POST") {
    return NextResponse.json("Method not allowed", { status: 405 });
  }

  const request: BodyRequest = await new Response(req.body).json();

  if (!request.email || !request.password) {
    return NextResponse.json("Unprocessable entity", { status: 422 });
  }

  const user = await db.user.findFirst({
    where: { email: request.email as string },
  });

  if (user) {
    if (bcrypt.compareSync(request.password, user.password || "")) {
      return NextResponse.json(user, { status: 200 });
    }
  }

  return NextResponse.json(null, { status: 200 });
}
