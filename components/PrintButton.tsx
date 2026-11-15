'use client';

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="no-print px-4 py-2 bg-zinc-900 text-white rounded-full text-sm hover:bg-black transition"
    >
      Print
    </button>
  );
}
