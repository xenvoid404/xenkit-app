'use client';
import { m, type Variants } from 'framer-motion';

const smoothTransition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] as const };

const parentVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
};

const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: smoothTransition }
};

export function AnimatedHeader({ heading, paragraph }: { heading: React.ReactNode; paragraph: React.ReactNode }) {
    return (
        <m.header variants={parentVariants} className="space-y-8">
            <m.div variants={childVariants}>{heading}</m.div>
            <m.div variants={childVariants}>{paragraph}</m.div>
        </m.header>
    );
}
