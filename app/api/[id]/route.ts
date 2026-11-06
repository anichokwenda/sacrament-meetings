import { NextRequest, NextResponse } from "next/server";
import { getMeetingById } from "@/lib/meetings-db";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const numericId = Number(id);

  // 400 when id is not a valid number
  if (isNaN(numericId) || !Number.isInteger(numericId)) {
    return NextResponse.json(
      { error: "Invalid meeting ID - must be a number" },
      { status: 400 }
    );
  }

  const meeting = getMeetingById(numericId);

  // 404 when not found
  if (!meeting) {
    return NextResponse.json(
      { error: "Meeting not found" },
      { status: 404 }
    );
  }

  // 200 when found
  return NextResponse.json(meeting);
}