'use client';
import { m } from 'framer-motion';
import { itemVariants } from '@/components/animation/item-variants';

export function AnimatedItem({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <m.div variants={itemVariants} className={className}>
            {children}
        </m.div>
    );
}
