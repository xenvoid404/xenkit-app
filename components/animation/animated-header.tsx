'use client';
import { m } from 'framer-motion';
import { parentVariants } from '@/components/framer-variants/parent-variants';
import { itemVariants } from '@/components/framer-variants/item-variants';
import { type ReactNode } from 'react';

export function AnimatedHeader({ heading, paragraph, className }: { heading: ReactNode; paragraph: ReactNode; className?: string }) {
    return (
        <m.div variants={parentVariants} className={className}>
            <m.div variants={itemVariants}>{heading}</m.div>
            <m.div variants={itemVariants}>{paragraph}</m.div>
        </m.div>
    );
}
