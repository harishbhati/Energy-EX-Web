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
    <section
      className="bg-white"
      style={{
        padding: '48px 40px',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div
        className="max-w-[1160px] mx-auto grid gap-8"
        style={{ gridTemplateColumns: 'repeat(4,1fr)' }}
      >
        {items.map((item) => (
          <div key={item.title} className="text-center">
            <div
              className="w-[52px] h-[52px] mx-auto mb-3 flex items-center justify-center rounded-[12px]"
              style={{
                background: 'var(--orange-tint)',
                border: '1px solid rgba(232,98,10,0.22)',
              }}
            >
              <item.Icon size={24} style={{ color: 'var(--orange)', strokeWidth: 1.8 }} />
            </div>
            <h4
              className="font-bold mb-[5px]"
              style={{ fontSize: '14.5px', color: 'var(--ink)' }}
            >
              {item.title}
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6 }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
