'use client';
import { useToolsStore } from '@/app/(main)/(home)/lib/store/tools-store';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
type SortMode = 'name' | 'category';

export function SortSelect() {
    const { sortMode, setSortMode } = useToolsStore();

    return (
        <div className="md:w-52 flex-shrink-0">
            <Label>Sort by:</Label>
            <Select
                value={sortMode}
                onValueChange={value => setSortMode(value as SortMode)}
                className="w-full px-4 py-2.5 bg-background/70 backdrop-blur-sm border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 hover:border-border/70 transition-all text-sm font-medium"
            >
                <SelectTrigger>
                    <SelectValue placeholder="Filter Option" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="name">Name A-Z</SelectItem>
                    <SelectItem value="category">Category</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
