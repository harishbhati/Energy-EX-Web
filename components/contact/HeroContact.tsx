const stats = [
  { num: '10,000+', label: 'Clients Served' },
  { num: '25%', label: 'Avg. Savings' },
  { num: '13 Yrs', label: 'Industry Experience' },
];

export default function HeroContact() {
  return (
    <section
      className="relative overflow-hidden text-center"
      style={{ background: 'var(--navy)', padding: '80px 40px 72px' }}
    >
      {/* Radial glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 20% 50%, rgba(232,98,10,0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 70% at 80% 30%, rgba(42,79,124,0.35) 0%, transparent 60%)',
        }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-[1] mx-auto" style={{ maxWidth: '700px' }}>
        {/* Eyebrow badge */}
        <div
          className="inline-flex items-center gap-2 rounded-[20px] mb-6"
          style={{
            background: 'rgba(232,98,10,0.15)',
            border: '1px solid rgba(232,98,10,0.35)',
            color: 'var(--orange-soft)',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.8px',
            textTransform: 'uppercase',
            padding: '6px 14px',
          }}
        >
          <span
            className="w-[6px] h-[6px] rounded-full flex-shrink-0 animate-pulse-ring"
            style={{ background: 'var(--orange-soft)' }}
          />
          Talk to an Expert
        </div>

        {/* H1 */}
        <h1
          className="font-serif-num text-white mb-[18px]"
          style={{ fontSize: 'clamp(38px,5vw,58px)', fontWeight: 600, lineHeight: 1.12, letterSpacing: '-0.5px' }}
        >
          Let&apos;s Reduce Your
          <br />
          <em className="italic" style={{ color: 'var(--orange-soft)' }}>
            Energy Costs Together
          </em>
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto"
          style={{
            fontSize: '17px',
            color: 'rgba(255,255,255,0.68)',
            maxWidth: '520px',
            lineHeight: 1.7,
          }}
        >
          Our energy procurement specialists are ready to help. Whether you&apos;re looking to cut
          bills, switch suppliers, or manage utilities across your portfolio — we respond within 24
          hours.
        </p>

        {/* Stats row */}
        <div
          className="flex overflow-hidden mx-auto mt-12"
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 'var(--r)',
            backdropFilter: 'blur(8px)',
            maxWidth: '560px',
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="flex-1 text-center"
              style={{
                padding: '20px 24px',
                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}
            >
              <span
                className="block font-serif-num"
                style={{ fontSize: '26px', fontWeight: 700, color: 'var(--orange-soft)' }}
              >
                {s.num}
              </span>
              <span
                className="block mt-0.5 uppercase"
                style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.6px' }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
