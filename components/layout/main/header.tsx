import Link from 'next/link';
import { HeaderMenu } from '@/components/layout/main/nav-link';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { HamburgerButton } from '@/components/ui/hamburger-button';

export function Header() {
    return (
        <header className="sticky top-0 z-40 flex h-14 items-center border-b border-muted bg-background/80 backdrop-blur-md">
            <div className="flex w-full items-center justify-between px-4 sm:px-6">
                <div className="flex h-full items-center">
                    <Link href="/" aria-label="Xenkit - Go to homepage">
                        <span className="text-xl font-bold text-primary sm:text-2xl">Xenkit</span>
                    </Link>
                </div>
                <HeaderMenu />
                <div className="flex items-center gap-1">
                    <ThemeToggle />
                    <HamburgerButton />
                </div>
            </div>
        </header>
    );
}
