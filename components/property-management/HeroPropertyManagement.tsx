import Link from 'next/link';
import { Zap, Droplets, Wind, ClipboardList } from 'lucide-react';

const panelRows = [
  { Icon: Zap, label: 'Electricity & Gas', badge: 'Managed' },
  { Icon: Droplets, label: 'Water & Waste', badge: 'Managed' },
  { Icon: Wind, label: 'Cleaning & Facilities', badge: 'Managed' },
  { Icon: ClipboardList, label: 'Renewals tracked', badge: 'On schedule' },
];

export default function HeroPropertyManagement() {
  return (
    <section className="relative bg-navy overflow-hidden px-6 lg:px-14 py-[56px] lg:py-[72px] min-h-[460px] flex items-center">
      {/* Dot-grid SVG — right half only */}
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <svg
          viewBox="0 0 1180 460"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
        >
          <defs>
            <pattern id="pm-dots" width="34" height="34" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.6" fill="#F47B25" opacity="0.35" />
            </pattern>
          </defs>
          <rect x="640" y="0" width="540" height="460" fill="url(#pm-dots)" />
        </svg>
      </div>

      <div className="max-w-[1180px] mx-auto w-full relative z-[1] grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-[44px] items-center">
        {/* Left */}
        <div>
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] text-white/35 font-medium mb-[22px]">
            <Link href="/" className="hover:text-brand-orange-soft transition-colors">Home</Link>
            <span className="text-white/20">›</span>
            <Link href="/our-services" className="hover:text-brand-orange-soft transition-colors">Facility Services</Link>
            <span className="text-white/20">›</span>
            <span className="text-white/70">Property Management</span>
          </nav>

          <p className="text-[11px] font-bold text-brand-orange-soft uppercase tracking-[2.5px] mb-[16px]">
            Property &amp; Utility Management
          </p>

          <h1 className="font-serif-num text-[36px] lg:text-[48px] font-semibold text-white leading-[1.1] tracking-[-1px] mb-[18px]">
            Utility management for{' '}
            <em className="text-brand-orange-soft italic">property managers, not utility experts.</em>
          </h1>

          <p className="text-[16px] text-white/55 leading-[1.75] font-light max-w-[540px] mb-[32px]">
            Energyex centralises electricity, gas, water, waste, cleaning, and renewable energy into{' '}
            <strong className="text-white/88 font-semibold">one coordinated service</strong> — so your team
            manages properties, and we manage the utilities behind them.
          </p>

          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-brand-orange text-white px-[30px] py-[14px] rounded-rs text-[15px] font-semibold shadow-[0_8px_28px_rgba(232,98,10,0.4)] hover:bg-[#CC5208] hover:-translate-y-[2px] transition-all duration-[250ms] w-fit"
          >
            Get a Free Quote →
          </Link>
        </div>

        {/* Right — portfolio panel */}
        <div className="hidden lg:block bg-white/[0.06] border border-white/[0.14] rounded-r px-[22px] pt-[22px] pb-[18px] backdrop-blur-sm">
          <div className="flex items-center justify-between mb-[16px]">
            <h4 className="text-[13px] font-bold text-white">Portfolio overview</h4>
            <div className="w-[8px] h-[8px] rounded-full bg-brand-orange" />
          </div>
          {panelRows.map((row, i) => (
            <div
              key={row.label}
              className={`flex items-center justify-between py-[11px] ${
                i < panelRows.length - 1 ? 'border-b border-white/[0.08]' : ''
              }`}
            >
              <div className="flex items-center gap-[10px]">
                <div className="w-[28px] h-[28px] rounded-[8px] bg-[rgba(232,98,10,0.18)] flex items-center justify-center flex-shrink-0">
                  <row.Icon size={13} className="text-brand-orange-soft" />
                </div>
                <span className="text-[12.5px] font-semibold text-white/75">{row.label}</span>
              </div>
              <span className="text-[10.5px] font-bold text-brand-orange bg-orange-tint px-[9px] py-[3px] rounded-[30px] whitespace-nowrap">
                {row.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
