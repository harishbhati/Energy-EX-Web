import { MessageSquare, Phone, BarChart2, Building2, Users, LucideIcon } from 'lucide-react';

const cards: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: MessageSquare,
    title: 'Built Around Real Challenges',
    desc: `We designed our service around the specific problems property managers face — not around generic energy broking.`,
  },
  {
    Icon: Phone,
    title: 'Single Point of Contact',
    desc: `One team. One number. Every utility, every site, every question — handled through one account manager who knows your portfolio.`,
  },
  {
    Icon: BarChart2,
    title: 'Management, Not Just Procurement',
    desc: `We provide ongoing support throughout the contract term — not just at the point of sale and renewal.`,
  },
  {
    Icon: Building2,
    title: 'Multi-Site Specialists',
    desc: `We manage complex portfolios spanning many sites, multiple utility types, and a range of lease structures and ownership arrangements.`,
  },
  {
    Icon: Users,
    title: 'Long-Term Partnership',
    desc: `We measure success by how well the portfolio is running, not by how many contracts we have placed. Client retention reflects that.`,
  },
];

export default function PropertyWhyChooseSection() {
  return (
    <section id="why" className="scroll-mt-[170px] bg-off px-6 lg:px-14 py-10">
      <div className="max-w-[1180px] mx-auto">
        <div className="text-center mb-[40px]">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            Why choose Energyex
          </p>
          <h2 className="font-serif-num text-[32px] lg:text-[44px] font-semibold text-ink tracking-[-0.5px] leading-[1.12] mb-[12px]">
            Not just a utility broker. A property management utility partner.
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] font-light max-w-[660px] mx-auto">
            We understand how property management businesses operate and have built a service to match
            the complexity of real-world portfolios.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[14px]">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white border-[1.5px] border-border-color border-t-[3px] border-t-brand-orange rounded-r px-[20px] py-[24px] transition-all duration-[250ms] hover:-translate-y-[3px] hover:shadow-sh"
            >
              <div className="w-[42px] h-[42px] rounded-[12px] bg-orange-tint flex items-center justify-center mb-[12px]">
                <card.Icon size={19} className="text-brand-orange" />
              </div>
              <h4 className="text-[14px] font-bold text-ink mb-[7px] leading-[1.3]">{card.title}</h4>
              <p className="text-[12.5px] text-muted leading-[1.6] font-light">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
