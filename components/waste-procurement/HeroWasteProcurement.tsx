import Link from 'next/link';
import { ClipboardList, Building2 } from 'lucide-react';

const stats = [
  {
    Icon: ClipboardList,
    title: 'Contract Reviews',
    desc: 'Flagging oversized containers, excess weight allowances, and unused capacity.',
  },
  {
    Icon: Building2,
    title: 'Multi-Site Specialists',
    desc: 'Centralised waste management across property and operational portfolios.',
  },
];

export default function HeroWasteProcurement() {
  return (
    <section className="relative bg-navy overflow-hidden px-6 lg:px-14 py-[56px] lg:py-[72px] min-h-[440px] flex items-center">
      {/* Recycling arc SVG motif */}
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-[-110px] top-1/2 -translate-y-1/2 w-[480px] h-[480px] lg:w-[680px] lg:h-[680px]"
        >
          <circle cx="200" cy="200" r="170" stroke="#F47B25" strokeWidth="1.5" opacity="0.18" />
          <path d="M200 90 a110 110 0 1 1 -77.8 187.8" stroke="#F47B25" strokeWidth="1.5" opacity="0.35" fill="none" />
          <path d="M122.2 122.2 a110 110 0 0 1 155.6 0" stroke="#F47B25" strokeWidth="1.5" opacity="0.35" fill="none" />
          <circle cx="200" cy="90" r="6" fill="#F47B25" opacity="0.55" />
          <circle cx="122.2" cy="277.8" r="6" fill="#F47B25" opacity="0.55" />
          <circle cx="277.8" cy="277.8" r="6" fill="#F47B25" opacity="0.55" />
          <circle cx="200" cy="200" r="34" fill="#E8620A" opacity="0.32" />
        </svg>
      </div>

      <div className="max-w-[1180px] mx-auto w-full relative z-[1] grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-[40px] items-center">
        {/* Left */}
        <div>
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] text-white/35 font-medium mb-[22px]">
            <Link href="/" className="hover:text-brand-orange-soft transition-colors">Home</Link>
            <span className="text-white/20">›</span>
            <Link href="/our-services" className="hover:text-brand-orange-soft transition-colors">Facility Services</Link>
            <span className="text-white/20">›</span>
            <span className="text-white/70">Waste Procurement</span>
          </nav>

          <p className="text-[11px] font-bold text-brand-orange-soft uppercase tracking-[2.5px] mb-[16px]">
            Waste Procurement &amp; Management
          </p>

          <h1 className="font-serif-num text-[38px] lg:text-[50px] font-semibold text-white leading-[1.08] tracking-[-1px] mb-[18px]">
            Waste contracts that{' '}
            <em className="text-brand-orange-soft italic">actually fit your site.</em>
          </h1>

          <p className="text-[16px] text-white/55 leading-[1.75] font-light max-w-[520px] mb-[32px]">
            Independent waste procurement for UK businesses —{' '}
            <strong className="text-white/88 font-semibold">matched to how you actually operate</strong>, not
            a generic collection schedule, with support that continues long after the contract is signed.
          </p>

          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-brand-orange text-white px-[30px] py-[14px] rounded-rs text-[15px] font-semibold shadow-[0_8px_28px_rgba(232,98,10,0.4)] hover:bg-[#CC5208] hover:-translate-y-[2px] transition-all duration-[250ms] w-fit"
          >
            Get a Free Quote →
          </Link>
        </div>

        {/* Right — stat cards */}
        <div className="hidden lg:flex flex-col gap-[14px]">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-white/[0.06] border border-white/[0.14] rounded-r px-[20px] py-[18px] backdrop-blur-sm"
            >
              <div className="flex items-center gap-[10px] mb-[6px]">
                <div className="w-[32px] h-[32px] rounded-[9px] bg-[rgba(232,98,10,0.18)] flex items-center justify-center flex-shrink-0">
                  <stat.Icon size={15} className="text-brand-orange-soft" />
                </div>
                <h4 className="text-[13.5px] font-bold text-white">{stat.title}</h4>
              </div>
              <p className="text-[12px] text-white/50 leading-[1.55] font-light">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
