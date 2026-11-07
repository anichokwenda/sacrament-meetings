import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero with optimized image */}
      <section className="grid md:grid-cols-2 gap-10 items-center py-8">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Image
              className="dark:invert h-5 w-[100px]"
              src="/next.svg"
              alt="Next.js logo"
              width={100}
              height={20}
              priority
            />
            <span className="text-xs px-2 py-1 rounded-full bg-[var(--muted-bg)] text-[var(--muted)]">Ward Planner</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-[var(--primary)]">
            Plan, view and print sacrament agendas
          </h1>
          
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400 max-w-xl">
            All meetings in one place. Presiding, conducting, hymns, prayers, speakers, ward business, and a print-ready view for Sunday.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/meetings"
              className="flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-background font-medium hover:bg-[#383838] transition-colors"
            >
              View All Meetings
            </Link>
            <Link
              href="/meetings/current"
              className="flex h-12 items-center justify-center rounded-full border border-black/[.08] dark:border-white/[.145] px-8 font-medium hover:bg-black/[.04] dark:hover:bg-[#1a1a1a] transition-colors"
            >
              This Sunday →
            </Link>
          </div>
        </div>

        {/* Hero image - optimized with width/height/alt to avoid layout shift */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius)] border border-[var(--card-border)] bg-white shadow-sm">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgjBiF_ZSdvLqg-DiQjMwYG7QOao-_tFsT7IGSjG_dEQ&s=10"
            alt="Chapel interior with organ and pews - sacrament meeting"
            width={800}
            height={600}
            priority
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
            <p className="text-white text-sm font-medium">Harare West Ward • Sundays 9:00 AM</p>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="grid grid-cols-3 gap-4">
        <div className="p-5 rounded-[var(--radius)] border border-[var(--card-border)] bg-[var(--card)]">
          <p className="text-2xl font-bold">6</p>
          <p className="text-sm text-[var(--muted)]">Meetings planned</p>
        </div>
        <div className="p-5 rounded-[var(--radius)] border border-[var(--card-border)] bg-[var(--card)]">
          <p className="text-2xl font-bold">Print</p>
          <p className="text-sm text-[var(--muted)]">Ready views included</p>
        </div>
        <div className="p-5 rounded-[var(--radius)] border border-[var(--card-border)] bg-[var(--card)]">
          <p className="text-2xl font-bold">Fast</p>
          <p className="text-sm text-[var(--muted)]">In-memory scaffold</p>
        </div>
      </section>
    </div>
  );
}