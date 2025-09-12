'use client';

import { Button } from '@/components/ui/button';
import { useToolsStore, useCategories } from '@/app/(main)/(home)/lib/store/tools-store';

export function CategoryFilter() {
    const {
        selectedCategory,
        setSelectedCategory
    } = useToolsStore();
    const categories = useCategories();

    return (
        <div className="flex-1 min-w-0">
            <label className="block text-sm font-semibold mb-3 text-foreground">Category:</label>
            <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                    <Button
                        key={category}
                        variant={selectedCategory === category ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className={`rounded-full transition-all duration-300 whitespace-nowrap hover:scale-105 animate-fade-in-up`}
                        style={{ animationDelay: `${index * 30}ms` }}
                    >
                        {category === 'all' ? 'All Categories' : category}
                    </Button>
                ))}
            </div>
        </div>
    );
}
