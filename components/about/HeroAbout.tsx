'use client';

const stats = [
  { val: '10,000+', label: 'Clients Served' },
  { val: '13 Yrs', label: 'Expertise' },
  { val: '25%', label: 'Avg. Saving' },
];

const miniStats = [
  { val: '24hr', label: 'Quote turnaround' },
  { val: '100%', label: 'Independent' },
];

export default function HeroAbout() {
  return (
    <section
      className="grid overflow-hidden"
      style={{ gridTemplateColumns: '1fr 1fr', minHeight: '600px' }}
    >
      {/* Left — navy */}
      <div className="relative flex flex-col justify-center bg-navy z-[2]" style={{ padding: '80px 56px' }}>
        {/* Skewed edge bleeding into image (replicates hero-left::after) */}
        <div
          className="absolute top-0 bottom-0 pointer-events-none bg-navy z-[1]"
          style={{
            right: '-40px',
            width: '80px',
            transform: 'skewX(-3deg)',
          }}
        />

        {/* Eyebrow pill */}
        <div
          className="inline-flex items-center gap-2 rounded-[40px] mb-[22px] self-start text-brand-orange-soft font-bold uppercase tracking-[1.5px] text-[11.5px] border border-[rgba(232,98,10,0.3)]"
          style={{
            background: 'rgba(232,98,10,0.15)',
            padding: '6px 14px',
          }}
        >
          <span className="w-[6px] h-[6px] rounded-full flex-shrink-0 bg-brand-orange" />
          About Energyex
        </div>

        {/* H1 */}
        <h1
          className="font-serif-num text-white mb-5 text-[58px] font-semibold leading-[1.08] tracking-[-1.5px] relative z-[2]"
        >
          Your Energy.
          <br />
          <em className="italic text-brand-orange-soft">
            Our Expertise.
          </em>
          <br />
          Real Savings.
        </h1>

        {/* Subtitle */}
        <p
          className="mb-9 text-base leading-[1.7] text-white/[0.62] max-w-[430px] relative z-[2]"
        >
          An independent UK energy consultancy — founded in 2021 and backed by 13 years of energy
          expertise. We&apos;re not tied to any supplier — we work entirely for you, finding the
          best contracts and managing the lot.
        </p>

        {/* CTAs */}
        <div className="flex gap-[14px] flex-wrap mb-10 relative z-[2]">
          <a
            href="/quote"
            className="inline-block font-bold rounded-[var(--rs)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[color:var(--orange-deep)] bg-brand-orange text-white text-[14.5px] shadow-[0_6px_24px_rgba(232,98,10,0.35)]"
            style={{ padding: '13px 26px' }}
          >
            Get a Free Quote
          </a>
          <a
            href="/our-services"
            className="inline-block font-semibold rounded-[var(--rs)] transition-all duration-200 text-white/[0.85] text-[14.5px] border border-white/[0.18]"
            style={{
              background: 'rgba(255,255,255,0.08)',
              padding: '13px 26px',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = 'rgba(255,255,255,0.14)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')
            }
          >
            Our Services
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-7 relative z-[2]">
          {stats.map((s) => (
            <div
              key={s.label}
              className="pl-[14px]"
              style={{ borderLeft: '2px solid rgba(232,98,10,0.45)' }}
            >
              <strong className="block font-black text-[26px] text-white tracking-[-1px] leading-none">
                {s.val}
              </strong>
              <span className="font-medium uppercase text-[11px] text-white/45 tracking-[0.5px]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right — image */}
      <div className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80&fit=crop"
          alt="UK electricity transmission towers at dusk"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.75) saturate(0.9)' }}
        />
        {/* Dual gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right,var(--navy) 0%,transparent 35%), linear-gradient(to bottom,rgba(13,27,42,0.3) 0%,transparent 50%)',
          }}
        />
        {/* Glassmorphism stat card */}
        <div
          className="absolute z-[3] rounded-[18px] backdrop-blur-[20px] border border-white/20"
          style={{
            bottom: '40px',
            right: '40px',
            background: 'rgba(255,255,255,0.1)',
            padding: '24px 28px',
            maxWidth: '260px',
          }}
        >
          <div className="font-serif-num text-[44px] font-bold text-white leading-none tracking-[-2px]">
            £0
          </div>
          <div className="text-xs text-white/70 font-semibold mt-1 mb-4">
            Upfront cost to you
          </div>
          <div className="h-px bg-white/[0.15] mb-4" />
          <div className="flex justify-between">
            {miniStats.map((m) => (
              <div key={m.label}>
                <strong className="block font-black text-[20px] text-white tracking-[-0.5px] leading-none">
                  {m.val}
                </strong>
                <span className="text-[11px] text-white/55 font-medium">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
