import { currentRole } from "@/lib/user";
import { UserRole } from "@prisma/client";
import { NextRequest } from "next/server";

export async function GET() {
  const role = await currentRole();
  if (role === UserRole.ADMIN) {
    return new NextRequest(null, {
      status: 200,
    });
  }

  return new NextRequest(null, {
    status: 403,
  });
}
