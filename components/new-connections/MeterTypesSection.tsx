import { Zap, BarChart2, Flame, LucideIcon } from 'lucide-react';

type MeterRow = { label: string; desc: string };
type MeterCard = { Icon: LucideIcon; title: string; rows: MeterRow[] };

const meterTypes: MeterCard[] = [
  {
    Icon: Zap,
    title: 'Non-Half Hourly (NHH)',
    rows: [
      {
        label: 'Profile 03',
        desc: 'Single-rated commercial standard meter; no consumption record without an AMR device.',
      },
      {
        label: 'Profile 04 (Economy 7)',
        desc: 'Dual-rated meter; also requires an AMR device to record consumption.',
      },
      {
        label: 'Profile 05–08',
        desc: 'Maximum demand meters, larger sites — record consumption only with an AMR device.',
      },
    ],
  },
  {
    Icon: BarChart2,
    title: 'Half-Hourly (HH)',
    rows: [
      {
        label: 'HH Current Transformer (CT)',
        desc: 'Used where a DNO capacity agreement applies and load exceeds 100 amps; read electronically every 30 minutes.',
      },
      {
        label: 'HH Whole Current (WC)',
        desc: 'No capacity agreement needed; lower amps and voltage, also read every 30 minutes.',
      },
      {
        label: 'Note',
        desc: 'New NHH installs are now Profile 03/04 only — older maximum demand meters were upgraded to HH under the P272 programme.',
      },
    ],
  },
  {
    Icon: Flame,
    title: 'Gas Meters',
    rows: [
      {
        label: 'Commercial Standard',
        desc: 'Single-rated gas meter, suitable for most commercial premises.',
      },
      {
        label: 'With AMR',
        desc: 'Can be fitted with an AMR device for accurate, remote-read billing.',
      },
    ],
  },
];

export default function MeterTypesSection() {
  return (
    <section id="meters" className="scroll-mt-[170px] bg-navy px-6 lg:px-14 py-12 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute -top-[200px] -left-[160px] w-[560px] h-[560px] rounded-full bg-brand-orange/[0.14] blur-[80px] pointer-events-none" />

      <div className="max-w-[1180px] mx-auto relative z-[1]">
        <div className="text-center mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[2.5px] mb-[14px] text-brand-orange-soft">
            Getting the right meter from day one
          </p>
          <h2 className="font-serif-num text-[32px] font-semibold text-white tracking-[-0.5px] leading-[1.12] mb-4">
            Meter types, explained
          </h2>
          <p className="text-[17px] text-white/50 leading-[1.7] font-light max-w-[720px] mx-auto">
            Which meter you need depends on your supply type and consumption. Here&apos;s a quick reference
            for electricity and gas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {meterTypes.map((card) => (
            <div
              key={card.title}
              className="bg-white/[0.05] border border-white/[0.12] rounded-r px-[22px] py-[24px] flex flex-col"
            >
              <div className="flex items-center gap-[10px] mb-[14px]">
                <div className="w-9 h-9 rounded-[9px] bg-brand-orange/[0.18] flex items-center justify-center flex-shrink-0">
                  <card.Icon size={16} className="text-brand-orange-soft" />
                </div>
                <h4 className="text-[14.5px] font-bold text-white">{card.title}</h4>
              </div>

              {card.rows.map((row, i) => (
                <div
                  key={row.label}
                  className={`py-[10px] ${i > 0 ? 'border-t border-white/[0.08]' : ''}`}
                >
                  <strong className="block text-[12.5px] font-bold text-brand-orange-soft mb-[3px]">
                    {row.label}
                  </strong>
                  <span className="text-[12px] text-white/50 leading-[1.55] font-light">{row.desc}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
