import { Gauge, Wrench, ClipboardList, Receipt, TrendingUp, LucideIcon } from 'lucide-react';

type BadgeVariant = 'orange' | 'gold' | 'green';

function getBadgeClass(variant: BadgeVariant): string {
  if (variant === 'gold') return 'bg-[rgba(184,134,11,0.12)] text-[#B8860B]';
  if (variant === 'green') return 'bg-green-tint text-[#0A8A5A]';
  return 'bg-orange-tint text-[#CC5208]';
}

const services: {
  id: string;
  num: string;
  Icon: LucideIcon;
  title: string;
  badge: { label: string; variant: BadgeVariant };
  desc: string;
  subs: string[];
}[] = [
  {
    id: 'kva',
    num: '01',
    Icon: Gauge,
    title: 'kVA Analysis',
    badge: { label: 'Capacity', variant: 'orange' },
    desc: `We compare your kVA allowance against your actual usage so the two are properly aligned. Many businesses are paying for more capacity than they need — this shows exactly how much could be saved by trimming the allowance, or where it should be increased to avoid breach penalties. With a valid letter of authority, we can check whether you've exceeded your capacity over the last 12 months and put things right.`,
    subs: ['DCP 161 penalty avoidance', 'Half-hourly demand review', 'Allowance right-sizing', 'NHH to HH transition checks'],
  },
  {
    id: 'mop',
    num: '02',
    Icon: Wrench,
    title: 'MOP & Data Collection',
    badge: { label: 'Metering', variant: 'gold' },
    desc: `A Meter Operator (MOP) contract gives you the tools to monitor consumption properly, whether you're setting up a new connection or switching metering provider. We work with fully accredited partners to handle supply, installation, maintenance and operation of your meter — and run it on the same platform as your data collection, so usage data flows through cleanly and cheaply.`,
    subs: ['MOP & DC/DA sourcing', 'P272 / HH compliance (100kW+ sites)', 'Two-way data integration', 'Non-commodity cost reduction'],
  },
  {
    id: 'compliance',
    num: '03',
    Icon: ClipboardList,
    title: 'Compliance Services',
    badge: { label: 'Reporting', variant: 'green' },
    desc: `Keeping pace with energy and environmental legislation — including SECR — takes resources most businesses don't have spare. Our team tracks every development on your behalf, runs a defensible process with a full audit trail, and compiles the evidence your regulator needs. We'll also flag efficiency opportunities along the way, so compliance pays for itself.`,
    subs: ['SECR reporting', 'Audit-trail documentation', 'Regulator submissions', 'Cost & efficiency analysis'],
  },
  {
    id: 'invoice',
    num: '04',
    Icon: Receipt,
    title: 'Invoice Validation',
    badge: { label: 'Free service', variant: 'orange' },
    desc: `Estimated billing and supplier error are more common than most businesses realise, and they quietly drain cash flow. Our free bill validation checks every invoice against your contracted rate — pre-payment, post-payment, or retrospectively going back up to six years — and we chase the supplier on your behalf for any rebate owed.`,
    subs: ['Pre-payment checks (5 working days)', 'Post-payment review (within 6 weeks)', 'Retrospective audit (up to 6 years)', 'Bespoke reporting'],
  },
  {
    id: 'reporting',
    num: '05',
    Icon: TrendingUp,
    title: 'Reporting & Monitoring',
    badge: { label: 'Usage', variant: 'gold' },
    desc: `If you know how, where and when energy is used, you can manage it — and if you manage it, you can reduce it. We build monitoring and reporting packages tailored to your sites, splitting out specific consumption areas so wastage and anomalies become visible, not buried in a single bill total.`,
    subs: ['Triad / TNUoS avoidance', 'Site & area-level breakdowns', 'GHG emissions tracking', 'Up to 15% bill reduction*'],
  },
];

export default function BeyondServicesList() {
  return (
    <section className="bg-white px-6 lg:px-14 py-10">
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-8">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            What&apos;s included
          </p>
          <h2 className="font-serif-num text-[44px] font-semibold text-ink tracking-[-0.5px] leading-[1.12] mb-4">
            Five services. One job: protect what you&apos;ve already negotiated.
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] font-light max-w-[680px]">
            This isn&apos;t procurement — it&apos;s everything that has to happen correctly once a contract is
            signed and your supply is live. Pick one service or run them together as an ongoing utility partner.
          </p>
        </div>

        <div className="flex flex-col border border-border-color rounded-rl overflow-hidden">
          {services.map((svc, i) => (
            <div
              key={svc.id}
              id={svc.id}
              className={`scroll-mt-[170px] grid grid-cols-1 lg:grid-cols-[50px_100px_1fr] gap-[26px] items-start py-[24px] px-[20px] lg:py-[34px] lg:px-[32px] ${
                i > 0 ? 'border-t border-border-color' : ''
              } ${i % 2 === 1 ? 'bg-off' : 'bg-white'}`}
            >
              <div className="font-serif-num text-[38px] font-bold text-brand-orange leading-[1.1]">
                {svc.num}
              </div>

              <div className="w-full h-[80px] lg:w-[100px] lg:h-[84px] rounded-[14px] bg-[linear-gradient(150deg,#0D1B2A,#13283C)] flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(232,98,10,0.35),transparent_60%)]" />
                <svc.Icon size={30} className="text-white/90 relative z-[1]" strokeWidth={1.5} />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-[10px] mb-2 flex-wrap">
                  <h3 className="font-serif-num text-[25px] italic font-semibold text-ink tracking-[-0.2px]">
                    {svc.title}
                  </h3>
                  <span
                    className={`text-[10px] font-bold px-[10px] py-[3px] rounded-[4px] uppercase tracking-[0.5px] ${getBadgeClass(
                      svc.badge.variant
                    )}`}
                  >
                    {svc.badge.label}
                  </span>
                </div>
                <p className="text-[14px] text-muted leading-[1.75] mb-[10px] max-w-[680px] font-light">
                  {svc.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-[14px]">
                  {svc.subs.map((sub) => (
                    <span
                      key={sub}
                      className="text-[12px] font-semibold text-[#33414F] bg-white border border-border-color px-[13px] py-[6px] rounded-[30px]"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
