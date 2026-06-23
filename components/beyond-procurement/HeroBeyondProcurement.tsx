import Link from 'next/link';
import { BarChart2 } from 'lucide-react';

const chips = [
  { label: 'Bill validated', classes: 'top-[10%] left-[4%]' },
  { label: 'kVA within range', classes: 'bottom-[30%] left-0' },
  { label: 'SECR on track', classes: 'top-[14%] right-[2%]' },
  { label: 'Renewal flagged', classes: 'bottom-[10%] right-[6%]' },
];

export default function HeroBeyondProcurement() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] min-h-[400px] bg-navy relative overflow-hidden">
      {/* Left */}
      <div className="flex flex-col justify-center px-6 py-14 lg:px-14 relative bg-navy z-[2]">
        <div className="hidden lg:block absolute right-0 top-[10%] bottom-[10%] w-[1px] bg-white/10" />

        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] text-white/35 font-medium mb-[18px]">
          <Link href="/" className="hover:text-brand-orange-soft transition-colors">Home</Link>
          <span className="text-white/20">›</span>
          <Link href="/our-services" className="hover:text-brand-orange-soft transition-colors">Energy Services</Link>
          <span className="text-white/20">›</span>
          <span className="text-white/60">Beyond Procurement</span>
        </nav>

        <p className="text-[11px] font-bold text-brand-orange-soft uppercase tracking-[2.5px] mb-[14px]">
          Beyond Procurement
        </p>

        <h1 className="font-serif-num text-[38px] lg:text-[46px] font-semibold text-white leading-[1.08] tracking-[-1px] mb-4">
          The work that happens{' '}
          <em className="text-brand-orange-soft italic">after</em> the ink dries.
        </h1>

        <p className="text-[15.5px] text-white/55 leading-[1.7] font-light max-w-[480px] mb-[26px]">
          Getting your business a good rate is only half the job. We stay on once you&apos;re live —
          checking your bills, watching your capacity, and keeping your compliance paperwork in order.{' '}
          <strong className="text-white/88 font-semibold">
            This is where the savings we negotiate actually stick.
          </strong>
        </p>

        <div className="flex items-center gap-5 flex-wrap">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-orange text-white px-[28px] py-[13px] rounded-rs text-[14.5px] font-semibold shadow-[0_8px_28px_rgba(232,98,10,0.4)] hover:bg-[#CC5208] hover:-translate-y-[2px] transition-all duration-[250ms] w-fit"
          >
            Get a Free Bill Review →
          </Link>
          <span className="text-[12.5px] text-white/40 font-medium">
            No obligation · Results in 5 working days
          </span>
        </div>
      </div>

      {/* Right – animated orbit art */}
      <div className="hidden lg:flex items-center justify-center relative overflow-hidden bg-[linear-gradient(165deg,#13283C,#0D1B2A_70%)]">
        {/* Orange glow */}
        <div className="absolute inset-0 bg-brand-orange/10 blur-[60px] scale-75" />

        <div className="relative w-full h-full flex items-center justify-center">
          {/* Orbit rings */}
          <div className="absolute w-[280px] h-[280px] rounded-full border border-white/[0.09] animate-[spin_60s_linear_infinite]" />
          <div className="absolute w-[220px] h-[220px] rounded-full border border-white/[0.09] animate-[spin_40s_linear_infinite_reverse]" />

          {/* Core */}
          <div className="relative z-[2] w-[140px] h-[140px] rounded-[24px] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] border border-white/[0.16] flex items-center justify-center shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
            <BarChart2 size={48} className="text-brand-orange-soft" strokeWidth={1.5} />
          </div>

          {/* Status chips */}
          {chips.map((chip) => (
            <div
              key={chip.label}
              className={`absolute ${chip.classes} bg-white rounded-[30px] px-4 py-[10px] shadow-sh2 inline-flex items-center gap-2 z-[3] text-[11.5px] font-bold text-navy whitespace-nowrap`}
            >
              <span className="w-[7px] h-[7px] rounded-full bg-[#0A8A5A] flex-shrink-0" />
              {chip.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
