import { AnimatedContainer, AnimatedSubContainer } from '@/components/animation/animated-container';
import { AnimatedHeader } from '@/components/animation/animated-header';
import { CategoryList } from '../categories/category-list';

export function CategoriesSection() {
    const heading = (
        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="block text-primary">Categories</span>
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
                <div className="max-w-7xl mx-auto">
                    <AnimatedSubContainer>
                        <AnimatedHeader heading={heading} paragraph={paragraph} />
                        <CategoryList />
                    </AnimatedSubContainer>
                </div>
            </section>
        </AnimatedContainer>
    );
}
