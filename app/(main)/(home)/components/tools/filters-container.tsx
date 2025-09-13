'use client';
import { useToolsStore, useCategories } from '@/app/(main)/(home)/lib/store/tools-store';
import { SortSelect } from './sort-select';
import { CategoryFilter } from './category-filter';
import { useMobile } from '@/hooks/use-mobile';
import { AnimatedStaggerContainer } from '@/components/motion/animations';

export function FiltersContainer() {
    const showFilters = useToolsStore(state => state.showFilters);
    const isMobile = useMobile();

    const isVisible = !isMobile || showFilters;

    if (!isVisible) {
        return null;
    }

    return (
        <AnimatedStaggerContainer className={isMobile ? 'md:hidden' : 'hidden md:block'}>
            <div className="flex flex-col md:flex-row gap-6 min-w-0">
                <CategoryFilter isMobile={isMobile} />
                <SortSelect isMobile={isMobile} />
            </div>
        </AnimatedStaggerContainer>
    );
}
