import { Factory, LayoutGrid, FileText, Briefcase, LucideIcon } from 'lucide-react';

const cards: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: Factory,
    title: 'Industrial & Manufacturing',
    desc: 'High consumption sites where kVA, HH metering, and capacity agreements have the biggest financial impact.',
  },
  {
    Icon: LayoutGrid,
    title: 'Multi-Site Operators',
    desc: 'Portfolios where billing complexity multiplies and a single validation process covers dozens of accounts.',
  },
  {
    Icon: FileText,
    title: 'SECR-Reporting Businesses',
    desc: 'Companies with annual energy spend above the SECR threshold who need a robust, auditable compliance record.',
  },
  {
    Icon: Briefcase,
    title: 'Commercial Landlords',
    desc: 'Landlords managing void periods, recharging tenants, and maintaining supply continuity across a changing portfolio.',
  },
];

export default function WhoWeHelpSection() {
  return (
    <section className="bg-off px-6 lg:px-14 py-[60px]">
      <div className="max-w-[1180px] mx-auto">
        <div className="text-center mb-10">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            Who we help
          </p>
          <h2 className="font-serif-num text-[36px] lg:text-[42px] font-semibold text-ink tracking-[-0.5px] leading-[1.12] mb-4">
            Beyond procurement works best when the stakes are highest.
          </h2>
          <p className="text-[16px] text-muted leading-[1.75] font-light max-w-[580px] mx-auto">
            Any business with live supply can benefit. These are the situations where ongoing management
            pays for itself fastest.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white border-[1.5px] border-border-color rounded-r px-[24px] py-[28px] text-center transition-all duration-[250ms] hover:-translate-y-[3px] hover:border-brand-orange hover:shadow-sh"
            >
              <div className="w-12 h-12 rounded-[13px] bg-orange-tint flex items-center justify-center mb-[14px] mx-auto">
                <card.Icon size={22} className="text-brand-orange" />
              </div>
              <h4 className="text-[15px] font-bold text-ink mb-[6px]">{card.title}</h4>
              <p className="text-[13px] text-muted leading-[1.6] font-light">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
