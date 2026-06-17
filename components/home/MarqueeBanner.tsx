import { Sparkle } from 'lucide-react';

const items = [
  { bold: '10,000+', text: ' UK businesses trust Energyex' },
  { bold: null, text: 'Save up to ', boldEnd: '25%', textEnd: ' on energy bills' },
  { bold: '24-hour', text: ' quote turnaround' },
  { bold: '13 years', text: ' of UK energy expertise' },
  { bold: '100% independent', text: ' — we work for you' },
  { bold: null, text: 'Full contract journey ', boldEnd: 'management' },
];

export default function MarqueeBanner() {
  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden py-[13px]"
      style={{
        background: 'linear-gradient(90deg, var(--orange), var(--orange-soft))',
      }}
    >
      <div
        className="flex w-max"
        style={{ animation: 'marquee-scroll 26s linear infinite', willChange: 'transform' }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-[10px] px-[34px] whitespace-nowrap border-r border-white/25"
          >
            <Sparkle size={11} className="text-white/75 flex-shrink-0" />
            <span className="italic text-sm text-white font-medium">
              {item.bold && <b className="font-bold">{item.bold}</b>}
              {item.text}
              {item.boldEnd && <b className="font-bold">{item.boldEnd}</b>}
              {item.textEnd}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
