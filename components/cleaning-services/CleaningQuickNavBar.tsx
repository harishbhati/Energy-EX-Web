'use client';

import { useState } from 'react';
import { Users, RefreshCw, Sparkles, ShieldCheck, LucideIcon } from 'lucide-react';

const navItems: { id: string; Icon: LucideIcon; label: string }[] = [
  { id: 'approach', Icon: Users, label: 'How We Help' },
  { id: 'process', Icon: RefreshCw, label: 'How It Works' },
  { id: 'categories', Icon: Sparkles, label: 'Cleaning Services' },
  { id: 'why', Icon: ShieldCheck, label: 'Why Energyex' },
];

export default function CleaningQuickNavBar() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <nav
      aria-label="Cleaning services sections"
      className="sticky top-[74px] z-[100] bg-navy-2 border-b border-white/[0.07] px-4 lg:px-14 py-3 lg:py-6"
    >
      <div className="max-w-[1180px] mx-auto overflow-x-auto scrollbar-none -mx-1 px-1">
        <div className="flex items-center gap-[8px] lg:gap-[10px] lg:justify-center min-w-max lg:min-w-0">
          {navItems.map(({ id, Icon, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              className={`inline-flex items-center gap-[7px] lg:gap-[10px] px-[14px] py-[9px] lg:px-[22px] lg:py-[13px] rounded-[40px] border-[1.5px] text-[12px] lg:text-[14.5px] font-bold transition-all duration-[250ms] whitespace-nowrap ${
                hovered === id
                  ? 'bg-gradient-to-br from-brand-orange to-brand-orange-soft text-white border-transparent shadow-[0_8px_24px_rgba(232,98,10,0.4)]'
                  : 'bg-white/[0.04] text-white/55 border-white/10'
              }`}
            >
              <span
                className={`w-5 h-5 lg:w-7 lg:h-7 rounded-[6px] lg:rounded-[8px] flex items-center justify-center flex-shrink-0 transition-colors duration-[250ms] relative z-[1] ${
                  hovered === id ? 'bg-white/[0.18]' : 'bg-white/[0.08]'
                }`}
              >
                <Icon size={11} className="lg:hidden" />
                <Icon size={15} className="hidden lg:block" />
              </span>
              <span className="relative z-[1]">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
