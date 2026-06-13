'use client';

import { Eye, BadgeCheck, Zap, Info, type LucideIcon } from 'lucide-react';

type Value = { Icon: LucideIcon; title: string; desc: string };

const values: Value[] = [
  {
    Icon: Eye,
    title: 'Transparency',
    desc: 'Every quote includes a clear breakdown of what we earn. You\'ll never wonder if a recommendation is in your interest or ours — we show you both.',
  },
  {
    Icon: BadgeCheck,
    title: 'Independence',
    desc: 'We have no ownership ties to any energy supplier. Our 30+ supplier panel is chosen on the basis of rates, reliability and service — not relationships.',
  },
  {
    Icon: Zap,
    title: 'Expertise',
    desc: '13 years in the energy sector means we\'ve seen the market in every state — rising prices, crises, regulatory shifts. We use that experience to protect your business.',
  },
];

export default function ValuesSection() {
  return (
    <section
      className="px-14 py-[88px] relative overflow-hidden"
      style={{ background: 'var(--navy)' }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-300px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle,rgba(232,98,10,0.07),transparent 65%)',
        }}
      />

      <div className="max-w-[1180px] mx-auto relative">
        {/* Header */}
        <div className="text-center mb-[52px]">
          <div className="flex items-center justify-center gap-[10px] mb-[18px]">
            <span
              className="block"
              style={{ width: '22px', height: '2px', background: 'var(--orange)' }}
            />
            <span
              className="font-bold uppercase tracking-[2px]"
              style={{ fontSize: '11px', color: 'var(--orange)' }}
            >
              Our values
            </span>
            <span
              className="block"
              style={{ width: '22px', height: '2px', background: 'var(--orange)' }}
            />
          </div>
          <h2
            className="font-serif-num text-white mb-4"
            style={{
              fontSize: '46px',
              fontWeight: 600,
              letterSpacing: '-1px',
              lineHeight: 1.1,
            }}
          >
            What we stand for
          </h2>
          <p
            className="mx-auto"
            style={{
              fontSize: '17px',
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.7,
              maxWidth: '500px',
              fontWeight: 300,
            }}
          >
            Three principles that guide every decision, every quote, and every client relationship.
          </p>
        </div>

        {/* Value cards */}
        <div className="grid gap-5 mb-8" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-[var(--r)] transition-all duration-250 cursor-default"
              style={{
                border: '1.5px solid rgba(255,255,255,0.1)',
                borderLeft: '3px solid var(--orange-soft)',
                padding: '30px 26px',
                background: 'rgba(255,255,255,0.03)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(232,98,10,0.06)';
                e.currentTarget.style.borderColor = 'rgba(232,98,10,0.45)';
                e.currentTarget.style.borderLeft = '3px solid var(--orange)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.borderLeft = '3px solid var(--orange-soft)';
              }}
            >
              <div
                className="w-[44px] h-[44px] rounded-[12px] flex items-center justify-center mb-5"
                style={{
                  background: 'rgba(232,98,10,0.15)',
                  border: '1px solid rgba(232,98,10,0.3)',
                }}
              >
                <v.Icon size={20} style={{ color: 'var(--orange-soft)' }} />
              </div>
              <h3
                className="font-semibold mb-[10px]"
                style={{ fontSize: '18px', color: '#fff', lineHeight: 1.2 }}
              >
                {v.title}
              </h3>
              <p
                style={{
                  fontSize: '14.5px',
                  color: 'rgba(255,255,255,0.48)',
                  lineHeight: 1.75,
                  fontWeight: 300,
                }}
              >
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Disclosure box */}
        <div
          className="rounded-[var(--r)] flex items-start gap-4"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '20px 24px',
          }}
        >
          <Info size={16} style={{ color: 'rgba(255,255,255,0.3)', flexShrink: 0, marginTop: '2px' }} />
          <p
            style={{ fontSize: '13px', color: 'rgba(255,255,255,0.32)', lineHeight: 1.65 }}
          >
            <strong style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>How we get paid: </strong>
            Energyex earns a commission from the energy supplier when you complete a switch through us.
            This commission is built into the rate and is disclosed in full before you approve any contract.
            You pay nothing directly to Energyex — ever.
          </p>
        </div>
      </div>
    </section>
  );
}
