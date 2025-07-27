import { type IconType } from 'react-icons';
import { FaGithub } from 'react-icons/fa';

interface Navigation {
    title: string;
    href: string;
    isExternal: boolean;
    icon?: IconType;
}

export const navigation: Navigation[] = [
    { title: 'Home', href: '/', isExternal: false },
    { title: 'GitHub', href: 'https://github.com/xenvoid404', isExternal: true, icon: FaGithub }
];
