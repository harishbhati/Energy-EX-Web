import Link from 'next/link';
import { Zap, Flame, Sun, Plug, LucideIcon } from 'lucide-react';

type Service = {
  id: string;
  Icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  href: string;
  linkLabel: string;
  imageUrl: string;
  imageAlt: string;
  badge: string;
  badgeGold?: boolean;
  reverse?: boolean;
};

const services: Service[] = [
  {
    id: 'electricity',
    Icon: Zap,
    title: 'Electricity Procurement',
    description:
      'Most businesses are overpaying for electricity — often without realising it. As a fully independent broker, we compare 20+ suppliers and present clear, like-for-like quotes with no hidden charges. Whether you\'re a single-site SME or a multi-site corporate, we tailor the contract type to exactly how your business uses power.',
    tags: ['Half-hourly (HH)', 'Non-half-hourly', 'Fixed contracts', 'Flexible purchasing', 'Corporate energy', 'SME energy'],
    href: '/electricity-procurement',
    linkLabel: 'View electricity services →',
    imageUrl: 'https://images.pexels.com/photos/4254165/pexels-photo-4254165.jpeg?auto=compress&cs=tinysrgb&w=700',
    imageAlt: 'Electricity procurement',
    badge: 'Primary Service',
    reverse: false,
  },
  {
    id: 'gas',
    Icon: Flame,
    title: 'Gas Procurement',
    description:
      "We're an independent gas brokerage — loyal to you, not any supplier. Our dedicated account managers work across the market to find the most competitive rates for your business, then stay with you through the full contract period. You'll never miss a renewal or get rolled onto an expensive out-of-contract rate again.",
    tags: ['Fixed rate contracts', 'Flexible contracts', 'All business sizes', 'Contract renewal management'],
    href: '/gas-procurement',
    linkLabel: 'View gas services →',
    imageUrl: 'https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=700',
    imageAlt: 'Gas procurement',
    badge: 'Gas',
    reverse: true,
  },
  {
    id: 'solar',
    Icon: Sun,
    title: 'Solar Procurement',
    description:
      'Two routes to solar for your business. Buy the system outright and own it from day one, or choose our zero-upfront PPA (Power Purchase Agreement) — a funder installs the panels at no cost to you, and you simply buy the electricity they generate at a locked-in rate below your current tariff. Either way, your bills go down.',
    tags: ['Buy outright', 'PPA — £0 upfront', 'Funder & installer network', 'Commercial properties'],
    href: '/solar-procurement',
    linkLabel: 'View solar options →',
    imageUrl: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=700',
    imageAlt: 'Solar panels',
    badge: '★ Recommended',
    badgeGold: true,
    reverse: false,
  },
  {
    id: 'new-connections',
    Icon: Plug,
    title: 'New Connections',
    description:
      'Fitting out a new unit or extending an existing site? Our in-house team handles every stage of setting up a new electricity or gas supply — including adding meters for landlords with changing layouts. We prepare and submit the application, then liaise directly with the gas and electricity boards from start to installation, so approvals move faster than if you went it alone.',
    tags: ['New electricity supply', 'New gas supply', 'Additional meters', 'HH & NHH meter types', 'Landlord upgrades'],
    href: '/new-connections',
    linkLabel: 'View new connections →',
    imageUrl: 'https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=700',
    imageAlt: 'New electrical connections',
    badge: 'New Connections',
    reverse: true,
  },
];

function ServiceCard({ service }: { service: Service }) {
  const { Icon } = service;

  const imageCol = (
    <div className="relative w-[360px] flex-shrink-0 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={service.imageUrl} alt={service.imageAlt} className="w-full h-full object-cover" />
      <div
        className="absolute inset-0"
        style={{ background: service.reverse ? 'linear-gradient(to left, rgba(13,27,42,0.4) 0%, transparent 60%)' : 'linear-gradient(to right, rgba(13,27,42,0.4) 0%, transparent 60%)' }}
      />
      <span
        className={`absolute top-4 left-4 text-[10px] font-bold px-[14px] py-[5px] rounded-[4px] uppercase tracking-[0.8px] text-white backdrop-blur-[6px] ${service.badgeGold ? 'bg-[rgba(184,134,11,0.9)]' : 'bg-[rgba(232,98,10,0.9)]'}`}
      >
        {service.badge}
      </span>
    </div>
  );

  const contentCol = (
    <div className="flex flex-col justify-center p-[40px_44px]">
      <div className="w-10 h-10 rounded-[10px] bg-orange-tint flex items-center justify-center mb-4">
        <Icon size={20} className="text-brand-orange" />
      </div>
      <h3 className="font-serif-num text-[34px] font-semibold text-ink leading-[1.08] tracking-[-0.5px] mb-3">
        {service.title}
      </h3>
      <p className="text-muted text-[15px] leading-[1.8] font-light mb-[22px]">
        {service.description}
      </p>
      <div className="flex flex-wrap gap-[7px] mb-6">
        {service.tags.map((tag) => (
          <span key={tag} className="text-xs font-medium text-ink-soft bg-off border border-border-color px-[14px] py-[5px] rounded-[30px]">
            {tag}
          </span>
        ))}
      </div>
      <Link href={service.href} className="inline-flex items-center gap-[7px] text-[14.5px] font-bold text-brand-orange hover:gap-3 transition-all duration-200">
        {service.linkLabel}
      </Link>
    </div>
  );

  return (
    <div
      id={service.id}
      className="grid overflow-hidden rounded-rl border-2 border-border-color hover:border-brand-orange hover:shadow-sh2 hover:-translate-y-[3px] transition-all duration-300 scroll-mt-[170px]"
      style={{ gridTemplateColumns: service.reverse ? '1fr 360px' : '360px 1fr' }}
    >
      {service.reverse ? <>{contentCol}{imageCol}</> : <>{imageCol}{contentCol}</>}
    </div>
  );
}

export default function ServicesList() {
  return (
    <section className="py-[88px] px-14 bg-white">
      <div className="max-w-[1180px] mx-auto">
        {/* Section header */}
        <div className="mb-8">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            Energy Services
          </p>
          <h2 className="font-serif-num text-[44px] font-semibold text-ink tracking-[-0.5px] leading-[1.12] mb-4">
            Four ways we cut your energy costs.
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] font-light max-w-[580px]">
            Browse below and click through for the full detail on any service.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
