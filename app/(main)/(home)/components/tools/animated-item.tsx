'use client';
import { m } from 'framer-motion';
import { itemVariants } from '@/components/animation/item-variants';
import { type ReactNode } from 'react';

export function AnimatedItem({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <m.div variants={itemVariants} className={className}>
            {children}
        </m.div>
    );
}
