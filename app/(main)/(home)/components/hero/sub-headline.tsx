import { AnimatedSlideInUp } from '@/components/motion/animations';

export function SubHeadline() {
    return (
        <AnimatedSlideInUp>
            <p className="mx-auto max-w-4xl font-light leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl">
                A free and open-source collection of powerful online tools for security, data conversion, and productivity.
                <span className="mt-2 block font-medium text-foreground sm:mt-0 sm:inline"> Built for the tech-savvy user.</span>
            </p>
        </AnimatedSlideInUp>
    );
}
