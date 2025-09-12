'use client';
import { useState, useEffect } from 'react';

export function useMobile() {
    const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);
    const MOBILE_BREAKPOINT = 768;

    useEffect(() => {
        const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
        const onChange = () => {
            setIsMobile(mql.matches);
        };

        mql.addEventListener('change', onChange);
        onChange();

        return () => mql.removeEventListener('change', onChange);
    }, []);

    return isMobile;
}
