import { ShieldCheck, User, Building2, Clipboard, LucideIcon } from 'lucide-react';

const cards: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: ShieldCheck,
    title: 'Independent Advice',
    desc: 'We are not tied to any supplier — recommendations are based on what best suits your business.',
  },
  {
    Icon: User,
    title: 'Dedicated Account Management',
    desc: 'A named account manager supporting you throughout the contract lifecycle.',
  },
  {
    Icon: Building2,
    title: 'Multi-Site Expertise',
    desc: 'Centralised management of contracts across multiple sites and locations.',
  },
  {
    Icon: Clipboard,
    title: 'Invoice Validation Support',
    desc: 'Helping businesses identify billing issues and resolve supplier disputes.',
  },
];

export default function GasWhyChooseSection() {
  return (
    <section className="bg-white px-6 lg:px-14 py-10">
      <div className="max-w-[1180px] mx-auto">
        <div className="text-center mb-8">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            Why businesses choose Energyex
          </p>
          <h2 className="font-serif-num text-[32px] font-semibold text-ink tracking-[-0.5px] leading-[1.12] mb-4">
            More than a supplier — an ongoing utility partner.
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] font-light max-w-[680px] mx-auto">
            At Energyex, gas procurement is about more than finding a supplier. We support procurement, supplier management, invoice validation, contract renewals, and operational support throughout the life of the contract.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white border-2 border-border-color rounded-r text-center px-[22px] py-7 transition-all duration-200 hover:-translate-y-[3px] hover:border-brand-orange hover:shadow-sh"
            >
              <div className="w-[52px] h-[52px] rounded-[14px] bg-orange-tint flex items-center justify-center mx-auto mb-4">
                <card.Icon size={24} className="text-brand-orange" />
              </div>
              <h4 className="text-[15px] font-bold text-ink mb-[6px]">{card.title}</h4>
              <p className="text-[13px] text-muted leading-[1.55] font-light">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
