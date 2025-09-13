'use client';
import { Button } from '@/components/ui/button';
import { useToolsStore, useCategories } from '@/app/(main)/(home)/lib/store/tools-store';
import { Label } from '@/components/ui/label';

export function CategoryFilter() {
    const { selectedCategory, setSelectedCategory } = useToolsStore();
    const categories = useCategories();

    return (
        <div className="flex-1 min-w-0">
            <Label className="mb-3">Category:</Label>
            <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                    <Button
                        key={category}
                        variant={selectedCategory === category ? 'default' : 'outline'}
                        onClick={() => setSelectedCategory(category)}
                        className="rounded-full"
                    >
                        {category === 'all' ? 'All Categories' : category}
                    </Button>
                ))}
            </div>
        </div>
    );
}
