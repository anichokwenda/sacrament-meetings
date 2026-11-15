'use client';

import { useDebouncedCallback } from 'use-debounce';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function MeetingSearch({
  initialQuery,
}: {
  initialQuery: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const updateSearch = useDebouncedCallback((value: string) => {
    const query = value.trim();
    const params = new URLSearchParams(searchParams.toString());

    if (query) {
      params.set('query', query);
    } else {
      params.delete('query');
    }

    params.delete('page');
    const queryString = params.toString();
    router.push(queryString ? `${pathname}?${queryString}` : pathname, {
      scroll: false,
    });
  }, 300);

  return (
    <div role="search">
      <label className="block">
        <span className="sr-only">Search meetings by name or type</span>
        <input
          type="search"
          aria-label="Search meetings by name or type"
          defaultValue={initialQuery}
          onChange={(event) => updateSearch(event.currentTarget.value)}
          placeholder="Search meetings by name or type"
          className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm text-zinc-900 placeholder:text-zinc-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
        />
      </label>
    </div>
  );
}
