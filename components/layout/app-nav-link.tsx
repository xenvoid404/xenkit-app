'use client';
import Link from 'next/link';
import { m, LazyMotion, domAnimation, type Variants } from 'framer-motion';
import { type LucideIcon, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { useSidebarStore } from '@/lib/store/sidebar-store';

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

function AppNavLink({ item, onClick }: { item: Navigation; onClick?: () => void }) {
    const pathname = usePathname();
    const isActive = !item.isExternal && pathname === item.href;

    return (
        <Button variant={isActive ? 'default' : 'ghost'} asChild>
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

const menuContainerAnimate: Variants = {
    open: { transition: { delayChildren: 0.2, staggerChildren: 0.1 } },
    close: { transition: { delayChildren: 0.07, staggerChildren: -1 } }
};

const menuItemAnimate: Variants = {
    open: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 400, damping: 20 } },
    close: { x: 25, opacity: 0 }
};

export function AppSidebarMenu() {
    const { close } = useSidebarStore();

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
                        <AppNavLink item={item} onClick={close} />
                    </m.div>
                ))}
            </m.nav>
        </LazyMotion>
    );
}

export function AppHeaderMenu() {
    return (
        <nav className="hidden md:flex h-full items-center space-x-1">
            {navigations.map(item => (
                <AppNavLink key={item.title} item={item} />
            ))}
        </nav>
    );
}
