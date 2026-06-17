import { Building, BarChart3, CalendarClock, Home, HardHat, Building2, Star } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Feature = { Icon: LucideIcon; title: string; desc: string };

const features: Feature[] = [
  {
    Icon: Building,
    title: 'Multi-property utility management',
    desc: 'One contact for every utility across every property — no more juggling suppliers.',
  },
  {
    Icon: BarChart3,
    title: 'Portfolio-wide cost optimisation',
    desc: 'Rates that reflect your total scale — bigger savings than going it alone.',
  },
  {
    Icon: CalendarClock,
    title: 'Contract & renewal management',
    desc: 'We track every contract and go to market at exactly the right moment.',
  },
];

type Pill = { Icon: LucideIcon; label: string };

const pills: Pill[] = [
  { Icon: Home,      label: 'Landlords' },
  { Icon: HardHat,   label: 'Property developers' },
  { Icon: Building2, label: 'Multi-site properties' },
];

export default function PropertySection() {
  return (
    <div className="px-14 py-10 relative overflow-hidden bg-navy">
      {/* Gold glow */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: '-250px',
          right: '-250px',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle,rgba(184,134,11,0.1),transparent 60%)',
        }}
      />

      <div
        className="max-w-[1180px] mx-auto grid gap-[72px] items-center relative"
        style={{ gridTemplateColumns: '1fr 1fr' }}
      >
        {/* Left */}
        <div>
          <div
            className="inline-flex items-center gap-2 rounded-[40px] mb-5 px-4 py-[6px] text-[11px] font-bold uppercase tracking-[1.2px]"
            style={{
              background: 'rgba(184,134,11,0.12)',
              border: '1px solid rgba(184,134,11,0.28)',
              color: '#ECC84A',
            }}
          >
            <Star size={11} fill="currentColor" strokeWidth={0} />
            Our signature service
          </div>

          <h2
            className="font-serif-num mb-4 text-[42px] font-semibold text-white tracking-[-0.5px] leading-[1.1]"
          >
            One partner for every property in your{' '}
            <span className="italic" style={{ color: '#ECC84A' }}>
              portfolio.
            </span>
          </h2>

          <p className="mb-[34px] text-base text-white/50 leading-[1.8] font-light">
            Juggling utilities across multiple properties is exhausting — different suppliers,
            contracts and renewal dates. We take all of it off your plate.
          </p>

          {/* Features list */}
          <div
            className="flex flex-col rounded-[var(--r)] overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {features.map((f, i) => (
              <div
                key={f.title}
                className="flex items-start gap-[14px] px-[22px] py-[18px] cursor-default transition-colors duration-200 hover:bg-[rgba(184,134,11,0.06)]"
                style={{
                  borderBottom:
                    i < features.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}
              >
                <div
                  className="w-10 h-10 rounded-[11px] flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'rgba(184,134,11,0.12)',
                    border: '1px solid rgba(184,134,11,0.2)',
                  }}
                >
                  <f.Icon size={18} style={{ color: '#ECC84A' }} />
                </div>
                <div>
                  <h4
                    className="mb-[3px] font-semibold text-[15px]"
                    style={{ color: 'rgba(255,255,255,0.92)' }}
                  >
                    {f.title}
                  </h4>
                  <p
                    className="text-[13px] font-light leading-[1.55]"
                    style={{ color: 'rgba(255,255,255,0.38)' }}
                  >
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pills */}
          <div className="flex items-center gap-2 mt-[22px] flex-wrap">
            <span className="text-xs text-white/30">Perfect for:</span>
            {pills.map((p) => (
              <span
                key={p.label}
                className="inline-flex items-center gap-[6px] rounded-[40px] px-[14px] py-[5px] text-xs text-white/50"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <p.Icon size={12} />
                {p.label}
              </span>
            ))}
          </div>
        </div>

        {/* Right: image */}
        <div className="relative">
          {/* Floating badge */}
          <div
            className="absolute z-[2] rounded-[var(--r)] px-[22px] py-[18px] text-center bg-white shadow-sh2"
            style={{
              top: '-18px',
              right: '-18px',
            }}
          >
            <div className="font-serif-num text-[30px] font-semibold text-gold leading-none">
              13+
            </div>
            <div className="mt-[3px] font-medium text-[11px] text-muted">
              Years experience
            </div>
          </div>

          <div className="rounded-[var(--rl)] overflow-hidden relative shadow-sh2 h-[460px]">
            <img
              src="https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Property portfolio"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.78)' }}
            />
            <div
              className="absolute inset-0 rounded-[var(--rl)]"
              style={{
                background: 'linear-gradient(180deg,transparent 35%,rgba(13,27,42,0.9))',
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <h3 className="font-serif-num text-white mb-1.5 text-[20px] font-semibold">
                Managing your property utilities just got simple.
              </h3>
              <p className="mb-4 font-light text-[13px] text-white/50">
                One expert. Every property. Complete control.
              </p>
              <a
                href="/property-management"
                className="inline-flex items-center gap-2 rounded-[var(--rs)] px-5 py-[10px] font-semibold text-[13px]"
                style={{
                  background: 'rgba(184,134,11,0.15)',
                  border: '1px solid rgba(184,134,11,0.35)',
                  color: '#ECC84A',
                }}
              >
                Learn about property management →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
