'use client';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import { slideUpVariants, slideDownVariants } from '@/components/motion/variants';
import { type ReactNode } from 'react';

export function LazyContainer({ children }: { children: ReactNode }) {
    return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}

export function AnimatedSlideUp({ children, className, ...props }: { children: ReactNode; className?: string }) {
    return (
        <m.div variants={slideUpVariants} className={className} {...props}>
            {children}
        </m.div>
    );
}

export function AnimatedSlideDown({ children, className, ...props }: { children: ReactNode; className?: string }) {
    return (
        <m.div variants={slideDownVariants} className={className} {...props}>
            {children}
        </m.div>
    );
}
