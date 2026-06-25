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
    desc: "We present the best deals clearly, with a plain-English explanation of exactly what you'll save and why.",
  },
  {
    num: '04',
    title: 'We handle the switch',
    desc: 'Once you approve, we manage the entire process — contracts, supplier comms, billing queries, and your next renewal.',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-off px-6 md:px-14 py-12 md:py-[88px]">
      <div className="max-w-[1180px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-[56px]">
          <div className="flex items-center justify-center gap-[10px] mb-[18px]">
            <span className="block w-[22px] h-[2px] bg-brand-orange" />
            <span className="font-bold uppercase tracking-[2px] text-[11px] text-brand-orange">
              How it works
            </span>
            <span className="block w-[22px] h-[2px] bg-brand-orange" />
          </div>
          <h2 className="font-serif-num mb-4 text-[28px] sm:text-[36px] md:text-[46px] font-semibold text-ink tracking-[-1px] leading-[1.1]">
            From first call to real savings
          </h2>
          <p className="mx-auto text-[15px] md:text-[17px] text-muted leading-[1.7] max-w-[520px] font-light">
            A simple four-step process that puts you in complete control — with us doing all the
            work.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="group relative bg-white rounded-[var(--rl)] overflow-hidden cursor-default transition-all duration-300 hover:-translate-y-1 border border-[color:var(--border)] p-7 md:p-8"
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 36px rgba(232,98,10,0.12)';
                e.currentTarget.style.borderColor = 'rgba(232,98,10,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              {/* Orange gradient top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: 'linear-gradient(90deg,var(--orange),var(--orange-soft))' }}
              />

              {/* Step number */}
              <div className="font-serif-num mb-5 text-[48px] md:text-[50px] font-bold leading-none text-orange-tint2 tracking-[-2px]">
                {step.num}
              </div>

              <h3 className="font-semibold mb-[10px] text-[16px] md:text-[17px] text-ink leading-[1.3]">
                {step.title}
              </h3>
              <p className="text-sm text-muted leading-[1.7]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
