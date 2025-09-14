import { AnimatedStaggerSection, AnimatedSlideInUp } from '@/components/motion/animations';
import { SearchInput } from '@/app/(main)/(home)/components/tools/search-input';
import { FilterToggle } from '@/app/(main)/(home)/components/tools/filter-toggle';
import { FiltersContainer } from '@/app/(main)/(home)/components/tools/filters-container';
import { ResultsSummary } from '@/app/(main)/(home)/components/tools/results-summary';
import { ToolGrid } from '@/app/(main)/(home)/components/tools/tool-grid';
import { Headline } from '@/components/shared/headline';
import { SubHeadline } from '@/components/shared/sub-headline';
import { CategoryFilter } from '@/app/(main)/(home)/components/tools/category-filter';
import { SortSelect } from '@/app/(main)/(home)/components/tools/sort-select';

export function Tools() {
    return (
        <AnimatedStaggerSection id="tools" className="flex items-center justify-center scroll-mt-20">
            <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-4 text-center">
                    <AnimatedSlideInUp>
                        <Headline as="h2">
                            <span className="block text-primary">Explore Our Tool Categories</span>
                        </Headline>
                    </AnimatedSlideInUp>
                    <AnimatedSlideInUp>
                        <SubHeadline>
                            Discover our most popular utilities organized by category. From generators to converters, we&apos;ve got everything you
                            need to get the job done.
                        </SubHeadline>
                    </AnimatedSlideInUp>
                </div>
                <div className="mt-6 space-y-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        <SearchInput />
                        <FilterToggle />
                    </div>
                    <FiltersContainer>
                        <CategoryFilter />
                        <SortSelect />
                    </FiltersContainer>
                </div>
                <ResultsSummary />
                <ToolGrid />
            </div>
        </AnimatedStaggerSection>
    );
}
