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
      <div
        className="relative flex flex-col justify-center"
        style={{ background: 'var(--navy)', padding: '80px 56px', zIndex: 2 }}
      >
        {/* Skewed edge bleeding into image (replicates hero-left::after) */}
        <div
          className="absolute top-0 bottom-0 pointer-events-none"
          style={{
            right: '-40px',
            width: '80px',
            background: 'var(--navy)',
            transform: 'skewX(-3deg)',
            zIndex: 1,
          }}
        />

        {/* Eyebrow pill */}
        <div
          className="inline-flex items-center gap-2 rounded-[40px] mb-[22px] self-start"
          style={{
            background: 'rgba(232,98,10,0.15)',
            color: 'var(--orange-soft)',
            fontSize: '11.5px',
            fontWeight: 700,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            padding: '6px 14px',
            border: '1px solid rgba(232,98,10,0.3)',
          }}
        >
          <span
            className="w-[6px] h-[6px] rounded-full flex-shrink-0"
            style={{ background: 'var(--orange)' }}
          />
          About Energyex
        </div>

        {/* H1 */}
        <h1
          className="font-serif-num text-white mb-5"
          style={{
            fontSize: '58px',
            fontWeight: 600,
            lineHeight: 1.08,
            letterSpacing: '-1.5px',
            position: 'relative',
            zIndex: 2,
          }}
        >
          Your Energy.
          <br />
          <em className="italic" style={{ color: 'var(--orange-soft)' }}>
            Our Expertise.
          </em>
          <br />
          Real Savings.
        </h1>

        {/* Subtitle */}
        <p
          className="mb-9"
          style={{
            fontSize: '16px',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.62)',
            maxWidth: '430px',
            position: 'relative',
            zIndex: 2,
          }}
        >
          An independent UK energy consultancy — founded in 2021 and backed by 13 years of energy
          expertise. We&apos;re not tied to any supplier — we work entirely for you, finding the
          best contracts and managing the lot.
        </p>

        {/* CTAs */}
        <div
          className="flex gap-[14px] flex-wrap mb-10"
          style={{ position: 'relative', zIndex: 2 }}
        >
          <a
            href="/quote"
            className="inline-block font-bold rounded-[var(--rs)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[color:var(--orange-deep)]"
            style={{
              background: 'var(--orange)',
              color: '#fff',
              padding: '13px 26px',
              fontSize: '14.5px',
              boxShadow: '0 6px 24px rgba(232,98,10,0.35)',
            }}
          >
            Get a Free Quote
          </a>
          <a
            href="/our-services"
            className="inline-block font-semibold rounded-[var(--rs)] transition-all duration-200"
            style={{
              background: 'rgba(255,255,255,0.08)',
              color: 'rgba(255,255,255,0.85)',
              padding: '13px 26px',
              fontSize: '14.5px',
              border: '1px solid rgba(255,255,255,0.18)',
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
        <div className="flex gap-7" style={{ position: 'relative', zIndex: 2 }}>
          {stats.map((s) => (
            <div
              key={s.label}
              className="pl-[14px]"
              style={{ borderLeft: '2px solid rgba(232,98,10,0.45)' }}
            >
              <strong
                className="block font-black"
                style={{ fontSize: '26px', color: '#fff', letterSpacing: '-1px', lineHeight: 1 }}
              >
                {s.val}
              </strong>
              <span
                className="font-medium uppercase"
                style={{
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.45)',
                  letterSpacing: '0.5px',
                }}
              >
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
          className="absolute z-[3] rounded-[18px]"
          style={{
            bottom: '40px',
            right: '40px',
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.2)',
            padding: '24px 28px',
            maxWidth: '260px',
          }}
        >
          <div
            className="font-serif-num"
            style={{
              fontSize: '44px',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1,
              letterSpacing: '-2px',
            }}
          >
            £0
          </div>
          <div
            style={{
              fontSize: '12px',
              color: 'rgba(255,255,255,0.7)',
              fontWeight: 600,
              marginTop: '4px',
              marginBottom: '16px',
            }}
          >
            Upfront cost to you
          </div>
          <div
            style={{ height: '1px', background: 'rgba(255,255,255,0.15)', marginBottom: '16px' }}
          />
          <div className="flex justify-between">
            {miniStats.map((m) => (
              <div key={m.label}>
                <strong
                  className="block font-black"
                  style={{
                    fontSize: '20px',
                    color: '#fff',
                    letterSpacing: '-0.5px',
                    lineHeight: 1,
                  }}
                >
                  {m.val}
                </strong>
                <span
                  style={{ fontSize: '11px', color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}
                >
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
