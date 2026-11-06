import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-05-03',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Michael Jones',
    announcements: ['Ward temple night: May 10', 'Youth activity - May 6'],
    openingHymn: { number: 2, title: 'The Spirit of God' },
    openingPrayer: 'Sister Williams',
    wardBusiness: [{ description: 'Sustaining of new Primary president - Sister Johnson' }],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: 'As Now We Take the Sacrament' },
    speakers: [
      { name: 'Sister Emily Brown', topic: 'Faith in Jesus Christ', type: 'speaker' },
      { name: 'Ward Choir', topic: 'Abide With Me', type: 'musical-number' },
      { name: 'Elder Carter', topic: 'Repentance and Forgiveness', type: 'speaker' },
    ],
    closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
    closingPrayer: 'Brother Davis',
  },
  {
    id: 2,
    date: '2026-05-10',
    meetingType: 'testimony',
    presiding: 'Bishop Smith',
    conducting: 'Bishop Smith',
    announcements: ['Fast offering collection'],
    openingHymn: { number: 85, title: 'How Firm a Foundation' },
    openingPrayer: 'Brother Allen',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 175, title: 'O God, the Eternal Father' },
    speakers: [
      { name: 'Congregation', topic: 'Fast & Testimony Meeting', type: 'speaker' },
    ],
    closingHymn: { number: 303, title: 'Keep the Commandments' },
    closingPrayer: 'Sister Martinez',
  },
  {
    id: 3,
    date: '2026-05-17',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Phillips',
    announcements: ['Ward conference next week'],
    openingHymn: { number: 66, title: 'Rejoice, the Lord is King!' },
    openingPrayer: 'Brother Lee',
    wardBusiness: [{ description: 'Release of Brother Kim - Thank you for service' }],
    stakeBusiness: false,
    sacramentHymn: { number: 183, title: 'In Remembrance of Thy Suffering' },
    speakers: [
      { name: 'Brother Taylor', topic: 'The Atonement', type: 'speaker' },
      { name: 'Sister Young', topic: 'Personal Revelation', type: 'speaker' },
    ],
    closingHymn: { number: 296, title: 'We Have Partaken' },
    closingPrayer: 'Sister Clark',
  },
  {
    id: 4,
    date: '2026-05-24',
    meetingType: 'stake',
    presiding: 'President Anderson - Stake President',
    conducting: 'President Anderson',
    announcements: ['All wards meet at Stake Center'],
    openingHymn: { number: 5, title: 'High on the Mountain Top' },
    openingPrayer: 'Stake Patriarch',
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: { number: 169, title: 'As Now We Take the Sacrament' },
    speakers: [
      { name: 'Stake Choir', topic: 'Consider the Lilies', type: 'musical-number' },
      { name: 'President Anderson', topic: 'Building Zion in Our Homes', type: 'speaker' },
    ],
    closingHymn: { number: 250, title: 'We Are All Enlisted' },
    closingPrayer: 'Sister Anderson',
  },
  {
    id: 5,
    date: '2026-04-05',
    meetingType: 'general',
    presiding: 'President Russell M. Nelson',
    conducting: 'President Dallin H. Oaks',
    announcements: ['General Conference - Broadcast'],
    openingHymn: { number: 19, title: 'We Thank Thee, O God, for a Prophet' },
    openingPrayer: 'Elder Stevenson',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 174, title: 'While of These Emblems We Partake' },
    speakers: [
      { name: 'President Nelson', topic: 'The Power of Spiritual Momentum', type: 'speaker' },
    ],
    closingHymn: { number: 2, title: 'The Spirit of God' },
    closingPrayer: 'Sister Eubank',
  },
  {
    id: 6,
    date: '2026-05-31',
    meetingType: 'regular',
    presiding: 'Bishop Johnson - 1st Counselor',
    conducting: 'Brother Phillips',
    announcements: ['Ward picnic June 7'],
    openingHymn: { number: 221, title: 'Dear to the Heart of the Shepherd' },
    openingPrayer: 'Sister White',
    wardBusiness: [{ description: 'Sustaining - Youth baptism' }],
    stakeBusiness: false,
    sacramentHymn: { number: 1008, title: 'Gethsemane' },
    speakers: [
      { name: 'Brother Adams - Youth Speaker', topic: 'Seminary Blessings', type: 'speaker' },
      { name: 'Sister Harris', topic: 'Service', type: 'speaker' },
    ],
    closingHymn: { number: 92, title: 'For the Beauty of the Earth' },
    closingPrayer: 'Brother Kimball',
  },
];

// Required query functions - temporary scaffold
export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) return meetings.filter(m => m.date === date);
  return [...meetings].sort((a, b) => a.date.localeCompare(b.date));
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find(m => m.id === id) ?? null;
}