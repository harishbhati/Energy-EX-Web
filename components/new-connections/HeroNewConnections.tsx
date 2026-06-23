import Link from 'next/link';
import { Plug } from 'lucide-react';

export default function HeroNewConnections() {
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
          <span className="text-white/60">New Connections</span>
        </nav>

        <p className="text-[11px] font-bold text-brand-orange-soft uppercase tracking-[2.5px] mb-4">
          New Connections
        </p>

        <h1 className="font-serif-num text-[40px] lg:text-[52px] font-semibold text-white leading-[1.06] tracking-[-1px] mb-[18px]">
          New gas &amp; electricity supply,{' '}
          <em className="text-brand-orange-soft italic">handled start to finish.</em>
        </h1>

        <p className="text-[16px] text-white/55 leading-[1.75] font-light max-w-[480px] mb-8">
          Setting up a brand-new supply, or adding meters for a commercial landlord.{' '}
          <strong className="text-white/88 font-semibold">
            Our in-house team manages the application, the board, and the installation
          </strong>{' '}
          — so you don&apos;t have to.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-brand-orange text-white px-[30px] py-[14px] rounded-rs text-[15px] font-semibold shadow-[0_8px_28px_rgba(232,98,10,0.4)] hover:bg-[#CC5208] hover:-translate-y-[2px] transition-all duration-[250ms] w-fit"
        >
          Get a Free Quote →
        </Link>
      </div>

      {/* Right – bolt SVG illustration */}
      <div className="hidden lg:flex items-center justify-center relative overflow-hidden bg-[linear-gradient(160deg,#1b2f44,#0D1B2A)]">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-navy/60" />

        <svg
          className="w-[34%] max-w-[220px] relative z-[1]"
          viewBox="0 0 120 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M68 8L24 92h32l-12 60 56-92H68l12-52z" fill="#F47B25" opacity="0.92"/>
          <path d="M68 8L24 92h32l-12 60 56-92H68l12-52z" stroke="#E8620A" strokeWidth="2" opacity="0.5"/>
        </svg>

        {/* Badge */}
        <div className="absolute bottom-7 left-7 bg-white rounded-r px-5 py-4 shadow-sh2 flex items-center gap-[14px] z-[2]">
          <div className="w-11 h-11 rounded-[12px] bg-orange-tint flex items-center justify-center flex-shrink-0">
            <Plug size={22} className="text-brand-orange" />
          </div>
          <div>
            <h4 className="text-[14px] font-bold text-ink mb-[1px]">Trusted board relationships</h4>
            <p className="text-[12px] text-muted font-normal">Faster approvals, fewer delays</p>
          </div>
        </div>
      </div>
    </section>
  );
}
