'use client';

import { Eye, BadgeCheck, Zap, Info, type LucideIcon } from 'lucide-react';

type Value = { Icon: LucideIcon; title: string; desc: string };

const values: Value[] = [
  {
    Icon: Eye,
    title: 'Transparency',
    desc: "Every quote includes a clear breakdown of what we earn. You'll never wonder if a recommendation is in your interest or ours — we show you both.",
  },
  {
    Icon: BadgeCheck,
    title: 'Independence',
    desc: "We have no ownership ties to any energy supplier. Our 30+ supplier panel is chosen on the basis of rates, reliability and service — not relationships.",
  },
  {
    Icon: Zap,
    title: 'Expertise',
    desc: "13 years in the energy sector means we've seen the market in every state — rising prices, crises, regulatory shifts. We use that experience to protect your business.",
  },
];

export default function ValuesSection() {
  return (
    <section className="px-6 md:px-14 py-12 md:py-[88px] relative overflow-hidden bg-navy">
      {/* Subtle radial glow */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: '-300px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle,rgba(232,98,10,0.07),transparent 65%)',
        }}
      />

      <div className="max-w-[1180px] mx-auto relative">
        {/* Header */}
        <div className="text-center mb-10 md:mb-[52px]">
          <div className="flex items-center justify-center gap-[10px] mb-[18px]">
            <span className="block w-[22px] h-[2px] bg-brand-orange" />
            <span className="font-bold uppercase tracking-[2px] text-[11px] text-brand-orange">
              Our values
            </span>
            <span className="block w-[22px] h-[2px] bg-brand-orange" />
          </div>
          <h2 className="font-serif-num text-white mb-4 text-[28px] sm:text-[36px] md:text-[46px] font-semibold tracking-[-1px] leading-[1.1]">
            What we stand for
          </h2>
          <p className="mx-auto text-[15px] md:text-[17px] text-white/45 leading-[1.7] max-w-[500px] font-light">
            Three principles that guide every decision, every quote, and every client relationship.
          </p>
        </div>

        {/* Value cards */}
        <div className="grid gap-5 mb-8 grid-cols-1 md:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-[var(--r)] transition-all duration-250 cursor-default"
              style={{
                border: '1.5px solid rgba(255,255,255,0.1)',
                borderLeft: '3px solid var(--orange-soft)',
                padding: '28px 22px',
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
                <v.Icon size={20} className="text-brand-orange-soft" />
              </div>
              <h3 className="font-semibold mb-[10px] text-[17px] md:text-[18px] text-white leading-[1.2]">
                {v.title}
              </h3>
              <p className="text-[14px] md:text-[14.5px] text-white/[0.48] leading-[1.75] font-light">
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
            padding: '18px 20px',
          }}
        >
          <Info size={16} className="text-white/30 flex-shrink-0 mt-[2px]" />
          <p className="text-[13px] text-white/[0.32] leading-[1.65]">
            <strong className="text-white/50 font-semibold">How we get paid: </strong>
            Energyex earns a commission from the energy supplier when you complete a switch through
            us. This commission is built into the rate and is disclosed in full before you approve
            any contract. You pay nothing directly to Energyex — ever.
          </p>
        </div>
      </div>
    </section>
  );
}
