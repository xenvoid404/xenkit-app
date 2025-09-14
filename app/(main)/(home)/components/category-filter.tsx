'use client';
import { Button } from '@/components/ui/button';
import { useToolsStore, useCategories } from '@/app/(main)/(home)/store/tools-store';
import { Label } from '@/components/ui/label';
import { useMobile } from '@/hooks/use-mobile';
import { useState, useEffect } from 'react';
import { AnimatedSlideInUp, AnimatedSlideInDown, AnimatedStaggerDiv } from '@/components/motion/animations';

export function CategoryFilter() {
    const showFilters = useToolsStore(state => state.showFilters);
    const categories = useCategories();
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const isMobile = useMobile();

    useEffect(() => {
        if (isMobile !== undefined) setIsMounted(true);
    }, [isMobile]);

    if (!isMounted || isMobile === undefined) return null;

    if (isMobile) {
        return (
            <AnimatedStaggerDiv key={+showFilters} className="flex-1 min-w-0">
                <AnimatedSlideInDown>
                    <Label className="mb-3">Category:</Label>
                    <div className="flex flex-wrap gap-2">
                        {categories.map(category => (
                            <CategoryList key={category} category={category} />
                        ))}
                    </div>
                </AnimatedSlideInDown>
            </AnimatedStaggerDiv>
        );
    }

    return (
        <AnimatedStaggerDiv className="flex-1 min-w-0">
            <AnimatedSlideInUp>
                <Label className="mb-3">Category:</Label>
                <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                        <CategoryList key={category} category={category} />
                    ))}
                </div>
            </AnimatedSlideInUp>
        </AnimatedStaggerDiv>
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
