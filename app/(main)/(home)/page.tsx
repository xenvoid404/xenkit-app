import { AnimatedStaggerSection, AnimatedSlideInUp } from '@/components/motion/animations';
import { SearchInput } from '@/app/(main)/(home)/components/search-input';
import { FilterToggle } from '@/app/(main)/(home)/components/filter-toggle';
import { FiltersContainer } from '@/app/(main)/(home)/components/filters-container';
import { ResultsSummary } from '@/app/(main)/(home)/components/results-summary';
import { ToolGrid } from '@/app/(main)/(home)/components/tool-grid';
import { Headline } from '@/components/shared/headline';
import { SubHeadline } from '@/components/shared/sub-headline';
import { CategoryFilter } from '@/app/(main)/(home)/components/category-filter';
import { SortSelect } from '@/app/(main)/(home)/components/sort-select';
import { generateJsonLd } from '@/app/(main)/(home)/seo/json-ld';
import Script from 'next/script';

export default function Page() {
    const jsonLd = generateJsonLd();

    return (
        <>
            <Script
                id="homepage-json-ld"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <AnimatedStaggerSection className="flex items-center justify-center my-12" aria-labelledby="tools-heading">
                <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-4 text-center">
                        <AnimatedSlideInUp>
                            <Headline as="h1">
                                <span className="block text-primary">Explore Our Tools</span>
                            </Headline>
                        </AnimatedSlideInUp>
                        <AnimatedSlideInUp>
                            <SubHeadline>Quickly find any tool using the search or filters by category</SubHeadline>
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
        </>
    );
}
