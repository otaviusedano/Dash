import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth/auth";
import { NextResponse } from "next/server";

export async function GET(req) {
  console.log(req);
  const session = await getServerSession(authOptions);

  return NextResponse.json({
    authenticated: !!session,
    session,
  });
}
