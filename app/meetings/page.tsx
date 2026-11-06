import MeetingCard from "@/components/MeetingCard";
import type { SacramentMeeting } from "@/lib/types";

const meetings: SacramentMeeting[] = [
  { id: 1, date: "2026-05-03", meetingType: "regular", presiding: "Bishop Moyo", conducting: "Brother Chikore", announcements: [], openingHymn: { number: 2, title: "The Spirit of God" }, openingPrayer: "Sister Chipo", wardBusiness: [], stakeBusiness: false, sacramentHymn: { number: 169, title: "As Now We Take the Sacrament" }, speakers: [{ name: "Sister Ncube", topic: "Faith", type: "speaker" }], closingHymn: { number: 19, title: "We Thank Thee" }, closingPrayer: "Brother Banda" },
  { id: 2, date: "2026-05-10", meetingType: "testimony", presiding: "Bishop Moyo", conducting: "Brother James", announcements: ["Testimony"], openingHymn: { number: 1, title: "The Morning Breaks" }, openingPrayer: "Brother Dube", wardBusiness: [], stakeBusiness: false, sacramentHymn: { number: 100, title: "Jesus, Once" }, speakers: [], closingHymn: { number: 50, title: "Love at Home" }, closingPrayer: "Sister Moyo" },
  { id: 3, date: "2026-05-17", meetingType: "regular", presiding: "Bishop Moyo", conducting: "Brother Chikore", announcements: [], openingHymn: { number: 7, title: "Israel" }, openingPrayer: "Sister Sibanda", wardBusiness: [], stakeBusiness: false, sacramentHymn: { number: 185, title: "Reverently" }, speakers: [{ name: "Youth", topic: "Repentance", type: "speaker" }], closingHymn: { number: 263, title: "Go Forth" }, closingPrayer: "Elder Johnson" },
];

export default function MeetingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">All Meetings ({meetings.length}) - Cards Should Show Now</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {meetings.map((m) => (
          <MeetingCard key={m.id} meeting={m} />
        ))}
      </div>
    </div>
  );
}