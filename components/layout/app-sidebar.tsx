import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { AppSidebarMenu } from '@/components/layout/app-nav-link';

interface AppSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export function AppSidebar({ isOpen, onClose }: AppSidebarProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key="sidebar-backdrop"
                    className="fixed inset-0 z-60 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 md:hidden"
                    variants={sidebarBackdropAnimate}
                    initial="close"
                    animate="open"
                    exit="close"
                >
                    <motion.div
                        key="sidebar-content"
                        className="flex flex-col h-full"
                        onClick={e => e.stopPropagation()}
                        variants={sidebarContentAnimate}
                        initial="close"
                        animate="open"
                        exit="close"
                    >
                        <div className="flex justify-end p-6">
                            <Button type="button" variant="ghost" onClick={onClose}>
                                <X className="size-5" />
                            </Button>
                        </div>

                        <div className="flex flex-1 flex-col items-center justify-center px-6">
                            <AppSidebarMenu />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

const sidebarBackdropAnimate: Variants = {
    open: { opacity: 1, transition: { duration: 0.6 } },
    close: { opacity: 0, transition: { duration: 0.4 } }
};

const sidebarContentAnimate: Variants = {
    open: { x: '0%', transition: { type: 'spring', stiffness: 300, damping: 30 } },
    close: { x: '100%', transition: { type: 'spring', stiffness: 300, damping: 30 } }
};
