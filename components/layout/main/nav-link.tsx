'use client';
import Link from 'next/link';
import { type LucideIcon, Github } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useSidebarStore } from '@/lib/store/sidebar-store';
import { m, LazyMotion, domAnimation, type Variants } from 'framer-motion';

interface Navigation {
    title: string;
    href: string;
    isExternal: boolean;
    icon?: LucideIcon;
}

const navigations: Navigation[] = [
    { title: 'Home', href: '/', isExternal: false },
    { title: 'Featured Tools', href: '/tools', isExternal: false },
    { title: 'All Tools', href: '/tools', isExternal: false },
    { title: 'About', href: '/about', isExternal: false },
    { title: 'Github', href: 'https://github.com/xenvoid404', isExternal: true, icon: Github }
];

function NavLink({ item, onClick }: { item: Navigation; onClick?: () => void }) {
    const pathname = usePathname();
    const isActive = !item.isExternal && pathname === item.href;

    return (
        <Button variant={isActive ? 'secondary' : 'ghost'} className="w-full" asChild>
            {item.isExternal ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={onClick}>
                    {item.icon && <item.icon />}
                    {item.title}
                </a>
            ) : (
                <Link href={item.href} onClick={onClick}>
                    {item.icon && <item.icon />}
                    {item.title}
                </Link>
            )}
        </Button>
    );
}

export function HeaderMenu() {
    return (
        <nav className="hidden md:flex h-full items-center space-x-1">
            {navigations.map(item => (
                <NavLink item={item} />
            ))}
        </nav>
    );
}

export function SidebarMenu() {
    const { close } = useSidebarStore();

    const menuContainerAnimate: Variants = {
        open: { transition: { delayChildren: 0.2, staggerChildren: 0.1 } },
        close: { transition: { delayChildren: 0.07, staggerChildren: -1 } }
    };

    const menuItemAnimate: Variants = {
        open: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 400, damping: 20 } },
        close: { x: 25, opacity: 0 }
    };

    return (
        <LazyMotion features={domAnimation}>
            <m.nav
                key="menu-container"
                className="flex flex-col items-center gap-8 w-full"
                variants={menuContainerAnimate}
                initial="close"
                animate="open"
                exit="close"
            >
                {navigations.map(item => (
                    <m.div key={item.title} className="w-full text-center" variants={menuItemAnimate}>
                        <NavLink item={item} onClick={close} />
                    </m.div>
                ))}
            </m.nav>
        </LazyMotion>
    );
}

export function FooterMenu() {
    return (
        <footer className="relative bg-gradient-to-br from-muted/10 via-background to-muted/10 border-t border-border/50">
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <h1 className="text-2xl font-bold mb-4 text-primary">Xenkit</h1>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                Your ultimate developer toolkit with all the essential utilities for development, security and productivity in one
                                place.
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <h3 className="font-semibold mb-4 text-foreground">Navigation</h3>
                        <ul className="space-y-3">
                            {navigations.map(item => (
                                <li key={item.title}>
                                    <NavLink item={item} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-1">
                        <h4 className="font-semibold mb-4 text-foreground">Support</h4>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                            If Xenkit has been helpful to you, consider supporting development!
                        </p>
                        <a
                            href="https://buymeacoffee.com/xenvoid404"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 text-sm"
                        >
                            <FiCoffee className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                            <span>Buy Me a Coffee</span>
                        </a>
                    </div>
                </div>

                <div className="border-t border-border/30 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <div className="text-sm text-muted-foreground text-center">
                            © {currentYear} Xenkit. All rights reserved. Made with ❤️ by{' '}
                            <a
                                href="https://github.com/xenvoid404"
                                className="text-primary hover:text-primary/80 hover:underline transition-colors duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                xenvoid404
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-primary via-secondary to-accent opacity-60" />
        </footer>
    );
}
