'use client';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';
import { useToolsStore } from '@/app/(main)/(home)/lib/store/tools-store';
import { m } from 'framer-motion';
import { slideUpVariants } from '@/lib/motion';

export function FilterToggle() {
    const { toggleFilters } = useToolsStore();

    return (
        <m.div variants={slideUpVariants}>
            <Button
                variant="outline"
                onClick={toggleFilters}
                className="md:hidden flex w-full items-center justify-start px-6 h-14 rounded-xl text-muted-foreground"
            >
                <Filter className="size-5" />
                <span className="font-medium">Filters</span>
            </Button>
        </m.div>
    );
}
