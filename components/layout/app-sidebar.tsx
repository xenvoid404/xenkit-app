'use client';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { AppSidebarMenu } from '@/components/layout/app-nav-link';
import { useSidebarStore } from '@/lib/store/sidebar-store';

export function AppSidebar() {
    const { isOpen, close } = useSidebarStore();

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key="sidebar-backdrop"
                    className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden"
                    onClick={close}
                    variants={sidebarBackdropAnimate}
                    initial="close"
                    animate="open"
                    exit="close"
                >
                    <motion.div
                        key="sidebar-content"
                        className="flex flex-col h-full w-full max-w-xs ml-auto bg-background"
                        onClick={e => e.stopPropagation()}
                        variants={sidebarContentAnimate}
                        initial="close"
                        animate="open"
                        exit="close"
                    >
                        <div className="flex items-center justify-end p-4 border-b border-muted">
                            <Button type="button" variant="ghost" size="icon" onClick={close}>
                                <X />
                            </Button>
                        </div>

                        <div className="flex flex-1 flex-col items-center justify-center p-6">
                            <AppSidebarMenu />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

const sidebarBackdropAnimate: Variants = {
    open: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    close: { opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } }
};

const sidebarContentAnimate: Variants = {
    open: { x: '0%', transition: { type: 'spring', stiffness: 400, damping: 40 } },
    close: { x: '100%', transition: { type: 'spring', stiffness: 400, damping: 40 } }
};
