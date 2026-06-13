import Icon from '@/components/common/Icon';
import { HomePageContent } from '@/lib/schemas';

type ValuesSectionProps = {
  values: HomePageContent['values'];
  disclosure: HomePageContent['disclosure'];
};

export default function ValuesSection({ values, disclosure }: ValuesSectionProps) {
  return (
    <div className="mx-auto max-w-[1180px]">
      <div className="mb-12">
        <div className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--orange-soft)]">
          <span className="h-1.5 w-8 rounded-full bg-[color:var(--orange)]"></span>
          {values.eyebrow}
        </div>
        <div className="space-y-3">
          {values.titleLines.map((line) => (
            <h2 key={line} className="font-serif text-5xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-6xl">
              {line}
            </h2>
          ))}
        </div>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-[rgba(255,255,255,0.68)]">{values.lead}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {values.cards.map((card) => (
          <div key={card.title} className="rounded-[20px] border border-[rgba(255,255,255,0.16)] bg-white/5 p-8 transition hover:border-[color:var(--orange)] hover:bg-white/10">
            <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(232,98,10,0.14)] text-[color:var(--orange-soft)]">
              <Icon name={card.icon as any} />
            </span>
            <h3 className="text-lg font-semibold text-white">{card.title}</h3>
            <p className="mt-4 text-sm leading-7 text-[rgba(255,255,255,0.55)]">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col gap-5 rounded-[var(--r)] border border-[rgba(255,255,255,0.1)] bg-white/5 p-8">
        <div className="flex items-start gap-4">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(232,98,10,0.14)] text-[color:var(--orange-soft)]">
            <Icon name="fee" />
          </span>
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--orange-soft)]">{disclosure.title}</div>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-[rgba(255,255,255,0.42)]">{disclosure.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
