const checks = [
  {
    title: 'Historical Billing Records',
    desc: 'Checked for inconsistencies across past invoices.',
  },
  {
    title: 'Surface Drainage Charges',
    desc: 'Verified against the actual characteristics of the site.',
  },
  {
    title: 'Vacant Property Accounts',
    desc: 'Checked for unnecessary charges on unoccupied sites.',
  },
  {
    title: 'Metering & Classifications',
    desc: 'Reviewed against wastewater charging calculations.',
  },
];

export default function BillValidationSection() {
  return (
    <section id="validation" className="scroll-mt-[170px] bg-white px-6 lg:px-14 py-10">
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-8">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            Most businesses assume their bill is correct
          </p>
          <h2 className="font-serif-num text-[28px] md:text-[44px] font-semibold text-ink tracking-[-0.5px] leading-[1.12] mb-4">
            Water bill validation &amp; cost recovery.
          </h2>
          <p className="text-[15px] md:text-[17px] text-muted leading-[1.7] font-light max-w-[680px]">
            In reality, water accounts can contain errors, outdated information, or charges that no longer
            reflect how a site actually operates. We review the detail most retailers won&apos;t flag for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
          {checks.map((check) => (
            <div
              key={check.title}
              className="border-l-[4px] border-l-brand-orange pl-[20px] py-[6px]"
            >
              <h4 className="text-[14.5px] font-bold text-ink mb-[8px]">{check.title}</h4>
              <p className="text-[13px] text-muted font-light leading-[1.6]">{check.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
