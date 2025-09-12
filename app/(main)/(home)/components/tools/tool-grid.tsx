'use client';

import { ToolCard } from '@/components/ui/tool-card';
import { useFilteredTools, useToolsStore } from '@/app/(main)/(home)/lib/store/tools-store';
import { FiSearch } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

export function ToolGrid() {
    const filteredTools = useFilteredTools();
    const { clearFilters } = useToolsStore();

    if (filteredTools.length > 0) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredTools.map((tool, index) => (
                    <div
                        key={tool.id}
                        className="animate-fade-in-up"
                        style={{ animationDelay: `${index * 50}ms` }}
                    >
                        <ToolCard tool={tool} viewMode={'grid'} className="h-full" />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="text-center py-20">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-muted/20 flex items-center justify-center">
                <FiSearch className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No tools found</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                We couldn&apos;t find any tools matching your search criteria. Try adjusting your filters or search terms.
            </p>
            <Button onClick={clearFilters}>
                Clear Filters
            </Button>
        </div>
    );
}
