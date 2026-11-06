import Link from "next/link";

export default function MeetingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-[var(--card-border)] pb-4">
        <h2 className="text-xl font-semibold">Meetings</h2>
        <div className="flex gap-2 text-sm">
          <Link href="/meetings" className="px-3 py-1.5 rounded-full hover:bg-[var(--muted-bg)]">All</Link>
          <Link href="/meetings/current" className="px-3 py-1.5 rounded-full bg-[var(--primary)] text-white">This Sunday</Link>
        </div>
      </div>
      {children}
    </div>
  );
}