import { Trash2, Recycle, Leaf, Lock, AlertTriangle, Zap, LucideIcon } from 'lucide-react';

const cards: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: Trash2,
    title: 'General Commercial Waste',
    desc: 'Collection and disposal for offices, retail, warehouses, hospitality, and industrial facilities.',
  },
  {
    Icon: Recycle,
    title: 'Recycling Services',
    desc: 'Segregation and recycling programmes across paper, cardboard, plastics, glass, metal, and mixed recycling.',
  },
  {
    Icon: Leaf,
    title: 'Food Waste Collections',
    desc: 'Dedicated collections for hospitality, catering, leisure, healthcare, and food production sites.',
  },
  {
    Icon: Lock,
    title: 'Confidential Waste Destruction',
    desc: 'Secure destruction of confidential documents and sensitive materials through accredited providers.',
  },
  {
    Icon: AlertTriangle,
    title: 'Hazardous Waste Services',
    desc: 'Compliant disposal of hazardous materials, electrical waste, clinical waste, and specialist chemicals.',
  },
  {
    Icon: Zap,
    title: 'Waste-to-Energy & Recovery',
    desc: 'Sustainable disposal and recovery options that reduce landfill reliance and support environmental goals.',
  },
];

export default function WasteServicesSection() {
  return (
    <section id="services" className="scroll-mt-[170px] bg-white px-6 lg:px-14 py-10">
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-8">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            One contact, every waste stream
          </p>
          <h2 className="font-serif-num text-[44px] font-semibold text-ink tracking-[-0.5px] leading-[1.12] mb-4">
            Waste services we support.
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] font-light max-w-[680px]">
            From general commercial waste through to hazardous and confidential destruction, with recycling
            built in throughout.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
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
