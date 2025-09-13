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

export function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export function getAllCategories(): string[] {
    const categories = new Set<string>();
    tools.forEach(tool => {
        tool.categories.forEach(category => categories.add(category));
    });
    return Array.from(categories).sort();
}

export function getToolsByCategory(category: string): Tool[] {
    return tools.filter(tool => tool.categories.includes(category));
}

export function getToolsByCategories(categories: string[]): Tool[] {
    return tools.filter(tool => categories.some(category => tool.categories.includes(category)));
}

export function getRandomToolsByCategory(category: string, count: number = 6): Tool[] {
    const categoryTools = getToolsByCategory(category);
    const shuffled = shuffleArray(categoryTools);
    return shuffled.slice(0, count);
}

export function getRandomTools(count: number = 6): Tool[] {
    const shuffled = shuffleArray(tools);
    return shuffled.slice(0, count);
}

export function searchTools(query: string): Tool[] {
    const lowerQuery = query.toLowerCase();
    return tools.filter(
        tool =>
            tool.name.toLowerCase().includes(lowerQuery) ||
            tool.description.toLowerCase().includes(lowerQuery) ||
            tool.categories.some(cat => cat.toLowerCase().includes(lowerQuery)) ||
            (tool.keywords && tool.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery)))
    );
}

export function getRelatedTools(toolId: string, count: number = 4): Tool[] {
    const currentTool = tools.find(tool => tool.id === toolId);
    if (!currentTool) return [];

    const relatedTools = tools.filter(tool => tool.id !== toolId && tool.categories.some(category => currentTool.categories.includes(category)));

    const shuffled = shuffleArray(relatedTools);
    return shuffled.slice(0, count);
}
