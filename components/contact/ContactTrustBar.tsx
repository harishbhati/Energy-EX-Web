import { Users, Clock, Banknote, ShieldCheck, type LucideIcon } from 'lucide-react';

type TrustItem = { Icon: LucideIcon; title: string; desc: string };

const items: TrustItem[] = [
  { Icon: Users,       title: '10,000+ Clients',       desc: 'Trusted by businesses across the UK since 2011' },
  { Icon: Clock,       title: '24-Hour Response',      desc: 'Guaranteed callback within one business day' },
  { Icon: Banknote,    title: 'Up to 25% Savings',     desc: 'Average reduction on annual energy spend' },
  { Icon: ShieldCheck, title: 'Fully Independent',     desc: 'No supplier ties — we work only for you' },
];

export default function ContactTrustBar() {
  return (
    <section className="bg-white border-t border-[color:var(--border)] px-6 py-10 md:px-[40px] md:py-[48px]">
      <div className="max-w-[1160px] mx-auto grid gap-6 md:gap-8 grid-cols-2 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="text-center">
            <div
              className="w-[52px] h-[52px] mx-auto mb-3 flex items-center justify-center rounded-[12px] bg-orange-tint"
              style={{ border: '1px solid rgba(232,98,10,0.22)' }}
            >
              <item.Icon size={24} className="text-brand-orange" style={{ strokeWidth: 1.8 }} />
            </div>
            <h4 className="font-bold mb-[5px] text-[14.5px] text-ink">
              {item.title}
            </h4>
            <p className="text-[13px] text-muted leading-[1.6]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
