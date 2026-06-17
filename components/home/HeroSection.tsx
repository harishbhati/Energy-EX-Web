'use client';

import { useEffect, useRef, useState } from 'react';

type HeroStat = { num: number; suffix: string; label: string; useComma?: boolean };

type HeroProps = {
  eyebrow: string;
  titlePart1: string;
  titlePart2: string;
  subtitleStart: string;
  subtitleBold: string;
  subtitleEnd: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  stats: HeroStat[];
  backgroundImage: string;
};

export default function HeroSection({
  eyebrow,
  titlePart1,
  titlePart2,
  subtitleStart,
  subtitleBold,
  subtitleEnd,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  stats,
  backgroundImage,
}: HeroProps) {
  const [counts, setCounts] = useState(() => stats.map(() => 0));
  const animated = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (animated.current) return;
      animated.current = true;
      stats.forEach((stat, i) => {
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
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden px-14 py-12 bg-navy">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
        }}
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(115deg,rgba(13,27,42,0.97) 0%,rgba(13,27,42,0.85) 60%,rgba(13,27,42,0.78) 100%)',
        }}
      />
      {/* Orange glow */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          bottom: '-200px',
          left: '-100px',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle,rgba(232,98,10,0.16) 0%,transparent 62%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1180px] mx-auto text-center">
        {/* Pill badge */}
        <div
          className="inline-flex items-center gap-2 rounded-[40px] mb-[26px] px-4 py-[6px] text-[11px] font-semibold uppercase tracking-[1.5px]"
          style={{
            background: 'rgba(232,98,10,0.12)',
            border: '1px solid rgba(232,98,10,0.28)',
            color: '#FF9252',
          }}
        >
          <span
            className="w-[6px] h-[6px] rounded-full flex-shrink-0 animate-pulse-ring bg-brand-orange"
          />
          {eyebrow}
        </div>

        {/* H1 */}
        <h1
          className="text-white mb-5 mx-auto max-w-[880px] text-[62px] font-semibold leading-[1.05] tracking-[-1px]"
        >
          {titlePart1}{' '}
          <em className="italic text-brand-orange-soft">
            {titlePart2}
          </em>
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto mb-9 max-w-[560px] text-[17px] text-white/60 leading-[1.75] font-light"
        >
          {subtitleStart}{' '}
          <strong className="text-white/[0.85] font-medium">
            {subtitleBold}
          </strong>{' '}
          {subtitleEnd}
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 flex-wrap mb-10">
          <a
            href={primaryCtaHref}
            className="inline-flex items-center gap-2 text-white text-[15px] font-semibold rounded-[var(--rs)] px-[34px] py-[15px] hover:bg-[color:var(--orange-deep)] hover:-translate-y-0.5 transition-all duration-[250ms] bg-brand-orange shadow-[0_8px_28px_rgba(232,98,10,0.35)]"
          >
            {primaryCtaLabel}
          </a>
          <a
            href={secondaryCtaHref}
            className="inline-flex items-center gap-[7px] text-[15px] font-medium hover:text-white transition-all duration-200 rounded-[var(--rs)] px-[26px] py-[14px] cursor-pointer text-white/70 border border-white/20"
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)')
            }
          >
            {secondaryCtaLabel}
          </a>
        </div>

        {/* Stats bar */}
        <div className="flex justify-center flex-wrap">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="px-10"
              style={{
                borderRight:
                  i < stats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              }}
            >
              <div className="flex items-baseline gap-0.5 justify-center mb-1">
                <span
                  className="font-serif-num text-[40px] font-semibold text-white leading-none tracking-[-0.5px]"
                >
                  {stat.useComma ? counts[i].toLocaleString() : counts[i]}
                </span>
                <span className="text-[18px] font-bold text-brand-orange-soft">
                  {stat.suffix}
                </span>
              </div>
              <div className="text-[11px] text-white/40 tracking-[0.5px] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
