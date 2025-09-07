import { type LucideIcon, Github } from 'lucide-react';

interface AppNavMenuProps {
    title: string;
    href: string;
    isExternal: boolean;
    icon?: LucideIcon;
}

export const appNavMenu: AppNavMenuProps[] = [
    { title: 'Home', href: '/', isExternal: false },
    { title: 'Tools', href: '/tools', isExternal: false },
    { title: 'About', href: '/about', isExternal: false },
    { title: 'Github', href: 'https://github.com/xenvoid404', isExternal: true, icon: Github }
];
