import { AnimatedSlideInUp } from '@/components/motion/animations';

export function Subheadline() {
    return (
        <AnimatedSlideInUp>
            <p className="mx-auto max-w-4xl font-light leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl">
                Your ultimate toolkit with all the essential utilities for development, security and productivity in one place.
                <span className="mt-2 block font-medium text-foreground sm:mt-0 sm:inline"> Free, fast, and secure.</span>
            </p>
        </AnimatedSlideInUp>
    );
}
