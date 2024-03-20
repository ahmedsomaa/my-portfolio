import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '../styles/globals.css';

import MaxWidthWrapper from '@/components/max-width-wrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://som3aware.vercel.app/'),
  title: { default: 'Ahmed Abu Qahf', template: '%s | Ahmed Abu Qahf' },
  description: 'Developer & YouTuber',
  openGraph: {
    title: 'Som3aware',
    description: 'Software Engineer',
    url: 'https://som3aware.vercel.app/',
    siteName: 'Ahmed Abu Qahf',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Ahmed Abu Qahf',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body
        className={`bg-primary text-secondary text-sm md:text-base ${inter.className}`}
      >
        <main className="bg-white dark:bg-black min-h-screen flex flex-col items-center">
          <MaxWidthWrapper>
            <div className="flex-1 w-full flex flex-col gap-8 items-center">
              {children}
            </div>
          </MaxWidthWrapper>
        </main>
      </body>
    </html>
  );
}
