'use client';
import { useState } from 'react';
import Link from 'next/link';
import { RefreshCw, Building2, ShoppingBag, Clock, Gauge, LucideIcon } from 'lucide-react';

const links: { label: string; Icon: LucideIcon; href: string }[] = [
  { label: 'Flexible', Icon: RefreshCw, href: '#flexible' },
  { label: 'Corporate', Icon: Building2, href: '#corporate' },
  { label: 'SME', Icon: ShoppingBag, href: '#sme' },
  { label: 'Half-Hourly', Icon: Clock, href: '#hh' },
  { label: 'Capacity & Network', Icon: Gauge, href: '#capacity' },
];

function Pill({ label, Icon, href }: { label: string; Icon: LucideIcon; href: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="inline-flex items-center gap-[7px] lg:gap-[10px] rounded-[40px] border-[1.5px] border-white/10 px-[14px] py-[9px] lg:px-6 lg:py-[13px] text-[12px] lg:text-[14.5px] font-bold text-white/55 transition-all duration-200 hover:text-white hover:border-transparent hover:-translate-y-0.5 whitespace-nowrap"
      style={{
        background: hovered ? 'linear-gradient(135deg,#e8620a,#f47b25)' : 'rgba(255,255,255,0.04)',
      }}
    >
      <span className="w-5 h-5 lg:w-7 lg:h-7 rounded-[6px] lg:rounded-[8px] bg-white/[0.08] flex items-center justify-center flex-shrink-0">
        <Icon size={11} className="lg:hidden" />
        <Icon size={14} className="hidden lg:block" />
      </span>
      {label}
    </Link>
  );
}

export default function ElectricityQuickNavBar() {
  return (
    <div className="sticky top-[74px] z-[100] bg-navy-2 border-b border-white/[0.07] py-3 lg:py-6 px-4 lg:px-14">
      <div className="max-w-[1180px] mx-auto overflow-x-auto scrollbar-none -mx-1 px-1">
        <div className="flex items-center gap-[8px] lg:gap-[10px] lg:justify-center min-w-max lg:min-w-0">
          {links.map((l) => (
            <Pill key={l.href} {...l} />
          ))}
        </div>
      </div>
    </div>
  );
}
