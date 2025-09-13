import { LazyContainer, AnimatedStaggerSection, AnimatedSlideUp } from '@/components/motion/animations';
import { SearchInput } from '@/app/(main)/(home)/components/tools/search-input';
import { FilterToggle } from '@/app/(main)/(home)/components/tools/filter-toggle';
import { FiltersContainer } from '@/app/(main)/(home)/components/tools/filters-container';
import { ResultsSummary } from '@/app/(main)/(home)/components/tools/results-summary';
import { ToolGrid } from '@/app/(main)/(home)/components/tools/tool-grid';
import { Heading } from '@/app/(main)/(home)/components/tools/heading';

export function Tools() {
    return (
        <LazyContainer>
            <AnimatedStaggerSection id="tools" className="flex items-center justify-center">
                <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center gap-y-8 text-center">
                        <Heading />
                        <SearchInput />
                        <FilterToggle />
                        <FiltersContainer />
                        <AnimatedSlideUp>
                            <ResultsSummary />
                        </AnimatedSlideUp>
                        <ToolGrid />
                    </div>
                </div>
            </AnimatedStaggerSection>
        </LazyContainer>
    );
}
