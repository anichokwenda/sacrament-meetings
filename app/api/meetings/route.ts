import { NextRequest, NextResponse } from "next/server";
import { getMeetings } from "@/lib/meetings-db";

export async function GET(request: NextRequest) {
  const date = request.nextUrl.searchParams.get("date");

  // /api/meetings?date=2026-05-03 - filter by date
  const meetings = getMeetings(date);

  return NextResponse.json(meetings);
}