import Link from 'next/link';
import type { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--card-border)] pb-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">
          Meeting administration
        </p>
        <nav aria-label="Administration navigation" className="flex gap-4 text-sm">
          <Link className="underline underline-offset-4" href="/meetings">
            All meetings
          </Link>
          <Link className="underline underline-offset-4" href="/meetings/new">
            Create meeting
          </Link>
        </nav>
      </div>
      {children}
    </section>
  );
}
