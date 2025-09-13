'use client';
import { useToolsStore } from '@/app/(main)/(home)/lib/store/tools-store';
import { CategoryFilter } from './category-filter';
import { SortSelect } from './sort-select';
import { AnimatedSlideInUp } from '@/components/motion/animations';

export function FiltersContainer() {
    const showFilters = useToolsStore(state => state.showFilters);

    return (
        <AnimatedSlideInUp className={`${showFilters ? 'block animate-slide-in-up' : 'hidden md:block'} overflow-x-auto`}>
            <div className="flex flex-col md:flex-row gap-6 min-w-0">
                <CategoryFilter />
                <SortSelect />
            </div>
        </AnimatedSlideInUp>
    );
}
