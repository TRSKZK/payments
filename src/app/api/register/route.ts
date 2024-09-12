"use server";
import { db } from "@/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  const body = await new Response(req.body).json();
  const { email, firstName, lastName, password } = body;
  const usedEmailUser = await db.user.findFirst({ where: { email } });
  const hashedPassword = bcrypt.hashSync(password, 10);

  if (usedEmailUser?.email) {
    return NextResponse.json(
      { message: "This email is already registered" },
      { status: 401 },
    );
  }

  try {
    await db.user.create({
      data: {
        email,
        name: firstName + ` ${lastName}`,
        password: hashedPassword,
      },
    });
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
