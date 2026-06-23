'use client';

import { Users, RefreshCw, Sparkles, ShieldCheck } from 'lucide-react';

const navItems = [
  { href: '#approach', label: 'How We Help', Icon: Users },
  { href: '#process', label: 'How It Works', Icon: RefreshCw },
  { href: '#categories', label: 'Cleaning Services', Icon: Sparkles },
  { href: '#why', label: 'Why Energyex', Icon: ShieldCheck },
];

export default function CleaningQuickNavBar() {
  return (
    <nav
      aria-label="Page sections"
      className="sticky top-[74px] z-[100] bg-navy-2 border-b border-white/[0.09] px-6 lg:px-14 overflow-x-auto"
    >
      <ul className="flex items-center gap-[4px] max-w-[1180px] mx-auto w-max lg:w-auto min-w-full justify-center">
        {navItems.map(({ href, label, Icon }) => (
          <li key={href}>
            <a
              href={href}
              className="group flex items-center gap-[7px] px-[14px] py-[13px] text-[12.5px] font-semibold text-white/55 whitespace-nowrap transition-all duration-[220ms] rounded-[6px] hover:bg-gradient-to-br hover:from-brand-orange hover:to-brand-orange-soft hover:text-white hover:shadow-[0_8px_24px_rgba(232,98,10,0.4)] hover:-translate-y-[2px] hover:border-transparent"
            >
              <Icon size={13} className="flex-shrink-0 opacity-70 group-hover:opacity-100" />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
