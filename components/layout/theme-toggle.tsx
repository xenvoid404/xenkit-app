import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/theme-provider';

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const toggleTheme = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} theme`}
            className="relative flex w-10 h-10 items-center justify-center rounded-full bg-background hover:bg-background/70 transition-colors"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={resolvedTheme}
                    initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                    animate={{ rotate: 0, animate: 1, scale: 1 }}
                    exit={{ rotate: 90, animate: 0, scale: 0.6 }}
                    transition={{ duration: 0.3 }}
                    className="absolute"
                >
                    {resolvedTheme === 'dark' ? <IoSunnyOutline className="h-5 w-5" /> : <IoMoonOutline className="w-5 h-5" />}
                </motion.div>
            </AnimatePresence>
        </button>
    );
}
