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
    <div
      className="relative overflow-hidden px-14 py-12"
      style={{ background: 'var(--navy)' }}
    >
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
        className="absolute pointer-events-none"
        style={{
          bottom: '-200px',
          left: '-100px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
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
            className="w-[6px] h-[6px] rounded-full flex-shrink-0 animate-pulse-ring"
            style={{ background: 'var(--orange)' }}
          />
          {eyebrow}
        </div>

        {/* H1 */}
        <h1
          className="text-white mb-5 mx-auto max-w-[880px]"
          style={{
            fontSize: '62px',
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: '-1px',
          }}
        >
          {titlePart1}{' '}
          <em className="italic" style={{ color: 'var(--orange-soft)' }}>
            {titlePart2}
          </em>
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto mb-9 max-w-[560px]"
          style={{
            fontSize: '17px',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.75,
            fontWeight: 300,
          }}
        >
          {subtitleStart}{' '}
          <strong style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>
            {subtitleBold}
          </strong>{' '}
          {subtitleEnd}
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 flex-wrap mb-10">
          <a
            href={primaryCtaHref}
            className="inline-flex items-center gap-2 text-white text-[15px] font-semibold rounded-[var(--rs)] px-[34px] py-[15px] hover:bg-[color:var(--orange-deep)] hover:-translate-y-0.5 transition-all duration-[250ms]"
            style={{ background: 'var(--orange)', boxShadow: '0 8px 28px rgba(232,98,10,0.35)' }}
          >
            {primaryCtaLabel}
          </a>
          <a
            href={secondaryCtaHref}
            className="inline-flex items-center gap-[7px] text-[15px] font-medium hover:text-white transition-all duration-200 rounded-[var(--rs)] px-[26px] py-[14px] cursor-pointer"
            style={{
              color: 'rgba(255,255,255,0.7)',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
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
                  className="font-serif-num"
                  style={{
                    fontSize: '40px',
                    fontWeight: 600,
                    color: '#fff',
                    lineHeight: 1,
                    letterSpacing: '-0.5px',
                  }}
                >
                  {stat.useComma ? counts[i].toLocaleString() : counts[i]}
                </span>
                <span
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: 'var(--orange-soft)',
                  }}
                >
                  {stat.suffix}
                </span>
              </div>
              <div
                style={{
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.4)',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                }}
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
