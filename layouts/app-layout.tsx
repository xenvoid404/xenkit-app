'use client';
import { type ReactNode, useState } from 'react';
import { AppHeader } from '@/components/layouts/app-header';
import { AppSidebarMobile } from '@/components/layouts/app-sidebar-mobile';

export default function AppLayout({ children }: { children: ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const closeSidebar = () => setIsSidebarOpen(false);
    const openSidebar = () => setIsSidebarOpen(true);

    return (
        <div className="flex min-h-screen bg-background text-foreground">
            <AppSidebarMobile isOpen={isSidebarOpen} onClose={closeSidebar} />

            <div className="flex flex-1 flex-col">
                <AppHeader sidebarOpen={openSidebar} />
                <div className="flex flex-1 flex-col">{children}</div>
            </div>
        </div>
    );
}
