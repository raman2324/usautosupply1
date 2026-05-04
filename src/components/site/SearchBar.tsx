import { Search } from "lucide-react";

export function SearchBar({
  size = "md",
  placeholder = "Search 39,000+ products, SKUs, or brands — try 'Uni-Posca markers' or 'CHAMP frame machine'",
}: {
  size?: "md" | "lg";
  placeholder?: string;
}) {
  const h = size === "lg" ? "h-16" : "h-12";
  const text = size === "lg" ? "text-base" : "text-sm";
  return (
    <form className={`group flex w-full items-stretch overflow-hidden rounded-md border border-line-200 bg-white shadow-[0_1px_0_rgba(20,24,31,0.04)] focus-within:border-us-red-600 focus-within:ring-2 focus-within:ring-us-red-600/20 ${h}`}>
      <div className="flex items-center pl-4 text-steel-500">
        <Search className="h-5 w-5" />
      </div>
      <input
        type="search"
        placeholder={placeholder}
        className={`flex-1 bg-transparent px-3 outline-none placeholder:text-steel-500 ${text}`}
      />
      <button
        type="submit"
        className={`flex items-center gap-2 bg-us-red-600 px-6 font-display font-semibold uppercase tracking-wide text-white transition hover:bg-us-red-700 ${text}`}
      >
        <span className="hidden sm:inline">Find products</span>
        <Search className="h-5 w-5 sm:hidden" />
      </button>
    </form>
  );
}
