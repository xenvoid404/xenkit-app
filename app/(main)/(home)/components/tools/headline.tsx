import { AnimatedSlideInUp } from '@/components/motion/animations';

export function Headline() {
    return (
        <AnimatedSlideInUp>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                <span className="block text-primary">Tools</span>
            </h1>
        </AnimatedSlideInUp>
    );
}
