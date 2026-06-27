import Link from 'next/link';
import { Sun } from 'lucide-react';

export default function HeroSolarProcurement() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[440px] bg-navy">
      {/* Left */}
      <div className="flex flex-col justify-center px-6 py-16 lg:px-14 relative bg-navy">
        <div className="hidden lg:block absolute right-0 top-[10%] bottom-[10%] w-[1px] bg-white/10" />

        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] text-white/35 font-medium mb-[22px]">
          <Link href="/" className="hover:text-brand-orange-soft transition-colors">Home</Link>
          <span className="text-white/20">›</span>
          <Link href="/our-services" className="hover:text-brand-orange-soft transition-colors">Energy Services</Link>
          <span className="text-white/20">›</span>
          <span className="text-white/60">Solar Procurement</span>
        </nav>

        <p className="text-[11px] font-bold text-brand-orange-soft uppercase tracking-[2.5px] mb-4">
          Solar Procurement
        </p>

        <h1 className="font-serif-num text-[40px] lg:text-[52px] font-semibold text-white leading-[1.06] tracking-[-1px] mb-[18px]">
          Independent solar advice,{' '}
          <em className="text-brand-orange-soft italic">built around your site.</em>
        </h1>

        <p className="text-[16px] text-white/55 leading-[1.75] font-light max-w-[480px] mb-8">
          We help UK businesses evaluate, procure, and implement commercial solar.{' '}
          <strong className="text-white/88 font-semibold">Not tied to any installer or funder</strong>{' '}
          — just the solution that fits your roof, budget, and goals.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-brand-orange text-white px-[30px] py-[14px] rounded-rs text-[15px] font-semibold shadow-[0_8px_28px_rgba(232,98,10,0.4)] hover:bg-[#CC5208] transition-all duration-[250ms] w-fit"
        >
          Get a Free Quote →
        </Link>
      </div>

      {/* Right – solar SVG illustration */}
      <div className="hidden lg:flex items-center justify-center relative overflow-hidden bg-[linear-gradient(160deg,#1b2f44,#0D1B2A)]">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-navy/60" />

        <svg
          className="w-[58%] max-w-[380px] relative z-[1]"
          viewBox="0 0 300 280"
          fill="none"
          aria-hidden="true"
        >
          {/* Sun glow rings */}
          <circle cx="150" cy="88" r="54" fill="#F2A93B" opacity="0.10" />
          <circle cx="150" cy="88" r="36" fill="#F2A93B" opacity="0.20" />
          <circle cx="150" cy="88" r="22" fill="#F2A93B" opacity="0.52" />
          {/* Sun rays */}
          <line x1="150" y1="38" x2="150" y2="26" stroke="#F2A93B" strokeWidth="3" strokeLinecap="round" opacity="0.45"/>
          <line x1="150" y1="138" x2="150" y2="150" stroke="#F2A93B" strokeWidth="3" strokeLinecap="round" opacity="0.45"/>
          <line x1="100" y1="88" x2="88" y2="88" stroke="#F2A93B" strokeWidth="3" strokeLinecap="round" opacity="0.45"/>
          <line x1="200" y1="88" x2="212" y2="88" stroke="#F2A93B" strokeWidth="3" strokeLinecap="round" opacity="0.45"/>
          <line x1="114" y1="52" x2="106" y2="44" stroke="#F2A93B" strokeWidth="3" strokeLinecap="round" opacity="0.35"/>
          <line x1="186" y1="52" x2="194" y2="44" stroke="#F2A93B" strokeWidth="3" strokeLinecap="round" opacity="0.35"/>
          <line x1="114" y1="124" x2="106" y2="132" stroke="#F2A93B" strokeWidth="3" strokeLinecap="round" opacity="0.35"/>
          <line x1="186" y1="124" x2="194" y2="132" stroke="#F2A93B" strokeWidth="3" strokeLinecap="round" opacity="0.35"/>
          {/* Panel backing */}
          <rect x="36" y="162" width="228" height="90" rx="10" fill="#1E3A56" opacity="0.75"/>
          {/* Panel cells row 1 */}
          <rect x="44" y="170" width="48" height="34" rx="5" fill="#0D2A40" stroke="#F2A93B" strokeWidth="0.8" opacity="0.65"/>
          <rect x="98" y="170" width="48" height="34" rx="5" fill="#0D2A40" stroke="#F2A93B" strokeWidth="0.8" opacity="0.65"/>
          <rect x="152" y="170" width="48" height="34" rx="5" fill="#0D2A40" stroke="#F2A93B" strokeWidth="0.8" opacity="0.65"/>
          <rect x="206" y="170" width="48" height="34" rx="5" fill="#0D2A40" stroke="#F2A93B" strokeWidth="0.8" opacity="0.65"/>
          {/* Panel cells row 2 */}
          <rect x="44" y="210" width="48" height="34" rx="5" fill="#0D2A40" stroke="#F2A93B" strokeWidth="0.8" opacity="0.65"/>
          <rect x="98" y="210" width="48" height="34" rx="5" fill="#0D2A40" stroke="#F2A93B" strokeWidth="0.8" opacity="0.65"/>
          <rect x="152" y="210" width="48" height="34" rx="5" fill="#0D2A40" stroke="#F2A93B" strokeWidth="0.8" opacity="0.65"/>
          <rect x="206" y="210" width="48" height="34" rx="5" fill="#0D2A40" stroke="#F2A93B" strokeWidth="0.8" opacity="0.65"/>
          {/* Cell cross lines row 1 */}
          <line x1="44" y1="187" x2="92" y2="187" stroke="#F2A93B" strokeWidth="0.5" opacity="0.35"/>
          <line x1="68" y1="170" x2="68" y2="204" stroke="#F2A93B" strokeWidth="0.5" opacity="0.35"/>
          <line x1="98" y1="187" x2="146" y2="187" stroke="#F2A93B" strokeWidth="0.5" opacity="0.35"/>
          <line x1="122" y1="170" x2="122" y2="204" stroke="#F2A93B" strokeWidth="0.5" opacity="0.35"/>
          <line x1="152" y1="187" x2="200" y2="187" stroke="#F2A93B" strokeWidth="0.5" opacity="0.35"/>
          <line x1="176" y1="170" x2="176" y2="204" stroke="#F2A93B" strokeWidth="0.5" opacity="0.35"/>
          <line x1="206" y1="187" x2="254" y2="187" stroke="#F2A93B" strokeWidth="0.5" opacity="0.35"/>
          <line x1="230" y1="170" x2="230" y2="204" stroke="#F2A93B" strokeWidth="0.5" opacity="0.35"/>
          {/* Cell cross lines row 2 */}
          <line x1="44" y1="227" x2="92" y2="227" stroke="#F2A93B" strokeWidth="0.5" opacity="0.35"/>
          <line x1="68" y1="210" x2="68" y2="244" stroke="#F2A93B" strokeWidth="0.5" opacity="0.35"/>
          <line x1="98" y1="227" x2="146" y2="227" stroke="#F2A93B" strokeWidth="0.5" opacity="0.35"/>
          <line x1="122" y1="210" x2="122" y2="244" stroke="#F2A93B" strokeWidth="0.5" opacity="0.35"/>
          <line x1="152" y1="227" x2="200" y2="227" stroke="#F2A93B" strokeWidth="0.5" opacity="0.35"/>
          <line x1="176" y1="210" x2="176" y2="244" stroke="#F2A93B" strokeWidth="0.5" opacity="0.35"/>
          <line x1="206" y1="227" x2="254" y2="227" stroke="#F2A93B" strokeWidth="0.5" opacity="0.35"/>
          <line x1="230" y1="210" x2="230" y2="244" stroke="#F2A93B" strokeWidth="0.5" opacity="0.35"/>
          {/* Mounting legs */}
          <line x1="80" y1="252" x2="60" y2="272" stroke="#1E3A56" strokeWidth="4" strokeLinecap="round" opacity="0.55"/>
          <line x1="220" y1="252" x2="240" y2="272" stroke="#1E3A56" strokeWidth="4" strokeLinecap="round" opacity="0.55"/>
        </svg>

        {/* Badge */}
        <div className="absolute bottom-7 left-7 bg-white rounded-r px-5 py-4 shadow-sh2 flex items-center gap-[14px] z-[2]">
          <div className="w-11 h-11 rounded-[12px] bg-[#FFF7E8] flex items-center justify-center flex-shrink-0">
            <Sun size={22} className="text-[#F2A93B]" />
          </div>
          <div>
            <h4 className="text-[14px] font-bold text-ink mb-[1px]">Whole-market access</h4>
            <p className="text-[12px] text-muted font-normal">Not tied to any single installer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
