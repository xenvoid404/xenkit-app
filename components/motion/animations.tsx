'use client';
import { m, LazyMotion, AnimatePresence, domAnimation } from 'framer-motion';
import { slideUpVariants, slideDownVariants, containerVariants } from '@/components/motion/variants';
import { type ReactNode } from 'react';

export function LazyContainer({ children }: { children: ReactNode }) {
    return (
        <LazyMotion features={domAnimation}>
            <AnimatePresence>{children}</AnimatePresence>
        </LazyMotion>
    );
}

export function AnimatedStaggerDiv({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <m.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className={className}>
            {children}
        </m.div>
    );
}

export function AnimatedStaggerSection({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <m.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className={className}>
            {children}
        </m.section>
    );
}

export function AnimatedSlideInUp({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <m.div variants={slideUpVariants} className={className}>
            {children}
        </m.div>
    );
}

export function AnimatedSlideInDown({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <m.div variants={slideDownVariants} className={className}>
            {children}
        </m.div>
    );
}
