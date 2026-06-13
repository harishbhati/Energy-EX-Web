import {
  Zap, Flame, Sun, Lightbulb, Plug, Globe, Droplets, Leaf, type LucideIcon,
} from 'lucide-react';

type Supplier = { Icon: LucideIcon; color: string; name: string };

const suppliers: Supplier[] = [
  { Icon: Sun,       color: '#e8620a', name: 'Corona Energy' },
  { Icon: Flame,     color: '#e8620a', name: 'British Gas' },
  { Icon: Zap,       color: '#0a8a5a', name: 'TotalEnergies' },
  { Icon: Flame,     color: '#e8620a', name: 'CNG' },
  { Icon: Lightbulb, color: '#b8860b', name: 'SmartestEnergy' },
  { Icon: Zap,       color: '#cc3333', name: 'E.ON' },
  { Icon: Zap,       color: '#0d1b2a', name: 'SSE' },
  { Icon: Droplets,  color: '#1a6bbd', name: 'Haven Power' },
  { Icon: Flame,     color: '#1a6bbd', name: 'Gazprom' },
  { Icon: Leaf,      color: '#0a8a5a', name: 'Yorkshire Gas & Power' },
  { Icon: Leaf,      color: '#0a8a5a', name: 'Hudson Energy' },
  { Icon: Plug,      color: '#cc3333', name: 'EDF Energy' },
  { Icon: Flame,     color: '#e8620a', name: 'British Gas Lite' },
  { Icon: Globe,     color: '#1a6bbd', name: 'ENGIE' },
  { Icon: Zap,       color: '#0a8a5a', name: 'ScottishPower' },
  { Icon: Zap,       color: '#7b3fa0', name: 'Opus Energy' },
  { Icon: Zap,       color: '#cc3333', name: 'E.ON Next' },
];

export default function SuppliersMarquee() {
  const doubled = [...suppliers, ...suppliers];

  return (
    <div
      className="py-9 border-t border-b border-[color:var(--border)]"
      style={{ background: '#fff' }}
    >
      <div
        className="text-center font-bold uppercase tracking-[2px] mb-8"
        style={{ fontSize: '11px', color: 'var(--faint)' }}
      >
        Comparing the best deals from 30+ approved UK suppliers
      </div>

      <div className="overflow-hidden relative">
        {/* Fade edges */}
        <div
          className="absolute top-0 bottom-0 left-0 w-[120px] z-[2] pointer-events-none"
          style={{ background: 'linear-gradient(90deg,#fff,transparent)' }}
        />
        <div
          className="absolute top-0 bottom-0 right-0 w-[120px] z-[2] pointer-events-none"
          style={{ background: 'linear-gradient(270deg,#fff,transparent)' }}
        />

        <div
          className="flex w-max gap-4"
          style={{ animation: 'marquee-scroll 28s linear infinite', willChange: 'transform' }}
        >
          {doubled.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-[var(--r)] px-[26px] py-4 whitespace-nowrap"
              style={{
                background: 'var(--off)',
                border: '1px solid var(--border)',
              }}
            >
              <div
                className="w-9 h-9 rounded-[9px] flex items-center justify-center flex-shrink-0"
                style={{ background: '#fff', border: '1px solid var(--border)' }}
              >
                <s.Icon size={18} style={{ color: s.color }} />
              </div>
              <span
                className="font-bold"
                style={{ fontSize: '15px', color: 'var(--ink-soft)' }}
              >
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
