const steps = [
  {
    num: '01',
    title: 'Enquiry & Site Details',
    desc: 'We gather site information and confirm exactly what supply is needed.',
  },
  {
    num: '02',
    title: 'Application Prepared',
    desc: 'We prepare and submit the formal application to the relevant board.',
  },
  {
    num: '03',
    title: 'Board Liaison',
    desc: 'We follow up directly with the board throughout, using our existing relationship to keep things moving.',
  },
  {
    num: '04',
    title: 'Meter Installed',
    desc: 'Installation is completed and your new electricity or gas meter goes live.',
  },
];

export default function ConnectionsProcessSection() {
  return (
    <section id="process" className="scroll-mt-[0] bg-off px-6 lg:px-14 py-10">
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-8">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            Why use an experienced team
          </p>
          <h2 className="font-serif-num text-[44px] font-semibold text-ink tracking-[-0.5px] leading-[1.12] mb-4">
            Faster approvals, fewer false starts.
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] font-light max-w-[680px]">
            Working with the electricity and gas boards daily means we typically secure approvals faster — and
            at lower cost — than going direct.
          </p>
        </div>

        {/* Horizontal stepper */}
        <div className="relative mt-2">
          {/* Connecting line – desktop only */}
          <div className="hidden lg:block absolute top-[29px] left-0 right-0 h-[2px] bg-border-color z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-[30px] lg:gap-0 relative">
            {steps.map((step) => (
              <div key={step.num} className="text-center px-4 relative z-[1]">
                <div className="w-[58px] h-[58px] rounded-full bg-white border-[3px] border-brand-orange text-brand-orange flex items-center justify-center font-serif-num text-[22px] font-bold mx-auto mb-[18px]">
                  {step.num}
                </div>
                <h4 className="text-[14.5px] font-bold text-ink mb-2">{step.title}</h4>
                <p className="text-[12.5px] text-muted leading-[1.6] font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
