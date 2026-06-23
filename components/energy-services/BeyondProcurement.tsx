import Link from 'next/link';
import { ClipboardList, Receipt, TrendingUp, RefreshCw, Users, Leaf, LucideIcon } from 'lucide-react';

const cards: { Icon: LucideIcon; title: string; desc: string }[] = [
  { Icon: ClipboardList, title: 'Compliance Monitoring', desc: "We keep you updated on regulatory changes, TUoS, DUoS, and Ofgem requirements so you're never caught out." },
  { Icon: Receipt, title: 'Bill Validation', desc: 'Every invoice checked against contract rates. We identify overcharges and recover money on your behalf.' },
  { Icon: TrendingUp, title: 'Usage Reporting', desc: 'Monthly consumption summaries and trend analysis — giving you the data to make smarter energy decisions.' },
  { Icon: RefreshCw, title: 'Renewal Management', desc: "We track every contract end date and go back to market at the right time, so you're never on out-of-contract rates." },
  { Icon: Users, title: 'Supplier Relations', desc: 'One call to us covers any supplier query, complaint, or dispute. We handle it all on your behalf.' },
  { Icon: Leaf, title: 'Carbon & Sustainability', desc: 'Advice on green tariffs, REGOs, and carbon reporting to support your net-zero commitments.' },
];

const stats = [
  { value: '10,000+', label: 'Clients managed' },
  { value: '£0', label: 'Cost to engage' },
  { value: '25%', label: 'Average saving' },
];

export default function BeyondProcurement() {
  return (
    <section className="relative bg-navy py-[96px] px-14 overflow-hidden">
      <div
        className="absolute top-[-220px] left-[-220px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,98,10,0.18) 0%, transparent 70%)' }}
      />

      <div className="max-w-[1180px] mx-auto relative">
        <div className="text-center mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[2.5px] text-brand-orange-soft mb-3">
            Beyond Procurement
          </p>
          <h2 className="font-serif-num text-[42px] font-semibold text-white leading-[1.12] tracking-[-0.5px]">
            Full energy management,{' '}
            <em className="text-brand-orange-soft not-italic">not just a quote.</em>
          </h2>
          <p className="text-white/60 text-[15px] leading-[1.7] mt-4 max-w-[560px] mx-auto">
            Our service doesn't end when you sign a contract. We stay active throughout its life — validating bills, tracking renewals, and managing every supplier query.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5 mb-14">
          {cards.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="border border-white/10 rounded-r p-7 hover:border-brand-orange/40 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-[10px] bg-white/[0.08] flex items-center justify-center mb-4">
                <Icon size={18} className="text-brand-orange-soft" />
              </div>
              <h4 className="text-white font-semibold text-[15px] mb-2">{title}</h4>
              <p className="text-white/55 text-[13.5px] leading-[1.65] font-light">{desc}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-10 grid grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-[2.2rem] font-black text-brand-orange-soft tracking-[-1px]">{stat.value}</p>
              <p className="text-white/55 text-[13px] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/beyond-procurement"
            className="text-brand-orange-soft text-[14px] font-semibold hover:text-white transition-colors duration-200"
          >
            Learn more about our ongoing management →
          </Link>
        </div>
      </div>
    </section>
  );
}
