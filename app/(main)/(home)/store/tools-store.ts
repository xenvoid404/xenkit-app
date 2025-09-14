import { create } from 'zustand';
import { tools, getAllCategories, searchTools, getToolsByCategory } from '@/lib/tools-data';

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

    let filtered = searchTerm ? searchTools(searchTerm) : [...tools];

    if (selectedCategory !== 'all') {
        filtered = getToolsByCategory(selectedCategory);
    }

    const sorted = [...filtered].sort((a, b) => {
        switch (sortMode) {
            case 'nameDesc':
                return b.name.localeCompare(a.name);
            case 'nameAsc':
            default:
                return a.name.localeCompare(b.name);
        }
    });

    return sorted;
};

export const useCategories = () => {
    return ['all', ...getAllCategories()];
};
