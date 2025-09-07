'use client';
import { AnimatePresence } from 'framer-motion';
import { useSidebarStore } from '@/lib/store/sidebar-store';

export function SidebarWrapper({ children }: { children: React.ReactNode }) {
    const { isOpen } = useSidebarStore();

    return <AnimatePresence>{isOpen && { children }}</AnimatePresence>;
}
