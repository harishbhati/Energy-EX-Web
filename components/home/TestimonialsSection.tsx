'use client';

import { useRef, useState } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "We’ve been really happy with the support from Energyex. Our annual energy spend is over £1 million, so every saving makes a difference. They looked through our existing costs, found areas where we were paying more than we needed to, helped fix those issues, and also made sure we were getting competitive energy prices. They continue to keep an eye on our invoices and overall costs, which has been a big help to us.",
    initials: 'AH',
    name: 'Adrian Hill',
    role: 'Director · Sovrin Plastics Limited',
  },
  {
    quote: "We look after around nine properties and our energy use is over a million units a year, so keeping costs under control is really important for us. Energyex has helped us reduce costs and made the whole process much easier to manage. If we have any issue with a supplier or an account, we just speak to Energyex and they deal with it for us. We’ve been with them for over three years and we’ve been very happy with the service.",
    initials: 'HA',
    name: 'To be confirmed',
    role: 'Head of Accounts · Middle Eastern Embassy',
  },
  {
    quote: "Managing energy across our property portfolio used to be a real headache. Energyex now takes care of the whole process for us, including contracts, supplier issues and change of tenancies. We also receive a monthly portfolio report, so we always know where everything stands. It’s made things much easier for us.",
    initials: 'AR',
    name: 'Angus Ross',
    role: 'Director · Bath Lettings / Bath Block Management',
  },
  {
    quote: "We reached out to Energyex when we needed to bring our energy costs down. They reviewed everything and found we were paying a lot more than we needed to in different areas. Our standing charges alone dropped from around £36 a day to £18, and with the other reductions they helped us make, the total saving came to around £56,000 over three years. We’ve been very happy with the result.",
    initials: 'K',
    name: 'Krzysztof',
    role: 'General Manager · Kanpai London',
  },
  {
    quote: "What impressed us most was the time Energyex took to properly analyse our energy usage and costs rather than just quote us a new contract. They found savings in areas we hadn’t really looked at before and, across the work they’ve done for us, have delivered over £200,000 in contract-value savings, including around £148,000 on our latest four-year agreement. They’re also helping us explore schemes such as BICS and other ways of reducing our costs further.",
    initials: 'D',
    name: 'To be confirmed',
    role: 'Director · Corvedale Fresh Limited',
  },
  {
    quote: "With a number of hotels and B&B properties to manage, keeping on top of energy contracts and supplier issues can easily become time-consuming. Energyex manages that side for us, keeps everything organised and has helped us make significant savings across the portfolio. If there’s an issue with a supplier or an account, they deal with it and keep things moving. It has taken a lot of pressure off us.",
    initials: 'D',
    name: 'To be confirmed',
    role: 'Director · Bridge Hotel',
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
    <div className="px-6 md:px-14 py-10 bg-[#FCFAF7]">
      <div className="max-w-[1180px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="text-[11px] font-bold uppercase tracking-[2.5px] mb-[14px] text-center text-brand-orange">
            What our clients say
          </div>
          <h2 className="font-serif-num mb-4 text-[28px] md:text-[44px] font-bold text-navy tracking-[-0.5px] leading-[1.12]">
            Loved by 10,000+ UK businesses
          </h2>
          <p className="mx-auto max-w-[560px] text-[15px] md:text-[17px] text-muted leading-[1.7] font-light">
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
                className="tcard-item bg-white rounded-[var(--r)] px-6 md:px-8 py-6 md:py-8 flex-shrink-0 transition-all duration-300 cursor-default w-full md:w-[calc(33.333%-14px)]"
                style={{ border: '1.5px solid var(--border)' }}
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
                <div className="flex items-center gap-[3px] mb-4 text-brand-orange">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="font-serif-num mb-[22px] italic text-[17px] md:text-[18px] text-ink leading-[1.6] font-medium">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mb-[18px] h-px bg-[color:var(--border)]" />
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 font-serif-num bg-orange-tint text-brand-orange-deep">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-ink">{t.name}</div>
                    <div className="text-xs text-muted">{t.role}</div>
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
            className="w-11 h-11 rounded-full flex items-center justify-center text-base cursor-pointer transition-all duration-200 hover:bg-[color:var(--orange)] hover:text-white bg-white text-ink"
            style={{ border: '1.5px solid var(--border-strong)' }}
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
            className="w-11 h-11 rounded-full flex items-center justify-center text-base cursor-pointer transition-all duration-200 hover:bg-[color:var(--orange)] hover:text-white bg-white text-ink"
            style={{ border: '1.5px solid var(--border-strong)' }}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
