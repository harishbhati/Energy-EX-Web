import { FileText, MessageCircle, AlertTriangle, TrendingDown, Gauge, Clock, LucideIcon } from 'lucide-react';

const items: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: FileText,
    title: 'Invoice Validation',
    desc: 'Checking bills against contracted rates and actual consumption.',
  },
  {
    Icon: MessageCircle,
    title: 'Billing Queries',
    desc: "Following up on anything that doesn't look right before it becomes a bigger problem.",
  },
  {
    Icon: AlertTriangle,
    title: 'Supplier Disputes',
    desc: 'Acting on your behalf when a disagreement needs resolving with a supplier.',
  },
  {
    Icon: TrendingDown,
    title: 'Estimated Bill Investigations',
    desc: "Querying estimated reads that don't reflect real usage.",
  },
  {
    Icon: Gauge,
    title: 'Meter Reading Issues',
    desc: 'Resolving inconsistent or missing meter readings.',
  },
  {
    Icon: Clock,
    title: 'Historic Bill Reviews',
    desc: 'Looking back over past invoices to catch missed errors.',
  },
];

const panelPoints = [
  'Ongoing account management',
  'Supplier liaison throughout the contract term',
  "Renewal management so you're never caught out",
  'Account reconciliation support',
];

export default function InvoiceValidationSection() {
  return (
    <section className="bg-off px-6 lg:px-14 py-10">
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-8">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            Keeping you in control after the contract is signed
          </p>
          <h2 className="font-serif-num text-[44px] font-semibold text-ink tracking-[-0.5px] leading-[1.12] mb-4">
            Invoice Validation & Billing Support
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] font-light max-w-[680px]">
            Gas invoices can be complex, particularly for businesses operating multiple sites or consuming large volumes of energy. Where discrepancies are identified, we work directly with suppliers to seek clarification and resolution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
          {/* Item list */}
          <div className="flex flex-col gap-[10px]">
            {items.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-[14px] bg-white border-2 border-border-color rounded-rs py-4 px-[18px]"
              >
                <div className="w-[34px] h-[34px] rounded-[9px] bg-orange-tint flex items-center justify-center flex-shrink-0">
                  <item.Icon size={16} className="text-brand-orange" />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-ink mb-[2px]">{item.title}</h4>
                  <p className="text-[12.5px] text-muted font-light leading-[1.5]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navy panel */}
          <div className="bg-navy rounded-rl px-8 py-9 relative overflow-hidden">
            <div className="absolute w-[220px] h-[220px] rounded-full bg-brand-orange/[0.14] -top-[100px] -right-[60px]" />

            <div className="relative z-[1]">
              <h3 className="font-serif-num text-[26px] font-semibold text-white mb-3">
                Why this matters
              </h3>
              <p className="text-[14px] text-white/55 leading-[1.8] font-light mb-[18px]">
                A poorly structured contract, missed renewal window, or unresolved billing issue can result in unnecessary expenditure. Our role extends beyond simply arranging contracts.
              </p>
              <ul className="flex flex-col gap-[10px]">
                {panelPoints.map((point) => (
                  <li key={point} className="flex items-start gap-[10px] text-[13.5px] text-white/85">
                    <span className="text-brand-orange-soft font-bold flex-shrink-0">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
