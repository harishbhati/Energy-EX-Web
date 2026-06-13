'use client';

import { ShieldCheck, Banknote, Eye, BarChart3, ClipboardCheck, Layers, type LucideIcon } from 'lucide-react';

type Card = { Icon: LucideIcon; title: string; desc: string };

const cards: Card[] = [
  {
    Icon: ShieldCheck,
    title: 'Genuinely independent',
    desc: "We\'re not owned by, or tied to, any energy supplier. Our advice is always in your interest — not theirs.",
  },
  {
    Icon: Banknote,
    title: 'Free of charge to you',
    desc: 'Our fee comes from the supplier when you switch. You receive an independent, managed service at zero cost.',
  },
  {
    Icon: Eye,
    title: 'Complete transparency',
    desc: 'We show you exactly what we\'re being paid. No hidden commissions, no nasty surprises.',
  },
  {
    Icon: BarChart3,
    title: 'Whole-market access',
    desc: '30+ approved UK suppliers, compared every time. You always see the best rate available to your business.',
  },
  {
    Icon: ClipboardCheck,
    title: 'End-to-end management',
    desc: 'We handle the switch, manage billing queries, and track your renewal dates — so you never get rolled over.',
  },
  {
    Icon: Layers,
    title: 'One partner, multiple services',
    desc: 'Electricity, gas, water, solar, waste, and facility services — all managed from a single point of contact.',
  },
];

const bottomStats = [
  { val: '10,000+', label: 'Businesses helped' },
  { val: '£1.2m+', label: 'Annual savings secured' },
  { val: '4.9/5', label: 'Client satisfaction' },
];

export default function WhyChooseUs() {
  return (
    <section className="px-14 py-[88px]" style={{ background: 'var(--off)' }}>
      <div className="max-w-[1180px] mx-auto">
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
              Why choose us
            </span>
            <span
              className="block"
              style={{ width: '22px', height: '2px', background: 'var(--orange)' }}
            />
          </div>
          <h2
            className="font-serif-num mb-4"
            style={{
              fontSize: '46px',
              fontWeight: 600,
              color: 'var(--ink)',
              letterSpacing: '-1px',
              lineHeight: 1.1,
            }}
          >
            The Energyex difference
          </h2>
          <p
            className="mx-auto"
            style={{
              fontSize: '17px',
              color: 'var(--muted)',
              lineHeight: 1.7,
              maxWidth: '500px',
              fontWeight: 300,
            }}
          >
            Six reasons businesses keep coming back — and referring their peers.
          </p>
        </div>

        <div
          className="grid gap-6 items-start"
          style={{ gridTemplateColumns: '1fr 1fr' }}
        >
          {/* Left — 2×3 cards */}
          <div className="grid gap-[14px]" style={{ gridTemplateColumns: '1fr 1fr' }}>
            {cards.map((card) => (
              <div
                key={card.title}
                className="group relative bg-white rounded-[var(--r)] overflow-hidden transition-all duration-250 cursor-default"
                style={{
                  border: '1px solid var(--border)',
                  padding: '24px 22px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--orange)';
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(232,98,10,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Animated orange top bar — scale from left on group hover */}
                <div
                  className="absolute top-0 left-0 right-0 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
                  style={{ height: '3px', background: 'var(--orange)' }}
                />

                <div
                  className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-4"
                  style={{
                    background: 'var(--orange-tint)',
                    border: '1px solid rgba(232,98,10,0.15)',
                  }}
                >
                  <card.Icon size={18} style={{ color: 'var(--orange)' }} />
                </div>
                <h3
                  className="font-semibold mb-2"
                  style={{ fontSize: '14.5px', color: 'var(--ink)', lineHeight: 1.3 }}
                >
                  {card.title}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.65 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right — image + stats */}
          <div className="relative rounded-[var(--rl)] overflow-hidden" style={{ minHeight: '480px' }}>
            <img
              src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=800&q=80&fit=crop"
              alt="Team working on energy strategy"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'brightness(0.65)' }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, transparent 40%, rgba(13,27,42,0.95) 100%)',
              }}
            />
            {/* Stats at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <div
                className="grid gap-[1px]"
                style={{
                  gridTemplateColumns: 'repeat(3,1fr)',
                  background: 'rgba(255,255,255,0.08)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                }}
              >
                {bottomStats.map((s) => (
                  <div
                    key={s.label}
                    className="text-center"
                    style={{ padding: '20px 14px' }}
                  >
                    <div
                      className="font-serif-num"
                      style={{
                        fontSize: '28px',
                        fontWeight: 700,
                        color: '#fff',
                        letterSpacing: '-1px',
                        lineHeight: 1,
                      }}
                    >
                      {s.val}
                    </div>
                    <div
                      className="mt-1.5 font-medium"
                      style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
