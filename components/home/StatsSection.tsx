'use client';

import { useEffect, useRef, useState } from 'react';

const animatedStats = [
  { num: 10000, suffix: '+', label: 'UK businesses served', useComma: true },
  { num: 25, suffix: '%', label: 'Average saving on existing contracts', useComma: false },
];

const staticStats = [
  { val: '100', suffix: '%', label: 'Independent — we work in your interest' },
  { val: '24', suffix: 'hr', label: 'To receive a fully researched quote' },
];

function hoverIn(e: React.MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  el.style.background = 'var(--navy)';
  el.querySelectorAll<HTMLElement>('.sv').forEach((n) => (n.style.color = '#fff'));
  el.querySelectorAll<HTMLElement>('.sl').forEach((n) => (n.style.color = 'rgba(255,255,255,0.55)'));
}

function hoverOut(e: React.MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  el.style.background = '';
  el.querySelectorAll<HTMLElement>('.sv').forEach((n) => (n.style.color = ''));
  el.querySelectorAll<HTMLElement>('.sl').forEach((n) => (n.style.color = ''));
}

export default function StatsSection() {
  const [counts, setCounts] = useState(animatedStats.map(() => 0));
  const animated = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          animatedStats.forEach((stat, i) => {
            const duration = 1600;
            const start = performance.now();
            const step = (ts: number) => {
              const p = Math.min((ts - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setCounts((prev) => {
                const next = [...prev];
                next[i] = Math.round(eased * stat.num);
                return next;
              });
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          });
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="px-14 py-10" ref={ref}>
      <div
        className="max-w-[1180px] mx-auto grid gap-[72px] items-center"
        style={{ gridTemplateColumns: '1fr 1fr' }}
      >
        {/* Left: text */}
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[2.5px] mb-[14px] text-brand-orange">
            Why Energyex
          </div>
          <h2
            className="font-serif-num mb-[18px] text-[40px] font-semibold text-ink tracking-[-0.5px] leading-[1.12]"
          >
            13 years of expertise. One promise.
          </h2>
          <p className="mb-7 max-w-[560px] text-base text-muted leading-[1.7] font-light">
            Founded in 2021 and led by 13 years of hands-on energy experience, we&apos;re
            independent, expert, and completely committed to your business — not to any supplier.
            When we say we&apos;ll find you the best deal and stay with you, we mean it.
          </p>
          <a
            href="/about-us"
            className="inline-flex items-center gap-[7px] font-semibold hover:gap-2 transition-all duration-200 text-sm text-brand-orange no-underline"
          >
            About Energyex →
          </a>
        </div>

        {/* Right: 2×2 stat grid */}
        <div
          className="grid rounded-[var(--rl)] overflow-hidden"
          style={{
            gridTemplateColumns: '1fr 1fr',
            border: '1.5px solid var(--border-strong)',
            boxShadow: '0 4px 24px rgba(13,27,42,0.08)',
          }}
        >
          {animatedStats.map((stat, i) => (
            <div
              key={stat.label}
              className="p-[34px] transition-all duration-[250ms] cursor-default"
              style={{
                borderRight: '1.5px solid var(--border-strong)',
                borderBottom: '1.5px solid var(--border-strong)',
              }}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              <div className="flex items-baseline gap-0.5 mb-2">
                <span
                  className="sv font-serif-num text-[50px] font-semibold text-brand-orange leading-none tracking-[-1px]"
                  style={{ transition: 'color 250ms' }}
                >
                  {stat.useComma ? counts[i].toLocaleString() : counts[i]}
                </span>
                <span
                  className="sv font-bold text-[22px] text-brand-orange"
                  style={{ transition: 'color 250ms' }}
                >
                  {stat.suffix}
                </span>
              </div>
              <div
                className="sl text-[13px] text-muted leading-[1.5]"
                style={{ transition: 'color 250ms' }}
              >
                {stat.label}
              </div>
            </div>
          ))}

          {staticStats.map((stat, i) => (
            <div
              key={stat.label}
              className="p-[34px] transition-all duration-[250ms] cursor-default"
              style={{
                borderRight: i === 0 ? '1.5px solid var(--border-strong)' : 'none',
                borderBottom: 'none',
              }}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              <div className="flex items-baseline gap-0.5 mb-2">
                <span
                  className="sv font-serif-num text-[50px] font-semibold text-brand-orange leading-none tracking-[-1px]"
                  style={{ transition: 'color 250ms' }}
                >
                  {stat.val}
                </span>
                <span
                  className="sv font-bold text-[22px] text-brand-orange"
                  style={{ transition: 'color 250ms' }}
                >
                  {stat.suffix}
                </span>
              </div>
              <div
                className="sl text-[13px] text-muted leading-[1.5]"
                style={{ transition: 'color 250ms' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
