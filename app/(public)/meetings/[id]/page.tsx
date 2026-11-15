import { notFound } from "next/navigation";
import Link from "next/link";
import MeetingDetail from "@/components/MeetingDetail";
import { getMeetingById, getMeetings } from "@/lib/meetings-db";

export default async function DetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const numericId = Number(id);
  const meeting =
    Number.isInteger(numericId) && numericId > 0
      ? await getMeetingById(numericId)
      : null;

  if (!meeting) {
    return notFound();
  }

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      <Link href="/meetings" className="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900 transition no-print">
        ← Back to Meetings
      </Link>
      <MeetingDetail meeting={meeting} />
    </div>
  );
}

export async function generateStaticParams() {
  const meetings = await getMeetings();
  return meetings.map((m) => ({
    id: String(m.id),
  }));
}