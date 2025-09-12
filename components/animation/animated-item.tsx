'use client';
import { m } from 'framer-motion';
import { itemVariants } from '@/components/framer-variants/item-variants';
import { type ReactNode } from 'react';

export function AnimatedItem({ children, className, ...props }: { children: ReactNode; className?: string }) {
    return (
        <m.div variants={itemVariants} className={className} {...props}>
            {children}
        </m.div>
    );
}
