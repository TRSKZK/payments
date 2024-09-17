"use server";

import { db } from "@/db";

export async function getUserId(email?: string | null): Promise<string | null> {
  const user = await db.user.findFirst({
    where: { email },
    select: {
      id: true,
    },
  });
  return user ? user.id : null;
}
