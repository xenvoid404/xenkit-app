'use client';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import { type ReactNode } from 'react';
import { containerVariants } from '@/components/framer-variants/container-variants';

export function AnimatedContainer({ children }: { children: ReactNode }) {
    return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}

export function AnimatedSubContainer({ children }: { children: ReactNode }) {
    return (
        <m.div
            className="flex flex-col items-center gap-y-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </m.div>
    );
}
