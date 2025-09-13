'use client';
import { useToolsStore } from '@/app/(main)/(home)/lib/store/tools-store';
import { type ReactNode } from 'react';
import { AnimatedStaggerDiv } from '@/components/motion/animations';
export function FiltersContainer({ children }: { children: ReactNode }) {
    const showFilters = useToolsStore(state => state.showFilters);

    return (
        <AnimatedStaggerDiv className={showFilters ? 'block' : 'hidden md:block'}>
            <div className="flex flex-col md:flex-row gap-6 min-w-0">{children}</div>
        </AnimatedStaggerDiv>
    );
}
