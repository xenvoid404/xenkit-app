'use client';
import { useToolsStore, useCategories } from '@/app/(main)/(home)/lib/store/tools-store';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { SortSelect } from './sort-select';
import { m } from 'framer-motion';
import { useMobile } from '@/hooks/use-mobile';
import { AnimatedSlideUp, AnimatedSlideDown } from '@/components/motion/animations';

export function FiltersContainer() {
    const showFilters = useToolsStore(state => state.showFilters);
    const { selectedCategory, setSelectedCategory } = useToolsStore();
    const categories = useCategories();
    const isMobile = useMobile();

    const isVisible = !isMobile || showFilters;

    if (isMobile === undefined) {
        return <div className="hidden md:block" style={{ height: '96px' }} />;
    }

    return (
        <>
            {isVisible && (
                <m.div className={`overflow-x-auto ${isMobile ? 'md:hidden' : 'hidden md:block'}`}>
                    <div className="flex flex-col md:flex-row gap-6 min-w-0">
                        {isMobile ? (
                            <>
                                <AnimatedSlideDown>
                                    <div className="flex-1 min-w-0">
                                        <Label className="mb-3">Category:</Label>
                                        <div className="flex flex-wrap gap-2">
                                            {categories.map((category, index) => (
                                                <AnimatedSlideDown key={category}>
                                                    <Button
                                                        variant={selectedCategory === category ? 'default' : 'outline'}
                                                        onClick={() => setSelectedCategory(category)}
                                                        className="rounded-full"
                                                    >
                                                        {category === 'all' ? 'All Categories' : category}
                                                    </Button>
                                                </AnimatedSlideDown>
                                            ))}
                                        </div>
                                    </div>
                                </AnimatedSlideDown>
                                <AnimatedSlideDown>
                                    <SortSelect />
                                </AnimatedSlideDown>
                            </>
                        ) : (
                            <>
                                <AnimatedSlideUp>
                                    <div className="flex-1 min-w-0">
                                        <Label className="mb-3">Category:</Label>
                                        <div className="flex flex-wrap gap-2">
                                            {categories.map((category, index) => (
                                                <AnimatedSlideUp key={category}>
                                                    <Button
                                                        variant={selectedCategory === category ? 'default' : 'outline'}
                                                        onClick={() => setSelectedCategory(category)}
                                                        className="rounded-full"
                                                    >
                                                        {category === 'all' ? 'All Categories' : category}
                                                    </Button>
                                                </AnimatedSlideUp>
                                            ))}
                                        </div>
                                    </div>
                                </AnimatedSlideUp>
                                <AnimatedSlideUp>
                                    <SortSelect />
                                </AnimatedSlideUp>
                            </>
                        )}
                    </div>
                </m.div>
            )}
        </>
    );
}
