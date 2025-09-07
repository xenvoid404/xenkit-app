import Link from 'next/link';
import { AppThemeToggle } from '@/components/layout/app-theme-toggle';
import { AppHeaderMenu } from '@/components/layout/app-nav-link';
import { HamburgerMenu } from '@/components/layout/hamburger-menu';

export function AppHeader() {
    return (
        <header className="sticky top-0 z-40 flex h-14 items-center border-b border-muted bg-background backdrop-blur-md">
            <div className="flex w-full items-center justify-between px-6">
                <div className="flex h-full items-center">
                    <Link href="/" aria-label="Xenkit - Go to homepage">
                        <h1 className="text-2xl md:text-3xl font-bold text-primary">Xenkit</h1>
                    </Link>
                </div>

                <AppHeaderMenu />

                <div className="flex items-center space-x-2">
                    <AppThemeToggle />
                    <HamburgerMenu />
                </div>
            </div>
        </header>
    );
}
