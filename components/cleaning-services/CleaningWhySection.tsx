import { ShieldCheck, SlidersHorizontal, Building2, LucideIcon } from 'lucide-react';

const creds: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: ShieldCheck,
    title: 'Trusted Service Partners',
    desc: `Experienced, fully insured cleaning providers selected to deliver reliable services and professional
    standards.`,
  },
  {
    Icon: SlidersHorizontal,
    title: 'Flexible Solutions',
    desc: `Services tailored to the requirements of each property, business, or portfolio — not a one-size
    schedule.`,
  },
  {
    Icon: Building2,
    title: 'Multi-Site Expertise',
    desc: `One point of contact for coordination, service management, contractor communication, and ongoing
    support.`,
  },
];

export default function CleaningWhySection() {
  return (
    <section id="why" className="scroll-mt-[0] bg-off px-6 lg:px-14 py-10">
      <div className="max-w-[1180px] mx-auto">
        <div className="text-center mb-[8px]">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            Why choose Energyex for cleaning
          </p>
          <h2 className="font-serif-num text-[28px] lg:text-[32px] font-semibold text-ink tracking-[-0.5px] leading-[1.12] mb-[12px]">
            One coordinated service, every site covered.
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] font-light max-w-[640px] mx-auto">
            Trusted partners, flexible solutions, and a single point of contact — whatever the property or
            portfolio.
          </p>
        </div>

        {/* 3-col horizontal cred strip */}
        <div className="mt-[8px] bg-white border-[1.5px] border-border-color rounded-r overflow-hidden grid grid-cols-1 md:grid-cols-3 divide-y divide-border-color md:divide-y-0 md:divide-x md:divide-border-color">
          {creds.map((col) => (
            <div key={col.title} className="px-[30px] py-[32px]">
              <div className="w-[46px] h-[46px] rounded-[13px] bg-orange-tint flex items-center justify-center mb-[16px]">
                <col.Icon size={21} className="text-brand-orange" />
              </div>
              <h4 className="text-[16px] font-bold text-ink mb-[8px]">{col.title}</h4>
              <p className="text-[13.5px] text-muted leading-[1.65] font-light">{col.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
