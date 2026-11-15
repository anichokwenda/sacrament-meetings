'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/meetings', label: 'All meetings' },
  { href: '/meetings/current', label: 'Current' },
];

export default function MeetingsNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Meeting navigation" className="flex flex-wrap gap-2">
      {links.map((link) => {
        const isCurrent =
          pathname === link.href ||
          (link.href === '/meetings' &&
            pathname.startsWith('/meetings/') &&
            !pathname.startsWith('/meetings/current'));

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isCurrent ? 'page' : undefined}
            className={`rounded-full px-3 py-1.5 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 ${
              isCurrent
                ? 'bg-zinc-900 text-white'
                : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
