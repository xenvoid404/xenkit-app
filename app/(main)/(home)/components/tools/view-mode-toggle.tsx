'use client';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Grid, List } from 'lucide-react';

export function ViewModeToggle() {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    return (
        <>
            <Button variant={viewMode === 'grid' ? 'default' : 'outline'} onClick={() => setViewMode('grid')} aria-label="Grid view">
                <Grid className="size-4" />
            </Button>
            <Button variant={viewMode === 'list' ? 'default' : 'outline'} onClick={() => setViewMode('list')} aria-label="List view">
                <List className="size-4" />
            </Button>
        </>
    );
}
