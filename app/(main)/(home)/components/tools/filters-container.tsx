'use client';
import { useToolsStore } from '@/app/(main)/(home)/lib/store/tools-store';
import { CategoryFilter } from './category-filter';
import { SortSelect } from './sort-select';
import { AnimatedSlideUp, AnimatedSlideDown } from '@/components/motion/animations';
import { useMobile } from '@/hooks/use-mobile';

export function FiltersContainer() {
    const showFilters = useToolsStore(state => state.showFilters);
    const isMobile = useMobile();

    const isVisible = !isMobile || showFilters;

    if (isMobile === undefined) {
        return <div className="hidden md:block" style={{ height: '96px' }} />;
    }

    return (
        <>
            {isVisible && (
                <div className={`overflow-x-auto ${isMobile ? 'md:hidden' : 'hidden md:block'}`}>
                    <div className="flex flex-col md:flex-row gap-6 min-w-0">
                        {isMobile ? (
                            <>
                                <AnimatedSlideDown>
                                    <CategoryFilter />
                                </AnimatedSlideDown>
                                <AnimatedSlideDown>
                                    <SortSelect />
                                </AnimatedSlideDown>
                            </>
                        ) : (
                            <>
                                <AnimatedSlideUp>
                                    <CategoryFilter />
                                </AnimatedSlideUp>
                                <AnimatedSlideUp>
                                    <SortSelect />
                                </AnimatedSlideUp>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
