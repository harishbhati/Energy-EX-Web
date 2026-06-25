const steps = [
  {
    num: '01',
    title: 'Account & Bill Review',
    desc: `We review your existing arrangements, billing history, site information, and account structure — surfacing billing discrepancies, incorrect charging structures, drainage opportunities, vacancy claims, and account administration issues.`,
  },
  {
    num: '02',
    title: 'Market Tendering',
    desc: `Where appropriate, we obtain quotations from licensed water retailers and present options on a clear like-for-like basis, aligned to your operational requirements and portfolio structure.`,
  },
  {
    num: '03',
    title: 'Switching Management',
    desc: `Your physical supply is unaffected by a retailer switch. We manage the entire switching process start to finish, with minimal administration on your end.`,
  },
  {
    num: '04',
    title: 'Ongoing Account Management',
    desc: `Support continues beyond placement — billing queries, meter issues, account administration, supplier communication, portfolio management, and renewals.`,
  },
];

export default function WaterProcessSection() {
  return (
    <section id="process" className="scroll-mt-[170px] bg-off px-6 lg:px-14 py-10">
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-8">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            From review to ongoing management
          </p>
          <h2 className="font-serif-num text-[28px] md:text-[44px] font-semibold text-ink tracking-[-0.5px] leading-[1.12] mb-4">
            Our water procurement process.
          </h2>
          <p className="text-[15px] md:text-[17px] text-muted leading-[1.7] font-light max-w-[680px]">
            Switching retailer doesn&apos;t touch your physical supply — the infrastructure stays exactly the
            same. What changes is who manages your account, and how well.
          </p>
        </div>

        <div className="flex flex-col">
          {steps.map((step, i) => {
            const isEven = i % 2 === 1;
            return (
              <div
                key={step.num}
                className={`grid grid-cols-1 lg:grid-cols-[0.6fr_1fr] gap-[24px] lg:gap-[48px] items-center py-[40px] ${
                  i < steps.length - 1 ? 'border-b border-border-color' : ''
                }`}
              >
                <div
                  className={`font-serif-num text-[56px] lg:text-[64px] font-bold leading-[1] text-center ${
                    isEven ? 'text-brand-orange-soft lg:order-2' : 'text-[#BCC7D4]'
                  }`}
                >
                  {step.num}
                </div>
                <div className={isEven ? 'lg:order-1' : ''}>
                  <h4 className="text-[19px] font-bold text-ink mb-[10px]">{step.title}</h4>
                  <p className="text-[14px] text-muted leading-[1.75] font-light">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
