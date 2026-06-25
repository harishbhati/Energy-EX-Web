import Link from 'next/link';
import { ShieldCheck, MapPin, Phone } from 'lucide-react';

const pills = [
  { Icon: ShieldCheck, label: 'Fully insured partners' },
  { Icon: MapPin, label: 'Multi-site coordination' },
  { Icon: Phone, label: 'One point of contact' },
];

export default function HeroCleaningServices() {
  return (
    <section className="relative bg-navy overflow-hidden px-6 lg:px-14 py-[84px] lg:py-[84px] pb-[64px] text-center">
      {/* Radial sparkle SVG — centered behind content */}
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <svg
          viewBox="0 0 760 760"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] max-w-none"
        >
          <circle cx="380" cy="380" r="130" stroke="#F47B25" strokeWidth="1" opacity="0.32" />
          <circle cx="380" cy="380" r="195" stroke="#F47B25" strokeWidth="1" opacity="0.22" />
          <circle cx="380" cy="380" r="260" stroke="#F47B25" strokeWidth="1" opacity="0.14" />
          <circle cx="380" cy="380" r="325" stroke="#F47B25" strokeWidth="1" opacity="0.08" />
        </svg>
      </div>

      <div className="relative z-[1] max-w-[760px] mx-auto">
        <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-[12px] text-white/35 font-medium mb-[24px]">
          <Link href="/" className="hover:text-brand-orange-soft transition-colors">Home</Link>
          <span className="text-white/20">›</span>
          <Link href="/our-services" className="hover:text-brand-orange-soft transition-colors">Facility Services</Link>
          <span className="text-white/20">›</span>
          <span className="text-white/70">Cleaning Services</span>
        </nav>

        <p className="text-[11px] font-bold text-brand-orange-soft uppercase tracking-[2.5px] mb-[18px]">
          Cleaning Services
        </p>

        <h1 className="font-serif-num text-[38px] lg:text-[52px] font-semibold text-white leading-[1.1] tracking-[-1px] mb-[20px]">
          Clean spaces,{' '}
          <em className="text-brand-orange-soft italic">managed for you.</em>
        </h1>

        <p className="text-[16px] text-white/55 leading-[1.75] font-light max-w-[560px] mx-auto mb-[34px]">
          From single offices to multi-site portfolios, Energyex coordinates{' '}
          <strong className="text-white/88 font-semibold">fully insured cleaning partners</strong>{' '}
          across nine specialist services — so you get one point of contact, not a list of contractors to chase.
        </p>

        <div className="flex items-center justify-center gap-[16px] flex-wrap mb-[38px]">
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-brand-orange text-white px-[30px] py-[14px] rounded-rs text-[15px] font-semibold shadow-[0_8px_28px_rgba(232,98,10,0.4)] hover:bg-[#CC5208] hover:-translate-y-[2px] transition-all duration-[250ms]"
          >
            Get a Free Quote →
          </Link>
          <a
            href="#categories"
            className="inline-flex items-center gap-2 text-white px-[26px] py-[14px] rounded-rs text-[14.5px] font-semibold border-[1.5px] border-white/25 hover:border-white/50 hover:bg-white/[0.06] transition-all duration-[250ms]"
          >
            See all services
          </a>
        </div>

        <div className="flex items-center justify-center gap-[12px] flex-wrap">
          {pills.map(({ Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-[9px] bg-white/[0.06] border border-white/[0.14] rounded-[40px] pl-[12px] pr-[18px] py-[10px] backdrop-blur-sm"
            >
              <div className="w-[26px] h-[26px] rounded-full bg-[rgba(232,98,10,0.22)] flex items-center justify-center flex-shrink-0">
                <Icon size={12} className="text-brand-orange-soft" />
              </div>
              <span className="text-[13px] font-semibold text-white/[0.78]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
