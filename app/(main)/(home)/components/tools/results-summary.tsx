'use client';
import { Button } from '@/components/ui/button';
import { useToolsStore, useFilteredTools } from '@/app/(main)/(home)/lib/store/tools-store';
import { tools } from '@/app/(main)/(home)/lib/tools-data';

export function ResultsSummary() {
    const { searchTerm, selectedCategory, clearFilters } = useToolsStore();
    const filteredTools = useFilteredTools();

    return (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 my-8">
            <div className="text-sm text-muted-foreground font-medium">
                Showing <span className="text-foreground font-semibold">{filteredTools.length}</span> of{' '}
                <span className="text-foreground font-semibold">{tools.length}</span> tools
                {searchTerm && <span className="text-primary"> for &quot;{searchTerm}&quot;</span>}
                {selectedCategory !== 'all' && <span className="text-primary"> in &quot;{selectedCategory}&quot; category</span>}
            </div>

            {(searchTerm || selectedCategory !== 'all') && (
                <Button variant="link" onClick={clearFilters}>
                    Clear Filters
                </Button>
            )}
        </div>
    );
}
