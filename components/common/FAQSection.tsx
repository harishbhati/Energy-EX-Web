'use client';
import { useState } from 'react';

type FAQItem = { q: string; a: string };

export default function FAQSection({
  eyebrow,
  title,
  items,
}: {
  eyebrow?: string;
  title: string;
  items: FAQItem[];
}) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-[88px] px-14">
      <div className="max-w-[1180px] mx-auto">
        {/* Header */}
        <div className="text-center">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-orange mb-3">
              {eyebrow}
            </p>
          )}
          <h2
            className="font-['Cormorant_Garamond'] text-[2.4rem] font-semibold text-ink leading-[1.15] tracking-[-0.5px]"
          >
            {title}
          </h2>
        </div>

        {/* FAQ list */}
        <div className="max-w-[780px] mx-auto mt-8">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-border-color">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className={`flex items-center justify-between gap-5 py-[22px] px-1 cursor-pointer text-base font-semibold w-full text-left transition-colors duration-200 ${
                    isOpen ? 'text-brand-orange' : 'text-ink'
                  }`}
                >
                  <span>{item.q}</span>
                  <span
                    className={`w-7 h-7 rounded-full border-[1.5px] flex items-center justify-center text-base flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-brand-orange border-brand-orange text-white rotate-45'
                        : 'border-border-strong text-muted'
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                    isOpen ? 'max-h-[200px]' : 'max-h-0'
                  }`}
                >
                  <p className="text-[14.5px] text-muted leading-[1.75] px-1 pb-[22px] font-light max-w-[680px]">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
