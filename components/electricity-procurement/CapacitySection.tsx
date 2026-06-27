import { Zap, TrendingDown, Network, Radio, Leaf, LayoutGrid, LucideIcon } from 'lucide-react';

const cards: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: Zap,
    title: 'Reactive Power Charges',
    desc: 'Poor power factor attracts penalty charges from your DNO. We identify sites where reactive power compensation can eliminate these costs outright.',
  },
  {
    Icon: TrendingDown,
    title: 'Maximum Demand Reduction',
    desc: 'Your kVA capacity charge is set by your highest 30-minute demand reading. We find the peaks and help you reduce them before they are measured.',
  },
  {
    Icon: Network,
    title: 'Distribution Use of System (DUoS)',
    desc: 'DUoS charges vary by time of day and season. Shifting load from red-band to green-band periods can produce meaningful savings at scale.',
  },
  {
    Icon: Radio,
    title: 'Transmission Use of System (TNUoS)',
    desc: 'TNUoS is levied on consumption during the top three triads. We issue triad alerts and advise on demand reduction during these critical windows.',
  },
  {
    Icon: Leaf,
    title: 'Climate Change Levy (CCL)',
    desc: 'Eligible businesses can claim CCL exemption or half-rate relief. We check your qualification status and manage the supply chain documentation.',
  },
  {
    Icon: LayoutGrid,
    title: 'Capacity Market Obligations',
    desc: 'Large users with on-site generation may have Capacity Market obligations. We assess your position and advise on compliance or trading options.',
  },
];

const chips = ['DUoS', 'TNUoS', 'Triad management', 'Reactive power', 'CCL exemptions', 'Capacity Market'];

export default function CapacitySection() {
  return (
    <section
      id="capacity"
      className="scroll-mt-[0] bg-navy px-6 md:px-14 py-12 md:py-[88px] relative overflow-hidden"
    >
      <div
        className="absolute pointer-events-none"
        style={{
          top: -220,
          left: -220,
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,98,10,0.14), transparent 60%)',
        }}
      />

      <div className="max-w-[1180px] mx-auto relative z-[1]">
        <p
          className="text-[11px] font-bold uppercase tracking-[2.5px] mb-[14px]"
          style={{ color: '#F47B25' }}
        >
          Capacity &amp; Network
        </p>
        <h2 className="font-serif-num text-[28px] md:text-[44px] font-semibold text-white tracking-[-0.5px] leading-[1.12] mb-4">
          Capacity &amp; Network Charge Optimisation.
        </h2>
        <p
          className="text-[15px] md:text-[17px] leading-[1.7] font-light max-w-[600px] mb-8"
          style={{ color: 'rgba(255,255,255,0.55)' }}
        >
          Beyond unit rate savings, there are significant charges buried in your electricity bill
          that most businesses — and many brokers — never address.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[14px]">
          {cards.map((card) => (
            <div
              key={card.title}
              className="transition-all duration-200 hover:-translate-y-[3px] rounded-[16px] p-5 md:p-[24px_18px]"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div
                className="flex items-center justify-center mb-3 w-11 h-11"
                style={{ borderRadius: 12, background: 'rgba(255,255,255,0.08)' }}
              >
                <card.Icon size={20} style={{ color: '#F47B25' }} />
              </div>
              <h4 className="text-[14px] font-bold text-white mb-[6px] leading-[1.3]">{card.title}</h4>
              <p
                className="text-[12px] leading-[1.55] font-light"
                style={{ color: 'rgba(255,255,255,0.45)' }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        <div
          className="flex justify-center flex-wrap gap-[10px] mt-8 pt-7"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
        >
          {chips.map((chip) => (
            <span
              key={chip}
              className="text-[12.5px] font-semibold"
              style={{
                color: 'rgba(255,255,255,0.7)',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
                padding: '8px 16px',
                borderRadius: 30,
              }}
            >
              {chip}
            </span>
          ))}
        </div>

        <p
          className="text-[14px] leading-[1.8] font-light text-center mt-6 max-w-[760px] mx-auto"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          Most businesses only review their electricity unit rate — yet capacity and network charges
          can represent 40–60% of a bill. Our team reviews the full invoice so you are not leaving
          money on the table.
        </p>
      </div>
    </section>
  );
}
