import logoSrc from "@/assets/us-auto-supply-logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoSrc}
        alt="US Auto Supply"
        className="h-16 w-auto md:h-20"
      />
    </div>
  );
}
