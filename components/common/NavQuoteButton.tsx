'use client';

import { useQuoteModal } from '@/contexts/QuoteModalContext';

export default function NavQuoteButton() {
  const { openModal } = useQuoteModal();
  return (
    <button
      onClick={openModal}
      className="text-white cursor-pointer text-[14.5px] font-semibold px-6 py-[11px] rounded-rs bg-brand-orange shadow-[0_4px_16px_rgba(232,98,10,0.28)] hover:bg-[#CC5208] hover:-translate-y-px transition-all duration-200"
    >
      Get a Free Quote
    </button>
  );
}
