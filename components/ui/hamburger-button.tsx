'use client';
import { useSidebarStore } from '@/lib/store/sidebar-store';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HamburgerButton() {
    const { toggle } = useSidebarStore();

    return (
        <Button type="button" variant="ghost" size="icon" className="md:hidden" onClick={toggle} aria-label="Toggle navigation menu">
            <Menu className="size-5" />
        </Button>
    );
}
