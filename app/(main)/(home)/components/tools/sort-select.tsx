'use client';
import { useToolsStore } from '@/app/(main)/(home)/lib/store/tools-store';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
type SortMode = 'name' | 'category';
import { AnimatedSlideUp, AnimatedSlideDown } from '@/components/motion/animations';

export function SortSelect({ isMobile }: { isMobile: boolean }) {
    const { sortMode, setSortMode } = useToolsStore();

    return (
        <>
            {isMobile ? (
                <AnimatedSlideDown className="md:w-52 flex-shrink-0">
                    <Label className="mb-3">Sort by:</Label>
                    <Select value={sortMode} onValueChange={value => setSortMode(value as SortMode)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Filter Option" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="name">Name A-Z</SelectItem>
                            <SelectItem value="category">Category</SelectItem>
                        </SelectContent>
                    </Select>
                </AnimatedSlideDown>
            ) : (
                <AnimatedSlideUp className="md:w-52 flex-shrink-0">
                    <Label className="mb-3">Sort by:</Label>
                    <Select value={sortMode} onValueChange={value => setSortMode(value as SortMode)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Filter Option" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="name">Name A-Z</SelectItem>
                            <SelectItem value="category">Category</SelectItem>
                        </SelectContent>
                    </Select>
                </AnimatedSlideUp>
            )}
        </>
    );
}
