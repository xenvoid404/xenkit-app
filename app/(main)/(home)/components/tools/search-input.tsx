'use client';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useToolsStore } from '@/app/(main)/(home)/lib/store/tools-store';

export function SearchInput() {
    const { searchTerm, setSearchTerm } = useToolsStore();

    return (
        <div className="relative flex-1 max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="size-5 text-muted-foreground" />
            </div>
            <Input
                id="search"
                name="search"
                type="text"
                value={searchTerm}
                placeholder="Search tools... (Ctrl + K)"
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 h-14 rounded-xl"
                aria-label="Search tools"
            />
        </div>
    );
}
