'use client';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import { containerVariants } from '@/components/animation/container-variants';

export function HeroWrapper({ children }: { children: React.ReactNode }) {
    return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}

export function HeroSubWrapper({ children }: { children: React.ReactNode }) {
    return (
        <m.div className="flex flex-col items-center gap-y-12 text-center" variants={containerVariants} initial="hidden" animate="visible">
            {children}
        </m.div>
    );
}
