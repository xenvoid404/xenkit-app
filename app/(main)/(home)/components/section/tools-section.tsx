import { LazyContainer, AnimatedStaggerContainer, AnimatedSlideUp } from '@/components/motion/animations';
import { SearchInput } from '@/app/(main)/(home)/components/tools/search-input';
import { FilterToggle } from '@/app/(main)/(home)/components/tools/filter-toggle';
import { FiltersContainer } from '@/app/(main)/(home)/components/tools/filters-container';
import { ResultsSummary } from '@/app/(main)/(home)/components/tools/results-summary';
import { ToolGrid } from '@/app/(main)/(home)/components/tools/tool-grid';

export function ToolsSection() {
    return (
        <LazyContainer>
            <section id="tools" className="flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
                <div className="mx-auto max-w-8xl px-4 py-20 sm:px-6 lg:px-8">
                    <AnimatedStaggerContainer>
                        <AnimatedSlideUp>
                            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                                <span className="block text-primary">Tools</span>
                            </h1>
                        </AnimatedSlideUp>
                        <AnimatedSlideUp>
                            <p className="mx-auto max-w-4xl font-light leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl">
                                Discover our most popular developer tools organized by category. From generators to formatters, we&apos;ve got
                                everything you need.
                            </p>
                        </AnimatedSlideUp>
                        <div className="space-y-6">
                            <div className="flex flex-col md:flex-row gap-4">
                                <AnimatedSlideUp>
                                    <SearchInput />
                                </AnimatedSlideUp>
                                <AnimatedSlideUp>
                                    <FilterToggle />
                                </AnimatedSlideUp>
                            </div>
                            <AnimatedSlideUp>
                                <FiltersContainer />
                            </AnimatedSlideUp>
                        </div>
                        <ResultsSummary />
                        <AnimatedSlideUp>
                            <ToolGrid />
                        </AnimatedSlideUp>
                    </AnimatedStaggerContainer>
                </div>
            </section>
        </LazyContainer>
    );
}
