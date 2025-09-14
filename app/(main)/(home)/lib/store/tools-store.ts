import { create } from 'zustand';
import { tools, getAllCategories, type Tool } from '@/lib/tools-data';

type SortMode = 'name' | 'category';

interface ToolsState {
    searchTerm: string;
    selectedCategory: string;
    sortMode: SortMode;
    showFilters: boolean;
    setSearchTerm: (term: string) => void;
    setSelectedCategory: (category: string) => void;
    setSortMode: (mode: SortMode) => void;
    toggleFilters: () => void;
    clearFilters: () => void;
}

export const useToolsStore = create<ToolsState>(set => ({
    searchTerm: '',
    selectedCategory: 'all',
    sortMode: 'name',
    showFilters: false,
    setSearchTerm: term => set({ searchTerm: term }),
    setSelectedCategory: category => set({ selectedCategory: category }),
    setSortMode: mode => set({ sortMode: mode }),
    toggleFilters: () => set(state => ({ showFilters: !state.showFilters })),
    clearFilters: () => set({ searchTerm: '', selectedCategory: 'all', sortMode: 'name' })
}));

export const useFilteredTools = () => {
    const { searchTerm, selectedCategory, sortMode } = useToolsStore();

    let filtered: Tool[] = [...tools];

    if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        filtered = filtered.filter(
            tool =>
                tool.name.toLowerCase().includes(searchLower) ||
                tool.description.toLowerCase().includes(searchLower) ||
                tool.categories.some(category => category.toLowerCase().includes(searchLower))
        );
    }

    if (selectedCategory !== 'all') {
        filtered = filtered.filter(tool => tool.categories.includes(selectedCategory));
    }

    filtered.sort((a, b) => {
        switch (sortMode) {
            case 'category':
                return a.categories[0].localeCompare(b.categories[0]);
            case 'name':
            default:
                return a.name.localeCompare(b.name);
        }
    });

    return filtered;
};

export const useCategories = () => ['all', ...getAllCategories()];
