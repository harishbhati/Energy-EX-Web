import Icon from '@/components/common/Icon';
import SectionHeader from '@/components/common/SectionHeader';
import { HomePageContent } from '@/lib/schemas';

type WhyChooseUsProps = {
  data: HomePageContent['whyChooseUs'];
};

export default function WhyChooseUs({ data }: WhyChooseUsProps) {
  return (
    <div className="mx-auto grid max-w-[1180px] gap-16 lg:grid-cols-[1fr_0.95fr]">
      <div>
        <SectionHeader eyebrow={data.eyebrow} titleLines={data.titleLines} lead={data.lead} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {data.cards.map((card) => (
            <div key={card.title} className="group overflow-hidden rounded-[20px] border border-[color:var(--border)] bg-white p-6 transition hover:border-[color:var(--orange)] hover:shadow-[0_12px_36px_rgba(232,98,10,0.12)] hover:-translate-y-1">
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--orange-tint)] text-[color:var(--orange)] transition-transform duration-300 group-hover:-translate-y-1">
                <Icon name={card.icon as any} className="h-6 w-6" />
              </span>
              <h3 className="text-base font-bold text-[color:var(--ink)]">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[24px] bg-[color:var(--navy)] shadow-[var(--sh2)]">
        <img src={data.imageUrl} alt="Power lines and energy infrastructure" className="h-[540px] w-full object-cover brightness-[0.85]" loading="lazy" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(13,27,42,0.85)_0%,transparent_55%)]" />
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <div className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">{data.heroText}</div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {data.stats.map((stat) => (
              <div key={stat.label}>
                <strong className="block text-3xl font-black text-[color:var(--orange-soft)]">{stat.value}</strong>
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/70">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
