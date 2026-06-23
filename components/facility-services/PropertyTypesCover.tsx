import { Building2, ShoppingBag, Factory, Home, LucideIcon } from 'lucide-react';

const cards: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: Building2,
    title: 'Offices',
    desc: 'Single-site HQs through to multi-floor corporate buildings.',
  },
  {
    Icon: ShoppingBag,
    title: 'Retail units',
    desc: 'Storefronts and shopping parades with out-of-hours servicing.',
  },
  {
    Icon: Factory,
    title: 'Industrial & warehouse',
    desc: 'Large-footprint sites with specialist waste and cleaning needs.',
  },
  {
    Icon: Home,
    title: 'Residential blocks & HMOs',
    desc: 'Landlord and managing-agent portfolios of any size.',
  },
];

export default function PropertyTypesCover() {
  return (
    <section className="relative bg-navy py-[88px] px-14 overflow-hidden">
      {/* Radial glow — top right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-120px',
          right: '-80px',
          width: '480px',
          height: '480px',
          background: 'radial-gradient(circle, rgba(232,98,10,0.18) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1180px] mx-auto relative z-[1]">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-[11px] font-bold uppercase tracking-[2.5px] text-brand-orange-soft mb-4">
            Where we work
          </p>
          <h2 className="font-['Cormorant_Garamond'] text-[38px] font-semibold text-white leading-[1.15] tracking-[-0.5px]">
            Facility management across every property type.
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-4 gap-5">
          {cards.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white/[0.04] border border-white/10 rounded-r p-[26px_20px] hover:border-brand-orange-soft/40 hover:bg-white/[0.07] hover:-translate-y-[3px] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-[10px] bg-white/[0.08] flex items-center justify-center mb-[14px]">
                <Icon size={20} className="text-brand-orange-soft" />
              </div>
              <h4 className="text-white font-bold text-[15px] mb-[10px]">{title}</h4>
              <p className="text-white/50 text-[13.5px] leading-[1.65] font-light">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
