'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Zap, Flame, Sun, Plug, LucideIcon } from 'lucide-react';

const links: { label: string; Icon: LucideIcon; href: string }[] = [
  { label: 'Electricity', Icon: Zap, href: '#electricity' },
  { label: 'Gas', Icon: Flame, href: '#gas' },
  { label: 'Solar', Icon: Sun, href: '#solar' },
  { label: 'New Connections', Icon: Plug, href: '#new-connections' },
];

export default function QuickNavBar() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="sticky top-[74px] z-[100] bg-navy-2 border-b border-white/[0.07] py-3 lg:py-6 px-4 lg:px-14">
      <div className="max-w-[1180px] mx-auto overflow-x-auto scrollbar-none -mx-1 px-1">
        <div className="flex items-center gap-[8px] lg:gap-[10px] lg:justify-center min-w-max lg:min-w-0">
          {links.map(({ label, Icon, href }) => (
            <Link
              key={href}
              href={href}
              onMouseEnter={() => setHovered(href)}
              onMouseLeave={() => setHovered(null)}
              className={`inline-flex items-center gap-[7px] lg:gap-[10px] rounded-[40px] border-[1.5px] px-[14px] py-[9px] lg:px-6 lg:py-[13px] text-[12px] lg:text-[14.5px] font-bold transition-all duration-200 whitespace-nowrap ${
                hovered === href
                  ? 'bg-gradient-to-br from-brand-orange to-brand-orange-soft text-white border-transparent shadow-[0_8px_24px_rgba(232,98,10,0.4)]'
                  : 'bg-white/[0.04] text-white/55 border-white/10'
              }`}
            >
              <span
                className={`w-5 h-5 lg:w-7 lg:h-7 rounded-[6px] lg:rounded-[8px] flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                  hovered === href ? 'bg-white/[0.18]' : 'bg-white/[0.08]'
                }`}
              >
                <Icon size={11} className="lg:hidden" />
                <Icon size={14} className="hidden lg:block" />
              </span>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
