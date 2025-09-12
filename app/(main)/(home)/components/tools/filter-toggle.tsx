import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

export function FilterToggle() {
    return (
        <Button variant="outline" className="md:hidden flex items-center w-full">
            <Filter className="size-5" />
            <span className="font-medium">Filters</span>
        </Button>
    );
}
