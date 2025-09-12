'use client';
import { m, LazyMotion, AnimatePresence, domAnimation } from 'framer-motion';
import { slideUpVariants, slideDownVariants } from '@/components/motion/variants';
import { type ReactNode } from 'react';

export function LazyContainer({ children }: { children: ReactNode }) {
    return (
        <LazyMotion features={domAnimation}>
            <AnimatePresence>{children}</AnimatePresence>
        </LazyMotion>
    );
}

export function AnimatedSlideUp({ children, className, ...props }: { children: ReactNode; className?: string }) {
    return (
        <m.div
            variants={slideUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={className}
            {...props}
        >
            {children}
        </m.div>
    );
}

export function AnimatedSlideDown({ children, className, ...props }: { children: ReactNode; className?: string }) {
    return (
        <m.div
            variants={slideDownVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={className}
            {...props}
        >
            {children}
        </m.div>
    );
}
