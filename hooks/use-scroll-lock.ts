'use client';
import { useCallback } from 'react';

export function useScrollLock() {
    const lockScroll = useCallback(() => {
        const body = document.querySelector('body');
        if (body) {
            if (!body.style.getPropertyValue('--original-overflow')) {
                const originalOverflow = window.getComputedStyle(body).overflow;
                body.style.setProperty('--original-overflow', originalOverflow);
            }
            body.style.overflow = 'hidden';
        }
    }, []);

    const unlockScroll = useCallback(() => {
        const body = document.querySelector('body');
        if (body) {
            const originalOverflow = body.style.getPropertyValue('--original-overflow');
            body.style.overflow = originalOverflow || '';
        }
        body.style.removeProperty('--original-overflow');
    }, []);

    return [lockScroll, unlockScroll];
}
