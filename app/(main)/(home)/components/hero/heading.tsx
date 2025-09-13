import { AnimatedSlideUp } from '@/components/motion/animations';

export function Heading() {
    return (
        <>
            <AnimatedSlideUp>
                <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                    <span className="block text-primary">Powerful Tools</span>
                    <span className="block text-foreground">For Modern Developers</span>
                </h1>
            </AnimatedSlideUp>
            <AnimatedSlideUp>
                <p className="mx-auto max-w-4xl font-light leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl">
                    Your ultimate toolkit with all the essential utilities for development, security and productivity in one place.
                    <span className="mt-2 block font-medium text-foreground sm:mt-0 sm:inline"> Free, fast, and secure.</span>
                </p>
            </AnimatedSlideUp>
        </>
    );
}
