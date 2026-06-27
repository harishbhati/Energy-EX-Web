import Link from 'next/link';
import { Flame } from 'lucide-react';

export default function HeroGasProcurement() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[440px] bg-navy">
      {/* Left */}
      <div className="flex flex-col justify-center px-6 py-16 lg:px-14 relative">
        <div className="hidden lg:block absolute right-0 top-[10%] bottom-[10%] w-px bg-white/10" />

        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] font-medium text-white/35 mb-[22px] flex-wrap">
          <Link href="/" className="hover:text-brand-orange-soft transition-colors duration-200">Home</Link>
          <span className="text-white/20">›</span>
          <Link href="/our-services" className="hover:text-brand-orange-soft transition-colors duration-200">Energy Services</Link>
          <span className="text-white/20">›</span>
          <span className="text-white/60">Gas Procurement</span>
        </nav>

        <p className="text-[11px] font-bold text-brand-orange-soft uppercase tracking-[2.5px] mb-4">
          Gas Procurement
        </p>
        <h1 className="font-serif-num text-[40px] lg:text-[52px] font-semibold text-white leading-[1.06] tracking-[-1px] mb-[18px]">
          Independent gas buying,{' '}
          <em className="text-brand-orange-soft italic">built around you.</em>
        </h1>
        <p className="text-[16px] text-white/55 leading-[1.75] font-light max-w-[480px] mb-8">
          We help UK businesses secure competitive gas contracts.{' '}
          <strong className="text-white/90 font-semibold">We work for you — not the supplier</strong>
          {' '}— with ongoing support for the life of the contract.
        </p>
        <Link
          href="/contact-us"
          className="inline-flex items-center gap-2 bg-brand-orange text-white px-[30px] py-[14px] rounded-rs text-[15px] font-semibold w-fit shadow-[0_8px_28px_rgba(232,98,10,0.4)] transition-all duration-200 hover:opacity-90"
        >
          Get a Free Quote →
        </Link>
      </div>

      {/* Right — flame illustration */}
      <div className="hidden lg:flex relative overflow-hidden bg-[linear-gradient(160deg,#1b2f44,#0D1B2A)] items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center opacity-90">
          <svg
            className="w-[46%] max-w-[340px]"
            viewBox="0 0 200 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M100 10C100 10 40 70 40 140C40 185 70 215 100 215C130 215 160 185 160 140C160 70 100 10 100 10Z" fill="#F47B25" opacity="0.18" />
            <path d="M100 50C100 50 60 95 60 145C60 175 78 198 100 198C122 198 140 175 140 145C140 95 100 50 100 50Z" fill="#E8620A" opacity="0.35" />
            <path d="M100 90C100 90 82 118 82 148C82 165 90 180 100 180C110 180 118 165 118 148C118 118 100 90 100 90Z" fill="#FFB066" opacity="0.7" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-navy/60" />

        {/* Badge */}
        <div className="absolute bottom-7 left-7 bg-white rounded-r flex items-center gap-[14px] py-4 px-5 shadow-sh2 z-[2]">
          <div className="w-11 h-11 rounded-xl bg-orange-tint flex items-center justify-center flex-shrink-0">
            <Flame size={22} className="text-brand-orange" />
          </div>
          <div>
            <h4 className="text-[14px] font-bold text-ink mb-[1px]">Whole-market access</h4>
            <p className="text-[12px] text-muted">Not tied to any single supplier</p>
          </div>
        </div>
      </div>
    </section>
  );
}
