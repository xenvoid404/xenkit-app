import { ToolsWrapper, ToolsSubWrapper } from '@/app/(main)/(home)/components/wrapper/tools-wrapper';
import { AnimatedHeader } from '@/app/(main)/(home)/components/tools/animated-header';
import { AnimatedItem } from '@/app/(main)/(home)/components/tools/animated-item';
import { SearchInput } from '@/app/(main)/(home)/components/tools/search-input';

export function ToolsSection() {
    const heading = (
        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="block text-primary">Featured Tools</span>
        </h1>
    );

    const paragraph = (
        <p className="mx-auto max-w-4xl font-light leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl">
            Discover our most popular developer tools organized by category. From generators to formatters, we&apos;ve got everything you need.
        </p>
    );

    return (
        <ToolsWrapper>
            <section className="py-24 px-6 bg-gradient-to-br from-background via-muted/20 to-background">
                <div className="max-w-8xl mx-auto">
                    <ToolsSubWrapper>
                        <AnimatedHeader heading={heading} paragraph={paragraph} />
                        <div className="flex flex-col md:flex-row gap-4">
                            <AnimatedItem>
                                <SearchInput />
                            </AnimatedItem>
                        </div>
                    </ToolsSubWrapper>
                </div>
            </section>
        </ToolsWrapper>
    );
}
