type Status = "in-stock" | "backorder" | "quote" | "discontinued";

const MAP: Record<Status, { label: string; bg: string; fg: string; dot: string }> = {
  "in-stock": { label: "In stock · Ships today by 4PM CT", bg: "bg-[#E8F4E9]", fg: "text-in-stock", dot: "bg-in-stock" },
  backorder: { label: "Backorder · 2–3 week lead time", bg: "bg-[#FBEFD7]", fg: "text-backorder", dot: "bg-backorder" },
  quote: { label: "Custom quote required", bg: "bg-[#EFE6F7]", fg: "text-quote", dot: "bg-quote" },
  discontinued: { label: "Discontinued · See replacement", bg: "bg-[#F8E1E4]", fg: "text-discontinued", dot: "bg-discontinued" },
};

export function StockChip({ status }: { status: Status }) {
  const c = MAP[status];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-sm px-2 py-1 font-mono text-[10px] uppercase tracking-wider ${c.bg} ${c.fg}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
      {c.label}
    </span>
  );
}
