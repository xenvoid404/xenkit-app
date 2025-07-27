'use client';
import { useState, useMemo, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ToolCard } from '@/components/ui/tool-card';
import { tools, getAllCategories } from '@/data/tools-data';
import { FiSearch, FiFilter, FiGrid, FiList, FiTrendingUp } from 'react-icons/fi';
import { Breadcrumb } from '@/components/ui/breadcrumb';

type ViewMode = 'grid' | 'list';
type SortMode = 'name' | 'category';

export function ToolsPageClient() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [viewMode, setViewMode] = useState<ViewMode>('grid');
    const [sortMode, setSortMode] = useState<SortMode>('name');
    const [showFilters, setShowFilters] = useState(false);

    const categories = ['all', ...getAllCategories()];

    const filteredTools = useMemo(() => {
        let filtered = tools;

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
    }, [searchTerm, selectedCategory, sortMode]);

    const clearFilters = useCallback(() => {
        setSearchTerm('');
        setSelectedCategory('all');
        setSortMode('name');
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.key === 'k') {
                e.preventDefault();
                document.getElementById('tools-search')?.focus();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring' as const,
                stiffness: 300,
                damping: 30
            }
        }
    };

    return (
        <>
            <div className="min-h-screen bg-background py-8 px-4 overflow-x-hidden">
                <div className="max-w-7xl mx-auto w-full">
                    {/* Breadcrumb */}
                    <Breadcrumb
                        items={[
                            { href: '/', title: 'Home' },
                            { href: '/tools', title: 'Tools' }
                        ]}
                    />

                    {/* Header */}
                    <motion.div
                        className="flex flex-col gap-4 mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                                    <span className="text-gradient-glow">All Developer Tools</span>
                                </h1>
                                <p className="text-muted-foreground text-lg">
                                    Explore our comprehensive collection of developer tools to boost your productivity
                                </p>
                            </div>

                            {/* View Mode Toggle */}
                            <div className="hidden md:flex items-center gap-2 p-1 bg-muted/10 rounded-lg flex-shrink-0 ml-4">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 rounded-md transition-colors ${
                                        viewMode === 'grid' ? 'bg-primary text-background' : 'text-muted-foreground hover:text-foreground'
                                    }`}
                                    aria-label="Grid view"
                                >
                                    <FiGrid className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded-md transition-colors ${
                                        viewMode === 'list' ? 'bg-primary text-background' : 'text-muted-foreground hover:text-foreground'
                                    }`}
                                    aria-label="List view"
                                >
                                    <FiList className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Search and Filters */}
                    <motion.div
                        className="mb-8 space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {/* Search Box */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="relative flex-1 max-w-2xl">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <FiSearch className="h-5 w-5 text-muted-foreground" />
                                </div>
                                <input
                                    id="tools-search"
                                    type="text"
                                    placeholder="Search tools... (Ctrl + K)"
                                    value={searchTerm}
                                    onChange={e => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-background border-2 border-muted/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-lg"
                                    aria-label="Search developer tools"
                                />
                            </div>

                            {/* Filter Toggle */}
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="md:hidden flex items-center gap-2 px-4 py-4 bg-muted/10 border border-muted/30 rounded-xl hover:bg-muted/20 transition-colors"
                            >
                                <FiFilter className="w-5 h-5" />
                                <span>Filter</span>
                            </button>
                        </div>

                        {/* Filters */}
                        <div className={`${showFilters ? 'block' : 'hidden md:block'} overflow-x-auto`}>
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="flex flex-col md:flex-row gap-4 min-w-0"
                            >
                                {/* Category Filter */}
                                <div className="flex-1 min-w-0">
                                    <label className="block text-sm font-medium mb-2">Category:</label>
                                    <div className="flex flex-wrap gap-2">
                                        {categories.map(category => (
                                            <button
                                                key={category}
                                                onClick={() => setSelectedCategory(category)}
                                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                                                    selectedCategory === category
                                                        ? 'bg-primary text-background shadow-lg shadow-primary/25'
                                                        : 'bg-muted/10 text-muted-foreground hover:bg-muted/20 hover:text-foreground border border-muted/30'
                                                }`}
                                            >
                                                {category === 'all' ? 'All Categories' : category}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Sort Options */}
                                <div className="md:w-48 flex-shrink-0">
                                    <label className="block text-sm font-medium mb-2">Sort by:</label>
                                    <select
                                        value={sortMode}
                                        onChange={e => setSortMode(e.target.value as SortMode)}
                                        className="w-full px-3 py-2 bg-background border border-muted/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                                    >
                                        <option value="name">Name A-Z</option>
                                        <option value="category">Category</option>
                                    </select>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Results Summary */}
                    <motion.div
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="text-sm text-muted-foreground">
                            Showing {filteredTools.length} of {tools.length} tools
                            {searchTerm && ` for "${searchTerm}"`}
                            {selectedCategory !== 'all' && ` in "${selectedCategory}" category`}
                        </div>

                        {(searchTerm || selectedCategory !== 'all') && (
                            <button
                                onClick={clearFilters}
                                className="text-sm text-primary hover:text-primary/80 transition-colors self-start sm:self-auto"
                            >
                                Clear Filters
                            </button>
                        )}
                    </motion.div>

                    {/* Tools Grid/List */}
                    <AnimatePresence mode="wait">
                        {filteredTools.length > 0 ? (
                            <motion.div
                                key={`${viewMode}-${selectedCategory}-${sortMode}`}
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-4'}
                            >
                                {filteredTools.map((tool, index) => (
                                    <motion.div key={tool.id} variants={itemVariants} custom={index}>
                                        <ToolCard tool={tool} viewMode={viewMode} className="h-full" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16">
                                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted/10 flex items-center justify-center">
                                    <FiSearch className="w-12 h-12 text-muted-foreground" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">No tools found</h3>
                                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                                    Try adjusting your search criteria or explore all available tools.
                                </p>
                                <button
                                    onClick={clearFilters}
                                    className="px-6 py-3 bg-primary text-background rounded-lg hover:bg-primary/90 transition-colors font-medium"
                                >
                                    Clear Filters
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </>
    );
}
