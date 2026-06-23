import { TrendingDown, BarChart2, Plug, Leaf, LucideIcon } from 'lucide-react';

const cards: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: TrendingDown,
    title: 'Reduce Electricity Costs',
    desc: 'Generation during operating hours cuts the amount of electricity you need to buy from the grid.',
  },
  {
    Icon: BarChart2,
    title: 'Improve Budget Certainty',
    desc: 'On-site generation reduces exposure to wholesale price swings and improves long-term cost visibility.',
  },
  {
    Icon: Plug,
    title: 'Export Surplus Electricity',
    desc: 'Where generation exceeds demand, eligible sites can earn payments through arrangements like the SEG.',
  },
  {
    Icon: Leaf,
    title: 'Support Sustainability Goals',
    desc: 'Solar contributes to carbon reduction targets and strengthens environmental reporting credentials.',
  },
];

export default function WhySolarSection() {
  return (
    <section id="why" className="scroll-mt-[170px] bg-white px-6 lg:px-14 py-10">
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-8">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            Why solar makes business sense
          </p>
          <h2 className="font-serif-num text-[44px] font-semibold text-ink tracking-[-0.5px] leading-[1.12] mb-4">
            Generate on-site, depend on the grid less.
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] font-light max-w-[680px]">
            Solar PV systems generate electricity during daylight hours — often aligning closely with when
            commercial sites actually use power. Here&apos;s what that means in practice.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white border-[1.5px] border-border-color rounded-r px-[22px] py-[26px] transition-all duration-[250ms] hover:-translate-y-[3px] hover:border-brand-orange hover:shadow-sh"
            >
              <div className="w-12 h-12 rounded-[13px] bg-[#FFF7E8] flex items-center justify-center mb-4">
                <card.Icon size={22} className="text-[#F2A93B]" />
              </div>
              <h4 className="text-[15.5px] font-bold text-ink mb-2">{card.title}</h4>
              <p className="text-[13px] text-muted leading-[1.6] font-light">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
