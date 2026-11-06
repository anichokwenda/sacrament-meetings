'use client';

import { useState } from 'react';
import NavLinks from './NavLinks';

export default function Header() {
  const [currentDate] = useState(() =>
    new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  );

  return (
    <header className="sticky top-0 z-10 border-b border-[var(--card-border)] bg-[var(--card)]/80 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold tracking-tight text-[var(--primary)]">Harare West Ward</h1>
          <p className="text-xs text-[var(--muted)] min-h-[16px]">{currentDate}</p>
        </div>
        <NavLinks />
      </div>
    </header>
  );
}