'use client';
import { useToolsStore } from '@/app/(main)/(home)/lib/store/tools-store';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
type SortMode = 'name' | 'category';
import { AnimatedSlideInUp, AnimatedSlideInDown } from '@/components/motion/animations';
import { useMobile } from '@/hooks/use-mobile';
import { useState, useEffect } from 'react';

export function SortSelect() {
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const isMobile = useMobile();

    useEffect(() => {
        if (isMobile !== undefined) setIsMounted(true);
    }, [isMobile]);

    if (!isMounted || isMobile === undefined) return null;

    if (isMobile) {
        <AnimatedSlideInDown className="md:w-52 flex-shrink-0">
            <Label className="mb-3">Sort by:</Label>
            <FilterSelection />
        </AnimatedSlideInDown>;
    }

    return (
        <AnimatedSlideInUp className="md:w-52 flex-shrink-0">
            <Label className="mb-3">Sort by:</Label>
            <FilterSelection />
        </AnimatedSlideInUp>
    );
}

function FilterSelection() {
    const { sortMode, setSortMode } = useToolsStore();

    return (
        <Select value={sortMode} onValueChange={value => setSortMode(value as SortMode)}>
            <SelectTrigger>
                <SelectValue placeholder="Filter Option" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="category">Category</SelectItem>
            </SelectContent>
        </Select>
    );
}
