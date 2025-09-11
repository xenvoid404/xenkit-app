'use client';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import { containerVariants } from '@/components/animation/container-variants';
import { type ReactNode } from 'react';

export function ToolsWrapper({ children }: { children: ReactNode }) {
    return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}

export function ToolsSubWrapper({ children }: { children: ReactNode }) {
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
