import { type LucideIcon, LockKeyhole, FileJson } from 'lucide-react';

export interface Tool {
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
        icon: LockKeyhole,
        route: '/tools/password-generator'
    },
    {
        id: 2,
        name: 'Base64 Encoder & Decoder',
        slug: 'base64-encoder-decoder',
        description: 'Encode and decode text to/from Base64 format with real-time conversion',
        categories: ['Converters', 'Encoding', 'Utilities'],
        icon: FileJson,
        route: '/tools/base64-encoder-decoder'
    }
];

export function getAllCategories(): string[] {
    const categories = new Set<string>();
    tools.forEach(tool => {
        tool.categories.forEach(category => categories.add(category));
    });
    return Array.from(categories).sort();
}
