export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden>
        <circle cx="32" cy="32" r="31" fill="#fff" stroke="#14181F" strokeWidth="1.5" />
        <path d="M2 32 A30 30 0 0 1 62 32 Z" fill="#C8232C" />
        <path d="M2 32 A30 30 0 0 0 62 32 Z" fill="#1C3F87" />
        <text x="32" y="29" textAnchor="middle" fontFamily="Oswald, sans-serif" fontWeight="700" fontSize="14" fill="#fff">US</text>
        <text x="32" y="44" textAnchor="middle" fontFamily="Oswald, sans-serif" fontWeight="700" fontSize="8" fill="#fff">AUTO</text>
      </svg>
      <div className="leading-none">
        <div className="font-display text-[22px] font-bold tracking-tight text-us-navy-700">
          US AUTO SUPPLY<span className="text-us-red-600">®</span>
        </div>
        <div className="eyebrow mt-1 text-us-navy-700">
          Your solutions start with US®
        </div>
      </div>
    </div>
  );
}
