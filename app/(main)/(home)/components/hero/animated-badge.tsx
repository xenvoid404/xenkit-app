'use client';
import { m } from 'framer-motion';
import { itemVariants } from '@/components/animation/item-variants';

export function AnimatedBadge({ children }: { children: React.ReactNode }) {
    return <m.div variants={itemVariants}>{children}</m.div>;
}
