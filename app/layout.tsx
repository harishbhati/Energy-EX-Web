import './globals.css';
import type { Metadata } from 'next';
import { siteMeta } from '@/constants/content';
import Providers from '@/components/common/Providers';

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
