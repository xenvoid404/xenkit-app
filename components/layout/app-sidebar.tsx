import { motion, type Variants } from 'framer-motion';
import { AppSidebarMenu } from '@/components/layout/app-nav-link';
import { SidebarWrapper } from '@/components/layout/sidebar-wrapper';
import { CloseButton } from '@/components/layout/close-button';

export function AppSidebar() {
    return (
        <SidebarWrapper>
            <motion.div
                key="sidebar-backdrop"
                className="fixed inset-0 z-50 bg-background/80 backdrop-blur-lg md:hidden"
                variants={sidebarBackdropAnimate}
                initial="close"
                animate="open"
                exit="close"
            >
                <motion.div
                    key="sidebar-content"
                    className="flex flex-col h-full"
                    variants={sidebarContentAnimate}
                    initial="close"
                    animate="open"
                    exit="close"
                >
                    <div className="flex justify-end p-6">
                        <CloseButton />
                    </div>

                    <div className="flex flex-1 flex-col items-center justify-center px-6">
                        <AppSidebarMenu />
                    </div>
                </motion.div>
            </motion.div>
        </SidebarWrapper>
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
