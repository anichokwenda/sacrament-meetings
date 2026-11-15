import MeetingsNav from '@/components/MeetingsNav';

export default function MeetingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--card-border)] pb-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">
          Sacrament meetings
        </p>
        <MeetingsNav />
      </div>
      {children}
    </section>
  );
}