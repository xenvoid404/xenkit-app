'use client';
import { m, LazyMotion, domAnimation, type Variants } from 'framer-motion';

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

export function HeroWrapper({ children }: { children: React.ReactNode }) {
    return (
        <LazyMotion features={domAnimation}>
            <m.div className="flex flex-col items-center gap-y-12 text-center" variants={containerVariants} initial="hidden" animate="visible">
                {children}
            </m.div>
        </LazyMotion>
    );
}
