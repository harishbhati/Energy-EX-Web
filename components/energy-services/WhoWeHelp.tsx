import { Store, Factory, Building2, Plug, LucideIcon } from 'lucide-react';

const cards: { Icon: LucideIcon; title: string; desc: string }[] = [
  { Icon: Store, title: 'SMEs & single sites', desc: 'Simple, fixed contracts with no jargon and no hidden charges.' },
  { Icon: Factory, title: 'Corporates & HH meters', desc: 'Half-hourly and flexible purchasing strategies for high-usage sites.' },
  { Icon: Building2, title: 'Multi-site businesses', desc: 'One contract strategy and one renewal calendar across every location.' },
  { Icon: Plug, title: 'New connections', desc: 'Moving premises or fitting out a new unit — we handle the supply setup.' },
];

export default function WhoWeHelp() {
  return (
    <section className="py-[88px] px-14 bg-off">
      <div className="max-w-[1180px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-[11px] font-bold uppercase tracking-[2.5px] text-brand-orange mb-3">
            Who we help
          </p>
          <h2 className="font-serif-num text-[38px] font-semibold text-ink leading-[1.15] tracking-[-0.5px]">
            Energy procurement built around how your business actually runs.
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {cards.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white border border-border-color rounded-r p-8 text-center hover:shadow-sh hover:border-brand-orange hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-orange-tint flex items-center justify-center mx-auto mb-5">
                <Icon size={24} className="text-brand-orange" />
              </div>
              <h4 className="text-ink font-bold text-[15px] mb-3">{title}</h4>
              <p className="text-muted text-[13.5px] leading-[1.65] font-light">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
