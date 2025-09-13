'use client';
import { m, LazyMotion, AnimatePresence, domAnimation } from 'framer-motion';
import { slideUpVariants, slideDownVariants, containerVariants } from '@/components/motion/variants';
import { type ReactNode, type ComponentProps } from 'react';

export function LazyContainer({ children }: { children: ReactNode }) {
    return (
        <LazyMotion features={domAnimation}>
            <AnimatePresence>{children}</AnimatePresence>
        </LazyMotion>
    );
}

export function AnimatedStaggerDiv({ children, className, ...props }: { children: ReactNode; className?: string } & ComponentProps<'div'>) {
    return (
        <m.div
            variants={containerVariants}
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

export function AnimatedStaggerSection({ children, className, ...props }: { children: ReactNode; className?: string } & ComponentProps<'section'>) {
    return (
        <m.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={className}
            {...props}
        >
            {children}
        </m.section>
    );
}

export function AnimatedSlideUp({ children, className, ...props }: { children: ReactNode; className?: string } & ComponentProps<'div'>) {
    return (
        <m.div variants={slideUpVariants} className={className} {...props}>
            {children}
        </m.div>
    );
}

export function AnimatedSlideInUp({ children, className, ...props }: { children: ReactNode; className?: string } & ComponentProps<'div'>) {
    return (
        <m.div variants={slideUpVariants} className={className} {...props}>
            {children}
        </m.div>
    );
}

export function AnimatedSlideDown({ children, className, ...props }: { children: ReactNode; className?: string } & ComponentProps<'div'>) {
    return (
        <m.div variants={slideDownVariants} className={className} {...props}>
            {children}
        </m.div>
    );
}

export function AnimatedSlideInDown({ children, className, ...props }: { children: ReactNode; className?: string } & ComponentProps<'div'>) {
    return (
        <m.div variants={slideDownVariants} className={className} {...props}>
            {children}
        </m.div>
    );
}
