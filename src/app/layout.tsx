import type { Metadata } from 'next';

import StyledComponentsRegistry from '@/lib/registry';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'React - Boilerplate',
  description:
    'A simple project starter to work with TypeScript, React, NextJS and Styled Components',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
