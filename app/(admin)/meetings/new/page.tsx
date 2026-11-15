import Link from 'next/link';

export default function NewMeetingPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-zinc-900">
        Create Meeting — Coming in Week 04
      </h1>
      <p className="text-zinc-600">
        Meeting creation will be available when the Week 04 forms are added.
      </p>
      <Link
        href="/meetings"
        className="inline-flex rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
      >
        Back to meetings
      </Link>
    </div>
  );
}
