import { DollarSign, House, Info, Phone } from "lucide-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

export const navItems = [
  { name: "About", href: "/about", icon: <Info size={18} /> },
  { name: "Pricing", href: "/pricing", icon: <DollarSign size={18} /> },
  { name: "Contact", href: "/contact", icon: <Phone size={18} /> },
];

export const Navbar = () => {
  return (
    <div className="w-full px-6 py-4">
      <nav className="w-full flex justify-between items-center px-6 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-sm">
        <Link
          className="flex gap-2 items-center text-sm font-medium text-zinc-300 hover:text-white transition"
          href="/"
        >
          <House size={18} />
          Home
        </Link>

        <div className="flex gap-2">
          {navItems.map(({ name, href }) => (
            <ActiveLink key={name} path={href} text={name} />
          ))}
        </div>
      </nav>
    </div>
  );
};
