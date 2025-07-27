import { type IconType } from 'react-icons';
import { FiLock } from 'react-icons/fi';

export interface Tool {
    id: string;
    name: string;
    description: string;
    categories: string[];
    icon: IconType;
    url: string;
    keywords?: string[];
}

export const tools: Tool[] = [
    {
        id: 'password-generator',
        name: 'Password Generator',
        description: 'Generate secure passwords with custom options',
        categories: ['Generators', 'Security', 'Utilities'],
        icon: FiLock,
        url: '/tools/password-generator',
        keywords: ['password', 'secure', 'random', 'generator', 'security', 'strong password']
    }
];

export const categoryColors: { [key: string]: string } = {
    Generators: 'bg-purple-500/10 text-purple-400 border-purple-500/20 hover:bg-purple-500/20',
    Security: 'bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20',
    Utilities: 'bg-pink-500/10 text-pink-400 border-pink-500/20 hover:bg-pink-500/20'
};

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
