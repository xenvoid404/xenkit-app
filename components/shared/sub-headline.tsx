import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

interface SubHeadlineProps {
    children: ReactNode;
    className?: string;
}

export function SubHeadline({ children, className }: SubHeadlineProps) {
    return <p className={cn('mx-auto max-w-4xl leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl', className)}>{children}</p>;
}
