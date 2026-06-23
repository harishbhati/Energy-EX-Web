const steps = [
  {
    num: '01',
    title: 'Understand the requirement',
    desc: `We start by understanding the property type, sectors involved, frequency needed, and any specific
    areas — communal, residential, or commercial — that need to be covered.`,
  },
  {
    num: '02',
    title: 'Match the right partner',
    desc: `We connect you with experienced, fully insured cleaning providers from our network, selected for
    the specific service and property type involved.`,
  },
  {
    num: '03',
    title: `Agree schedules & scope`,
    desc: `Whether daily, weekly, fortnightly, or one-off, schedules and service scope are agreed up front so
    expectations are clear from the start.`,
  },
  {
    num: '04',
    title: 'Ongoing coordination',
    desc: `Energyex remains the single point of contact — handling contractor communication, site scheduling,
    and portfolio oversight for as long as the service runs.`,
  },
];

export default function CleaningProcessSection() {
  return (
    <section id="process" className="scroll-mt-[170px] bg-off px-6 lg:px-14 py-10">
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-[8px]">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            From first call to ongoing coordination
          </p>
          <h2 className="font-serif-num text-[36px] lg:text-[44px] font-semibold text-ink tracking-[-0.5px] leading-[1.12] mb-[16px]">
            How we set up your cleaning support.
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] font-light max-w-[680px]">
            A straightforward path from requirement to a managed cleaning service — with Energyex
            coordinating throughout.
          </p>
        </div>

        {/* Vertical rail */}
        <div className="relative mt-[32px] pl-[8px]">
          {/* Rail line */}
          <div className="absolute top-[6px] bottom-[6px] left-[27px] w-[2px] bg-border-color" />

          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`flex gap-[24px] items-start relative ${i < steps.length - 1 ? 'pb-[36px]' : ''}`}
            >
              {/* Circular badge */}
              <div className="w-[56px] h-[56px] rounded-full bg-white border-[2px] border-brand-orange text-[#CC5208] font-serif-num text-[22px] font-bold flex items-center justify-center flex-shrink-0 relative z-[1]">
                {step.num}
              </div>
              {/* Body */}
              <div className="pt-[10px] min-w-0">
                <h4 className="text-[17px] font-bold text-ink mb-[6px]">{step.title}</h4>
                <p className="text-[14px] text-muted leading-[1.7] font-light max-w-[620px]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
