import { redirect } from "next/navigation";
import { getMeetings } from "@/lib/meetings-db";

export const dynamic = 'force-dynamic';

export default function CurrentMeetingPage() {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 Sun - 6 Sat
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - dayOfWeek); // roll back to Sunday

  const isoDate = sunday.toISOString().split("T")[0]; // YYYY-MM-DD

  const meetingsForSunday = getMeetings(isoDate);

  if (meetingsForSunday.length > 0) {
    // Redirect to first meeting for this Sunday
    redirect(`/meetings/${meetingsForSunday[0].id}`);
  } else {
    // Fallback when no meeting exists for this Sunday
    redirect("/meetings");
  }
}