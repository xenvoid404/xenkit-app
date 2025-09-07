'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AppThemeToggle } from '@/components/layout/app-theme-toggle';
import { Menu } from 'lucide-react';
import { AppHeaderMenu } from '@/components/layout/app-nav-link';
import { useSidebarStore } from '@/lib/store/sidebar-store';

export function AppHeader() {
    const { toggle } = useSidebarStore();

    return (
        <header className="sticky top-0 z-40 flex h-14 items-center border-b border-muted bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container flex w-full items-center justify-between">
                <div className="flex h-full items-center">
                    <Link href="/" aria-label="Xenkit - Go to homepage">
                        <h1 className="text-2xl md:text-3xl font-bold text-primary">Xenkit</h1>
                    </Link>
                </div>

                <div className="hidden md:block">
                    <AppHeaderMenu />
                </div>

                <div className="flex items-center space-x-2">
                    <AppThemeToggle />
                    <Button type="button" variant="ghost" size="icon" className="md:hidden" onClick={toggle}>
                        <Menu />
                    </Button>
                </div>
            </div>
        </header>
    );
}
