import { Lock, RefreshCw, Eye, Building2, LucideIcon } from 'lucide-react';

type ServicePill = { label: string; title: string; desc: string };

type Service = {
  num: string;
  id: string;
  Icon: LucideIcon;
  title: string;
  badge: string;
  badgeVariant: 'orange' | 'gold' | 'green' | 'blue';
  description: string;
  tags?: string[];
  pills?: ServicePill[];
};

const services: Service[] = [
  {
    num: '01',
    id: 'fixed',
    Icon: Lock,
    title: 'Fixed-Price Contracts',
    badge: 'Budget certainty',
    badgeVariant: 'orange',
    description:
      "Fixed contracts lock in gas rates for an agreed period, typically between one and three years, helping businesses manage forecasting and protect themselves from market volatility. This is the most common route for businesses that value cost certainty over flexibility.",
    tags: ['1–3 year terms', 'Predictable budgeting', 'Protection from market swings', 'Renewal management'],
  },
  {
    num: '02',
    id: 'flexible',
    Icon: RefreshCw,
    title: 'Flexible Procurement',
    badge: 'Larger gas users',
    badgeVariant: 'gold',
    description:
      "Rather than purchasing the entire requirement at one point in time, gas can be procured in stages throughout the contract term — spreading purchasing decisions and helping manage market risk. Suitability depends on annual consumption, operational requirements, and risk appetite.",
    pills: [
      { label: 'Approach', title: 'Staged Purchasing', desc: 'Buy across the contract term rather than in a single transaction.' },
      { label: 'Approach', title: 'Risk-Managed Buying', desc: 'Balance fixed and variable elements aligned to your risk profile.' },
    ],
  },
  {
    num: '03',
    id: 'passthrough',
    Icon: Eye,
    title: 'Pass-Through Contracts',
    badge: 'Greater transparency',
    badgeVariant: 'blue',
    description:
      "Under pass-through arrangements, certain non-commodity charges are passed through at actual cost rather than being built into a fixed rate. These contracts can offer greater transparency but may expose businesses to movements in industry charges. We advise whether this structure is appropriate for your organisation.",
    tags: ['Transparent cost breakdown', 'Exposure to industry charge movement', 'Suitability assessment'],
  },
  {
    num: '04',
    id: 'multisite',
    Icon: Building2,
    title: 'Multi-Site Gas Management',
    badge: 'Portfolio control',
    badgeVariant: 'green',
    description:
      "For businesses operating across multiple locations, managing gas contracts can become increasingly time-consuming. We provide a centralised management solution covering contract consolidation, portfolio reporting, renewal management, supplier coordination, site additions and removals, and change of tenancy support.",
    tags: ['Contract consolidation', 'Portfolio reporting', 'Renewal management', 'Site additions & removals'],
  },
];

function getBadgeClass(variant: Service['badgeVariant']) {
  const map: Record<Service['badgeVariant'], string> = {
    gold: 'bg-[rgba(184,134,11,0.12)] text-[#B8860B]',
    green: 'bg-green-tint text-[#0A8A5A]',
    blue: 'bg-[#E8F1FC] text-[#1565C0]',
    orange: 'bg-orange-tint text-[#CC5208]',
  };
  return map[variant];
}

function ServiceRow({ service, isEven }: { service: Service; isEven: boolean }) {
  const { Icon } = service;
  return (
    <div
      id={service.id}
      className={`scroll-mt-[170px] grid grid-cols-1 lg:grid-cols-[50px_150px_1fr] gap-[26px] items-start py-[34px] px-6 lg:px-8 ${
        isEven ? 'bg-off' : 'bg-white'
      }`}
    >
      {/* Number */}
      <div className="font-serif-num text-[38px] font-bold text-brand-orange leading-[1.1]">
        {service.num}
      </div>

      {/* Thumbnail — icon in gradient box */}
      <div className="w-full h-[160px] lg:w-[150px] lg:h-[106px] rounded-xl overflow-hidden flex-shrink-0 relative flex items-center justify-center bg-[linear-gradient(160deg,#FFF1E8,#EEF2F7)]">
        <Icon size={46} className="text-brand-orange relative z-[1]" />
        <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(13,27,42,0.05),rgba(232,98,10,0.10))]" />
      </div>

      {/* Body */}
      <div className="min-w-0">
        <div className="flex items-center gap-[10px] mb-2 flex-wrap">
          <h3 className="font-serif-num text-[25px] italic font-semibold text-ink tracking-[-0.2px]">
            {service.title}
          </h3>
          <span className={`text-[10px] font-bold px-[10px] py-[3px] rounded-[4px] uppercase tracking-[0.5px] ${getBadgeClass(service.badgeVariant)}`}>
            {service.badge}
          </span>
        </div>

        <p className="text-[14px] text-muted leading-[1.75] font-light mb-[10px] max-w-[660px]">
          {service.description}
        </p>

        {service.tags && (
          <div className="flex flex-wrap gap-2 mt-[14px]">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="text-[12px] font-semibold text-ink-soft bg-white border border-border-color px-[13px] py-[6px] rounded-[30px]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {service.pills && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px] mt-4">
            {service.pills.map((pill) => (
              <div key={pill.title} className="bg-white border-2 border-border-color rounded-rs px-4 py-[13px]">
                <p className="text-[10px] font-bold text-brand-orange uppercase tracking-[0.6px] mb-[3px]">
                  {pill.label}
                </p>
                <h4 className="text-[13px] font-bold text-ink mb-[2px]">{pill.title}</h4>
                <p className="text-[12px] text-muted font-light leading-[1.5]">{pill.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function GasServicesList() {
  return (
    <section className="py-10 px-6 lg:px-14 bg-white">
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-8">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            How we procure gas
          </p>
          <h2 className="font-serif-num text-[44px] font-semibold text-ink tracking-[-0.5px] leading-[1.12] mb-4">
            Four contract routes, one independent advisor.
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] font-light max-w-[680px]">
            As an independent utility consultancy, we work on your behalf — not the supplier's. From single sites to large corporate estates, here's how we match the contract to how your business actually consumes gas.
          </p>
        </div>

        <div className="border border-border-color rounded-rl overflow-hidden">
          {services.map((s, i) => (
            <div key={s.id} className={i > 0 ? 'border-t border-border-color' : ''}>
              <ServiceRow service={s} isEven={i % 2 === 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
