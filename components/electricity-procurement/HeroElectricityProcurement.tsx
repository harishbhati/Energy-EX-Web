import Link from 'next/link';
import { Zap } from 'lucide-react';

export default function HeroElectricityProcurement() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[440px] bg-navy">
      {/* Left */}
      <div className="flex flex-col justify-center px-6 py-14 lg:px-14 relative bg-navy">
        <div className="hidden lg:block absolute right-0 top-[10%] bottom-[10%] w-px bg-white/10" />

        <nav className="flex items-center gap-2 text-[12px] text-white/35 font-medium mb-[22px]">
          <Link href="/" className="hover:text-brand-orange-soft transition-colors">Home</Link>
          <span className="text-white/20">›</span>
          <Link href="/our-services" className="hover:text-brand-orange-soft transition-colors">Energy Services</Link>
          <span className="text-white/20">›</span>
          <span className="text-white/60">Electricity Procurement</span>
        </nav>

        <p className="text-[11px] font-bold text-brand-orange-soft uppercase tracking-[2.5px] mb-4">
          Electricity Procurement
        </p>

        <h1 className="font-serif-num text-[38px] lg:text-[52px] font-semibold text-white leading-[1.06] tracking-[-1px] mb-[18px]">
          Independent electricity buying,{' '}
          <em className="text-brand-orange-soft italic">built around you.</em>
        </h1>

        <p className="text-[16px] text-white/55 leading-[1.75] font-light max-w-[480px] mb-8">
          We help UK businesses secure competitive electricity contracts.{' '}
          <strong className="text-white/88 font-semibold">We work for you — not the supplier</strong>{' '}
          — with ongoing support for the life of the contract.
        </p>

        <Link
          href="/contact-us"
          className="inline-flex items-center gap-2 bg-brand-orange text-white px-[30px] py-[14px] rounded-rs text-[15px] font-semibold shadow-[0_8px_28px_rgba(232,98,10,0.4)] hover:bg-[#CC5208] transition-all duration-[250ms] w-fit"
        >
          Get a Free Quote →
        </Link>
      </div>

      {/* Right — SVG illustration (desktop only) */}
      <div className="hidden lg:flex items-center justify-center relative overflow-hidden bg-[linear-gradient(160deg,#1b2f44,#0D1B2A)]">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-navy/60" />

        {/* Orange radial glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[300px] h-[300px] rounded-full bg-brand-orange/10 blur-[70px]" />
        </div>

        <svg
          className="w-[58%] max-w-[360px] relative z-[1]"
          viewBox="0 0 300 300"
          fill="none"
          aria-hidden="true"
        >
          {/* Concentric rings */}
          <circle cx="150" cy="150" r="135" stroke="#F47B25" strokeWidth="0.5" opacity="0.12" />
          <circle cx="150" cy="150" r="105" stroke="#F47B25" strokeWidth="0.6" opacity="0.18" />
          <circle cx="150" cy="150" r="75" strokeWidth="0.8" stroke="#F47B25" opacity="0.25" />

          {/* Cardinal spokes */}
          <line x1="150" y1="15" x2="150" y2="45" stroke="#F47B25" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
          <line x1="150" y1="255" x2="150" y2="285" stroke="#F47B25" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
          <line x1="15" y1="150" x2="45" y2="150" stroke="#F47B25" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
          <line x1="255" y1="150" x2="285" y2="150" stroke="#F47B25" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />

          {/* Diagonal spokes */}
          <line x1="54" y1="54" x2="72" y2="72" stroke="#F47B25" strokeWidth="1" strokeLinecap="round" opacity="0.18" />
          <line x1="246" y1="54" x2="228" y2="72" stroke="#F47B25" strokeWidth="1" strokeLinecap="round" opacity="0.18" />
          <line x1="54" y1="246" x2="72" y2="228" stroke="#F47B25" strokeWidth="1" strokeLinecap="round" opacity="0.18" />
          <line x1="246" y1="246" x2="228" y2="228" stroke="#F47B25" strokeWidth="1" strokeLinecap="round" opacity="0.18" />

          {/* Inner glow halos */}
          <circle cx="150" cy="150" r="42" fill="#F47B25" opacity="0.07" />
          <circle cx="150" cy="150" r="26" fill="#F47B25" opacity="0.11" />

          {/* Lightning bolt */}
          <path d="M168 38 L104 158 L148 158 L128 262 L204 132 L160 132 Z" fill="#F47B25" opacity="0.92" />
          {/* Bolt edge highlight */}
          <path d="M168 38 L104 158 L148 158 L128 262 L204 132 L160 132 Z" stroke="#F2A93B" strokeWidth="1.5" opacity="0.35" fill="none" />
        </svg>

        {/* Floating stat chips */}
        <div className="absolute top-[12%] left-[7%] bg-white rounded-[30px] px-4 py-[9px] shadow-sh2 inline-flex items-center gap-[7px] z-[3] text-[11.5px] font-bold text-navy whitespace-nowrap">
          <span className="w-[7px] h-[7px] rounded-full bg-[#0A8A5A] flex-shrink-0" />
          30+ suppliers
        </div>
        <div className="absolute bottom-[24%] right-[5%] bg-white rounded-[30px] px-4 py-[9px] shadow-sh2 inline-flex items-center gap-[7px] z-[3] text-[11.5px] font-bold text-navy whitespace-nowrap">
          <span className="w-[7px] h-[7px] rounded-full bg-brand-orange flex-shrink-0" />
          HH &amp; NHH meters
        </div>

        {/* Bottom badge */}
        <div className="absolute bottom-7 left-7 bg-white rounded-[var(--r)] px-5 py-4 shadow-sh2 flex items-center gap-[14px] z-[2]">
          <div className="w-11 h-11 rounded-[12px] bg-orange-tint flex items-center justify-center flex-shrink-0">
            <Zap size={22} className="text-brand-orange" />
          </div>
          <div>
            <h4 className="text-[14px] font-bold text-ink mb-[1px]">Independent electricity broker</h4>
            <p className="text-[12px] text-muted font-normal">Not tied to any supplier</p>
          </div>
        </div>
      </div>
    </div>
  );
}
