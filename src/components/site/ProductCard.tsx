import { Heart, Plus, Minus } from "lucide-react";
import { StockChip } from "./StockChip";

export type Product = {
  brand: string;
  proprietary?: boolean;
  name: string;
  sku: string;
  price: string;
  msrp?: string;
  save?: string;
  bulk?: string;
  stock: "in-stock" | "backorder" | "quote" | "discontinued";
  badge?: "Made in USA" | "Bulk saver" | "VOC-compliant";
  image?: string;
};

export function ProductCard({ p }: { p: Product }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-md border border-line-200 bg-white transition hover:border-us-navy-700 hover:shadow-[0_8px_24px_-12px_rgba(14,38,88,0.25)]">
      <div className="relative aspect-square bg-paper-100">
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {p.proprietary && (
            <span className="rounded-sm bg-us-red-100 px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-us-red-700">
              Proprietary
            </span>
          )}
          {p.badge && (
            <span className="rounded-sm bg-asphalt-900 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-bone-50">
              {p.badge}
            </span>
          )}
        </div>
        <button className="absolute right-3 top-3 rounded-md bg-white/90 p-2 text-steel-500 opacity-0 transition group-hover:opacity-100 hover:text-us-red-600">
          <Heart className="h-4 w-4" />
        </button>
        {p.image ? (
          <img
            src={p.image}
            alt={p.name}
            loading="lazy"
            width={512}
            height={512}
            className="h-full w-full object-contain p-4 mix-blend-multiply transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center font-display text-5xl text-line-200">
            {p.brand.charAt(0)}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="font-mono text-[10px] uppercase tracking-wider text-steel-500">{p.brand}</div>
        <h3 className="mt-1 font-display text-base font-semibold leading-snug text-asphalt-900 line-clamp-2">
          {p.name}
        </h3>
        <div className="mt-1 font-mono text-xs text-steel-500">SKU # {p.sku}</div>

        <div className="mt-3 flex items-baseline gap-2 font-mono">
          <span className="text-lg font-bold text-asphalt-900">{p.price}</span>
          {p.msrp && <span className="text-xs text-steel-500 line-through">{p.msrp}</span>}
          {p.save && <span className="text-xs font-semibold text-us-red-700">{p.save}</span>}
        </div>
        {p.bulk && <div className="mt-1 font-mono text-[11px] text-us-navy-700">{p.bulk}</div>}

        <div className="mt-3">
          <StockChip status={p.stock} />
        </div>

        <div className="mt-4 flex items-center gap-2">
          <div className="flex items-center rounded-md border border-line-200">
            <button className="px-2 py-1.5 text-steel-500 hover:text-asphalt-900"><Minus className="h-3.5 w-3.5" /></button>
            <span className="w-8 text-center font-mono text-sm">1</span>
            <button className="px-2 py-1.5 text-steel-500 hover:text-asphalt-900"><Plus className="h-3.5 w-3.5" /></button>
          </div>
          <button className="flex-1 rounded-md bg-us-red-600 px-3 py-2 font-display text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-us-red-700">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
