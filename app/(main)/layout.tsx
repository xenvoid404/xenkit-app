import { type Metadata, type Viewport } from 'next';
import { type ReactNode } from 'react';
import { Figtree } from 'next/font/google';
import Script from 'next/script';
import { ThemeProvider } from '@/components/provider/theme-provider';
import { LazyContainer } from '@/components/motion/animations';
import { Header } from '@/components/layout/main/header';
import { Sidebar } from '@/components/layout/main/sidebar';
import { Footer } from '@/components/layout/main/footer';
import '@/app/styles/globals.css';

const figtree = Figtree({
    variable: '--font-figtree',
    subsets: ['latin'],
    display: 'swap',
    preload: true,
    weight: ['300', '400', '500', '600', '700', '800', '900']
});

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#020617' }
    ]
};

export const metadata: Metadata = {
    metadataBase: new URL(process.env.APP_URL),
    title: {
        default: `${process.env.APP_NAME} - Online Developer Tools for Everyday Tasks`,
        template: `%s | ${process.env.APP_NAME}`
    },
    description:
        'The modern toolkit for developers, featuring a comprehensive suite of utilities for data conversion, generation, and security—all in one place to streamline your workflow.',
    keywords: [
        'online tools',
        'developer tools',
        'web utilities',
        'converters',
        'generators',
        'hashing',
        'security tools',
        'developer toolkit',
        'free online tools',
        'json tools'
    ],
    authors: [{ name: 'Xenvoid', url: 'https://github.com/xenvoid404' }],
    creator: 'Xenvoid',
    publisher: 'Xenkit',
    formatDetection: {
        email: false,
        address: false,
        telephone: false
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    },
    manifest: '/site.webmanifest',
    alternates: {
        canonical: '/'
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: process.env.APP_URL,
        siteName: process.env.APP_NAME,
        images: [
            {
                url: `${process.env.APP_URL}/og-image.png`,
                width: 1200,
                height: 630,
                alt: `${process.env.APP_NAME} - Online Developer Tools for Everyday Tasks`
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        images: [`${process.env.APP_URL}/og-image.png`],
        creator: '@xenvoid404'
    },
    category: 'Technology',
    classification: 'Developer Tools',
    icons: {
        icon: '/favicon.ico'
    }
};

export default function MainLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${figtree.variable} antialiased`}>
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-KQGY9YHHQW" strategy="afterInteractive" />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-KQGY9YHHQW');
                    `}
                </Script>
                <LazyContainer>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                        <div className="flex min-h-svh flex-col md:flex-row">
                            <Sidebar />
                            <div className="flex flex-1 flex-col">
                                <Header />
                                <main className="flex-1">{children}</main>
                                <Footer />
                            </div>
                        </div>
                    </ThemeProvider>
                </LazyContainer>
            </body>
        </html>
    );
}
