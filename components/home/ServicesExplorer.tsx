'use client';

import { useState } from 'react';
import { Zap, Flame, Sun, Droplets, Building2, Sparkles, ArrowRight, type LucideIcon } from 'lucide-react';

type ServiceStat = { value: string; label: string };

type ServiceTab = {
  id: string;
  Icon: LucideIcon;
  label: string;
  image: string;
  imageAlt: string;
  imageTitle: string;
  imageSubtitle: string;
  cardTitle: string;
  stats: ServiceStat[];
  statsGrid?: string;
  linkText: string;
  linkHref: string;
};

const tabs: ServiceTab[] = [
  {
    id: 'elec',
    Icon: Zap,
    label: 'Electricity',
    image:
      'https://images.pexels.com/photos/162568/electric-towers-during-golden-hour-162568.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Electricity transmission tower',
    imageTitle: 'Electricity procurement',
    imageSubtitle: 'Corporate · SME · Half-hourly · Flexible',
    cardTitle: 'Why businesses choose us for electricity',
    stats: [
      { value: '24hr', label: 'Quote turnaround' },
      { value: '30+', label: 'Suppliers' },
    ],
    statsGrid: 'repeat(2,1fr)',
    linkText: 'Explore electricity',
    linkHref: '/electricity-procurement',
  },
  {
    id: 'gas',
    Icon: Flame,
    label: 'Gas',
    image:
      'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Gas supply infrastructure',
    imageTitle: 'Gas procurement',
    imageSubtitle: 'Fixed & flexible · All business sizes',
    cardTitle: 'Why businesses choose us for gas',
    stats: [
      { value: '25%', label: 'Avg saving' },
      { value: '24hr', label: 'Quote turnaround' },
      { value: '100%', label: 'Independent' },
    ],
    linkText: 'Explore gas',
    linkHref: '/gas-procurement',
  },
  {
    id: 'solar',
    Icon: Sun,
    label: 'Solar',
    image:
      'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Solar panels',
    imageTitle: 'Solar procurement',
    imageSubtitle: 'Buy outright or zero-upfront PPA',
    cardTitle: 'Two ways to go solar with us',
    stats: [
      { value: '2', label: 'Routes' },
      { value: '£0', label: 'PPA upfront' },
      { value: '↓35%', label: 'Bill cut' },
    ],
    linkText: 'Explore solar',
    linkHref: '/solar-procurement',
  },
  {
    id: 'water',
    Icon: Droplets,
    label: 'Water & Waste',
    image:
      'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Water',
    imageTitle: 'Water & Waste',
    imageSubtitle: 'The savings most businesses never claim',
    cardTitle: 'Two more ways we save you money',
    stats: [
      { value: '2', label: 'Services' },
      { value: 'All', label: 'Sizes' },
      { value: '24hr', label: 'Quote' },
    ],
    linkText: 'Explore water & waste',
    linkHref: '/water-procurement',
  },
  {
    id: 'prop',
    Icon: Building2,
    label: 'Property',
    image:
      'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Corporate office building',
    imageTitle: 'Property Management',
    imageSubtitle: 'Complete utility control across your portfolio',
    cardTitle: 'One partner for your whole portfolio',
    stats: [
      { value: '1', label: 'Contact' },
      { value: 'All', label: 'Properties' },
      { value: '100%', label: 'Managed' },
    ],
    linkText: 'Explore property',
    linkHref: '/property-management',
  },
  {
    id: 'clean',
    Icon: Sparkles,
    label: 'Cleaning',
    image:
      'https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Cleaning services',
    imageTitle: 'Facility & cleaning',
    imageSubtitle: 'Commercial cleaning · Window · Deep · Landscaping',
    cardTitle: 'Our newest service line',
    stats: [
      { value: '4', label: 'Services' },
      { value: 'B2B', label: 'Focused' },
      { value: 'All', label: 'Premises' },
    ],
    linkText: 'Explore facility services',
    linkHref: '/cleaning',
  },
];

export default function ServicesExplorer() {
  const [activeId, setActiveId] = useState('elec');
  const active = tabs.find((t) => t.id === activeId)!;
  const cols = active.statsGrid || 'repeat(3,1fr)';

  return (
    <div className="px-6 md:px-14 py-7 bg-off">
      <div className="max-w-[1180px] mx-auto">
        {/* Header */}
        <div className="text-center mb-9">
          <div className="text-[11px] font-bold uppercase tracking-[2.5px] mb-[10px] text-brand-orange">
            Explore our services
          </div>
          <h2 className="font-serif-num text-[26px] md:text-[34px] font-semibold text-ink tracking-[-0.5px]">
            Find what your business needs
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 justify-center flex-wrap mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveId(tab.id)}
              className="inline-flex items-center gap-[7px] rounded-[40px] px-4 md:px-5 py-[8px] md:py-[9px] text-sm font-semibold cursor-pointer transition-all duration-200"
              style={
                activeId === tab.id
                  ? { background: 'var(--orange)', color: '#fff', border: '1.5px solid var(--orange)' }
                  : { background: '#fff', color: 'var(--muted)', border: '1.5px solid var(--border)' }
              }
            >
              <tab.Icon size={15} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content grid — stacks on mobile */}
        <div className="grid gap-6 items-stretch grid-cols-1 md:grid-cols-[1.4fr_1fr]">
          {/* Visual */}
          <div
            className="rounded-[var(--rl)] overflow-hidden relative border border-[color:var(--border)] min-h-[240px] md:min-h-[340px]"
          >
            <img
              src={active.image}
              alt={active.imageAlt}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 z-[1]"
              style={{
                background: 'linear-gradient(180deg,transparent 45%,rgba(13,27,42,0.88) 100%)',
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 z-[2]">
              <h3 className="font-serif-num text-white mb-[5px] text-[22px] md:text-[28px] font-semibold">
                {active.imageTitle}
              </h3>
              <p className="text-sm text-white/70">{active.imageSubtitle}</p>
            </div>
          </div>

          {/* Side */}
          <div className="flex flex-col gap-[14px]">
            {/* Info card */}
            <div
              className="bg-white rounded-[var(--r)] flex-1 flex flex-col justify-center px-6 md:px-7 py-6 md:py-[26px]"
              style={{
                border: '1px solid var(--border)',
                borderLeft: '3px solid var(--orange)',
              }}
            >
              <h4 className="font-serif-num mb-5 text-[18px] md:text-[20px] font-semibold text-ink leading-[1.25] tracking-[-0.2px]">
                {active.cardTitle}
              </h4>
              <div className="grid gap-[14px]" style={{ gridTemplateColumns: cols }}>
                {active.stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-serif-num text-[26px] md:text-[30px] font-bold text-brand-orange leading-[1.05] tracking-[-0.5px]">
                      {s.value}
                    </div>
                    <div className="mt-1.5 font-semibold uppercase text-[11px] text-muted leading-[1.3] tracking-[0.4px]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Link button */}
            <a
              href={active.linkHref}
              className="rounded-[var(--r)] px-6 py-5 flex items-center justify-between transition-all duration-200 bg-navy text-white"
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--navy2)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--navy)')}
            >
              <span className="text-[15px] font-semibold">{active.linkText}</span>
              <ArrowRight size={18} className="text-brand-orange-soft flex-shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
