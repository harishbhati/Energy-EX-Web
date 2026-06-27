import Link from 'next/link';
import { Search, Building2 } from 'lucide-react';

const stats = [
  {
    Icon: Search,
    title: 'Billing Validation',
    desc: 'Reviewing accounts for discrepancies and recovery opportunities most businesses never check.',
  },
  {
    Icon: Building2,
    title: 'Multi-Site Specialists',
    desc: 'Centralised water account management across property and operational portfolios.',
  },
];

export default function HeroWaterProcurement() {
  return (
    <section className="relative bg-navy overflow-hidden px-6 lg:px-14 py-[56px] lg:py-[72px] min-h-[440px] flex items-center">
      {/* Ripple SVG — positioned right */}
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-[-120px] top-1/2 -translate-y-1/2 w-[480px] h-[480px] lg:w-[680px] lg:h-[680px]"
        >
          <circle cx="200" cy="200" r="60" stroke="#F47B25" strokeWidth="1.5" opacity="0.5" />
          <circle cx="200" cy="200" r="105" stroke="#F47B25" strokeWidth="1.5" opacity="0.38" />
          <circle cx="200" cy="200" r="150" stroke="#F47B25" strokeWidth="1.5" opacity="0.26" />
          <circle cx="200" cy="200" r="195" stroke="#F47B25" strokeWidth="1.5" opacity="0.16" />
          <circle cx="200" cy="200" r="28" fill="#E8620A" opacity="0.3" />
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
            <span className="text-white/70">Water Procurement</span>
          </nav>

          <p className="text-[11px] font-bold text-brand-orange-soft uppercase tracking-[2.5px] mb-[16px]">
            Water Procurement &amp; Management
          </p>

          <h1 className="font-serif-num text-[38px] lg:text-[50px] font-semibold text-white leading-[1.08] tracking-[-1px] mb-[18px]">
            Independent water advice,{' '}
            <em className="text-brand-orange-soft italic">beyond the contract.</em>
          </h1>

          <p className="text-[16px] text-white/55 leading-[1.75] font-light max-w-[520px] mb-[32px]">
            We help UK businesses secure the right retailer arrangement —{' '}
            <strong className="text-white/88 font-semibold">and keep managing the account</strong> long after
            switching, from billing reviews to recovery claims.
          </p>

          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-brand-orange text-white px-[30px] py-[14px] rounded-rs text-[15px] font-semibold shadow-[0_8px_28px_rgba(232,98,10,0.4)] hover:bg-[#CC5208] transition-all duration-[250ms] w-fit"
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
