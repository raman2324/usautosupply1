import { Phone, Mail, MapPin, Facebook, Youtube, Instagram, Twitter } from "lucide-react";

const COLS: Array<{ title: string; items: string[] }> = [
  {
    title: "Shop by Vertical",
    items: [
      "Tools & Equipment",
      "Paint & Refinishing",
      "Repair",
      "Parts Handling",
      "Administration & Workflow",
      "Sales & Advertising",
      "Marketing & Promotional",
    ],
  },
  {
    title: "Shop by Brand",
    items: [
      "CHAMP®",
      "Versa-Tags®",
      "Slip-N-Grip®",
      "Eco-Barrier™",
      "The Big Glass™",
      "View all 60+ →",
    ],
  },
  {
    title: "For Shops",
    items: [
      "NET-30 Application",
      "Multi-Location Pricing",
      "Find Your Rep",
      "Sample Requests",
      "Bulk Pricing",
      "Catalog Request",
      "Quick Order",
    ],
  },
  {
    title: "Customer Care",
    items: ["Contact", "Track Order", "Returns", "Shipping", "Privacy", "Terms", "ADA Compliance", "FAQs"],
  },
  {
    title: "Shop the Network",
    items: ["US Auto Supply", "Auto Body Toolmart", "Collision Services", "IDEA", "Sid Savage"],
  },
];

export function Footer() {
  return (
    <footer className="bg-asphalt-900 text-bone-50">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr_2fr_2fr_1.6fr_1.6fr]">
          {/* Brand block */}
          <div>
            <div className="font-display text-2xl font-bold leading-tight">
              US AUTO SUPPLY<span className="text-us-red-500">®</span>
            </div>
            <p className="eyebrow mt-1 text-steel-300">Your solutions start with US®</p>
            <div className="mt-6 space-y-3 text-sm text-steel-300">
              <a href="tel:8004312323" className="flex items-start gap-2 hover:text-bone-50">
                <Phone className="mt-0.5 h-4 w-4" />
                <span className="font-mono">800-431-2323</span>
              </a>
              <div className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4" />
                <span>customercare@usautosupply.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4" />
                <span>Mon–Fri 7AM–6PM CT</span>
              </div>
            </div>
            <div className="mt-6 flex gap-3 text-steel-300">
              {[Facebook, Twitter, Youtube, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="rounded-md border border-asphalt-700 p-2 transition hover:border-us-red-500 hover:text-bone-50">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="eyebrow text-us-red-500">{col.title}</h4>
              <ul className="mt-4 space-y-2.5 text-sm text-steel-300">
                {col.items.map((it) => (
                  <li key={it}>
                    <a href="#" className="transition hover:text-bone-50">{it}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-asphalt-800">
        <div className="container-x flex flex-col gap-4 py-6 text-xs text-steel-300 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono">SECURE CHECKOUT</span>
            <div className="flex gap-2">
              {["VISA", "MC", "AMEX", "DISC", "PAYPAL"].map((p) => (
                <span key={p} className="rounded border border-asphalt-700 px-2 py-1 font-mono text-[10px] tracking-wider text-bone-50">
                  {p}
                </span>
              ))}
            </div>
          </div>
          <p className="font-mono">
            © {new Date().getFullYear()} US Auto Supply. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
