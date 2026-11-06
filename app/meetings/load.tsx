export default function Loading() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {[1,2,3,4].map(i => (
        <div key={i} className="h-32 rounded-[var(--radius)] border border-[var(--card-border)] bg-[var(--muted-bg)] animate-pulse" />
      ))}
    </div>
  );
}