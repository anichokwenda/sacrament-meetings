import { notFound } from "next/navigation";
import MeetingDetail from "@/components/MeetingDetail";
import { meetings } from "@/lib/data";

export default function DetailPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const { id } = params;
  
  // String() comparison fixes number vs string id errors
  const meeting = meetings.find((m) => String(m.id) === String(id));

  if (!meeting) {
    return notFound();
  }

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      <a href="/meetings" className="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900 transition no-print">
        ← Back to Meetings
      </a>
      <MeetingDetail meeting={meeting} />
    </div>
  );
}

// Fixes Next.js build: Error: Page "/meetings/[id]" is missing generateStaticParams
export function generateStaticParams() {
  return meetings.map((m) => ({
    id: String(m.id),
  }));
}