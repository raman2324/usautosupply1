import { Truck, FileText, Network } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="hidden border-b border-line-200 bg-paper-100 text-asphalt-900 md:block">
      <div className="container-x flex h-9 items-center justify-center gap-10 text-xs">
        <span className="flex items-center gap-2">
          <Truck className="h-3.5 w-3.5 text-us-red-600" />
          Free shipping on orders over <span className="font-mono">$99</span> in the contiguous US.
        </span>
        <span className="flex items-center gap-2">
          <FileText className="h-3.5 w-3.5 text-us-red-600" />
          Shop accounts: <span className="font-mono">NET-30</span> terms available — Apply →
        </span>
        <span className="flex items-center gap-2">
          <Network className="h-3.5 w-3.5 text-us-red-600" />
          Search <span className="font-mono">39,000</span> products across our 4-brand network →
        </span>
      </div>
    </div>
  );
}
