'use client';
import { useState } from 'react';
import { Lightbulb, Map, DollarSign, BatteryCharging, Users, LucideIcon } from 'lucide-react';

const navItems: { id: string; Icon: LucideIcon; label: string }[] = [
  { id: 'why', Icon: Lightbulb, label: 'Why Solar' },
  { id: 'process', Icon: Map, label: 'Our Process' },
  { id: 'funding', Icon: DollarSign, label: 'Funding Options' },
  { id: 'battery', Icon: BatteryCharging, label: 'Battery Storage' },
  { id: 'sectors', Icon: Users, label: 'Who We Help' },
];

export default function SolarQuickNavBar() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <nav
      aria-label="Solar procurement sections"
      className="sticky top-[74px] z-[100] bg-navy-2 border-b border-white/[0.07] px-6 lg:px-14 py-6"
    >
      <div className="max-w-[1180px] mx-auto flex items-center gap-[10px] justify-center flex-wrap">
        {navItems.map(({ id, Icon, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
            className={`inline-flex items-center gap-[10px] px-[22px] py-[13px] rounded-[40px] border-[1.5px] text-[14.5px] font-bold transition-all duration-[250ms] whitespace-nowrap ${
              hovered === id
                ? 'bg-gradient-to-br from-brand-orange to-brand-orange-soft text-white border-transparent shadow-[0_8px_24px_rgba(232,98,10,0.4)] -translate-y-[2px]'
                : 'bg-white/[0.04] text-white/55 border-white/10'
            }`}
          >
            <span
              className={`w-7 h-7 rounded-[8px] flex items-center justify-center flex-shrink-0 transition-colors duration-[250ms] relative z-[1] ${
                hovered === id ? 'bg-white/[0.18]' : 'bg-white/[0.08]'
              }`}
            >
              <Icon size={15} />
            </span>
            <span className="relative z-[1]">{label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
