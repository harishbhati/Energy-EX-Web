const steps = [
  {
    num: '01',
    title: 'Portfolio Review',
    desc: `We gather your current contracts, account details, and supplier information across every site and
    utility — creating a single structured overview of what you have in place.`,
  },
  {
    num: '02',
    title: 'Market Tendering',
    desc: `We go to market on your behalf, obtaining competitive rates across energy, water, waste, and
    facilities services — comparing suppliers against your actual consumption and requirements.`,
  },
  {
    num: '03',
    title: 'Recommendations & Placement',
    desc: `We present clear recommendations for each utility and service, handle the contract placement, and
    ensure smooth transitions between suppliers where changes are being made.`,
  },
  {
    num: '04',
    title: 'Ongoing Management',
    desc: `Post-placement, we remain your point of contact for billing queries, supplier issues, meter
    problems, and any changes needed across the portfolio.`,
  },
  {
    num: '05',
    title: 'Portfolio Reporting',
    desc: `Consolidated reporting across all sites, giving visibility over costs, consumption, contract
    status, and renewal dates — in one place, not buried across multiple supplier portals.`,
  },
  {
    num: '06',
    title: 'Renewal Planning',
    desc: `We monitor contract end dates and initiate the renewal process at the right time — so you are
    never caught by auto-renewal at out-of-market rates.`,
  },
];

export default function PropertyProcessSection() {
  return (
    <section id="process" className="scroll-mt-[170px] bg-white px-6 lg:px-14 py-10">
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-8">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            How it works
          </p>
          <h2 className="font-serif-num text-[36px] lg:text-[44px] font-semibold text-ink tracking-[-0.5px] leading-[1.12] mb-4">
            A structured process for every portfolio.
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] font-light max-w-[640px]">
            From initial review through ongoing management, we follow a consistent approach across every
            client and every utility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-off border border-border-color rounded-r px-[24px] py-[26px] transition-all duration-[250ms] hover:border-brand-orange hover:shadow-sh hover:-translate-y-[2px]"
            >
              <div className="w-[40px] h-[40px] rounded-[10px] bg-brand-orange flex items-center justify-center mb-[14px]">
                <span className="font-serif-num text-[14px] font-bold text-white">{step.num}</span>
              </div>
              <h4 className="text-[15px] font-bold text-ink mb-[8px]">{step.title}</h4>
              <p className="text-[13px] text-muted leading-[1.65] font-light">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
