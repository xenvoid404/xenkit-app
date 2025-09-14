'use client';
import { useToolsStore } from '@/app/(main)/(home)/store/tools-store';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { AnimatedSlideInUp, AnimatedSlideInDown, AnimatedStaggerDiv } from '@/components/motion/animations';
import { useMobile } from '@/hooks/use-mobile';
import { useState, useEffect } from 'react';

type SortMode = 'nameDesc' | 'nameAsc';

export function SortSelect() {
    const showFilters = useToolsStore(state => state.showFilters);
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const isMobile = useMobile();

    useEffect(() => {
        if (isMobile !== undefined) setIsMounted(true);
    }, [isMobile]);

    if (!isMounted || isMobile === undefined) return null;

    if (isMobile) {
        return (
            <AnimatedStaggerDiv key={+showFilters} className="md:w-52 flex-shrink-0">
                <AnimatedSlideInDown>
                    <Label className="mb-3">Sort by:</Label>
                    <FilterSelection />
                </AnimatedSlideInDown>
            </AnimatedStaggerDiv>
        );
    }

    return (
        <AnimatedStaggerDiv className="md:w-52 flex-shrink-0">
            <AnimatedSlideInUp>
                <Label className="mb-3">Sort by:</Label>
                <FilterSelection />
            </AnimatedSlideInUp>
        </AnimatedStaggerDiv>
    );
}

function FilterSelection() {
    const { sortMode, setSortMode } = useToolsStore();

    return (
        <Select value={sortMode} onValueChange={value => setSortMode(value as SortMode)}>
            <SelectTrigger className="w-full py-6" aria-label="Sort tools">
                <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="nameAsc">Name A-Z</SelectItem>
                <SelectItem value="nameDesc">Name Z-A</SelectItem>
            </SelectContent>
        </Select>
    );
}
