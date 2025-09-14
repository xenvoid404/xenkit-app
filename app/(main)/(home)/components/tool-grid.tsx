'use client';
import { ToolCard } from '@/app/(main)/(home)/components/tool-card';
import { useFilteredTools, useToolsStore } from '@/app/(main)/(home)/store/tools-store';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedStaggerDiv, AnimatedSlideInUp } from '@/components/motion/animations';
import { AnimatePresence } from 'framer-motion';

export function ToolGrid() {
    const filteredTools = useFilteredTools();
    const { clearFilters, selectedCategory } = useToolsStore();

    return (
        <AnimatePresence>
            {filteredTools.length > 0 ? (
                <AnimatedStaggerDiv
                    key={selectedCategory}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    role="grid"
                    aria-label="Tool grid"
                >
                    {filteredTools.map(tool => (
                        <AnimatedSlideInUp key={tool.id}>
                            <ToolCard tool={tool} />
                        </AnimatedSlideInUp>
                    ))}
                </AnimatedStaggerDiv>
            ) : (
                <AnimatedSlideInUp key={`no-results-${selectedCategory}`} className="text-center py-20" role="status" aria-live="polite">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-muted/20 flex items-center justify-center">
                        <Search className="size-8 text-muted-foreground" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">No tools found</h3>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                        We couldn&apos;t find any tools matching your search criteria. Try adjusting your filters or search terms.
                    </p>
                    <Button onClick={clearFilters}>Clear Filters</Button>
                </AnimatedSlideInUp>
            )}
        </AnimatePresence>
    );
}
