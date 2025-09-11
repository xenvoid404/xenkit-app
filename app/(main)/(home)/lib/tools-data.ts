import { type LucideIcon } from 'lucide-react';

interface Tool {
    id: number;
    name: string;
    slug: string;
    description: string;
    categories: string[];
    icon: LucideIcon;
    route: string;
}

export const tools: Tool[] = [
    {
        id: 1,
        name: 'Password Generator',
        slug: 'password-generator',
        description: 'Generate secure passwords with custom options for enhanced security',
        categories: ['Generators', 'Security', 'Utilities'],
        icon: Lock,
        route: '/tools/password-generator'
    }
];
