const issues = [
  `Container sizes larger than required`,
  `Collection frequencies that don't match volumes`,
  `Excessive weight allowances`,
  `Charges for unused capacity`,
  `Automatic annual price increases`,
  `Poor recycling arrangements`,
  `Limited contract flexibility`,
  `Lack of visibility across multiple sites`,
];

export default function CommonIssuesSection() {
  return (
    <section id="issues" className="scroll-mt-[0] bg-white px-6 lg:px-14 py-10">
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-8">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            Renewed year after year, rarely reviewed
          </p>
          <h2 className="font-serif-num text-[44px] font-semibold text-ink tracking-[-0.5px] leading-[1.12] mb-4">
            Is your current waste contract working for you?
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] font-light max-w-[680px]">
            A waste contract that was appropriate several years ago may no longer represent the most
            efficient or cost-effective solution today. Here&apos;s what we typically find when we look
            closely.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] items-start">
          {/* Issue tag grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px]">
            {issues.map((issue) => (
              <div
                key={issue}
                className="flex items-start gap-[12px] bg-off border border-border-color rounded-rs px-[16px] py-[14px]"
              >
                <div className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-brand-orange/[0.12] flex items-center justify-center">
                  <span className="text-[12px] font-[800] text-[#CC5208] leading-none">!</span>
                </div>
                <span className="text-[13.5px] font-semibold text-[#33414F] leading-[1.4]">{issue}</span>
              </div>
            ))}
          </div>

          {/* Callout */}
          <div className="bg-navy rounded-r px-[28px] py-[30px] relative overflow-hidden">
            <div className="absolute w-[200px] h-[200px] rounded-full bg-brand-orange/[0.25] -top-[90px] -right-[60px] pointer-events-none" />
            <h3 className="font-serif-num text-[24px] font-semibold text-white mb-[12px] relative z-[1]">
              Reviewing pays for itself
            </h3>
            <p className="text-[14px] text-white/60 leading-[1.8] font-light relative z-[1]">
              By reviewing your current arrangements, Energyex can help identify opportunities to improve
              service levels, simplify administration, and potentially reduce unnecessary expenditure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
