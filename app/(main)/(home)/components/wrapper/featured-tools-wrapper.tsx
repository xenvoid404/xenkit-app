'use client';
import { m, LazyMotion, domAnimation, type Variants } from 'framer-motion';

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

export function FeaturedToolsWrapper({ children }: { children: React.ReactNode }) {
    return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}

export function FeaturedToolsSubWrapper({ children }: { children: React.ReactNode }) {
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
