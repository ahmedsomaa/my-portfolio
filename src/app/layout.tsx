import type { Metadata } from 'next';

import '../styles/globals.css';

import { Footer } from '@/components/footer';
import MaxWidthWrapper from '@/components/max-width-wrapper';

import { Header } from '../components/header';
import { fontSans } from './fonts';

export const metadata: Metadata = {
  metadataBase: new URL('https://som3aware.vercel.app/'),
  title: { default: 'Som3aware', template: '%s | Som3aware' },
  description: 'Software Engineer',
  openGraph: {
    title: 'Som3aware',
    description: 'Software Engineer',
    url: 'https://som3aware.vercel.app/',
    siteName: 'Som3aware',
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
    title: 'Som3aware',
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
        className={`bg-[#121212] text-secondary text-sm md:text-sm ${fontSans.className}`}
      >
        <main className="min-h-screen flex flex-col items-center">
          <MaxWidthWrapper>
            <div className="flex-1 w-full flex flex-col gap-6 items-center">
              <Header />
              {children}
              <Footer />
            </div>
          </MaxWidthWrapper>
        </main>
      </body>
    </html>
  );
}
