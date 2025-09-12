'use client';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import { slideUpVariants, slideDownVariants } from '@/components/motion/variants';

export function LazyContainer({ children, className, ...props }: { children: ReactNode; className?: string }) {
    return (
        <LazyMotion features={domAnimation} className={className} {...props}>
            {children}
        </LazyMotion>
    );
}

export function AnimatedSlideUp({ children, variants, className, ...props }: { children: ReactNode; className?: string }) {
    return (
        <m.div variants={slideUpVariants} className={className} {...props}>
            {children}
        </m.div>
    );
}

export function AnimatedSlideDown({ children, variants, className, ...props }: { children: ReactNode; className?: string }) {
    return (
        <m.div variants={slideDownVariants} className={className} {...props}>
            {children}
        </m.div>
    );
}
