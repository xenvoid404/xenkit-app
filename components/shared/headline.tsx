import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface HeadlineProps {
    children: ReactNode;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
}

export function Headline({ children, as: Tag = 'h1', className }: HeadlineProps) {
    return (
        <Tag
            className={cn(
                'font-bold leading-[1.1] tracking-tight',
                {
                    'text-3xl sm:text-4xl lg:text-5xl xl:text-6xl': Tag === 'h1',
                    'text-2xl sm:text-3xl lg:text-4xl': Tag === 'h2',
                    'text-xl sm:text-2xl': Tag === 'h3'
                },
                className
            )}
        >
            {children}
        </Tag>
    );
}
