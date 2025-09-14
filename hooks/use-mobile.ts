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

        if (mql.addEventListener) {
            mql.addEventListener('change', onChange);
        } else {
            mql.addListener(onChange);
        }

        onChange();

        return () => {
            if (mql.removeEventListener) {
                mql.removeEventListener('change', onChange);
            } else {
                mql.removeListener(onChange);
            }
        };
    }, []);

    return isMobile;
}
