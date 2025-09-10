import { type Metadata, type Viewport } from 'next';
import { type ReactNode } from 'react';
import { Figtree } from 'next/font/google';
import Script from 'next/script';
import { ThemeProvider } from '@/components/provider/theme-provider';
import { Header } from '@/components/layout/main/header';
import { Sidebar } from '@/components/layout/main/sidebar';
import { Footer } from '@/components/layout/main/footer';

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
    metadataBase: new URL('https://xenkit.my.id'),
    title: {
        default: 'Xenkit - Developer Tools for the Web',
        template: '%s | Xenkit'
    },
    description:
        'Xenkit is a modern toolkit for developers offering a wide range of utilities such as encoders, decoders, generators, and formatters — all in one place to enhance your productivity.',
    icons: {
        icon: [{ url: '/favicon.ico', sizes: 'any' }]
    },
    keywords: [
        'developer tools',
        'online dev tools',
        'code formatter',
        'base64 decoder',
        'uuid generator',
        'text utilities',
        'developer productivity',
        'online tools for developers',
        'web tools',
        'Xenkit',
        'password generator',
        'json formatter',
        'url encoder',
        'regex tester',
        'color picker',
        'hash generator',
        'free online tools',
        'developer utilities',
        'coding tools'
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
        canonical: 'https://xenkit.my.id'
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://xenkit.my.id',
        siteName: 'Xenkit',
        title: 'Xenkit - Developer Tools for the Web',
        description: 'Your ultimate toolkit with all the essential utilities for development, security and productivity in one place.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Xenkit - Developer Tools for the Web'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Xenkit - Developer Tools for the Web',
        description: 'Your ultimate toolkit with all the essential utilities for development, security and productivity in one place.',
        images: ['/og-image.png'],
        creator: '@xenvoid404'
    },
    category: 'Technology',
    classification: 'Developer Tools',
    other: {
        'apple-mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-status-bar-style': 'default',
        'apple-mobile-web-app-title': 'Xenkit',
        'google-site-verification': 'your-google-verification-code-here'
    }
};

export default function MainLayout({ children }: Readonly<{ children: ReactNode }>) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Xenkit',
        description: 'Modern toolkit for developers with essential utilities for development, security and productivity.',
        url: 'https://xenkit.com',
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://xenkit.com/tools?search={search_term_string}'
            },
            'query-input': 'required name=search_term_string'
        },
        publisher: {
            '@type': 'Organization',
            name: 'Xenkit',
            url: 'https://xenkit.com',
            logo: {
                '@type': 'ImageObject',
                url: 'https://xenkit.com/logo.png'
            },
            sameAs: ['https://github.com/xenvoid404']
        },
        mainEntity: {
            '@type': 'ItemList',
            name: 'Developer Tools',
            description: 'Collection of essential developer tools and utilities',
            numberOfItems: 25,
            itemListElement: [
                {
                    '@type': 'SoftwareApplication',
                    name: 'Password Generator',
                    description: 'Generate secure, random passwords with customizable options',
                    url: 'https://xenkit.com/tools/password-generator',
                    applicationCategory: 'SecurityApplication'
                }
            ]
        }
    };

    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${figtree.variable} antialiased`}>
                <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-KQGY9YHHQW" strategy="afterInteractive" />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-KQGY9YHHQW');
                    `}
                </Script>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <div className="flex min-h-screen">
                        <Sidebar />
                        <div className="flex flex-1 flex-col overflow-hidden">
                            <Header />
                            <main className="flex-1 overflow-y-auto">
                                <div className="flex flex-col gap-4">{children}</div>
                            </main>
                            <Footer />
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
