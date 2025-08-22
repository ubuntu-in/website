import type { Metadata } from 'next';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import './globals.css';
import { Header } from '@/components/header';
import { Toaster } from '@/components/ui/toaster';

const siteUrl = 'https://ubuntu-in.netlify.app';
const defaultOgImage = `${siteUrl}/ubuntu-in-logo.png`;

export const metadata: Metadata = {
  title: {
    default: 'Ubuntu India LoCo',
    template: '%s | Ubuntu India LoCo',
  },
  description: 'Community Hub for Ubuntu India - Events, Resources, and Collaboration for Ubuntu Enthusiasts.',
  keywords: ['ubuntu', 'linux', 'india', 'open source', 'loco', 'community'],
  authors: [{ name: 'Ubuntu India LoCo Team' }],
  metadataBase: new URL(siteUrl),

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    title: 'Ubuntu India LoCo',
    description: 'Community Hub for Ubuntu India - Events, Resources, and Collaboration for Ubuntu Enthusiasts.',
    siteName: 'Ubuntu India LoCo',
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: 'Ubuntu India LoCo Community',
      },
    ],
  },


  twitter: {
    card: 'summary_large_image',
    title: 'Ubuntu India LoCo',
    description: 'Community Hub for Ubuntu India - Events, Resources, and Collaboration for Ubuntu Enthusiasts.',
    images: [defaultOgImage],
  },


  robots: {
    index: true,
    follow: true,
  },

  manifest: '/logos/site.webmanifest',
  icons: {
    icon: '/logos/favicon.ico',
    shortcut: '/logos/favicon-16x16.png',
    apple: '/logos/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased min-h-screen bg-background text-foreground">
        <div className="relative flex min-h-dvh flex-col">
          <Header />
          <main className="flex-1">{children}</main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
