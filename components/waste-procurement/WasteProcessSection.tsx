const steps = [
  {
    num: '01',
    title: 'Waste Profile Assessment',
    desc: `Reviewing waste streams, container types and sizes, collection frequencies, site requirements, existing supplier arrangements, contract terms, and operational challenges.`,
  },
  {
    num: '02',
    title: 'Market Tendering',
    desc: `We obtain proposals from suitable waste contractors and compare options on a like-for-like basis, aligned to actual requirements rather than a generic schedule.`,
  },
  {
    num: '03',
    title: 'Contract Review & Negotiation',
    desc: `Reviewing pricing structures, weight allowances, escalation clauses, service commitments, notice periods, and contract lengths before selecting a provider.`,
  },
  {
    num: '04',
    title: 'Ongoing Supplier Management',
    desc: `Support continues beyond placement — supplier communication, service queries, invoice support, site changes, contract renewals, and additional requirements.`,
  },
];

export default function WasteProcessSection() {
  return (
    <section id="process" className="scroll-mt-[170px] bg-off px-6 lg:px-14 py-10">
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-8">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            From assessment to ongoing management
          </p>
          <h2 className="font-serif-num text-[44px] font-semibold text-ink tracking-[-0.5px] leading-[1.12] mb-4">
            Our waste procurement process.
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] font-light max-w-[680px]">
            Our goal is to ensure your waste service reflects your actual requirements — not a generic
            collection schedule.
          </p>
        </div>

        <div className="relative mt-8">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-[27px] left-0 right-0 h-[2px] bg-border-color z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-[32px] lg:gap-[24px] relative">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-start">
                <div className="w-[56px] h-[56px] rounded-full bg-white border-[2px] border-brand-orange text-brand-orange font-serif-num text-[22px] font-bold flex items-center justify-center mb-[18px] relative z-[1]">
                  {step.num}
                </div>
                <h4 className="text-[16px] font-bold text-ink mb-[8px]">{step.title}</h4>
                <p className="text-[13px] text-muted leading-[1.7] font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
