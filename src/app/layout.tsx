import type { Metadata } from 'next';

import './globals.scss';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Elbow Cinema (Next.js Refactor)',
  description: 'Refactor of a cinema booking SPA to Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
