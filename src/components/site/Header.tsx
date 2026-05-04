import { Link } from "@tanstack/react-router";
import { Phone, ChevronDown, Heart, User, ShoppingCart, ListPlus } from "lucide-react";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";

const NAV = [
  "Tools & Equipment",
  "Paint & Refinishing",
  "Repair",
  "Parts Handling",
  "Administration & Workflow",
  "Sales & Advertising",
  "Marketing",
  "Shop By Brand",
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line-200 bg-bone-50">
      {/* Utility bar */}
      <div className="bg-asphalt-900 text-bone-50">
        <div className="container-x flex h-9 items-center justify-between text-xs">
          <a href="tel:8004312323" className="flex items-center gap-2 hover:text-us-red-500">
            <Phone className="h-3.5 w-3.5" />
            <span className="font-mono">800-431-2323</span>
            <span className="hidden text-steel-300 sm:inline">· Mon–Fri 7AM–6PM CT</span>
          </a>
          <div className="flex items-center gap-5">
            <button className="hidden items-center gap-1 hover:text-us-red-500 md:flex">
              Shop the Network <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <a className="hidden hover:text-us-red-500 md:inline" href="#">Track Order</a>
            <a className="hover:text-us-red-500" href="#">Sign In</a>
          </div>
        </div>
      </div>

      {/* Main row */}
      <div className="container-x flex items-center gap-6 py-4">
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>
        <div className="hidden flex-1 lg:block">
          <SearchBar />
        </div>
        <div className="ml-auto flex items-center gap-1 text-sm">
          <button className="hidden items-center gap-2 rounded-md border border-line-200 px-3 py-2 font-medium text-asphalt-900 transition hover:border-us-navy-700 hover:text-us-navy-700 lg:flex">
            <ListPlus className="h-4 w-4" /> Quick Order
          </button>
          <button className="flex items-center gap-1 rounded-md p-2 text-asphalt-900 hover:text-us-red-600">
            <Heart className="h-5 w-5" />
          </button>
          <button className="flex items-center gap-2 rounded-md p-2 text-asphalt-900 hover:text-us-red-600">
            <User className="h-5 w-5" />
            <span className="hidden text-xs xl:inline">My Account</span>
          </button>
          <button className="flex items-center gap-2 rounded-md bg-asphalt-900 px-3 py-2 text-bone-50 hover:bg-us-navy-700">
            <ShoppingCart className="h-5 w-5" />
            <span className="font-mono text-xs">0 · $0.00</span>
          </button>
        </div>
      </div>

      {/* Mobile search */}
      <div className="container-x pb-3 lg:hidden">
        <SearchBar />
      </div>

      {/* Megamenu nav */}
      <nav className="border-t border-line-200 bg-paper-200">
        <div className="container-x flex h-12 items-center gap-1 overflow-x-auto text-[13px] font-medium text-asphalt-900">
          {NAV.map((item) => (
            <button
              key={item}
              className="flex shrink-0 items-center gap-1 px-3 py-2 uppercase tracking-wide hover:text-us-red-600"
            >
              {item} <ChevronDown className="h-3 w-3" />
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
