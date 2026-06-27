const cards = [
  {
    num: '01',
    title: 'No single point of contact',
    desc: `Most property managers juggle multiple supplier accounts, each with its own login, billing cycle, and
    escalation route. We consolidate everything into one managed account.`,
  },
  {
    num: '02',
    title: 'Renewal timing and lack of market context',
    desc: `Contracts often auto-renew without comparison because there is no process to monitor and act on
    expiry dates. We track every contract and tender at the right time.`,
  },
  {
    num: '03',
    title: 'Invoice errors going unnoticed',
    desc: `Billing errors, duplicate charges, and incorrect tariff applications are common across utility and
    service invoices. Our validation process catches these before they are paid.`,
  },
  {
    num: '04',
    title: 'No portfolio-level visibility',
    desc: `Individual site accounts make it impossible to understand spend, performance, or risk across a whole
    portfolio. We provide consolidated reporting across all sites.`,
  },
  {
    num: '05',
    title: 'Compliance gaps in waste management',
    desc: `Many property managers are unaware of their Duty of Care obligations or have incomplete Waste
    Transfer Note records. We ensure compliance across every waste stream.`,
  },
  {
    num: '06',
    title: 'Supplier disputes with no support',
    desc: `When a supplier underperforms or billing disputes arise, property managers are often left to resolve
    them alone. We act as the intermediary throughout the contract term.`,
  },
];

export default function ChallengesSection() {
  return (
    <section className="scroll-mt-[0] bg-white px-6 lg:px-14 py-10">
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-8">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            Root causes we address
          </p>
          <h2 className="font-serif-num text-[36px] lg:text-[44px] font-semibold text-ink tracking-[-0.5px] leading-[1.12] mb-4">
            The underlying challenges behind the daily friction.
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] font-light max-w-[640px]">
            Utility management problems rarely come from one place — they come from fragmented
            contracts, poor visibility, and no structured oversight process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]">
          {cards.map((card) => (
            <div
              key={card.num}
              className="bg-orange-tint border-[1.5px] border-brand-orange/[0.18] rounded-r px-[24px] py-[26px] transition-all duration-[250ms] hover:border-brand-orange hover:shadow-sh hover:-translate-y-[2px]"
            >
              <div className="w-[38px] h-[38px] rounded-[10px] bg-brand-orange flex items-center justify-center mb-[14px]">
                <span className="font-serif-num text-[14px] font-bold text-white">{card.num}</span>
              </div>
              <h4 className="text-[15px] font-bold text-ink mb-[8px]">{card.title}</h4>
              <p className="text-[13px] text-muted leading-[1.65] font-light">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
