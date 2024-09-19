import { NextRequest, NextResponse } from "next/server";
import { NewAddressForm } from "@/components/add-new-address/new-address-form-hook";
import { db } from "@/db";

interface RequestBody extends NewAddressForm {
  slug: string;
}

export async function POST(req: NextRequest) {
  let address;
  try {
    if (req.method !== "POST") {
      return NextResponse.json("Method not allowed", { status: 405 });
    }

    const request: RequestBody = await new Response(req.body).json();

    const { city, street, building, apartment, slug } = request;
    address = await db.address.create({
      data: {
        city,
        street,
        building,
        apartment,
        ownerId: slug,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(error.message, { status: 500 });
    }
  }

  return NextResponse.json({ address }, { status: 200 });
}
