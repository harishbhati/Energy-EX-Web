import { ShieldCheck, Search, Building2, LucideIcon } from 'lucide-react';

const cards: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: ShieldCheck,
    title: 'Independent Advice',
    desc: 'We work on behalf of our clients, not water retailers.',
  },
  {
    Icon: Search,
    title: 'Bill Validation Support',
    desc: 'Identifying potential billing issues, discrepancies, and recovery opportunities.',
  },
  {
    Icon: Building2,
    title: 'Multi-Site Specialists',
    desc: 'Managing water accounts across portfolios of all sizes, with one dedicated point of contact.',
  },
];

export default function WaterWhyChooseSection() {
  return (
    <section id="why" className="scroll-mt-[0] bg-off px-6 lg:px-14 py-10">
      <div className="max-w-[1180px] mx-auto">
        <div className="text-center mb-8">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            Why choose Energyex for water
          </p>
          <h2 className="font-serif-num text-[32px] font-semibold text-ink tracking-[-0.5px] leading-[1.12] mb-4">
            Independent advice that doesn&apos;t stop at the switch.
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] font-light max-w-[680px] mx-auto">
            We work on behalf of our clients, not water retailers — with support that continues throughout
            the life of the account.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white border-[1.5px] border-border-color rounded-r px-[24px] py-[28px] transition-all duration-[250ms] hover:-translate-y-[3px] hover:border-brand-orange hover:shadow-sh"
            >
              <div className="w-12 h-12 rounded-[13px] bg-orange-tint flex items-center justify-center mb-[14px]">
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
