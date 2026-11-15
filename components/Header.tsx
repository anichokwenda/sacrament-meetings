import NavLinks from './NavLinks';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-[var(--card-border)] bg-[var(--card)]/80 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold tracking-tight text-[var(--primary)]">Harare West Ward</h1>
          <p className="text-xs text-[var(--muted)]">Sacrament Meeting Planner</p>
        </div>
        <NavLinks />
      </div>
    </header>
  );
}