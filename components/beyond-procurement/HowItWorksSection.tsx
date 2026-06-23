const steps = [
  {
    num: '1',
    title: 'Letter of Authority',
    desc: 'You grant us authority to act on your behalf — this takes minutes and unlocks access to your account data and usage history.',
  },
  {
    num: '2',
    title: 'Data Review',
    desc: 'We pull your billing history, consumption data, capacity agreements, and compliance status into a single picture.',
  },
  {
    num: '3',
    title: 'Issues Identified',
    desc: 'Our team flags discrepancies, overcharges, capacity mismatches, or compliance gaps — with evidence, not estimates.',
  },
  {
    num: '4',
    title: 'We Act on Your Behalf',
    desc: 'We contact suppliers, regulators, or metering agents directly to recover costs and resolve issues — you get a report, not a to-do list.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-white px-6 lg:px-14 py-[60px]">
      <div className="max-w-[1180px] mx-auto">
        <div className="text-center mb-10">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            How it works
          </p>
          <h2 className="font-serif-num text-[36px] lg:text-[42px] font-semibold text-ink tracking-[-0.5px] leading-[1.12] mb-4">
            Four steps from sign-off to savings.
          </h2>
          <p className="text-[16px] text-muted leading-[1.75] font-light max-w-[560px] mx-auto">
            We run the process. You review the outcome.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-[28px] lg:gap-0">
          {steps.map((step, i) => (
            <div key={step.num} className="lg:px-[22px] relative">
              {i < steps.length - 1 && (
                <span className="hidden lg:block absolute top-[18px] -right-[4px] text-[#BCC7D4] text-[18px] z-[1]">
                  →
                </span>
              )}
              <div className="font-serif-num text-[34px] font-bold text-brand-orange mb-[10px]">
                {step.num}
              </div>
              <h4 className="text-[15px] font-bold text-ink mb-[8px]">{step.title}</h4>
              <p className="text-[13.5px] text-muted leading-[1.7] font-light">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
