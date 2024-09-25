"use server";

import { db } from "@/db";

export async function getUserPayments(userId: string) {
  return db.user.findFirst({
    where: {
      id: userId,
    },
    include: {
      payments: true,
    },
  });
}
