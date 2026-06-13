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
            <span
              className="block flex-shrink-0"
              style={{ width: '22px', height: '2px', background: 'var(--orange)' }}
            />
            <span
              className="font-bold uppercase tracking-[2px]"
              style={{ fontSize: '11px', color: 'var(--orange)' }}
            >
              Who we are
            </span>
          </div>

          <h2
            className="font-serif-num mb-[22px]"
            style={{
              fontSize: '46px',
              fontWeight: 600,
              color: 'var(--ink)',
              letterSpacing: '-1px',
              lineHeight: 1.1,
            }}
          >
            Not a price comparison site.{' '}
            <em className="italic" style={{ color: 'var(--orange)' }}>
              A partner.
            </em>
          </h2>

          <p className="mb-4" style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.75 }}>
            Energyex is an independent UK energy brokerage, founded in 2021 and built on 13 years
            of sector experience. We help businesses of all sizes — from single-site SMEs to
            multi-property portfolios — cut their energy bills and remove the hassle of managing
            contracts.
          </p>
          <p className="mb-4" style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.75 }}>
            We&apos;re not tied to any supplier, which means our advice is always independent. Our
            revenue comes from the supplier when you switch — so you pay nothing for our service,
            ever.
          </p>
          <p
            className="mb-[40px]"
            style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.75 }}
          >
            We work with 30+ approved UK energy suppliers, comparing real quotes and presenting only
            the best options for your specific business. Then we handle everything — from switching
            to billing queries to renewals.
          </p>

          {/* Highlight cards */}
          <div className="flex flex-col gap-[12px]">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="group flex items-start gap-4 rounded-[var(--r)] px-5 py-[18px] cursor-default transition-all duration-200 bg-white hover:-translate-y-0.5"
                style={{
                  border: '1px solid var(--border)',
                  boxShadow: '0 2px 8px rgba(13,27,42,0.04)',
                }}
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
                  className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:[background:var(--orange)]"
                  style={{ background: 'var(--orange-tint)' }}
                >
                  <h.Icon size={18} className="group-hover:text-white" style={{ color: 'var(--orange)' }} />
                </div>
                <div>
                  <h4
                    className="font-semibold mb-[3px]"
                    style={{ fontSize: '14.5px', color: 'var(--ink)' }}
                  >
                    {h.title}
                  </h4>
                  <p style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.6 }}>
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
            className="absolute z-[3] rounded-[var(--r)] text-center"
            style={{
              top: '-18px',
              left: '-18px',
              background: 'var(--navy)',
              padding: '18px 24px',
              boxShadow: '0 8px 32px rgba(13,27,42,0.28)',
            }}
          >
            <div
              className="font-serif-num"
              style={{
                fontSize: '34px',
                fontWeight: 700,
                color: 'var(--orange-soft)',
                lineHeight: 1,
                letterSpacing: '-1px',
              }}
            >
              13+
            </div>
            <div
              className="font-semibold uppercase mt-1"
              style={{ fontSize: '10px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.8px' }}
            >
              Years expertise
            </div>
          </div>

          <div
            className="rounded-[var(--rl)] overflow-hidden"
            style={{ height: '520px', boxShadow: '0 16px 48px rgba(13,27,42,0.12)' }}
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
