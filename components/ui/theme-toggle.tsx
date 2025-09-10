'use client';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const isDarkMode = resolvedTheme === 'dark';

    const toggleTheme = () => {
        setTheme(isDarkMode ? 'light' : 'dark');
    };

    return (
        <Button type="button" variant="ghost" onClick={toggleTheme} aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} theme`}>
            {isDarkMode ? (
                <Sun className="size-5 text-yellow-600 hover:rotate-90 transition-all duration-300 ease-in-out" />
            ) : (
                <Moon className="size-5 text-slate-600 hover:-rotate-12 transition-all duration-300 ease-in-out" />
            )}
        </Button>
    );
}
