'use client';
import { Button } from '@/components/ui/button';
import { useToolsStore, useCategories } from '@/app/(main)/(home)/lib/store/tools-store';
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
    });

    if (!isMounted || isMobile === undefined) return null;

    if (isMobile) {
        return (
            <div className="flex-1 min-w-0">
                <AnimatedSlideInDown>
                    <Label className="mb-3">Category:</Label>
                </AnimatedSlideInDown>
                <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                        <AnimatedSlideInDown key={category}>
                            <CategoryList category={category} />
                        </AnimatedSlideInDown>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="flex-1 min-w-0">
            <AnimatedSlideInUp>
                <Label className="mb-3">Category:</Label>
            </AnimatedSlideInUp>
            <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                    <AnimatedSlideInUp key={category}>
                        <CategoryList category={category} />
                    </AnimatedSlideInUp>
                ))}
            </div>
        </div>
    );
}

function CategoryList({ category }: { category: string }) {
    const { selectedCategory, setSelectedCategory } = useToolsStore();

    return (
        <Button
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category)}
            className="rounded-full"
        >
            {category === 'all' ? 'All Categories' : category}
        </Button>
    );
}
