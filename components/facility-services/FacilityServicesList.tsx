import Link from 'next/link';
import {
  Droplets,
  Recycle,
  Building2,
  Sparkles,
  AppWindow,
  Leaf,
  Truck,
  Home,
  LucideIcon,
} from 'lucide-react';

/* ── Sub-services for the Cleaning card ── */
const subServices: { Icon: LucideIcon; label: string; desc: string; href: string }[] = [
  { Icon: Building2, label: 'Commercial Cleaning', desc: 'Offices & business premises', href: '/commercial-cleaning' },
  { Icon: AppWindow, label: 'Window Cleaning', desc: 'All buildings & heights', href: '/window-cleaning' },
  { Icon: Sparkles, label: 'Deep Cleaning', desc: 'Kitchens, floors & washrooms', href: '/deep-cleaning' },
  { Icon: Leaf, label: 'Landscaping', desc: 'Year-round grounds maintenance', href: '/landscaping-services' },
  { Icon: Truck, label: 'Move-In / Move-Out', desc: 'Tenants & landlords', href: '/move-in-move-out-cleaning' },
  { Icon: Home, label: 'Residential Cleaning', desc: 'Homes & apartments', href: '/residential-cleaning' },
];

/* ── Regular service card ── */
type RegularService = {
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
  badgeNavy?: boolean;
  reverse?: boolean;
};

const services: RegularService[] = [
  {
    id: 'water',
    Icon: Droplets,
    title: 'Water Procurement',
    description:
      "Since the UK water market deregulated, business customers can switch water supplier — yet most never have. We handle the entire procurement process, comparing rates across our vetted supplier network so your business isn't leaving money on the table. A simple switch most businesses haven't made.",
    tags: ['Business water supply', 'Supplier comparison', 'Meter management', 'All business types'],
    href: '/water-procurement',
    linkLabel: 'View water services →',
    imageUrl: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=700',
    imageAlt: 'Water procurement',
    badge: 'Water',
    badgeNavy: true,
    reverse: false,
  },
  {
    id: 'waste',
    Icon: Recycle,
    title: 'Waste Procurement',
    description:
      'Waste management is a legal obligation for UK businesses — but it doesn\'t have to be costly or complicated. We compare quotes, services and sustainability credentials across our network of approved waste management suppliers, covering everything from regular collection to hazardous disposal and waste-to-energy solutions.',
    tags: ['Regular waste collection', 'Recycling programmes', 'Hazardous waste disposal', 'Waste-to-energy'],
    href: '/waste-procurement',
    linkLabel: 'View waste services →',
    imageUrl: 'https://images.pexels.com/photos/2768961/pexels-photo-2768961.jpeg?auto=compress&cs=tinysrgb&w=700',
    imageAlt: 'Waste procurement',
    badge: 'Waste',
    badgeNavy: true,
    reverse: true,
  },
  {
    id: 'property',
    Icon: Building2,
    title: 'Property Management',
    description:
      'For landlords, commercial developers and property managers who want complete utility control without the admin. One point of contact manages energy, gas, water and waste procurement across your entire portfolio — tracking every contract, handling every renewal, and dealing directly with suppliers when problems arise.',
    tags: ['Multi-site portfolios', 'HMO management', 'Contract tracking', 'Billing support', 'Landlords & developers'],
    href: '/property-management',
    linkLabel: 'View property management →',
    imageUrl: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=700',
    imageAlt: 'Property management',
    badge: '✦ Specialist',
    badgeGold: true,
    reverse: false,
  },
];

function ServiceCard({ service }: { service: RegularService }) {
  const { Icon } = service;

  const badgeClass = service.badgeGold
    ? 'bg-[rgba(184,134,11,0.9)] text-white'
    : service.badgeNavy
    ? 'bg-[rgba(13,27,42,0.85)] text-white/90'
    : 'bg-[rgba(232,98,10,0.9)] text-white';

  const imageCol = (
    <div className="relative w-[360px] flex-shrink-0 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={service.imageUrl} alt={service.imageAlt} className="w-full h-full object-cover" />
      <div
        className="absolute inset-0"
        style={{
          background: service.reverse
            ? 'linear-gradient(to left, rgba(13,27,42,0.4) 0%, transparent 60%)'
            : 'linear-gradient(to right, rgba(13,27,42,0.4) 0%, transparent 60%)',
        }}
      />
      <span
        className={`absolute top-4 left-4 text-[10px] font-bold px-[14px] py-[5px] rounded-[4px] uppercase tracking-[0.8px] backdrop-blur-[6px] ${badgeClass}`}
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
      <h3 className="font-['Cormorant_Garamond'] text-[34px] font-semibold text-ink leading-[1.08] tracking-[-0.5px] mb-3">
        {service.title}
      </h3>
      <p className="text-muted text-[15px] leading-[1.8] font-light mb-[22px]">
        {service.description}
      </p>
      <div className="flex flex-wrap gap-[7px] mb-6">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium text-ink-soft bg-off border border-border-color px-[14px] py-[5px] rounded-[30px]"
          >
            {tag}
          </span>
        ))}
      </div>
      <Link
        href={service.href}
        className="inline-flex items-center gap-[7px] text-[14.5px] font-bold text-brand-orange hover:gap-3 transition-all duration-200"
      >
        {service.linkLabel}
      </Link>
    </div>
  );

  return (
    <div
      id={service.id}
      className="grid overflow-hidden rounded-rl border-2 border-border-color hover:border-brand-orange hover:shadow-sh2 hover:-translate-y-[3px] transition-all duration-300 scroll-mt-[0]"
      style={{ gridTemplateColumns: service.reverse ? '1fr 360px' : '360px 1fr' }}
    >
      {service.reverse ? (
        <>
          {contentCol}
          {imageCol}
        </>
      ) : (
        <>
          {imageCol}
          {contentCol}
        </>
      )}
    </div>
  );
}

/* ── Cleaning card (special full-width design) ── */
function CleaningCard() {
  return (
    <div
      id="cleaning"
      className="overflow-hidden rounded-rl border-2 border-border-color hover:border-brand-orange hover:shadow-sh2 transition-all duration-300 scroll-mt-[0] bg-white"
    >
      {/* Top: image left + content right */}
      <div className="grid" style={{ gridTemplateColumns: '360px 1fr', minHeight: '280px' }}>
        {/* Image */}
        <div className="relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=700"
            alt="Cleaning services"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(13,27,42,0.4) 0%, transparent 60%)' }}
          />
          <span className="absolute top-4 left-4 text-[10px] font-bold px-[14px] py-[5px] rounded-[4px] uppercase tracking-[0.8px] bg-[rgba(10,138,90,0.9)] text-white backdrop-blur-[6px]">
            ✦ Facility Services
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-[40px_44px]">
          <div className="w-10 h-10 rounded-rs bg-green-tint flex items-center justify-center mb-4">
            <Sparkles size={20} className="text-[#0a8a5a]" />
          </div>
          <h3 className="font-['Cormorant_Garamond'] text-[34px] font-semibold text-ink leading-[1.08] tracking-[-0.5px] mb-3">
            Cleaning Services
          </h3>
          <p className="text-muted text-[15px] leading-[1.8] font-light mb-[22px]">
            Our clients asked, so we delivered. Fully trained and vetted teams available
            evenings, weekends and bank holidays at no extra charge. Eco-friendly products
            safe for children, pets and the planet. Six specialist services under one roof
            — pick what you need or bundle them together.
          </p>
          <div className="flex flex-wrap gap-[7px] mb-6">
            {['Commercial & residential', 'Flexible scheduling', 'Eco-friendly products'].map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-ink-soft bg-off border border-border-color px-[14px] py-[5px] rounded-[30px]"
              >
                {tag}
              </span>
            ))}
          </div>
          <Link
            href="/cleaning-services"
            className="inline-flex items-center gap-[7px] text-[14.5px] font-bold text-[#0a8a5a] hover:gap-3 transition-all duration-200"
          >
            View all cleaning services →
          </Link>
        </div>
      </div>

      {/* Sub-services strip — 6 cols */}
      <div
        className="border-t-2 border-border-color"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)' }}
      >
        {subServices.map((sub, i) => (
          <Link
            key={sub.href}
            href={sub.href}
            className={`flex flex-col items-center text-center p-[18px_16px] hover:bg-green-tint transition-colors duration-200 group ${
              i < 5 ? 'border-r border-border-color' : ''
            }`}
          >
            <div className="w-9 h-9 rounded-[8px] bg-off flex items-center justify-center mb-2 group-hover:bg-[#d1f0e3] transition-colors duration-200">
              <sub.Icon size={18} className="text-muted group-hover:text-[#0a8a5a] transition-colors" />
            </div>
            <h4 className="text-[12.5px] font-bold text-ink mb-[3px] group-hover:text-[#0a8a5a] transition-colors">
              {sub.label}
            </h4>
            <p className="text-[11.5px] text-muted font-light leading-[1.4]">{sub.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ── Section export ── */
export default function FacilityServicesList() {
  return (
    <section className="py-[88px] px-14 bg-white">
      <div className="max-w-[1180px] mx-auto">
        {/* Section header */}
        <div className="mb-8">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            Facility Services
          </p>
          <h2 className="font-['Cormorant_Garamond'] text-[44px] font-semibold text-ink tracking-[-0.5px] leading-[1.12] mb-4">
            Four ways we simplify your property and facilities.
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
          <CleaningCard />
        </div>
      </div>
    </section>
  );
}
