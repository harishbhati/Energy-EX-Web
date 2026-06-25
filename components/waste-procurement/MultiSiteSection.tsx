import { Map, TrendingDown, Receipt, LucideIcon } from 'lucide-react';

const rows: { Icon: LucideIcon; title: string; desc: string; tags: string[] }[] = [
  {
    Icon: Map,
    title: 'Multi-Site Waste Management',
    desc: `Centralised support for property management companies, commercial landlords, hospitality groups, care home operators, retail chains, and industrial businesses.`,
    tags: ['Contract tracking', 'Portfolio reporting', 'Renewal planning'],
  },
  {
    Icon: TrendingDown,
    title: 'Contract Reviews & Cost Optimisation',
    desc: `Identifying oversized containers, underutilised collections, excessive weight allowances, unnecessary charges, and opportunities for improved recycling performance.`,
    tags: ['Oversized containers', 'Unused capacity', 'Recycling gains'],
  },
  {
    Icon: Receipt,
    title: 'Invoice & Administration Support',
    desc: `Consolidated procurement exercises, site additions and removals, and invoice support — giving greater visibility and consistency across an entire portfolio.`,
    tags: ['Site additions', 'Invoice support', 'Consolidated procurement'],
  },
];

export default function MultiSiteSection() {
  return (
    <section className="scroll-mt-[170px] bg-white px-6 lg:px-14 py-10">
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-8">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            Beyond a single waste contract
          </p>
          <h2 className="font-serif-num text-[44px] font-semibold text-ink tracking-[-0.5px] leading-[1.12] mb-4">
            Multi-site management &amp; cost optimisation.
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] font-light max-w-[680px]">
            The lowest price doesn&apos;t always represent the best value — our focus is on making sure the
            service matches how a site actually operates.
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
