'use client';
import { m } from 'framer-motion';
import { parentVariants } from '@/components/animation/parent-variants';
import { itemVariants } from '@/components/animation/item-variants';
import { type ReactNode } from 'react';

export function AnimatedHeader({ heading, paragraph }: { heading: ReactNode; paragraph: ReactNode }) {
    return (
        <m.div variants={parentVariants} className="space-y-8">
            <m.div variants={itemVariants}>{heading}</m.div>
            <m.div variants={itemVariants}>{paragraph}</m.div>
        </m.div>
    );
}
