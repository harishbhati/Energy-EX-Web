import Link from "next/link";

type DropdownItem = { icon: string; label: string; description: string; href: string };
type NavLink = { label: string; href: string; active?: boolean; dropdown?: DropdownItem[] };

export default function Navbar({ navLinks }: { navLinks: NavLink[] }) {
  return (
    <nav
      className="sticky top-0 z-[200] grid grid-cols-[1fr_auto_1fr] items-center px-14 border-b border-[color:var(--border)] h-[74px] bg-white/[0.97] backdrop-blur-[20px]"
    >
      <Link
        href="/"
        className="justify-self-start text-[25px] font-black tracking-[-1px] text-[color:var(--ink)]"
      >
        Energy<em className="text-[color:var(--orange)] not-italic">ex</em>
      </Link>

      <ul className="hidden md:flex items-center gap-[38px] list-none justify-self-center">
        {navLinks.map((link) =>
          link.dropdown ? (
            <li key={link.href} className="group relative">
              <Link
                href={link.href}
                className="relative flex items-center gap-1 text-[15px] font-semibold tracking-[-0.1px] text-[color:var(--ink-soft)] hover:text-[color:var(--ink)] transition-colors duration-200 py-1"
              >
                {link.label}
                <span className="text-[11px] text-muted">▾</span>
                <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-[color:var(--orange)] transition-all duration-[250ms] group-hover:w-full" />
              </Link>

              {/* Spacer to bridge hover gap between link and panel */}
              <div className="pt-2 absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block z-[300]">
                <div className="w-[300px] bg-white rounded-[8px] shadow-sh2 border border-border-color p-[14px]">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex gap-[14px] items-start p-3 rounded-[6px] hover:bg-off transition-colors duration-200 no-underline"
                    >
                      <span className="w-[38px] h-[38px] rounded-[8px] bg-orange-tint flex items-center justify-center text-[18px] flex-shrink-0">
                        {item.icon}
                      </span>
                      <span className="flex flex-col">
                        <span className="text-sm font-bold text-ink mb-0.5">{item.label}</span>
                        <span className="text-xs text-muted font-light leading-[1.4]">{item.description}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </li>
          ) : (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative text-[15px] font-semibold tracking-[-0.1px] text-[color:var(--ink-soft)] hover:text-[color:var(--ink)] transition-colors duration-200 py-1"
              >
                {link.label}
                <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-[color:var(--orange)] transition-all duration-[250ms] group-hover:w-full" />
              </Link>
            </li>
          )
        )}
      </ul>

      <div className="justify-self-end">
        <Link
          href="/quote"
          className="text-white text-[14.5px] font-semibold px-6 py-[11px] rounded-[var(--rs)] hover:bg-[color:var(--orange-deep)] hover:-translate-y-px transition-all duration-200 inline-block bg-brand-orange shadow-[0_4px_16px_rgba(232,98,10,0.28)]"
        >
          Get a Free Quote
        </Link>
      </div>
    </nav>
  );
}
