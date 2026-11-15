import { Suspense } from 'react';
import Link from 'next/link';
import MeetingCard from "@/components/MeetingCard";
import MeetingSearch from '@/components/MeetingSearch';
import Pagination from '@/components/Pagination';
import { getMeetings } from "@/lib/meetings-db";

type MeetingsSearchParams = {
  query?: string | string[];
  page?: string | string[];
};

function firstValue(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default async function MeetingsPage({
  searchParams,
}: {
  searchParams: Promise<MeetingsSearchParams>;
}) {
  const params = await searchParams;
  const query = firstValue(params.query)?.trim() ?? '';
  const requestedPage = Number(firstValue(params.page) ?? '1');
  const page =
    Number.isSafeInteger(requestedPage) && requestedPage > 0
      ? requestedPage
      : 1;
  const result = await getMeetings({ query, page });

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">All Meetings</h1>
          <p className="text-sm text-zinc-600" role="status" aria-live="polite">
            {result.total} {result.total === 1 ? 'meeting' : 'meetings'}
          </p>
        </div>
        <Link
          href="/meetings/new"
          className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
        >
          Create meeting
        </Link>
      </div>

      <Suspense
        fallback={
          <div
            aria-hidden="true"
            className="h-10 animate-pulse rounded-lg bg-zinc-100"
          />
        }
      >
        <MeetingSearch key={query} initialQuery={query} />
      </Suspense>

      {result.meetings.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          {result.meetings.map((meeting) => (
            <MeetingCard key={meeting.id} meeting={meeting} />
          ))}
        </div>
      ) : (
        <p className="rounded-lg border border-zinc-200 bg-white p-6 text-zinc-700" role="status">
          {query
            ? `No meetings match “${query}”.`
            : 'No meetings have been added yet.'}
        </p>
      )}

      <Suspense fallback={null}>
        <Pagination totalPages={result.totalPages} />
      </Suspense>
    </div>
  );
}