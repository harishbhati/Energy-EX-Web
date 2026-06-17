import { Building2, Layers, Sparkles, TreePine, Sparkle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Service = { Icon: LucideIcon; title: string; subtitle: string };

const services: Service[] = [
  { Icon: Building2, title: 'Commercial cleaning',  subtitle: 'Offices & corporate spaces' },
  { Icon: Layers,    title: 'Window cleaning',       subtitle: 'All buildings & heights' },
  { Icon: Sparkles,  title: 'Deep cleaning',         subtitle: 'Hotels & industrial' },
  { Icon: TreePine,  title: 'Landscaping',           subtitle: 'Grounds & maintenance' },
];

export default function CleaningSection() {
  return (
    <div className="px-14 py-10 bg-clean-bg">
      <div
        className="max-w-[1180px] mx-auto grid gap-[72px] items-center"
        style={{ gridTemplateColumns: '1fr 1fr' }}
      >
        {/* Left */}
        <div>
          <div
            className="inline-flex items-center gap-[10px] rounded-[40px] mb-5 px-[18px] py-2 font-bold uppercase tracking-[0.5px] text-xs text-white shadow-[0_6px_20px_rgba(10,138,90,0.3)]"
            style={{ background: 'var(--green)' }}
          >
            <Sparkle size={13} />
            NOW EXPANDING OUR SERVICES
          </div>
          <h2
            className="font-serif-num mb-[26px] text-[44px] font-semibold text-ink tracking-[-0.5px] leading-[1.12]"
          >
            Our clients asked. We delivered.
          </h2>
          <p className="mb-[26px] max-w-[560px] text-[17px] text-muted leading-[1.7] font-light">
            Drawing on 13 years of energy expertise, our clients asked us to help with their
            facilities too. So we did — with the same care and value.
          </p>
          <a
            href="/cleaning"
            className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all duration-200 text-[15px]"
            style={{ color: 'var(--green)' }}
          >
            Explore facility services →
          </a>
        </div>

        {/* Right: 2×2 grid */}
        <div className="grid grid-cols-2 gap-[14px]">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-[var(--r)] p-6 cursor-default transition-all duration-[250ms] hover:border-[color:var(--green)] border border-[color:var(--border)]"
            >
              <div
                className="w-12 h-12 rounded-[12px] flex items-center justify-center mb-4"
                style={{ background: 'var(--green-tint)' }}
              >
                <s.Icon size={22} style={{ color: 'var(--green)' }} />
              </div>
              <h4 className="font-serif-num mb-1 text-[18px] font-semibold text-ink">
                {s.title}
              </h4>
              <p className="text-[13px] text-muted font-light">
                {s.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
