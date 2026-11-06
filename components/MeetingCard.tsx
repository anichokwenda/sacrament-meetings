import Link from 'next/link';
import type { SacramentMeeting } from '@/lib/types';

function typeBadge(type: SacramentMeeting['meetingType']) {
  const styles = {
    regular: 'bg-blue-50 text-blue-700 border-blue-200',
    testimony: 'bg-amber-50 text-amber-700 border-amber-200',
    stake: 'bg-purple-50 text-purple-700 border-purple-200',
    general: 'bg-green-50 text-green-700 border-green-200',
  };
  return styles[type];
}

export default function MeetingCard({ meeting }: { meeting: SacramentMeeting }) {
  return (
    <Link href={`/meetings/${meeting.id}`} className="block group">
      <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-500 truncate">{meeting.date}</p>
            <h3 className="text-[15px] font-semibold text-zinc-900 group-hover:text-blue-700 truncate">
              {meeting.presiding}
            </h3>
            <p className="text-sm text-zinc-500 truncate">Conducting: {meeting.conducting}</p>
          </div>
          <span className={`shrink-0 text-[11px] px-2.5 py-1 rounded-full font-medium border capitalize ${typeBadge(meeting.meetingType)}`}>
            {meeting.meetingType}
          </span>
        </div>
        <div className="flex gap-2 text-xs text-zinc-500 pt-3 border-t border-dashed border-zinc-100">
          <span>{meeting.speakers.length} items</span>
          <span>•</span>
          <span className="truncate">{meeting.openingHymn.title}</span>
        </div>
      </div>
    </Link>
  );
}