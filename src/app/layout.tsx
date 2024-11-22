import type { Metadata } from 'next';
import { inter } from './style/fonts';
import './style/globals.css';

export const metadata: Metadata = {
  title: 'Test Next App',
  description: 'Generated & Updated from create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
