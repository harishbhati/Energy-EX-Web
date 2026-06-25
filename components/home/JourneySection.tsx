const steps = [
  {
    num: '1',
    title: 'We understand your business',
    description:
      'Usage patterns, contract history, future plans — we learn what matters before going to market.',
    badge: null,
  },
  {
    num: '2',
    title: 'We find your best rates',
    description: 'Full market comparison across our approved UK supplier network.',
    badge: 'Within 24 hours',
  },
  {
    num: '3',
    title: 'We manage the switch',
    description: 'End-to-end — zero disruption, zero paperwork for you.',
    badge: null,
  },
  {
    num: '4',
    title: 'We stay with you throughout',
    description:
      'Contract tracking, renewal alerts and supplier support for the entire contract period.',
    badge: 'Full journey support',
  },
];

export default function JourneySection() {
  return (
    <div
      id="journey"
      className="grid grid-cols-1 md:grid-cols-2"
      style={{ minHeight: '500px' }}
    >
      {/* Left: image */}
      <div className="relative overflow-hidden min-h-[300px] md:min-h-0">
        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
          alt="Energyex team"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 30%' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(150deg,rgba(13,27,42,0.72),rgba(13,27,42,0.28))',
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-[52px]">
          <div className="mb-[10px] font-bold uppercase tracking-[2px] text-[11px] text-white/50">
            Our experience
          </div>
          <div className="font-serif-num mb-[22px] text-[24px] md:text-[30px] font-semibold text-white leading-[1.2]">
            13 years of energy expertise — now helping UK businesses take control of costs
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { num: '10,000+', label: 'Clients served' },
              { num: '25%', label: 'Avg saving' },
              { num: '100%', label: 'Independent' },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-[var(--rs)] p-[10px] md:p-[14px] text-center bg-white/10 backdrop-blur-[8px] border border-white/[0.12]"
              >
                <div className="font-serif-num text-[18px] md:text-[24px] font-semibold text-white leading-none">
                  {s.num}
                </div>
                <div className="text-[10px] md:text-[10.5px] text-white/50 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: steps */}
      <div className="flex flex-col justify-center px-6 md:px-14 py-10 md:py-16 bg-off">
        <div className="text-[11px] font-bold uppercase tracking-[2.5px] mb-[14px] text-brand-orange">
          Our difference · How it works
        </div>
        <h2 className="font-serif-num mb-[30px] text-[26px] md:text-[34px] font-semibold text-ink tracking-[-0.5px] leading-[1.12]">
          We don&apos;t just get you a deal. We manage the whole journey.
        </h2>

        <div className="flex flex-col">
          {steps.map((step, i) => (
            <div key={step.num} className="flex gap-4 group cursor-default">
              {/* Line column */}
              <div className="flex flex-col items-center w-10 flex-shrink-0">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-serif-num transition-all duration-[250ms] bg-white group-hover:[background:var(--orange)] group-hover:text-white group-hover:[border-color:var(--orange)]"
                  style={{
                    border: '1.5px solid var(--border)',
                    fontSize: '17px',
                    fontWeight: 600,
                  }}
                >
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="flex-1 my-1"
                    style={{ width: '1.5px', background: 'var(--border)', minHeight: '16px' }}
                  />
                )}
              </div>

              {/* Body */}
              <div className="pb-[26px] pt-[6px]">
                <h4 className="mb-1 font-semibold transition-colors duration-[250ms] group-hover:[color:var(--orange)] text-[15px]">
                  {step.title}
                </h4>
                <p className="text-[13px] text-muted leading-[1.6] font-light">
                  {step.description}
                </p>
                {step.badge && (
                  <span
                    className="inline-block mt-[7px] px-[9px] py-[2px] rounded font-semibold text-[10px]"
                    style={{
                      background: 'var(--orange-tint)',
                      color: 'var(--orange)',
                      border: '1px solid rgba(232,98,10,0.18)',
                    }}
                  >
                    {step.badge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
