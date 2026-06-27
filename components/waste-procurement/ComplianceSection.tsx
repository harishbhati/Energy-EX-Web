const items = [
  {
    title: 'Waste Transfer Notes',
    desc: 'Documentation kept accurate and audit-ready.',
  },
  {
    title: 'Hazardous Waste Consignment',
    desc: 'Notes managed correctly for specialist streams.',
  },
  {
    title: 'Licensed Waste Carriers',
    desc: 'Confirmed against current carrier licensing.',
  },
  {
    title: 'Segregation Responsibilities',
    desc: 'Aligned with environmental compliance requirements.',
  },
];

export default function ComplianceSection() {
  return (
    <section id="compliance" className="scroll-mt-[0] bg-off px-6 lg:px-14 py-10">
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-8">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            Every business has a legal Duty of Care
          </p>
          <h2 className="font-serif-num text-[44px] font-semibold text-ink tracking-[-0.5px] leading-[1.12] mb-4">
            Compliance &amp; Duty of Care support.
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] font-light max-w-[680px]">
            We work with licensed waste contractors and support businesses in understanding their ongoing
            obligations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
          {items.map((item) => (
            <div key={item.title} className="border-l-[4px] border-l-brand-orange pl-[20px] py-[6px]">
              <h4 className="text-[14.5px] font-bold text-ink mb-[8px]">{item.title}</h4>
              <p className="text-[13px] text-muted font-light leading-[1.6]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
