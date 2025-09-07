'use client';
import { AppSidebarMenu } from '@/components/layout/app-nav-link';
import { m, AnimatePresence, LazyMotion, domAnimation, type Variants } from 'framer-motion';
import { useSidebarStore } from '@/lib/store/sidebar-store';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AppSidebar() {
    const { isOpen, toggle } = useSidebarStore();

    return (
        <LazyMotion features={domAnimation}>
            <AnimatePresence>
                {isOpen && (
                    <m.div
                        key="sidebar-backdrop"
                        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-lg md:hidden"
                        variants={sidebarBackdropAnimate}
                        initial="close"
                        animate="open"
                        exit="close"
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
                            <div className="flex justify-end p-6">
                                <Button type="button" variant="ghost" size="icon" onClick={close}>
                                    <X />
                                </Button>
                            </div>

                            <div className="flex flex-1 flex-col items-center justify-center px-6">
                                <AppSidebarMenu />
                            </div>
                        </m.div>
                    </m.div>
                )}
            </AnimatePresence>
        </LazyMotion>
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
