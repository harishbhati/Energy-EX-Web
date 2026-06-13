'use client';

import { useRef, useState } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Energyex saved us a significant amount and stayed with us throughout the whole contract. Every issue handled before we even noticed it.",
    initials: 'JM',
    name: 'To be confirmed',
    role: 'Facilities Manager · NHS Trust',
  },
  {
    quote: "Managing utilities across our 12 properties was a nightmare. Now we have one contact and we're paying far less. Transformative.",
    initials: 'SR',
    name: 'To be confirmed',
    role: 'Property Developer · 12 sites',
  },
  {
    quote: "They took the time to understand our business before recommending anything. Genuine advice, not a sales pitch. We switched and saved.",
    initials: 'RL',
    name: 'To be confirmed',
    role: 'Operations Director · Retail',
  },
  {
    quote: "13 years and still the most straightforward broker we've worked with. The contract management alone is worth it — we never miss a renewal.",
    initials: 'MP',
    name: 'To be confirmed',
    role: 'Finance Director · Manufacturing',
  },
];

export default function TestimonialsSection() {
  const [cur, setCur] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const go = (n: number) => {
    const clamped = Math.max(0, Math.min(1, n));
    setCur(clamped);
    if (!trackRef.current) return;
    const cards = trackRef.current.querySelectorAll<HTMLDivElement>('.tcard-item');
    if (!cards[0]) return;
    const cardW = cards[0].offsetWidth + 20;
    const isDesktop = window.innerWidth > 900;
    const offset = clamped * cardW * (isDesktop ? 2 : 1);
    trackRef.current.style.transform = `translateX(-${offset}px)`;
  };

  return (
    <div className="px-14 py-10" style={{ background: '#FCFAF7' }}>
      <div className="max-w-[1180px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="text-[11px] font-bold uppercase tracking-[2.5px] mb-[14px] text-center"
            style={{ color: 'var(--orange)' }}
          >
            What our clients say
          </div>
          <h2
            className="font-serif-num mb-4"
            style={{
              fontSize: '44px',
              fontWeight: 700,
              color: 'var(--navy)',
              letterSpacing: '-0.5px',
              lineHeight: 1.12,
            }}
          >
            Loved by 10,000+ UK businesses
          </h2>
          <p
            className="mx-auto max-w-[560px]"
            style={{ fontSize: '17px', color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300 }}
          >
            Don&apos;t just take our word for it — here&apos;s what our clients say.
          </p>
        </div>

        {/* Track */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-5 transition-transform duration-500"
            style={{ transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)' }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="tcard-item bg-white rounded-[var(--r)] px-8 py-8 flex-shrink-0 transition-all duration-300 cursor-default"
                style={{
                  flex: '0 0 calc(33.333% - 14px)',
                  border: '1.5px solid var(--border)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'var(--orange)';
                  el.style.boxShadow = 'var(--sh)';
                  el.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'var(--border)';
                  el.style.boxShadow = 'none';
                  el.style.transform = 'translateY(0)';
                }}
              >
                <div className="flex items-center gap-[3px] mb-4" style={{ color: 'var(--orange)' }}>
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p
                  className="font-serif-num mb-[22px] italic"
                  style={{
                    fontSize: '18px',
                    color: 'var(--ink)',
                    lineHeight: 1.6,
                    fontWeight: 500,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div
                  className="mb-[18px]"
                  style={{ height: '1px', background: 'var(--border)' }}
                />
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-[14px] font-bold flex-shrink-0 font-serif-num"
                    style={{
                      background: 'var(--orange-tint)',
                      color: 'var(--orange-deep)',
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--ink)' }}>
                      {t.name}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--muted)' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={() => go(cur - 1)}
            className="w-11 h-11 rounded-full flex items-center justify-center text-[16px] cursor-pointer transition-all duration-200 hover:bg-[color:var(--orange)] hover:text-white"
            style={{
              background: '#fff',
              border: '1.5px solid var(--border-strong)',
              color: 'var(--ink)',
            }}
          >
            ←
          </button>
          <div className="flex gap-[7px]">
            {[0, 1].map((i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className="h-[7px] cursor-pointer transition-all duration-200"
                style={{
                  width: cur === i ? '22px' : '7px',
                  borderRadius: cur === i ? '4px' : '50%',
                  background: cur === i ? 'var(--orange)' : 'var(--border-strong)',
                  border: 'none',
                }}
              />
            ))}
          </div>
          <button
            onClick={() => go(cur + 1)}
            className="w-11 h-11 rounded-full flex items-center justify-center text-[16px] cursor-pointer transition-all duration-200 hover:bg-[color:var(--orange)] hover:text-white"
            style={{
              background: '#fff',
              border: '1.5px solid var(--border-strong)',
              color: 'var(--ink)',
            }}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
