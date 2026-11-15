export default function Loading() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {Array.from({ length: 6 }, (_, index) => (
        <div
          key={index}
          aria-hidden="true"
          className="h-32 animate-pulse rounded-[var(--radius)] border border-[var(--card-border)] bg-[var(--muted-bg)]"
        />
      ))}
    </div>
  );
}