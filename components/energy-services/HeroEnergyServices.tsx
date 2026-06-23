import Image from 'next/image';
import Link from 'next/link';

export default function HeroEnergyServices() {
  return (
    <section className="grid grid-cols-2 min-h-[580px]">
      {/* Left — navy */}
      <div className="bg-navy flex flex-col justify-center px-16 py-20">
        {/* Breadcrumb */}
        <p className="text-white/40 text-xs mb-6 tracking-wide">
          <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
          {' › '}
          <span className="text-white/60">Energy Services</span>
        </p>

        {/* Eyebrow */}
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-orange-soft mb-4">
          What we do
        </p>

        {/* Heading */}
        <h1 className="font-['Cormorant_Garamond'] text-[3rem] font-semibold text-white leading-[1.1] tracking-[-1px] mb-5">
          Lower energy bills,{' '}
          <em className="text-brand-orange-soft not-italic">zero hassle.</em>
        </h1>

        {/* Subtitle */}
        <p className="text-white/65 text-[15.5px] leading-[1.7] mb-8 max-w-[440px]">
          Independent UK energy broker — we compare 20+ suppliers, negotiate
          your contract, and manage everything from procurement to renewal,
          at no cost to your business.
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
        <Image
          src="https://images.pexels.com/photos/4254165/pexels-photo-4254165.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Energy services"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(13,27,42,0.55) 0%, rgba(13,27,42,0.15) 100%)' }}
        />
        {/* Badge */}
        <div className="absolute bottom-8 left-8 bg-white/[0.12] backdrop-blur-[14px] border border-white/20 rounded-[var(--rs)] px-5 py-4 text-white">
          <span className="text-2xl mr-2">⚡</span>
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
