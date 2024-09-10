"use server";

import { db } from "@/db";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function POST(req: NextApiRequest) {
  try {
    const body = await new Response(req.body).json();
    const { email, firstName, lastName, password } = body;
    const usedEmailUser = await db.user.findFirst({ where: { email } });

    if (usedEmailUser?.email) {
      return NextResponse.json(
        { message: "This email is already registered" },
        { status: 401 },
      );
    }

    const user = await db.user.create({
      data: {
        email,
        name: firstName + ` ${lastName}`,
        password: password,
      },
    });

    if (!user.email) {
      return NextResponse.json(
        { message: "Unable to create a user" },
        { status: 401 },
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
  return NextResponse.json(
    { message: "User created successfully" },
    { status: 200 },
  );
}
