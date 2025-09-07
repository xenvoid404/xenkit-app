import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AppThemeToggle } from '@/components/layout/app-theme-toggle';
import { Menu } from 'lucide-react';
import { AppHeaderMenu } from '@/components/layout/app-nav-link';

interface AppHeaderProps {
    openSidebar: () => void;
}

export function AppHeader({ openSidebar }: AppHeaderProps) {
    return (
        <header className="sticky top-0 z-20 flex h-14 items-center border border-b border-muted">
            <div className="flex w-full items-center justify-between px-6">
                <div className="flex h-full items-center">
                    <Link href="/" aria-label="Xenkit - Go to homepage">
                        <h1 className="text-2xl md:text-3xl font-bold text-primary">Xenkit</h1>
                    </Link>
                </div>

                <AppHeaderMenu />

                <div className="flex items-center space-x-2">
                    <AppThemeToggle />
                    <Button type="button" variant="ghost" className="md:hidden" onClick={openSidebar}>
                        <Menu className="size-5" />
                    </Button>
                </div>
            </div>
        </header>
    );
}
