import Icon from '@/components/common/Icon';
import SectionHeader from '@/components/common/SectionHeader';
import { HomePageContent } from '@/lib/schemas';

type WhoWeAreProps = {
  content: HomePageContent['whoWeAre'];
};

export default function WhoWeAre({ content }: WhoWeAreProps) {
  return (
    <div className="mx-auto grid max-w-[1180px] gap-16 lg:grid-cols-[1fr_0.95fr]">
      <div>
        <SectionHeader eyebrow={content.eyebrow} titleLines={content.titleLines} highlightLine={content.titleLines[0]} />
        <div className="mt-8 space-y-6 text-sm leading-7 text-[color:var(--ink-soft)]">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-8 space-y-4">
          {content.highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="flex gap-4 rounded-[18px] border border-[color:var(--border)] bg-white p-5 shadow-[var(--sh)] transition hover:border-[color:var(--orange)] hover:translate-x-1"
            >
              <Icon name={highlight.icon as any} />
              <div>
                <strong className="block text-sm font-bold text-[color:var(--ink)]">{highlight.title}</strong>
                <span className="text-sm text-[color:var(--muted)]">{highlight.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[24px] bg-[color:var(--white)] shadow-[var(--sh2)]">
        <img src={content.imageUrl} alt="Energy consultants reviewing contracts" className="h-[420px] w-full object-cover" loading="lazy" />
        <div className="absolute bottom-6 left-6 rounded-[18px] bg-[color:var(--navy)] px-5 py-4 text-white shadow-[0_15px_40px_rgba(0,0,0,0.18)]">
          <div className="font-serif text-4xl font-semibold text-[color:var(--orange-soft)]">{content.imageBadge.number}</div>
          <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/70">{content.imageBadge.label}</div>
        </div>
      </div>
    </div>
  );
}
