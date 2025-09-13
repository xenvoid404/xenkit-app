import { AnimatedSlideInUp } from '@/components/motion/animations';

export function SubHeadline() {
    return (
        <AnimatedSlideInUp>
            <p className="mx-auto max-w-4xl font-light leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl">
                Discover our most popular developer tools organized by category. From generators to formatters, we&apos;ve got everything you need.
            </p>
        </AnimatedSlideInUp>
    );
}
