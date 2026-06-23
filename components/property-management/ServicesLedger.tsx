import {
  Zap,
  Flame,
  Droplets,
  Recycle,
  Sparkles,
  Sun,
  LayoutGrid,
  BarChart2,
  LucideIcon,
} from 'lucide-react';

const rows: {
  Icon: LucideIcon;
  title: string;
  desc: string;
  tag: string;
}[] = [
  {
    Icon: Zap,
    title: 'Electricity',
    desc: `Procurement, contract management, invoice validation, and ongoing support for all electricity supplies across your portfolio.`,
    tag: 'Energy',
  },
  {
    Icon: Flame,
    title: 'Gas',
    desc: `Gas supply procurement and account management, including Half-Hourly and non-Half-Hourly supplies across single and multi-site portfolios.`,
    tag: 'Energy',
  },
  {
    Icon: Droplets,
    title: 'Water',
    desc: `Water supply and wastewater procurement, bill validation, leak queries, and ongoing supplier liaison for business water accounts.`,
    tag: 'Utilities',
  },
  {
    Icon: Recycle,
    title: 'Waste',
    desc: `Waste contract procurement covering general commercial waste, recycling streams, food waste, confidential waste, and hazardous disposal.`,
    tag: 'Compliance',
  },
  {
    Icon: Sparkles,
    title: 'Cleaning & Facilities',
    desc: `Cleaning and facilities service procurement across commercial and residential sites, including specifications, tendering, and contractor management.`,
    tag: 'Facilities',
  },
  {
    Icon: Sun,
    title: 'Solar & Renewables',
    desc: `Renewable energy procurement and advisory services, including solar PV, EV charging, and green tariff options for eligible sites.`,
    tag: 'Renewables',
  },
  {
    Icon: LayoutGrid,
    title: 'Multi-Site Portfolio Management',
    desc: `Centralised procurement, portfolio reporting, contract tracking, site additions and removals, and a single point of contact for every site in your estate.`,
    tag: 'Portfolio',
  },
  {
    Icon: BarChart2,
    title: 'Capacity & Network Connections',
    desc: `Support with electricity capacity management, Half-Hourly meter upgrades, and network connection applications where required.`,
    tag: 'Technical',
  },
];

export default function ServicesLedger() {
  return (
    <section id="services" className="scroll-mt-[170px] bg-off px-6 lg:px-14 py-10">
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-8">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            Services we manage
          </p>
          <h2 className="font-serif-num text-[36px] lg:text-[44px] font-semibold text-ink tracking-[-0.5px] leading-[1.12] mb-4">
            Every utility. One coordinated service.
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] font-light max-w-[640px]">
            We manage procurement and ongoing account support across the full range of utilities and
            services that property portfolios require.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-border-color border border-border-color rounded-r overflow-hidden bg-white">
          {rows.map((row) => (
            <div
              key={row.title}
              className="flex items-start gap-[18px] px-[24px] py-[22px] transition-colors duration-[200ms] hover:bg-orange-tint"
            >
              <div className="w-[42px] h-[42px] rounded-[12px] bg-orange-tint flex items-center justify-center flex-shrink-0">
                <row.Icon size={19} className="text-brand-orange" strokeWidth={1.6} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-[10px] mb-[5px]">
                  <h4 className="text-[14.5px] font-bold text-ink">{row.title}</h4>
                  <span className="text-[10.5px] font-bold text-[#CC5208] bg-orange-tint border border-brand-orange/[0.25] px-[9px] py-[2px] rounded-[30px]">
                    {row.tag}
                  </span>
                </div>
                <p className="text-[13px] text-muted leading-[1.65] font-light">{row.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
