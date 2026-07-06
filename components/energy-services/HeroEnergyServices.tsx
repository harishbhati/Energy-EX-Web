'use client';

import Link from 'next/link';
import { Layers } from 'lucide-react';
import { useQuoteModal } from '@/contexts/QuoteModalContext';

export default function HeroEnergyServices() {
  const { openModal } = useQuoteModal();
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[440px] bg-navy">
      {/* Left */}
      <div className="flex flex-col justify-center px-6 py-14 lg:px-14 relative bg-navy">
        <div className="hidden lg:block absolute right-0 top-[10%] bottom-[10%] w-px bg-white/10" />

        <nav className="flex items-center gap-2 text-[12px] text-white/35 font-medium mb-[22px]">
          <Link href="/" className="hover:text-brand-orange-soft transition-colors">Home</Link>
          <span className="text-white/20">›</span>
          <span className="text-white/60">Energy Services</span>
        </nav>

        <p className="text-[11px] font-bold text-brand-orange-soft uppercase tracking-[2.5px] mb-4">
          What we do
        </p>

        <h1 className="font-serif-num text-[38px] lg:text-[52px] font-semibold text-white leading-[1.06] tracking-[-1px] mb-[18px]">
          Lower energy bills,{' '}
          <em className="text-brand-orange-soft italic">zero hassle.</em>
        </h1>

        <p className="text-[16px] text-white/55 leading-[1.75] font-light max-w-[480px] mb-8">
          Independent UK energy broker — we compare 20+ suppliers, negotiate your contract, and
          manage everything from procurement to renewal,{' '}
          <strong className="text-white/88 font-semibold">at no cost to your business.</strong>
        </p>

        <button
          onClick={openModal}
          className="cursor-pointer inline-flex items-center gap-2 bg-brand-orange text-white px-[30px] py-[14px] rounded-rs text-[15px] font-semibold shadow-[0_8px_28px_rgba(232,98,10,0.4)] hover:bg-[#CC5208] transition-all duration-[250ms] w-fit"
        >
          Get a Free Quote →
        </button>
      </div>

      {/* Right — SVG illustration (desktop only) */}
      <div className="hidden lg:flex items-center justify-center relative overflow-hidden bg-[linear-gradient(160deg,#1b2f44,#0D1B2A)]">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-navy/60" />

        {/* Radial glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[320px] h-[320px] rounded-full bg-brand-orange/8 blur-[80px]" />
        </div>

        <svg
          className="w-[60%] max-w-[380px] relative z-[1]"
          viewBox="0 0 300 300"
          fill="none"
          aria-hidden="true"
        >
          {/* Background rings */}
          <circle cx="150" cy="150" r="135" stroke="#F47B25" strokeWidth="0.5" opacity="0.10" />
          <circle cx="150" cy="150" r="105" stroke="#F47B25" strokeWidth="0.6" opacity="0.16" />
          <circle cx="150" cy="150" r="70"  stroke="#F47B25" strokeWidth="0.8" opacity="0.24" />

          {/* Spoke lines from inner ring to orbit nodes (diagonal 45°) */}
          {/* Top-right: (150+49.5, 150-49.5) = (199,100) → (150+74, 150-74) = (224, 76) */}
          <line x1="200" y1="100" x2="224" y2="76"  stroke="#F47B25" strokeWidth="0.9" opacity="0.28" />
          {/* Bottom-right: (200, 200) → (224, 224) */}
          <line x1="200" y1="200" x2="224" y2="224" stroke="#F47B25" strokeWidth="0.9" opacity="0.28" />
          {/* Bottom-left: (100, 200) → (76, 224) */}
          <line x1="100" y1="200" x2="76"  y2="224" stroke="#F47B25" strokeWidth="0.9" opacity="0.28" />
          {/* Top-left: (100, 100) → (76, 76) */}
          <line x1="100" y1="100" x2="76"  y2="76"  stroke="#F47B25" strokeWidth="0.9" opacity="0.28" />

          {/* Cardinal spokes to outer ring */}
          <line x1="150" y1="15"  x2="150" y2="45"  stroke="#F47B25" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
          <line x1="150" y1="255" x2="150" y2="285" stroke="#F47B25" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
          <line x1="15"  y1="150" x2="45"  y2="150" stroke="#F47B25" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
          <line x1="255" y1="150" x2="285" y2="150" stroke="#F47B25" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />

          {/* Orbit nodes on middle ring (45°, 135°, 225°, 315°) — r≈105 at diagonals */}
          {/* Top-right node  at (150+74, 150-74) = (224, 76) */}
          <circle cx="224" cy="76"  r="11" fill="#0D1B2A" stroke="#F47B25" strokeWidth="1.2" opacity="0.8" />
          <circle cx="224" cy="76"  r="5"  fill="#F47B25" opacity="0.7" />

          {/* Bottom-right node at (224, 224) */}
          <circle cx="224" cy="224" r="11" fill="#0D1B2A" stroke="#F47B25" strokeWidth="1.2" opacity="0.8" />
          <circle cx="224" cy="224" r="5"  fill="#F47B25" opacity="0.6" />

          {/* Bottom-left node at (76, 224) */}
          <circle cx="76"  cy="224" r="11" fill="#0D1B2A" stroke="#F47B25" strokeWidth="1.2" opacity="0.8" />
          <circle cx="76"  cy="224" r="5"  fill="#F47B25" opacity="0.55" />

          {/* Top-left node at (76, 76) */}
          <circle cx="76"  cy="76"  r="11" fill="#0D1B2A" stroke="#F47B25" strokeWidth="1.2" opacity="0.8" />
          <circle cx="76"  cy="76"  r="5"  fill="#F47B25" opacity="0.5" />

          {/* Inner glow halos */}
          <circle cx="150" cy="150" r="40" fill="#F47B25" opacity="0.06" />
          <circle cx="150" cy="150" r="24" fill="#F47B25" opacity="0.10" />

          {/* Central hub ring */}
          <circle cx="150" cy="150" r="32" fill="#0D1B2A" stroke="#F47B25" strokeWidth="1.2" opacity="0.5" />

          {/* Central lightning bolt (smaller, centred in hub) */}
          <path d="M155 128 L137 156 L149 156 L144 174 L163 146 L151 146 Z" fill="#F47B25" opacity="0.95" />
          <path d="M155 128 L137 156 L149 156 L144 174 L163 146 L151 146 Z" stroke="#F2A93B" strokeWidth="1" opacity="0.4" fill="none" />
        </svg>

        {/* Floating stat chips */}
        <div className="absolute top-[10%] right-[8%] bg-white rounded-[30px] px-4 py-[9px] shadow-sh2 inline-flex items-center gap-[7px] z-[3] text-[11.5px] font-bold text-navy whitespace-nowrap">
          <span className="w-[7px] h-[7px] rounded-full bg-[#0A8A5A] flex-shrink-0" />
          20+ suppliers
        </div>
        <div className="absolute bottom-[26%] left-[6%] bg-white rounded-[30px] px-4 py-[9px] shadow-sh2 inline-flex items-center gap-[7px] z-[3] text-[11.5px] font-bold text-navy whitespace-nowrap">
          <span className="w-[7px] h-[7px] rounded-full bg-brand-orange flex-shrink-0" />
          £0 upfront cost
        </div>

        {/* Bottom badge */}
        <div className="absolute bottom-7 left-7 bg-white rounded-[var(--r)] px-5 py-4 shadow-sh2 flex items-center gap-[14px] z-[2]">
          <div className="w-11 h-11 rounded-[12px] bg-orange-tint flex items-center justify-center flex-shrink-0">
            <Layers size={22} className="text-brand-orange" />
          </div>
          <div>
            <h4 className="text-[14px] font-bold text-ink mb-[1px]">All energy services, one broker</h4>
            <p className="text-[12px] text-muted font-normal">Electricity, gas, solar &amp; more</p>
          </div>
        </div>
      </div>
    </section>
  );
}
