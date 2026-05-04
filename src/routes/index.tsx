import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, Package, Award, Network, Truck, Tag, PhoneCall,
  ClipboardList, Paintbrush, Wrench, Shirt, Building2,
  Boxes, Layers, FileText, Megaphone, Sparkles, Briefcase,
  CheckCircle2, Users, MapPin, BadgeCheck, ListChecks, Repeat,
  PlayCircle, BookOpen, Percent,
} from "lucide-react";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SearchBar } from "@/components/site/SearchBar";
import { ProductCard, type Product } from "@/components/site/ProductCard";
import heroShop from "@/assets/hero-shop.jpg";
import champFrame from "@/assets/champ-frame.jpg";
import paintBooth from "@/assets/paint-booth.jpg";
import frontOffice from "@/assets/front-office.jpg";
import paintRoom from "@/assets/paint-room.jpg";
import newBay from "@/assets/new-bay.jpg";
import heritage from "@/assets/heritage.jpg";
import imgKeyTags from "@/assets/products/key-tags.jpg";
import imgLift from "@/assets/products/two-post-lift.jpg";
import imgFloorMats from "@/assets/products/floor-mats.jpg";
import imgPaintMarkers from "@/assets/products/paint-markers.jpg";
import imgRoMarkers from "@/assets/products/ro-markers.jpg";
import imgAirAmp from "@/assets/products/air-amplifier.jpg";
import imgMaskingTape from "@/assets/products/masking-tape.jpg";
import imgSprayGun from "@/assets/products/spray-gun.jpg";
import imgPaintBoothProd from "@/assets/products/paint-booth.jpg";
import imgIndMarkers from "@/assets/products/industrial-markers.jpg";
import imgDetailWand from "@/assets/products/detail-wand.jpg";
import imgBodyFiller from "@/assets/products/body-filler.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "US Auto Supply® — 39,000+ Products for Professional Auto Shops" },
      { name: "description", content: "60 years supplying body shops, mechanical repair, dealerships, and detailers. Tools, paint, repair, parts, and shop workflow across a 4-brand network. Your solutions start with US®." },
      { property: "og:title", content: "US Auto Supply® — Your solutions start with US®" },
      { property: "og:description", content: "39,000+ products across tools, paint, repair, parts, and shop workflow. Built for professional automotive." },
    ],
  }),
  component: HomePage,
});

/* ──────────────────────────────────────────────────────────── data */

const TASKS = [
  { icon: ClipboardList, title: "Restock the front office", sub: "Job jackets, key tags, repair order holders, markers." },
  { icon: Paintbrush, title: "Refill the paint room", sub: "Mix sticks, masking, sandpaper, prep wipes, solvents." },
  { icon: Wrench, title: "Set up a new bay", sub: "Lifts, frame machines, hand tools, air." },
  { icon: Shirt, title: "Brand my shop", sub: "Apparel, signage, branded merch, customer mailers." },
  { icon: Building2, title: "Compare paint booths", sub: "Specs, financing, install." },
];

const TRUST = [
  { icon: Package, label: "39,000+ Products" },
  { icon: Award, label: "60+ Years in Auto Supply" },
  { icon: Network, label: "4-Brand Network" },
  { icon: Truck, label: "Ships today by 4PM CT" },
  { icon: Tag, label: "NET-30 for Shop Accounts" },
  { icon: PhoneCall, label: "800-431-2323" },
];

const VERTICALS = [
  { icon: Wrench, name: "Tools & Equipment", subs: "Air Tools, Hand Tools, Lifts, Frame, Welding", count: "8,420", img: newBay },
  { icon: Paintbrush, name: "Paint & Refinishing", subs: "Spray Guns, Mixing, Sandpaper, Masking, Prep", count: "11,200", img: paintRoom },
  { icon: Wrench, name: "Repair", subs: "Body, Mechanical, Electrical, Diagnostic, Safety", count: "7,810", img: heroShop },
  { icon: Boxes, name: "Parts Handling", subs: "Carts, Shelving, Bin Storage, Labels, Tags", count: "3,140", img: paintRoom },
  { icon: ClipboardList, name: "Administration & Workflow", subs: "Job Jackets, RO Forms, Key Tags, Markers", count: "4,260", img: frontOffice },
  { icon: Megaphone, name: "Sales & Advertising", subs: "Reminders, Mailers, Window Decals, Displays", count: "2,180", img: frontOffice },
  { icon: Shirt, name: "Marketing & Promotional", subs: "Apparel, Signage, Branded Merch, Mailers", count: "1,990", img: heritage },
];

const PROPRIETARY = [
  { name: "CHAMP®", note: "Made-in-USA shop equipment. Frame machines, lifts, presses." },
  { name: "Versa-Tags®", note: "Laminated, reinforced key tags built for shop floors." },
  { name: "Slip-N-Grip®", note: "Floor mats, seat jackets, shop protection." },
  { name: "Eco-Barrier™", note: "Eco-friendly floor protection." },
  { name: "The Big Glass™", note: "Paint markers that last on glass and metal." },
];

const STOCKED = [
  "Uni-Posca", "Sakura", "Viking", "3M", "SATA",
  "Iwata", "DeVilbiss", "PPG", "Sherwin-Williams", "BASF",
];

const NETWORK = [
  { name: "Auto Body Toolmart", tag: "Tools and equipment for auto body.", count: "12,400 products" },
  { name: "Collision Services", tag: "Body shop supplies and paint booths.", count: "9,820 products" },
  { name: "IDEA", tag: "Specialty automotive.", count: "4,210 products" },
  { name: "Sid Savage", tag: "Specialty automotive.", count: "3,580 products" },
];

const PRODUCTS: Product[] = [
  { brand: "VERSA-TAGS®", proprietary: true, name: "Heavy-Duty Laminated Key Tags, Pack of 250", sku: "1101254", price: "$48.95", bulk: "10+ from $44.95 · 50+ from $39.95", stock: "in-stock", badge: "Made in USA", image: imgKeyTags },
  { brand: "CHAMP®", proprietary: true, name: "10K LB Two-Post Asymmetric Lift", sku: "C-FX10K", price: "$3,499.00", msrp: "$4,199.00", save: "Save $700", bulk: "Quote for 2+", stock: "backorder", badge: "Made in USA", image: imgLift },
  { brand: "SLIP-N-GRIP®", proprietary: true, name: "Premium Floor Mats, Roll of 500", sku: "SNG-500", price: "$129.95", bulk: "5+ from $119.95", stock: "in-stock", image: imgFloorMats },
  { brand: "UNI-POSCA", name: "PC-5M Medium Tip Paint Markers, Set of 8", sku: "PC5M-8", price: "$22.50", msrp: "$28.99", save: "Save $6.49", stock: "in-stock", image: imgPaintMarkers },
  { brand: "THE BIG GLASS™", proprietary: true, name: "Windshield Repair Order Markers, 12-pack", sku: "BG-12RO", price: "$18.75", bulk: "12+ from $16.50", stock: "in-stock", image: imgRoMarkers },
  { brand: "VIKING", name: "VK-200 High-Volume Air Amplifier", sku: "VK-200", price: "$399.99", msrp: "$534.99", save: "Save $135", bulk: "10+ from $379.95", stock: "in-stock", badge: "VOC-compliant", image: imgAirAmp },
  { brand: "3M", name: "Performance Masking Tape 2380, 18mm — Case", sku: "3M-2380-18", price: "$84.50", bulk: "5+ from $79.95 · 20+ from $74.50", stock: "in-stock", image: imgMaskingTape },
  { brand: "SATA", name: "satajet X 5500 HVLP Spray Gun", sku: "SATA-X5500", price: "$849.00", stock: "in-stock", badge: "Bulk saver", image: imgSprayGun },
  { brand: "CHAMP®", proprietary: true, name: "Downdraft Paint Booth — Custom Spec", sku: "C-PB-DD", price: "Quote", stock: "quote", image: imgPaintBoothProd },
  { brand: "SAKURA", name: "Pen-Touch Industrial Markers, 12-pack", sku: "PT-12", price: "$36.50", stock: "in-stock", image: imgIndMarkers },
  { brand: "VIKING", name: "Detail Wand Replacement Kit", sku: "VK-DWR", price: "$24.95", stock: "discontinued", image: imgDetailWand },
  { brand: "EVERCOAT", name: "Rage Gold Premium Body Filler — Gallon", sku: "EVR-RG-GAL", price: "$58.99", bulk: "4+ from $54.99", stock: "in-stock", image: imgBodyFiller },
];

const TASK_FLOWS = [
  { eyebrow: "Front Office", title: "Restocking the front office", dek: "Key tags, drop envelopes, repair order holders, service stickers, AutoWriter markers.", kit: "VERSA-TAGS · KEY TAG RINGS · RO HOLDERS · BIG GLASS MARKERS", img: frontOffice, cta: "Build the front-office order" },
  { eyebrow: "Paint Room", title: "Refilling the paint room", dek: "Masking, sandpaper, mix sticks, prep wipes, gun cleaning solvents.", kit: "3M MASKING · MIRKA ABRASIVES · MIX STICKS · PREP WIPES", img: paintRoom, cta: "Build the refill order" },
  { eyebrow: "New Bay", title: "Setting up a new bay", dek: "Frame machine, lift, air compressor, hand tool kit, prep table.", kit: "CHAMP LIFT · FRAME MACHINE · AIR · HAND TOOL KIT", img: newBay, cta: "Start the setup" },
];

const CONTENT = [
  { tag: "VIDEO · 8:24", icon: PlayCircle, title: "How to align a CHAMP frame machine in 6 steps", excerpt: "Hands-on demo with a 2018 sedan on the rack. Real shop, real tools.", cta: "Watch" },
  { tag: "5 MIN READ · APR 2026", icon: BookOpen, title: "Picking the right grit: 320 vs 600 vs 1500 for clearcoat sanding", excerpt: "When a painter on the floor calls for finer paper — and when not to listen.", cta: "Read" },
  { tag: "SAVE 20% · MAY 2026", icon: Percent, title: "Monthly deals: SATA, 3M, and CHAMP markdowns", excerpt: "Verified shops save more — NET-30 customers see additional tier pricing.", cta: "Shop deals" },
];

/* ──────────────────────────────────────────────────────────── page */

function HomePage() {
  return (
    <div className="bg-bone-50 text-asphalt-900">
      <AnnouncementBar />
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line-200">
        <div className="absolute inset-0">
          <img src={heroShop} alt="Working auto body shop" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-bone-50 via-bone-50/95 to-transparent" />
        </div>
        <div className="container-x relative grid gap-10 py-16 lg:grid-cols-[1.4fr_1fr] lg:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow text-us-red-600">60+ Years · 39,000+ Products · 4-Brand Network</p>
            <h1 className="mt-4 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-asphalt-900 md:text-7xl">
              Your solutions<br />start with <span className="text-us-red-600">US®</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-asphalt-800">
              From a <span className="font-mono">$1.20</span> China-marker pencil to a <span className="font-mono">$50,000</span> paint booth — 39,000 products across tools, paint, repair, parts, and shop workflow. Built for the way professional automotive runs.
            </p>
            <div className="mt-8">
              <SearchBar size="lg" placeholder="Search products, SKUs, or brands…" />
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Shop By Brand", "Browse the catalog", "Request a printed catalog", "Open a shop account"].map((c) => (
                <a key={c} href="#" className="inline-flex items-center gap-1 rounded-md border border-us-navy-700/30 bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-us-navy-700 transition hover:bg-us-navy-700 hover:text-white">
                  {c} <ArrowRight className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Task router */}
          <aside className="rounded-md border border-line-200 bg-paper-100 p-6 shadow-[0_2px_0_rgba(20,24,31,0.04)] backdrop-blur">
            <p className="eyebrow text-us-navy-700">For your shop today</p>
            <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight">What are you here for?</h2>
            <div className="mt-5 divide-y divide-line-200 border-y border-line-200">
              {TASKS.map(({ icon: Icon, title, sub }) => (
                <a key={title} href="#" className="group flex items-center gap-4 py-3.5 transition hover:bg-us-navy-100">
                  <Icon className="h-6 w-6 shrink-0 text-us-navy-700" />
                  <div className="flex-1">
                    <div className="font-semibold leading-tight">{title}</div>
                    <div className="text-xs text-steel-500">{sub}</div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-steel-500 transition group-hover:translate-x-1 group-hover:text-us-red-600" />
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-line-200 bg-paper-100">
        <div className="container-x flex flex-wrap items-center justify-between gap-y-3 py-4">
          {TRUST.map(({ icon: Icon, label }, i) => (
            <div key={label} className="flex items-center gap-2 px-2">
              <Icon className="h-4 w-4 text-us-red-600" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-asphalt-900">{label}</span>
              {i < TRUST.length - 1 && <span className="ml-2 hidden h-4 w-px bg-line-200 md:inline-block" />}
            </div>
          ))}
        </div>
      </section>

      {/* SHOP BY VERTICAL */}
      <section className="border-b border-line-200">
        <div className="container-x py-16 md:py-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-us-red-600">Shop by Vertical</p>
              <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight md:text-5xl">
                Built around how an auto shop runs.
              </h2>
            </div>
            <a href="#" className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-us-navy-700 hover:text-us-red-600 md:inline-flex">
              View all 7 verticals <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VERTICALS.map((v) => (
              <a
                key={v.name}
                href="#"
                className="group flex flex-col overflow-hidden rounded-md border border-line-200 bg-white transition hover:border-us-navy-700"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-paper-100">
                  <img src={v.img} alt={v.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-asphalt-900/50 to-transparent" />
                  <v.icon className="absolute right-4 top-4 h-6 w-6 text-bone-50" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl font-bold uppercase leading-tight">{v.name}</h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-wider text-steel-500">{v.subs}</p>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <span className="font-mono text-sm text-asphalt-900">{v.count} products</span>
                    <ArrowRight className="h-4 w-4 text-us-red-600 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SHOP BY BRAND */}
      <section className="border-b border-line-200 bg-paper-100">
        <div className="container-x py-16 md:py-20">
          <p className="eyebrow text-us-red-600">Shop by Brand</p>
          <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight md:text-5xl">
            Our brands. Your tools.
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {PROPRIETARY.map((b) => (
              <a key={b.name} href="#" className="group flex flex-col rounded-md border border-line-200 bg-white p-5 transition hover:border-us-red-600">
                <div className="font-display text-2xl font-bold text-us-navy-700">{b.name}</div>
                <p className="mt-2 flex-1 text-sm text-steel-500">{b.note}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-us-red-600">
                  Shop the line <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
            {STOCKED.map((s) => (
              <a key={s} href="#" className="rounded-md border border-line-200 bg-white px-4 py-5 text-center font-display text-base font-semibold text-steel-500 transition hover:border-us-navy-700 hover:text-us-navy-700">
                {s}
              </a>
            ))}
            <a href="#" className="rounded-md border border-dashed border-us-navy-700/40 bg-us-navy-50 px-4 py-5 text-center text-xs font-semibold uppercase tracking-wide text-us-navy-700 hover:bg-us-navy-100">
              View all 60+ brands →
            </a>
          </div>
        </div>
      </section>

      {/* NETWORK BAND */}
      <section className="bg-us-navy-900 text-bone-50">
        <div className="container-x py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
            <div>
              <p className="eyebrow text-us-red-500">Four-Brand Automotive Network</p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight tracking-tight md:text-5xl">
                One search across 4 specialty catalogs.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-steel-300">
                US Auto Supply leads a network of four specialty brands — together, the deepest professional automotive catalog in North America.
              </p>
              <a href="#" className="mt-6 inline-flex items-center gap-2 rounded-md bg-us-red-600 px-5 py-3 font-display text-sm font-semibold uppercase tracking-wide text-white hover:bg-us-red-700">
                Search across all 4 brands <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {NETWORK.map((n) => (
                <a key={n.name} href="#" className="group flex flex-col rounded-md border border-line-200 bg-paper-100 p-5 text-asphalt-900 transition hover:bg-white">
                  <div className="font-display text-xl font-bold uppercase">{n.name}</div>
                  <p className="mt-1 text-sm text-steel-500">{n.tag}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-mono text-xs text-steel-500">{n.count}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-us-navy-700">
                      Visit <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="border-b border-line-200">
        <div className="container-x py-16 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-us-red-600">Top Reorders This Month</p>
              <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight md:text-5xl">
                What pro shops are buying.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {["All", "Paint Room", "Front Office", "Bay & Equipment", "On Sale", "Quick Ship"].map((t, i) => (
                <button key={t} className={`rounded-md border px-3 py-2 text-xs font-semibold uppercase tracking-wide transition ${i === 0 ? "border-us-red-600 bg-us-red-600 text-white" : "border-line-200 bg-white text-asphalt-900 hover:border-us-navy-700 hover:text-us-navy-700"}`}>
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((p) => <ProductCard key={p.sku} p={p} />)}
          </div>
          <div className="mt-8 text-center">
            <a href="#" className="inline-flex items-center gap-2 font-semibold text-us-navy-700 hover:text-us-red-600">
              View all top sellers <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SHOP ACCOUNT BAND */}
      <section className="bg-us-navy-100">
        <div className="container-x py-16 md:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow text-us-red-600">For Professional Shops</p>
              <h2 className="mt-2 font-display text-3xl font-bold uppercase leading-tight tracking-tight md:text-5xl">
                Built for the shops that reorder every week.
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#" className="inline-flex items-center gap-2 rounded-md bg-us-red-600 px-5 py-3 font-display text-sm font-semibold uppercase tracking-wide text-white hover:bg-us-red-700">
                  Open a Shop Account <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#" className="inline-flex items-center gap-2 rounded-md bg-us-navy-700 px-5 py-3 font-display text-sm font-semibold uppercase tracking-wide text-white hover:bg-us-navy-600">
                  Apply for NET-30
                </a>
              </div>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: ListChecks, t: "Saved shop lists", d: "One-click reorder for weekly restocks." },
                { icon: FileText, t: "NET-30 terms", d: "Net-30 invoicing for verified shops." },
                { icon: MapPin, t: "Multi-location pricing", d: "MSO accounts get unified pricing." },
                { icon: Users, t: "Dedicated regional rep", d: "A real person who knows your shop." },
                { icon: Sparkles, t: "Sample requests", d: "3 free samples per quarter." },
                { icon: Repeat, t: "Bulk pricing tiers", d: "Tier breaks auto-applied at checkout." },
              ].map(({ icon: Icon, t, d }) => (
                <li key={t} className="flex gap-3 rounded-md border border-line-200 bg-white p-4">
                  <Icon className="h-5 w-5 shrink-0 text-us-red-600" />
                  <div>
                    <div className="font-semibold">{t}</div>
                    <div className="mt-0.5 text-sm text-steel-500">{d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CHAMP BAND */}
      <section className="relative overflow-hidden bg-us-red-700 text-bone-50">
        <div className="container-x grid gap-10 py-16 md:py-20 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-md border border-us-red-900">
            <img src={champFrame} alt="CHAMP frame machine in working body shop" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="eyebrow text-paper-100">CHAMP® · Made in America</p>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight tracking-tight md:text-5xl">
              Our line. Built right.<br />Made for the shop floor.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-bone-50/90">
              CHAMP is engineered in-house, tested in real shops, and only sold through the US Auto Supply network. Frame machines, lifts, presses, and shop equipment built to outlast the warranty.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-wider text-paper-100">
              <span className="flex items-center gap-1.5"><BadgeCheck className="h-4 w-4" /> Designed in USA</span>
              <span className="flex items-center gap-1.5"><BadgeCheck className="h-4 w-4" /> Built for pros</span>
              <span className="flex items-center gap-1.5"><BadgeCheck className="h-4 w-4" /> 2-year warranty</span>
            </div>
            <a href="#" className="mt-8 inline-flex items-center gap-2 rounded-md bg-paper-100 px-5 py-3 font-display text-sm font-semibold uppercase tracking-wide text-us-red-700 hover:bg-white">
              Shop CHAMP <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* PAINT BOOTH FUNNEL */}
      <section className="relative overflow-hidden border-b border-line-200">
        <div className="absolute inset-0">
          <img src={paintBooth} alt="Paint booth interior" loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-bone-50 via-bone-50/90 to-transparent" />
        </div>
        <div className="container-x relative grid gap-10 py-16 md:py-20 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="eyebrow text-us-red-600">Paint Booths</p>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase leading-tight tracking-tight md:text-5xl">
              Six-figure decisions.<br />Made simple.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-asphalt-800">
              Compare downdraft and crossdraft booths, model financing, and book a consultation with an installer in your region.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Compare booths", "Financing calculator", "Schedule consultation", "Powder coating"].map((c) => (
                <a key={c} href="#" className="inline-flex items-center gap-1 rounded-md border border-us-navy-700/30 bg-white/80 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-us-navy-700 hover:bg-us-navy-700 hover:text-white">
                  {c} <ArrowRight className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-md border border-line-200 bg-paper-100 p-6">
            <p className="eyebrow text-us-navy-700">Quick recommender</p>
            <h3 className="mt-2 font-display text-xl font-bold uppercase">What size booth do you need?</h3>
            <div className="mt-5 space-y-4 text-sm">
              <div>
                <div className="mb-2 font-mono text-[11px] uppercase tracking-wider text-steel-500">Step 1 · Vehicle types</div>
                <div className="flex flex-wrap gap-2">
                  {["Cars", "Trucks", "Commercial"].map((v, i) => (
                    <button key={v} className={`rounded-md border px-3 py-1.5 text-xs font-semibold ${i === 0 ? "border-us-navy-700 bg-us-navy-700 text-white" : "border-line-200 bg-white"}`}>{v}</button>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-2 font-mono text-[11px] uppercase tracking-wider text-steel-500">Step 2 · Cars per week</div>
                <input type="range" defaultValue={15} className="w-full accent-us-red-600" />
                <div className="font-mono text-xs text-asphalt-900">≈ 15 vehicles / week</div>
              </div>
              <div className="rounded-md border border-line-200 bg-white p-4">
                <div className="font-mono text-[11px] uppercase tracking-wider text-steel-500">Recommended</div>
                <div className="mt-1 font-display text-lg font-bold">CHAMP CDB-2680 Downdraft</div>
                <div className="font-mono text-xs text-steel-500">26' × 14' × 9' · 12,000 CFM</div>
              </div>
              <a href="#" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-us-red-600 px-4 py-2.5 font-display text-sm font-semibold uppercase tracking-wide text-white hover:bg-us-red-700">
                Get a custom quote <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TASK FLOWS */}
      <section className="border-b border-line-200">
        <div className="container-x py-16 md:py-20">
          <p className="eyebrow text-us-red-600">Task-Based Shopping</p>
          <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight md:text-5xl">
            We bundled the SKUs by the job.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TASK_FLOWS.map((t) => (
              <article key={t.title} className="group flex flex-col overflow-hidden rounded-md border border-line-200 bg-white">
                <div className="aspect-[16/10] overflow-hidden bg-paper-100">
                  <img src={t.img} alt={t.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="eyebrow text-us-navy-700">{t.eyebrow}</p>
                  <h3 className="mt-2 font-display text-xl font-bold uppercase leading-tight">{t.title}</h3>
                  <p className="mt-2 text-sm text-steel-500">{t.dek}</p>
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-asphalt-900">{t.kit}</p>
                  <a href="#" className="mt-6 inline-flex items-center gap-2 self-start rounded-md bg-us-red-600 px-4 py-2.5 font-display text-sm font-semibold uppercase tracking-wide text-white hover:bg-us-red-700">
                    {t.cta} <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="border-b border-line-200 bg-paper-100">
        <div className="container-x py-16 md:py-20">
          <p className="eyebrow text-us-red-600">Let's Switch Gears</p>
          <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight md:text-5xl">
            Tips, demos, and deals from 60 years on the floor.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {CONTENT.map((c) => (
              <a key={c.title} href="#" className="group flex flex-col overflow-hidden rounded-md border border-line-200 bg-white">
                <div className="flex aspect-[16/9] items-center justify-center bg-asphalt-900 text-bone-50">
                  <c.icon className="h-12 w-12 opacity-80" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-us-red-600">{c.tag}</p>
                  <h3 className="mt-2 font-display text-lg font-bold uppercase leading-tight">{c.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-steel-500">{c.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-us-navy-700 group-hover:text-us-red-600">
                    {c.cta} <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* HERITAGE */}
      <section className="border-b border-line-200">
        <div className="relative">
          <div className="container-x grid gap-10 py-16 md:py-20 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-md">
              <img src={heritage} alt="US Auto Supply warehouse" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="eyebrow text-us-red-600">Since 1965</p>
              <h2 className="mt-2 font-display text-3xl font-bold uppercase leading-tight tracking-tight md:text-5xl">
                Six decades of supplying the trade.
              </h2>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-wider text-steel-500">
                <span>60+ Years</span><span>·</span>
                <span>39,000+ Products</span><span>·</span>
                <span>4 Specialty Brands</span><span>·</span>
                <span>Countless Shops Supplied</span>
              </div>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-asphalt-800">
                <p>
                  We started in 1965 supplying body shops in the Midwest with paint, abrasives, and the workflow tools that keep a service counter running. Sixty years later, we serve thousands of professional shops across North America — independent body, MSO, dealership service, mechanical repair, detail, and fleet.
                </p>
                <p>
                  The job hasn't changed: ship the right product, on time, at the right price, with people who answer the phone when something goes sideways.
                </p>
              </div>
              <a href="#" className="mt-6 inline-flex items-center gap-2 font-semibold text-us-red-600 hover:text-us-red-700">
                Read our story <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG REQUEST */}
      <section className="border-b border-line-200 bg-paper-100">
        <div className="container-x py-16 md:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow text-us-red-600">Printed Catalogs · Free to Professional Shops</p>
              <h2 className="mt-2 font-display text-3xl font-bold uppercase leading-tight tracking-tight md:text-4xl">
                Three current catalogs. On your shop counter in a week.
              </h2>
              <p className="mt-3 max-w-md text-sm text-steel-500">Or browse the digital catalog →</p>
              <div className="mt-6 flex gap-4">
                {["Main Catalog", "Paint & Refinishing", "Tools & Equipment"].map((c) => (
                  <div key={c} className="flex h-44 w-32 flex-col items-center justify-end rounded-sm border border-asphalt-900 bg-gradient-to-br from-us-navy-700 to-us-navy-900 p-3 text-center text-bone-50">
                    <div className="h-1 w-10 bg-us-red-600" />
                    <div className="mt-2 font-display text-[11px] font-bold uppercase leading-tight">{c}</div>
                    <div className="mt-1 font-mono text-[9px] text-steel-300">2026 Edition</div>
                  </div>
                ))}
              </div>
            </div>
            <form className="space-y-3 rounded-md border border-line-200 bg-white p-6">
              {[
                ["Shop name", "ABC Auto Body"],
                ["Your role", "Owner / Manager / Painter"],
                ["Shipping address", "123 Main St, City, State, ZIP"],
                ["Email", "you@shop.com"],
              ].map(([l, p]) => (
                <label key={l} className="block">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-steel-500">{l}</span>
                  <input className="mt-1 w-full rounded-md border border-line-200 bg-bone-50 px-3 py-2.5 text-sm outline-none focus:border-us-red-600" placeholder={p} />
                </label>
              ))}
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-steel-500">Catalogs to send</span>
                <div className="mt-1 flex flex-wrap gap-2">
                  {["Main", "Paint", "Tools"].map((c) => (
                    <label key={c} className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-line-200 bg-bone-50 px-3 py-2 text-xs">
                      <input type="checkbox" className="accent-us-red-600" defaultChecked /> {c}
                    </label>
                  ))}
                </div>
              </div>
              <button className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-us-red-600 px-5 py-3 font-display text-sm font-semibold uppercase tracking-wide text-white hover:bg-us-red-700">
                Request catalogs <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-asphalt-800 text-bone-50">
        <div className="container-x py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow text-us-red-500">Stay Connected</p>
              <h2 className="mt-2 font-display text-3xl font-bold uppercase leading-tight tracking-tight md:text-5xl">
                Take us for a spin. New products, shop tips, and 10% off your first order.
              </h2>
              <p className="mt-4 max-w-md text-sm text-steel-300">
                We tag alerts by your interest — Tools, Paint, or Workflow — so your inbox doesn't read like a catalog.
              </p>
            </div>
            <form className="space-y-3 rounded-md border border-asphalt-700 bg-asphalt-900 p-6">
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-wider text-steel-300">Email</span>
                <input className="mt-1 w-full rounded-md border border-asphalt-700 bg-asphalt-800 px-3 py-2.5 text-sm text-bone-50 outline-none focus:border-us-red-500" placeholder="you@shop.com" />
              </label>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-steel-300">Your role</span>
                <div className="mt-1 flex flex-wrap gap-2">
                  {["Owner", "Manager", "Painter", "Mechanic", "Parts"].map((r, i) => (
                    <button type="button" key={r} className={`rounded-md border px-3 py-1.5 text-xs font-semibold ${i === 0 ? "border-us-red-500 bg-us-red-600 text-white" : "border-asphalt-700 bg-asphalt-800 text-steel-300 hover:text-bone-50"}`}>
                      {r}
                    </button>
                  ))}
                </div>
              </div>
              <button className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-us-red-600 px-5 py-3 font-display text-sm font-semibold uppercase tracking-wide text-white hover:bg-us-red-700">
                Subscribe <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-[11px] text-steel-300">We don't share your address. Unsubscribe anytime.</p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
