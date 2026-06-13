import Link from "next/link";

type NavLink = { label: string; href: string; active?: boolean };

export default function Navbar({ navLinks }: { navLinks: NavLink[] }) {
  return (
    <nav
      className="sticky top-0 z-[200] grid grid-cols-[1fr_auto_1fr] items-center px-14 border-b border-[color:var(--border)]"
      style={{ height: '74px', background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(20px)' }}
    >
      <Link
        href="/"
        className="justify-self-start text-[25px] font-black tracking-[-1px] text-[color:var(--ink)]"
      >
        Energy<em className="text-[color:var(--orange)] not-italic">ex</em>
      </Link>

      <ul className="hidden md:flex items-center gap-[38px] list-none justify-self-center">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={`/${link.href}`}
              className="group relative text-[15px] font-semibold tracking-[-0.1px] text-[color:var(--ink-soft)] hover:text-[color:var(--ink)] transition-colors duration-200 py-1"
            >
              {link.label}
              <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-[color:var(--orange)] transition-all duration-[250ms] group-hover:w-full" />
            </Link>
          </li>
        ))}
      </ul>

      <div className="justify-self-end">
        <Link
          href="/quote"
          className="text-white text-[14.5px] font-semibold px-6 py-[11px] rounded-[var(--rs)] hover:bg-[color:var(--orange-deep)] hover:-translate-y-px transition-all duration-200 inline-block"
          style={{ background: 'var(--orange)', boxShadow: '0 4px 16px rgba(232,98,10,0.28)' }}
        >
          Get a Free Quote
        </Link>
      </div>
    </nav>
  );
}
