'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useSidebarStore } from '@/lib/store/sidebar-store';
import { m, LazyMotion, domAnimation, type Variants } from 'framer-motion';
import { type LucideIcon, Github } from 'lucide-react';

interface Navigation {
    title: string;
    href: string;
    isExternal: boolean;
    icon?: LucideIcon;
}

const navigations: Navigation[] = [
    { title: 'Home', href: '/', isExternal: false },
    { title: 'Tools', href: '/tools', isExternal: false },
    { title: 'About', href: '/about', isExternal: false },
    { title: 'Github', href: 'https://github.com/xenvoid404', isExternal: true, icon: Github }
];

export function NavLink({ item, onClick }: { item: Navigation; onClick?: () => void }) {
    const pathname = usePathname();
    const isActive = !item.isExternal && pathname === item.href;

    return (
        <Button variant={isActive ? 'secondary' : 'ghost'} asChild>
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
                <NavLink key={item.title} item={item} />
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
        <div className="lg:col-span-1">
            <h4 className="font-semibold mb-4 text-foreground">Navigation</h4>
            <ul className="space-y-3">
                {navigations.map(item => (
                    <li key={item.title}>
                        <Link
                            href={item.href}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-105 inline-block"
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
