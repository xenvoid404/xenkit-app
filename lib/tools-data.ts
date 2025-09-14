import { type LucideIcon, KeyRound, ArrowRightLeft, FileSignature, Hash, Fingerprint, KeySquare } from 'lucide-react';

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
        description: 'Instantly create strong, random passwords. Customize length, and include uppercase, numbers, and symbols.',
        categories: ['Generators', 'Security', 'Utilities'],
        icon: KeyRound,
        route: '/tools/password-generator'
    },
    {
        id: 2,
        name: 'Base64 Encoder & Decoder',
        slug: 'base64-encoder-decoder',
        description: 'A real-time online tool to encode or decode text and files to and from Base64 format for web-safe strings.',
        categories: ['Converters', 'Encoding', 'Utilities'],
        icon: ArrowRightLeft,
        route: '/tools/base64-encoder-decoder'
    },
    {
        id: 3,
        name: 'JWT Builder & Decoder',
        slug: 'jwt-builder-decoder',
        description: 'Decode, verify, and build JSON Web Tokens (JWT). Inspect headers, payloads, and signatures instantly.',
        categories: ['Development', 'Security', 'API'],
        icon: FileSignature,
        route: '/tools/jwt-builder-decoder'
    },
    {
        id: 4,
        name: 'Hash Generator',
        slug: 'hash-generator',
        description: 'Quickly generate cryptographic hashes from text. Supports MD5, SHA-1, SHA-256, and SHA-512 algorithms.',
        categories: ['Security', 'Encryption', 'Utilities'],
        icon: Hash,
        route: '/tools/hash-generator'
    },
    {
        id: 5,
        name: 'UUID Generator',
        slug: 'uuid-generator',
        description: 'Generate universally unique identifiers (UUIDs) online. Create version 1, 4, or 5 UUIDs for your needs.',
        categories: ['Generators', 'Utilities', 'Development'],
        icon: Fingerprint,
        route: '/tools/uuid-generator'
    },
    {
        id: 6,
        name: 'RSA Key Generator',
        slug: 'rsa-key-generator',
        description: 'Create secure RSA public and private key pairs for encryption or SSH. Customize your desired key size.',
        categories: ['Security', 'Encryption', 'Development'],
        icon: KeySquare,
        route: '/tools/rsa-key-generator'
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

export function getToolsBySlug(slug: string): Tool {
    return tools.find(tool => tool.slug === slug)!;
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
            tool.categories.some(cat => cat.toLowerCase().includes(lowerQuery))
    );
}

export function getRelatedTools(toolId: number, count: number = 4): Tool[] {
    const currentTool = tools.find(tool => tool.id === toolId);
    if (!currentTool) return [];

    const relatedTools = tools.filter(tool => tool.id !== toolId && tool.categories.some(category => currentTool.categories.includes(category)));

    const shuffled = shuffleArray(relatedTools);
    return shuffled.slice(0, count);
}
