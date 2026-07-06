import Link from 'next/link';
import { Zap, Flame, Sun, Plug, type LucideIcon } from 'lucide-react';

type Spec = { label: string; value: string };

type Service = {
  id: string;
  Icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  specs: Spec[];
  href: string;
  linkLabel: string;
  imageUrl: string;
  imageAlt: string;
  plate: string;
};

const services: Service[] = [
  {
    id: 'electricity',
    Icon: Zap,
    eyebrow: 'Primary service',
    title: 'Electricity Procurement',
    description:
      "Most businesses are overpaying for electricity — often without realising it. As a fully independent broker, we compare 20+ suppliers and present clear, like-for-like quotes with no hidden charges, tailored to exactly how your business uses power.",
    specs: [
      { label: 'Meter type', value: 'HH & Non-HH' },
      { label: 'Contract', value: 'Fixed or flexible' },
      { label: 'Best for', value: 'SME to corporate' },
    ],
    href: '/electricity-procurement',
    linkLabel: 'View electricity services →',
    imageUrl: '/images/energy-services.jpg',
    imageAlt: 'Electricity procurement',
    plate: '20+ suppliers',
  },
  {
    id: 'gas',
    Icon: Flame,
    eyebrow: 'Gas',
    title: 'Gas Procurement',
    description:
      "We're an independent gas brokerage — loyal to you, not any supplier. Dedicated account managers find the most competitive rates, then stay with you through the full contract period so you never get rolled onto an out-of-contract rate.",
    specs: [
      { label: 'Contract', value: 'Fixed or flexible' },
      { label: 'Coverage', value: 'All business sizes' },
      { label: 'Renewals', value: 'Tracked for you' },
    ],
    href: '/gas-procurement',
    linkLabel: 'View gas services →',
    imageUrl: '/images/journey-team.jpg',
    imageAlt: 'Gas procurement',
    plate: 'Fully managed',
  },
  {
    id: 'solar',
    Icon: Sun,
    eyebrow: 'Recommended',
    title: 'Solar Procurement',
    description:
      'Two routes to solar for your business — buy the system outright and own it from day one, or choose our zero-upfront PPA, where a funder installs the panels and you simply buy the electricity at a locked-in rate below your current tariff.',
    specs: [
      { label: 'Route', value: 'Buy or PPA' },
      { label: 'Upfront cost', value: '£0 with PPA' },
      { label: 'Property', value: 'Commercial' },
    ],
    href: '/solar-procurement',
    linkLabel: 'View solar options →',
    imageUrl: '/images/solar-panels.jpg',
    imageAlt: 'Solar panels',
    plate: 'Zero upfront',
  },
  {
    id: 'new-connections',
    Icon: Plug,
    eyebrow: 'New connections',
    title: 'New Connections',
    description:
      'Fitting out a new unit or extending a site? Our in-house team prepares and submits the application, then liaises directly with the gas and electricity boards from start to installation — including additional meters for landlord upgrades.',
    specs: [
      { label: 'Supply', value: 'Electricity & gas' },
      { label: 'Meter types', value: 'HH & Non-HH' },
      { label: 'Process', value: 'Application → install' },
    ],
    href: '/new-connections',
    linkLabel: 'View new connections →',
    imageUrl: '/images/facility-services-list.jpg',
    imageAlt: 'New electrical connections',
    plate: 'Start to install',
  },
];

function ServicePanel({ service }: { service: Service }) {
  const { Icon } = service;
  return (
    <div
      id={service.id}
      className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-10 items-center bg-white border border-border-color border-l-4 border-l-brand-orange rounded-[14px] p-6 md:p-[30px_34px] transition-all duration-300 hover:shadow-[0_16px_50px_rgba(13,27,42,0.12)] hover:-translate-y-[3px] scroll-mt-20"
    >
      {/* Circular dial */}
      <div className="relative w-[200px] h-[200px] mx-auto flex-shrink-0">
        {/* Dashed outer ring */}
        <div className="absolute inset-0 rounded-full border border-dashed border-border-color" />
        {/* Image dial */}
        <div className="absolute inset-3 rounded-full overflow-hidden border-4 border-white shadow-[0_0_0_1px_var(--border-strong),0_10px_30px_rgba(13,27,42,0.12)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={service.imageUrl}
            alt={service.imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Plate badge */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 flex items-center gap-[6px] bg-navy text-white/90 text-[9.5px] font-bold uppercase tracking-[1.1px] px-[15px] py-[7px] rounded-[20px] shadow-[0_6px_16px_rgba(13,27,42,0.35)] border border-white/15 whitespace-nowrap">
          <span className="w-[6px] h-[6px] rounded-full bg-brand-orange-soft flex-shrink-0" />
          {service.plate}
        </div>
      </div>

      {/* Content */}
      <div className="min-w-0 pt-4 md:pt-[6px]">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 text-[11px] font-bold text-brand-orange uppercase tracking-[2px] mb-[10px]">
          <Icon size={13} strokeWidth={2.2} />
          {service.eyebrow}
        </div>

        <h3 className="font-serif-num text-[29px] font-semibold text-ink leading-[1.1] tracking-[-0.3px] mb-[9px]">
          {service.title}
        </h3>

        <p className="text-[14.5px] text-muted leading-[1.75] font-light mb-[18px] max-w-[640px]">
          {service.description}
        </p>

        {/* Spec strip */}
        <div className="flex flex-wrap border border-border-color rounded-[10px] overflow-hidden mb-5 bg-off">
          {service.specs.map((spec, i) => (
            <div
              key={spec.label}
              className={`flex-1 min-w-[130px] px-4 py-[10px] ${i < service.specs.length - 1 ? 'border-r border-border-color' : ''}`}
            >
              <div className="text-[9px] font-bold text-muted uppercase tracking-[1.1px] mb-[3px]">
                {spec.label}
              </div>
              <div className="text-[13px] font-semibold text-ink-soft">
                {spec.value}
              </div>
            </div>
          ))}
        </div>

        <Link
          href={service.href}
          className="inline-flex items-center gap-[7px] text-[14px] font-bold text-brand-orange hover:gap-3 transition-all duration-200"
        >
          {service.linkLabel}
        </Link>
      </div>
    </div>
  );
}

export default function ServicesList() {
  return (
    <section className="py-[88px] px-6 md:px-14 bg-white">
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

        {/* Service panels */}
        <div className="flex flex-col gap-[18px]">
          {services.map((s) => (
            <ServicePanel key={s.id} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
