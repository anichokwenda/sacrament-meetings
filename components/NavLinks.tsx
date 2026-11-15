'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { key: 'meetings', href: '/meetings', label: 'Meetings' },
  { key: 'current', href: '/meetings/current', label: 'Current' },
];

export default function NavLinks() {
  const pathname = usePathname();

  if (pathname === '/meetings' || pathname.startsWith('/meetings/')) {
    return null;
  }

  return (
    <nav className="flex items-center gap-1 rounded-full bg-zinc-100 p-1">
      {links.map((link) => {
        const isActive =
          pathname === link.href ||
          (pathname.startsWith(`${link.href}/`) &&
            (link.href !== '/meetings' ||
              !pathname.startsWith('/meetings/current')));
        return (
          <Link
            key={link.key}
            href={link.href}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              isActive
                ? 'bg-zinc-900 text-white shadow-sm'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-white'
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}