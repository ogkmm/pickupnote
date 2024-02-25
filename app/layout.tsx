import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import Wrapper from '@/components/Wrapper';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'pickupnote',
  description: 'Memorize your favorite music'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white">
      <body className={cn(inter.className)}>
        <Wrapper>{children}</Wrapper>
        <Toaster
          position="top-center"
          containerStyle={{
            top: 40
          }}
          reverseOrder={false}
        />
      </body>
    </html>
  );
}
