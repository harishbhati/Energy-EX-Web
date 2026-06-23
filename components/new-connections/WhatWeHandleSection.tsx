import { Zap, Building2, ClipboardList, LucideIcon } from 'lucide-react';

const cards: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: Zap,
    title: 'New Electricity & Gas Supply',
    desc: 'Setting up a brand-new electricity or gas supply for a building that currently has none — from first application to live meter.',
  },
  {
    Icon: Building2,
    title: 'Layout Changes & Landlord Meters',
    desc: 'Modifying an existing supply layout and adding additional electricity or gas meters for commercial landlords with multi-let sites.',
  },
  {
    Icon: ClipboardList,
    title: 'Application & Board Liaison',
    desc: 'We prepare and submit the application, then liaise directly with the gas and electricity boards from start to completed installation.',
  },
];

export default function WhatWeHandleSection() {
  return (
    <section id="handle" className="scroll-mt-[170px] bg-white px-6 lg:px-14 py-10">
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-8">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            From bare site to live supply
          </p>
          <h2 className="font-serif-num text-[44px] font-semibold text-ink tracking-[-0.5px] leading-[1.12] mb-4">
            What our new connections team handles.
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] font-light max-w-[680px]">
            Our dedicated in-house team manages every aspect of a new connection — from a brand-new building
            with no supply at all, to adding meters across an existing commercial layout.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[18px]">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white border-[1.5px] border-border-color border-l-[4px] border-l-brand-orange rounded-r px-[24px] py-[28px] transition-all duration-[250ms] hover:-translate-y-[3px] hover:shadow-sh"
            >
              <div className="w-[46px] h-[46px] rounded-[12px] bg-orange-tint flex items-center justify-center mb-4">
                <card.Icon size={21} className="text-brand-orange" />
              </div>
              <h4 className="text-[16px] font-bold text-ink mb-2">{card.title}</h4>
              <p className="text-[13.5px] text-muted leading-[1.7] font-light">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
