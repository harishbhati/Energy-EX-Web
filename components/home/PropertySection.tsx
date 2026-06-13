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
    <div
      className="px-14 py-10 relative overflow-hidden"
      style={{ background: 'var(--navy)' }}
    >
      {/* Gold glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-250px',
          right: '-250px',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
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
            className="font-serif-num mb-4"
            style={{
              fontSize: '42px',
              fontWeight: 600,
              color: '#fff',
              letterSpacing: '-0.5px',
              lineHeight: 1.1,
            }}
          >
            One partner for every property in your{' '}
            <span className="italic" style={{ color: '#ECC84A' }}>
              portfolio.
            </span>
          </h2>

          <p
            className="mb-[34px]"
            style={{
              fontSize: '16px',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.8,
              fontWeight: 300,
            }}
          >
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
                    className="mb-[3px] font-semibold"
                    style={{ fontSize: '15px', color: 'rgba(255,255,255,0.92)' }}
                  >
                    {f.title}
                  </h4>
                  <p
                    style={{
                      fontSize: '13px',
                      color: 'rgba(255,255,255,0.38)',
                      lineHeight: 1.55,
                      fontWeight: 300,
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pills */}
          <div className="flex items-center gap-2 mt-[22px] flex-wrap">
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>Perfect for:</span>
            {pills.map((p) => (
              <span
                key={p.label}
                className="inline-flex items-center gap-[6px] rounded-[40px] px-[14px] py-[5px]"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.5)',
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
            className="absolute z-[2] rounded-[var(--r)] px-[22px] py-[18px] text-center"
            style={{
              top: '-18px',
              right: '-18px',
              background: '#fff',
              boxShadow: 'var(--sh2)',
            }}
          >
            <div
              className="font-serif-num"
              style={{ fontSize: '30px', fontWeight: 600, color: 'var(--gold)', lineHeight: 1 }}
            >
              13+
            </div>
            <div
              className="mt-[3px] font-medium"
              style={{ fontSize: '11px', color: 'var(--muted)' }}
            >
              Years experience
            </div>
          </div>

          <div
            className="rounded-[var(--rl)] overflow-hidden relative"
            style={{ height: '460px', boxShadow: 'var(--sh2)' }}
          >
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
              <h3
                className="font-serif-num text-white mb-1.5"
                style={{ fontSize: '20px', fontWeight: 600 }}
              >
                Managing your property utilities just got simple.
              </h3>
              <p
                className="mb-4 font-light"
                style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}
              >
                One expert. Every property. Complete control.
              </p>
              <a
                href="/property-management"
                className="inline-flex items-center gap-2 rounded-[var(--rs)] px-5 py-[10px] font-semibold"
                style={{
                  background: 'rgba(184,134,11,0.15)',
                  border: '1px solid rgba(184,134,11,0.35)',
                  color: '#ECC84A',
                  fontSize: '13px',
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
