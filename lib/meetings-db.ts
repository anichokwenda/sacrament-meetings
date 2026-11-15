import { neon } from '@neondatabase/serverless';
import type {
  Hymn,
  MeetingType,
  SacramentMeeting,
  SpeakerItem,
  WardBusinessItem,
} from './types';

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('DATABASE_URL is required to access the meetings database.');
}

const sql = neon(databaseUrl);

type MeetingRow = {
  id: number | string;
  date: string;
  meetingType: MeetingType;
  presiding: string;
  conducting: string;
  announcements: string[] | null;
  openingHymn: Hymn;
  openingPrayer: string;
  wardBusiness: WardBusinessItem[] | null;
  stakeBusiness: boolean;
  sacramentHymn: Hymn;
  speakers: SpeakerItem[] | null;
  closingHymn: Hymn;
  closingPrayer: string;
};

export type MeetingListOptions = {
  query?: string;
  page?: number;
};

export type PaginatedMeetings = {
  meetings: SacramentMeeting[];
  total: number;
  page: number;
  totalPages: number;
};

const MEETINGS_PER_PAGE = 6;

function toSacramentMeeting(row: MeetingRow): SacramentMeeting {
  const id = Number(row.id);

  if (!Number.isSafeInteger(id)) {
    throw new Error(`Invalid meeting id returned by the database: ${row.id}`);
  }

  return {
    ...row,
    id,
    announcements: row.announcements ?? [],
    wardBusiness: row.wardBusiness ?? [],
    speakers: row.speakers ?? [],
  };
}

function selectMeetingRows(rows: Record<string, unknown>[]): SacramentMeeting[] {
  return (rows as MeetingRow[]).map(toSacramentMeeting);
}

export function getMeetings(): Promise<SacramentMeeting[]>;
export function getMeetings(date: string | null): Promise<SacramentMeeting[]>;
export function getMeetings(
  options: MeetingListOptions
): Promise<PaginatedMeetings>;
export async function getMeetings(
  input?: string | null | MeetingListOptions
): Promise<SacramentMeeting[] | PaginatedMeetings> {
  if (typeof input === 'object' && input !== null) {
    return getPaginatedMeetings(input);
  }

  const date = input || null;
  const filterDate = date || null;
  const rows = await sql`
    SELECT
      id,
      to_char(date, 'YYYY-MM-DD') AS date,
      meeting_type AS "meetingType",
      presiding,
      conducting,
      announcements,
      opening_hymn AS "openingHymn",
      opening_prayer AS "openingPrayer",
      ward_business AS "wardBusiness",
      stake_business AS "stakeBusiness",
      sacrament_hymn AS "sacramentHymn",
      speakers,
      closing_hymn AS "closingHymn",
      closing_prayer AS "closingPrayer"
    FROM meetings
    WHERE (${filterDate}::date IS NULL OR date = ${filterDate}::date)
    ORDER BY date ASC, id ASC
  `;

  return selectMeetingRows(rows);
}

async function getPaginatedMeetings(
  options: MeetingListOptions
): Promise<PaginatedMeetings> {
  const query = options.query?.trim() ?? '';
  const searchPattern = `%${query}%`;
  const requestedPageValue = options.page ?? 1;
  const requestedPage =
    Number.isSafeInteger(requestedPageValue) && requestedPageValue > 0
      ? requestedPageValue
      : 1;

  const countRows = await sql`
    SELECT COUNT(*)::integer AS total
    FROM meetings
    WHERE (
      ${query.length === 0} OR
      meeting_type ILIKE ${searchPattern} OR
      presiding ILIKE ${searchPattern} OR
      conducting ILIKE ${searchPattern} OR
      announcements::text ILIKE ${searchPattern} OR
      speakers::text ILIKE ${searchPattern}
    )
  `;
  const total = Number(countRows[0]?.total ?? 0);

  if (!Number.isSafeInteger(total) || total < 0) {
    throw new Error('The database returned an invalid meetings count.');
  }

  const totalPages = Math.ceil(total / MEETINGS_PER_PAGE);
  const page = totalPages === 0 ? 1 : Math.min(requestedPage, totalPages);
  const offset = (page - 1) * MEETINGS_PER_PAGE;
  const rows = await sql`
    SELECT
      id,
      to_char(date, 'YYYY-MM-DD') AS date,
      meeting_type AS "meetingType",
      presiding,
      conducting,
      announcements,
      opening_hymn AS "openingHymn",
      opening_prayer AS "openingPrayer",
      ward_business AS "wardBusiness",
      stake_business AS "stakeBusiness",
      sacrament_hymn AS "sacramentHymn",
      speakers,
      closing_hymn AS "closingHymn",
      closing_prayer AS "closingPrayer"
    FROM meetings
    WHERE (
      ${query.length === 0} OR
      meeting_type ILIKE ${searchPattern} OR
      presiding ILIKE ${searchPattern} OR
      conducting ILIKE ${searchPattern} OR
      announcements::text ILIKE ${searchPattern} OR
      speakers::text ILIKE ${searchPattern}
    )
    ORDER BY date DESC, id DESC
    LIMIT ${MEETINGS_PER_PAGE}
    OFFSET ${offset}
  `;

  return {
    meetings: selectMeetingRows(rows),
    total,
    page,
    totalPages,
  };
}

export async function getMeetingById(
  id: number
): Promise<SacramentMeeting | null> {
  const rows = await sql`
    SELECT
      id,
      to_char(date, 'YYYY-MM-DD') AS date,
      meeting_type AS "meetingType",
      presiding,
      conducting,
      announcements,
      opening_hymn AS "openingHymn",
      opening_prayer AS "openingPrayer",
      ward_business AS "wardBusiness",
      stake_business AS "stakeBusiness",
      sacrament_hymn AS "sacramentHymn",
      speakers,
      closing_hymn AS "closingHymn",
      closing_prayer AS "closingPrayer"
    FROM meetings
    WHERE id = ${id}
    LIMIT 1
  `;

  return rows.length > 0
    ? toSacramentMeeting(rows[0] as MeetingRow)
    : null;
}
