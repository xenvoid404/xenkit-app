'use client';
import { ToolCard } from '@/app/(main)/(home)/components/tools/tool-card';
import { useFilteredTools, useToolsStore } from '@/app/(main)/(home)/lib/store/tools-store';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSlideInUp } from '@/components/motion/animations';

export function ToolGrid() {
    const filteredTools = useFilteredTools();
    const { clearFilters } = useToolsStore();

    if (filteredTools.length > 0) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredTools.map(tool => (
                    <div key={tool.id}>
                        <ToolCard tool={tool} />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <AnimatedSlideInUp className="text-center py-20">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-muted/20 flex items-center justify-center">
                <Search className="size-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No tools found</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                We couldn&apos;t find any tools matching your search criteria. Try adjusting your filters or search terms.
            </p>
            <Button onClick={clearFilters}>Clear Filters</Button>
        </AnimatedSlideInUp>
    );
}
