import Link from "next/link";
import NavQuoteButton from "@/components/common/NavQuoteButton";
import NavLinks from "@/components/home/NavLinks";
import MobileNav from "@/components/home/MobileNav";

type DropdownItem = { icon: string; label: string; description: string; href: string };
type NavLink = { label: string; href: string; active?: boolean; dropdown?: DropdownItem[] };

export default function Navbar({ navLinks }: { navLinks: NavLink[] }) {
  return (
    <nav className="sticky top-0 z-[200] flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] px-6 md:px-14 border-b border-[color:var(--border)] h-[74px] bg-white/[0.97] backdrop-blur-[20px]">
      <Link
        href="/"
        className="justify-self-start text-[25px] font-black tracking-[-1px] text-[color:var(--ink)]"
      >
        Energy<em className="text-[color:var(--orange)] not-italic">ex</em>
      </Link>

      <NavLinks navLinks={navLinks} />

      <div className="justify-self-end flex items-center">
        <div className="hidden md:block">
          <NavQuoteButton />
        </div>
        <MobileNav navLinks={navLinks} />
      </div>
    </nav>
  );
}
