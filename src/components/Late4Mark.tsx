export default function Late4Mark({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 8.5v7M8.5 12h7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <rect x="9.6" y="9.6" width="4.8" height="4.8" rx="1" fill="currentColor" />
      <rect x="1.5" y="1.5" width="5" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="17.5" y="1.5" width="5" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="1.5" y="17.5" width="5" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="17.5" y="17.5" width="5" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M6.5 6.5 9.8 9.8M17.5 6.5 14.2 9.8M6.5 17.5l3.3-3.3M17.5 17.5l-3.3-3.3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
