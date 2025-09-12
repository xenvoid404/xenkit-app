'use client';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Grid, List } from 'lucide-react';

export function ViewModeToggle() {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    return (
        <div className="hidden md:flex items-center gap-1 p-1 bg-muted/20 border border-border/50 rounded-lg flex-shrink-0 ml-6">
            <Button variant={viewMode === 'grid' ? 'default' : 'outline'} onClick={() => setViewMode('grid')} aria-label="Grid view">
                <Grid className="size-4" />
            </Button>
            <Button variant={viewMode === 'list' ? 'default' : 'outline'} onClick={() => setViewMode('list')} aria-label="List view">
                <List className="size-4" />
            </Button>
        </div>
    );
}
