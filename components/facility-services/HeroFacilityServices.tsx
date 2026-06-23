import Link from 'next/link';
import { Building2 } from 'lucide-react';

export default function HeroFacilityServices() {
  return (
    <section
      className="grid bg-navy"
      style={{ gridTemplateColumns: '1fr 1fr', minHeight: '440px' }}
    >
      {/* Left — navy */}
      <div className="flex flex-col justify-center px-16 py-20">
        {/* Breadcrumb */}
        <p className="text-white/40 text-xs mb-6 tracking-wide">
          <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
          {' › '}
          <span className="text-white/60">Facility Services</span>
        </p>

        {/* Eyebrow */}
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-orange-soft mb-4">
          What we do
        </p>

        {/* Heading */}
        <h1 className="font-['Cormorant_Garamond'] text-[3rem] font-semibold text-white leading-[1.1] tracking-[-1px] mb-5">
          Your property,{' '}
          <em className="text-brand-orange-soft not-italic">fully managed.</em>
        </h1>

        {/* Subtitle */}
        <p className="text-white/65 text-[15.5px] leading-[1.7] mb-8 max-w-[440px]">
          Water, waste, property management and cleaning — one trusted partner for every
          site in your portfolio.{' '}
          <strong className="text-white/80 font-semibold">
            One point of contact, every facility need covered.
          </strong>
        </p>

        {/* CTA */}
        <Link
          href="/quote"
          className="inline-block self-start bg-brand-orange text-white text-[14.5px] font-semibold px-7 py-[13px] rounded-[var(--rs)] hover:bg-brand-orange-deep hover:-translate-y-px transition-all duration-200 shadow-[0_4px_20px_rgba(232,98,10,0.35)]"
        >
          Get a Free Quote →
        </Link>
      </div>

      {/* Right — image with overlay badge */}
      <div className="relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Facility services"
          className="w-full h-full object-cover absolute inset-0"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(13,27,42,0.55) 0%, rgba(13,27,42,0.15) 100%)' }}
        />
        {/* Badge */}
        <div className="absolute bottom-8 left-8 bg-white/[0.12] backdrop-blur-[14px] border border-white/20 rounded-[var(--rs)] px-5 py-4 text-white flex items-center gap-3">
          <span className="w-9 h-9 rounded-rs bg-orange-tint flex items-center justify-center flex-shrink-0">
            <Building2 size={18} className="text-brand-orange" />
          </span>
          <span className="text-[13.5px] font-semibold leading-snug">
            24-hour quote turnaround
            <br />
            <span className="font-normal text-white/70">10,000+ UK businesses trust us</span>
          </span>
        </div>
      </div>
    </section>
  );
}
