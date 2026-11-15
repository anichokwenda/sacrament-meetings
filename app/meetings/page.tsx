import MeetingCard from "@/components/MeetingCard";
import { getMeetings } from "@/lib/meetings-db";

export default function MeetingsPage() {
  const meetings = getMeetings();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">All Meetings ({meetings.length})</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {meetings.map((m) => (
          <MeetingCard key={m.id} meeting={m} />
        ))}
      </div>
    </div>
  );
}