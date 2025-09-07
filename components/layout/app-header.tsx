'use client';
import Link from 'next/link';
import { appNavMenu } from '@/components/layout/app-nav-menu';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

export function AppHeader() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-20 flex h-14 items-center border border-b border-muted">
            <div className="flex w-full items-center justify-between px-6">
                <div className="flex h-full items-center">
                    <Link href="/" aria-label="Xenkit - Go to homepage">
                        <h1 className="text-2xl md:text-3xl font-bold text-primary">Xenkit</h1>
                    </Link>
                </div>

                <nav className="hidden md:flex h-full items-center space-x-1">
                    {appNavMenu.map(item => (
                        <Button key={item.title} variant={!item.isExternal && pathname === item.href ? 'secondary' : 'ghost'} asChild>
                            {item.isExternal ? (
                                <a href={item.href} target="_blank" rel="noopener noreferrer">
                                    {item.icon && <item.icon />}
                                    {item.title}
                                </a>
                            ) : (
                                <Link href={item.href}>
                                    {item.icon && <item.icon />}
                                    {item.title}
                                </Link>
                            )}
                        </Button>
                    ))}
                </nav>
            </div>
        </header>
    );
}
