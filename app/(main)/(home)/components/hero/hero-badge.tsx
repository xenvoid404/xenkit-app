'use client';
import { Badge } from '@/components/ui/badge';
import { Wrench } from 'lucide-react';
import { AnimatedSlideUp } from '@/components/motion/animations';

export function HeroBadge() {
    return (
        <AnimatedSlideUp>
            <Badge variant="outline" className="gap-3 py-3 px-4 text-primary text-xs">
                <Wrench className="size-5" />
                <span>25+ Developer Tools Available</span>
            </Badge>
        </AnimatedSlideUp>
    );
}
