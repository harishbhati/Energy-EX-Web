const stats = [
  { value: '20+', desc: 'years managing UK business energy' },
  { value: '£2m+', desc: 'recovered through invoice validation' },
  { value: '6 yrs', desc: 'retrospective audit window' },
  { value: '15%', desc: 'average bill reduction via monitoring' },
];

export default function WhyItMattersSection() {
  return (
    <section className="bg-navy px-6 lg:px-14 py-[60px] relative overflow-hidden">
      <div className="absolute -top-[220px] -left-[220px] w-[600px] h-[600px] rounded-full bg-brand-orange/[0.14] blur-[80px] pointer-events-none" />

      <div className="max-w-[1180px] mx-auto relative z-[1] text-center">
        <p className="text-[11px] font-bold text-brand-orange-soft uppercase tracking-[2.5px] mb-[14px]">
          Why it matters
        </p>
        <h2 className="font-serif-num text-[36px] lg:text-[42px] font-semibold text-white tracking-[-0.5px] leading-[1.12] mb-4">
          Most businesses only notice energy problems when they hit the P&L.
        </h2>
        <p className="text-[16px] text-white/55 leading-[1.75] font-light max-w-[620px] mx-auto">
          By the time a billing error, a capacity breach, or a missed compliance deadline surfaces, the cost
          has already landed. We catch these issues before they become invoices.
        </p>

        <div className="flex justify-center flex-wrap gap-12 mt-8 pt-7 border-t border-white/10">
          {stats.map((stat) => (
            <div key={stat.value} className="text-center">
              <div className="text-[26px] font-extrabold text-brand-orange-soft mb-[4px]">
                {stat.value}
              </div>
              <div className="text-[13px] text-white/45 font-light max-w-[120px] mx-auto leading-[1.5]">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
