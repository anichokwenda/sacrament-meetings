import type { SacramentMeeting } from '@/lib/types';

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-2.5 border-b border-dashed border-zinc-100 last:border-0">
      <span className="text-sm font-medium text-zinc-500">{label}</span>
      <span className="text-sm font-semibold text-right max-w-[60%] text-zinc-900">{value}</span>
    </div>
  );
}

export default function MeetingDetail({ meeting }: { meeting: SacramentMeeting }) {
  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-8 shadow-sm print:shadow-none print:border-black">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900">Sacrament Meeting</h1>
          <p className="text-zinc-500">{meeting.date} • {meeting.meetingType.toUpperCase()}</p>
        </div>
        <button onClick={() => typeof window !== 'undefined' && window.print()} className="no-print px-4 py-2 bg-zinc-900 text-white rounded-full text-sm hover:bg-black transition">
          Print
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h4 className="font-semibold mb-2 text-zinc-900">Presiding & Conducting</h4>
          <Row label="Presiding" value={meeting.presiding} />
          <Row label="Conducting" value={meeting.conducting} />
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-zinc-900">Music & Prayers</h4>
          <Row label="Opening Hymn" value={`#${meeting.openingHymn.number} - ${meeting.openingHymn.title}`} />
          <Row label="Opening Prayer" value={meeting.openingPrayer} />
          <Row label="Sacrament Hymn" value={`#${meeting.sacramentHymn.number} - ${meeting.sacramentHymn.title}`} />
          <Row label="Closing Hymn" value={`#${meeting.closingHymn.number} - ${meeting.closingHymn.title}`} />
          <Row label="Closing Prayer" value={meeting.closingPrayer} />
        </div>
      </div>

      <div className="mb-8">
        <h4 className="font-semibold mb-3 text-zinc-900">Program</h4>
        {meeting.wardBusiness.length > 0 && (
          <div className="mb-4 p-3 bg-zinc-50 rounded-lg border border-zinc-100">
            <p className="text-xs font-bold uppercase text-zinc-500 mb-1">Ward Business</p>
            {meeting.wardBusiness.map((b, i) => (
              <p key={i} className="text-sm text-zinc-900">• {b.description}</p>
            ))}
            {meeting.stakeBusiness && <p className="text-sm text-zinc-900">• Stake Business</p>}
          </div>
        )}
        <div className="space-y-2">
          {meeting.speakers.map((s, i) => (
            <div key={i} className="flex justify-between items-center py-3 px-4 rounded-lg border border-zinc-100 bg-zinc-50/50">
              <div>
                <p className="text-sm font-semibold text-zinc-900">{s.name}</p>
                <p className="text-xs text-zinc-500 uppercase">{s.type}</p>
              </div>
              <p className="text-sm italic text-zinc-700">{s.topic || '—'}</p>
            </div>
          ))}
        </div>
      </div>

      {meeting.announcements && meeting.announcements.length > 0 && (
        <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
          <h4 className="font-semibold text-sm mb-2 text-amber-900">Announcements</h4>
          <ul className="list-disc list-inside text-sm text-amber-800">
            {meeting.announcements.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
        </div>
      )}
    </article>
  );
}