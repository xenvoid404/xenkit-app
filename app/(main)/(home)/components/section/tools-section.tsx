import { AnimatedContainer, AnimatedSubContainer } from '@/components/animation/animated-container';
import { AnimatedHeader } from '@/components/animation/animated-header';
import { AnimatedItem } from '@/components/animation/animated-item';
import { SearchInput } from '@/app/(main)/(home)/components/tools/search-input';
import { FilterToggle } from '@/app/(main)/(home)/components/tools/filter-toggle';
import { ViewModeToggle } from '@/app/(main)/(home)/components/tools/view-mode-toggle';

export function ToolsSection() {
    const heading = (
        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="block text-primary">Tools</span>
        </h1>
    );

    const paragraph = (
        <p className="mx-auto max-w-4xl font-light leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl">
            Discover our most popular developer tools organized by category. From generators to formatters, we&apos;ve got everything you need.
        </p>
    );

    return (
        <AnimatedContainer>
            <section className="py-24 px-6 bg-gradient-to-br from-background via-muted/20 to-background">
                <div className="max-w-8xl w-full mx-auto">
                    <AnimatedSubContainer>
                        <AnimatedHeader heading={heading} paragraph={paragraph} />
                        <div className="flex flex-col gap-6">
                            <div className="flex items-start justify-between">
                                <AnimatedItem className="hidden md:flex items-center gap-1 p-1 bg-muted/20 border border-border/50 rounded-lg flex-shrink-0 ml-6">
                                    <ViewModeToggle />
                                </AnimatedItem>
                            </div>
                        </div>
                        <AnimatedItem className="space-y-6">
                            <div className="flex flex-col md:flex-row gap-4">
                                <SearchInput />
                                <FilterToggle />
                            </div>
                        </AnimatedItem>
                    </AnimatedSubContainer>
                </div>
            </section>
        </AnimatedContainer>
    );
}
