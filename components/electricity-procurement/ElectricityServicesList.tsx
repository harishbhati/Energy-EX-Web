import { RefreshCw, Building2, ShoppingBag, Clock, LucideIcon } from 'lucide-react';

type ServicePill = { label: string; title: string; desc: string };

type Service = {
  num: string;
  id: string;
  Icon: LucideIcon;
  title: string;
  badge: string;
  badgeVariant?: 'orange' | 'gold' | 'green';
  description: string;
  tags: string[];
  pills: ServicePill[];
  imageUrl: string;
  imageAlt: string;
};

const services: Service[] = [
  {
    num: '01',
    id: 'flexible',
    Icon: RefreshCw,
    title: 'Flexible Electricity Contracts',
    badge: 'Flexible',
    description:
      "Not all businesses suit a fixed contract. Flexible purchasing lets you buy electricity in tranches — locking portions of your usage at favourable market windows. We advise on when to buy, manage the strategy, and absorb the complexity so you benefit from market lows without real-time exposure.",
    tags: ['Fixed-price contracts', 'Flexible purchasing', 'Blend & extend', 'Seasonal contracts'],
    pills: [
      { label: 'Contract type', title: 'Fixed-Price', desc: 'Lock in a unit rate for 12–36 months for full cost certainty.' },
      { label: 'Strategy', title: 'Flexible Purchasing', desc: 'Buy in tranches as the market moves in your favour.' },
      { label: 'Blend', title: 'Blend & Extend', desc: 'Restructure mid-contract without early-exit penalties.' },
    ],
    imageUrl: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=300',
    imageAlt: 'Flexible electricity contracts',
  },
  {
    num: '02',
    id: 'corporate',
    Icon: Building2,
    title: 'Corporate Energy Procurement',
    badge: 'Corporate',
    badgeVariant: 'gold',
    description:
      "For larger or multi-site businesses, electricity procurement is complex. We act as your Third-Party Intermediary (TPI), managing supplier relationships, contract timing, and portfolio strategy across all your sites — with quarterly market reviews and a dedicated account manager throughout.",
    tags: ['Multi-site portfolios', 'TPI advisory', 'Market timing', 'Quarterly reviews'],
    pills: [
      { label: 'Procurement', title: 'Portfolio Strategy', desc: 'Structured buying plan for complex, high-volume users.' },
      { label: 'Advisory', title: 'TPI Services', desc: 'Independent advice from a regulated, accredited broker.' },
      { label: 'Intelligence', title: 'Market Timing', desc: 'Buy at optimal windows based on forward curve analysis.' },
    ],
    imageUrl: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=300',
    imageAlt: 'Corporate energy procurement',
  },
  {
    num: '03',
    id: 'sme',
    Icon: ShoppingBag,
    title: 'SME Electricity Procurement',
    badge: 'SME',
    description:
      "Small and medium-sized businesses deserve the same market access as large corporates — and with us, you get it. We compare 20+ suppliers on your behalf, present clear like-for-like quotes with no small print, and handle the switch end-to-end. No consultant fees. No long tie-ins.",
    tags: ['20+ suppliers compared', '24-hour quotes', 'Simple switching', 'Renewal alerts'],
    pills: [
      { label: 'Comparison', title: 'Like-for-Like Quotes', desc: 'Clear, comparable quotes — no jargon, no hidden charges.' },
      { label: 'Speed', title: '24-Hour Turnaround', desc: 'Market quotes back to you within one working day.' },
      { label: 'Renewals', title: 'Renewal Management', desc: "Alerts when your contract is due — never roll onto SVT again." },
    ],
    imageUrl: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300',
    imageAlt: 'SME electricity procurement',
  },
  {
    num: '04',
    id: 'hh',
    Icon: Clock,
    title: 'Half-Hourly (HH) Meters',
    badge: 'HH Metering',
    badgeVariant: 'green',
    description:
      "Sites consuming over 100MWh per year are legally required to have half-hourly metering (P272 mandated). We manage the meter installation, data collection, and supplier negotiations for HH sites — and use the granular 30-minute consumption data to identify demand peaks you can reduce to cut your bill.",
    tags: ['P272 mandated', 'HH data collection', 'Demand profiling', 'Settlement management'],
    pills: [
      { label: 'Data', title: 'Half-Hourly Data', desc: '48 readings per day for granular consumption insight.' },
      { label: 'Compliance', title: 'P272 Mandated', desc: 'Managed compliance for sites above the 100MWh threshold.' },
      { label: 'Savings', title: 'Demand Profiling', desc: 'Identify and reduce expensive peak-demand windows.' },
    ],
    imageUrl: 'https://images.pexels.com/photos/9100/pexels-photo-9100.jpeg?auto=compress&cs=tinysrgb&w=300',
    imageAlt: 'Half-hourly electricity meters',
  },
];

function ServiceRow({ service, isEven }: { service: Service; isEven: boolean }) {
  const badgeStyle =
    service.badgeVariant === 'gold'
      ? { background: 'rgba(184,134,11,0.12)', color: '#B8860B' }
      : service.badgeVariant === 'green'
      ? { background: '#E8F8F1', color: '#0A8A5A' }
      : { background: '#FFF1E8', color: '#CC5208' };

  return (
    <div
      id={service.id}
      className="scroll-mt-[170px]"
      style={{
        display: 'grid',
        gridTemplateColumns: '50px 150px 1fr',
        gap: '26px',
        alignItems: 'flex-start',
        padding: '34px 32px',
        background: isEven ? '#F6F8FB' : '#fff',
      }}
    >
      {/* Number */}
      <div
        className="font-serif-num text-brand-orange leading-[1.1]"
        style={{ fontSize: 38, fontWeight: 700 }}
      >
        {service.num}
      </div>

      {/* Thumbnail */}
      <div
        className="relative overflow-hidden flex-shrink-0"
        style={{ width: 150, height: 106, borderRadius: 12 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={service.imageUrl}
          alt={service.imageAlt}
          className="w-full h-full object-cover block"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(160deg, rgba(13,27,42,0.05), rgba(232,98,10,0.18))' }}
        />
      </div>

      {/* Body */}
      <div className="min-w-0">
        <div className="flex items-center gap-[10px] mb-2 flex-wrap">
          <h3
            className="font-serif-num text-ink tracking-[-0.2px]"
            style={{ fontSize: 25, fontStyle: 'italic', fontWeight: 600 }}
          >
            {service.title}
          </h3>
          <span
            className="text-[10px] font-bold px-[10px] py-[3px] rounded-[4px] uppercase tracking-[0.5px]"
            style={badgeStyle}
          >
            {service.badge}
          </span>
        </div>
        <p className="text-[14px] text-muted leading-[1.75] font-light mb-[10px] max-w-[660px]">
          {service.description}
        </p>
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
        <div
          className="mt-4"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 10 }}
        >
          {service.pills.map((pill) => (
            <div
              key={pill.title}
              className="bg-white border-2 border-border-color"
              style={{ borderRadius: 10, padding: '13px 16px' }}
            >
              <p
                className="text-[10px] font-bold text-brand-orange uppercase mb-[3px]"
                style={{ letterSpacing: '0.6px' }}
              >
                {pill.label}
              </p>
              <h4 className="text-[13px] font-bold text-ink mb-[2px]">{pill.title}</h4>
              <p className="text-[12px] text-muted font-light leading-[1.5] m-0">{pill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ElectricityServicesList() {
  return (
    <section className="py-[88px] px-14 bg-white">
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-8">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            Electricity Services
          </p>
          <h2 className="font-serif-num text-[44px] font-semibold text-ink tracking-[-0.5px] leading-[1.12] mb-4">
            Four routes to a better electricity contract.
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] font-light max-w-[580px]">
            Every business has different needs. Here's how we approach each type.
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
