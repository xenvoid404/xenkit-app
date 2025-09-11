import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export function SearchInput() {
    return (
        <div className="relative flex-1 max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="size-5 text-muted-foreground" />
            </div>
            <Input
                id="search"
                name="search"
                type="text"
                placeholder="Search tools... (Ctrl + K)"
                className="w-full pl-12 pr-4 py-4"
                aria-label="Search tools"
            />
        </div>
    );
}
