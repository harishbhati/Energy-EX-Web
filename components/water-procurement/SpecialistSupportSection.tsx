import { CloudRain, Home, Factory, Map, LucideIcon } from 'lucide-react';

const rows: {
  Icon: LucideIcon;
  title: string;
  desc: string;
  tags: string[];
}[] = [
  {
    Icon: CloudRain,
    title: 'Surface Water Drainage Reviews',
    desc: `Surface water drainage charges can be a significant cost for some commercial properties. We help assess whether your current charging structure accurately reflects your site.`,
    tags: ['Reductions', 'Amendments', 'Reassessments'],
  },
  {
    Icon: Home,
    title: 'Vacancy & Unoccupied Property Support',
    desc: `Vacant properties create unnecessary utility costs if accounts aren't managed correctly. We assist landlords and portfolio owners with vacant property reviews, account transfers, and occupancy investigations.`,
    tags: ['Vacant reviews', 'Account transfers', 'Occupancy checks'],
  },
  {
    Icon: Factory,
    title: 'Wastewater & Trade Effluent Support',
    desc: `Businesses discharging wastewater or trade effluent face additional regulatory considerations. We assist with account reviews, retailer discussions, and discharge charge assessments.`,
    tags: ['Effluent reviews', 'Discharge assessments'],
  },
  {
    Icon: Map,
    title: 'Multi-Site Water Management',
    desc: `Centralised support for property portfolios, hospitality groups, retail chains, care home operators, and industrial businesses — portfolio reporting, contract tracking, and renewal planning included.`,
    tags: ['Portfolio reporting', 'Contract tracking', 'Renewal planning'],
  },
];

export default function SpecialistSupportSection() {
  return (
    <section id="specialist" className="scroll-mt-[170px] bg-off px-6 lg:px-14 py-10">
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-8">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            Beyond standard procurement
          </p>
          <h2 className="font-serif-num text-[44px] font-semibold text-ink tracking-[-0.5px] leading-[1.12] mb-4">
            Specialist support for complex accounts.
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] font-light max-w-[680px]">
            Some water accounts need more than a tender. Here&apos;s where we go further.
          </p>
        </div>

        <div className="flex flex-col gap-[14px]">
          {rows.map((row) => (
            <div
              key={row.title}
              className="flex gap-[22px] items-start bg-white border-[1.5px] border-border-color rounded-r px-[28px] py-[26px] transition-all duration-[250ms] hover:border-brand-orange hover:shadow-sh"
            >
              <div className="w-[52px] h-[52px] rounded-[14px] bg-orange-tint flex items-center justify-center flex-shrink-0">
                <row.Icon size={24} className="text-brand-orange" strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <h4 className="text-[16.5px] font-bold text-ink mb-[6px]">{row.title}</h4>
                <p className="text-[13.5px] text-muted leading-[1.7] font-light mb-[10px]">{row.desc}</p>
                <div className="flex flex-wrap gap-[7px]">
                  {row.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11.5px] font-semibold text-[#33414F] bg-off border border-border-color px-[12px] py-[5px] rounded-[30px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
