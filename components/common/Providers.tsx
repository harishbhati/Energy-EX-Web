'use client';

import { ReactNode } from 'react';
import { QuoteModalProvider } from '@/contexts/QuoteModalContext';
import QuoteModal from '@/components/common/QuoteModal';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <QuoteModalProvider>
      {children}
      <QuoteModal />
    </QuoteModalProvider>
  );
}
