'use client';
import { SidebarMenu } from '@/components/layout/main/nav-link';
import { m, AnimatePresence, type Variants } from 'framer-motion';
import { useSidebarStore } from '@/lib/store/sidebar-store';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Sidebar() {
    const { isOpen, toggle } = useSidebarStore();

    const sidebarBackdropAnimate: Variants = {
        open: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
        close: { opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } }
    };

    const sidebarContentAnimate: Variants = {
        open: { x: '0%', transition: { type: 'spring', stiffness: 400, damping: 40 } },
        close: { x: '100%', transition: { type: 'spring', stiffness: 400, damping: 40 } }
    };

    return (
        <AnimatePresence mode="wait">
            {isOpen && (
                <m.div
                    key="sidebar-backdrop"
                    className="fixed inset-0 z-50 bg-background/80 backdrop-blur-lg md:hidden"
                    variants={sidebarBackdropAnimate}
                    initial="close"
                    animate="open"
                    exit="close"
                    onClick={toggle}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Navigation menu"
                >
                    <m.div
                        key="sidebar-content"
                        className="flex flex-col h-full"
                        onClick={e => e.stopPropagation()}
                        variants={sidebarContentAnimate}
                        initial="close"
                        animate="open"
                        exit="close"
                    >
                        <div className="flex justify-end p-4 sm:p-6">
                            <Button type="button" variant="ghost" size="icon" onClick={toggle} aria-label="Close menu">
                                <X className="size-5" />
                            </Button>
                        </div>

                        <div className="flex flex-1 flex-col items-center justify-center px-4 sm:px-6">
                            <SidebarMenu />
                        </div>
                    </m.div>
                </m.div>
            )}
        </AnimatePresence>
    );
}
