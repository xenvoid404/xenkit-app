import { AnimatedStaggerSection } from '@/components/motion/animations';
import { SearchInput } from '@/app/(main)/(home)/components/tools/search-input';
import { FilterToggle } from '@/app/(main)/(home)/components/tools/filter-toggle';
import { FiltersContainer } from '@/app/(main)/(home)/components/tools/filters-container';
import { ResultsSummary } from '@/app/(main)/(home)/components/tools/results-summary';
import { ToolGrid } from '@/app/(main)/(home)/components/tools/tool-grid';
import { Headline } from '@/app/(main)/(home)/components/tools/headline';
import { SubHeadline } from '@/app/(main)/(home)/components/tools/sub-headline';

export function Tools() {
    return (
        <AnimatedStaggerSection className="flex items-center justify-center">
            <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-4 text-center">
                    <Headline />
                    <SubHeadline />
                </div>
                <div className="mt-6 space-y-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        <SearchInput />
                        <FilterToggle />
                    </div>
                    <FiltersContainer />
                </div>
                <ResultsSummary />
                <ToolGrid />
            </div>
        </AnimatedStaggerSection>
    );
}
