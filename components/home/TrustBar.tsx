import Icon from '@/components/common/Icon';
import { HomePageContent } from '@/lib/schemas';

type TrustBarProps = {
  items: HomePageContent['trustItems'];
};

export default function TrustBar({ items }: TrustBarProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 border-b border-[color:var(--border)] bg-[color:var(--off)] px-6 py-5 md:px-10 xl:px-14">
      {items.flatMap((item, index) => [
        <div key={item.label} className="flex items-center gap-3 text-sm font-semibold text-[color:var(--muted)]">
          <Icon name={item.icon as any} className="h-10 w-10" />
          <span>{item.label}</span>
        </div>,
        index < items.length - 1 ? <span key={`divider-${index}`} className="h-6 w-px bg-[color:var(--border)]" /> : null,
      ])}
    </div>
  );
}
