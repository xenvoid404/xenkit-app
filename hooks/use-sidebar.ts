'use client';
import { useState, useCallback } from 'react';

export function useSidebar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggle = useCallback(() => setIsOpen(prev => !prev), []);

    return {
        isOpen,
        toggle
    };
}
