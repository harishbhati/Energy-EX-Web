import { ShieldCheck, Banknote, Clock, Users, MapPin, type LucideIcon } from 'lucide-react';

type TrustItem = { Icon: LucideIcon; title: string; desc: string };

const items: TrustItem[] = [
  { Icon: ShieldCheck, title: 'FCA Registered', desc: 'Fully authorised & regulated' },
  { Icon: Banknote, title: 'Free of charge', desc: 'No upfront cost, ever' },
  { Icon: Clock, title: '24hr quotes', desc: 'Same-day where possible' },
  { Icon: Users, title: '10,000+ clients', desc: 'Businesses across the UK' },
  { Icon: MapPin, title: 'UK-based team', desc: 'Real experts, not a portal' },
];

export default function TrustBar() {
  return (
    <section style={{ background: 'var(--off)', borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-[1180px] mx-auto px-14 py-7">
        <div className="flex items-center justify-between gap-6 flex-wrap">
          {items.map((item, i) => (
            <div key={item.title} className="flex items-center gap-[10px] flex-1 min-w-[160px]">
              {/* Divider */}
              {i > 0 && (
                <div
                  className="hidden md:block self-stretch flex-shrink-0"
                  style={{ width: '1px', background: 'var(--border)', marginRight: '14px' }}
                />
              )}
              {/* Icon box */}
              <div
                className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--orange-tint)', border: '1px solid rgba(232,98,10,0.15)' }}
              >
                <item.Icon size={18} style={{ color: 'var(--orange)' }} />
              </div>
              <div>
                <div
                  className="font-semibold"
                  style={{ fontSize: '13.5px', color: 'var(--ink)', lineHeight: 1.2 }}
                >
                  {item.title}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '1px' }}>
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
