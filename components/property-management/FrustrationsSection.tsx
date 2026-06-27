const painPoints = [
  `Chasing different suppliers for electricity, gas, water, and waste`,
  `Invoices arriving from multiple contractors with no unified view`,
  `Renewing contracts at the wrong time or without enough market context`,
  `Utility queries falling back to the property management team`,
  `No visibility over energy costs across a multi-site portfolio`,
  `Wasted time on bill disputes, meter issues, and supplier admin`,
  `Missing compliance and Duty of Care obligations for waste`,
  `Poor supplier performance with no structured escalation route`,
];

const highlights = [
  { value: `1 contact`, label: `for every utility across your portfolio` },
  { value: `All streams`, label: `electricity, gas, water, waste, cleaning & renewables` },
  { value: `Portfolio view`, label: `one consolidated report across all sites` },
];

export default function FrustrationsSection() {
  return (
    <section
      id="challenges"
      className="scroll-mt-[0] bg-white px-6 lg:px-14 py-10"
    >
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-[48px] items-start">
        {/* Left — pain list */}
        <div>
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            Challenges we solve
          </p>
          <h2 className="font-serif-num text-[36px] lg:text-[44px] font-semibold text-ink tracking-[-0.5px] leading-[1.12] mb-[10px]">
            What property managers deal with every day.
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] font-light mb-[32px] max-w-[580px]">
            Managing utilities across a portfolio is rarely simple. These are the issues we hear most from
            property managers before they come to us.
          </p>

          <ul className="flex flex-col gap-[10px]">
            {painPoints.map((point) => (
              <li key={point} className="flex items-start gap-[12px]">
                <span className="flex-shrink-0 w-[22px] h-[22px] rounded-[6px] bg-orange-tint text-[#CC5208] text-[11px] font-bold flex items-center justify-center mt-[1px]">
                  ✕
                </span>
                <span className="text-[14px] text-ink leading-[1.6]">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — sticky navy callout */}
        <div className="lg:sticky lg:top-[100px] bg-navy rounded-r px-[30px] py-[32px] relative overflow-hidden">
          <div className="absolute w-[200px] h-[200px] rounded-full bg-brand-orange/[0.3] blur-[60px] -top-[60px] -right-[60px] pointer-events-none" />
          <div className="relative z-[1]">
            <p className="text-[11px] font-bold text-brand-orange-soft uppercase tracking-[2.5px] mb-[16px]">
              What Energyex does instead
            </p>
            <h3 className="font-serif-num text-[24px] font-semibold text-white leading-[1.2] mb-[22px]">
              One service for every utility, across every site.
            </h3>

            <div className="flex flex-col gap-[18px]">
              {highlights.map((h) => (
                <div key={h.value} className="flex items-start gap-[14px]">
                  <div className="w-[8px] h-[8px] rounded-full bg-brand-orange flex-shrink-0 mt-[6px]" />
                  <div>
                    <span className="text-[15px] font-bold text-brand-orange-soft block">{h.value}</span>
                    <span className="text-[12.5px] text-white/55 leading-[1.55]">{h.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[12.5px] text-white/40 leading-[1.7] mt-[24px] pt-[18px] border-t border-white/[0.1]">
              We handle procurement, management, compliance, and reporting — leaving your team free to
              focus on the properties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
