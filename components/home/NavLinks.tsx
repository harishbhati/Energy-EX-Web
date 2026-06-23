'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type DropdownItem = { icon: string; label: string; description: string; href: string };
type NavLink = { label: string; href: string; active?: boolean; dropdown?: DropdownItem[] };

export default function NavLinks({ navLinks }: { navLinks: NavLink[] }) {
  const pathname = usePathname();

  return (
    <ul className="hidden md:flex items-center gap-[38px] list-none justify-self-center">
      {navLinks.map((link) => {
        /* Determine active state */
        const isActive = link.dropdown
          ? pathname === link.href || link.dropdown.some((item) => pathname === item.href)
          : pathname === link.href;

        if (link.dropdown) {
          return (
            <li key={link.href} className="group relative">
              <Link
                href={link.href}
                className={`relative flex items-center gap-1 text-[15px] font-semibold tracking-[-0.1px] transition-colors duration-200 py-1 ${
                  isActive
                    ? 'text-brand-orange'
                    : 'text-[color:var(--ink-soft)] hover:text-[color:var(--ink)]'
                }`}
              >
                {link.label}
                <span className="text-[11px] text-muted">▾</span>
                {/* Underline indicator */}
                <span
                  className={`absolute left-0 bottom-[-2px] h-[2px] bg-brand-orange transition-all duration-[250ms] ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>

              {/* Dropdown panel */}
              <div className="pt-2 absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block z-[300]">
                <div className="w-[300px] bg-white rounded-[8px] shadow-sh2 border border-border-color p-[14px]">
                  {link.dropdown.map((item) => {
                    const isItemActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex gap-[14px] items-start p-3 rounded-[6px] transition-colors duration-200 no-underline ${
                          isItemActive ? 'bg-orange-tint' : 'hover:bg-off'
                        }`}
                      >
                        <span
                          className={`w-[38px] h-[38px] rounded-[8px] flex items-center justify-center text-[18px] flex-shrink-0 ${
                            isItemActive ? 'bg-brand-orange/[0.2]' : 'bg-orange-tint'
                          }`}
                        >
                          {item.icon}
                        </span>
                        <span className="flex flex-col">
                          <span
                            className={`text-sm font-bold mb-0.5 ${
                              isItemActive ? 'text-brand-orange' : 'text-ink'
                            }`}
                          >
                            {item.label}
                          </span>
                          <span className="text-xs text-muted font-light leading-[1.4]">
                            {item.description}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </li>
          );
        }

        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`group relative text-[15px] font-semibold tracking-[-0.1px] transition-colors duration-200 py-1 ${
                isActive
                  ? 'text-brand-orange'
                  : 'text-[color:var(--ink-soft)] hover:text-[color:var(--ink)]'
              }`}
            >
              {link.label}
              <span
                className={`absolute left-0 bottom-[-2px] h-[2px] bg-brand-orange transition-all duration-[250ms] ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
