'use client';

import { useToolsStore } from '@/app/(main)/(home)/lib/store/tools-store';

type SortMode = 'name' | 'category';

export function SortSelect() {
    const { sortMode, setSortMode } = useToolsStore();

    return (
        <div className="md:w-52 flex-shrink-0">
            <label className="block text-sm font-semibold mb-3 text-foreground">Sort by:</label>
            <select
                value={sortMode}
                onChange={e => setSortMode(e.target.value as SortMode)}
                className="w-full px-4 py-2.5 bg-background/70 backdrop-blur-sm border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 hover:border-border/70 transition-all text-sm font-medium"
            >
                <option value="name">Name A-Z</option>
                <option value="category">Category</option>
            </select>
        </div>
    );
}
