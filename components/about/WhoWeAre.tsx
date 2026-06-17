'use client';

import { ClipboardCheck, UserCheck, TrendingUp, type LucideIcon } from 'lucide-react';

type Highlight = { Icon: LucideIcon; title: string; desc: string };

const highlights: Highlight[] = [
  {
    Icon: ClipboardCheck,
    title: 'No-nonsense advice',
    desc: 'We tell you exactly what you\'ll save, what you\'ll pay, and why we\'re recommending a specific deal.',
  },
  {
    Icon: UserCheck,
    title: 'A dedicated account manager',
    desc: 'You\'ll always have one person to call — no call centres, no waiting.',
  },
  {
    Icon: TrendingUp,
    title: 'Whole-life management',
    desc: 'We don\'t disappear after the switch. We track your contract and go back to market at the right moment.',
  },
];

export default function WhoWeAre() {
  return (
    <section className="px-14 py-[88px]">
      <div
        className="max-w-[1180px] mx-auto grid gap-[80px] items-center"
        style={{ gridTemplateColumns: '1fr 1fr' }}
      >
        {/* Left */}
        <div>
          {/* Eyebrow */}
          <div className="flex items-center gap-[10px] mb-[18px]">
            <span className="block flex-shrink-0 w-[22px] h-[2px] bg-brand-orange" />
            <span className="font-bold uppercase tracking-[2px] text-[11px] text-brand-orange">
              Who we are
            </span>
          </div>

          <h2
            className="font-serif-num mb-[22px] text-[46px] font-semibold text-ink tracking-[-1px] leading-[1.1]"
          >
            Not a price comparison site.{' '}
            <em className="italic text-brand-orange">
              A partner.
            </em>
          </h2>

          <p className="mb-4 text-base text-muted leading-[1.75]">
            Energyex is an independent UK energy brokerage, founded in 2021 and built on 13 years
            of sector experience. We help businesses of all sizes — from single-site SMEs to
            multi-property portfolios — cut their energy bills and remove the hassle of managing
            contracts.
          </p>
          <p className="mb-4 text-base text-muted leading-[1.75]">
            We&apos;re not tied to any supplier, which means our advice is always independent. Our
            revenue comes from the supplier when you switch — so you pay nothing for our service,
            ever.
          </p>
          <p className="mb-[40px] text-base text-muted leading-[1.75]">
            We work with 30+ approved UK energy suppliers, comparing real quotes and presenting only
            the best options for your specific business. Then we handle everything — from switching
            to billing queries to renewals.
          </p>

          {/* Highlight cards */}
          <div className="flex flex-col gap-[12px]">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="group flex items-start gap-4 rounded-[var(--r)] px-5 py-[18px] cursor-default transition-all duration-200 bg-white hover:-translate-y-0.5 border border-[color:var(--border)] shadow-[0_2px_8px_rgba(13,27,42,0.04)]"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--orange)';
                  e.currentTarget.style.boxShadow = '0 4px 18px rgba(232,98,10,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(13,27,42,0.04)';
                }}
              >
                <div
                  className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:[background:var(--orange)] bg-orange-tint"
                >
                  <h.Icon size={18} className="group-hover:text-white text-brand-orange" />
                </div>
                <div>
                  <h4 className="font-semibold mb-[3px] text-[14.5px] text-ink">
                    {h.title}
                  </h4>
                  <p className="text-[13.5px] text-muted leading-[1.6]">
                    {h.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image */}
        <div className="relative">
          {/* Badge */}
          <div
            className="absolute z-[3] rounded-[var(--r)] text-center bg-navy shadow-[0_8px_32px_rgba(13,27,42,0.28)]"
            style={{
              top: '-18px',
              left: '-18px',
              padding: '18px 24px',
            }}
          >
            <div
              className="font-serif-num text-[34px] font-bold text-brand-orange-soft leading-none tracking-[-1px]"
            >
              13+
            </div>
            <div className="font-semibold uppercase mt-1 text-[10px] text-white/45 tracking-[0.8px]">
              Years expertise
            </div>
          </div>

          <div
            className="rounded-[var(--rl)] overflow-hidden h-[520px] shadow-[0_16px_48px_rgba(13,27,42,0.12)]"
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&fit=crop"
              alt="Business energy consultation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
