'use client';
import { m, type Variants } from 'framer-motion';

const smoothTransition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] as const };

const parentVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 }
    }
};

const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: smoothTransition }
};

export function AnimatedFeatures({ features }: { features: React.ReactNode[] }) {
    return (
        <m.ul variants={parentVariants} className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground sm:gap-8">
            {features.map((feature, i) => (
                <m.li key={i} variants={childVariants}>
                    {feature}
                </m.li>
            ))}
        </m.ul>
    );
}
