'use client';
import { m, type Variants } from 'framer-motion';

export function AnimatedBadge({ children }: { children: React.ReactNode }) {
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] } }
    };

    return <m.div variants={itemVariants}>{children}</m.div>;
}
