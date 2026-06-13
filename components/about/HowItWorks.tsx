'use client';

const steps = [
  {
    num: '01',
    title: 'Tell us about your business',
    desc: 'Share a few basic details — your site(s), current energy usage, and contract end date. Takes less than 5 minutes.',
  },
  {
    num: '02',
    title: 'We compare the whole market',
    desc: 'We go out to 30+ approved UK suppliers and gather real, live quotes — not estimates or ballpark figures.',
  },
  {
    num: '03',
    title: 'Review your options',
    desc: 'We present the best deals clearly, with a plain-English explanation of exactly what you\'ll save and why.',
  },
  {
    num: '04',
    title: 'We handle the switch',
    desc: 'Once you approve, we manage the entire process — contracts, supplier comms, billing queries, and your next renewal.',
  },
];

export default function HowItWorks() {
  return (
    <section style={{ background: 'var(--off)' }} className="px-14 py-[88px]">
      <div className="max-w-[1180px] mx-auto">
        {/* Header */}
        <div className="text-center mb-[56px]">
          <div className="flex items-center justify-center gap-[10px] mb-[18px]">
            <span
              className="block"
              style={{ width: '22px', height: '2px', background: 'var(--orange)' }}
            />
            <span
              className="font-bold uppercase tracking-[2px]"
              style={{ fontSize: '11px', color: 'var(--orange)' }}
            >
              How it works
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
            From first call to real savings
          </h2>
          <p
            className="mx-auto"
            style={{
              fontSize: '17px',
              color: 'var(--muted)',
              lineHeight: 1.7,
              maxWidth: '520px',
              fontWeight: 300,
            }}
          >
            A simple four-step process that puts you in complete control — with us doing all the
            work.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
          {steps.map((step) => (
            <div
              key={step.num}
              className="group relative bg-white rounded-[var(--rl)] overflow-hidden cursor-default transition-all duration-300 hover:-translate-y-1"
              style={{
                border: '1px solid var(--border)',
                padding: '32px 28px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 36px rgba(232,98,10,0.12)';
                e.currentTarget.style.borderColor = 'rgba(232,98,10,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              {/* Orange gradient top bar — replaces ::before */}
              <div
                className="absolute top-0 left-0 right-0"
                style={{
                  height: '3px',
                  background: 'linear-gradient(90deg,var(--orange),var(--orange-soft))',
                }}
              />

              {/* Step number */}
              <div
                className="font-serif-num mb-5"
                style={{
                  fontSize: '50px',
                  fontWeight: 700,
                  lineHeight: 1,
                  color: 'var(--orange-tint2)',
                  letterSpacing: '-2px',
                }}
              >
                {step.num}
              </div>

              <h3
                className="font-semibold mb-[10px]"
                style={{ fontSize: '17px', color: 'var(--ink)', lineHeight: 1.3 }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
