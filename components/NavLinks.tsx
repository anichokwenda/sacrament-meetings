'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/meetings', label: 'Meetings' },
  { href: '/meetings/current', label: 'Current' },
  { href: '/meetings', label: 'Print View' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-1 rounded-full bg-zinc-100 p-1">
      {links.map((link) => {
        const isActive = pathname === link.href || (pathname.startsWith(link.href + '/') && link.href !== '/');
        return (
          <Link
            key={link.href}
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