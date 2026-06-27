'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Zap, Flame, Sun, PlugZap, BarChart3, Droplets, Recycle, Building2, Sparkles, type LucideIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useQuoteModal } from '@/contexts/QuoteModalContext';

type DropdownItem = { icon: string; label: string; description: string; href: string };
type NavLink = { label: string; href: string; dropdown?: DropdownItem[] };

const NAV_ICON_MAP: Record<string, LucideIcon> = {
  zap: Zap,
  flame: Flame,
  sun: Sun,
  plugZap: PlugZap,
  barChart: BarChart3,
  droplets: Droplets,
  recycle: Recycle,
  building: Building2,
  sparkles: Sparkles,
};

function NavIcon({ name }: { name: string }) {
  const Icon = NAV_ICON_MAP[name];
  return Icon ? <Icon size={18} className="text-brand-orange" /> : null;
}

export default function MobileNav({ navLinks }: { navLinks: NavLink[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const { openModal } = useQuoteModal();

  useEffect(() => { setIsOpen(false); setExpanded(null); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen]);

  return (
    <>
      {/* Hamburger toggle — mobile only */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={isOpen}
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-[var(--rs)] text-ink transition-colors hover:bg-off"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Backdrop */}
      <div
        aria-hidden="true"
        className={`md:hidden fixed inset-0 top-[74px] bg-black/30 z-[150] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Slide-down drawer */}
      <div
        className={`md:hidden fixed left-0 right-0 top-[74px] z-[160] bg-white shadow-[0_8px_32px_rgba(13,27,42,0.12)] border-b border-[color:var(--border)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? 'max-h-[calc(100vh-74px)] overflow-y-auto opacity-100' : 'max-h-0 overflow-hidden opacity-0'
        }`}
      >
        <div className="px-5 pt-5 pb-8 flex flex-col gap-[2px]">
          {navLinks.map((link) => {
            const isActive = link.dropdown
              ? pathname === link.href || link.dropdown.some((item) => pathname === item.href)
              : pathname === link.href;
            const isExpanded = expanded === link.href;

            if (link.dropdown) {
              return (
                <div key={link.href}>
                  <button
                    onClick={() => setExpanded(isExpanded ? null : link.href)}
                    className={`w-full flex items-center justify-between px-4 py-[13px] rounded-[var(--rs)] text-left transition-colors duration-200 ${
                      isActive ? 'bg-orange-tint text-brand-orange' : 'text-ink hover:bg-off'
                    }`}
                  >
                    <span className="font-semibold text-[15px]">{link.label}</span>
                    <ChevronDown
                      size={16}
                      className={`flex-shrink-0 text-muted transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Dropdown items */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isExpanded ? 'max-h-[600px]' : 'max-h-0'
                    }`}
                  >
                    <div className="ml-4 mt-1 mb-1 flex flex-col gap-[2px]">
                      {link.dropdown.map((item) => {
                        const isItemActive = pathname === item.href;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center gap-3 px-4 py-[10px] rounded-[var(--rs)] transition-colors duration-200 ${
                              isItemActive ? 'bg-orange-tint' : 'hover:bg-off'
                            }`}
                          >
                            <span className="w-[30px] h-[30px] rounded-[6px] flex items-center justify-center flex-shrink-0 bg-orange-tint">
                              <NavIcon name={item.icon} />
                            </span>
                            <div>
                              <div
                                className={`text-[14px] font-semibold ${
                                  isItemActive ? 'text-brand-orange' : 'text-ink'
                                }`}
                              >
                                {item.label}
                              </div>
                              <div className="text-xs text-muted font-light">{item.description}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-4 py-[13px] rounded-[var(--rs)] font-semibold text-[15px] transition-colors duration-200 ${
                  isActive ? 'bg-orange-tint text-brand-orange' : 'text-ink hover:bg-off'
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="my-3 h-px bg-[color:var(--border)]" />

          <button
            onClick={() => { openModal(); setIsOpen(false); }}
            className="w-full py-[14px] rounded-[var(--rs)] bg-brand-orange text-white font-bold text-[15px] shadow-[0_4px_16px_rgba(232,98,10,0.3)] hover:bg-[#CC5208] transition-colors duration-200"
          >
            Get a Free Quote
          </button>
        </div>
      </div>
    </>
  );
}
