import SectionHeader from '@/components/common/SectionHeader';
import { HomePageContent } from '@/lib/schemas';

type HowItWorksProps = {
  steps: HomePageContent['howItWorks']['steps'];
};

export default function HowItWorks({ steps }: HowItWorksProps) {
  return (
    <div className="mx-auto max-w-[1180px]">
      <SectionHeader
        eyebrow="How It Works"
        titleLines={['Simple process,', 'serious results']}
        lead="From first contact to ongoing account management — here's exactly what working with Energyex looks like."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-4">
        {steps.map((step) => (
          <div key={step.number} className="overflow-hidden rounded-[20px] border border-[color:var(--border)] bg-white p-8 transition shadow-sm hover:shadow-[var(--sh2)] hover:-translate-y-1">
            <div className="mb-6 h-1.5 w-full rounded-full bg-gradient-to-r from-[color:var(--orange)] to-[color:var(--orange-soft)]"></div>
            <div className="font-serif text-[3rem] font-bold leading-none text-[color:var(--orange-tint2)]">{step.number}</div>
            <h3 className="mt-6 text-lg font-semibold text-[color:var(--ink)]">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
