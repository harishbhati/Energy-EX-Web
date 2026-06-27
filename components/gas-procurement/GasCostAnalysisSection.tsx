import { TrendingUp, Thermometer, Gauge, Truck, Receipt, FileText, LucideIcon } from 'lucide-react';

const cards: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: TrendingUp,
    title: 'Historical Consumption Patterns',
    desc: 'Reviewing usage history to understand how your business actually consumes gas.',
  },
  {
    Icon: Thermometer,
    title: 'Seasonal Usage Trends',
    desc: 'Identifying seasonal peaks and troughs that affect procurement strategy.',
  },
  {
    Icon: Gauge,
    title: 'Metering Arrangements',
    desc: 'Assessing whether current metering reflects how the site operates.',
  },
  {
    Icon: Truck,
    title: 'Transportation Charges',
    desc: 'Reviewing the non-commodity costs that sit alongside the unit rate.',
  },
  {
    Icon: Receipt,
    title: 'Billing Accuracy',
    desc: 'Checking invoices against actual consumption to flag discrepancies.',
  },
  {
    Icon: FileText,
    title: 'Contract Structures',
    desc: 'Making sure contract terms still suit your business as it evolves.',
  },
];

const chips = [
  'Manufacturing facilities',
  'Hotels & hospitality groups',
  'Care homes & healthcare',
  'Property portfolios',
  'Multi-site businesses',
  'High-consumption premises',
];

export default function GasCostAnalysisSection() {
  return (
    <section
      id="analysis"
      className="scroll-mt-[0] bg-navy px-6 lg:px-14 py-10 relative overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute -top-[220px] -left-[220px] w-[600px] h-[600px] rounded-full bg-brand-orange/10 blur-[80px] pointer-events-none" />

      <div className="max-w-[1180px] mx-auto relative z-[1]">
        <div className="text-center mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[2.5px] mb-[14px] text-brand-orange-soft">
            Where the real savings hide
          </p>
          <h2 className="font-serif-num text-[32px] font-semibold text-white tracking-[-0.5px] leading-[1.12] mb-4">
            Gas Consumption & Cost Analysis
          </h2>
          <p className="text-[17px] leading-[1.7] font-light text-white/50 max-w-[720px] mx-auto">
            Many businesses focus exclusively on the gas unit rate while overlooking other factors that influence overall costs. We help businesses understand their complete gas expenditure and identify opportunities for operational improvement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[14px] mt-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white/[0.04] border border-white/10 rounded-2xl px-[18px] py-6 transition-all duration-200 hover:-translate-y-[3px] hover:border-brand-orange-soft hover:bg-white/[0.07]"
            >
              <div className="w-11 h-11 rounded-xl bg-white/[0.08] flex items-center justify-center mb-3">
                <card.Icon size={20} className="text-brand-orange-soft" />
              </div>
              <h4 className="text-[14px] font-bold text-white mb-[6px] leading-[1.3]">{card.title}</h4>
              <p className="text-[12px] text-white/45 leading-[1.55] font-light">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center flex-wrap gap-[10px] mt-8 pt-7 border-t border-white/10">
          {chips.map((chip) => (
            <span
              key={chip}
              className="text-[12.5px] font-semibold text-white/70 bg-white/[0.05] border border-white/[0.12] px-4 py-2 rounded-[30px]"
            >
              {chip}
            </span>
          ))}
        </div>

        <p className="text-[14px] text-white/50 leading-[1.8] font-light text-center mt-6 max-w-[760px] mx-auto">
          Understanding the full picture of gas expenditure — not just the unit rate — allows businesses to make more informed procurement decisions and identify genuine opportunities for savings.
        </p>
      </div>
    </section>
  );
}
