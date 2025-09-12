'use client';
import { useToolsStore } from '@/app/(main)/(home)/lib/store/tools-store';
import { CategoryFilter } from './category-filter';
import { SortSelect } from './sort-select';
import { m, AnimatePresence } from 'framer-motion';
import { slideUpVariants, slideDownVariants } from '@/components/motion/variants';
import { useMobile } from '@/hooks/use-mobile';

export function FiltersContainer() {
    const showFilters = useToolsStore(state => state.showFilters);
    const isMobile = useMobile();

    const isVisible = !isMobile || showFilters;

    if (isMobile === undefined) {
        return <div className="hidden md:block" style={{ height: '96px' }} />;
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <m.div
                    variants={isMobile ? slideDownVariants : slideUpVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className={`overflow-x-auto ${isMobile ? 'md:hidden' : 'hidden md:block'}`}
                >
                    <div className="flex flex-col md:flex-row gap-6 min-w-0">
                        <CategoryFilter />
                        <SortSelect />
                    </div>
                </m.div>
            )}
        </AnimatePresence>
    );
}
