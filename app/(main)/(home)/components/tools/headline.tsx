import { AnimatedSlideInUp } from '@/components/motion/animations';

export function Headline() {
    return (
        <AnimatedSlideInUp>
            <h2 className="text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
                <span className="block text-primary">Explore Our Tool Categories</span>
            </h2>
        </AnimatedSlideInUp>
    );
}
