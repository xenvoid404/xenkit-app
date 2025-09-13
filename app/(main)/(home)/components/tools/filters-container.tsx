'use client';
import { useToolsStore, useCategories } from '@/app/(main)/(home)/lib/store/tools-store';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { SortSelect } from './sort-select';
import { CategoryFilter } from './category-filter';
import { m } from 'framer-motion';
import { slideUpVariants } from '@/lib/motion';
import { useMobile } from '@/hooks/use-mobile';
import { AnimatedSlideUp, AnimatedSlideDown } from '@/components/motion/animations';

export function FiltersContainer() {
    const showFilters = useToolsStore(state => state.showFilters);
    const { selectedCategory, setSelectedCategory } = useToolsStore();
    const categories = useCategories();
    const isMobile = useMobile();

    const isVisible = !isMobile || showFilters;

    if (isVisible) {
        return (
            <m.div variant={slideUpVariants} className={`overflow-x-auto ${isMobile ? 'md:hidden' : 'hidden md:block'}`}>
                <div className="flex flex-col md:flex-row gap-6 min-w-0">
                    {isMobile ? (
                        <>
                            <CategoryFilter />
                            <SortSelect />
                        </>
                    ) : (
                        <>
                            <CategoryFilter />
                            <AnimatedSlideUp>
                                <SortSelect />
                            </AnimatedSlideUp>
                        </>
                    )}
                </div>
            </m.div>
        );
    }
}
