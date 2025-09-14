'use client';
import { m, LazyMotion, domAnimation, type HTMLMotionProps } from 'framer-motion';
import { slideUpVariants, slideDownVariants, containerVariants } from '@/components/motion/variants';
import { type PropsWithChildren, type ReactNode } from 'react';

export function LazyContainer({ children }: { children: ReactNode }) {
    return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}

export function AnimatedStaggerDiv({ children, className, ...props }: PropsWithChildren<HTMLMotionProps<'div'> & { className?: string }>) {
    return (
        <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: true, amount: 0.1 }}
            className={className}
            {...props}
        >
            {children}
        </m.div>
    );
}

export function AnimatedStaggerSection({ children, className, ...props }: PropsWithChildren<HTMLMotionProps<'section'> & { className?: string }>) {
    return (
        <m.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: true, amount: 0.1 }}
            className={className}
            {...props}
        >
            {children}
        </m.section>
    );
}

export function AnimatedSlideInUp({ children, className, ...props }: PropsWithChildren<HTMLMotionProps<'div'> & { className?: string }>) {
    return (
        <m.div variants={slideUpVariants} className={className} {...props}>
            {children}
        </m.div>
    );
}

export function AnimatedSlideInDown({ children, className, ...props }: PropsWithChildren<HTMLMotionProps<'div'> & { className?: string }>) {
    return (
        <m.div variants={slideDownVariants} className={className} {...props}>
            {children}
        </m.div>
    );
}
