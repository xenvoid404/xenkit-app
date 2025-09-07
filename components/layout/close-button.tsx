import { X } from 'lucide-react';
import { useSidebarStore } from '@/lib/store/sidebar-store';

export function CloseButton() {
    const { close } = useSidebarStore();

    return (
        <Button type="button" variant="ghost" size="icon" onClick={close}>
            <X />
        </Button>
    );
}
