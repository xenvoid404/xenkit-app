'use client';
import { Button } from '@/components/ui/button';
import { useToolsStore, useCategories } from '@/app/(main)/(home)/store/tools-store';
import { Label } from '@/components/ui/label';
import { useMobile } from '@/hooks/use-mobile';
import { useState, useEffect } from 'react';
import { AnimatedSlideInUp, AnimatedSlideInDown } from '@/components/motion/animations';

export function CategoryFilter() {
    const categories = useCategories();
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const isMobile = useMobile();

    useEffect(() => {
        if (isMobile !== undefined) setIsMounted(true);
    }, [isMobile]);

    if (!isMounted || isMobile === undefined) return null;

    if (isMobile) {
        return (
            <AnimatedSlideInDown className="flex-1 min-w-0">
                <Label className="mb-3">Category:</Label>
                <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                        <CategoryList key={category} category={category} />
                    ))}
                </div>
            </AnimatedSlideInDown>
        );
    }

    return (
        <AnimatedSlideInUp className="flex-1 min-w-0">
            <Label className="mb-3">Category:</Label>
            <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                    <CategoryList key={category} category={category} />
                ))}
            </div>
        </AnimatedSlideInUp>
    );
}

function CategoryList({ category }: { category: string }) {
    const { selectedCategory, setSelectedCategory } = useToolsStore();

    return (
        <Button
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category)}
            className="rounded-full"
            aria-pressed={selectedCategory === category}
        >
            {category === 'all' ? 'All Categories' : category}
        </Button>
    );
}
