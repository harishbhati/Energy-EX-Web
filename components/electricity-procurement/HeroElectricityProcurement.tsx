import Link from 'next/link';
import { Zap } from 'lucide-react';

export default function HeroElectricityProcurement() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[440px] bg-navy">
      {/* Left */}
      <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 md:px-14 md:py-16 relative">
        <div className="hidden md:block absolute right-0 top-[10%] bottom-[10%] w-px bg-white/10" />

        <nav
          className="flex items-center gap-2 text-[12px] font-medium mb-[22px] flex-wrap"
          style={{ color: 'rgba(255,255,255,0.35)' }}
        >
          <Link
            href="/"
            className="hover:text-brand-orange-soft transition-colors duration-200"
            style={{ color: 'inherit' }}
          >
            Home
          </Link>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>›</span>
          <Link
            href="/our-services"
            className="hover:text-brand-orange-soft transition-colors duration-200"
            style={{ color: 'inherit' }}
          >
            Energy Services
          </Link>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>›</span>
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>Electricity Procurement</span>
        </nav>

        <p className="text-[11px] font-bold uppercase tracking-[2.5px] mb-4" style={{ color: '#F47B25' }}>
          Electricity Procurement
        </p>
        <h1 className="font-serif-num text-[34px] sm:text-[44px] md:text-[52px] font-semibold text-white leading-[1.06] tracking-[-1px] mb-[18px]">
          Independent electricity buying,{' '}
          <em style={{ color: '#F47B25', fontStyle: 'italic' }}>built around you.</em>
        </h1>
        <p
          className="text-[15px] md:text-[16px] leading-[1.75] font-light max-w-[480px] mb-8"
          style={{ color: 'rgba(255,255,255,0.55)' }}
        >
          We help UK businesses secure competitive electricity contracts.{' '}
          <strong style={{ color: 'rgba(255,255,255,0.88)', fontWeight: 600 }}>
            We work for you — not the supplier
          </strong>{' '}
          — with ongoing support for the life of the contract.
        </p>
        <Link
          href="/contact-us"
          className="inline-flex items-center gap-2 text-white px-[30px] py-[14px] rounded-rs text-[15px] font-semibold w-fit transition-all duration-200 hover:opacity-90"
          style={{ background: '#E8620A', boxShadow: '0 8px 28px rgba(232,98,10,0.4)' }}
        >
          Get a Free Quote →
        </Link>
      </div>

      {/* Right — image */}
      <div className="relative overflow-hidden min-h-[260px] md:min-h-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.pexels.com/photos/4254165/pexels-photo-4254165.jpeg?auto=compress&cs=tinysrgb&w=900"
          alt="Electricity procurement"
          className="w-full h-full object-cover block"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(270deg, transparent 55%, rgba(13,27,42,0.6) 100%)' }}
        />
        <div
          className="absolute bottom-5 left-5 md:bottom-7 md:left-7 bg-white rounded-r flex items-center gap-[14px]"
          style={{ padding: '14px 18px', boxShadow: '0 16px 50px rgba(13,27,42,0.12)' }}
        >
          <div
            className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center flex-shrink-0"
            style={{ borderRadius: 12, background: '#FFF1E8' }}
          >
            <Zap size={20} className="text-brand-orange" />
          </div>
          <div>
            <h4 className="text-[13px] md:text-[14px] font-bold text-ink mb-[1px]">20+ suppliers compared</h4>
            <p className="text-[11px] md:text-[12px] text-muted">Independent, no supplier ties</p>
          </div>
        </div>
      </div>
    </div>
  );
}
