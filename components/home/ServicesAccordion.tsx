'use client';

import { useState } from 'react';
import { Zap, Flame, Sun, Droplets, Building2, Sparkles, Plus, type LucideIcon } from 'lucide-react';

type Badge = { text: string; variant: 'orange' | 'gold' | 'green' };

type Service = {
  num: string;
  Icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  title: string;
  badge?: Badge;
  subtitle: string;
  tags: string[];
  description: string;
  linkText: string;
  linkHref: string;
  image: string;
  imageAlt: string;
};

const services: Service[] = [
  {
    num: '01',
    Icon: Zap,
    iconBg: 'var(--orange-tint)',
    iconColor: 'var(--orange)',
    title: 'Electricity procurement',
    badge: { text: 'Most popular', variant: 'orange' },
    subtitle: 'The biggest cost for most businesses — and where we find the biggest savings.',
    tags: ['Corporate', 'SME', 'Half-hourly', 'Flexible'],
    description:
      "Whether you're a large corporate, an SME or need half-hourly metering, we find the right electricity contract for your business — at the best available rate, fully managed from quote to switch.",
    linkText: 'Explore electricity procurement →',
    linkHref: '/electricity-procurement',
    image:
      'https://images.pexels.com/photos/4254165/pexels-photo-4254165.jpeg?auto=compress&cs=tinysrgb&w=500',
    imageAlt: 'Electricity',
  },
  {
    num: '02',
    Icon: Flame,
    iconBg: '#FFEDE0',
    iconColor: 'var(--orange)',
    title: 'Gas procurement',
    subtitle: "Competitive business gas rates from the UK's leading suppliers, fully managed.",
    tags: ['Fixed', 'Flexible', 'All sizes'],
    description:
      'Stop overpaying on business gas. We compare rates from all approved UK suppliers and handle the entire switch — you simply approve the deal and start saving.',
    linkText: 'Explore gas procurement →',
    linkHref: '/gas-procurement',
    image:
      'https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=500',
    imageAlt: 'Gas',
  },
  {
    num: '03',
    Icon: Sun,
    iconBg: '#FFF3D6',
    iconColor: '#b8860b',
    title: 'Solar procurement',
    badge: { text: 'New', variant: 'gold' },
    subtitle: 'Buy your panels outright or go solar with zero upfront cost through a PPA.',
    tags: ['Purchase', 'PPA funding', 'Zero upfront'],
    description:
      'Solar is no longer just for big corporations. Buy your panels outright with our competitive quotes, or access a fully funded PPA with zero upfront cost through our network of installers and funders.',
    linkText: 'Explore solar options →',
    linkHref: '/solar-procurement',
    image:
      'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=500',
    imageAlt: 'Solar',
  },
  {
    num: '04',
    Icon: Droplets,
    iconBg: '#E6F4FF',
    iconColor: '#1a6bbd',
    title: 'Water & Waste',
    subtitle: 'The savings most businesses never claim — we find them, just like with energy.',
    tags: ['Water', 'Waste', 'Multi-site', 'Compliance'],
    description:
      'Water deregulation means better deals exist — most businesses never claim them. And rising waste costs mean your collection contract is likely overdue a review. We handle both.',
    linkText: 'Explore water & waste →',
    linkHref: '/water-procurement',
    image:
      'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=500',
    imageAlt: 'Water',
  },
  {
    num: '05',
    Icon: Building2,
    iconBg: 'rgba(184,134,11,0.12)',
    iconColor: '#b8860b',
    title: 'Property management',
    badge: { text: 'Signature', variant: 'gold' },
    subtitle: 'One partner for every utility across your entire property portfolio.',
    tags: ['Multi-site', 'Landlords', 'Developers', 'Renewals'],
    description:
      'Managing utilities across multiple properties means juggling different suppliers, contracts and renewal dates. We take all of it off your plate — one contact for every utility across every property, with complete oversight.',
    linkText: 'Explore property management →',
    linkHref: '/property-management',
    image:
      'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=500',
    imageAlt: 'Property management',
  },
  {
    num: '06',
    Icon: Sparkles,
    iconBg: 'var(--green-tint)',
    iconColor: 'var(--green)',
    title: 'Facility & cleaning',
    badge: { text: 'Now expanding', variant: 'green' },
    subtitle: 'Our newest service — professional cleaning and facility management for businesses.',
    tags: ['Commercial cleaning', 'Window cleaning', 'Deep cleaning', 'Landscaping'],
    description:
      'Drawing on 13 years of energy expertise, our clients asked us to help with their facilities too. We now provide professional commercial cleaning, window cleaning, deep cleaning and landscaping for offices, hotels and industrial premises.',
    linkText: 'Explore facility services →',
    linkHref: '/cleaning',
    image:
      'https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=500',
    imageAlt: 'Cleaning',
  },
];

const badgeStyles: Record<Badge['variant'], React.CSSProperties> = {
  orange: {
    background: 'var(--orange-tint)',
    color: 'var(--orange)',
    border: '1px solid rgba(232,98,10,0.2)',
  },
  gold: {
    background: 'rgba(184,134,11,0.1)',
    color: 'var(--gold)',
    border: '1px solid rgba(184,134,11,0.25)',
  },
  green: {
    background: 'var(--green-tint)',
    color: 'var(--green)',
    border: '1px solid rgba(10,138,90,0.25)',
  },
};

export default function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? -1 : i);

  return (
    <section className="px-6 md:px-14 py-10">
      <div className="max-w-[1180px] mx-auto">
        {/* Header */}
        <div className="text-center mb-[22px]">
          <div className="text-[11px] font-bold uppercase tracking-[2.5px] mb-[14px] text-center text-brand-orange">
            What we do
          </div>
          <h2 className="font-serif-num mb-4 text-[28px] sm:text-[36px] md:text-[44px] font-semibold text-ink tracking-[-0.5px] leading-[1.12]">
            Everything your business needs, under one roof
          </h2>
          <p className="mx-auto max-w-[560px] text-[15px] md:text-[17px] text-muted leading-[1.7] font-light">
            Click any service to explore. From electricity to solar, we find the best deal and
            manage the full journey.
          </p>
        </div>

        {/* Accordion rows */}
        <div className="flex flex-col gap-[14px]">
          {services.map((svc, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={svc.num}
                className="bg-white rounded-[var(--rl)] overflow-hidden cursor-pointer transition-all duration-300"
                style={{
                  border: `1px solid ${isOpen ? 'var(--orange)' : 'var(--border)'}`,
                  boxShadow: isOpen ? 'var(--sh)' : 'none',
                }}
                onClick={() => toggle(i)}
                onMouseEnter={(e) => {
                  if (!isOpen) e.currentTarget.style.borderColor = 'var(--orange)';
                }}
                onMouseLeave={(e) => {
                  if (!isOpen) e.currentTarget.style.borderColor = 'var(--border)';
                }}
              >
                {/* Row head */}
                <div className="flex items-center gap-3 md:gap-6 px-4 md:px-8 py-5 md:py-7">
                  {/* Number — hidden on mobile */}
                  <div className="hidden md:block font-serif-num flex-shrink-0 w-14 text-[42px] font-bold text-brand-orange leading-none">
                    {svc.num}
                  </div>
                  {/* Icon */}
                  <div
                    className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: svc.iconBg }}
                  >
                    <svc.Icon size={20} style={{ color: svc.iconColor }} />
                  </div>
                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif-num flex flex-wrap items-center gap-[8px] mb-[3px] text-[17px] md:text-[26px] font-semibold text-ink tracking-[-0.3px]">
                      {svc.title}
                      {svc.badge && (
                        <span
                          className="text-[10px] font-bold px-[10px] py-[3px] rounded tracking-[0.5px] uppercase"
                          style={badgeStyles[svc.badge.variant]}
                        >
                          {svc.badge.text}
                        </span>
                      )}
                    </h3>
                    <p className="text-[13px] md:text-[14.5px] text-muted font-light leading-[1.4]">
                      {svc.subtitle}
                    </p>
                  </div>
                  {/* Plus */}
                  <div
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={
                      isOpen
                        ? {
                            background: 'var(--orange)',
                            border: '1.5px solid var(--orange)',
                            color: '#fff',
                            transform: 'rotate(45deg)',
                          }
                        : {
                            background: 'transparent',
                            border: '1.5px solid var(--border)',
                            color: 'var(--muted)',
                          }
                    }
                  >
                    <Plus size={16} />
                  </div>
                </div>

                {/* Expandable body */}
                <div
                  className="overflow-hidden transition-all duration-[400ms] ease-in-out"
                  style={{ maxHeight: isOpen ? '320px' : '0' }}
                >
                  <div className="grid gap-6 md:gap-8 items-center px-4 pb-5 md:pb-8 md:pl-24 md:pr-8 grid-cols-1 md:grid-cols-[1.5fr_1fr]">
                    <div>
                      <div className="flex gap-2 flex-wrap mb-[14px] md:mb-[18px]">
                        {svc.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-medium rounded-[30px] px-[13px] py-[5px] text-ink-soft bg-off border border-[color:var(--border)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="mb-[14px] md:mb-[18px] text-sm text-muted leading-[1.7]">
                        {svc.description}
                      </p>
                      <a
                        href={svc.linkHref}
                        className="inline-flex items-center gap-1.5 font-semibold hover:gap-2 transition-all duration-200 text-sm text-brand-orange"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {svc.linkText}
                      </a>
                    </div>
                    <div className="hidden md:block rounded-[var(--r)] overflow-hidden h-[160px]">
                      <img
                        src={svc.image}
                        alt={svc.imageAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
