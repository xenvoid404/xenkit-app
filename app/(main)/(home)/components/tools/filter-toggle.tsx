'use client';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';
import { useToolsStore } from '@/app/(main)/(home)/lib/store/tools-store';

export function FilterToggle() {
    const { toggleFilters } = useToolsStore();

    return (
        <Button
            variant="outline"
            onClick={toggleFilters}
            className="md:hidden flex items-center w-full items-start h-14 rounded-xl"
        >
            <Filter className="size-5" />
            <span className="font-medium">Filters</span>
        </Button>
    );
}
