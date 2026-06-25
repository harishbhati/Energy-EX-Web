const billLines: { label: string; badge: string }[] = [
  { label: 'Water consumption charges', badge: 'Usage' },
  { label: 'Wastewater (sewerage) charges', badge: 'Usage' },
  { label: 'Fixed water charges', badge: 'Fixed' },
  { label: 'Fixed wastewater charges', badge: 'Fixed' },
  { label: 'Surface water drainage charges', badge: 'Review' },
  { label: 'Highway drainage charges', badge: 'Review' },
  { label: 'Trade effluent charges (where applicable)', badge: 'Specialist' },
  { label: 'Metering & administration charges', badge: 'Fixed' },
];

export default function UnderstandingChargesSection() {
  return (
    <section id="charges" className="scroll-mt-[170px] bg-white px-6 lg:px-14 py-10">
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-8">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            Most of your bill isn&apos;t actually negotiable
          </p>
          <h2 className="font-serif-num text-[28px] md:text-[44px] font-semibold text-ink tracking-[-0.5px] leading-[1.12] mb-4">
            Understanding what&apos;s on a commercial water bill.
          </h2>
          <p className="text-[15px] md:text-[17px] text-muted leading-[1.7] font-light max-w-[680px]">
            Unlike electricity and gas, much of a commercial water charge is regulated — wholesale water and
            wastewater charges are set annually across the industry. The real opportunities are often in the
            account, not the rate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] items-start">
          {/* Receipt */}
          <div className="relative bg-off border border-border-color rounded-r overflow-hidden">
            {/* Decorative stripe — top */}
            <div className="h-[10px] bg-[repeating-linear-gradient(45deg,#F6F8FB_0px_6px,transparent_6px_12px)]" />

            {billLines.map((line, i) => (
              <div
                key={line.label}
                className={`flex items-center justify-between px-[26px] py-[14px] ${
                  i < billLines.length - 1 ? 'border-b border-dashed border-[#BCC7D4]' : ''
                }`}
              >
                <span className="text-[13.5px] font-semibold text-[#33414F]">{line.label}</span>
                <span className="text-[11px] font-bold text-brand-orange bg-orange-tint px-[9px] py-[3px] rounded-[30px] whitespace-nowrap ml-3 flex-shrink-0">
                  {line.badge}
                </span>
              </div>
            ))}

            <div className="px-[26px] pt-[18px] pb-[12px] text-[12.5px] text-muted font-light leading-[1.6] border-t border-border-color mt-[6px]">
              A typical commercial water bill, broken down. Lines marked &ldquo;Review&rdquo; or
              &ldquo;Specialist&rdquo; are where billing validation tends to uncover the most.
            </div>

            {/* Decorative stripe — bottom */}
            <div className="h-[10px] bg-[repeating-linear-gradient(45deg,#F6F8FB_0px_6px,transparent_6px_12px)] border-t border-border-color" />
          </div>

          {/* Callout */}
          <div className="bg-navy rounded-r px-[28px] py-[30px] relative overflow-hidden">
            <div className="absolute w-[200px] h-[200px] rounded-full bg-brand-orange/20 -top-[90px] -right-[60px] pointer-events-none" />
            <h3 className="font-serif-num text-[24px] font-semibold text-white mb-[12px] relative z-[1]">
              Where savings actually hide
            </h3>
            <p className="text-[14px] text-white/60 leading-[1.8] font-light relative z-[1]">
              Because wholesale charges are regulated, the greatest opportunities for savings and cost
              recovery are usually found through account reviews, billing validation, and charge
              verification — not just retailer switching.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
