'use client';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Button variant="ghost" size="icon" aria-label="Toggle theme" disabled className="opacity-50">
                <Sun className="size-5" />
            </Button>
        );
    }

    const isDarkMode = resolvedTheme === 'dark';
    const toggleTheme = () => setTheme(isDarkMode ? 'light' : 'dark');

    return (
        <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} theme`}>
            {isDarkMode ? (
                <Sun className="size-5 text-primary transition-transform duration-500 ease-in-out hover:rotate-90" />
            ) : (
                <Moon className="size-5 text-secondary transition-transform duration-500 ease-in-out hover:-rotate-12" />
            )}
        </Button>
    );
}
