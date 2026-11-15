'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({
  totalPages,
}: {
  totalPages: number;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const requestedPage = Number(searchParams.get('page') ?? '1');
  const page =
    Number.isSafeInteger(requestedPage) && requestedPage > 0
      ? Math.min(requestedPage, totalPages)
      : 1;

  if (totalPages <= 1) {
    return null;
  }

  function pageHref(targetPage: number) {
    const params = new URLSearchParams(searchParams.toString());

    if (targetPage === 1) {
      params.delete('page');
    } else {
      params.set('page', String(targetPage));
    }

    const queryString = params.toString();
    return queryString ? `${pathname}?${queryString}` : pathname;
  }

  const linkClassName =
    'rounded-md border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700';
  const disabledClassName =
    'rounded-md border border-zinc-200 px-3 py-2 text-sm font-medium text-zinc-400';

  return (
    <nav
      aria-label="Meetings pagination"
      className="flex items-center justify-between gap-4"
    >
      {page > 1 ? (
        <Link href={pageHref(page - 1)} className={linkClassName}>
          Previous
        </Link>
      ) : (
        <span aria-disabled="true" className={disabledClassName}>
          Previous
        </span>
      )}
      <p aria-live="polite" className="text-sm text-zinc-700">
        <span aria-current="page">Page {page}</span> of {totalPages}
      </p>
      {page < totalPages ? (
        <Link href={pageHref(page + 1)} className={linkClassName}>
          Next
        </Link>
      ) : (
        <span aria-disabled="true" className={disabledClassName}>
          Next
        </span>
      )}
    </nav>
  );
}
