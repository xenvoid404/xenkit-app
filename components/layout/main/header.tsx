import Link from 'next/link';
import { HeaderMenu } from '@/components/layout/main/nav-link';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { HamburgerButton } from '@/components/ui/hamburger-button';

export function Header() {
    return (
        <header className="sticky top-0 z-40 flex h-14 items-center border-b border-muted bg-background backdrop-blur-md">
            <div className="flex w-full items-center justify-between px-6">
                <div className="flex h-full items-center">
                    <Link href="/" aria-label="Xenkit - Go to homepage">
                        <h1 className="text-2xl md:text-3xl font-bold text-primary">Xenkit</h1>
                    </Link>
                </div>
                <HeaderMenu />
                <div className="flex items-center space-x-1">
                    <ThemeToggle />
                    <HamburgerButton />
                </div>
            </div>
        </header>
    );
}
