'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Lock, RefreshCw, Eye, Building2, BarChart3, LucideIcon } from 'lucide-react';

const links: { label: string; Icon: LucideIcon; href: string }[] = [
  { label: 'Fixed-Price', Icon: Lock, href: '#fixed' },
  { label: 'Flexible', Icon: RefreshCw, href: '#flexible' },
  { label: 'Pass-Through', Icon: Eye, href: '#passthrough' },
  { label: 'Multi-Site', Icon: Building2, href: '#multisite' },
  { label: 'Cost Analysis', Icon: BarChart3, href: '#analysis' },
];

function Pill({ label, Icon, href }: { label: string; Icon: LucideIcon; href: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`inline-flex items-center gap-[10px] rounded-[40px] border px-6 py-[13px] text-[14.5px] font-bold transition-all duration-200 hover:-translate-y-0.5 ${
        hovered
          ? 'bg-gradient-to-br from-brand-orange to-brand-orange-soft text-white border-transparent shadow-[0_8px_24px_rgba(232,98,10,0.4)]'
          : 'bg-white/[0.04] text-white/55 border-white/10'
      }`}
    >
      <span
        className={`w-7 h-7 rounded-[8px] flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
          hovered ? 'bg-white/[0.18]' : 'bg-white/[0.08]'
        }`}
      >
        <Icon size={14} />
      </span>
      {label}
    </Link>
  );
}

export default function GasQuickNavBar() {
  return (
    <nav
      aria-label="Gas procurement sections"
      className="sticky top-[74px] z-[100] bg-navy-2 border-b border-white/[0.07] py-6 px-6 lg:px-14"
    >
      <div className="max-w-[1180px] mx-auto flex items-center justify-center gap-[10px] flex-wrap">
        {links.map((l) => (
          <Pill key={l.href} {...l} />
        ))}
      </div>
    </nav>
  );
}
