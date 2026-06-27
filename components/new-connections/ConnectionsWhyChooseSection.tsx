import { Zap, PoundSterling, ClipboardCheck, LucideIcon } from 'lucide-react';

const cards: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: Zap,
    title: 'Faster Approvals',
    desc: 'Our day-to-day relationship with the boards typically speeds up approval timelines.',
  },
  {
    Icon: PoundSterling,
    title: 'Lower Overall Cost',
    desc: 'Getting it right the first time avoids the delays and rework that drive costs up.',
  },
  {
    Icon: ClipboardCheck,
    title: 'End-to-End Management',
    desc: 'From application to installed, live meter — we stay involved at every stage.',
  },
];

export default function ConnectionsWhyChooseSection() {
  return (
    <section id="why" className="scroll-mt-[0] bg-off px-6 lg:px-14 py-10">
      <div className="max-w-[1180px] mx-auto">
        <div className="text-center mb-8">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            Why choose Energyex
          </p>
          <h2 className="font-serif-num text-[32px] font-semibold text-ink tracking-[-0.5px] leading-[1.12] mb-4">
            An established relationship with the boards, working for you.
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] font-light max-w-[680px] mx-auto">
            New connections involve a lot of back-and-forth with the gas and electricity boards. We handle
            that relationship daily, so you don&apos;t have to learn it from scratch.
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
