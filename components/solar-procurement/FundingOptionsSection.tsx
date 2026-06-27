const fundingOptions = [
  {
    tag: 'Own it from day one',
    title: 'Outright Purchase',
    desc: 'Full ownership of the solar asset, with the greatest long-term return once the system has paid back.',
  },
  {
    tag: 'Zero capital outlay',
    title: 'Power Purchase Agreement',
    desc: 'A third party funds and owns the system. You simply purchase the electricity it generates at an agreed rate.',
  },
  {
    tag: 'Lower upfront cost',
    title: 'Solar Lease Arrangements',
    desc: 'Structured financing designed to reduce the capital required to get a system installed.',
  },
  {
    tag: 'Subject to suitability',
    title: 'Fully Funded Solutions',
    desc: 'Certain projects may qualify for funded solutions designed to minimise upfront investment entirely.',
  },
];

export default function FundingOptionsSection() {
  return (
    <section id="funding" className="scroll-mt-[0] bg-navy px-6 lg:px-14 py-12 relative overflow-hidden">
      {/* Amber glow – no inline style */}
      <div className="absolute -top-[200px] -right-[160px] w-[560px] h-[560px] rounded-full bg-[#F2A93B]/[0.16] blur-[80px] pointer-events-none" />

      <div className="max-w-[1180px] mx-auto relative z-[1]">
        <div className="text-center mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[2.5px] mb-[14px] text-[#F2A93B]">
            Not every business wants to fund it outright
          </p>
          <h2 className="font-serif-num text-[32px] font-semibold text-white tracking-[-0.5px] leading-[1.12] mb-4">
            Four ways to structure your solar project
          </h2>
          <p className="text-[17px] text-white/50 leading-[1.7] font-light max-w-[720px] mx-auto">
            We help you understand the advantages and trade-offs of each route before you commit to one.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {fundingOptions.map((opt) => (
            <div
              key={opt.title}
              className="bg-white/[0.05] border border-white/[0.12] rounded-r px-[22px] py-[26px] flex flex-col transition-all duration-[250ms] hover:-translate-y-[3px] hover:border-[#F2A93B] hover:bg-white/[0.08]"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.6px] text-[#F2A93B] mb-3">{opt.tag}</p>
              <h4 className="text-[16px] font-bold text-white mb-2 leading-[1.25]">{opt.title}</h4>
              <p className="text-[13px] text-white/50 leading-[1.65] font-light flex-grow">{opt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
