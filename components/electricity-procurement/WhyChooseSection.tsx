import { ShieldCheck, Users, Headphones, CheckCircle2, LucideIcon } from 'lucide-react';

const cards: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: ShieldCheck,
    title: 'Fully Independent',
    desc: 'We are tied to no supplier. Every recommendation is made purely in your commercial interest, not ours.',
  },
  {
    Icon: Users,
    title: '20+ Suppliers Compared',
    desc: 'Full market access — not just a closed panel — so you always see the most competitive rate available.',
  },
  {
    Icon: Headphones,
    title: 'Support for the Full Contract',
    desc: 'A dedicated account manager stays with you from first quote through every renewal and supplier query.',
  },
  {
    Icon: CheckCircle2,
    title: 'No Hidden Charges',
    desc: 'Transparent brokerage. You see exactly what you pay, and our fee structure is explained upfront.',
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-off px-14 py-[88px]">
      <div className="max-w-[1180px] mx-auto">
        <div className="text-center mb-8">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            Why Energyex
          </p>
          <h2 className="font-serif-num text-[44px] font-semibold text-ink tracking-[-0.5px] leading-[1.12]">
            Why businesses choose Energyex.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white text-center transition-all duration-200 hover:-translate-y-[3px] hover:border-brand-orange hover:shadow-sh"
              style={{ border: '1.5px solid #D9E0E9', borderRadius: 16, padding: '28px 22px' }}
            >
              <div
                className="flex items-center justify-center mx-auto mb-4"
                style={{ width: 52, height: 52, borderRadius: 14, background: '#FFF1E8' }}
              >
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
